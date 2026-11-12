import { NextRequest, NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * Real delivery is enabled through Resend (https://resend.com) when the
 * following environment variables are configured:
 *
 *   RESEND_API_KEY       – API key from your Resend dashboard
 *   CONTACT_TO_EMAIL     – inbox that should receive inquiries
 *   CONTACT_FROM_EMAIL   – verified sender, e.g. "Portfolio <contact@yourdomain.com>"
 *                          (defaults to Resend's onboarding sender)
 *
 * If those variables are missing the API never pretends the message was sent:
 * it returns HTTP 503 with `code: "EMAIL_NOT_CONFIGURED"` and the client
 * offers a prefilled mailto fallback instead.
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

type RateEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateEntry>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    // Opportunistically prune expired entries so the map cannot grow forever.
    if (rateLimitStore.size > 500) {
      rateLimitStore.forEach((value, key) => {
        if (value.resetAt <= now) rateLimitStore.delete(key);
      });
    }
    return { limited: false, retryAfter: 0 };
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) {
    return {
      limited: true,
      retryAfter: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  return { limited: false, retryAfter: 0 };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function badRequest(error: string, code = "VALIDATION_ERROR") {
  return NextResponse.json({ success: false, code, error }, { status: 400 });
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { limited, retryAfter } = isRateLimited(ip);
    if (limited) {
      return NextResponse.json(
        {
          success: false,
          code: "RATE_LIMITED",
          error: "Too many messages sent from this address. Please try again later.",
        },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return badRequest("Invalid request body.");
    }

    const { name, email, subject, message, website } = body as Record<string, unknown>;

    // Honeypot: real users never fill this hidden field. Pretend success so
    // bots do not learn that they were blocked.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return badRequest("Please provide a valid name (2–100 characters).");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (typeof email !== "string" || email.trim().length > 254 || !emailRegex.test(email.trim())) {
      return badRequest("Please provide a valid email address.");
    }

    if (typeof subject !== "string" || subject.trim().length < 2 || subject.trim().length > 150) {
      return badRequest("Please provide a subject (2–150 characters).");
    }

    if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 5000) {
      return badRequest("Please provide a message between 10 and 5000 characters.");
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      // Honest failure: the client will offer a mailto fallback instead of
      // showing a fake success screen.
      return NextResponse.json(
        {
          success: false,
          code: "EMAIL_NOT_CONFIGURED",
          error:
            "Email delivery is not configured on this deployment. Please use the direct email link instead.",
        },
        { status: 503 }
      );
    }

    const textBody = [
      `New portfolio inquiry from ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Subject: ${cleanSubject}`,
      "",
      cleanMessage,
    ].join("\n");

    const htmlBody = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 12px">New portfolio inquiry</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(cleanMessage)}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `[Portfolio] ${cleanSubject}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text().catch(() => "");
      console.error("[CONTACT_API] Resend delivery failed:", resendResponse.status, details);
      return NextResponse.json(
        {
          success: false,
          code: "DELIVERY_FAILED",
          error: "The email service could not deliver your message. Please email directly instead.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been delivered to Ouael's inbox.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        code: "SERVER_ERROR",
        error: "An unexpected server error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}
