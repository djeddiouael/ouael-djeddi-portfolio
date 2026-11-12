/**
 * Single source of truth for the public site URL.
 *
 * Set NEXT_PUBLIC_SITE_URL in your hosting provider (Vercel, Netlify, etc.)
 * when you attach a custom domain. The fallback keeps canonical/OG tags
 * valid on the default Vercel deployment.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ouael-djeddi-portfolio.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "DJEDDI Ouael Portfolio";
