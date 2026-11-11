export type AvailabilityStatus =
  | "internship"
  | "collaboration"
  | "freelance"
  | "not_available";

export interface AvailabilityConfig {
  currentStatus: AvailabilityStatus;
  statusOptions: Record<
    AvailabilityStatus,
    {
      label: {
        en: string;
        fr: string;
      };
      badgeText: {
        en: string;
        fr: string;
      };
      description: {
        en: string;
        fr: string;
      };
      color: "emerald" | "purple" | "blue" | "amber";
    }
  >;
}

export const AVAILABILITY_CONFIG: AvailabilityConfig = {
  // Change this single value to instantly update status across the entire portfolio!
  currentStatus: "collaboration",
  statusOptions: {
    internship: {
      label: {
        en: "Available for Internship",
        fr: "Recherche de Stage / PFE",
      },
      badgeText: {
        en: "Open to Internship",
        fr: "Ouvert aux Stages",
      },
      description: {
        en: "Actively seeking Master's graduation internships & end-of-studies research opportunities.",
        fr: "À la recherche active d'un stage de fin d'études (PFE) ou d'opportunités en IA / Full Stack.",
      },
      color: "emerald",
    },
    collaboration: {
      label: {
        en: "Available for Collaboration",
        fr: "Disponible pour Collaboration",
      },
      badgeText: {
        en: "Open to AI Collab",
        fr: "Ouvert aux Projets IA",
      },
      description: {
        en: "Open to artificial intelligence research, computer vision projects, and engineering collaborations.",
        fr: "Ouvert aux projets de recherche en intelligence artificielle, vision par ordinateur et développement web.",
      },
      color: "purple",
    },
    freelance: {
      label: {
        en: "Available for Freelance",
        fr: "Disponible pour Freelance",
      },
      badgeText: {
        en: "Freelance Ready",
        fr: "Missions Freelance",
      },
      description: {
        en: "Accepting select full-stack web engineering, API design, and automation projects.",
        fr: "Disponible pour des projets de développement web full-stack, création d'API et automatisation.",
      },
      color: "blue",
    },
    not_available: {
      label: {
        en: "Currently Not Available",
        fr: "Actuellement Indisponible",
      },
      badgeText: {
        en: "Focused on Research",
        fr: "Concentré sur la Recherche",
      },
      description: {
        en: "Currently focused on full-time academic research and ongoing commitments.",
        fr: "Actuellement engagé à plein temps sur les études et projets de recherche universitaires.",
      },
      color: "amber",
    },
  },
};
