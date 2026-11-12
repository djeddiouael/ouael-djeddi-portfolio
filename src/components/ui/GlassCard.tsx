"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "blue" | "amber" | "rose" | "default";
  interactive?: boolean;
}

export function GlassCard({
  children,
  className,
  glowColor = "purple",
  interactive = true,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColorsDark = {
    purple: "rgba(168, 85, 247, 0.15)",
    cyan: "rgba(6, 182, 212, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
    rose: "rgba(244, 63, 94, 0.15)",
    default: "rgba(255, 255, 255, 0.08)",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-xl",
        // Light mode styling
        "bg-white/80 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] text-slate-900",
        // Dark mode styling
        "dark:bg-[#0c1024]/75 dark:border-white/[0.08] dark:shadow-none dark:text-slate-100",
        // Hover interactive borders
        interactive &&
          "hover:border-purple-400/50 hover:shadow-[0_12px_35px_-8px_rgba(139,92,246,0.15)] dark:hover:border-purple-500/40 dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]",
        className
      )}
      {...props}
    >
      {/* Interactive spotlight follow effect */}
      {interactive && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 hidden dark:block"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColorsDark[glowColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
