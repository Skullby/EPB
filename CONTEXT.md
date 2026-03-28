# EPB — Workspace Context

Load this file before doing any work in this workspace.

## Identity

- **What**: Institutional website refresh for EPB
- **Repo**: `Skullby/EPB`
- **Domain**: Corporate site — cobranzas, recupero de activos, gestión de mora

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 3.4
- Vercel deploy target

## Key Commands

```bash
npm install           # install dependencies
npm run dev           # start dev server
npm run build         # production build
npm run lint          # run linter
npm run preview       # preview production build locally
```

## File Map

```
src/
  App.tsx                → Main app layout and sections
  content/
    siteContent.ts       → Primary content source (copy, headings, data)
  lib/
    analytics.ts         → CTA and event tracking helper
public/                  → Static assets
scripts/                 → Utility scripts
docs/                    → Project documentation
```

## Live URLs

- Current public: `https://epb-v1.vercel.app/`
- Reference/original site: `https://www.epb.com.ar/`

## Current Status

- Home page is in a strong, client-showable state.
- Content correctly positioned: cobranzas, recupero de activos, gestión de mora,
  services for bancos, empresas, pymes.
- Sections: hero, services, tools, technology, company/about, recognitions,
  news/press/events, RSE, contact.
- Remaining work is editorial polish, not structural.

## Constraints

1. **Content source of truth is epb.com.ar.** When wording is in doubt, match
   the original site.
2. **This is NOT "EPB Digital" (the old agency concept).** The repo was
   repurposed — ignore any legacy docs referencing a services/agency landing.
3. **Editorial phase.** Changes should be polish-level — no structural rework
   unless explicitly requested.

## Recommended Skills

When working on this project, prefer these skills for task-specific guidance:

- `senior-frontend` — React components, Vite config, TypeScript
- `ui-styling` — Tailwind CSS, responsive design, polish
- `seo-audit` — on-page SEO, meta tags, crawlability
- `ai-seo` — AI search engine optimization
- `schema-markup` — structured data, rich snippets
- `site-architecture` — page structure, internal linking
- `a11y-audit` — accessibility compliance, WCAG
- `design` — visual polish, layout refinement
- `vercel-deployment` — deploy config, preview URLs
- `programmatic-seo` — scalable content pages if needed

## Priorities

1. Editorial pass: accents, consistency, microcopy.
2. Decide on press/RSE section scope.
3. Second-pass branding polish with official assets (pending approval).
