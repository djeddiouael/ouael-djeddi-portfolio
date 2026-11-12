# DJEDDI Ouael — Full Stack & AI Developer Portfolio

> A futuristic, international developer portfolio with **Multilingual Support (EN / FR)** and an **Adaptive Theme System (System / Dark / Light)** engineered with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

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
- **Repository:** [ouael-djeddi-portfolio](https://github.com/djeddiouael/ouael-djeddi-portfolio)

---

## ✨ Key Features & Architectural Improvements

### 1. 🌐 Complete Multilingual System (EN / FR)
- Full bilingual coverage across every UI section: navigation, hero, terminal, about narrative, focus cards, skills descriptions, project details, academic timeline, contact form, validation feedback, and footer.
- Centralized i18n architecture located in `src/i18n/translations.ts` and managed via `LanguageContext`.
- Instant language switching with `EN / FR` switcher in the navbar.
- Automatic browser language detection and `localStorage` persistence across page reloads.

### 2. 🌗 Adaptive Theme System (System / Dark / Light)
- **System Mode (Default):** Automatically detects OS preference (`prefers-color-scheme`) and responds to system changes in real time.
- **Dark Mode:** Deep cyberpunk/AI laboratory aesthetic (`#030712`), neon purple and cyan accents, and glowing glassmorphic cards.
- **Light Mode:** Crisp, high-contrast palette with soft lavender/indigo accents, clean white cards, subtle shadows, and excellent legibility.
- **Zero Flash:** Pre-render inline script guarantees instant theme and language application with no FOUC (flash of unstyled content).

### 3. 🎨 UI/UX & Component Showcase
- **Particle Neural Mesh:** Ambient canvas that smoothly adapts its color scheme and respects `prefers-reduced-motion`.
- **Interactive Code Terminal:** Multi-tab developer console (`developer.ts`, `super_resolution.py`, `scraper.py`) with syntax highlighting and one-click copy.
- **Featured Project Showcases:**
  1. **Single Image Super-Resolution:** Interactive before/after split slider comparing degraded input with 4x neural reconstruction.
  2. **Python Books Web Scraper:** Automated crawling console with simulated live HTTP logs and structured schema.
  3. **University Transfer Platform:** Full-stack administrative dashboard mockup with transfer request statuses.
  4. **SEI IoT Project:** Microcontroller simulation powered by Wokwi with sensor telemetry and serial monitoring.
- **Academic Timeline:** Highlighted educational trajectory including Master's studies in Specialty I2A at University of Boumerdes (UMBB) and foundational studies at University of Tebessa.
- **Validated Contact System:** Next.js App Router API endpoint (`/api/contact`) with server-side validation, honeypot spam protection, per-IP rate limiting, and real email delivery through [Resend](https://resend.com). When delivery is not configured, the form offers a prefilled `mailto` fallback instead of faking success.

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

## 📁 Project Structure

The codebase is organized **by feature**: every portfolio section owns its
component inside `src/features/`, while shared primitives stay in
`src/components/`.

```text
src/
├── app/          # Routing, metadata, API route, sitemap/robots, fonts
├── features/     # hero, about, skills, journey, projects, education,
│                 # contact, ai-agent, command-palette, cv-center
├── components/   # Shared only: ui/, layout/, icons/, analytics/
├── config/       # App configuration (availability status)
├── context/      # Language, theme and UI-modal providers
├── data/         # Identity & contact details (locale-independent)
├── i18n/         # Bilingual EN / FR copy + schema types
├── lib/          # Utilities (site URL, analytics, cn)
└── types/        # Shared TypeScript interfaces
```

👉 Full conventions, “how to add a section”, and how to replace the internship /
freelance placeholders: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## ⚡ Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17+ recommended) and npm installed:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/djeddiouael/ouael-djeddi-portfolio.git
cd ouael-djeddi-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create Production Build

```bash
npm run build
npm run start
```

---

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need:

| Variable | Purpose |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used by metadata, `sitemap.xml`, `robots.txt` and JSON-LD. |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Optional Umami analytics website ID (leave empty to disable). |
| `NEXT_PUBLIC_UMAMI_SRC` | Optional self-hosted Umami script URL. |
| `RESEND_API_KEY` | Resend API key for real contact-form delivery. |
| `CONTACT_TO_EMAIL` | Inbox that receives contact messages. |
| `CONTACT_FROM_EMAIL` | Verified Resend sender. |

> The contact form works without Resend, but it will never claim a message was
> sent: visitors are offered a prefilled email fallback instead.

CV downloads read PDFs from `public/cv/` — see [`public/cv/README.md`](public/cv/README.md) for the exact filenames.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: multilingual and adaptive theme updates"
   git push origin main
   ```
2. In [Vercel](https://vercel.com), import `ouael-djeddi-portfolio` and click **Deploy**. Next.js App Router will be detected automatically.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
