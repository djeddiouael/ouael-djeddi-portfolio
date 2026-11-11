// Privacy-friendly analytics utilities (Umami / Plausible compatible)

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number | boolean>) => void;
    };
    doNotTrack?: string;
  }
}

export function isDoNotTrackEnabled(): boolean {
  if (typeof window === "undefined") return false;
  const navDnt = typeof navigator !== "undefined" ? navigator.doNotTrack : null;
  const winDnt = typeof window !== "undefined" ? window.doNotTrack : null;
  return navDnt === "1" || navDnt === "yes" || winDnt === "1" || winDnt === "yes";
}

export function trackEvent(
  eventName: string,
  eventData?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  if (isDoNotTrackEnabled()) {
    return;
  }

  try {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(eventName, eventData);
    } else if (process.env.NODE_ENV === "development") {
      // In development mode, log for debugging without sending network requests
      console.log(`[PrivacyAnalytics] Event: ${eventName}`, eventData);
    }
  } catch {
    // Fail silently without disrupting user interaction
  }
}
