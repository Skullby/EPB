# EPB — Hero + First-Fold Visual Reset (Mockup Direction)

## Objective
Define a concrete **design direction mockup** for EPB’s hero and first fold with:
- stronger banner impact
- cleaner hierarchy
- premium institutional tone
- visible but tasteful motion
- strict red/white brand fidelity

> Scope note: this document is direction/mockup only (no direct implementation required at this stage).

---

## 1) Multiple visual mockup directions

### Direction A — Institutional split hero
**Intent:** the safest premium direction; highly legible, trust-first, balanced.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Header: logo + nav + one filled CTA                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO                                                                         │
│ ┌──────────────────────────────┬───────────────────────────────────────────┐ │
│ │ Eyebrow                      │ Trust panel                               │ │
│ │ H1 (2 lines max)             │ - institutional badge                     │ │
│ │ Intro (2–3 lines)            │ - 3 KPI chips                             │ │
│ │ Primary CTA                  │ - one-line trust note                     │ │
│ │ Secondary CTA                │                                           │ │
│ └──────────────────────────────┴───────────────────────────────────────────┘ │
│ Background: deep EPB red gradient + restrained light bloom                   │
└──────────────────────────────────────────────────────────────────────────────┘
```

Why it works:
- feels established and corporate
- strongest readability on desktop
- motion can be limited to subtle reveal + drift

---

### Direction B — Full-bleed premium banner
**Intent:** more dramatic first impression, closer to a campaign-style institutional landing.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Header on translucent field                                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ FULL-BLEED RED HERO                                                          │
│   eyebrow                                                                    │
│   H1                                                                         │
│   intro                                                                      │
│   CTA row                                                                    │
│   trust chips + short note                                                   │
│                                                                              │
│  subtle animated light sweep / radial texture                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

Why it works:
- stronger visual presence
- premium and memorable
- motion can be slightly more pronounced while remaining restrained

Risk:
- needs tighter copy discipline so it doesn’t feel loud or promotional

---

### Direction C — Editorial institutional / calm authority
**Intent:** cleanest and most refined, with a softer premium tone.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Header                                                                    CTA │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO                                                                         │
│   eyebrow                                                                    │
│   H1                                                                         │
│   intro                                                                      │
│   primary CTA + secondary text link                                          │
│                                                                              │
│   narrow right-side proof rail with badges + KPIs                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

Why it works:
- highest editorial restraint
- ideal if the goal is institutional credibility over visual drama
- easiest to keep elegant on mobile

---

## 2) Recommendation
Choose **Direction A** as the implementation target.

Reason:
- best balance of premium, institutional, and conversion clarity
- preserves motion energy without sacrificing structure
- supports the existing EPB red/white identity cleanly

Use **Direction B** only if the team wants a more memorable, theatrical landing.
Use **Direction C** if the brand wants to lean further into authority and sobriety.

---

## 3) Hero structure (desktop)

### Direction A layout rules
- H1 is the anchor (single core value proposition).
- Exactly **1 primary CTA** + 1 secondary CTA.
- Proof block supports credibility; it must not compete with H1.
- Max 2 text sizes in CTA area to avoid visual noise.

---

## 4) Hero structure (mobile)

Order:
1. Eyebrow
2. H1
3. Intro
4. CTA stack (full-width buttons)
5. Compact proof chips (3 across or 2+1 wrap)
6. Trust note

Constraints:
- No dense cards above fold.
- Keep first viewport scannable in <5 seconds.
- Ensure 44px+ tap targets and 8px+ spacing.

---

## 5) Visual direction

### Color behavior (EPB identity)
- Primary field: deep institutional reds (`#78141A` → `#9A1C23`).
- Surfaces: warm off-white / white (`#F5F0E9`, `#FFFFFF`).
- Text on dark: white at high contrast tiers (90% / 75% / 60%).
- Avoid introducing unrelated accent families; keep palette disciplined.

### Typography behavior
- H1: bold/semibold, tight tracking, strong line-height (~1.05).
- Supporting copy: comfortable reading line-height (1.6–1.75).
- Labels/badges: uppercase with controlled tracking for institutional tone.

### Shape & elevation
- Rounded containers (not playful): 20–32px radius.
- Soft shadows only; avoid flashy glow effects.
- Borders should be subtle and warm (brand-adjacent neutrals).

---

## 4) Motion direction (premium, restrained)

### Entry choreography
- Hero background gradient drift: **very subtle**, long duration (12–16s loop).
- Text block reveal: 140–220ms stagger, translateY(8px) + opacity.
- Proof panel reveal: 180–240ms delayed after headline.

### Interaction motion
- CTA hover/focus: micro-lift (1–2px), no aggressive scaling.
- Proof chips: no bouncing/counter animation; keep institutional seriousness.

### Accessibility guardrails
- Respect `prefers-reduced-motion` (disable drift/reveal transitions).
- Use transform/opacity only (performance + smoothness).

---

## 5) First-fold composition below hero

Immediately after hero, use a **credibility bridge strip** (not a card dump):
- concise title (e.g., “Compañías que confían en EPB&A”)
- clean client-name/logo grid with even rhythm
- optional one-line trust statement

Purpose: maintain momentum from hero into proof without breaking tone.

---

## 6) Content mock (example tone)

### Eyebrow
`ESTUDIO PALMERO DE BELIZÁN & ASOCIADOS`

### H1
`Gestión de mora y recupero de activos con foco institucional.`

### Intro
`Acompañamos a bancos, empresas y PyMES con operación profesional, metodologías adaptadas y trazabilidad para sostener resultados con criterio comercial.`

### Primary CTA
`Quiero comunicarme`

### Secondary CTA
`Gestión de cobranzas`

### Trust panel badge
`OFRECEMOS SOLUCIONES ADECUADAS PARA CADA UNO DE NUESTROS CLIENTES`

---

## 7) Acceptance criteria for this mockup stage

- The proposal reads as **institutional premium**, not generic startup.
- Visual weight is led by H1 + CTA, not by secondary cards.
- Motion is present and elegant, never distracting.
- Mobile first viewport remains clear and conversion-oriented.
- Red/white EPB identity remains coherent across hero + first fold.

---

## 8) Next step (implementation handoff)
When approved, implementation should map this proposal to:
- `src/App.tsx` (hero + first fold structure)
- `src/content/siteContent.ts` (copy + proof data)
- motion classes with reduced-motion fallbacks
- final visual QA on desktop/mobile + performance sanity check
