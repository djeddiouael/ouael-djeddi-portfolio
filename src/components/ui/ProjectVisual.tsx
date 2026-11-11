"use client";

import React, { useState } from "react";
import { Activity, ArrowRight, CheckCircle2, Cpu, Database, Eye, FileText, Layers, RefreshCw, Terminal } from "lucide-react";

interface ProjectVisualProps {
  type: "super-resolution" | "scraper" | "university-platform" | "iot-simulation";
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  // Slider state for Super-Resolution
  const [sliderPos, setSliderPos] = useState(55);

  if (type === "super-resolution") {
    return (
      <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#060919] border border-purple-500/20 select-none group">
        {/* Background neural grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        {/* High-Resolution side (Background) */}
        <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-purple-950/40 via-[#0a0d25] to-cyan-950/30">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Crisp Neural Pattern */}
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-2xl shadow-purple-500/40">
              <div className="w-full h-full rounded-2xl bg-[#090d24] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3)_0%,transparent_70%)]" />
                <Eye className="w-12 h-12 text-cyan-300 mb-2 relative z-10 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <span className="text-xs font-mono font-bold text-white tracking-widest relative z-10">
                  4X RECONSTRUCTION
                </span>
                <span className="text-[10px] font-mono text-cyan-300/80 relative z-10">
                  High-Frequency Restored
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Low-Resolution pixelated side (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden bg-[#050713]/95 border-r-2 border-purple-400 backdrop-blur-sm"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6" style={{ minWidth: "100%" }}>
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl bg-slate-800/80 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center p-4">
              {/* Pixelated grid effect */}
              <div className="grid grid-cols-4 gap-1.5 w-24 h-24 opacity-60 mb-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      i % 3 === 0 ? "bg-purple-500/60" : i % 2 === 0 ? "bg-cyan-500/50" : "bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                LOW-RES INPUT
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Degraded Bicubic
              </span>
            </div>
          </div>
        </div>

        {/* Interactive slider controller handle */}
        <input
          type="range"
          min="10"
          max="90"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Super resolution comparison slider"
        />

        <div
          className="pointer-events-none absolute top-0 bottom-0 z-20 flex flex-col items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white shadow-lg shadow-purple-500/50 flex items-center justify-center text-[10px] font-bold text-white">
            ⟷
          </div>
        </div>

        {/* Floating Metrics Badge */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
          <span className="text-purple-400 font-bold">PSNR: 33.8 dB</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">Scale: 4x SR</span>
        </div>
      </div>
    );
  }

  if (type === "scraper") {
    return (
      <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#060817] border border-cyan-500/20 p-4 font-mono text-xs flex flex-col justify-between">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold">crawler_pipeline.py</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            HTTP 200 OK
          </span>
        </div>

        {/* Simulated Crawl Logs */}
        <div className="space-y-1.5 py-2 text-[11px] leading-relaxed text-slate-300 font-mono">
          <div className="text-purple-400 flex items-center gap-1.5">
            <span className="text-slate-500">$</span> python books_scraper.py --target-all
          </div>
          <div className="text-slate-400 text-[10.5px]">
            [19:34:02] Initializing Requests session with custom User-Agent...
          </div>
          <div className="text-cyan-300 text-[10.5px] flex items-center gap-1">
            <span>↳ Crawling Page 01..12:</span>
            <span className="text-emerald-400">100% [====================]</span>
          </div>
          <div className="bg-[#0c122e] rounded-lg p-2.5 border border-white/[0.06] text-[10.5px] space-y-1">
            <div className="text-slate-400 flex justify-between">
              <span className="text-amber-300 font-medium truncate max-w-[200px]">
                Neural Networks &amp; Deep Learning
              </span>
              <span className="text-emerald-400 font-bold">$48.50</span>
            </div>
            <div className="text-slate-400 flex justify-between">
              <span className="text-amber-300 font-medium truncate max-w-[200px]">
                Automated Web Mining Systems
              </span>
              <span className="text-emerald-400 font-bold">$39.99</span>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Database className="w-3 h-3 text-cyan-400" />
            <span>Extracted: 1,000+ records</span>
          </div>
          <span className="text-emerald-400 font-medium">Export: books_catalog.csv</span>
        </div>
      </div>
    );
  }

  if (type === "university-platform") {
    return (
      <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#070b1e] border border-blue-500/20 p-4 flex flex-col justify-between">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-white tracking-wide">
              Academic Transfer Portal
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
            Full-Stack Admin
          </span>
        </div>

        {/* Dashboard Cards Preview */}
        <div className="space-y-2 py-2">
          {/* Transfer application 1 */}
          <div className="rounded-lg bg-[#0e1533] p-2.5 border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-300">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-200">Transfer Request #TR-2041</p>
                <p className="text-[10px] text-slate-400 font-mono">CS • Master I2A</p>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" /> Approved
            </span>
          </div>

          {/* Transfer application 2 */}
          <div className="rounded-lg bg-[#0e1533] p-2.5 border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-cyan-500/20 text-cyan-300">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-200">Dossier Evaluation #TR-2042</p>
                <p className="text-[10px] text-slate-400 font-mono">Univ. Transfer Protocol</p>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium flex items-center gap-1">
              <RefreshCw className="w-2.5 h-2.5 animate-spin" /> In Review
            </span>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span>Automated Student Workflow</span>
          <span className="text-blue-400">Node.js + REST API</span>
        </div>
      </div>
    );
  }

  // type === "iot-simulation"
  return (
    <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#060a17] border border-emerald-500/20 p-4 font-mono text-xs flex flex-col justify-between">
      {/* Simulation Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 text-emerald-400">
          <Cpu className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold">Wokwi Virtual Hardware</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          SIMULATION ACTIVE
        </span>
      </div>

      {/* Circuit & Telemetry Layout */}
      <div className="grid grid-cols-2 gap-2.5 py-2">
        {/* Microcontroller schematic preview */}
        <div className="rounded-lg bg-[#0a1127] p-2.5 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="font-bold text-white">ESP32 / MCU</span>
            <Activity className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-[10px] text-slate-400 space-y-1 my-1">
            <div className="flex justify-between">
              <span>GPIO 21 (I2C):</span>
              <span className="text-emerald-400">HIGH</span>
            </div>
            <div className="flex justify-between">
              <span>Baud Rate:</span>
              <span className="text-cyan-400">115200</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full w-3/4 animate-pulse" />
          </div>
        </div>

        {/* Telemetry sensor readouts */}
        <div className="rounded-lg bg-[#0a1127] p-2.5 border border-white/[0.08] flex flex-col justify-between">
          <div className="text-[11px] font-bold text-white">Sensor Telemetry</div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Temp:</span>
              <span className="text-amber-400 font-bold">24.6 °C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Distance:</span>
              <span className="text-cyan-400 font-bold">42.8 cm</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-400 font-bold">NORMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-slate-400">
        <span className="text-purple-400">Embedded C / Logic</span>
        <span className="text-emerald-400">Wokwi Simulator Target</span>
      </div>
    </div>
  );
}
