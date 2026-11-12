import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // One glob covers app/, features/, components/, and any future folder.
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f8fafc",
        brand: {
          dark: "#050816",
          card: "#0d1124",
          cardHover: "#131a36",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(139, 92, 246, 0.35)",
          purple: "#8b5cf6",
          purpleNeon: "#a855f7",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        "glow-purple": "0 0 35px -5px rgba(139, 92, 246, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(6, 182, 212, 0.35)",
        "glow-blue": "0 0 35px -5px rgba(59, 130, 246, 0.35)",
        "glow-card": "0 10px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(139, 92, 246, 0.15)",
        "inner-glow": "inset 0 0 20px rgba(139, 92, 246, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "gradient-x": "gradient-x 10s ease infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.1) 40%, rgba(3, 7, 18, 0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
