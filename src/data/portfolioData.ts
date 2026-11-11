import { EducationItem, NavItem, Project, SkillCategory, SocialLink } from "@/types";

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
    email: "ouael.djeddi.contact@gmail.com",
    github: "https://github.com/djeddiouael",
    youtube: "https://www.youtube.com/@djeddiouael",
    linkedin: "https://linkedin.com/in/ouael-djeddi",
    location: "Algeria",
    status: "Available for Collaboration & Research",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

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
    color: "hover:text-red-400 hover:border-red-500/50",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ouael-djeddi",
    icon: "Linkedin",
    display: "Ouael Djeddi",
    color: "hover:text-blue-400 hover:border-blue-500/50",
  },
  {
    name: "Email",
    url: "mailto:ouael.djeddi.contact@gmail.com",
    icon: "Mail",
    display: "ouael.djeddi.contact@gmail.com",
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

export const PROJECTS: Project[] = [
  {
    id: "single-image-super-resolution",
    title: "Single Image Super-Resolution",
    tagline: "Deep Learning & Generative Computer Vision",
    description:
      "A deep learning computer vision model engineered to reconstruct high-resolution images from degraded, low-resolution inputs. Focuses on neural image enhancement, high-frequency edge restoration, and feature fidelity.",
    category: "AI & Deep Learning",
    tags: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "Image Processing"],
    highlights: [
      "Image enhancement and spatial reconstruction using convolutional neural architectures",
      "Perceptual loss optimization for crisp edge and texture recovery",
      "Model evaluation against baseline interpolation methods (Bicubic)",
    ],
    githubUrl: "https://github.com/djeddiouael",
    visualType: "super-resolution",
    stats: [
      { label: "Domain", value: "Computer Vision" },
      { label: "Core Tool", value: "PyTorch & Python" },
    ],
  },
  {
    id: "python-books-web-scraper",
    title: "Python Books Web Scraper",
    tagline: "Automated Data Extraction & Pipeline",
    description:
      "An automated web scraping tool engineered in Python to crawl, parse, and extract structured book data across multiple catalog pages. Handles HTTP requests, rate limiting, and output formatting into structured datasets.",
    category: "Web Scraping",
    tags: ["Python", "Requests", "BeautifulSoup", "Data Extraction", "Automation"],
    highlights: [
      "Automated pagination handling and robust HTML DOM parsing",
      "Clean extraction of titles, pricing, ratings, availability, and metadata",
      "Export to structured CSV and JSON pipelines for data analysis",
    ],
    githubUrl: "https://github.com/djeddiouael",
    visualType: "scraper",
    stats: [
      { label: "Type", value: "Web Scraping" },
      { label: "Stack", value: "Requests / BS4" },
    ],
  },
  {
    id: "university-transfer-platform",
    title: "University Transfer Platform",
    tagline: "Full Stack Academic Management System",
    description:
      "A full-stack university transfer and management platform designed to streamline student application workflows, administrative document verification, and departmental review processes.",
    category: "Web & Full Stack",
    tags: ["Full Stack", "Web Development", "Node.js", "Database", "UI/UX"],
    highlights: [
      "Role-based administrative and student portal flows",
      "Application submission, tracking, and document status verification",
      "Clean responsive interface with structured database persistence",
    ],
    githubUrl: "https://github.com/djeddiouael",
    visualType: "university-platform",
    stats: [
      { label: "Domain", value: "Higher Education" },
      { label: "Scope", value: "Full Stack App" },
    ],
  },
  {
    id: "sei-iot-project",
    title: "SEI IoT Project",
    tagline: "Embedded Systems & Hardware Simulation",
    description:
      "An Internet of Things and embedded systems implementation simulated with Wokwi. Explores sensor data acquisition, microcontroller logic, and real-time telemetry processing in a virtualized hardware circuit.",
    category: "IoT & Embedded",
    tags: ["IoT", "Embedded Systems", "Wokwi Simulation", "Sensors", "Microcontroller"],
    highlights: [
      "Microcontroller circuit simulation executed in the Wokwi embedded environment",
      "Real-time sensor telemetry reading and conditional hardware actuator triggers",
      "Low-level logic control and modular embedded programming",
    ],
    githubUrl: "https://github.com/djeddiouael",
    liveUrl: "https://wokwi.com",
    demoNote: "Interactive circuit simulation on Wokwi",
    visualType: "iot-simulation",
    stats: [
      { label: "Field", value: "Embedded Systems" },
      { label: "Simulator", value: "Wokwi" },
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master's Studies — Specialty I2A",
    specialization: "Informatique Intelligente & Applications (Intelligent Computer Science & Applications)",
    institution: "University of Boumerdes (UMBB)",
    shortName: "UMBB",
    location: "Boumerdès, Algeria",
    description:
      "Specialized Master's program focusing on Intelligent Systems, Advanced Artificial Intelligence, Machine Learning, Deep Neural Architectures, and Applied Computing Methodologies.",
    tags: ["Artificial Intelligence", "Machine Learning", "Intelligent Systems", "Computer Science"],
    isCurrent: true,
  },
  {
    degree: "Previous University Studies in Computer Science",
    institution: "University of Tebessa",
    shortName: "Univ. Tébessa",
    location: "Tébessa, Algeria",
    description:
      "Foundational computer science curriculum covering algorithmic theory, data structures, object-oriented programming, software engineering, databases, and mathematics.",
    tags: ["Algorithms", "Data Structures", "Software Engineering", "Mathematics"],
    isCurrent: false,
  },
];
