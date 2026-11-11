"use client";

import React from "react";
import { NAV_ITEMS, PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import { ArrowUp, Github, Heart, Linkedin, Mail, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "youtube":
        return <Youtube className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030614] overflow-hidden pt-16 pb-12">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-600/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5">
                <div className="w-full h-full bg-[#070b1a] rounded-[6px] flex items-center justify-center font-bold text-xs text-purple-300">
                  O
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                OUAEL DJEDDI
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full Stack & AI Developer passionate about artificial intelligence, computer vision, and building high-performance modern web experiences.
            </p>

            {/* Social links row */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 font-semibold">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <span className="text-xs text-slate-500 block">Location</span>
                <span className="text-slate-300">Algeria (UMBB / Tébessa)</span>
              </li>
              <li>
                <span className="text-xs text-slate-500 block">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="text-purple-400 hover:text-purple-300 transition-colors break-all text-xs"
                >
                  {PERSONAL_INFO.contact.email}
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500 block">GitHub Handle</span>
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                >
                  @djeddiouael
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright and back-to-top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <span className="text-slate-300 font-medium">DJEDDI Ouael</span>. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white transition-all duration-200"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
