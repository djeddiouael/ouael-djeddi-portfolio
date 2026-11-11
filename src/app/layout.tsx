import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "DJEDDI Ouael | Full Stack & AI Developer",
  description:
    "Portfolio of DJEDDI Ouael — Full Stack & AI Developer specializing in Artificial Intelligence, Deep Learning, Computer Vision, and modern full-stack web engineering.",
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/djeddiouael/ouael-djeddi-portfolio",
    title: "DJEDDI Ouael | Full Stack & AI Developer",
    description:
      "Explore intelligent applications, computer vision research, and modern full-stack projects by DJEDDI Ouael.",
    siteName: "DJEDDI Ouael Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJEDDI Ouael | Full Stack & AI Developer",
    description:
      "Explore intelligent applications, computer vision research, and modern full-stack projects by DJEDDI Ouael.",
    creator: "@djeddiouael",
  },
  icons: {
    icon: "/icon.svg",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen antialiased relative selection:bg-purple-600/30 selection:text-purple-200 dark:selection:bg-purple-500/30 dark:selection:text-purple-200 transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            <ParticleBackground />
            <Navbar />
            <main className="relative z-10 flex flex-col">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
