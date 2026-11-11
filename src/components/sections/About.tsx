"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Layers, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6 text-purple-400" />,
    Layers: <Layers className="w-6 h-6 text-cyan-400" />,
    Eye: <Eye className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01 // ABOUT ME"
          title="Bridging Artificial Intelligence & Software Engineering"
          subtitle="A dedicated computer science student with a passion for intelligent systems, neural architectures, and robust full stack development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard glowColor="purple" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">DJEDDI Ouael</h3>
                  <p className="text-xs font-mono text-purple-400">Master&apos;s Student • Specialty I2A</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Attributes */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Strong foundation in algorithms &amp; data structures</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Hands-on deep learning &amp; computer vision experiments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Full-cycle web application and pipeline development</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: 4 Focus Area Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {PERSONAL_INFO.about.focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glowColor={index % 2 === 0 ? "purple" : "cyan"}
                  className="p-6 h-full flex flex-col justify-between group hover:border-purple-500/40"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
                      {iconMap[area.icon]}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {area.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>AREA 0{index + 1}</span>
                    <span className="text-purple-400/80 group-hover:text-purple-300 transition-colors">
                      Active Exploration →
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
