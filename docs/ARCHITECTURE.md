# Architecture & Project Structure

This portfolio uses a **feature-based** structure on top of the Next.js App Router.
Each portfolio feature owns its component(s), while shared building blocks live in
`src/components`.

## Directory tree

```text
src/
├── app/                        # Next.js App Router (routing, metadata, API)
│   ├── api/contact/route.ts    # Contact endpoint (Resend + rate limiting + honeypot)
│   ├── fonts/                  # Self-hosted Inter & JetBrains Mono (next/font/local)
│   ├── globals.css             # Tailwind layers, theme tokens, reduced motion
│   ├── layout.tsx              # Root layout: metadata, JSON-LD, providers, header/footer
│   ├── page.tsx                # Composes all page sections
│   ├── robots.ts               # /robots.txt
│   └── sitemap.ts              # /sitemap.xml
│
├── features/                   # One folder per portfolio feature
│   ├── hero/                   # Hero section + interactive CodeTerminal
│   ├── about/                  # About section
│   ├── skills/                 # Skills & tech stack explorer
│   ├── journey/                # Developer journey timeline (academic / AI / engineering / internship / freelance)
│   ├── projects/               # Featured projects + per-project visuals
│   ├── education/              # Academic background
│   ├── contact/                # Contact channels + validated form
│   ├── ai-agent/               # Floating AI assistant widget
│   ├── command-palette/        # Ctrl+K command palette
│   └── cv-center/              # Smart CV Center modal
│
├── components/                 # Shared, feature-agnostic code only
│   ├── ui/                     # Design system: GlassCard, SectionHeading, Logo, ParticleBackground
│   ├── layout/                 # Navbar, Footer
│   ├── icons/                  # TechIcons (Simple Icons vectors)
│   └── analytics/              # Privacy-first analytics loader
│
├── config/                     # Static app config (availability status)
├── context/                    # React providers (language, theme, UI modals)
├── data/                       # Locale-independent data (identity & contact)
├── i18n/                       # Bilingual copy (EN / FR) + TranslationSchema types
├── lib/                        # Utilities (analytics, site URL, cn helper)
└── types/                      # Shared TypeScript interfaces
```

## Conventions

- **`src/features/*`** — anything only used by one section belongs here.
  The folder name matches the feature, and the main component keeps its exported name
  (e.g. `src/features/journey/DeveloperJourney.tsx`).
- **`src/components/ui/*`** — reusable primitives with no business logic.
  If a component is used by two or more features, promote it here.
- **`src/data`** — only locale-independent values (name, email, social URLs).
  All translated copy lives in `src/i18n/translations.ts`.
- **Imports** — always use the `@/` alias, never deep relative paths.

## Adding a new page section

1. Create `src/features/<feature>/<Feature>.tsx` exporting the component.
2. Add its copy to the `en` and `fr` objects in `src/i18n/translations.ts`
   and declare the matching shape in `TranslationSchema`.
3. Import it in `src/app/page.tsx`.
4. If it needs navigation, update the Navbar/Footer arrays and the `#id` anchor.

## Editing the journey placeholders (internships & freelance)

The timeline has two scaffold entries marked **“To complete” / “À compléter”**.
They are intentionally obvious so they are never mistaken for real experience.

Edit these objects in `src/i18n/translations.ts`:

- English → `en.journey.milestones` with `id: "m7"` (internship) and `id: "m8"` (freelance).
- French → `fr.journey.milestones` with the same ids.

Replace the bracketed fields, then delete `isPlaceholder: true` so the
“To complete” badge disappears:

```ts
{
  id: "m7",
  category: "internship",
  categoryLabel: "Internship",
  title: "Software Engineering Intern — Acme Corp",
  period: "Jun 2025 — Sep 2025",
  institutionOrContext: "Acme Corp · Algiers",
  description: "Built ...",
  tags: ["Next.js", "Node.js", "PostgreSQL"],
  // isPlaceholder: true,  ← removed once the data is real
}
```

To add more entries, copy an existing object and give it a unique `id`.

## Design decisions

- **Honest contact form** — when Resend is not configured, the API returns
  `503 EMAIL_NOT_CONFIGURED` and the UI offers a prefilled `mailto` fallback.
  It never pretends a message was sent.
- **Self-hosted fonts** — avoids build-time dependency on Google Fonts.
- **No client-side secrets** — only the contact route reads server env vars.
