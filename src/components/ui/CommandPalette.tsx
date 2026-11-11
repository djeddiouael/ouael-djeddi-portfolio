"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  Copy,
  Cpu,
  Download,
  Eye,
  Github,
  Globe,
  Home,
  Layers,
  Linkedin,
  Mail,
  Milestone,
  Monitor,
  Moon,
  Search,
  Sparkles,
  Sun,
  Terminal,
  User,
  X,
  Youtube,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { trackEvent } from "@/lib/analytics";

interface CommandItem {
  id: string;
  category: "navigation" | "interactive" | "preferences" | "social";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCVModal: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenCVModal }: CommandPaletteProps) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "navigation",
      title: t.commandPalette.items.home,
      subtitle: "#home",
      icon: <Home className="w-4 h-4 text-purple-500" />,
      action: () => scrollToSection("home"),
      keywords: ["home", "accueil", "hero", "intro", "ouael"],
    },
    {
      id: "nav-about",
      category: "navigation",
      title: t.commandPalette.items.about,
      subtitle: "#about",
      icon: <User className="w-4 h-4 text-cyan-500" />,
      action: () => scrollToSection("about"),
      keywords: ["about", "a propos", "bio", "student", "umbb", "etudiant"],
    },
    {
      id: "nav-skills",
      category: "navigation",
      title: t.commandPalette.items.skills,
      subtitle: "#skills",
      icon: <Code2 className="w-4 h-4 text-indigo-500" />,
      action: () => scrollToSection("skills"),
      keywords: ["skills", "competences", "python", "pytorch", "react", "nextjs", "stack"],
    },
    {
      id: "nav-journey",
      category: "navigation",
      title: t.commandPalette.items.journey,
      subtitle: "#journey",
      icon: <Milestone className="w-4 h-4 text-amber-500" />,
      action: () => scrollToSection("journey"),
      keywords: ["journey", "parcours", "roadmap", "timeline", "milestones", "history"],
    },
    {
      id: "nav-capabilities",
      category: "navigation",
      title: t.commandPalette.items.capabilities,
      subtitle: "#capabilities",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      action: () => scrollToSection("capabilities"),
      keywords: ["capabilities", "capacites", "architecture", "deep learning", "cv", "embedded", "engineering"],
    },
    {
      id: "nav-projects",
      category: "navigation",
      title: t.commandPalette.items.projects,
      subtitle: "#projects",
      icon: <Layers className="w-4 h-4 text-emerald-500" />,
      action: () => scrollToSection("projects"),
      keywords: ["projects", "projets", "super resolution", "scraper", "university", "iot"],
    },
    {
      id: "nav-education",
      category: "navigation",
      title: t.commandPalette.items.education,
      subtitle: "#education",
      icon: <BookOpen className="w-4 h-4 text-blue-500" />,
      action: () => scrollToSection("education"),
      keywords: ["education", "formation", "master", "i2a", "umbb", "tebessa"],
    },
    {
      id: "nav-contact",
      category: "navigation",
      title: t.commandPalette.items.contact,
      subtitle: "#contact",
      icon: <Mail className="w-4 h-4 text-pink-500" />,
      action: () => scrollToSection("contact"),
      keywords: ["contact", "email", "message", "hire", "recruter"],
    },

    // Interactive & Lab Tools
    {
      id: "tool-cv",
      category: "interactive",
      title: t.commandPalette.items.smartCV,
      subtitle: "Full Stack & AI PDF Resumes",
      icon: <Download className="w-4 h-4 text-purple-400" />,
      action: () => {
        onClose();
        setTimeout(onOpenCVModal, 150);
      },
      keywords: ["cv", "resume", "pdf", "curriculum", "telecharger", "download"],
    },
    {
      id: "tool-superres",
      category: "interactive",
      title: t.commandPalette.items.superResDemo,
      subtitle: "4x Neural Reconstruction",
      icon: <Eye className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("projects"),
      keywords: ["super resolution", "ai", "vision", "pytorch", "upscale"],
    },
    {
      id: "tool-iot",
      category: "interactive",
      title: t.commandPalette.items.iotSimulation,
      subtitle: "Wokwi Hardware Virtualization",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection("projects"),
      keywords: ["iot", "wokwi", "simulation", "hardware", "esp32"],
    },
    {
      id: "tool-terminal",
      category: "interactive",
      title: t.commandPalette.items.terminal,
      subtitle: "developer.ts / super_resolution.py",
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      action: () => scrollToSection("home"),
      keywords: ["terminal", "code", "typescript", "python"],
    },

    // Preferences & Actions
    {
      id: "act-copy-email",
      category: "preferences",
      title: copiedEmail ? t.commandPalette.items.emailCopied : t.commandPalette.items.copyEmail,
      subtitle: PERSONAL_INFO.contact.email,
      icon: copiedEmail ? (
        <Check className="w-4 h-4 text-emerald-500" />
      ) : (
        <Copy className="w-4 h-4 text-purple-400" />
      ),
      action: handleCopyEmail,
      keywords: ["email", "copy", "copier", "contact", "address"],
    },
    {
      id: "act-theme-dark",
      category: "preferences",
      title: t.commandPalette.items.themeDark,
      subtitle: theme === "dark" ? "Active" : undefined,
      icon: <Moon className="w-4 h-4 text-purple-400" />,
      action: () => {
        setTheme("dark");
        onClose();
      },
      keywords: ["theme", "dark", "sombre", "mode", "noir"],
    },
    {
      id: "act-theme-light",
      category: "preferences",
      title: t.commandPalette.items.themeLight,
      subtitle: theme === "light" ? "Active" : undefined,
      icon: <Sun className="w-4 h-4 text-amber-500" />,
      action: () => {
        setTheme("light");
        onClose();
      },
      keywords: ["theme", "light", "clair", "mode", "blanc"],
    },
    {
      id: "act-theme-system",
      category: "preferences",
      title: t.commandPalette.items.themeSystem,
      subtitle: theme === "system" ? "Active" : undefined,
      icon: <Monitor className="w-4 h-4 text-cyan-400" />,
      action: () => {
        setTheme("system");
        onClose();
      },
      keywords: ["theme", "system", "auto", "os", "systeme"],
    },
    {
      id: "act-lang-en",
      category: "preferences",
      title: t.commandPalette.items.langEn,
      subtitle: language === "en" ? "Active" : undefined,
      icon: <Globe className="w-4 h-4 text-indigo-400" />,
      action: () => {
        setLanguage("en");
        onClose();
      },
      keywords: ["language", "english", "anglais", "en"],
    },
    {
      id: "act-lang-fr",
      category: "preferences",
      title: t.commandPalette.items.langFr,
      subtitle: language === "fr" ? "Active" : undefined,
      icon: <Globe className="w-4 h-4 text-indigo-400" />,
      action: () => {
        setLanguage("fr");
        onClose();
      },
      keywords: ["language", "french", "francais", "fr"],
    },

    // External Profiles
    {
      id: "soc-github",
      category: "social",
      title: t.commandPalette.items.github,
      subtitle: "https://github.com/djeddiouael",
      icon: <Github className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(PERSONAL_INFO.contact.github, "_blank", "noopener,noreferrer");
        onClose();
      },
      keywords: ["github", "git", "repo", "source", "code"],
    },
    {
      id: "soc-youtube",
      category: "social",
      title: t.commandPalette.items.youtube,
      subtitle: "https://www.youtube.com/@djeddiouael",
      icon: <Youtube className="w-4 h-4 text-red-500" />,
      action: () => {
        window.open(PERSONAL_INFO.contact.youtube, "_blank", "noopener,noreferrer");
        onClose();
      },
      keywords: ["youtube", "video", "channel", "chaine"],
    },
    {
      id: "soc-linkedin",
      category: "social",
      title: t.commandPalette.items.linkedin,
      subtitle: "https://linkedin.com/in/ouael-djeddi",
      icon: <Linkedin className="w-4 h-4 text-blue-500" />,
      action: () => {
        window.open(PERSONAL_INFO.contact.linkedin, "_blank", "noopener,noreferrer");
        onClose();
      },
      keywords: ["linkedin", "network", "profile", "pro"],
    },
  ];

  // Search filter
  const query = search.trim().toLowerCase();
  const filteredCommands = commands.filter((cmd) => {
    if (!query) return true;
    const matchTitle = cmd.title.toLowerCase().includes(query);
    const matchSub = cmd.subtitle?.toLowerCase().includes(query);
    const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(query));
    return matchTitle || matchSub || matchKeywords;
  });

  // Group filtered results by category
  const categoriesList: Array<"navigation" | "interactive" | "preferences" | "social"> = [
    "navigation",
    "interactive",
    "preferences",
    "social",
  ];

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case "navigation":
        return t.commandPalette.categories.navigation;
      case "interactive":
        return t.commandPalette.categories.interactive;
      case "preferences":
        return t.commandPalette.categories.preferences;
      case "social":
        return t.commandPalette.categories.social;
      default:
        return cat;
    }
  };

  // Keyboard navigation within filtered list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6"
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Palette Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl border border-slate-200 dark:border-white/[0.12] bg-white dark:bg-[#070b1a] shadow-2xl z-10 overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#0a0f24]">
            <Search className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder={t.commandPalette.placeholder}
              className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400">
              ESC
            </kbd>
          </div>

          {/* Commands List */}
          <div
            ref={listRef}
            className="p-2 overflow-y-auto space-y-4 focus:outline-none"
            tabIndex={-1}
          >
            {filteredCommands.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500 font-mono">
                {t.commandPalette.noResults}
              </div>
            ) : (
              categoriesList.map((catKey) => {
                const groupItems = filteredCommands.filter((c) => c.category === catKey);
                if (groupItems.length === 0) return null;

                return (
                  <div key={catKey} className="space-y-1">
                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                      {getCategoryTitle(catKey)}
                    </div>
                    {groupItems.map((item) => {
                      const overallIdx = filteredCommands.findIndex((c) => c.id === item.id);
                      const isSelected = overallIdx === selectedIndex;

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            trackEvent("command_execute", { command: item.id });
                            item.action();
                          }}
                          onMouseEnter={() => setSelectedIndex(overallIdx)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                            isSelected
                              ? "bg-purple-600 text-white shadow-sm font-semibold"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-1.5 rounded-lg ${
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-slate-100 dark:bg-white/[0.05]"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm block">{item.title}</span>
                              {item.subtitle && (
                                <span
                                  className={`text-[10px] font-mono block ${
                                    isSelected
                                      ? "text-purple-100"
                                      : "text-slate-400 dark:text-slate-500"
                                  }`}
                                >
                                  {item.subtitle}
                                </span>
                              )}
                            </div>
                          </div>

                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Help */}
          <div className="px-4 py-2.5 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#060918] flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>{t.commandPalette.keyboardHint}</span>
            <span className="hidden sm:inline text-purple-600 dark:text-purple-400 font-bold">
              OUAEL • AI &amp; Full Stack
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
