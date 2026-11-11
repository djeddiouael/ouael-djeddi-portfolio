"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink, Github, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectVisual } from "@/components/ui/ProjectVisual";

export function Projects() {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "AI & Deep Learning", "Web Scraping", "Web & Full Stack", "IoT & Embedded"];

  const filteredProjects =
    filterCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="03 // FEATURED PROJECTS"
          title="Engineered Solutions & Research Prototypes"
          subtitle="Explore selected works across generative computer vision, automated data pipelines, full stack academic management systems, and IoT embedded simulations."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filterCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-purple-600/20 text-white border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.25)] font-semibold"
                    : "bg-[#0c1024]/60 text-slate-400 border-white/[0.08] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
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
                glowColor={
                  project.category.includes("AI")
                    ? "purple"
                    : project.category.includes("Scraping")
                    ? "cyan"
                    : project.category.includes("Full Stack")
                    ? "blue"
                    : "purple"
                }
                className="p-6 sm:p-7 h-full flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Visual UI Graphic / Interactive Component */}
                  <ProjectVisual type={project.visualType} />

                  {/* Project Info Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                        {project.category}
                      </span>
                      {project.stats && (
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                          {project.stats.map((s, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-white/[0.04]">
                              {s.value}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-purple-400/50 hover:text-white transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  {/* Live Demo Button (ONLY when real demo exists) */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-200"
                    >
                      <span>Simulation Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 italic">
                      {project.demoNote || "Local prototype / Model weights"}
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
