"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, Globe2, Sparkles, TerminalSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";
import { useLanguage } from "@/context/LanguageContext";

interface SkillsProps {
  onSelectTech?: (tech: string) => void;
}

export function Skills({ onSelectTech }: SkillsProps) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = [
    { label: t.skills.filters.all, id: "All" },
    { label: t.skills.filters.ai, id: "AI & Machine Learning" },
    { label: t.skills.filters.programming, id: "Programming" },
    { label: t.skills.filters.web, id: "Web Development" },
    { label: t.skills.filters.tools, id: "Tools & Infrastructure" },
  ];

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Programming":
        return <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "AI & Machine Learning":
        return <BrainCircuit className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "Web Development":
        return <Globe2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "Tools & Infrastructure":
        return <TerminalSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  const getTranslatedCategoryTitle = (catKey: string) => {
    switch (catKey) {
      case "Programming":
        return t.skills.categories.programming.title;
      case "AI & Machine Learning":
        return t.skills.categories.ai.title;
      case "Web Development":
        return t.skills.categories.web.title;
      case "Tools & Infrastructure":
        return t.skills.categories.tools.title;
      default:
        return catKey;
    }
  };

  const getTranslatedCategoryDesc = (catKey: string) => {
    switch (catKey) {
      case "Programming":
        return t.skills.categories.programming.desc;
      case "AI & Machine Learning":
        return t.skills.categories.ai.desc;
      case "Web Development":
        return t.skills.categories.web.desc;
      case "Tools & Infrastructure":
        return t.skills.categories.tools.desc;
      default:
        return "";
    }
  };

  // Flattened skills with category reference
  const allSkills = SKILL_CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryKey: category.title,
    }))
  );

  const displayedSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter((s) => s.categoryKey === activeFilter);

  const handleSkillClick = (skillName: string) => {
    if (onSelectTech) {
      onSelectTech(skillName);
      const proj = document.getElementById("projects");
      if (proj) {
        proj.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.skills.badge}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Interactive Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence>
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  glowColor={
                    skill.categoryKey.includes("AI")
                      ? "cyan"
                      : skill.categoryKey.includes("Programming")
                      ? "purple"
                      : skill.categoryKey.includes("Web")
                      ? "blue"
                      : "default"
                  }
                  onClick={() => handleSkillClick(skill.name)}
                  className="p-5 h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform cursor-pointer"
                  title={t.skills.clickToFilter}
                >
                  <div className="space-y-3">
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center p-2.5 text-slate-800 dark:text-white group-hover:scale-110 transition-transform duration-200">
                        <TechIcon name={skill.icon} className="w-6 h-6 text-slate-700 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400">
                        {getTranslatedCategoryTitle(skill.categoryKey)}
                      </span>
                    </div>

                    {/* Skill Name & Translated Description */}
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t.skills.skillItems[skill.name] || skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom indicator tag */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                      {t.skills.activeStack}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400/80 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors font-medium">
                      Explore Projects →
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Categories Overview Banners */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-4 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white/70 dark:bg-[#070b1c]/80 backdrop-blur-md flex items-start gap-3 shadow-sm dark:shadow-none"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] shrink-0 mt-0.5">
                {getCategoryIcon(cat.title)}
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                  {getTranslatedCategoryTitle(cat.title)}
                </h5>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                  {getTranslatedCategoryDesc(cat.title)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
