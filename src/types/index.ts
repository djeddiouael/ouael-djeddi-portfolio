export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    icon: string;
    badge?: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI & Deep Learning" | "Web & Full Stack" | "Web Scraping" | "IoT & Embedded";
  tags: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  demoNote?: string;
  visualType: "super-resolution" | "scraper" | "university-platform" | "iot-simulation";
  stats?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  shortName: string;
  location: string;
  specialization?: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  display: string;
  color: string;
}
