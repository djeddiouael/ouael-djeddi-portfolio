"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = [
    { label: t.projects.filters.all, id: "All" },
    { label: t.projects.filters.ai, id: "AI & Deep Learning" },
    { label: t.projects.filters.scraping, id: "Web Scraping" },
    { label: t.projects.filters.web, id: "Web & Full Stack" },
    { label: t.projects.filters.iot, id: "IoT & Embedded" },
  ];

  const projectList = [
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
      stats: [
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
      stats: [
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
      tags: ["Full Stack", "Web Development", "Node.js", "Database", "UI/UX"],
      highlights: t.projects.items.university.highlights,
      githubUrl: "https://github.com/djeddiouael",
      visualType: "university-platform" as const,
      stats: [
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
      githubUrl: "https://github.com/djeddiouael",
      liveUrl: "https://wokwi.com",
      demoNote: "Interactive circuit simulation on Wokwi",
      visualType: "iot-simulation" as const,
      stats: [
        { label: t.projects.labels.field, value: "Embedded Systems" },
        { label: t.projects.labels.simulator, value: "Wokwi" },
      ],
      glowColor: "purple" as const,
    },
  ];

  const filteredProjects =
    filterCategory === "All"
      ? projectList
      : projectList.filter((p) => p.categoryKey === filterCategory);

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

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                      {project.stats && (
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          {project.stats.map((s, i) => (
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

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
                  {/* GitHub Button */}
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
        </div>
      </div>
    </section>
  );
}
