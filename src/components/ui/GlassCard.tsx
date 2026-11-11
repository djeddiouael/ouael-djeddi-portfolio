"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "blue" | "default";
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

  const glowColors = {
    purple: "rgba(168, 85, 247, 0.15)",
    cyan: "rgba(6, 182, 212, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
    default: "rgba(255, 255, 255, 0.08)",
  };

  const borderGlowColors = {
    purple: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]",
    blue: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]",
    default: "hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-[#0c1024]/70 backdrop-blur-xl transition-all duration-300 overflow-hidden",
        interactive && borderGlowColors[glowColor],
        className
      )}
      {...props}
    >
      {/* Interactive spotlight follow effect */}
      {interactive && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColors[glowColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
