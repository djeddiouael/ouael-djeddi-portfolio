"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  Youtube,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side quick checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter a valid name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter a subject.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a message of at least 10 characters.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error: Could not reach the server. Please try again or use direct email.");
    }
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
    formData.subject || "Collaboration Inquiry"
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="05 // CONTACT & CONNECT"
          title="Let's Build Something Together"
          subtitle="Interested in AI collaboration, research discussions, full-stack web engineering, or project inquiries? Reach out through the form below or via direct channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card */}
            <GlassCard glowColor="purple" className="p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400">Feel free to send an email anytime</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#070b1a] border border-white/[0.08]">
                <span className="text-xs sm:text-sm font-mono text-purple-300 truncate mr-2">
                  {PERSONAL_INFO.contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response window: Within 24-48 hours</span>
              </div>
            </GlassCard>

            {/* Social Channels List */}
            <GlassCard glowColor="cyan" className="p-6 sm:p-7 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Profiles &amp; Networks
              </h3>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#070b1a] border border-white/[0.06] hover:border-purple-500/40 hover:bg-[#0a0f26] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-slate-300 group-hover:text-purple-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">GitHub</span>
                      <span className="text-[11px] font-mono text-slate-400">@djeddiouael</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </a>

                {/* YouTube */}
                <a
                  href={PERSONAL_INFO.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#070b1a] border border-white/[0.06] hover:border-red-500/40 hover:bg-[#0a0f26] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-slate-300 group-hover:text-red-400">
                      <Youtube className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">YouTube Channel</span>
                      <span className="text-[11px] font-mono text-slate-400">@djeddiouael</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#070b1a] border border-white/[0.06] hover:border-blue-500/40 hover:bg-[#0a0f26] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] text-slate-300 group-hover:text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">LinkedIn Profile</span>
                      <span className="text-[11px] font-mono text-slate-400">DJEDDI Ouael</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="purple" className="p-6 sm:p-8">
              <div className="flex items-center gap-2 pb-6 mb-6 border-b border-white/[0.08]">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {status === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-purple-300 font-semibold">{formData.name}</span>. Your message was received and logged. Ouael will review and respond promptly.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                      <span>Also Open in Email Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1]"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070b1a] border border-white/[0.1] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                        Your Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070b1a] border border-white/[0.1] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-slate-300 block">
                      Subject <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. AI Research Collaboration / Full Stack Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070b1a] border border-white/[0.1] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                      Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message, project idea, or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070b1a] border border-white/[0.1] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 hover:bg-pos-100 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating &amp; Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono pt-2">
                    Direct validation via Next.js backend • No third-party trackers
                  </p>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
