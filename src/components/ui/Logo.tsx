"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  variant?: "vector" | "3d";
}

export function Logo({
  size = "md",
  showText = true,
  className = "",
  variant = "vector",
}: LogoProps) {
  const sizeMap = {
    sm: { box: "w-8 h-8", text: "text-sm", sub: "text-[9px]", iconSize: 32 },
    md: { box: "w-9 h-9 sm:w-10 sm:h-10", text: "text-base sm:text-lg", sub: "text-[10px]", iconSize: 40 },
    lg: { box: "w-12 h-12", text: "text-xl", sub: "text-xs", iconSize: 48 },
    xl: { box: "w-16 h-16", text: "text-2xl", sub: "text-sm", iconSize: 64 },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Logo Emblem Icon */}
      <div className={`relative ${currentSize.box} shrink-0 group`}>
        {/* Ambient Glow */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-40 dark:opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100" />

        {variant === "3d" ? (
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-purple-500/30 dark:border-purple-500/40 shadow-md dark:shadow-lg bg-white dark:bg-transparent transition-colors duration-300">
            <Image
              src="/logo-3d.png"
              alt="DJEDDI Ouael Logo"
              width={currentSize.iconSize}
              height={currentSize.iconSize}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ) : (
          /* High-Precision Cyber-AI Vector Emblem — adapts to light & dark themes */
          <div className="relative w-full h-full rounded-xl bg-white dark:bg-[#090d20] border border-purple-500/30 dark:border-purple-500/40 p-1 flex items-center justify-center shadow-md dark:shadow-lg transition-colors duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_6px_rgba(168,85,247,0.25)] dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="logoAccent" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="50%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
                <radialGradient id="logoCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#A855F7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#030712" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Hexagon Perimeter — white in light mode, deep navy in dark mode */}
              <path
                d="M50 7 L86 28 L86 72 L50 93 L14 72 L14 28 Z"
                className="fill-slate-50 dark:fill-[#070b1a] transition-colors duration-300"
                stroke="url(#logoPrimary)"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Core Lighting */}
              <circle cx="50" cy="50" r="26" fill="url(#logoCore)" />

              {/* Neural Circuit Lines */}
              <g
                className="opacity-60 dark:opacity-45"
                stroke="url(#logoAccent)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              >
                <line x1="50" y1="20" x2="50" y2="80" />
                <line x1="26" y1="50" x2="74" y2="50" />
                <line x1="32" y1="35" x2="68" y2="65" />
                <line x1="32" y1="65" x2="68" y2="35" />
              </g>

              {/* Monogram "OD" Curves */}
              <path
                d="M50 22 C33 22 23 34 23 50 C23 66 33 78 50 78"
                stroke="url(#logoPrimary)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              <path
                d="M50 22 C67 22 77 34 77 50 C77 66 67 78 50 78"
                stroke="url(#logoAccent)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />

              {/* Central Diamond Core */}
              <polygon points="50,42 58,50 50,58 42,50" fill="url(#logoPrimary)" />
              <circle cx="50" cy="50" r="2.2" fill="#FFFFFF" />

              {/* Neural Nodes */}
              <circle cx="50" cy="22" r="3.5" fill="#C084FC" />
              <circle cx="50" cy="78" r="3.5" fill="#22D3EE" />
              <circle cx="23" cy="50" r="3.5" fill="#818CF8" />
              <circle cx="77" cy="50" r="3.5" fill="#06B6D4" />
            </svg>
          </div>
        )}
      </div>

      {/* Typography Brand Block */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-wider ${currentSize.text} text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-purple-100 dark:to-purple-300 leading-none`}
          >
            OUAEL
          </span>
          <span
            className={`${currentSize.sub} font-mono text-purple-600 dark:text-cyan-400 tracking-widest mt-1 font-bold leading-none`}
          >
            AI &amp; FULL STACK
          </span>
        </div>
      )}
    </div>
  );
}
