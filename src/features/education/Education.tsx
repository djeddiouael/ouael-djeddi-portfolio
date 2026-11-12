"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, CheckCircle2, GraduationCap, MapPin, School, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

export function Education() {
  const { t, language } = useLanguage();

  const educationEntries = [
    {
      period: "2023 — " + (language === "fr" ? "Présent" : "Present"),
      degree: t.education.masterDegree,
      specialization: t.education.masterSpec,
      institution: t.education.masterInst,
      location: t.education.masterLoc,
      description: t.education.masterDesc,
      statusBadge: language === "fr" ? "En cours de spécialisation" : "Current Degree Track",
      achievements:
        language === "fr"
          ? [
              "Spécialisation avancée en Intelligence Artificielle et Apprentissage Profond",
              "Projet de recherche appliquée : Super-Résolution d'images (Single Image Super-Resolution)",
              "Modélisation neuronale, Vision par ordinateur et traitement avancé de données",
            ]
          : [
              "Advanced specialization in Artificial Intelligence & Deep Learning systems",
              "Applied engineering research: Single Image Super-Resolution with PyTorch",
              "Neural representations, Computer Vision, and high-dimensional data processing",
            ],
      tags: [
        t.education.tags.ai,
        t.education.tags.ml,
        t.education.tags.systems,
        t.education.tags.cs,
      ],
      isCurrent: true,
      glowColor: "purple" as const,
    },
    {
      period: "2020 — 2023",
      degree: t.education.bachelorDegree,
      specialization: language === "fr" ? "Tronc Commun & Informatique Fondamentale" : "Core Computer Science & Systems",
      institution: t.education.bachelorInst,
      location: t.education.bachelorLoc,
      description: t.education.bachelorDesc,
      statusBadge: language === "fr" ? "Diplôme Obtenu avec Succès" : "Degree Conferred",
      achievements:
        language === "fr"
          ? [
              "Fondements rigoureux en algorithmique, structures de données et complexité",
              "Conception orientée objet, architecture logicielle et modélisation de bases relationnelles",
              "Systèmes d'exploitation, programmation concurrente et réseaux informatiques",
            ]
          : [
              "Rigorous foundations in algorithms, data structures, and computational complexity",
              "Object-oriented software design, relational database schemas, and clean architectures",
              "Operating systems, concurrent execution models, and computer networking",
            ],
      tags: [
        t.education.tags.algorithms,
        t.education.tags.dataStructures,
        t.education.tags.softwareEng,
        t.education.tags.math,
      ],
      isCurrent: false,
      glowColor: "cyan" as const,
    },
  ];

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={language === "fr" ? "PARCOURS ACADÉMIQUE" : "ACADEMIC PATHWAY"}
          title={language === "fr" ? "Formation & Cursus Universitaire" : "Education & Academic Journey"}
          subtitle={
            language === "fr"
              ? "Un cursus universitaire rigoureux en informatique et intelligence artificielle à l'Université M'Hamed Bougara de Boumerdès."
              : "Rigorous university curriculum specializing in computer science and artificial intelligence at UMBB."
          }
        />

        {/* Education Timeline */}
        <div className="relative border-l-2 border-purple-300 dark:border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationEntries.map((edu, idx) => (
            <motion.div
              key={edu.institution + edu.period}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
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
                glowColor={edu.glowColor}
                className="p-6 sm:p-8"
              >
                {/* Header: Degree, Period, Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400 shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    {edu.specialization && (
                      <p className="text-xs sm:text-sm font-mono text-purple-700 dark:text-cyan-300 font-semibold pl-8">
                        {edu.specialization}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                    {/* Period badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5 text-purple-500" />
                      {edu.period}
                    </span>

                    {/* Status badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border flex items-center gap-1.5 shadow-sm ${
                      edu.isCurrent
                        ? "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30"
                        : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20"
                    }`}>
                      {edu.isCurrent ? <Sparkles className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                      {edu.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Institution & Location details */}
                <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-slate-600 dark:text-slate-400 py-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-semibold">
                    <School className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  {edu.description}
                </p>

                {/* Structured Academic Pillars / Achievements */}
                <div className="mt-4 pt-3 space-y-2 border-t border-slate-200 dark:border-white/[0.06]">
                  {edu.achievements.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

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
