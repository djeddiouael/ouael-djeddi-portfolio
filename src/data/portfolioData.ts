import { SkillCategory, SocialLink } from "@/types";

export const PERSONAL_INFO = {
  name: "DJEDDI Ouael",
  shortName: "Ouael",
  title: "Full Stack & AI Developer",
  heroGreeting: "Hi, I'm Ouael.",
  heroDescription:
    "I build intelligent applications, explore artificial intelligence, and transform ideas into modern digital experiences.",
  about: {
    lead: "Computer science student passionate about building intelligent systems and scalable digital solutions.",
    paragraphs: [
      "I am a Computer Science student with a strong focus on Artificial Intelligence, Machine Learning, and Modern Full Stack Development. My academic journey and hands-on projects revolve around bridging algorithmic intelligence with intuitive, high-performance software engineering.",
      "From training deep learning models for computer vision to designing responsive, full-stack web platforms and simulating IoT embedded architectures, I enjoy solving complex problems through clean architecture and continuous learning.",
    ],
    focusAreas: [
      {
        title: "Artificial Intelligence & ML",
        description:
          "Developing neural networks, deep learning architectures, and intelligent algorithms to extract insights and solve visual tasks.",
        icon: "Brain",
      },
      {
        title: "Full Stack Development",
        description:
          "Architecting robust end-to-end applications with modern frontend frameworks, structured backends, and responsive user interfaces.",
        icon: "Layers",
      },
      {
        title: "Computer Vision & Deep Learning",
        description:
          "Working on visual data processing, super-resolution reconstruction, and feature extraction using state-of-the-art neural networks.",
        icon: "Eye",
      },
      {
        title: "Software Engineering & IoT",
        description:
          "Applying clean coding principles, version control, automated scrapers, and hardware-software simulations.",
        icon: "Cpu",
      },
    ],
  },
  contact: {
    email: "djeddi.ouael@gmail.com",
    github: "https://github.com/djeddiouael",
    youtube: "https://www.youtube.com/@djeddiouael",
    linkedin: "https://linkedin.com/in/ouael-djeddi",
    facebook: "https://facebook.com/djeddiouael",
    instagram: "https://instagram.com/djeddiouael",
    location: "Algeria",
    status: "Available for Collaboration & Research",
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/djeddiouael",
    icon: "Github",
    display: "@djeddiouael",
    color: "hover:text-purple-400 hover:border-purple-500/50",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@djeddiouael",
    icon: "Youtube",
    display: "@djeddiouael",
    color: "hover:text-red-500 hover:border-red-500/50",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ouael-djeddi",
    icon: "Linkedin",
    display: "Ouael Djeddi",
    color: "hover:text-blue-500 hover:border-blue-500/50",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/djeddiouael",
    icon: "Facebook",
    display: "Ouael Djeddi",
    color: "hover:text-blue-600 hover:border-blue-600/50",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/djeddiouael",
    icon: "Instagram",
    display: "@djeddiouael",
    color: "hover:text-pink-500 hover:border-pink-500/50",
  },
  {
    name: "Email",
    url: "mailto:djeddi.ouael@gmail.com",
    icon: "Mail",
    display: "djeddi.ouael@gmail.com",
    color: "hover:text-cyan-400 hover:border-cyan-500/50",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages for algorithmic problem solving and software engineering",
    iconName: "Code2",
    skills: [
      {
        name: "Python",
        icon: "python",
        description: "Primary language for AI, Deep Learning, automation & data analysis",
      },
      {
        name: "TypeScript",
        icon: "typescript",
        description: "Strict typing for resilient, scalable modern web applications",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        description: "Dynamic frontend engineering, asynchronous APIs & interactive DOM",
      },
      {
        name: "HTML",
        icon: "html",
        description: "Semantic structures, accessible layout trees & SEO foundations",
      },
      {
        name: "CSS",
        icon: "css",
        description: "Modern layouts, responsive design, animations & custom styling",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Deep learning frameworks, computer vision and scientific data tooling",
    iconName: "BrainCircuit",
    skills: [
      {
        name: "PyTorch",
        icon: "pytorch",
        description: "Deep learning models, dynamic computation graphs & tensor workflows",
      },
      {
        name: "TensorFlow",
        icon: "tensorflow",
        description: "End-to-end machine learning, model training & neural networks",
      },
      {
        name: "Computer Vision",
        icon: "vision",
        description: "Image processing, super-resolution reconstruction & feature detection",
      },
      {
        name: "Scikit-learn",
        icon: "scikitlearn",
        description: "Supervised and unsupervised classical machine learning algorithms",
      },
      {
        name: "NumPy",
        icon: "numpy",
        description: "High-performance vector, matrix and multidimensional computations",
      },
      {
        name: "Pandas",
        icon: "pandas",
        description: "Data manipulation, tabular cleaning, aggregation & feature engineering",
      },
    ],
  },
  {
    title: "Web Development",
    description: "Modern reactive frameworks and responsive design systems",
    iconName: "Globe2",
    skills: [
      {
        name: "React",
        icon: "react",
        description: "Component-driven architecture, state management & reactive hooks",
      },
      {
        name: "Next.js",
        icon: "nextjs",
        description: "App Router, SSR, SSG, server components & API route development",
      },
      {
        name: "Node.js",
        icon: "nodejs",
        description: "Server-side runtime, REST APIs, routing & backend application logic",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        description: "Utility-first modern design, responsive layouts & custom glassmorphism",
      },
    ],
  },
  {
    title: "Tools & Infrastructure",
    description: "Version control, containerization and developer environments",
    iconName: "TerminalSquare",
    skills: [
      {
        name: "Git",
        icon: "git",
        description: "Distributed version control, branch management & history tracking",
      },
      {
        name: "GitHub",
        icon: "github",
        description: "Repository collaboration, open-source hosting & issue tracking",
      },
      {
        name: "VS Code",
        icon: "vscode",
        description: "Primary development environment with custom tooling & extensions",
      },
      {
        name: "Docker",
        icon: "docker",
        description: "Containerized environments for reproducible development workflows",
      },
    ],
  },
];
