export type Language = "en" | "fr";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    status: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
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
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
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
    validation: {
      name: string;
      email: string;
      subject: string;
      message: string;
      networkError: string;
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
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      status: "Open to AI Collab",
      getInTouch: "Get In Touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
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
    },
    projects: {
      badge: "03 // FEATURED PROJECTS",
      title: "Engineered Solutions & Research Prototypes",
      subtitle:
        "Explore selected works across generative computer vision, automated data pipelines, full stack academic management systems, and IoT embedded simulations.",
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
        viewRepo: "View Repository",
        simulationDemo: "Simulation Demo",
        localPrototype: "Local prototype / Model weights",
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
      badge: "04 // ACADEMIC BACKGROUND",
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
      badge: "05 // CONTACT & CONNECT",
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
      successTitle: "Message Transmitted!",
      successMessage:
        "Thank you! Your message was received and logged. Ouael will review and respond promptly.",
      openInEmail: "Also Open in Email Client",
      sendAnother: "Send Another",
      validation: {
        name: "Please enter a valid name (at least 2 characters).",
        email: "Please enter a valid email address.",
        subject: "Please enter a subject.",
        message: "Please enter a message of at least 10 characters.",
        networkError: "Network error: Could not reach the server. Please try again or use direct email.",
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
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
      status: "Disponible pour projets IA",
      getInTouch: "Me contacter",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
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
    },
    projects: {
      badge: "03 // PROJETS VEDETTES",
      title: "Solutions Développées & Prototypes de Recherche",
      subtitle:
        "Découvrez une sélection de projets en vision générative par ordinateur, pipelines de données automatisés, plateformes universitaires et simulations IoT.",
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
        viewRepo: "Voir le dépôt",
        simulationDemo: "Démo simulation",
        localPrototype: "Prototype local / Poids du modèle",
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
      badge: "04 // PARCOURS ACADÉMIQUE",
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
      badge: "05 // CONTACT & ÉCHANGE",
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
      successTitle: "Message Transmis !",
      successMessage:
        "Merci ! Votre message a bien été reçu et enregistré. Ouael prendra le temps de l'examiner et vous répondra rapidement.",
      openInEmail: "Ouvrir aussi dans votre messagerie",
      sendAnother: "Envoyer un autre message",
      validation: {
        name: "Veuillez entrer un nom valide (au moins 2 caractères).",
        email: "Veuillez entrer une adresse email valide.",
        subject: "Veuillez préciser un objet pour votre message.",
        message: "Veuillez saisir un message d'au moins 10 caractères.",
        networkError: "Erreur réseau : impossible de joindre le serveur. Veuillez réessayer ou utiliser l'email direct.",
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
