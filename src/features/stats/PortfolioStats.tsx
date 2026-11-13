"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Cpu, FolderGit2, GraduationCap, Languages } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

/** Animates a number from 0 to `target` the first time it scrolls into view. */
function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}

function StatCard({
  icon,
  value,
  suffix,
  label,
  accent,
  delay,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  accent: string;
  delay: number;
}) {
  const { ref, value: displayed } = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard className="h-full p-5 sm:p-6 text-center sm:text-left">
        <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] ${accent}`}>
          {icon}
        </div>
        <div className="mt-4 flex items-baseline justify-center sm:justify-start gap-1">
          <span
            ref={ref}
            className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white tabular-nums"
          >
            {displayed}
          </span>
          {suffix && (
            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{suffix}</span>
          )}
        </div>
        <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
}

export function PortfolioStats() {
  const { t } = useLanguage();

  // Derived from real project data instead of hardcoded numbers.
  const projectCount = Object.keys(t.projects.items).length;
  const technologyCount = SKILL_CATEGORIES.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  const stats = [
    {
      key: "projects",
      value: projectCount,
      suffix: "+",
      label: t.stats.projects,
      icon: <FolderGit2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      accent: "",
      delay: 0,
    },
    {
      key: "technologies",
      value: technologyCount,
      suffix: "+",
      label: t.stats.technologies,
      icon: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      accent: "",
      delay: 0.08,
    },
    {
      key: "internships",
      value: 3,
      suffix: "",
      label: t.stats.internships,
      icon: <Briefcase className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      accent: "",
      delay: 0.16,
    },
    {
      key: "formations",
      value: 3,
      suffix: "",
      label: t.stats.formations,
      icon: <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      accent: "",
      delay: 0.24,
    },
    {
      key: "languages",
      value: 2,
      suffix: "",
      label: t.stats.languages,
      icon: <Languages className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      accent: "",
      delay: 0.32,
    },
  ];

  return (
    <section id="stats" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.stats.badge} title={t.stats.title} subtitle={t.stats.subtitle} />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((stat) => (
            <StatCard
              key={stat.key}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              accent={stat.accent}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
