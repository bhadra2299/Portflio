# Kudum Veerabhadraiah — Portfolio

A single-page, scroll-driven portfolio for an AI Engineer / Data Scientist, built with
Next.js (App Router), TypeScript, Tailwind CSS and GSAP.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + a hand-written design system in `app/globals.css` |
| Motion | GSAP 3 (`ScrollTrigger`, `@gsap/react`) |
| Fonts | `next/font/google` — Albert Sans + Fragment Mono (self-hosted) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project layout

```
app/
  layout.tsx        root layout, metadata, font variables
  page.tsx          composes the sections
  globals.css       design system (glass surfaces, keyframes, reveal layers)
components/
  glass-hero.tsx    cursor-reveal hero (frozen — see below)
  portfolio/        about, projects, skills, education, contact, command dock
lib/
  portfolio-data.ts single source of truth for projects, skills and pipelines
public/
  images/           hero portraits
  project glass card svg/  project illustrations
docs/
  founder-hr-audit.md      internal positioning notes (not shipped to the client bundle)
```

## Conventions

- **The hero is frozen.** Per `Portfolio_PRD.md`, `components/glass-hero.tsx` and its assets
  are read-only; all redesign work happens in the sections after it.
- **Content lives in `lib/portfolio-data.ts`**, not in the components. Edit project copy,
  metrics, pipelines and skill groups there.
- **Security headers are configured in `next.config.js`** (CSP, HSTS, nosniff, frame
  denial, referrer and permissions policy). `poweredByHeader` is disabled.

## Documentation

- `Portfolio_PRD.md` — product requirements
- `Portfolio_TRD.md` — technical requirements
- `SECURITY_AUDIT.md` — security, bug and performance audit
