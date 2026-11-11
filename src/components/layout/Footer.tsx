"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#030614] overflow-hidden pt-16 pb-12 transition-colors duration-300">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 dark:via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-500/5 dark:bg-purple-600/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="inline-block group focus:outline-none" aria-label="DJEDDI Ouael">
              <Logo size="lg" />
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {t.footer.bio}
            </p>

            {/* Social links row */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm dark:shadow-none"
                  aria-label={link.name}
                >
                  {link.name.toLowerCase() === "email" ? (
                    <span className="text-cyan-500 font-bold text-xs">@</span>
                  ) : (
                    <TechIcon name={link.name} size={18} className="w-4.5 h-4.5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-slate-300 mb-4 font-semibold">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-slate-300 mb-4 font-semibold">
              {t.footer.connect}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">
                  {t.footer.locationLabel}
                </span>
                <span className="text-slate-800 dark:text-slate-300">
                  {t.footer.locationValue}
                </span>
              </li>
              <li>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">
                  {t.footer.emailLabel}
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="text-purple-600 dark:text-purple-400 hover:underline transition-colors break-all text-xs"
                >
                  {PERSONAL_INFO.contact.email}
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-400 dark:text-slate-500 block">
                  {t.footer.githubLabel}
                </span>
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline transition-colors text-xs"
                >
                  @djeddiouael
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright and back-to-top */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <span className="text-slate-900 dark:text-slate-300 font-medium">DJEDDI Ouael</span>.{" "}
            {t.footer.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-all duration-200 shadow-sm dark:shadow-none"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
