import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { UIModalProvider } from "@/context/UIModalContext";
import { PrivacyAnalytics } from "@/components/analytics/PrivacyAnalytics";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = localFont({
  src: "./fonts/Inter-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-latin.woff2",
  weight: "100 800",
  style: "normal",
  variable: "--font-jetbrains",
  display: "swap",
});

const description =
  "Portfolio of DJEDDI Ouael — Full Stack & AI Developer specializing in Artificial Intelligence, Deep Learning, Computer Vision, and modern full-stack web engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DJEDDI Ouael | Full Stack & AI Developer",
  description,
  applicationName: SITE_NAME,
  keywords: [
    "DJEDDI Ouael",
    "Ouael Djeddi",
    "Full Stack Developer",
    "Développeur Full Stack",
    "AI Developer",
    "Développeur IA",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Vision par ordinateur",
    "PyTorch",
    "Next.js",
    "React",
    "TypeScript",
    "UMBB Master I2A",
    "Super Resolution",
    "Software Engineer",
  ],
  authors: [{ name: "DJEDDI Ouael", url: "https://github.com/djeddiouael" }],
  creator: "DJEDDI Ouael",
  publisher: "DJEDDI Ouael",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: SITE_URL,
    title: "DJEDDI Ouael | Full Stack & AI Developer",
    description:
      "Explore intelligent applications, computer vision research, and modern full-stack projects by DJEDDI Ouael.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DJEDDI Ouael — Full Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJEDDI Ouael | Full Stack & AI Developer",
    description:
      "Explore intelligent applications, computer vision research, and modern full-stack projects by DJEDDI Ouael.",
    creator: "@djeddiouael",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/logo-3d.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "DJEDDI Ouael",
  alternateName: "Ouael Djeddi",
  jobTitle: "Full Stack & AI Developer",
  url: SITE_URL,
  image: `${SITE_URL}/avatar.png`,
  email: `mailto:${PERSONAL_INFO.contact.email}`,
  sameAs: [
    PERSONAL_INFO.contact.github,
    PERSONAL_INFO.contact.linkedin,
    PERSONAL_INFO.contact.youtube,
    PERSONAL_INFO.contact.facebook,
    PERSONAL_INFO.contact.instagram,
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University M'Hamed Bougara of Boumerdes (UMBB)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Tebessa",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "PyTorch",
    "TensorFlow",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Anti-flicker script to initialize theme and language immediately before rendering
  const themeInitScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('portfolio_theme') || 'system';
        var isDark = savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        var savedLang = localStorage.getItem('portfolio_lang') || 'en';
        document.documentElement.lang = savedLang;
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased relative selection:bg-purple-600/30 selection:text-purple-200 dark:selection:bg-purple-500/30 dark:selection:text-purple-200 transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-purple-600 focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <ThemeProvider>
            <UIModalProvider>
              <PrivacyAnalytics />
              <ParticleBackground />
              <Navbar />
              <main id="main-content" className="relative z-10 flex flex-col">
                {children}
              </main>
              <Footer />
            </UIModalProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
