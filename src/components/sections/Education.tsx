"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, School, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  const educationEntries = [
    {
      degree: t.education.masterDegree,
      specialization: t.education.masterSpec,
      institution: t.education.masterInst,
      location: t.education.masterLoc,
      description: t.education.masterDesc,
      tags: [
        t.education.tags.ai,
        t.education.tags.ml,
        t.education.tags.systems,
        t.education.tags.cs,
      ],
      isCurrent: true,
    },
    {
      degree: t.education.bachelorDegree,
      institution: t.education.bachelorInst,
      location: t.education.bachelorLoc,
      description: t.education.bachelorDesc,
      tags: [
        t.education.tags.algorithms,
        t.education.tags.dataStructures,
        t.education.tags.softwareEng,
        t.education.tags.math,
      ],
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.education.badge}
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        {/* Education Timeline */}
        <div className="relative border-l-2 border-purple-300 dark:border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationEntries.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white dark:bg-[#030712] border-2 border-purple-500 dark:border-purple-400 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      edu.isCurrent ? "bg-cyan-500 dark:bg-cyan-400 animate-ping" : "bg-purple-500 dark:bg-purple-400"
                    }`}
                  />
                </div>
              </div>

              {/* Education Content Card */}
              <GlassCard
                glowColor={edu.isCurrent ? "purple" : "default"}
                className="p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    {edu.specialization && (
                      <p className="text-xs sm:text-sm font-mono text-purple-700 dark:text-cyan-300 font-semibold">
                        {edu.specialization}
                      </p>
                    )}
                  </div>

                  {edu.isCurrent && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />{" "}
                      {t.education.currentStudies}
                    </span>
                  )}
                </div>

                {/* Institution & Location details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 py-3">
                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-slate-300 font-semibold">
                    <School className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                  {edu.description}
                </p>

                {/* Module / Subject Tags */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
