"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface TabCode {
  filename: string;
  language: string;
  badge: string;
  lines: Array<{
    num: number;
    tokens: Array<{ text: string; color: string }>;
  }>;
}

const TABS: TabCode[] = [
  {
    filename: "developer.ts",
    language: "typescript",
    badge: "TS",
    lines: [
      {
        num: 1,
        tokens: [
          { text: "interface ", color: "text-purple-400" },
          { text: "DeveloperProfile ", color: "text-cyan-300" },
          { text: "{", color: "text-slate-300" },
        ],
      },
      {
        num: 2,
        tokens: [
          { text: "  name: ", color: "text-slate-400" },
          { text: '"DJEDDI Ouael"', color: "text-emerald-400" },
          { text: ";", color: "text-slate-400" },
        ],
      },
      {
        num: 3,
        tokens: [
          { text: "  title: ", color: "text-slate-400" },
          { text: '"Full Stack & AI Developer"', color: "text-emerald-400" },
          { text: ";", color: "text-slate-400" },
        ],
      },
      {
        num: 4,
        tokens: [
          { text: "  education: ", color: "text-slate-400" },
          { text: '"Master Specialty I2A @ UMBB"', color: "text-emerald-400" },
          { text: ";", color: "text-slate-400" },
        ],
      },
      {
        num: 5,
        tokens: [
          { text: "  focus: [", color: "text-slate-400" },
          { text: '"Artificial Intelligence"', color: "text-cyan-300" },
          { text: ", ", color: "text-slate-400" },
          { text: '"Deep Learning"', color: "text-purple-300" },
          { text: ", ", color: "text-slate-400" },
          { text: '"Full Stack"', color: "text-emerald-300" },
          { text: "];", color: "text-slate-400" },
        ],
      },
      {
        num: 6,
        tokens: [
          { text: "  passion: ", color: "text-slate-400" },
          { text: '"Transforming ideas into modern digital experiences"', color: "text-amber-300" },
          { text: ";", color: "text-slate-400" },
        ],
      },
      {
        num: 7,
        tokens: [
          { text: "  status: ", color: "text-slate-400" },
          { text: '"Ready to build & innovate"', color: "text-emerald-400" },
          { text: ";", color: "text-slate-400" },
        ],
      },
      {
        num: 8,
        tokens: [{ text: "}", color: "text-slate-300" }],
      },
    ],
  },
  {
    filename: "super_resolution.py",
    language: "python",
    badge: "PY",
    lines: [
      {
        num: 1,
        tokens: [
          { text: "import ", color: "text-purple-400" },
          { text: "torch", color: "text-cyan-300" },
          { text: "\nimport ", color: "text-purple-400" },
          { text: "torch.nn ", color: "text-cyan-300" },
          { text: "as ", color: "text-purple-400" },
          { text: "nn", color: "text-slate-200" },
        ],
      },
      {
        num: 2,
        tokens: [
          { text: "class ", color: "text-purple-400" },
          { text: "SuperResolutionNet", color: "text-amber-300" },
          { text: "(nn.Module):", color: "text-slate-300" },
        ],
      },
      {
        num: 3,
        tokens: [
          { text: "    def ", color: "text-purple-400" },
          { text: "forward", color: "text-blue-400" },
          { text: "(self, lr_image):", color: "text-slate-300" },
        ],
      },
      {
        num: 4,
        tokens: [
          { text: "        # Reconstruct high-frequency features", color: "text-slate-500 italic" },
        ],
      },
      {
        num: 5,
        tokens: [
          { text: "        features = self.feature_extractor(lr_image)", color: "text-slate-300" },
        ],
      },
      {
        num: 6,
        tokens: [
          { text: "        hr_reconstruction = self.upsampler(features)", color: "text-slate-300" },
        ],
      },
      {
        num: 7,
        tokens: [
          { text: "        return ", color: "text-purple-400" },
          { text: "hr_reconstruction  # 4x Sharpness", color: "text-emerald-400" },
        ],
      },
    ],
  },
  {
    filename: "scraper.py",
    language: "python",
    badge: "BS4",
    lines: [
      {
        num: 1,
        tokens: [
          { text: "from ", color: "text-purple-400" },
          { text: "bs4 ", color: "text-cyan-300" },
          { text: "import ", color: "text-purple-400" },
          { text: "BeautifulSoup", color: "text-slate-200" },
        ],
      },
      {
        num: 2,
        tokens: [
          { text: "import ", color: "text-purple-400" },
          { text: "requests, pandas as pd", color: "text-slate-200" },
        ],
      },
      {
        num: 3,
        tokens: [
          { text: "def ", color: "text-purple-400" },
          { text: "crawl_catalog", color: "text-blue-400" },
          { text: "(url_pattern, max_pages):", color: "text-slate-300" },
        ],
      },
      {
        num: 4,
        tokens: [
          { text: "    dataset = []", color: "text-slate-300" },
        ],
      },
      {
        num: 5,
        tokens: [
          { text: "    for page in range(1, max_pages + 1):", color: "text-purple-400" },
        ],
      },
      {
        num: 6,
        tokens: [
          { text: "        res = requests.get(url_pattern.format(page))", color: "text-slate-300" },
        ],
      },
      {
        num: 7,
        tokens: [
          { text: "        dataset.extend(parse_page_items(res.text))", color: "text-emerald-400" },
        ],
      },
      {
        num: 8,
        tokens: [
          { text: "    return pd.DataFrame(dataset)", color: "text-cyan-300" },
        ],
      },
    ],
  },
];

export function CodeTerminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTab = TABS[activeTab];

  const handleCopy = () => {
    const rawText = currentTab.lines
      .map((l) => l.tokens.map((t) => t.text).join(""))
      .join("\n");
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-white/[0.12] bg-[#070b1a]/90 backdrop-blur-2xl shadow-2xl shadow-purple-950/40 text-left font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f24] border-b border-white/[0.08]">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/40" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block border border-yellow-400/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/40" />
          <span className="ml-3 text-[11px] text-slate-400 font-mono hidden sm:inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            ouael@ai-workspace:~
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          {TABS.map((tab, idx) => (
            <button
              key={tab.filename}
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 rounded text-[11px] transition-all flex items-center gap-1.5 ${
                activeTab === idx
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-white/10 font-mono">
                {tab.badge}
              </span>
              <span className="hidden sm:inline">{tab.filename}</span>
            </button>
          ))}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Copy snippet"
          aria-label="Copy snippet"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#050816]/95 leading-relaxed selection:bg-purple-500/30 selection:text-white">
        <div className="space-y-1">
          {currentTab.lines.map((line) => (
            <div key={line.num} className="flex items-start gap-4">
              <span className="text-slate-600 select-none text-[11px] w-4 text-right pt-0.5">
                {line.num}
              </span>
              <div className="flex-1 whitespace-pre font-mono text-[11.5px] sm:text-[13px]">
                {line.tokens.map((token, idx) => (
                  <span key={idx} className={token.color}>
                    {token.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Status prompt */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">Active Session</span>
            <span className="text-slate-600">|</span>
            <span>UTF-8</span>
          </div>
          <span className="text-purple-400/80">Next.js • PyTorch • FullStack</span>
        </div>
      </div>
    </div>
  );
}
