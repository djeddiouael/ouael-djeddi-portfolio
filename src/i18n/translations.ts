export type Language = "en" | "fr";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    journey: string;
    capabilities: string;
    projects: string;
    education: string;
    contact: string;
    smartCV: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    cmdShortcut: string;
    themeSystem: string;
    themeDark: string;
    themeLight: string;
  };
  hero: {
    statusBadge: string;
    greetingPre: string;
    greetingName: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    downloadCV: string;
    githubAria: string;
    youtubeAria: string;
    highlights: {
      pytorch: string;
      vision: string;
      nextjs: string;
    };
    terminal: {
      title: string;
      copyTitle: string;
      copied: string;
      activeSession: string;
      devStatus: string;
      passion: string;
    };
    floatingBadges: {
      superRes: string;
      fullstack: string;
    };
  };
  commandPalette: {
    placeholder: string;
    noResults: string;
    keyboardHint: string;
    categories: {
      navigation: string;
      interactive: string;
      preferences: string;
      social: string;
    };
    items: {
      home: string;
      about: string;
      skills: string;
      journey: string;
      capabilities: string;
      projects: string;
      education: string;
      contact: string;
      smartCV: string;
      superResDemo: string;
      iotSimulation: string;
      terminal: string;
      copyEmail: string;
      emailCopied: string;
      themeDark: string;
      themeLight: string;
      themeSystem: string;
      langEn: string;
      langFr: string;
      github: string;
      youtube: string;
      linkedin: string;
    };
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    contextLabel: string;
    placeholderLabel: string;
    filters: {
      all: string;
      academic: string;
      ai: string;
      engineering: string;
      internship: string;
      freelance: string;
    };
    milestones: Array<{
      id: string;
      category: "academic" | "ai" | "engineering" | "internship" | "freelance";
      categoryLabel: string;
      title: string;
      period: string;
      institutionOrContext: string;
      description: string;
      tags: string[];
      /** Marks scaffold entries that still need to be replaced with real data. */
      isPlaceholder?: boolean;
    }>;
  };
  smartCV: {
    badge: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    modalTitle: string;
    modalSubtitle: string;
    profiles: {
      fullstack: {
        title: string;
        tagline: string;
        description: string;
        competencies: string[];
        filename: string;
      };
      ai: {
        title: string;
        tagline: string;
        description: string;
        competencies: string[];
        filename: string;
      };
    };
    downloadPdf: string;
    noticeTitle: string;
    noticeMessage: string;
    contactInstead: string;
    close: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    cardTitle: string;
    cardRole: string;
    p1: string;
    p2: string;
    bullets: {
      algorithms: string;
      deepLearning: string;
      webArchitecture: string;
    };
    focusAreas: {
      ai: {
        title: string;
        desc: string;
      };
      fullstack: {
        title: string;
        desc: string;
      };
      vision: {
        title: string;
        desc: string;
      };
      iot: {
        title: string;
        desc: string;
      };
    };
    activeExploration: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      ai: string;
      programming: string;
      web: string;
      tools: string;
    };
    categories: {
      programming: {
        title: string;
        desc: string;
      };
      ai: {
        title: string;
        desc: string;
      };
      web: {
        title: string;
        desc: string;
      };
      tools: {
        title: string;
        desc: string;
      };
    };
    skillItems: Record<string, string>;
    activeStack: string;
    verified: string;
    clickToFilter: string;
    exploreProjects: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    explorerHint: string;
    activeTechFilter: string;
    clearFilter: string;
    filters: {
      all: string;
      ai: string;
      scraping: string;
      web: string;
      iot: string;
    };
    labels: {
      domain: string;
      coreTool: string;
      type: string;
      scope: string;
      field: string;
      simulator: string;
      viewRepo: string;
      simulationDemo: string;
      localPrototype: string;
      matchingProjects: string;
    };
    visuals: {
      lowResInput: string;
      degradedBicubic: string;
      fourXReconstruction: string;
      highFreqRestored: string;
      simulationActive: string;
      sensorTelemetry: string;
      wokwiHardware: string;
      transferPortal: string;
      adminDossier: string;
      crawlerConsole: string;
    };
    items: {
      superRes: {
        title: string;
        tagline: string;
        desc: string;
        highlights: string[];
      };
      scraper: {
        title: string;
        tagline: string;
        desc: string;
        highlights: string[];
      };
      university: {
        title: string;
        tagline: string;
        desc: string;
        highlights: string[];
      };
      iot: {
        title: string;
        tagline: string;
        desc: string;
        highlights: string[];
      };
    };
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    currentStudies: string;
    masterDegree: string;
    masterSpec: string;
    masterInst: string;
    masterLoc: string;
    masterDesc: string;
    bachelorDegree: string;
    bachelorInst: string;
    bachelorLoc: string;
    bachelorDesc: string;
    tags: {
      ai: string;
      ml: string;
      systems: string;
      cs: string;
      algorithms: string;
      dataStructures: string;
      softwareEng: string;
      math: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directEmailTitle: string;
    directEmailSubtitle: string;
    copy: string;
    copied: string;
    responseWindow: string;
    profilesTitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    securityNote: string;
    successTitle: string;
    successMessage: string;
    openInEmail: string;
    sendAnother: string;
    fallbackTitle: string;
    fallbackMessage: string;
    validation: {
      name: string;
      email: string;
      subject: string;
      message: string;
      networkError: string;
      rateLimited: string;
    };
  };
  footer: {
    bio: string;
    navigation: string;
    connect: string;
    locationLabel: string;
    locationValue: string;
    emailLabel: string;
    githubLabel: string;
    backToTop: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      journey: "Journey",
      capabilities: "Capabilities",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      smartCV: "CV Center",
      getInTouch: "Get In Touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      cmdShortcut: "Cmd+K",
      themeSystem: "System",
      themeDark: "Dark",
      themeLight: "Light",
    },
    hero: {
      statusBadge: "Master's Specialty I2A • AI & Full Stack",
      greetingPre: "Hi, I'm",
      greetingName: "Ouael",
      title: "Full Stack & AI Developer",
      description:
        "I build intelligent applications, explore artificial intelligence, and transform ideas into modern digital experiences.",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      githubAria: "GitHub Profile",
      youtubeAria: "YouTube Channel",
      highlights: {
        pytorch: "PyTorch & Deep Learning",
        vision: "Computer Vision",
        nextjs: "Next.js & Full Stack",
      },
      terminal: {
        title: "developer.ts",
        copyTitle: "Copy snippet",
        copied: "Copied!",
        activeSession: "Active Session",
        devStatus: "Ready to build & innovate",
        passion: "Transforming ideas into modern digital experiences",
      },
      floatingBadges: {
        superRes: "Super-Resolution AI",
        fullstack: "Full Stack & Automation",
      },
    },
    commandPalette: {
      placeholder: "Type a command or search (e.g. projects, cv, python)...",
      noResults: "No matching commands or projects found.",
      keyboardHint: "Press ESC to close, ↑↓ to navigate, ENTER to select",
      categories: {
        navigation: "Navigation & Sections",
        interactive: "Developer Tools & AI Lab",
        preferences: "Preferences & Actions",
        social: "External Profiles",
      },
      items: {
        home: "Go to Home / Hero",
        about: "Go to About Me",
        skills: "Go to Skills & Tech Stack",
        journey: "Go to Developer Journey",
        capabilities: "Go to Technical Capabilities & Architecture",
        projects: "Go to Featured Projects",
        education: "Go to Academic Background",
        contact: "Go to Contact Section",
        smartCV: "Open Smart CV Center (PDFs)",
        superResDemo: "Launch Super-Resolution AI Demo",
        iotSimulation: "Inspect SEI IoT Wokwi Circuit",
        terminal: "Open Interactive Code Terminal",
        copyEmail: "Copy Direct Email Address",
        emailCopied: "Email copied to clipboard!",
        themeDark: "Set Theme to Dark",
        themeLight: "Set Theme to Light",
        themeSystem: "Set Theme to System (Auto)",
        langEn: "Switch Language to English",
        langFr: "Passer la langue en Français",
        github: "Open GitHub Profile (@djeddiouael)",
        youtube: "Open YouTube Channel (@djeddiouael)",
        linkedin: "Open LinkedIn Profile (DJEDDI Ouael)",
      },
    },
    journey: {
      badge: "03 // DEVELOPER JOURNEY",
      title: "Academic Path & Engineering Milestones",
      subtitle:
        "A chronological overview of authentic academic foundations, research experiments, internships, freelance work, and practical software engineering projects.",
      contextLabel: "Context",
      placeholderLabel: "To complete",
      filters: {
        all: "All Milestones",
        academic: "Academic Path",
        ai: "AI & Research",
        engineering: "Software Engineering",
        internship: "Internships",
        freelance: "Freelance",
      },
      milestones: [
        {
          id: "m7",
          category: "internship",
          categoryLabel: "Internship",
          title: "Internship — [Company Name]",
          period: "[Start Month Year] — [End Month Year]",
          institutionOrContext: "[Company · City / Remote]",
          description:
            "Placeholder to complete: describe the internship mission, the team you joined, your daily responsibilities, and the technical stack you used. Replace this text with your real experience.",
          tags: ["[Your Role]", "[Main Stack]", "[Key Mission]"],
          isPlaceholder: true,
        },
        {
          id: "m8",
          category: "freelance",
          categoryLabel: "Freelance",
          title: "Freelance Project — [Client / Project Name]",
          period: "[Month Year] — [Month Year]",
          institutionOrContext: "[Client · Remote]",
          description:
            "Placeholder to complete: describe the solution you delivered, your responsibilities from scoping to deployment, and the measurable outcome for the client. Replace this text with your real mission.",
          tags: ["[Service]", "[Stack]", "[Result]"],
          isPlaceholder: true,
        },
        {
          id: "m1",
          category: "academic",
          categoryLabel: "Academic Foundation",
          title: "Foundations of Computer Science & Algorithmic Rigor",
          period: "Undergraduate Studies",
          institutionOrContext: "University of Tebessa",
          description:
            "Built a disciplined foundation in theoretical computer science, advanced algorithmic analysis, discrete mathematics, relational database design, and object-oriented software engineering.",
          tags: ["Algorithms", "Data Structures", "OOP", "Relational Databases", "Software Engineering"],
        },
        {
          id: "m2",
          category: "engineering",
          categoryLabel: "Data Engineering",
          title: "Automated Data Mining & Crawling Architectures",
          period: "Engineering Project",
          institutionOrContext: "Python Books Web Scraper",
          description:
            "Engineered automated crawling architectures in Python. Handled paginated catalog requests, HTTP session persistence, error resilience, and structured export pipelines using BeautifulSoup and Requests.",
          tags: ["Python", "Web Scraping", "Requests", "BeautifulSoup", "Data Pipelines"],
        },
        {
          id: "m3",
          category: "engineering",
          categoryLabel: "Systems & IoT",
          title: "Embedded Microcontroller & IoT Virtual Telemetry",
          period: "Hardware Simulation",
          institutionOrContext: "SEI IoT Project (Wokwi)",
          description:
            "Implemented microcontroller logic and virtualized sensor telemetry in the Wokwi embedded simulator, processing temperature, ultrasonic distance, and actuator control in real time.",
          tags: ["IoT", "Embedded C", "Wokwi", "Sensors", "Telemetry"],
        },
        {
          id: "m4",
          category: "engineering",
          categoryLabel: "Full Stack Web",
          title: "Academic Management & Transfer Platform",
          period: "Full-Stack System",
          institutionOrContext: "University Transfer Platform",
          description:
            "Architected an end-to-end university management platform designed to streamline student dossier submission, departmental document review, and status tracking with role-based access.",
          tags: ["Node.js", "Full Stack", "REST APIs", "Modern UI", "Database Architecture"],
        },
        {
          id: "m5",
          category: "academic",
          categoryLabel: "Specialized Master's",
          title: "Master's Studies — Specialty I2A (Intelligent Computer Science)",
          period: "Current Master's Program",
          institutionOrContext: "University of Boumerdes (UMBB)",
          description:
            "Enrolled in the competitive Master's program in Informatique Intelligente & Applications (I2A), focusing on neural network architectures, machine learning theory, computer vision, and applied intelligence.",
          tags: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Applied Computing"],
        },
        {
          id: "m6",
          category: "ai",
          categoryLabel: "Computer Vision Research",
          title: "Single Image Super-Resolution via Deep Learning",
          period: "Deep Learning Research",
          institutionOrContext: "PyTorch & Computer Vision",
          description:
            "Researched and trained deep convolutional neural models for 4x spatial image reconstruction from degraded inputs, analyzing perceptual loss formulations against bicubic baselines.",
          tags: ["PyTorch", "Computer Vision", "Super-Resolution", "Deep Learning", "Convolutional Networks"],
        },
      ],
    },
    smartCV: {
      badge: "SMART CV CENTER",
      title: "Professional Curriculum Vitae",
      subtitle:
        "Select and review tailored profiles aligned with Full Stack Engineering or Artificial Intelligence & Computer Vision.",
      buttonLabel: "Download CV",
      modalTitle: "Select Curriculum Vitae Profile",
      modalSubtitle: "Choose the version that best matches your opportunity or technical requirements.",
      profiles: {
        fullstack: {
          title: "Full Stack Software Engineer",
          tagline: "Web Architecture, APIs & Modern Frontend",
          description:
            "Focused on full-stack web applications, TypeScript, Next.js, Node.js backends, RESTful APIs, and responsive design systems.",
          competencies: ["Next.js & React", "TypeScript & Node.js", "Tailwind CSS", "Database Design", "Git & Docker"],
          filename: "DJEDDI_Ouael_FullStack_CV.pdf",
        },
        ai: {
          title: "AI & Computer Vision Developer",
          tagline: "Deep Learning, PyTorch & Intelligent Systems",
          description:
            "Focused on neural network development, PyTorch, computer vision reconstruction, machine learning algorithms, and Python data pipelines.",
          competencies: ["PyTorch & Deep Learning", "Computer Vision", "TensorFlow & Scikit-learn", "NumPy & Pandas", "Automation Pipelines"],
          filename: "DJEDDI_Ouael_AI_CV.pdf",
        },
      },
      downloadPdf: "Download PDF",
      noticeTitle: "CV Document Preparation Notice",
      noticeMessage:
        "The static PDF document for this profile is currently being compiled for the current semester. You can explore all verified projects and education details directly on this portfolio or request the latest PDF directly via email.",
      contactInstead: "Contact Ouael Directly",
      close: "Close",
    },
    about: {
      badge: "01 // ABOUT ME",
      title: "Bridging Artificial Intelligence & Software Engineering",
      subtitle:
        "A dedicated computer science student with a passion for intelligent systems, neural architectures, and robust full stack development.",
      cardTitle: "DJEDDI Ouael",
      cardRole: "Master's Student • Specialty I2A",
      p1: "I am a Computer Science student with a strong focus on Artificial Intelligence, Machine Learning, and Modern Full Stack Development. My academic journey and hands-on projects revolve around bridging algorithmic intelligence with intuitive, high-performance software engineering.",
      p2: "From training deep learning models for computer vision to designing responsive, full-stack web platforms and simulating IoT embedded architectures, I enjoy solving complex problems through clean architecture and continuous learning.",
      bullets: {
        algorithms: "Strong foundation in algorithms & data structures",
        deepLearning: "Hands-on deep learning & computer vision experiments",
        webArchitecture: "Full-cycle web application and pipeline development",
      },
      focusAreas: {
        ai: {
          title: "Artificial Intelligence & ML",
          desc: "Developing neural networks, deep learning architectures, and intelligent algorithms to extract insights and solve visual tasks.",
        },
        fullstack: {
          title: "Full Stack Development",
          desc: "Architecting robust end-to-end applications with modern frontend frameworks, structured backends, and responsive user interfaces.",
        },
        vision: {
          title: "Computer Vision & Deep Learning",
          desc: "Working on visual data processing, super-resolution reconstruction, and feature extraction using state-of-the-art neural networks.",
        },
        iot: {
          title: "Software Engineering & IoT",
          desc: "Applying clean coding principles, version control, automated scrapers, and hardware-software simulations.",
        },
      },
      activeExploration: "Active Exploration →",
    },
    skills: {
      badge: "02 // SKILLS & TECH STACK",
      title: "Technologies, Frameworks & Tooling",
      subtitle:
        "A comprehensive toolkit spanning deep learning, machine learning algorithms, modern frontend frameworks, and software engineering infrastructure.",
      filters: {
        all: "All Technologies",
        ai: "AI & Machine Learning",
        programming: "Programming",
        web: "Web Development",
        tools: "Tools & Infrastructure",
      },
      categories: {
        programming: {
          title: "Programming",
          desc: "Core languages for algorithmic problem solving and software engineering",
        },
        ai: {
          title: "AI & Machine Learning",
          desc: "Deep learning frameworks, computer vision and scientific data tooling",
        },
        web: {
          title: "Web Development",
          desc: "Modern reactive frameworks and responsive design systems",
        },
        tools: {
          title: "Tools & Infrastructure",
          desc: "Version control, containerization and developer environments",
        },
      },
      skillItems: {
        Python: "Primary language for AI, Deep Learning, automation & data analysis",
        TypeScript: "Strict typing for resilient, scalable modern web applications",
        JavaScript: "Dynamic frontend engineering, asynchronous APIs & interactive DOM",
        HTML: "Semantic structures, accessible layout trees & SEO foundations",
        CSS: "Modern layouts, responsive design, animations & custom styling",
        PyTorch: "Deep learning models, dynamic computation graphs & tensor workflows",
        TensorFlow: "End-to-end machine learning, model training & neural networks",
        "Computer Vision": "Image processing, super-resolution reconstruction & feature detection",
        "Scikit-learn": "Supervised and unsupervised classical machine learning algorithms",
        NumPy: "High-performance vector, matrix and multidimensional computations",
        Pandas: "Data manipulation, tabular cleaning, aggregation & feature engineering",
        React: "Component-driven architecture, state management & reactive hooks",
        "Next.js": "App Router, SSR, SSG, server components & API route development",
        "Node.js": "Server-side runtime, REST APIs, routing & backend application logic",
        "Tailwind CSS": "Utility-first modern design, responsive layouts & custom glassmorphism",
        Git: "Distributed version control, branch management & history tracking",
        GitHub: "Repository collaboration, open-source hosting & issue tracking",
        "VS Code": "Primary development environment with custom tooling & extensions",
        Docker: "Containerized environments for reproducible development workflows",
      },
      activeStack: "Active Stack",
      verified: "Verified",
      clickToFilter: "Click to view related projects",
      exploreProjects: "Explore Projects",
    },
    projects: {
      badge: "04 // FEATURED PROJECTS",
      title: "Engineered Solutions & Research Prototypes",
      subtitle:
        "Explore selected works across generative computer vision, automated data pipelines, full stack academic management systems, and IoT embedded simulations.",
      explorerHint: "Interactive Tech Stack Explorer: Filter projects by clicking technology tags below or on any project card.",
      activeTechFilter: "Active Tech Filter",
      clearFilter: "Clear Tech Filter",
      filters: {
        all: "All",
        ai: "AI & Deep Learning",
        scraping: "Web Scraping",
        web: "Web & Full Stack",
        iot: "IoT & Embedded",
      },
      labels: {
        domain: "Domain",
        coreTool: "Core Tool",
        type: "Type",
        scope: "Scope",
        field: "Field",
        simulator: "Simulator",
        viewRepo: "GitHub Profile",
        simulationDemo: "Simulation Demo",
        localPrototype: "Local prototype / Model weights",
        matchingProjects: "matching projects",
      },
      visuals: {
        lowResInput: "LOW-RES INPUT",
        degradedBicubic: "Degraded Bicubic",
        fourXReconstruction: "4X RECONSTRUCTION",
        highFreqRestored: "High-Frequency Restored",
        simulationActive: "SIMULATION ACTIVE",
        sensorTelemetry: "Sensor Telemetry",
        wokwiHardware: "Wokwi Virtual Hardware",
        transferPortal: "Academic Transfer Portal",
        adminDossier: "Full-Stack Admin",
        crawlerConsole: "crawler_pipeline.py",
      },
      items: {
        superRes: {
          title: "Single Image Super-Resolution",
          tagline: "Deep Learning & Generative Computer Vision",
          desc: "A deep learning computer vision model engineered to reconstruct high-resolution images from degraded, low-resolution inputs. Focuses on neural image enhancement, high-frequency edge restoration, and feature fidelity.",
          highlights: [
            "Image enhancement and spatial reconstruction using convolutional neural architectures",
            "Perceptual loss optimization for crisp edge and texture recovery",
            "Model evaluation against baseline interpolation methods (Bicubic)",
          ],
        },
        scraper: {
          title: "Python Books Web Scraper",
          tagline: "Automated Data Extraction & Pipeline",
          desc: "An automated web scraping tool engineered in Python to crawl, parse, and extract structured book data across multiple catalog pages. Handles HTTP requests, rate limiting, and output formatting into structured datasets.",
          highlights: [
            "Automated pagination handling and robust HTML DOM parsing",
            "Clean extraction of titles, pricing, ratings, availability, and metadata",
            "Export to structured CSV and JSON pipelines for data analysis",
          ],
        },
        university: {
          title: "University Transfer Platform",
          tagline: "Full Stack Academic Management System",
          desc: "A full-stack university transfer and management platform designed to streamline student application workflows, administrative document verification, and departmental review processes.",
          highlights: [
            "Role-based administrative and student portal flows",
            "Application submission, tracking, and document status verification",
            "Clean responsive interface with structured database persistence",
          ],
        },
        iot: {
          title: "SEI IoT Project",
          tagline: "Embedded Systems & Hardware Simulation",
          desc: "An Internet of Things and embedded systems implementation simulated with Wokwi. Explores sensor data acquisition, microcontroller logic, and real-time telemetry processing in a virtualized hardware circuit.",
          highlights: [
            "Microcontroller circuit simulation executed in the Wokwi embedded environment",
            "Real-time sensor telemetry reading and conditional hardware actuator triggers",
            "Low-level logic control and modular embedded programming",
          ],
        },
      },
    },
    education: {
      badge: "05 // ACADEMIC BACKGROUND",
      title: "Education & Academic Path",
      subtitle:
        "Formal academic training specializing in Intelligent Computer Science, Machine Learning architectures, and foundational software engineering principles.",
      currentStudies: "Current Studies",
      masterDegree: "Master's Studies — Specialty I2A",
      masterSpec: "Informatique Intelligente & Applications (Intelligent Computer Science & Applications)",
      masterInst: "University of Boumerdes (UMBB)",
      masterLoc: "Boumerdès, Algeria",
      masterDesc:
        "Specialized Master's program focusing on Intelligent Systems, Advanced Artificial Intelligence, Machine Learning, Deep Neural Architectures, and Applied Computing Methodologies.",
      bachelorDegree: "Previous University Studies in Computer Science",
      bachelorInst: "University of Tebessa",
      bachelorLoc: "Tébessa, Algeria",
      bachelorDesc:
        "Foundational computer science curriculum covering algorithmic theory, data structures, object-oriented programming, software engineering, databases, and mathematics.",
      tags: {
        ai: "Artificial Intelligence",
        ml: "Machine Learning",
        systems: "Intelligent Systems",
        cs: "Computer Science",
        algorithms: "Algorithms",
        dataStructures: "Data Structures",
        softwareEng: "Software Engineering",
        math: "Mathematics",
      },
    },
    contact: {
      badge: "06 // CONTACT & CONNECT",
      title: "Let's Build Something Together",
      subtitle:
        "Interested in AI collaboration, research discussions, full-stack web engineering, or project inquiries? Reach out through the form below or via direct channels.",
      directEmailTitle: "Direct Email",
      directEmailSubtitle: "Feel free to send an email anytime",
      copy: "Copy",
      copied: "Copied!",
      responseWindow: "Response window: Within 24-48 hours",
      profilesTitle: "Profiles & Networks",
      formTitle: "Send a Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "e.g. john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. AI Research Collaboration / Full Stack Inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Write your message, project idea, or inquiry here...",
      submitButton: "Send Message",
      submittingButton: "Validating & Sending...",
      securityNote: "Direct validation via Next.js backend • No third-party trackers",
      successTitle: "Message Delivered!",
      successMessage:
        "Thank you! Your message was delivered to Ouael's inbox. He will get back to you as soon as possible.",
      openInEmail: "Also Open in Email Client",
      sendAnother: "Send Another",
      fallbackTitle: "One More Step",
      fallbackMessage:
        "Direct email delivery is not configured on this deployment yet. Your message is ready — use the button below to send it from your own email app.",
      validation: {
        name: "Please enter a valid name (at least 2 characters).",
        email: "Please enter a valid email address.",
        subject: "Please enter a subject.",
        message: "Please enter a message of at least 10 characters.",
        networkError: "Network error: Could not reach the server. Please try again or use direct email.",
        rateLimited:
          "Too many messages sent from this address. Please wait a few minutes or email directly.",
      },
    },
    footer: {
      bio: "Full Stack & AI Developer passionate about artificial intelligence, computer vision, and building high-performance modern web experiences.",
      navigation: "Navigation",
      connect: "Connect",
      locationLabel: "Location",
      locationValue: "Algeria (UMBB / Tébessa)",
      emailLabel: "Direct Email",
      githubLabel: "GitHub Handle",
      backToTop: "Back to top",
      copyright: "All rights reserved. Built with Next.js, Tailwind CSS & Framer Motion.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      journey: "Parcours",
      capabilities: "Capacités",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
      smartCV: "Espace CV",
      getInTouch: "Me contacter",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      cmdShortcut: "Cmd+K",
      themeSystem: "Système",
      themeDark: "Sombre",
      themeLight: "Clair",
    },
    hero: {
      statusBadge: "Master Spécialité I2A • IA & Full Stack",
      greetingPre: "Bonjour, je suis",
      greetingName: "Ouael",
      title: "Développeur Full Stack & IA",
      description:
        "Je conçois des applications intelligentes, explore l'intelligence artificielle et transforme les idées en expériences numériques modernes.",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter",
      downloadCV: "Télécharger CV",
      githubAria: "Profil GitHub",
      youtubeAria: "Chaîne YouTube",
      highlights: {
        pytorch: "PyTorch & Deep Learning",
        vision: "Vision par ordinateur",
        nextjs: "Next.js & Full Stack",
      },
      terminal: {
        title: "developer.ts",
        copyTitle: "Copier l'extrait",
        copied: "Copié !",
        activeSession: "Session active",
        devStatus: "Prêt à concevoir & innover",
        passion: "Transformer les idées en expériences numériques modernes",
      },
      floatingBadges: {
        superRes: "IA Super-Résolution",
        fullstack: "Full Stack & Automatisation",
      },
    },
    commandPalette: {
      placeholder: "Tapez une commande ou cherchez (ex. projets, cv, python)...",
      noResults: "Aucune commande ou technologie correspondante trouvée.",
      keyboardHint: "ESC pour fermer, ↑↓ pour naviguer, ENTRÉE pour exécuter",
      categories: {
        navigation: "Navigation & Rubriques",
        interactive: "Outils Développeur & Lab IA",
        preferences: "Préférences & Actions",
        social: "Profils Externes",
      },
      items: {
        home: "Aller à l'Accueil",
        about: "Aller à À Propos",
        skills: "Aller aux Compétences & Stack",
        journey: "Aller au Parcours Développeur",
        capabilities: "Aller aux Capacités Techniques & Architectures",
        projects: "Aller aux Projets Vedettes",
        education: "Aller au Parcours Académique",
        contact: "Aller à la Section Contact",
        smartCV: "Ouvrir l'Espace CV Intelligent (PDF)",
        superResDemo: "Lancer la Démo Super-Résolution IA",
        iotSimulation: "Inspecter le Circuit IoT Wokwi",
        terminal: "Ouvrir le Terminal de Code Interactif",
        copyEmail: "Copier l'Email Direct",
        emailCopied: "Adresse email copiée dans le presse-papiers !",
        themeDark: "Activer le Thème Sombre",
        themeLight: "Activer le Thème Clair",
        themeSystem: "Activer le Thème Système (Auto)",
        langEn: "Switch Language to English",
        langFr: "Passer la langue en Français",
        github: "Ouvrir le Profil GitHub (@djeddiouael)",
        youtube: "Ouvrir la Chaîne YouTube (@djeddiouael)",
        linkedin: "Ouvrir le Profil LinkedIn (DJEDDI Ouael)",
      },
    },
    journey: {
      badge: "03 // PARCOURS DÉVELOPPEUR",
      title: "Parcours Académique & Étapes d'Ingénierie",
      subtitle:
        "Une chronologie fidèle des fondements universitaires, des expérimentations de recherche, des stages, des missions freelance et des réalisations logicielles concrètes.",
      contextLabel: "Contexte",
      placeholderLabel: "À compléter",
      filters: {
        all: "Toutes les étapes",
        academic: "Cursus Académique",
        ai: "IA & Recherche",
        engineering: "Génie Logiciel",
        internship: "Stages",
        freelance: "Freelance",
      },
      milestones: [
        {
          id: "m7",
          category: "internship",
          categoryLabel: "Stage",
          title: "Stage — [Nom de l'entreprise]",
          period: "[Mois Année] — [Mois Année]",
          institutionOrContext: "[Entreprise · Ville / À distance]",
          description:
            "Emplacement à compléter : décrivez la mission du stage, l'équipe rejointe, vos responsabilités quotidiennes et la stack technique utilisée. Remplacez ce texte par votre expérience réelle.",
          tags: ["[Votre rôle]", "[Stack principale]", "[Mission clé]"],
          isPlaceholder: true,
        },
        {
          id: "m8",
          category: "freelance",
          categoryLabel: "Freelance",
          title: "Projet Freelance — [Client / Nom du projet]",
          period: "[Mois Année] — [Mois Année]",
          institutionOrContext: "[Client · À distance]",
          description:
            "Emplacement à compléter : décrivez la solution livrée, vos responsabilités du cadrage au déploiement et le résultat mesurable pour le client. Remplacez ce texte par votre mission réelle.",
          tags: ["[Service]", "[Stack]", "[Résultat]"],
          isPlaceholder: true,
        },
        {
          id: "m1",
          category: "academic",
          categoryLabel: "Fondations Académiques",
          title: "Fondements de l'Informatique & Rigueur Algorithmique",
          period: "Cursus Universitaire",
          institutionOrContext: "Université de Tébessa",
          description:
            "Acquisition d'un socle solide en informatique théorique, algorithmique avancée, structures de données, conception orientée objet, bases de données relationnelles et mathématiques appliquées.",
          tags: ["Algorithmes", "Structures de données", "POO", "Bases de données", "Génie logiciel"],
        },
        {
          id: "m2",
          category: "engineering",
          categoryLabel: "Ingénierie de Données",
          title: "Architectures d'Extraction & Crawling Automatisé",
          period: "Projet d'Ingénierie",
          institutionOrContext: "Python Books Web Scraper",
          description:
            "Conception d'une architecture de scraping automatisée en Python avec gestion de requêtes paginées, persistance de sessions HTTP, gestion d'erreurs et export vers des pipelines structurés.",
          tags: ["Python", "Web Scraping", "Requests", "BeautifulSoup", "Pipelines de données"],
        },
        {
          id: "m3",
          category: "engineering",
          categoryLabel: "Systèmes & IoT",
          title: "Programmation Microcontrôleur & Télémétrie Virtuelle IoT",
          period: "Simulation Matérielle",
          institutionOrContext: "Projet SEI IoT (Wokwi)",
          description:
            "Mise en œuvre d'une logique embarquée et simulation de capteurs dans l'environnement virtuel Wokwi, intégrant l'acquisition de température, de distance ultrasonique et le contrôle d'actionneurs.",
          tags: ["IoT", "C Embarqué", "Wokwi", "Capteurs", "Télémétrie"],
        },
        {
          id: "m4",
          category: "engineering",
          categoryLabel: "Web Full Stack",
          title: "Plateforme de Gestion des Transferts Universitaires",
          period: "Système Full Stack",
          institutionOrContext: "Plateforme de Transfert Universitaire",
          description:
            "Conception d'une plateforme web complète pour fluidifier le dépôt des dossiers étudiants, la validation des pièces administratives et le suivi pédagogique avec gestion des rôles.",
          tags: ["Node.js", "Full Stack", "API REST", "UI Moderne", "Architecture Base de Données"],
        },
        {
          id: "m5",
          category: "academic",
          categoryLabel: "Master Spécialisé",
          title: "Études de Master — Spécialité I2A (Informatique Intelligente)",
          period: "Programme de Master en cours",
          institutionOrContext: "Université de Boumerdès (UMBB)",
          description:
            "Spécialisation approfondie en Informatique Intelligente & Applications (I2A), axée sur les réseaux de neurones profonds, la théorie du machine learning, la vision par ordinateur et les systèmes intelligents.",
          tags: ["Intelligence Artificielle", "Machine Learning", "Réseaux Neuronaux", "Informatique Appliquée"],
        },
        {
          id: "m6",
          category: "ai",
          categoryLabel: "Recherche en Vision IA",
          title: "Reconstruction par Super-Résolution d'Image Unique",
          period: "Projet de Recherche Deep Learning",
          institutionOrContext: "PyTorch & Vision par Ordinateur",
          description:
            "Recherche et entraînement de modèles neuronaux convolutifs profonds pour la reconstruction haute définition 4x à partir d'images dégradées, avec analyse de fonctions de perte perceptuelle.",
          tags: ["PyTorch", "Vision par ordinateur", "Super-Résolution", "Deep Learning", "Réseaux Convolutifs"],
        },
      ],
    },
    smartCV: {
      badge: "ESPACE CV INTELLIGENT",
      title: "Curriculum Vitae Professionnels",
      subtitle:
        "Consultez et téléchargez les profils ciblés en Ingénierie Full Stack ou Intelligence Artificielle & Deep Learning.",
      buttonLabel: "Télécharger CV",
      modalTitle: "Sélectionnez le Profil CV",
      modalSubtitle: "Choisissez la déclinaison adaptée à vos besoins ou opportunités professionnelles.",
      profiles: {
        fullstack: {
          title: "Ingénieur Logiciel Full Stack",
          tagline: "Architecture Web, API & Frontend Réactif",
          description:
            "Axé sur les applications web modernes, TypeScript, Next.js, les backends Node.js, les API RESTful et les architectures logicielles évolutives.",
          competencies: ["Next.js & React", "TypeScript & Node.js", "Tailwind CSS", "Architecture Base de Données", "Git & Docker"],
          filename: "DJEDDI_Ouael_FullStack_CV.pdf",
        },
        ai: {
          title: "Développeur IA & Vision par Ordinateur",
          tagline: "Deep Learning, PyTorch & Systèmes Intelligents",
          description:
            "Axé sur l'entraînement de réseaux de neurones, PyTorch, la restauration d'images par vision artificielle et les pipelines d'automatisation de données en Python.",
          competencies: ["PyTorch & Deep Learning", "Vision par ordinateur", "TensorFlow & Scikit-learn", "NumPy & Pandas", "Pipelines de Données"],
          filename: "DJEDDI_Ouael_AI_CV.pdf",
        },
      },
      downloadPdf: "Télécharger le PDF",
      noticeTitle: "Note de Préparation des Documents",
      noticeMessage:
        "La version PDF statique de ce profil est actuellement en cours de finalisation pour le semestre universitaire courant. Vous pouvez consulter l'ensemble des projets vérifiés et formations directement sur ce portfolio ou contacter Ouael par email.",
      contactInstead: "Contacter Ouael Directement",
      close: "Fermer",
    },
    about: {
      badge: "01 // À PROPOS",
      title: "Allier l'Intelligence Artificielle et le Génie Logiciel",
      subtitle:
        "Étudiant passionné en informatique, spécialisé dans les systèmes intelligents, les architectures neuronales et le développement web full stack.",
      cardTitle: "DJEDDI Ouael",
      cardRole: "Étudiant en Master • Spécialité I2A",
      p1: "Je suis étudiant en informatique avec un intérêt marqué pour l'intelligence artificielle, l'apprentissage automatique et le développement web full stack moderne. Mon parcours universitaire et mes projets pratiques s'articulent autour de la synergie entre puissance algorithmique et génie logiciel intuitif et performant.",
      p2: "De l'entraînement de modèles de deep learning pour la vision par ordinateur à la conception de plateformes web réactives et la simulation d'architectures IoT embarquées, j'aime résoudre des problématiques complexes grâce à une architecture propre et un apprentissage continu.",
      bullets: {
        algorithms: "Solide socle en algorithmique et structures de données",
        deepLearning: "Pratique du deep learning et de la vision par ordinateur",
        webArchitecture: "Conception complète d'applications web et de pipelines",
      },
      focusAreas: {
        ai: {
          title: "Intelligence Artificielle & ML",
          desc: "Conception de réseaux de neurones, d'architectures d'apprentissage profond et d'algorithmes intelligents appliqués aux données visuelles.",
        },
        fullstack: {
          title: "Développement Full Stack",
          desc: "Architecture d'applications de bout en bout avec des frameworks frontend modernes, des backends structurés et des interfaces soignées.",
        },
        vision: {
          title: "Vision par ordinateur & Deep Learning",
          desc: "Traitement de données visuelles, reconstruction par super-résolution et extraction de caractéristiques via des réseaux profonds.",
        },
        iot: {
          title: "Génie Logiciel & IoT",
          desc: "Application des bonnes pratiques logicielles, contrôle de version, scrapers automatisés et simulations matérielles-logicielles.",
        },
      },
      activeExploration: "Exploration active →",
    },
    skills: {
      badge: "02 // COMPÉTENCES & STACK",
      title: "Technologies, Frameworks & Outils",
      subtitle:
        "Un ensemble complet d'outils couvrant le deep learning, les algorithmes de machine learning, les frameworks frontend modernes et l'infrastructure d'ingénierie logicielle.",
      filters: {
        all: "Toutes les technologies",
        ai: "IA & Machine Learning",
        programming: "Programmation",
        web: "Développement Web",
        tools: "Outils & Infrastructure",
      },
      categories: {
        programming: {
          title: "Programmation",
          desc: "Langages fondamentaux pour la résolution algorithmique et l'ingénierie logicielle",
        },
        ai: {
          title: "IA & Machine Learning",
          desc: "Frameworks de deep learning, vision par ordinateur et calcul scientifique",
        },
        web: {
          title: "Développement Web",
          desc: "Frameworks réactifs modernes et systèmes de conception adaptatifs",
        },
        tools: {
          title: "Outils & Infrastructure",
          desc: "Gestion de versions, conteneurisation et environnements de développement",
        },
      },
      skillItems: {
        Python: "Langage principal pour l'IA, le deep learning, l'automatisation et la data science",
        TypeScript: "Typage strict pour concevoir des applications web résilientes et évolutives",
        JavaScript: "Ingénierie frontend dynamique, API asynchrones et interfaces interactives",
        HTML: "Structures sémantiques, accessibilité du DOM et fondations SEO",
        CSS: "Mises en page modernes, design adaptatif, animations et styles personnalisés",
        PyTorch: "Modèles d'apprentissage profond, graphes dynamiques et calculs tensoriels",
        TensorFlow: "Entraînement de réseaux de neurones et apprentissage automatique de bout en bout",
        "Computer Vision": "Traitement d'images, restauration super-résolution et détection de traits",
        "Scikit-learn": "Algorithmes classiques d'apprentissage supervisé et non supervisé",
        NumPy: "Calculs vectoriels, matriciels et multidimensionnels haute performance",
        Pandas: "Manipulation de données, nettoyage tabulaire, agrégations et feature engineering",
        React: "Architecture orientée composants, gestion d'état et hooks réactifs",
        "Next.js": "App Router, rendu hybride (SSR/SSG), composants serveur et routes API",
        "Node.js": "Environnement d'exécution serveur, API REST et logique métier backend",
        "Tailwind CSS": "Design utilitaire moderne, interfaces responsives et effets de verre",
        Git: "Gestion de versions distribuée, branches et suivi de l'historique de code",
        GitHub: "Collaboration sur dépôts, hébergement open-source et gestion des issues",
        "VS Code": "Environnement de développement principal avec extensions et outillage sur-mesure",
        Docker: "Environnements conteneurisés garantissant la reproductibilité des déploiements",
      },
      activeStack: "Stack Active",
      verified: "Vérifié",
      clickToFilter: "Cliquer pour voir les projets associés",
      exploreProjects: "Explorer les projets",
    },
    projects: {
      badge: "04 // PROJETS VEDETTES",
      title: "Solutions Développées & Prototypes de Recherche",
      subtitle:
        "Découvrez une sélection de projets en vision générative par ordinateur, pipelines de données automatisés, plateformes universitaires et simulations IoT.",
      explorerHint: "Explorateur de Technologies : Filtrez les projets en cliquant sur les technologies ci-dessous ou sur n'importe quelle carte de projet.",
      activeTechFilter: "Filtre Technologie Actif",
      clearFilter: "Effacer le filtre",
      filters: {
        all: "Tous",
        ai: "IA & Deep Learning",
        scraping: "Web Scraping",
        web: "Web & Full Stack",
        iot: "IoT & Embarqué",
      },
      labels: {
        domain: "Domaine",
        coreTool: "Outil Clé",
        type: "Type",
        scope: "Portée",
        field: "Discipline",
        simulator: "Simulateur",
        viewRepo: "Profil GitHub",
        simulationDemo: "Démo simulation",
        localPrototype: "Prototype local / Poids du modèle",
        matchingProjects: "projets correspondants",
      },
      visuals: {
        lowResInput: "ENTRÉE BASSE DÉF.",
        degradedBicubic: "Bicubique dégradé",
        fourXReconstruction: "RECONSTRUCTION 4X",
        highFreqRestored: "Hautes fréquences restaurées",
        simulationActive: "SIMULATION ACTIVE",
        sensorTelemetry: "Télémétrie Capteurs",
        wokwiHardware: "Matériel Virtuel Wokwi",
        transferPortal: "Portail de Transfert Académique",
        adminDossier: "Administration Full-Stack",
        crawlerConsole: "crawler_pipeline.py",
      },
      items: {
        superRes: {
          title: "Single Image Super-Resolution",
          tagline: "Deep Learning & Vision Générative",
          desc: "Modèle d'apprentissage profond conçu pour reconstruire des images haute résolution à partir d'entrées dégradées. Axé sur l'amélioration neuronale de l'image, la restauration des contours et la fidélité des détails.",
          highlights: [
            "Reconstruction spatiale et rehaussement d'image via architectures neuronales convolutives",
            "Optimisation de fonctions de perte perceptuelle pour des textures nettes",
            "Évaluation comparative du modèle face aux interpolations classiques (Bicubique)",
          ],
        },
        scraper: {
          title: "Python Books Web Scraper",
          tagline: "Extraction Automatisée & Pipeline de Données",
          desc: "Outil automatisé en Python permettant de parcourir, analyser et extraire des données structurées de livres sur plusieurs pages de catalogue. Gère les requêtes HTTP, le respect des fréquences et l'export tabulaire.",
          highlights: [
            "Gestion automatique de la pagination et parsing robuste du DOM HTML",
            "Extraction soignée des titres, tarifs, notations, disponibilités et métadonnées",
            "Exportation vers des pipelines structurés CSV et JSON pour l'analyse",
          ],
        },
        university: {
          title: "University Transfer Platform",
          tagline: "Système de Gestion Universitaire Full Stack",
          desc: "Plateforme web full stack de gestion des transferts universitaires, facilitant le dépôt des candidatures étudiantes, la vérification administrative des pièces justificatives et les décisions pédagogiques.",
          highlights: [
            "Parcours utilisateur distincts pour étudiants et administrateurs",
            "Soumission de dossiers, suivi en temps réel et validation d'état",
            "Interface claire et responsive connectée à une base de données structurée",
          ],
        },
        iot: {
          title: "SEI IoT Project",
          tagline: "Systèmes Embarqués & Simulation Matérielle",
          desc: "Projet d'Internet des Objets et de systèmes embarqués simulé avec Wokwi. Comprend l'acquisition de données de capteurs, la logique de microcontrôleur et le traitement télémétrique en temps réel sur circuit virtuel.",
          highlights: [
            "Simulation de circuit microcontrôleur exécutée dans l'environnement virtuel Wokwi",
            "Acquisition télémétrique continue et déclenchement d'actionneurs matériels",
            "Contrôle logique bas niveau et programmation embarquée modulaire",
          ],
        },
      },
    },
    education: {
      badge: "05 // PARCOURS ACADÉMIQUE",
      title: "Formation & Cursus Académique",
      subtitle:
        "Formation universitaire formelle spécialisée en informatique intelligente, architectures de machine learning et principes fondamentaux du génie logiciel.",
      currentStudies: "Études en cours",
      masterDegree: "Études de Master — Spécialité I2A",
      masterSpec: "Informatique Intelligente & Applications (I2A)",
      masterInst: "Université de Boumerdès (UMBB)",
      masterLoc: "Boumerdès, Algérie",
      masterDesc:
        "Programme de Master approfondi axé sur les systèmes intelligents, l'intelligence artificielle avancée, le machine learning, les architectures neuronales profondes et l'informatique appliquée.",
      bachelorDegree: "Études universitaires antérieures en informatique",
      bachelorInst: "Université de Tébessa",
      bachelorLoc: "Tébessa, Algérie",
      bachelorDesc:
        "Cursus informatique fondamental couvrant l'algorithmique théorique, les structures de données, la programmation orientée objet, le génie logiciel, les bases de données et les mathématiques.",
      tags: {
        ai: "Intelligence Artificielle",
        ml: "Machine Learning",
        systems: "Systèmes Intelligents",
        cs: "Informatique",
        algorithms: "Algorithmique",
        dataStructures: "Structures de Données",
        softwareEng: "Génie Logiciel",
        math: "Mathématiques",
      },
    },
    contact: {
      badge: "06 // CONTACT & ÉCHANGE",
      title: "Construisons Quelque Chose Ensemble",
      subtitle:
        "Intéressé par une collaboration en intelligence artificielle, un échange sur la recherche, du développement web full stack ou une opportunité ? Écrivez-moi via le formulaire ci-dessous ou directement par email.",
      directEmailTitle: "Email Direct",
      directEmailSubtitle: "N'hésitez pas à envoyer un message à tout moment",
      copy: "Copier",
      copied: "Copié !",
      responseWindow: "Délai de réponse : sous 24 à 48 heures",
      profilesTitle: "Profils & Réseaux",
      formTitle: "Envoyer un message",
      nameLabel: "Votre Nom",
      namePlaceholder: "ex. Jean Dupont",
      emailLabel: "Votre Email",
      emailPlaceholder: "ex. jean@example.com",
      subjectLabel: "Objet",
      subjectPlaceholder: "ex. Collaboration Projet IA / Développement Web",
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre projet, idée ou question ici...",
      submitButton: "Envoyer le message",
      submittingButton: "Validation & Envoi...",
      securityNote: "Validation directe via le serveur Next.js • Aucun traceur tiers",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci ! Votre message a bien été livré dans la boîte de réception d'Ouael. Il vous répondra dans les meilleurs délais.",
      openInEmail: "Ouvrir aussi dans votre messagerie",
      sendAnother: "Envoyer un autre message",
      fallbackTitle: "Une dernière étape",
      fallbackMessage:
        "L'envoi direct par email n'est pas encore configuré sur ce déploiement. Votre message est prêt — utilisez le bouton ci-dessous pour l'envoyer depuis votre propre messagerie.",
      validation: {
        name: "Veuillez entrer un nom valide (au moins 2 caractères).",
        email: "Veuillez entrer une adresse email valide.",
        subject: "Veuillez préciser un objet pour votre message.",
        message: "Veuillez saisir un message d'au moins 10 caractères.",
        networkError: "Erreur réseau : impossible de joindre le serveur. Veuillez réessayer ou utiliser l'email direct.",
        rateLimited:
          "Trop de messages envoyés depuis cette adresse. Merci de patienter quelques minutes ou d'écrire directement par email.",
      },
    },
    footer: {
      bio: "Développeur Full Stack & IA passionné par l'intelligence artificielle, la vision par ordinateur et la création d'expériences web modernes et performantes.",
      navigation: "Navigation",
      connect: "Contact",
      locationLabel: "Localisation",
      locationValue: "Algérie (UMBB / Tébessa)",
      emailLabel: "Email Direct",
      githubLabel: "Identifiant GitHub",
      backToTop: "Haut de page",
      copyright: "Tous droits réservés. Conçu avec Next.js, Tailwind CSS & Framer Motion.",
    },
  },
};
