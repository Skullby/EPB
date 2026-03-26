# EPB

Client-presentable website refresh for EPB.

## Current repo role
This repo now represents the refreshed EPB institutional site, rebuilt against `https://www.epb.com.ar/` as the content source of truth.

It is **not** the earlier "EPB Digital" services/agency landing described by older docs.

## Current status
- Home is in a strong, client-showable state.
- Positioning reflects EPB correctly: cobranzas, recupero de activos, gestión de mora, and services for bancos, empresas, and pymes.
- Content was reorganized into clearer sections: hero, services, tools, technology, company/about, recognitions, news/press/events, RSE, and contact.
- Remaining work is mostly editorial polish, not structural rework.

## Stack
- React 19
- Vite 8
- TypeScript
- Tailwind CSS 3.4
- Vercel deploy target

## Development
```bash
npm install
npm run dev
```

## Build and checks
```bash
npm run build
npm run lint
npm run preview
```

## Key source files
```text
src/
  App.tsx
  content/siteContent.ts   # main site content source inside the repo
  lib/analytics.ts         # CTA/event tracking helper
```

## URLs
- Current public URL: `https://epb-v1.vercel.app/`
- Reference/original site: `https://www.epb.com.ar/`

## Notes
- Use `epb.com.ar` as the wording/reference source when content is in doubt.
- Workspace metadata in `/home/skullby/skullby-software/workspace/projects/epb/STATUS.md` is the canonical operational summary.
- Any future improvements should prioritize editorial polish, asset upgrades, and final brand/content approval.

## Recommended next steps
1. Do one short editorial pass for accents, consistency, and microcopy.
2. Confirm whether to keep or expand press/RSE coverage.
3. If approved, apply second-pass branding polish with official assets.
