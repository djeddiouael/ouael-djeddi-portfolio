"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationSchema, translations } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang && (savedLang === "en" || savedLang === "fr")) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        // Detect browser language if available
        const browserLang = navigator.language?.toLowerCase() || "";
        if (browserLang.startsWith("fr")) {
          setLanguageState("fr");
          document.documentElement.lang = "fr";
        } else {
          setLanguageState("en");
          document.documentElement.lang = "en";
        }
      }
    } catch {
      // Fallback silently if localStorage is restricted
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const currentTranslations = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
