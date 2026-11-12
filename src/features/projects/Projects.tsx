"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink, Filter, Github, Sparkles, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectVisual } from "@/features/projects/ProjectVisual";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";

interface ProjectsProps {
  selectedTechFilter?: string | null;
  onClearTechFilter?: () => void;
}

export function Projects({ selectedTechFilter: externalTechFilter, onClearTechFilter }: ProjectsProps) {
  const { t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [activeTech, setActiveTech] = useState<string | null>(externalTechFilter || null);

  const categories = [
    { label: t.projects.filters.all, id: "All" },
    { label: t.projects.filters.ai, id: "AI & Deep Learning" },
    { label: t.projects.filters.scraping, id: "Web Scraping" },
    { label: t.projects.filters.web, id: "Web & Full Stack" },
    { label: t.projects.filters.iot, id: "IoT & Embedded" },
  ];

  const popularTechList = [
    "Python",
    "PyTorch",
    "Deep Learning",
    "Computer Vision",
    "TypeScript",
    "Node.js",
    "Requests",
    "BeautifulSoup",
    "IoT",
    "Wokwi Simulation",
  ];

  type ProjectCard = {
    id: string;
    title: string;
    tagline: string;
    description: string;
    categoryKey: string;
    categoryDisplay: string;
    tags: string[];
    highlights: string[];
    githubUrl: string;
    liveUrl?: string;
    visualType: "super-resolution" | "scraper" | "university-platform" | "iot-simulation";
    specs: { label: string; value: string }[];
    glowColor: "purple" | "cyan" | "blue";
  };

  const projectList: ProjectCard[] = [
    {
      id: "single-image-super-resolution",
      title: t.projects.items.superRes.title,
      tagline: t.projects.items.superRes.tagline,
      description: t.projects.items.superRes.desc,
      categoryKey: "AI & Deep Learning",
      categoryDisplay: t.projects.filters.ai,
      tags: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "Image Processing"],
      highlights: t.projects.items.superRes.highlights,
      githubUrl: "https://github.com/djeddiouael",
      visualType: "super-resolution" as const,
      specs: [
        { label: t.projects.labels.domain, value: "Computer Vision" },
        { label: t.projects.labels.coreTool, value: "PyTorch & Python" },
      ],
      glowColor: "purple" as const,
    },
    {
      id: "python-books-web-scraper",
      title: t.projects.items.scraper.title,
      tagline: t.projects.items.scraper.tagline,
      description: t.projects.items.scraper.desc,
      categoryKey: "Web Scraping",
      categoryDisplay: t.projects.filters.scraping,
      tags: ["Python", "Requests", "BeautifulSoup", "Data Extraction", "Automation"],
      highlights: t.projects.items.scraper.highlights,
      githubUrl: "https://github.com/djeddiouael",
      visualType: "scraper" as const,
      specs: [
        { label: t.projects.labels.type, value: "Web Scraping" },
        { label: t.projects.labels.coreTool, value: "Requests / BS4" },
      ],
      glowColor: "cyan" as const,
    },
    {
      id: "university-transfer-platform",
      title: t.projects.items.university.title,
      tagline: t.projects.items.university.tagline,
      description: t.projects.items.university.desc,
      categoryKey: "Web & Full Stack",
      categoryDisplay: t.projects.filters.web,
      tags: ["Full Stack", "Web Development", "Node.js", "Database", "UI/UX", "TypeScript"],
      highlights: t.projects.items.university.highlights,
      githubUrl: "https://github.com/djeddiouael",
      visualType: "university-platform" as const,
      specs: [
        { label: t.projects.labels.domain, value: "Higher Education" },
        { label: t.projects.labels.scope, value: "Full Stack App" },
      ],
      glowColor: "blue" as const,
    },
    {
      id: "sei-iot-project",
      title: t.projects.items.iot.title,
      tagline: t.projects.items.iot.tagline,
      description: t.projects.items.iot.desc,
      categoryKey: "IoT & Embedded",
      categoryDisplay: t.projects.filters.iot,
      tags: ["IoT", "Embedded Systems", "Wokwi Simulation", "Sensors", "Microcontroller"],
      highlights: t.projects.items.iot.highlights,
      // Only link to the GitHub profile until a public repository exists.
      githubUrl: "https://github.com/djeddiouael",
      visualType: "iot-simulation" as const,
      specs: [
        { label: t.projects.labels.field, value: "Embedded Systems" },
        { label: t.projects.labels.simulator, value: "Wokwi" },
      ],
      glowColor: "purple" as const,
    },
  ];

  const handleTechClick = (techName: string) => {
    trackEvent("tech_filter_click", { tech: techName });
    if (activeTech === techName) {
      setActiveTech(null);
      if (onClearTechFilter) onClearTechFilter();
    } else {
      setActiveTech(techName);
      setFilterCategory("All");
    }
  };

  const clearAllFilters = () => {
    setActiveTech(null);
    setFilterCategory("All");
    if (onClearTechFilter) onClearTechFilter();
  };

  const filteredProjects = projectList.filter((project) => {
    // If a specific tech is selected, match it against tags
    if (activeTech) {
      const matchTech = project.tags.some(
        (t) => t.toLowerCase() === activeTech.toLowerCase()
      );
      if (!matchTech) return false;
    }

    // Then apply category filter
    if (filterCategory !== "All" && project.categoryKey !== filterCategory) {
      return false;
    }

    return true;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Tech Stack Explorer Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#070b1c]/80 backdrop-blur-md shadow-sm dark:shadow-none space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              <Filter className="w-3.5 h-3.5 text-purple-500" />
              <span>Tech Stack Explorer</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {t.projects.explorerHint}
            </p>
          </div>

          {/* Popular Tech Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {popularTechList.map((tech) => {
              const isSelected = activeTech?.toLowerCase() === tech.toLowerCase();
              return (
                <button
                  key={tech}
                  onClick={() => handleTechClick(tech)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? "bg-purple-600 text-white border-purple-600 font-bold shadow-sm"
                      : "bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.06] hover:border-purple-300 dark:hover:border-purple-500/40"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>

          {/* Active Filter Banner if tech is chosen */}
          {activeTech && (
            <div className="pt-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400">
                  {t.projects.activeTechFilter}:
                </span>
                <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-mono font-bold">
                  {activeTech} ({filteredProjects.length} {t.projects.labels.matchingProjects})
                </span>
              </div>
              <button
                onClick={clearAllFilters}
                className="text-xs font-mono text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <X className="w-3.5 h-3.5" />
                <span>{t.projects.clearFilter}</span>
              </button>
            </div>
          )}
        </div>

        {/* Domain Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filterCategory === cat.id && !activeTech;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setFilterCategory(cat.id);
                  setActiveTech(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/25 font-semibold"
                    : "bg-white/80 dark:bg-[#0c1024]/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlassCard
                  glowColor={project.glowColor}
                  className="p-6 sm:p-7 h-full flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    {/* Visual UI Graphic / Interactive Component */}
                    <ProjectVisual type={project.visualType} />

                    {/* Project Info Header */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20">
                          {project.categoryDisplay}
                        </span>
                        {project.specs && (
                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            {project.specs.map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-transparent">
                                {s.value}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => {
                        const isTagActive = activeTech?.toLowerCase() === tag.toLowerCase();
                        return (
                          <button
                            key={tag}
                            onClick={() => handleTechClick(tag)}
                            title={`Filter projects by ${tag}`}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all border ${
                              isTagActive
                                ? "bg-purple-600 text-white border-purple-600 font-bold"
                                : "bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.06] hover:border-purple-300 dark:hover:border-purple-400/40"
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
                    {/* GitHub Profile Button (repo links land here until a public repo exists) */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/[0.1] hover:border-purple-400/50 transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.projects.labels.viewRepo}</span>
                    </a>

                    {/* Live Demo Button (Only when real demo exists) */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-sm shadow-emerald-500/20 transition-all duration-200"
                      >
                        <span>{t.projects.labels.simulationDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        {t.projects.labels.localPrototype}
                      </span>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
