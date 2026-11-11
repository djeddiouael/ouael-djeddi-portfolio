"use client";

import React, { useEffect, useState } from "react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Personal Logo: OUAEL */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#070b1a] rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              O
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 group-hover:to-cyan-300 transition-all">
              OUAEL
            </span>
            <span className="text-[10px] font-mono text-purple-400 tracking-widest hidden sm:block">
              AI & FULL STACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 border border-white/[0.08] bg-[#0c1024]/60 backdrop-blur-md shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-500/30 border border-purple-500/40 -z-10 shadow-[0_0_12px_rgba(168,85,247,0.3)]" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Status Pill & Contact CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to AI Collab</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-200"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl border border-white/[0.1] bg-[#070b1a]/95 backdrop-blur-2xl p-5 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-purple-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Collaboration</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
