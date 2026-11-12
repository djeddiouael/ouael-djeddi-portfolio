"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const focusCards = [
    {
      title: t.about.focusAreas.ai.title,
      description: t.about.focusAreas.ai.desc,
      icon: <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      glowColor: "purple" as const,
    },
    {
      title: t.about.focusAreas.fullstack.title,
      description: t.about.focusAreas.fullstack.desc,
      icon: <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      glowColor: "cyan" as const,
    },
    {
      title: t.about.focusAreas.vision.title,
      description: t.about.focusAreas.vision.desc,
      icon: <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      glowColor: "purple" as const,
    },
    {
      title: t.about.focusAreas.iot.title,
      description: t.about.focusAreas.iot.desc,
      icon: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      glowColor: "cyan" as const,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.about.badge}
          title={t.about.title}
          subtitle={t.about.subtitle}
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
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {t.about.cardTitle}
                  </h3>
                  <p className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">
                    {t.about.cardRole}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              {/* Core Attributes */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{t.about.bullets.algorithms}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{t.about.bullets.deepLearning}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.about.bullets.webArchitecture}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: 4 Focus Area Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {focusCards.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glowColor={area.glowColor}
                  className="p-6 h-full flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {area.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>AREA 0{index + 1}</span>
                    <span className="text-purple-600 dark:text-purple-400/80 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors font-medium">
                      {t.about.activeExploration}
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
