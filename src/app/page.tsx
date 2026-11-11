"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { DeveloperJourney } from "@/components/sections/DeveloperJourney";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SmartCVCenter } from "@/components/ui/SmartCVCenter";
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

  return (
    <>
      <Hero onOpenCVModal={openCVModal} />
      <About />
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
    </>
  );
}
