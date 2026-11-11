"use client";

import Script from "next/script";
import { isDoNotTrackEnabled } from "@/lib/analytics";
import { useEffect, useState } from "react";

export function PrivacyAnalytics() {
  const [canTrack, setCanTrack] = useState(false);

  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptSrc =
    process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";

  useEffect(() => {
    if (!isDoNotTrackEnabled() && websiteId) {
      setCanTrack(true);
    }
  }, [websiteId]);

  if (!canTrack || !websiteId) {
    return null;
  }

  return (
    <Script
      src={scriptSrc}
      data-website-id={websiteId}
      strategy="lazyOnload"
      data-auto-track="true"
      data-do-not-track="true"
    />
  );
}
