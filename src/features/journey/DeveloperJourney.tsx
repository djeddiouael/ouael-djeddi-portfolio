"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Laptop,
  Layers,
  Milestone,
  PencilLine,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

export function DeveloperJourney() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: t.journey.filters.all },
    { id: "academic", label: t.journey.filters.academic },
    { id: "ai", label: t.journey.filters.ai },
    { id: "engineering", label: t.journey.filters.engineering },
    { id: "internship", label: t.journey.filters.internship },
    { id: "freelance", label: t.journey.filters.freelance },
  ];

  const getMilestoneIcon = (category: string) => {
    switch (category) {
      case "academic":
        return <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "ai":
        return <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "engineering":
        return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "internship":
        return <Briefcase className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case "freelance":
        return <Laptop className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Milestone className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  const filteredMilestones =
    activeFilter === "all"
      ? t.journey.milestones
      : t.journey.milestones.filter((m) => m.category === activeFilter);

  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.journey.badge}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/25 font-semibold"
                    : "bg-white/80 dark:bg-[#0c1024]/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-purple-300 dark:border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          <AnimatePresence>
            {filteredMilestones.map((milestone, idx) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Timeline Glowing Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-[#030712] border-2 border-purple-500 dark:border-purple-400 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        milestone.category === "ai"
                          ? "bg-cyan-500 dark:bg-cyan-400"
                          : milestone.category === "engineering"
                          ? "bg-emerald-500 dark:bg-emerald-400"
                          : milestone.category === "internship"
                          ? "bg-amber-500 dark:bg-amber-400"
                          : milestone.category === "freelance"
                          ? "bg-rose-500 dark:bg-rose-400"
                          : "bg-purple-500 dark:bg-purple-400"
                      }`}
                    />
                  </div>
                </div>

                {/* Milestone Content Card */}
                <GlassCard
                  glowColor={
                    milestone.category === "ai"
                      ? "cyan"
                      : milestone.category === "engineering"
                      ? "blue"
                      : milestone.category === "internship"
                      ? "amber"
                      : milestone.category === "freelance"
                      ? "rose"
                      : "purple"
                  }
                  className="p-6 sm:p-7"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] shrink-0">
                        {getMilestoneIcon(milestone.category)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-purple-700 dark:text-purple-400 block">
                          {milestone.categoryLabel}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      {milestone.isPlaceholder && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-mono font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                          <PencilLine className="w-3 h-3" />
                          {t.journey.placeholderLabel}
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                        {milestone.period}
                      </span>
                    </div>
                  </div>

                  {/* Context & Description */}
                  <div className="pt-3 space-y-2">
                    <div className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-300">
                      {t.journey.contextLabel}: {milestone.institutionOrContext}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[10.5px] font-mono bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
