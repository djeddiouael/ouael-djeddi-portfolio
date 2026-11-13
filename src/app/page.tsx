"use client";

import React, { useEffect } from "react";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { PortfolioStats } from "@/features/stats/PortfolioStats";
import { Skills } from "@/features/skills/Skills";
import { DeveloperJourney } from "@/features/journey/DeveloperJourney";
import { Projects } from "@/features/projects/Projects";
import { Education } from "@/features/education/Education";
import { Contact } from "@/features/contact/Contact";
import { CommandPalette } from "@/features/command-palette/CommandPalette";
import { SmartCVCenter } from "@/features/cv-center/SmartCVCenter";
import { AIAgentWidget } from "@/features/ai-agent/AIAgentWidget";
import { useUIModals } from "@/context/UIModalContext";

export default function Home() {
  const {
    isCommandPaletteOpen,
    closeCommandPalette,
    isCVModalOpen,
    openCVModal,
    closeCVModal,
    selectedTechFilter,
    setSelectedTechFilter,
  } = useUIModals();

  // Ensure initial load opens strictly at top (Accueil)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.location.hash || window.location.hash === "#home") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    }
  }, []);

  return (
    <>
      <Hero onOpenCVModal={openCVModal} />
      <About />
      <PortfolioStats />
      <Skills onSelectTech={(tech) => setSelectedTechFilter(tech)} />
      <DeveloperJourney />
      <Projects
        selectedTechFilter={selectedTechFilter}
        onClearTechFilter={() => setSelectedTechFilter(null)}
      />
      <Education />
      <Contact />

      {/* Global Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
        onOpenCVModal={openCVModal}
      />

      {/* Smart CV Center Modal */}
      <SmartCVCenter isOpen={isCVModalOpen} onClose={closeCVModal} />

      {/* Interactive AI Agent Digital Twin Widget */}
      <AIAgentWidget />
    </>
  );
}
