"use client";

import React, { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  Download,
  Mail,
  ExternalLink,
  GraduationCap,
  Layers,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useUIModals } from "@/context/UIModalContext";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface Message {
  id: string;
  sender: "agent" | "user";
  text: string;
  actions?: {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }[];
  timestamp: string;
}

// Compute greeting based on the visitor's local time.
// Kept outside the component so it is stable across renders.
function getTimeGreeting(lang: string, isAr = false) {
  const hours = new Date().getHours();
  const isDay = hours >= 5 && hours < 18;
  if (isAr) return isDay ? "صباح الخير" : "مساء الخير";
  if (lang === "fr") return isDay ? "Bonjour" : "Bonsoir";
  if (hours >= 5 && hours < 12) return "Good morning";
  if (hours >= 12 && hours < 18) return "Good afternoon";
  return "Good evening";
}

export function AIAgentWidget() {
  const { language } = useLanguage();
  const { openCVModal } = useUIModals();

  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  // Hydration-safe greeting: computed after mount, never during render.
  const [greeting, setGreeting] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setGreeting(getTimeGreeting(language));
  }, [language]);

  const handleSendMessage = useCallback((textToSend?: string) => {
    const text = (textToSend || "").trim();
    if (!text) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    // AI Knowledge Responder
    setTimeout(() => {
      const q = text.toLowerCase();
      const isArabic = /[\u0600-\u06FF]/.test(text);
      const greeting = getTimeGreeting(language, isArabic);

      let replyText = "";
      let actions: Message["actions"] = undefined;

      if (
        q.includes("bonjour") ||
        q.includes("bonsoir") ||
        q.includes("salut") ||
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("مرحبا") ||
        q.includes("سلام") ||
        q.includes("صباح") ||
        q.includes("مساء")
      ) {
        replyText = isArabic
          ? `${greeting}! أهلاً بك. أنا المساعد الذكي الممثل لـ DJEDDI Ouael. كيف يمكنني مساعدتك اليوم؟`
          : language === "fr"
          ? `${greeting} ! Ravi de vous accueillir sur le portfolio d'Ouael. Que souhaitez-vous découvrir : ses projets IA, son parcours universitaire ou ses coordonnées ?`
          : `${greeting}! Delighted to welcome you to Ouael's portfolio. What would you like to explore: his AI projects, academic journey, or contact details?`;
      } else if (
        q.includes("master") ||
        q.includes("i2a") ||
        q.includes("etude") ||
        q.includes("études") ||
        q.includes("education") ||
        q.includes("parcours") ||
        q.includes("جامعة") ||
        q.includes("دراسة") ||
        q.includes("ماستر")
      ) {
        replyText = isArabic
          ? "يتابع DJEDDI Ouael حالياً دراسة الماستر تخصص الذكاء الاصطناعي وتطبيقاته (I2A) بجامعة محمد بوقرة بومرداس (UMBB) منذ 2023. وقبل ذلك، تخرج بليسانس في الإعلام الآلي (2020 - 2023) بجامعة تبسة."
          : language === "fr"
          ? "DJEDDI Ouael prépare actuellement son Master en Intelligence Artificielle et Applications (I2A) à l'Université M'Hamed Bougara de Boumerdès (UMBB, 2023 — Présent). Il est également titulaire d'une Licence en Informatique (2020 — 2023) de l'Université de Tébessa."
          : "DJEDDI Ouael is currently pursuing a Master's degree in Artificial Intelligence & Applications (I2A) at University M'Hamed Bougara of Boumerdes (UMBB, 2023 — Present). He previously completed his Bachelor's degree in Computer Science (2020 — 2023) at the University of Tebessa.";
        actions = [
          {
            label: language === "fr" ? "Voir la section Éducation" : "View Education Section",
            action: () => {
              document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            },
            icon: <ExternalLink className="w-3.5 h-3.5" />,
          },
        ];
      } else if (
        q.includes("projet") ||
        q.includes("project") ||
        q.includes("super-resolution") ||
        q.includes("super resolution") ||
        q.includes("vision") ||
        q.includes("deep learning") ||
        q.includes("مشروع") ||
        q.includes("مشاريع")
      ) {
        replyText = isArabic
          ? "أبرز مشاريع وائل: مشروع Super-Resolution باستخدام الشبكات العصبية العميقة (PyTorch / ESRGAN) لترقية دقة الصور، ونظام كشف الأشياء بالرؤية الحاسوبية، وتطبيقات ويب تفاعلية متكاملة بتقنيات Next.js و TypeScript."
          : language === "fr"
          ? "Ouael a développé des projets avancés : un système de Super-Résolution d'images par Deep Learning (PyTorch, ESRGAN), des modèles de Vision par Ordinateur (classification & détection d'objets), ainsi que des plateformes Full Stack modernes en Next.js, React et TypeScript."
          : "Ouael has developed advanced projects: Image Super-Resolution using Deep Learning (PyTorch, ESRGAN), Computer Vision models, and full-stack enterprise web platforms using Next.js, React, and TypeScript.";
        actions = [
          {
            label: language === "fr" ? "Explorer les Projets" : "Explore Projects",
            action: () => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            },
            icon: <ExternalLink className="w-3.5 h-3.5" />,
          },
        ];
      } else if (
        q.includes("competence") ||
        q.includes("compétence") ||
        q.includes("skill") ||
        q.includes("stack") ||
        q.includes("techno") ||
        q.includes("pytorch") ||
        q.includes("react") ||
        q.includes("مهارات") ||
        q.includes("تقنيات")
      ) {
        replyText = isArabic
          ? "المهارات التقنية: في الذكاء الاصطناعي (Python, PyTorch, TensorFlow, OpenCV, Scikit-Learn)، وفي تطوير الويب (TypeScript, Next.js, React, Node.js, Tailwind CSS, PostgreSQL, Docker, Git)."
          : language === "fr"
          ? "Stack technique d'Ouael : IA & Data (Python, PyTorch, OpenCV, Deep Learning, Vision par Ordinateur, Scikit-Learn) et Web & Cloud (TypeScript, React, Next.js, Node.js, Tailwind CSS, SQL/NoSQL, Git)."
          : "Ouael's Tech Stack: AI & Vision (Python, PyTorch, OpenCV, Deep Learning, Computer Vision) and Web & Engineering (TypeScript, Next.js, React, Node.js, Tailwind CSS, SQL/NoSQL, Docker, Git).";
        actions = [
          {
            label: language === "fr" ? "Voir les Compétences" : "View Skills",
            action: () => {
              document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            },
            icon: <ExternalLink className="w-3.5 h-3.5" />,
          },
        ];
      } else if (
        q.includes("cv") ||
        q.includes("resume") ||
        q.includes("télécharger") ||
        q.includes("سيرة")
      ) {
        replyText = isArabic
          ? "يمكنك تحميل السيرة الذاتية لـ DJEDDI Ouael بصيغة PDF مباشرة أو معاينتها بالضغط على الزر أدناه:"
          : language === "fr"
          ? "Vous pouvez télécharger le CV officiel de DJEDDI Ouael ou le consulter en direct via notre Smart CV Center :"
          : "You can download DJEDDI Ouael's official CV or preview it directly in our Smart CV Center:";
        actions = [
          {
            label: language === "fr" ? "Ouvrir le Smart CV" : "Open Smart CV",
            action: () => openCVModal(),
            icon: <Download className="w-3.5 h-3.5" />,
          },
        ];
      } else if (
        q.includes("contact") ||
        q.includes("email") ||
        q.includes("mail") ||
        q.includes("github") ||
        q.includes("linkedin") ||
        q.includes("اتصال") ||
        q.includes("تواصل")
      ) {
        replyText = isArabic
          ? `يمكنك التواصل مع وائل عبر البريد: ${PERSONAL_INFO.contact.email} أو عبر GitHub و LinkedIn و Facebook و Instagram.`
          : language === "fr"
          ? `Vous pouvez joindre Ouael par email à : ${PERSONAL_INFO.contact.email}, ou via ses profils GitHub, LinkedIn, Facebook et Instagram.`
          : `You can reach Ouael at: ${PERSONAL_INFO.contact.email}, or connect on GitHub, LinkedIn, Facebook, and Instagram.`;
        actions = [
          {
            label: language === "fr" ? "Aller au formulaire de contact" : "Go to Contact Form",
            action: () => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            },
            icon: <Mail className="w-3.5 h-3.5" />,
          },
        ];
      } else {
        replyText = isArabic
          ? "أنا ممثل وائل الذكي! يمكنك سؤالي عن مشاريعه في الذكاء الاصطناعي، مساره الأكاديمي بجامعة بومرداس، مهاراته البرمجية، أو طلب تحميل سيرته الذاتية والتواصل معه."
          : language === "fr"
          ? "Je suis l'assistant IA d'Ouael. N'hésitez pas à me poser une question sur sa formation en Master I2A, ses réalisations en vision par ordinateur ou ses projets web complets !"
          : "I am Ouael's AI assistant. Feel free to ask about his Master's in AI, his deep learning computer vision research, or full-stack web projects!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "agent",
          text: replyText,
          actions,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  }, [language, openCVModal]);

  const handleQuickAction = useCallback(
    (topic: string) => {
      if (topic === "education") {
        handleSendMessage(
          language === "fr"
            ? "Parle-moi de tes études et de ton Master I2A"
            : "Tell me about your education and Master I2A"
        );
      } else if (topic === "projects") {
        handleSendMessage(
          language === "fr"
            ? "Quels sont tes projets principaux en IA et Web ?"
            : "What are your main AI and Web projects?"
        );
      } else if (topic === "skills") {
        handleSendMessage(
          language === "fr"
            ? "Quelles sont tes compétences techniques ?"
            : "What is your tech stack and skills?"
        );
      } else if (topic === "contact") {
        handleSendMessage(
          language === "fr" ? "Comment puis-je contacter Ouael ?" : "How can I contact Ouael?"
        );
      }
    },
    [language, handleSendMessage]
  );

  // Welcome message: rebuilt on language change, but an ongoing conversation is preserved.
  useEffect(() => {
    const initialText =
      language === "fr"
        ? `${getTimeGreeting(language)} ! Je suis l'Agent IA officiel de DJEDDI Ouael. Je suis là pour vous présenter son parcours en Master IA (I2A @ UMBB), ses projets en Deep Learning & Full Stack, ou répondre à vos questions.`
        : `${getTimeGreeting(language)}! I am DJEDDI Ouael's official AI Agent. I'm here to introduce his Master's journey in AI (I2A @ UMBB), his Deep Learning & Full Stack projects, or answer any questions.`;

    setMessages((prev) => {
      if (prev.length > 1) return prev;
      return [
        {
          id: "welcome-1",
          sender: "agent",
          text: initialText,
          actions: [
            {
              label: language === "fr" ? "🎓 Master & Parcours" : "🎓 Master & Journey",
              action: () => handleQuickAction("education"),
              icon: <GraduationCap className="w-3.5 h-3.5" />,
            },
            {
              label: language === "fr" ? "🚀 Projets & IA" : "🚀 Projects & AI",
              action: () => handleQuickAction("projects"),
              icon: <Code2 className="w-3.5 h-3.5" />,
            },
            {
              label: language === "fr" ? "⚡ Compétences" : "⚡ Skills & Stack",
              action: () => handleQuickAction("skills"),
              icon: <Layers className="w-3.5 h-3.5" />,
            },
            {
              label: language === "fr" ? "📄 Télécharger CV" : "📄 Download CV",
              action: () => openCVModal(),
              icon: <Download className="w-3.5 h-3.5" />,
            },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ];
    });

    // Show initial speech bubble popup after 2.5 seconds if unopened
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [language, handleQuickAction, openCVModal]);

  // Internal auto scroll inside chat window
  useEffect(() => {
    if (isOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus the input when opening, and close the chat with Escape.
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const bubbleGreeting = greeting;

  return (
    <>
      {/* Floating Agent Trigger in Bottom-Right Corner */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex items-end gap-3 select-none">
        {/* Floating Greeting Bubble on initial load */}
        <AnimatePresence>
          {!isOpen && hasPrompted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: 20 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/95 dark:bg-[#0c1026]/95 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-500/10 text-xs text-slate-800 dark:text-slate-200 cursor-pointer hover:border-purple-400 transition-all max-w-xs group"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="line-clamp-2">
                <span className="font-bold text-purple-600 dark:text-purple-300">
                  {bubbleGreeting} !
                </span>{" "}
                {language === "fr"
                  ? "Je suis l'Agent IA d'Ouael. Une question sur ses projets ou son Master ?"
                  : "I'm Ouael's AI Twin. Any questions about his projects or Master's?"}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setHasPrompted(false);
                }}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5"
                aria-label={language === "fr" ? "Fermer" : "Dismiss"}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Avatar Trigger Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setHasPrompted(false);
          }}
          className="relative group focus:outline-none"
          aria-label={language === "fr" ? "Ouvrir l'assistant IA d'Ouael" : "Open Ouael's AI assistant"}
        >
          {/* Animated Pulsing Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-70 blur-md group-hover:opacity-100 animate-pulse-slow transition-opacity" />

          {/* Avatar Container */}
          <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#080c1d] flex items-center justify-center overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Agent IA Ouael"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Online Indicator Badge */}
          <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#080c1d]" />
          </span>
        </button>
      </div>

      {/* Interactive AI Agent Chat Dialog Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label={language === "fr" ? "Assistant IA d'Ouael" : "Ouael AI Assistant"}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[calc(100vh-8rem)] rounded-2xl bg-white dark:bg-[#070b1c]/95 border border-slate-200 dark:border-purple-500/30 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden text-left"
          >
            {/* Header: Identity & Status */}
            <div className="px-4 py-3.5 bg-slate-100/80 dark:bg-[#0e132c]/80 border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between select-none">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-purple-500/50 shadow-md">
                  <Image
                    src="/avatar.png"
                    alt="Agent IA Ouael"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#080c1d]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                      Ouael AI Agent
                    </h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-mono font-medium">
                      Digital Twin
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    Master IA @ UMBB • {language === "fr" ? "En ligne" : "Online"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors"
                aria-label={language === "fr" ? "Fermer le chat" : "Close chat"}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Message List */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "agent" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 mt-0.5 border border-purple-500/30">
                      <Image
                        src="/avatar.png"
                        alt="Agent"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white rounded-br-sm shadow-md shadow-purple-600/20"
                        : "bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] rounded-bl-sm"
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Interactive Action Buttons */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2.5 mt-2 border-t border-slate-200 dark:border-white/[0.08]">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={act.action}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 transition-colors"
                          >
                            {act.icon}
                            <span>{act.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="block text-[9px] text-slate-400 mt-1 text-right">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-purple-500/30">
                    <Image
                      src="/avatar.png"
                      alt="Agent"
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Action Suggestion Bar */}
            <div className="px-3 py-1.5 bg-slate-50 dark:bg-[#0a0e24] border-t border-slate-200 dark:border-white/[0.06] flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px] text-slate-500 select-none">
              <button
                type="button"
                onClick={() => handleQuickAction("education")}
                className="px-2 py-0.5 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-purple-400 text-slate-700 dark:text-slate-300 shrink-0 transition-colors"
              >
                🎓 Master I2A
              </button>
              <button
                type="button"
                onClick={() => handleQuickAction("projects")}
                className="px-2 py-0.5 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-purple-400 text-slate-700 dark:text-slate-300 shrink-0 transition-colors"
              >
                🚀 Super-Résolution
              </button>
              <button
                type="button"
                onClick={() => handleQuickAction("skills")}
                className="px-2 py-0.5 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-purple-400 text-slate-700 dark:text-slate-300 shrink-0 transition-colors"
              >
                ⚡ Stack IA
              </button>
              <button
                type="button"
                onClick={() => openCVModal()}
                className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 shrink-0 transition-colors"
              >
                📄 CV
              </button>
            </div>

            {/* Message Input Box */}
            <div className="p-3 bg-white dark:bg-[#070b1c] border-t border-slate-200 dark:border-white/[0.08]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  aria-label={
                    language === "fr" ? "Votre message à l'agent IA" : "Your message to the AI assistant"
                  }
                  autoComplete="off"
                  placeholder={
                    language === "fr"
                      ? "Posez une question à l'Agent IA..."
                      : "Ask Ouael's AI Agent anything..."
                  }
                  className="flex-1 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-purple-600/20"
                  aria-label={language === "fr" ? "Envoyer le message" : "Send message"}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
