"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

export function TechnicalCapabilities() {
  const { t, language } = useLanguage();

  const domainCards = [
    {
      id: "cv-deeplearning",
      title:
        language === "fr"
          ? "Vision par Ordinateur & Transformations Tensorielles"
          : "Computer Vision & Deep Tensor Transformations",
      role:
        language === "fr"
          ? "Réseaux Neuronaux Convolutifs & Super-Résolution"
          : "Convolutional Neural Networks & Super-Resolution",
      projectRef: "#projects",
      projectTitle: "Single Image Super-Resolution",
      tech: ["PyTorch", "Python", "NumPy", "Deep Learning"],
      icon: <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      glowColor: "purple" as const,
      description:
        language === "fr"
          ? "Conception et entraînement de modèles d'apprentissage profond pour reconstruire des images haute définition à partir d'entrées dégradées à basse résolution, avec extraction de caractéristiques multi-échelles."
          : "Designing and training deep neural network architectures to reconstruct high-fidelity features from low-resolution inputs through multi-scale convolutional residual representations.",
      architecturalPoints: [
        language === "fr"
          ? "Cartographie résiduelle et extraction de textures haute fréquence"
          : "Residual feature mapping & high-frequency texture extraction",
        language === "fr"
          ? "Couches d'upsampling sous-pixel (PixelShuffle) optimisées"
          : "Sub-pixel convolutional upsampling (PixelShuffle) optimization",
        language === "fr"
          ? "Surveillance de la convergence avec pertes L1 et perceptuelles"
          : "Loss convergence tracking with L1, MSE, and perceptual gradients",
      ],
      specBadge: "PyTorch • CUDA / CPU",
    },
    {
      id: "web-mining",
      title:
        language === "fr"
          ? "Extraction Automatisée & Traitement de Données Web"
          : "Automated Web Mining & Resilient Data Extraction",
      role:
        language === "fr"
          ? "Parsers Déterministes & Pipelines de Normalisation"
          : "Deterministic Crawlers & Data Normalization",
      projectRef: "#projects",
      projectTitle: "Python Books Web Scraper",
      tech: ["Python", "BeautifulSoup4", "Requests", "Pandas"],
      icon: <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      glowColor: "cyan" as const,
      description:
        language === "fr"
          ? "Développement de scripts d'extraction robustes capables de parcourir des catalogues paginés, d'analyser l'arbre DOM et de sérialiser des jeux de données tabulaires structurés."
          : "Engineering deterministic extraction workflows that systematically traverse paginated endpoints, isolate DOM nodes, and serialize tabular datasets into clean schemas.",
      architecturalPoints: [
        language === "fr"
          ? "Gestion résiliente des sessions HTTP et en-têtes réalistes"
          : "Resilient HTTP session pooling & robust request headers",
        language === "fr"
          ? "Sélection et assainissement hiérarchique des sélecteurs CSS/HTML"
          : "Hierarchical CSS/HTML selector querying and sanitization",
        language === "fr"
          ? "Structuration et validation tabulaire via DataFrames Pandas"
          : "Structured schema normalization via Pandas DataFrames",
      ],
      specBadge: "BeautifulSoup4 • Pandas",
    },
    {
      id: "fullstack-systems",
      title:
        language === "fr"
          ? "Architecture Web Full Stack & Modélisation Relationnelle"
          : "Full-Stack System Design & Relational Modeling",
      role:
        language === "fr"
          ? "Applications Web Modernes & Flux Transactionnels"
          : "Enterprise Web Applications & Transactional Workflows",
      projectRef: "#projects",
      projectTitle: "University Transfer Platform",
      tech: ["TypeScript", "Next.js", "Node.js", "Tailwind CSS"],
      icon: <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      glowColor: "blue" as const,
      description:
        language === "fr"
          ? "Architecture de plateformes web complètes respectant la séparation client/serveur, la validation stricte des formulaires et l'intégrité des données universitaires."
          : "Architecting end-to-end web platforms adhering to clear client/server boundaries, rigorous input validation, role-based routing, and academic data integrity.",
      architecturalPoints: [
        language === "fr"
          ? "Séparation Server/Client Components avec Next.js App Router"
          : "Strict Server/Client Component decoupling with Next.js",
        language === "fr"
          ? "Validation typée des flux de données et intégrité relationnelle"
          : "Type-safe data flow validation and relational schema hygiene",
        language === "fr"
          ? "Interfaces ergonomiques accessibles et réactives (WCAG AA)"
          : "Responsive, accessible UI architectures with WCAG AA standards",
      ],
      specBadge: "Next.js • TypeScript",
    },
    {
      id: "embedded-iot",
      title:
        language === "fr"
          ? "Systèmes Embarqués & Télémétrie Matérielle"
          : "Embedded Systems & Hardware Telemetry",
      role:
        language === "fr"
          ? "Logique Microcontrôleur & Simulation Virtuelle"
          : "Microcontroller Firmware & Simulation Emulation",
      projectRef: "#projects",
      projectTitle: "SEI IoT Project (Wokwi)",
      tech: ["C++", "Wokwi Simulation", "Microcontrollers", "Sensors"],
      icon: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      glowColor: "cyan" as const,
      description:
        language === "fr"
          ? "Conception de circuits électroniques simulés avec lecture de capteurs analogiques/numériques et boucles d'interruption en temps réel sur la plateforme Wokwi."
          : "Prototyping sensor telemetry circuits, non-blocking polling loops, and threshold alert state machines verified inside the Wokwi hardware emulation environment.",
      architecturalPoints: [
        language === "fr"
          ? "Échantillonnage de capteurs GPIO et conversion analogique-numérique"
          : "GPIO polling routines and analog-to-digital conversions",
        language === "fr"
          ? "Boucles de contrôle d'état et déclenchement d'alertes seuils"
          : "Deterministic state machines and threshold event triggers",
        language === "fr"
          ? "Simulation matérielle complète sans dépendance d'approvisionnement"
          : "Hardware emulation with zero physical component lock-in",
      ],
      specBadge: "Wokwi • C++ Firmware",
    },
  ];

  const architecturalStandards = [
    {
      title:
        language === "fr" ? "Typage Strict & Zéro Faux Positif" : "Strict Type Safety & Zero Any",
      desc:
        language === "fr"
          ? "Codebase TypeScript à 100% typée avec interfaces explicites et typage Python typé, éliminant les bugs d'exécution."
          : "End-to-end typed codebases across TypeScript and Python, enforcing strict interfaces and eliminating runtime type discrepancies.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
    {
      title:
        language === "fr" ? "Pipelines Reproductibles" : "Deterministic & Modular Pipelines",
      desc:
        language === "fr"
          ? "Modules découplés avec gestion de version Git sémantique, scripts de build automatisés et dépendances isolées."
          : "Decoupled component architecture with clean semantic versioning, reproducible builds, and dependency isolation.",
      icon: <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      title:
        language === "fr" ? "Protection de la Vie Privée" : "Privacy-First Architecture",
      desc:
        language === "fr"
          ? "Zéro télémétrie invasive, aucun cookie tiers, exécution locale dans le navigateur et respect strict du Do Not Track."
          : "Zero invasive third-party telemetry, no trackers, client-side execution boundaries, and Do Not Track compliance.",
      icon: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={
            language === "fr" ? "COMPÉTENCES D'INGÉNIERIE" : "ENGINEERING CAPABILITIES"
          }
          title={
            language === "fr"
              ? "Capacités Techniques & Architectures Réalisées"
              : "Technical Capabilities & Architecture Competencies"
          }
          subtitle={
            language === "fr"
              ? "Méthodologies d'ingénierie concrètes appliquées à l'IA, aux architectures web distribuées et aux systèmes embarqués — sans statistiques artificielles."
              : "Concrete engineering methodologies and systems architecture applied across AI, distributed web architectures, and embedded environments — zero invented statistics."
          }
        />

        {/* 4 Core Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {domainCards.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                glowColor={domain.glowColor}
                className="p-6 sm:p-7 h-full flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                      {domain.icon}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-purple-700 dark:text-purple-300 font-semibold">
                      {domain.specBadge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                      {domain.role}
                    </p>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Architectural Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      {language === "fr" ? "Méthodologies Clés :" : "Core Methodologies :"}
                    </span>
                    {domain.architecturalPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {domain.tech.map((tName) => (
                      <span
                        key={tName}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                      >
                        {tName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Reference Anchor */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">
                    {language === "fr" ? "Projet concret :" : "Applied Project :"}
                  </span>
                  <a
                    href={domain.projectRef}
                    className="inline-flex items-center gap-1.5 text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-200 font-medium transition-colors"
                  >
                    <span>{domain.projectTitle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Concrete Architecture Principles (Truthful replacement for fake stats counters) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/70 dark:bg-[#070b1a]/80 backdrop-blur-md">
          <div className="text-left mb-6">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>
                {language === "fr"
                  ? "Normes d'Ingénierie & Principes Architecturaux"
                  : "Architectural Standards & Engineering Principles"}
              </span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === "fr"
                ? "Principes d'ingénierie appliqués à l'ensemble du code, garantissant fiabilité et propreté."
                : "Standardized practices maintained across all projects to ensure maintainability, correctness, and security."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {architecturalStandards.map((std, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50/80 dark:bg-white/[0.02] space-y-2 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-200/60 dark:bg-white/[0.04]">
                    {std.icon}
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {std.title}
                  </h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
