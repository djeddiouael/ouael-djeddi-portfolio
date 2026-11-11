"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface UIModalContextType {
  isCommandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  isCVModalOpen: boolean;
  openCVModal: () => void;
  closeCVModal: () => void;
  selectedTechFilter: string | null;
  setSelectedTechFilter: (tech: string | null) => void;
}

const UIModalContext = createContext<UIModalContextType | undefined>(undefined);

export function UIModalProvider({ children }: { children: React.ReactNode }) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);

  const openCommandPalette = () => setIsCommandPaletteOpen(true);
  const closeCommandPalette = () => setIsCommandPaletteOpen(false);

  const openCVModal = () => setIsCVModalOpen(true);
  const closeCVModal = () => setIsCVModalOpen(false);

  // Global Ctrl+K / Cmd+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <UIModalContext.Provider
      value={{
        isCommandPaletteOpen,
        openCommandPalette,
        closeCommandPalette,
        isCVModalOpen,
        openCVModal,
        closeCVModal,
        selectedTechFilter,
        setSelectedTechFilter,
      }}
    >
      {children}
    </UIModalContext.Provider>
  );
}

export function useUIModals() {
  const context = useContext(UIModalContext);
  if (!context) {
    throw new Error("useUIModals must be used within a UIModalProvider");
  }
  return context;
}
