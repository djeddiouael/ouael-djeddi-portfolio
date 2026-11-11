"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, Copy, ExternalLink, Maximize2, Minimize2, Terminal as TerminalIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CommandOutput {
  id: string;
  dir: string;
  command: string;
  content: React.ReactNode;
}

export function CodeTerminal() {
  const { t, language } = useLanguage();
  const [currentDir, setCurrentDir] = useState<string>("C:\\Users\\Ouael");
  const [inputVal, setInputVal] = useState<string>("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom whenever history updates
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, inputVal]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCopyTerminal = () => {
    const textLines = [
      "Microsoft Windows [Version 10.0.22631.4317]",
      "(c) Microsoft Corporation. All rights reserved.",
      "",
      ...history.map((h) => `${h.dir}> ${h.command}`),
    ].join("\n");
    navigator.clipboard.writeText(textLines);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) {
      // Empty enter
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          dir: currentDir,
          command: "",
          content: null,
        },
      ]);
      return;
    }

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").trim();

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
      case "?":
        outputNode = (
          <div className="space-y-2 text-[#cccccc] font-mono text-xs sm:text-[12.5px] py-1">
            <p className="text-white font-semibold">
              {language === "fr"
                ? "Pour plus d'informations sur une commande, tapez HELP <nom-commande>"
                : "For more information on a specific command, type HELP <command-name>"}
            </p>
            <div className="grid grid-cols-1 gap-1 pt-1">
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">HELP</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche l'aide des commandes de ce portfolio Windows."
                    : "Displays help information for available portfolio commands."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">DIR</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche la liste des fichiers et sous-dossiers."
                    : "Displays a list of files and subdirectories in directory."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">CD</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Change de dossier actuel (ex: cd projects, cd skills, cd ..)."
                    : "Changes the current directory (e.g. cd projects, cd skills, cd ..)."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">CLS</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Efface l'écran du terminal." : "Clears the terminal screen buffer."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">WHOAMI</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche l'identité et le rôle du développeur."
                    : "Displays developer identity, title, and current status."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">ABOUT</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche le parcours universitaire (Master I2A @ UMBB)."
                    : "Displays academic background and university specialization."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">PROJECTS</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Liste les projets phares (IA, Scraping, Full Stack, IoT)."
                    : "Lists featured engineering projects and technical domains."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">SKILLS</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche la stack technologique (Python, PyTorch, React, etc.)."
                    : "Displays tech stack competencies (Python, PyTorch, React, etc.)."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">GITHUB</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche les liens du profil GitHub et du dépôt."
                    : "Displays GitHub profile link and repository status."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">CONTACT</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche les coordonnées directes et la disponibilité."
                    : "Displays email, communication channels, and availability."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">PYTHON</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Lance le diagnostic de l'environnement Python & PyTorch."
                    : "Runs Python 3.11 environment and PyTorch diagnostics."}
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-white font-bold shrink-0">GIT</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Affiche l'état du dépôt Git et de la branche main."
                    : "Displays git branch status and repository synchronization."}
                </span>
              </div>
            </div>
          </div>
        );
        break;

      case "cls":
      case "clear":
        setHistory([]);
        return;

      case "dir":
        if (currentDir === "C:\\Users\\Ouael\\projects") {
          outputNode = (
            <div className="text-[#cccccc] font-mono text-xs sm:text-[12.5px] space-y-1">
              <p> Volume in drive C has no label.</p>
              <p> Volume Serial Number is 4C2A-98F1</p>
              <p className="mt-2"> Directory of C:\Users\Ouael\projects</p>
              <div className="pt-1 space-y-0.5">
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          .</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          ..</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          single-image-super-resolution</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          python-books-web-scraper</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          university-transfer-platform</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          sei-iot-project</p>
                <p>11/11/2026  08:30 PM             2,410 README.md</p>
              </div>
              <p className="pt-1">               1 File(s)          2,410 bytes</p>
              <p>               6 Dir(s)   284,912,414,720 bytes free</p>
            </div>
          );
        } else if (currentDir === "C:\\Users\\Ouael\\skills") {
          outputNode = (
            <div className="text-[#cccccc] font-mono text-xs sm:text-[12.5px] space-y-1">
              <p> Volume in drive C has no label.</p>
              <p> Volume Serial Number is 4C2A-98F1</p>
              <p className="mt-2"> Directory of C:\Users\Ouael\skills</p>
              <div className="pt-1 space-y-0.5">
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          .</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          ..</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          ai-machine-learning</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          programming-languages</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          web-development</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          tools-infrastructure</p>
              </div>
              <p className="pt-1">               0 File(s)              0 bytes</p>
              <p>               6 Dir(s)   284,912,414,720 bytes free</p>
            </div>
          );
        } else {
          outputNode = (
            <div className="text-[#cccccc] font-mono text-xs sm:text-[12.5px] space-y-1">
              <p> Volume in drive C has no label.</p>
              <p> Volume Serial Number is 4C2A-98F1</p>
              <p className="mt-2"> Directory of C:\Users\Ouael</p>
              <div className="pt-1 space-y-0.5">
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          .</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          ..</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          projects</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          skills</p>
                <p>11/11/2026  08:30 PM    &lt;DIR&gt;          education</p>
                <p>11/11/2026  08:30 PM             1,842 cv-fullstack.pdf</p>
                <p>11/11/2026  08:30 PM             1,920 cv-ai-specialist.pdf</p>
                <p>11/11/2026  08:30 PM               412 contact.txt</p>
                <p>11/11/2026  08:30 PM               890 developer-profile.json</p>
              </div>
              <p className="pt-1">               4 File(s)          5,064 bytes</p>
              <p>               5 Dir(s)   284,912,414,720 bytes free</p>
            </div>
          );
        }
        break;

      case "cd":
        if (!arg) {
          outputNode = <p className="text-[#cccccc] font-mono">{currentDir}</p>;
        } else if (arg === ".." || arg === "../") {
          setCurrentDir("C:\\Users\\Ouael");
          outputNode = null;
        } else if (arg.toLowerCase() === "projects") {
          setCurrentDir("C:\\Users\\Ouael\\projects");
          outputNode = null;
        } else if (arg.toLowerCase() === "skills") {
          setCurrentDir("C:\\Users\\Ouael\\skills");
          outputNode = null;
        } else if (arg === "\\" || arg === "/") {
          setCurrentDir("C:\\Users\\Ouael");
          outputNode = null;
        } else {
          outputNode = (
            <p className="text-[#cccccc] font-mono">
              {language === "fr"
                ? "Le chemin d'accès spécifié est introuvable."
                : "The system cannot find the path specified."}
            </p>
          );
        }
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold">ouael-pc\djeddi_ouael</p>
            <p>
              <span className="text-white font-semibold">Name:</span> DJEDDI Ouael
            </p>
            <p>
              <span className="text-white font-semibold">Title:</span> {t.hero.title}
            </p>
            <p>
              <span className="text-white font-semibold">Academic Program:</span> Master Specialty I2A (Artificial
              Intelligence & Applications) @ UMBB
            </p>
            <p>
              <span className="text-white font-semibold">Status:</span> Available for Internship & Technical
              Collaboration
            </p>
            <p>
              <span className="text-white font-semibold">Environment:</span> Windows 11 Pro 64-bit / WSL2 Ubuntu Linux
            </p>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="space-y-2 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold border-b border-white/20 pb-1">
              {language === "fr" ? "PROFIL ACADÉMIQUE & DÉVELOPPEUR" : "DEVELOPER & ACADEMIC DOSSIER"}
            </p>
            <p>
              <span className="text-white">Name:</span> DJEDDI Ouael
            </p>
            <p>
              <span className="text-white">Current Degree:</span> Master Specialty: Intelligence Artificielle et
              Applications (I2A)
            </p>
            <p>
              <span className="text-white">Institution:</span> Université M&apos;Hamed Bougara de Boumerdes (UMBB)
            </p>
            <p>
              <span className="text-white">Undergraduate:</span> Licence Informatique Générale @ UMBB (2020 - 2023)
            </p>
            <p>
              <span className="text-white">Focus:</span> {t.hero.description}
            </p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-3 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold">
              {language === "fr" ? "PROJETS PHARES RÉALISÉS :" : "FEATURED ENGINEERING PROJECTS:"}
            </p>
            <div className="space-y-2 pl-1 border-l-2 border-white/20">
              <div>
                <p className="text-white font-semibold">[1] Single Image Super-Resolution</p>
                <p className="text-[#a0a0a0]">
                  {language === "fr"
                    ? "Domaine : IA Générative / Vision par Ordinateur | PyTorch, Deep Learning"
                    : "Domain: Generative AI / Computer Vision | PyTorch, Deep Learning"}
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">[2] Python Books Web Scraper</p>
                <p className="text-[#a0a0a0]">
                  {language === "fr"
                    ? "Domaine : Extraction de données web | Python, BeautifulSoup, Requests, Pandas"
                    : "Domain: Web Scraping & Data Mining | Python, BeautifulSoup, Requests, Pandas"}
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">[3] University Transfer Platform</p>
                <p className="text-[#a0a0a0]">
                  {language === "fr"
                    ? "Domaine : Application Web Full Stack | TypeScript, Node.js, Base relationnelle"
                    : "Domain: Full Stack Web Application | TypeScript, Node.js, Relational DB"}
                </p>
              </div>
              <div>
                <p className="text-white font-semibold">[4] SEI IoT Project</p>
                <p className="text-[#a0a0a0]">
                  {language === "fr"
                    ? "Domaine : Systèmes Embarqués & Télémétrie | Simulation Wokwi, Microcontrôleurs"
                    : "Domain: Embedded Systems & Sensor Telemetry | Wokwi Simulation, Microcontroller"}
                </p>
              </div>
            </div>
            <p className="text-[#888888] text-[11px]">
              {language === "fr"
                ? "Astuce : Tapez 'cd projects' puis 'dir' pour explorer les dossiers de projets."
                : "Tip: Type 'cd projects' then 'dir' to navigate project subdirectories."}
            </p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-2 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold">
              {language === "fr" ? "COMPÉTENCES & STACK TECHNIQUE :" : "CORE TECHNICAL STACK:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-white font-semibold block">Programming:</span>
                <span className="text-[#a0a0a0]">Python, TypeScript, JavaScript, HTML5, CSS3</span>
              </div>
              <div>
                <span className="text-white font-semibold block">AI & Machine Learning:</span>
                <span className="text-[#a0a0a0]">PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, Computer Vision</span>
              </div>
              <div>
                <span className="text-white font-semibold block">Web Development:</span>
                <span className="text-[#a0a0a0]">React, Next.js, Node.js, Tailwind CSS</span>
              </div>
              <div>
                <span className="text-white font-semibold block">Developer Tools:</span>
                <span className="text-[#a0a0a0]">Git, GitHub, VS Code, Docker</span>
              </div>
            </div>
          </div>
        );
        break;

      case "github":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold">GitHub Repositories & Profile:</p>
            <p>
              Profile URL:{" "}
              <a
                href="https://github.com/djeddiouael"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                https://github.com/djeddiouael <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p>
              Repository:{" "}
              <a
                href="https://github.com/djeddiouael/ouael-djeddi-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                djeddiouael/ouael-djeddi-portfolio <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold">
              {language === "fr" ? "COORDONNÉES DE CONTACT :" : "CONTACT CHANNELS:"}
            </p>
            <p>
              <span className="text-white">Email:</span> ouael.djeddi.contact@gmail.com
            </p>
            <p>
              <span className="text-white">GitHub:</span> https://github.com/djeddiouael
            </p>
            <p>
              <span className="text-white">YouTube:</span> https://www.youtube.com/@djeddiouael
            </p>
            <p>
              <span className="text-white">LinkedIn:</span> https://linkedin.com/in/ouael-djeddi
            </p>
            <p>
              <span className="text-white">Location:</span> Boumerdes / Algiers, Algeria
            </p>
          </div>
        );
        break;

      case "python":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p>Python 3.11.8 (tags/v3.11.8:d7440f2) [MSC v.1937 64 bit (AMD64)] on win32</p>
            <p>Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.</p>
            <p className="text-[#a0a0a0]">&gt;&gt;&gt; import torch, torchvision</p>
            <p className="text-[#a0a0a0]">&gt;&gt;&gt; print(f&quot;Torch Version: &#123;torch.__version__&#125;&quot;)</p>
            <p className="text-emerald-400">Torch Version: 2.2.1+cu121 | CUDA Acceleration: Enabled</p>
            <p className="text-[#a0a0a0]">&gt;&gt;&gt; import nextjs, react, typescript</p>
            <p className="text-cyan-400">&gt;&gt;&gt; print(&quot;Full Stack &amp; AI Workspace initialized successfully.&quot;)</p>
            <p className="text-white font-semibold">Full Stack &amp; AI Workspace initialized successfully.</p>
          </div>
        );
        break;

      case "git":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-semibold">On branch main</p>
            <p>Your branch is up to date with &apos;origin/main&apos;.</p>
            <p className="pt-1 text-[#888888]">Remote origin: https://github.com/djeddiouael/ouael-djeddi-portfolio.git</p>
            <p className="text-emerald-400">nothing to commit, working tree clean</p>
          </div>
        );
        break;

      case "exit":
        setHistory([]);
        setCurrentDir("C:\\Users\\Ouael");
        return;

      default:
        outputNode = (
          <p className="text-[#cccccc] font-mono">
            &apos;{trimmed}&apos;{" "}
            {language === "fr"
              ? "n'est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez 'help' pour la liste des commandes."
              : "is not recognized as an internal or external command, operable program or batch file. Type 'help' for available commands."}
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        dir: currentDir,
        command: trimmed,
        content: outputNode,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const available = [
        "help",
        "dir",
        "cd",
        "cls",
        "whoami",
        "about",
        "projects",
        "skills",
        "github",
        "contact",
        "python",
        "git",
      ];
      const match = available.find((c) => c.startsWith(inputVal.toLowerCase().trim()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const runQuickCommand = (cmd: string) => {
    executeCommand(cmd);
    focusInput();
  };

  return (
    <div
      ref={containerRef}
      onClick={focusInput}
      className={`w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-[#333333] bg-[#0c0c0c] shadow-2xl text-left font-mono transition-all duration-300 ${
        isExpanded ? "max-h-[580px]" : "max-h-[440px]"
      } flex flex-col`}
    >
      {/* Authentic Windows CMD Title Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#181818] border-b border-[#282828] select-none text-[#cccccc] text-xs">
        {/* Left: Authentic Command Prompt Icon & Title */}
        <div className="flex items-center gap-2">
          {/* Windows CMD icon box */}
          <div className="w-4 h-3.5 bg-black border border-slate-500 flex items-center justify-center text-[9px] font-bold text-white leading-none">
            &gt;_
          </div>
          <span className="font-sans text-[12px] text-slate-200 truncate">
            {language === "fr"
              ? "Invite de commandes - [Espace Travail Ouael]"
              : "Command Prompt - [Ouael AI Workspace]"}
          </span>
        </div>

        {/* Right: Windows CMD Window Controls */}
        <div className="flex items-center">
          {/* Copy terminal output */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCopyTerminal();
            }}
            className="px-2 py-1 text-slate-400 hover:text-white hover:bg-[#333333] transition-colors"
            title="Copy command prompt buffer"
            aria-label="Copy command prompt buffer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Minimize */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }}
            className="px-2.5 py-1 text-slate-400 hover:text-white hover:bg-[#333333] transition-colors text-sm"
            title="Minimize / Reset"
            aria-label="Minimize"
          >
            &#x2500;
          </button>

          {/* Maximize */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="px-2.5 py-1 text-slate-400 hover:text-white hover:bg-[#333333] transition-colors"
            title={isExpanded ? "Restore" : "Maximize"}
            aria-label="Maximize"
          >
            {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          </button>

          {/* Close (turns Windows red on hover) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }}
            className="px-2.5 py-1 text-slate-400 hover:text-white hover:bg-[#e81123] transition-colors text-xs"
            title="Close"
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto leading-relaxed selection:bg-white selection:text-black text-xs sm:text-[12.5px] text-[#cccccc] cursor-text space-y-2">
        {/* Windows Header Banner */}
        <div className="text-[#cccccc] select-text">
          <p>Microsoft Windows [Version 10.0.22631.4317]</p>
          <p>(c) Microsoft Corporation. All rights reserved.</p>
        </div>

        {/* Command History Outputs */}
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-1 text-white font-mono">
              <span className="text-[#cccccc]">{item.dir}&gt;</span>
              <span>{item.command}</span>
            </div>
            {item.content && <div className="pl-0">{item.content}</div>}
          </div>
        ))}

        {/* Active Command Input Line */}
        <div className="flex items-center gap-1 pt-0.5">
          <span className="text-[#cccccc] shrink-0 font-mono">{currentDir}&gt;</span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              className="w-full bg-transparent text-white font-mono text-xs sm:text-[12.5px] focus:outline-none caret-white p-0 m-0 border-0"
              aria-label="Windows Command Prompt input"
            />
          </div>
        </div>

        <div ref={terminalEndRef} />
      </div>

      {/* Touch-Friendly Quick Command Suggestion Bar */}
      <div className="px-3 py-2 bg-[#141414] border-t border-[#222222] flex items-center justify-between text-[11px] text-slate-400 select-none">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] text-slate-500 font-mono uppercase mr-1 hidden sm:inline">
            {language === "fr" ? "Commandes :" : "Quick :"}
          </span>
          {["help", "dir", "whoami", "projects", "skills", "python", "git", "cls"].map((c) => (
            <button
              key={c}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                runQuickCommand(c);
              }}
              className="px-2 py-0.5 rounded bg-[#222222] hover:bg-[#333333] text-slate-300 hover:text-white border border-[#333333] font-mono text-[11px] transition-colors"
            >
              {c}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] text-slate-500 font-mono shrink-0">
          <span>CMD.EXE</span>
          <span>|</span>
          <span className="text-emerald-400 font-medium">&#x25CF; ONLINE</span>
        </div>
      </div>
    </div>
  );
}
