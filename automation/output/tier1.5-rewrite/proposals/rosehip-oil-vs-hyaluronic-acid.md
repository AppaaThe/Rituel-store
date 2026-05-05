# Proposal: rosehip-oil-vs-hyaluronic-acid

## Status
Rewrite complete — edits applied in place to `blog-posts/64-rosehip-oil-vs-hyaluronic-acid.html`.

## Title
- **Before** (95 chars): `Rosehip Oil vs Hyaluronic Acid: Which One Does Your Skin Actually Need? (The Mechanism Comparison)`
- **After** (53 chars): `Rosehip Oil vs Hyaluronic Acid: Use Both (Here's How)`
- **Why:** Hot tier post stuck at pos 6.6 with 0% CTR. Old title asked a rhetorical question and was 35 chars over the SERP cutoff (truncated to "...Skin Actually..."). New title puts the verdict (`Use Both`) in the title itself and adds a curiosity hook (`Here's How`) — comparison-intent users click answers, not questions. Stays under 60 chars so the full string renders on mobile.

## Meta
- **Before** (139 chars): `Rosehip oil vs hyaluronic acid [occlusion vs humectant, 3 scenarios]. The science of which one wins for dry, oily, aging, or dehydrated skin.`
- **After** (148 chars): `Rosehip oil vs hyaluronic acid: use both, in this order. HA first on damp skin, rosehip oil last to seal. Dehydrated vs dry — here's which you need.`
- **Why:** Old meta led with bracket placeholder text (`[occlusion vs humectant, 3 scenarios]`) — looks like un-rendered template. New meta leads with the verdict, mirrors the exact query phrase verbatim (Google bolds it in SERP), references the post's strongest unique angle (dehydrated vs dry distinction), and ends with implicit CTA.

## Body changes
- **Intro replaced.** Old intro opened with the pump/bucket analogy (clever but slow — buried the verdict in paragraph 2). New intro opens with the literal verdict in sentence 1 (`use both — hyaluronic acid first on damp skin, rosehip oil last to seal`), mirrors the exact target query in the first 100 words, and gets to the science faster.
- **New H2 added: "Rosehip Oil vs Hyaluronic Acid: The Short Answer"** — captures the striking-distance query verbatim as a section heading with a 250-word direct answer (verdict + pick-one-if-you-must framework + "water before oil, always" rule). Added to TOC.
- **Product CTA upgraded.** Old anchor was `Start with the BY RITUEL Rosehip Oil ($15) →` — generic. New anchor is keyword-rich: `BY RITUEL cold-pressed rosehip oil ($15)` inside a natural sentence describing why it's the sealing step. Lever 5 compliant.

## Schema additions
- **Added Article JSON-LD** before the FAQ block: headline, datePublished `2026-04-19`, dateModified `2026-05-04`, author (Organization: BY RITUEL), publisher with logo, hero image, mainEntityOfPage. Earns publish/updated date in SERP — date freshness signal.
- **Added FAQ entry** for the exact target query: `"Rosehip oil vs hyaluronic acid — which is better?"` answered with the verdict + mechanism. Pushed to position 1 in the FAQ schema array (most likely to be picked up as the SERP FAQ snippet).
- Existing FAQPage schema retained, all 5 original entries preserved.

## CTR Levers checklist
- [x] **L1 — Title** ≤60 chars + has parentheses + curiosity hook (`Here's How`) — 53 chars
- [x] **L2 — Meta** 148 chars, answer-first, exact query phrase verbatim
- [x] **L3 — FAQ JSON-LD** present with 6 entries (1 added, 5 retained)
- [x] **L4 — Article JSON-LD** added with publish + modified dates
- [x] **L5 — Product link** with keyword anchor (`BY RITUEL cold-pressed rosehip oil`) inside contextual sentence
- [x] **L6 — Striking-distance** capture: target query as new H2 + as FAQ #1

## Brand-fact compliance
- No France-origin claims, no derm-approved claims, no warranty mentions. First-person plural retained (`we use`) — matches brand voice rule. Pricing preserved at $15 (canonical). Product handle `/products/rituel-rosehip-oil` left as-is per brief instruction (not migrated).

## Files modified
- `c:/Users/doria/Downloads/CLAUDE/blog-posts/64-rosehip-oil-vs-hyaluronic-acid.html`

## Files created
- `c:/Users/doria/Downloads/CLAUDE/automation/output/tier1.5-rewrite/proposals/rosehip-oil-vs-hyaluronic-acid.md` (this file)
