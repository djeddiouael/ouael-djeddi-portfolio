"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { trackEvent } from "@/lib/analytics";

interface SmartCVCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SmartCVCenter({ isOpen, onClose }: SmartCVCenterProps) {
  const { t, language } = useLanguage();
  const [selectedProfile, setSelectedProfile] = useState<"fullstack" | "ai">("fullstack");
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close with Escape for keyboard users.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProfileData = t.smartCV.profiles[selectedProfile];

  const handleDownloadAttempt = (profileKey: "fullstack" | "ai") => {
    trackEvent("cv_download_click", { profile: profileKey, language });
    setSelectedProfile(profileKey);

    // Check if the file exists on the server via HEAD request
    const filePath = `/cv/${t.smartCV.profiles[profileKey].filename}`;
    fetch(filePath, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          // If available, trigger genuine download
          const link = document.createElement("a");
          link.href = filePath;
          link.download = t.smartCV.profiles[profileKey].filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // If not yet uploaded, show clear, professional notice
          setNoticeOpen(true);
        }
      })
      .catch(() => {
        setNoticeOpen(true);
      });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-white/[0.12] bg-white dark:bg-[#070b1e] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Top subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.05] transition-colors"
            aria-label={t.smartCV.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 space-y-1 pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {t.smartCV.badge}
            </div>
            <h2 id="cv-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {t.smartCV.modalTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {t.smartCV.modalSubtitle}
            </p>
          </div>

          {/* Notice State if PDF is pending */}
          {noticeOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-3"
            >
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold">{t.smartCV.noticeTitle}</h4>
                  <p className="text-xs leading-relaxed text-amber-800 dark:text-amber-300">
                    {t.smartCV.noticeMessage}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-amber-200/80 dark:bg-amber-400/20 text-amber-900 dark:text-amber-100 hover:bg-amber-300 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? "Copied" : PERSONAL_INFO.contact.email}
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setNoticeOpen(false);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-700 dark:text-purple-300 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {t.smartCV.contactInstead}
                </a>
              </div>
            </motion.div>
          )}

          {/* Two Profile Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Profile 1: Full Stack */}
            <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#0c112b] p-5 flex flex-col justify-between space-y-4 hover:border-purple-400/50 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                  <FileText className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase">Profile 01</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.smartCV.profiles.fullstack.title}
                </h3>
                <p className="text-xs text-purple-700 dark:text-purple-300 font-mono">
                  {t.smartCV.profiles.fullstack.tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.smartCV.profiles.fullstack.description}
                </p>

                {/* Core Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {t.smartCV.profiles.fullstack.competencies.map((c) => (
                    <span
                      key={c}
                      className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleDownloadAttempt("fullstack")}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{t.smartCV.downloadPdf}</span>
              </button>
            </div>

            {/* Profile 2: AI & Computer Vision */}
            <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#0c112b] p-5 flex flex-col justify-between space-y-4 hover:border-cyan-400/50 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                  <FileText className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase">Profile 02</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.smartCV.profiles.ai.title}
                </h3>
                <p className="text-xs text-cyan-700 dark:text-cyan-300 font-mono">
                  {t.smartCV.profiles.ai.tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.smartCV.profiles.ai.description}
                </p>

                {/* Core Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {t.smartCV.profiles.ai.competencies.map((c) => (
                    <span
                      key={c}
                      className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleDownloadAttempt("ai")}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{t.smartCV.downloadPdf}</span>
              </button>
            </div>
          </div>

          {/* Bottom helper */}
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>DJEDDI Ouael • M2 IA Appliquée</span>
            <span>PDF Format • Clean ATS Layout</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
