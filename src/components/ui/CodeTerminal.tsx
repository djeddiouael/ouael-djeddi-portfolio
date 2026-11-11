"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, Copy, ExternalLink, Maximize2, Minimize2, Sparkles } from "lucide-react";
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

  // AI Assistant natural language responder
  const handleAIChat = (prompt: string): React.ReactNode => {
    const q = prompt.toLowerCase().trim();

    if (!q || q === "help" || q === "aide") {
      return (
        <div className="space-y-1.5 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-purple-500 pl-2.5 my-1">
          <div className="flex items-center gap-1.5 text-purple-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[Ouael-AI Assistant]</span>
          </div>
          <p className="text-white">
            {language === "fr"
              ? "Bonjour ! Je suis l'assistant IA intégré de DJEDDI Ouael. Posez-moi n'importe quelle question :"
              : "Hello! I am Ouael's portfolio AI assistant. Ask me anything in natural language:"}
          </p>
          <div className="space-y-1 text-cyan-300 pt-1 text-[11.5px]">
            <p>• &quot;ai qui est Ouael ?&quot; / &quot;ai who is Ouael?&quot;</p>
            <p>• &quot;ai parle-moi de tes projets&quot; / &quot;ai what projects did you build?&quot;</p>
            <p>• &quot;ai que fais-tu en Super-Résolution ?&quot; / &quot;ai tell me about super-resolution&quot;</p>
            <p>• &quot;ai quelles sont tes compétences ?&quot; / &quot;ai what is your tech stack?&quot;</p>
            <p>• &quot;ai comment te contacter ?&quot; / &quot;ai how to contact you?&quot;</p>
          </div>
        </div>
      );
    }

    if (
      q.includes("bonjour") ||
      q.includes("salut") ||
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("coucou")
    ) {
      return (
        <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-purple-500 pl-2.5 my-1">
          <p className="text-purple-400 font-bold">[Ouael-AI Assistant]</p>
          <p className="text-white">
            {language === "fr"
              ? "Bonjour et bienvenue sur mon portfolio ! Je suis DJEDDI Ouael, étudiant en Master I2A à l'UMBB et développeur Full Stack & IA passionné par le Deep Learning, la vision par ordinateur et les applications web modernes. Que souhaitez-vous découvrir ?"
              : "Hello and welcome to my portfolio! I am DJEDDI Ouael, Master I2A student at UMBB and Full Stack & AI Developer passionate about Deep Learning, Computer Vision, and modern web applications. What would you like to explore?"}
          </p>
        </div>
      );
    }

    if (
      q.includes("qui") ||
      q.includes("who") ||
      q.includes("presentation") ||
      q.includes("présentation") ||
      q.includes("bio") ||
      q.includes("about")
    ) {
      return (
        <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-purple-500 pl-2.5 my-1">
          <p className="text-purple-400 font-bold">[Ouael-AI Assistant]</p>
          <p className="text-white">
            {language === "fr"
              ? "DJEDDI Ouael est développeur Full Stack & IA, actuellement en Master Spécialité Intelligence Artificielle et Applications (I2A) à l'Université M'Hamed Bougara de Boumerdès (UMBB). Titulaire d'une Licence en Informatique Générale (2020-2023), il conçoit des modèles d'apprentissage profond (PyTorch, Computer Vision) et des architectures logicielles complètes (Next.js, TypeScript, Node.js)."
              : "DJEDDI Ouael is a Full Stack & AI Developer currently pursuing a Master's Degree in Artificial Intelligence & Applications (I2A) at UMBB. Holding a Bachelor's degree in General Computer Science (2020-2023), he focuses on deep learning models (PyTorch, Computer Vision) and full-stack software architectures (Next.js, TypeScript, Node.js)."}
          </p>
        </div>
      );
    }

    if (
      q.includes("projet") ||
      q.includes("project") ||
      q.includes("super resolution") ||
      q.includes("resolution") ||
      q.includes("scraper") ||
      q.includes("iot") ||
      q.includes("university") ||
      q.includes("wokwi")
    ) {
      return (
        <div className="space-y-2 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-cyan-400 pl-2.5 my-1">
          <p className="text-cyan-400 font-bold">[Ouael-AI Assistant — Projets Clés]</p>
          <p className="text-white">
            {language === "fr"
              ? "Voici les 4 projets phares développés par Ouael :"
              : "Here are the 4 core projects built by Ouael:"}
          </p>
          <div className="space-y-1 text-slate-300">
            <p>
              <strong className="text-white">1. Single Image Super-Resolution :</strong>{" "}
              {language === "fr"
                ? "Réseau de neurones profonds en PyTorch pour la reconstruction 4x et la restauration de textures haute fréquence."
                : "Deep convolutional model in PyTorch for 4x detail reconstruction and high-frequency feature recovery."}
            </p>
            <p>
              <strong className="text-white">2. Python Books Web Scraper :</strong>{" "}
              {language === "fr"
                ? "Système automatisé d'extraction de données web avec BeautifulSoup, Requests et Pandas."
                : "Automated web data extraction pipeline using BeautifulSoup, Requests, and Pandas DataFrames."}
            </p>
            <p>
              <strong className="text-white">3. University Transfer Platform :</strong>{" "}
              {language === "fr"
                ? "Application Full Stack avec Next.js, Node.js et base relationnelle pour gérer les mobilités universitaires."
                : "Full-stack web application with Next.js, Node.js, and relational database for campus student transfers."}
            </p>
            <p>
              <strong className="text-white">4. SEI IoT Project :</strong>{" "}
              {language === "fr"
                ? "Simulation de circuits et télémétrie de capteurs sur microcontrôleurs via Wokwi."
                : "Microcontroller circuit simulation and sensor telemetry state machine executed in Wokwi."}
            </p>
          </div>
        </div>
      );
    }

    if (
      q.includes("skill") ||
      q.includes("competence") ||
      q.includes("compétence") ||
      q.includes("stack") ||
      q.includes("techno") ||
      q.includes("python") ||
      q.includes("react")
    ) {
      return (
        <div className="space-y-1.5 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-emerald-400 pl-2.5 my-1">
          <p className="text-emerald-400 font-bold">[Ouael-AI Assistant — Stack Technologique]</p>
          <p className="text-white">
            <span className="text-purple-400 font-semibold">• Langages :</span> Python, TypeScript, JavaScript, HTML5, CSS3
          </p>
          <p className="text-white">
            <span className="text-cyan-400 font-semibold">• IA & Machine Learning :</span> PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, Computer Vision
          </p>
          <p className="text-white">
            <span className="text-indigo-400 font-semibold">• Web Full Stack :</span> React, Next.js (App Router), Node.js, Tailwind CSS
          </p>
          <p className="text-white">
            <span className="text-amber-400 font-semibold">• Outils & DevOps :</span> Git, GitHub, Visual Studio Code, Docker
          </p>
        </div>
      );
    }

    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("recruter") ||
      q.includes("hire") ||
      q.includes("stage") ||
      q.includes("internship") ||
      q.includes("social") ||
      q.includes("facebook") ||
      q.includes("instagram")
    ) {
      return (
        <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-blue-400 pl-2.5 my-1">
          <p className="text-blue-400 font-bold">[Ouael-AI Assistant — Coordonnées & Réseaux]</p>
          <p className="text-white">
            📧 <span className="font-semibold">Email :</span> ouael.djeddi.contact@gmail.com
          </p>
          <p className="text-white">
            💻 <span className="font-semibold">GitHub :</span> https://github.com/djeddiouael
          </p>
          <p className="text-white">
            🔗 <span className="font-semibold">LinkedIn :</span> https://linkedin.com/in/ouael-djeddi
          </p>
          <p className="text-white">
            📘 <span className="font-semibold">Facebook :</span> https://facebook.com/djeddiouael
          </p>
          <p className="text-white">
            📷 <span className="font-semibold">Instagram :</span> https://instagram.com/djeddiouael
          </p>
          <p className="text-white">
            📺 <span className="font-semibold">YouTube :</span> https://www.youtube.com/@djeddiouael
          </p>
          <p className="text-emerald-400 font-semibold pt-1">
            {language === "fr"
              ? "Disponible pour stages, projets de recherche et collaborations techniques !"
              : "Available for internships, applied research, and technical collaboration!"}
          </p>
        </div>
      );
    }

    if (
      q.includes("etude") ||
      q.includes("étude") ||
      q.includes("master") ||
      q.includes("umbb") ||
      q.includes("boumerdes") ||
      q.includes("formation") ||
      q.includes("education")
    ) {
      return (
        <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-amber-400 pl-2.5 my-1">
          <p className="text-amber-400 font-bold">[Ouael-AI Assistant — Formation Universitaire]</p>
          <p className="text-white">
            🎓 <strong className="text-white">Master Spécialité I2A (2023 — Présent) :</strong> Intelligence Artificielle et Applications à l&apos;Université M&apos;Hamed Bougara de Boumerdès (UMBB).
          </p>
          <p className="text-white">
            📜 <strong className="text-white">Licence Informatique Générale (2020 — 2023) :</strong> Université M&apos;Hamed Bougara de Boumerdès (UMBB).
          </p>
        </div>
      );
    }

    // Default synthesis
    return (
      <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px] border-l-2 border-purple-500 pl-2.5 my-1">
        <p className="text-purple-400 font-bold">[Ouael-AI Assistant]</p>
        <p className="text-white">
          {language === "fr"
            ? `Concernant "${prompt}" : En tant qu'assistant de DJEDDI Ouael (Master I2A @ UMBB), je peux vous renseigner en détail sur ses projets en vision par ordinateur et web full stack, ses compétences (Python, PyTorch, React, Next.js), ou vous mettre en contact direct avec lui par email à ouael.djeddi.contact@gmail.com.`
            : `Regarding "${prompt}": As Ouael's AI assistant (Master I2A @ UMBB), I can provide detailed insights into his computer vision and full-stack projects, core tech stack (Python, PyTorch, Next.js), or connect you directly via email at ouael.djeddi.contact@gmail.com.`}
        </p>
      </div>
    );
  };

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) {
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
      // AI Assistant Chat command!
      case "ai":
      case "chat":
      case "ask":
      case "ia":
        outputNode = handleAIChat(arg);
        break;

      case "help":
      case "?":
        outputNode = (
          <div className="space-y-2 text-[#cccccc] font-mono text-xs sm:text-[12.5px] py-1">
            <p className="text-white font-semibold">
              {language === "fr"
                ? "Commandes système & portfolio disponibles dans l'invite de commandes :"
                : "Available system & portfolio commands in Command Prompt:"}
            </p>
            <div className="grid grid-cols-1 gap-1 pt-1">
              <div className="flex">
                <span className="w-28 text-purple-400 font-bold shrink-0">AI [message]</span>
                <span className="text-[#cccccc]">
                  {language === "fr"
                    ? "Discutez en direct avec l'assistant IA intégré du portfolio !"
                    : "Chat directly with the built-in portfolio AI assistant!"}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">HELP</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche la liste complète des commandes." : "Displays this command help table."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">DIR</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche les fichiers et dossiers du répertoire." : "Displays files and subdirectories."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">CD [dir]</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Change de répertoire (ex: cd projects, cd skills, cd ..)." : "Changes current directory."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">TYPE [file]</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche le contenu d'un fichier texte (ex: type README.md)." : "Displays contents of a text file."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">SYSTEMINFO</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche les informations système du poste de travail." : "Displays system diagnostics."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">WHOAMI</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche l'identité et le profil du développeur." : "Displays developer identity."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">PROJECTS</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Liste les projets phares (Super-Résolution, Scraper, IoT, Web)." : "Lists featured software projects."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">SKILLS</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche la stack technologique (Python, PyTorch, React, etc.)." : "Displays technical skills."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">EDUCATION</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Détaille le cursus Master I2A et Licence à l'UMBB." : "Displays academic curriculum."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">SOCIAL</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche tous les profils (GitHub, YouTube, Facebook, Instagram)." : "Displays external profiles."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">CONTACT</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche les coordonnées directes de contact." : "Displays email & contact details."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">PYTHON</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Lance le diagnostic de l'environnement Python & PyTorch." : "Tests Python/CUDA environment."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">GIT</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Affiche le statut de la branche Git main." : "Displays git branch status."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">CLS</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Efface l'écran du terminal." : "Clears the screen buffer."}
                </span>
              </div>
              <div className="flex">
                <span className="w-28 text-white font-bold shrink-0">VER / DATE / TIME</span>
                <span className="text-[#cccccc]">
                  {language === "fr" ? "Commandes Windows standard." : "Standard Windows utilities."}
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

      case "systeminfo":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12px]">
            <p>OS Name:                   Microsoft Windows 11 Pro 64-bit</p>
            <p>OS Version:                10.0.22631 Build 22631</p>
            <p>System Manufacturer:       Ouael AI Workstation</p>
            <p>System Model:              UMBB Master I2A Research Lab</p>
            <p>Processor(s):              Intel(R) Core(TM) i7 with NVIDIA CUDA Acceleration</p>
            <p>Total Physical Memory:     32,768 MB RAM</p>
            <p>Workspace:                 E:\ouael-djeddi-ai-portfolio</p>
            <p>Repository:                https://github.com/djeddiouael/ouael-djeddi-portfolio</p>
            <p>Active Frameworks:         Next.js 14, React 18, PyTorch 2.2, TypeScript 5.7</p>
          </div>
        );
        break;

      case "ver":
        outputNode = <p className="text-[#cccccc] font-mono">Microsoft Windows [Version 10.0.22631.4317]</p>;
        break;

      case "date":
        outputNode = (
          <p className="text-[#cccccc] font-mono">
            {language === "fr" ? "La date actuelle est : " : "The current date is: "}
            {new Date().toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
              weekday: "short",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        );
        break;

      case "time":
        outputNode = (
          <p className="text-[#cccccc] font-mono">
            {language === "fr" ? "L'heure actuelle est : " : "The current time is: "}
            {new Date().toLocaleTimeString(language === "fr" ? "fr-FR" : "en-US")}
          </p>
        );
        break;

      case "echo":
        outputNode = <p className="text-[#cccccc] font-mono">{arg || ""}</p>;
        break;

      case "type":
      case "cat":
        if (!arg) {
          outputNode = (
            <p className="text-[#cccccc] font-mono">
              {language === "fr" ? "Syntaxe : TYPE <nom_du_fichier>" : "The syntax of the command is incorrect. Usage: TYPE <filename>"}
            </p>
          );
        } else if (arg.toLowerCase() === "readme.md") {
          outputNode = (
            <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12px] bg-[#141414] p-2 rounded">
              <p className="text-white font-bold"># DJEDDI Ouael — AI & Full Stack Developer</p>
              <p>Master Student in Artificial Intelligence and Applications (I2A) at UMBB.</p>
              <p>Core Repositories: Single Image Super-Resolution, Python Web Scraper, University Transfer Platform, SEI IoT.</p>
              <p>GitHub: https://github.com/djeddiouael</p>
            </div>
          );
        } else if (arg.toLowerCase() === "contact.txt") {
          outputNode = (
            <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12px] bg-[#141414] p-2 rounded">
              <p>Email:    ouael.djeddi.contact@gmail.com</p>
              <p>GitHub:   https://github.com/djeddiouael</p>
              <p>LinkedIn: https://linkedin.com/in/ouael-djeddi</p>
              <p>Facebook: https://facebook.com/djeddiouael</p>
              <p>Instagram: https://instagram.com/djeddiouael</p>
            </div>
          );
        } else {
          outputNode = (
            <p className="text-[#cccccc] font-mono">
              {language === "fr" ? "Le fichier spécifié est introuvable." : "The system cannot find the file specified."}
            </p>
          );
        }
        break;

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
                <p>11/11/2026  08:30 PM             2,410 README.md</p>
                <p>11/11/2026  08:30 PM               412 contact.txt</p>
                <p>11/11/2026  08:30 PM               890 developer-profile.json</p>
              </div>
              <p className="pt-1">               3 File(s)          3,712 bytes</p>
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

      case "education":
        outputNode = (
          <div className="space-y-2 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold border-b border-white/20 pb-1">
              {language === "fr" ? "CURSUS UNIVERSITAIRE (UMBB) :" : "ACADEMIC CURRICULUM (UMBB):"}
            </p>
            <div>
              <p className="text-white font-semibold">[2023 — Présent] Master Spécialité I2A</p>
              <p className="text-purple-300">Intelligence Artificielle et Applications — Université M&apos;Hamed Bougara de Boumerdès</p>
              <p className="text-[#a0a0a0]">Modules : Deep Learning, Computer Vision, Systèmes Distribués, NLP</p>
            </div>
            <div className="pt-1">
              <p className="text-white font-semibold">[2020 — 2023] Licence Informatique Générale</p>
              <p className="text-cyan-300">Université M&apos;Hamed Bougara de Boumerdès (UMBB)</p>
              <p className="text-[#a0a0a0]">Modules : Algorithmique Avancée, Structures de Données, POO Java/C++, Bases de Données SQL</p>
            </div>
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

      case "social":
      case "profiles":
        outputNode = (
          <div className="space-y-1 text-[#cccccc] font-mono text-xs sm:text-[12.5px]">
            <p className="text-white font-bold">PROFILS & RÉSEAUX OFFICIELS :</p>
            <p>• GitHub:    https://github.com/djeddiouael</p>
            <p>• LinkedIn:  https://linkedin.com/in/ouael-djeddi</p>
            <p>• Facebook:  https://facebook.com/djeddiouael</p>
            <p>• Instagram: https://instagram.com/djeddiouael</p>
            <p>• YouTube:   https://www.youtube.com/@djeddiouael</p>
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
              <span className="text-white">LinkedIn:</span> https://linkedin.com/in/ouael-djeddi
            </p>
            <p>
              <span className="text-white">Facebook:</span> https://facebook.com/djeddiouael
            </p>
            <p>
              <span className="text-white">Instagram:</span> https://instagram.com/djeddiouael
            </p>
            <p>
              <span className="text-white">YouTube:</span> https://www.youtube.com/@djeddiouael
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
              ? "n'est pas reconnu en tant que commande interne ou externe. Tapez 'help' ou utilisez 'ai <question>' pour discuter avec l'assistant."
              : "is not recognized as an internal or external command. Type 'help' or use 'ai <question>' to chat with the assistant."}
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
        "ai",
        "help",
        "dir",
        "cd",
        "cls",
        "whoami",
        "about",
        "projects",
        "skills",
        "education",
        "social",
        "github",
        "contact",
        "python",
        "git",
        "systeminfo",
        "date",
        "time",
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
        isExpanded ? "max-h-[620px]" : "max-h-[460px]"
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
          <span className="font-sans text-[12px] text-slate-200 truncate flex items-center gap-1.5">
            <span>
              {language === "fr"
                ? "Invite de commandes - [Ouael AI Workspace]"
                : "Command Prompt - [Ouael AI Workspace]"}
            </span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              AI Powered
            </span>
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
          <p className="text-purple-400 font-semibold pt-1">
            [AI Assistant Ready] {language === "fr" ? "Tapez 'ai <question>' pour discuter, ou 'help'." : "Type 'ai <question>' to chat, or 'help'."}
          </p>
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
            {language === "fr" ? "Raccourcis :" : "Quick :"}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              runQuickCommand("ai help");
            }}
            className="px-2 py-0.5 rounded bg-purple-900/40 hover:bg-purple-800/60 text-purple-300 border border-purple-500/40 font-mono text-[11px] transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5 text-purple-400" />
            ai
          </button>
          {["help", "dir", "whoami", "projects", "skills", "education", "social", "cls"].map((c) => (
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
