# EPB — Critical UI/UX Review (Live-State) 

Date: 2026-03-27
Issue: SKU-105
Reviewer: UX Architect

## Executive verdict (blunt)
The current site is **better than baseline**, but still not at true premium institutional level. It reads as a strong redesign draft, not a finished high-trust corporate presence.

Overall score: **7.4 / 10**

---

## What is working
1. **Hero clarity improved**: message and CTA lane are clear.
2. **Brand tone direction is correct**: EPB red/white institutional identity is coherent.
3. **Proof layer exists**: clients and stats are visible early.
4. **Accessibility basics are present**: skip link and focus-visible states.

---

## Critical weaknesses (high impact)

### 1) Motion language is still decorative, not systemic
- Current motion feels like scattered effects (glow, bar pulse, reveal) rather than one intentional choreography.
- Ambient effects risk looking "template-like" if not synchronized to hierarchy.
- No clear motion contract by component type (hero entry, CTA hover, proof reveal, section transitions).

**Fix now:** define a strict motion matrix with max durations, delays, and allowed properties per component.

---

### 2) Hero trust panel still competes with headline in moments
- Right-side panel can steal attention due to repeated highlights + border treatments.
- H1 authority weakens when proof block gets similar contrast weight.

**Fix now:** reduce panel contrast 10–15%, simplify chip styling, keep H1 as sole dominant anchor.

---

### 3) Section rhythm loses premium continuity after first fold
- Transition from hero → clients → services is improved but still has inconsistent cadence.
- Some sections feel block-stacked instead of editorially orchestrated.

**Fix now:** standardize vertical spacing rhythm and apply section intro patterns consistently.

---

### 4) Trust framing is present but not maximally persuasive
- Client names/stats are shown, but institutional proof story is still under-leveraged.
- Missing concise credibility narrative across first two sections.

**Fix now:** add one short “why trust EPB” continuity line and tighten proof sequence ordering.

---

### 5) Premium polish details still inconsistent
- Micro-typography and density fluctuate between sections.
- Some cards and blocks still feel utility-first rather than luxury-institutional.

**Fix now:** unify corner radius tiers, border opacity scale, and heading/copy spacing tokens.

---

## Medium weaknesses
1. Mobile quick-nav works but could feel crowded visually.
2. CTA visual hierarchy is clear, but secondary CTA style can be slightly cleaner.
3. Services/tools cards still carry mild “information deck” density in places.

---

## Severity-prioritized action plan

### P0 (immediate)
1. Ship motion system rules (single choreography spec).
2. De-emphasize trust panel to protect H1 dominance.
3. Harmonize first 3 section transitions with one rhythm system.

### P1 (next pass)
1. Tighten proof storytelling sequence and institutional continuity copy.
2. Normalize visual token usage (radius, borders, spacing, text tiers).
3. Reduce card density in services/tools with better chunking.

### P2 (final polish)
1. Fine-tune mobile nav pill treatment and spacing.
2. Add micro-interaction consistency for link/cards/buttons.

---

## Definition of done for stage 1
Stage 1 review is done when the team has:
- a hard diagnosis (not polite feedback),
- a priority-ordered correction path,
- explicit weaknesses in hierarchy, motion, premium feel, trust framing, hero quality, section rhythm, and polish.

This document provides that baseline and is ready for stage 2 mockup iteration.
