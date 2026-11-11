"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, Github, Terminal, Youtube } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CodeTerminal } from "@/components/ui/CodeTerminal";
import { TechIcon } from "@/components/icons/TechIcons";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenCVModal?: () => void;
}

export function Hero({ onOpenCVModal }: HeroProps) {
  const { t, language } = useLanguage();

  // Dynamic Typewriter Animation for writing text
  const titles = useMemo(
    () =>
      language === "fr"
        ? [
            "Développeur Full Stack & IA",
            "Vision par Ordinateur & Deep Learning",
            "Master Intelligence Artificielle (I2A) @ UMBB",
            "Architecte d'Applications Intelligentes",
          ]
        : [
            "Full Stack & AI Developer",
            "Computer Vision & Deep Learning Specialist",
            "AI Master Student (I2A) @ UMBB",
            "Intelligent Web & ML Systems Architect",
          ],
    [language]
  );

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullTitle = titles[currentTitleIndex % titles.length];

    if (!isDeleting) {
      if (displayText.length < currentFullTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullTitle.slice(0, displayText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullTitle.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Animated Glowing Ambient Lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Modern kinetic grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Animated Typewriter Title, Bio, CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Academic Master Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wide backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-500/10 dark:border-purple-500/25 dark:text-purple-300">
                <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
                <span>{t.hero.statusBadge}</span>
              </div>
            </motion.div>

            {/* Main Greeting Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {t.hero.greetingPre}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 dark:from-purple-400 dark:via-violet-300 dark:to-cyan-400">
                  {t.hero.greetingName}
                </span>
                .
              </h1>

              {/* Dynamic Typewriter Writing Animation */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-600 dark:from-purple-300 dark:via-cyan-300 dark:to-emerald-300">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-6 sm:h-8 bg-purple-600 dark:bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons & Vibrant Social Channels */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* View My Projects Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 hover:bg-pos-100 transition-all duration-300 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Download CV CTA */}
              {onOpenCVModal && (
                <button
                  onClick={onOpenCVModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] hover:border-purple-400/50 transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{t.hero.downloadCV}</span>
                </button>
              )}

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] hover:border-purple-400/50 transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.hero.contactMe}</span>
              </a>

              {/* Social Channels with Colorful Brand Icons */}
              <div className="flex items-center gap-2 pl-1">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <TechIcon name="github" size={20} className="w-5 h-5 text-slate-900 dark:text-white" />
                </a>

                {/* YouTube */}
                <a
                  href={PERSONAL_INFO.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] transition-all hover:scale-110 shadow-sm"
                  aria-label="YouTube Channel"
                  title="YouTube Channel"
                >
                  <TechIcon name="youtube" size={20} className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <TechIcon name="linkedin" size={20} className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/djeddiouael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] transition-all hover:scale-110 shadow-sm"
                  aria-label="Facebook Profile"
                  title="Facebook Profile"
                >
                  <TechIcon name="facebook" size={20} className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/djeddiouael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.12] transition-all hover:scale-110 shadow-sm"
                  aria-label="Instagram Profile"
                  title="Instagram Profile"
                >
                  <TechIcon name="instagram" size={20} className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Tech Highlights Badge Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span>{t.hero.highlights.pytorch}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>{t.hero.highlights.vision}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>{t.hero.highlights.nextjs}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Futuristic Windows CMD Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing neon halo */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-20 dark:opacity-30 blur-xl -z-10 animate-pulse-slow" />

            {/* The Windows CMD Terminal */}
            <CodeTerminal />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#0d122e]/90 border border-slate-200 dark:border-purple-500/30 backdrop-blur-xl shadow-lg dark:shadow-xl text-xs font-mono text-purple-700 dark:text-purple-200"
            >
              <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t.hero.floatingBadges.superRes}</span>
            </motion.div>

            <motion.div
              animate={{ y: [4, -6, 4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#0d122e]/90 border border-slate-200 dark:border-cyan-500/30 backdrop-blur-xl shadow-lg dark:shadow-xl text-xs font-mono text-cyan-700 dark:text-cyan-200"
            >
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.hero.floatingBadges.fullstack}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
