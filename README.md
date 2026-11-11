# DJEDDI Ouael — Full Stack & AI Developer Portfolio

> A futuristic, premium personal developer portfolio engineered with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

## 🚀 Live Demo & Profiles

- **Developer:** DJEDDI Ouael
- **Title:** Full Stack & AI Developer
- **GitHub:** [@djeddiouael](https://github.com/djeddiouael)
- **YouTube:** [@djeddiouael](https://www.youtube.com/@djeddiouael)
- **LinkedIn:** [DJEDDI Ouael](https://linkedin.com/in/ouael-djeddi)

---

## ✨ Design & Architectural Highlights

- **Aesthetic:** Dark cyberpunk & AI laboratory theme (`#030712`), neon purple and cyan accents, subtle glow effects, and modern glassmorphism.
- **Interactive Particle Neural Canvas:** Ambient background nodes with particle connections reacting smoothly to cursor movement and respecting accessibility (`prefers-reduced-motion`).
- **Interactive Code Terminal:** Multi-tab developer console (`developer.ts`, `super_resolution.py`, `scraper.py`) with syntax highlighting and one-click copy.
- **Featured Projects with Custom Visual Showcases:**
  1. **Single Image Super-Resolution:** Generative AI / Computer Vision interactive before/after split slider demonstrating 4x spatial restoration with PSNR telemetry.
  2. **Python Books Web Scraper:** Automated crawling pipeline with simulated live HTTP logs and structured tabular extraction.
  3. **University Transfer Platform:** Full-stack administrative dashboard mockup with real-time transfer dossier statuses.
  4. **SEI IoT Project:** Virtualized microcontroller simulation powered by Wokwi with sensor telemetry and serial monitoring.
- **Categorized Skills Matrix:** Interactive filtering tabs (All, AI & Machine Learning, Programming, Web Development, Tools & Infrastructure) with verified technology badges and no invented proficiency percentages.
- **Academic Timeline:** Highlighted educational trajectory including Master's studies in Specialty I2A (Intelligent Computer Science & Applications) at University of Boumerdes (UMBB) and previous computer science studies at University of Tebessa.
- **Validated Contact System:** Full Next.js App Router API endpoint (`/api/contact`) with client and server validation, structured JSON responses, copy email helper, and direct mailto fallback.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [Node.js](https://nodejs.org/) |
| **Language & Typings** | [TypeScript](https://www.typescriptlang.org/) (Strict mode) |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/), Glassmorphism, CSS Variables |
| **Motion & Physics** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/), Custom Scalable Vector Graphics (SVG) |

---

## 📁 Repository Structure

```plaintext
ouael-djeddi-ai-portfolio/
├── public/
│   └── icon.svg                   # Brand favicon & vector icon
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Secure Next.js contact API endpoint
│   │   ├── globals.css            # Custom glow utilities, scrollbar & theme tokens
│   │   ├── layout.tsx             # Root layout with SEO metadata & OpenGraph tags
│   │   └── page.tsx               # Primary single-page portfolio layout
│   ├── components/
│   │   ├── icons/
│   │   │   └── TechIcons.tsx      # Custom vector brand icons
│   │   ├── layout/
│   │   │   ├── Footer.tsx         # Comprehensive footer with dynamic copyright
│   │   │   └── Navbar.tsx         # Glassmorphic header with scroll spy & mobile drawer
│   │   ├── sections/
│   │   │   ├── About.tsx          # Academic narrative & focus areas
│   │   │   ├── Contact.tsx        # Validated interactive inquiry form
│   │   │   ├── Education.tsx      # Formal academic trajectory timeline
│   │   │   ├── Hero.tsx           # Futuristic hero with terminal & CTAs
│   │   │   ├── Projects.tsx       # Featured engineering projects
│   │   │   └── Skills.tsx         # Filterable tech stack matrix
│   │   └── ui/
│   │       ├── CodeTerminal.tsx   # Interactive developer code snippet terminal
│   │       ├── GlassCard.tsx      # Radial spotlight glass card component
│   │       ├── ParticleBackground.tsx # Neural mesh particle canvas
│   │       ├── ProjectVisual.tsx  # Bespoke project interactive graphics
│   │       └── SectionHeading.tsx # Section title badge & gradient typography
│   ├── data/
│   │   └── portfolioData.ts       # Centralized, type-safe portfolio data
│   ├── lib/
│   │   └── utils.ts               # Class merging utilities (clsx + twMerge)
│   └── types/
│       └── index.ts               # Shared TypeScript interfaces & types
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚡ Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17 or higher recommended) and npm installed:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/djeddiouael/ouael-djeddi-ai-portfolio.git
cd ouael-djeddi-ai-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Create Production Build

```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

The portfolio is fully optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete futuristic AI developer portfolio"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import the `ouael-djeddi-ai-portfolio` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build the production bundle and assign a high-speed CDN domain.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact & Inquiries

- **DJEDDI Ouael** — Full Stack & AI Developer
- **Email:** [ouael.djeddi.contact@gmail.com](mailto:ouael.djeddi.contact@gmail.com)
- **GitHub:** [https://github.com/djeddiouael](https://github.com/djeddiouael)
- **YouTube:** [https://www.youtube.com/@djeddiouael](https://www.youtube.com/@djeddiouael)
