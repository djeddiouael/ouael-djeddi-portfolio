"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Eye, Github, Sparkles, Terminal, Youtube } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CodeTerminal } from "@/components/ui/CodeTerminal";

export function Hero() {
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
      {/* Background radial spotlights & glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Futuristic grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Bio, CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span>Master&apos;s Specialty I2A • AI &amp; Full Stack</span>
              </div>
            </motion.div>

            {/* Main Greeting Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">Ouael</span>.
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 tracking-tight flex items-center gap-3">
                <span>Full Stack &amp; AI Developer</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* View My Projects Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 hover:bg-pos-100 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-purple-400/40 hover:text-white transition-all duration-300 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Me</span>
              </a>

              {/* GitHub Link Button */}
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* YouTube Link Button */}
              <a
                href={PERSONAL_INFO.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-slate-300 hover:text-red-400 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-red-400/40 transition-all duration-300 hover:scale-105 shadow-sm"
                aria-label="YouTube Channel"
                title="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Tech Highlights Badge Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span>PyTorch &amp; Deep Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Computer Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Next.js &amp; Full Stack</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Futuristic Terminal & Visual Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing neon halo */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-30 blur-xl -z-10 animate-pulse-slow" />

            {/* The Code Terminal */}
            <CodeTerminal />

            {/* Floating Achievement & Focus Badges */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d122e]/90 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/40 text-xs font-mono text-purple-200"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Super-Resolution AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [4, -6, 4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d122e]/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl shadow-cyan-950/40 text-xs font-mono text-cyan-200"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Full Stack &amp; Automation</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
