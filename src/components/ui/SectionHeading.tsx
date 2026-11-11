"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {/* Category Pill / Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-4 border transition-colors ${
          "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        } ${isCenter ? "mx-auto" : ""}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
        {badge}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight"
      >
        {title.split(" ").map((word, i) => {
          // Highlight accent keywords in both languages
          const cleanWord = word.replace(/[^a-zA-ZÀ-ÿ]/g, "");
          const isAccent = [
            "AI",
            "IA",
            "Applications",
            "Projects",
            "Projets",
            "Skills",
            "Compétences",
            "Education",
            "Formation",
            "Together",
            "Ensemble",
            "Full",
            "Stack",
            "Solutions",
            "Intelligente",
            "Intelligence",
          ].includes(cleanWord);

          return (
            <span
              key={i}
              className={
                isAccent
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-violet-300 dark:to-cyan-400 font-extrabold"
                  : ""
              }
            >
              {word}{" "}
            </span>
          );
        })}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
