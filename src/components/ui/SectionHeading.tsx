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
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-4 border border-purple-500/20 bg-purple-500/10 text-purple-300 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)] ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        {badge}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
      >
        {title.split(" ").map((word, i) => {
          // Highlight key words with vibrant purple/cyan gradient
          const isAccent = ["AI", "Applications", "Projects", "Skills", "Education", "Together", "Full", "Stack"].includes(
            word.replace(/[^a-zA-Z]/g, "")
          );
          return (
            <span
              key={i}
              className={
                isAccent
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 font-extrabold"
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
          className="text-base sm:text-lg text-slate-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
