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
      period: language === "fr" ? "Année universitaire en cours" : "Current Academic Year",
      degree: t.education.masterDegree,
      specialization: t.education.masterSpec,
      institution: t.education.masterInst,
      location: t.education.masterLoc,
      description: t.education.masterDesc,
      statusBadge: language === "fr" ? "En cours" : "In Progress",
      achievements:
        language === "fr"
          ? [
              "Spécialisation en Intelligence Artificielle appliquée et Apprentissage Profond",
              "Projet de recherche appliquée : Super-Résolution d'images (Single Image Super-Resolution)",
              "Modélisation neuronale, Vision par ordinateur et déploiement de systèmes intelligents",
            ]
          : [
              "Specialization in Applied Artificial Intelligence & Deep Learning systems",
              "Applied research project: Single Image Super-Resolution with PyTorch",
              "Neural modeling, Computer Vision, and intelligent system deployment",
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
      period: t.education.yearsToConfirm,
      degree: t.education.licenseDegree,
      specialization: t.education.licenseSpec,
      institution: t.education.licenseInst,
      location: t.education.licenseLoc,
      description: t.education.licenseDesc,
      statusBadge: language === "fr" ? "Diplôme obtenu" : "Degree Conferred",
      achievements:
        language === "fr"
          ? [
              "Architecture des systèmes informatiques et programmation système",
              "Systèmes d'exploitation, réseaux et administration de bases de données",
              "Algorithmique, structures de données et génie logiciel",
            ]
          : [
              "Computer systems architecture and systems programming",
              "Operating systems, networking, and database administration",
              "Algorithms, data structures, and software engineering",
            ],
      tags: [
        t.education.tags.algorithms,
        t.education.tags.dataStructures,
        t.education.tags.softwareEng,
        t.education.tags.cs,
      ],
      isCurrent: false,
      glowColor: "cyan" as const,
    },
    {
      period: "2021 — 2022",
      degree: t.education.mathDegree,
      specialization: t.education.mathSpec,
      institution: t.education.mathInst,
      location: t.education.mathLoc,
      description: t.education.mathDesc,
      statusBadge: language === "fr" ? "Formation universitaire" : "University Studies",
      achievements:
        language === "fr"
          ? [
              "Fondements rigoureux en analyse mathématique, algèbre et probabilités",
              "Raisonnement algorithmique et résolution de problèmes",
              "Initiation à la programmation et aux structures de données",
            ]
          : [
              "Rigorous foundations in mathematical analysis, algebra, and probability",
              "Algorithmic reasoning and structured problem solving",
              "Introduction to programming and data structures",
            ],
      tags: [
        t.education.tags.math,
        t.education.tags.algorithms,
        t.education.tags.cs,
      ],
      isCurrent: false,
      glowColor: "blue" as const,
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
              ? "Trois étapes universitaires : Mathématiques & Informatique à l'Université Larbi Tébessi (Tébessa), Licence académique Système Informatique puis Master Professionnel M2 Intelligence Artificielle Appliquée à l'UMBB Boumerdès."
              : "Three university steps: Mathematics & Computer Science at Larbi Tébessi University (Tébessa), an academic Bachelor's in Computer Systems, then a Professional Master M2 in Applied Artificial Intelligence at UMBB Boumerdès."
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
