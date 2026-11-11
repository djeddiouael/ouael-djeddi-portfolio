"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Menu, Monitor, Moon, Sparkles, Sun, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeMode, useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);

  // Close theme dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "skills", "journey", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
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

  const getThemeIcon = (mode: ThemeMode) => {
    switch (mode) {
      case "light":
        return <Sun className="w-3.5 h-3.5 text-amber-500" />;
      case "dark":
        return <Moon className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <Monitor className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#030712]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Personal Logo: OUAEL */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-white dark:bg-[#070b1a] rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-purple-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300">
              O
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-base sm:text-lg text-slate-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:via-purple-100 dark:to-purple-300 transition-all">
              OUAEL
            </span>
            <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 tracking-widest hidden sm:block font-semibold">
              AI &amp; FULL STACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-0.5 rounded-full px-3.5 py-1.5 border border-slate-200/80 dark:border-white/[0.08] bg-slate-100/70 dark:bg-[#0c1024]/60 backdrop-blur-md shadow-inner">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-purple-700 dark:text-white font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-white dark:bg-gradient-to-r dark:from-purple-600/30 dark:to-cyan-500/30 border border-purple-200 dark:border-purple-500/40 -z-10 shadow-sm dark:shadow-[0_0_12px_rgba(168,85,247,0.3)]" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Language, Theme, Contact */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher Pill (EN / FR) */}
          <div className="flex items-center p-0.5 rounded-full border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#0a0f24] text-xs font-mono">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                language === "en"
                  ? "bg-white dark:bg-purple-600/40 text-purple-700 dark:text-white shadow-sm dark:shadow-[0_0_10px_rgba(168,85,247,0.3)] border border-slate-200 dark:border-purple-400/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
              title="Switch to English"
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                language === "fr"
                  ? "bg-white dark:bg-purple-600/40 text-purple-700 dark:text-white shadow-sm dark:shadow-[0_0_10px_rgba(168,85,247,0.3)] border border-slate-200 dark:border-purple-400/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
              title="Passer en Français"
              aria-label="Passer en Français"
            >
              FR
            </button>
          </div>

          {/* Theme Switcher Dropdown (System / Dark / Light) */}
          <div ref={themeRef} className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-1.5 p-2 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#0a0f24] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition-colors"
              title={`Theme: ${theme}`}
              aria-label="Select color theme"
            >
              {getThemeIcon(theme)}
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200 dark:border-white/[0.12] bg-white dark:bg-[#0a0f26] p-1.5 shadow-xl backdrop-blur-xl z-50 text-xs font-medium space-y-0.5">
                <button
                  onClick={() => {
                    setTheme("system");
                    setThemeDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    theme === "system"
                      ? "bg-purple-50 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Monitor className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{t.nav.themeSystem}</span>
                  </div>
                  {theme === "system" && <Check className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => {
                    setTheme("dark");
                    setThemeDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    theme === "dark"
                      ? "bg-purple-50 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Moon className="w-3.5 h-3.5 text-purple-400" />
                    <span>{t.nav.themeDark}</span>
                  </div>
                  {theme === "dark" && <Check className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => {
                    setTheme("light");
                    setThemeDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    theme === "light"
                      ? "bg-purple-50 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t.nav.themeLight}</span>
                  </div>
                  {theme === "light" && <Check className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-sm shadow-purple-500/30 transition-all duration-200"
          >
            {t.nav.getInTouch}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger & Language Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick Language Toggle on Mobile */}
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/[0.1] bg-slate-100 dark:bg-[#0a0f24] text-xs font-mono font-bold text-slate-800 dark:text-slate-200"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] transition-colors"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl border border-slate-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#070b1a]/95 backdrop-blur-2xl p-5 shadow-2xl space-y-4">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-purple-50 dark:bg-purple-600/20 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-500/30"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />}
                </a>
              );
            })}
          </div>

          {/* Language & Theme Controls row on Mobile */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] space-y-3">
            {/* Language Selection */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono">Language / Langue:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-lg font-mono font-bold ${
                    language === "en"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => setLanguage("fr")}
                  className={`px-3 py-1 rounded-lg font-mono font-bold ${
                    language === "fr"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  Français (FR)
                </button>
              </div>
            </div>

            {/* Theme Selection */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono">Theme:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setTheme("system")}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                    theme === "system"
                      ? "bg-purple-600 text-white font-semibold"
                      : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>{t.nav.themeSystem}</span>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                    theme === "dark"
                      ? "bg-purple-600 text-white font-semibold"
                      : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>{t.nav.themeDark}</span>
                </button>
                <button
                  onClick={() => setTheme("light")}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                    theme === "light"
                      ? "bg-purple-600 text-white font-semibold"
                      : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>{t.nav.themeLight}</span>
                </button>
              </div>
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full block py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
