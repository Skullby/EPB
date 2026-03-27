# EPB Relaunch Loop — 03 Critical Review Before Coding

Date: 2026-03-27
Issue: SKU-104

## Challenge checklist (pre-implementation)

1. Does motion distract from headline/CTA?
- Decision: keep only ambient drift and restrained micro-lifts.

2. Is trust proof competing with H1?
- Decision: keep proof in right panel with lower visual contrast than headline.

3. Is mobile still scannable in <5 seconds?
- Decision: preserve text-first order and stack CTAs before proof content.

4. Is brand fidelity preserved?
- Decision: stay in EPB red/white spectrum; no alien accent palette.

5. Any risk of regressions in accessibility?
- Decision: retain focus-visible, avoid heavy motion, respect reduced-motion classes.

## Approved implementation package
- Hero gradient + ambient dynamic shapes
- Refined hierarchy timing via reveal classes
- Trust panel card rhythm polish
- Keep Clientes premium proof section as credibility bridge

## Post-implementation checks required
- Build integrity
- Live preview sanity check
- Asset and string verification in built output
