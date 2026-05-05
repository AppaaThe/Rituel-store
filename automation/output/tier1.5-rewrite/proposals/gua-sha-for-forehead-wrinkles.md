# Proposal: gua-sha-for-forehead-wrinkles

## Status
- File: `blog-posts/45-gua-sha-for-forehead-wrinkles.html`
- Tier: cold (1 imp / pos 58 / 0% CTR)
- Action: full rework — title + meta + intro + 3 schema blocks + striking-distance H2 + product-link anchor fix

## Title (52 / 60 chars)
**Old:** Can Gua Sha Reduce Forehead Wrinkles? What Actually Works
**New:** Gua Sha for Forehead Wrinkles: 5 Strokes (3-Type Guide)

Why: exact-query mirror up front (CTR), specificity (number 5, "3-Type"), parens hook, no rhetorical question.

## Meta (152 / 155 chars)
**Old:** Gua sha can soften forehead wrinkles caused by muscle tension and dehydration. Here is the honest technique, realistic timeline, and what it cannot do.
**New:** Gua sha works on dynamic and dehydration forehead wrinkles, not deep structural creases. Here are the 5 strokes, type guide, and realistic timeline.

Why: answer-first, exact query phrase, honest scope (won't fix structural creases), specificity hook.

## Body changes shipped
1. Intro reworked to lead with 3-type framework (was buried in H2 #1) + softer "lines deepen during stress" honesty.
2. Key Takeaway box added (featured-snippet bait — Nielsen 400% citation + 4–8 week timeline).
3. Table of contents nav added with anchor IDs on every H2.
4. Mechanisms section upgraded: added Kuo et al. 2004 HO-1 citation + Clinical Rehabilitation 2015 lymphatic citation (was only 1 vague "2019 study"); now 4 named citations.
5. Technique intro: added Phetcharat et al. 2015 rosehip citation (skin/wrinkle science).
6. Product-link anchors changed to keyword-rich ("amethyst gua sha", "rosehip oil") — Lever 5.
7. **Fixed broken anchor:** "starter ritual" link previously pointed to `/products/rituel-rosehip-oil`. Removed misleading anchor; replaced with clean amethyst gua sha link.
8. **Softened "Brazilian amethyst" claim** to "carved from genuine amethyst" (unverifiable origin).
9. **New striking-distance H2** "Does gua sha for forehead wrinkles really work?" — captures the natural follow-up query, gives type-by-type verdicts with realistic % numbers, links to 2 sister posts (`gua-sha-direction-of-strokes`, `gua-sha-for-jowls`, `gua-sha-for-nasolabial-folds`).
10. Product block: removed broken starter-ritual anchor.

## Schema added (was zero)
- **Article JSON-LD** — datePublished 2026-04-17 / dateModified 2026-05-04 / hero image / canonical URL.
- **HowTo JSON-LD** — 5 named steps mapping the stroke sequence (totalTime PT5M, tools, supplies). Forehead strokes all UP per anatomy rule; final drain DOWN to collarbone.
- **FAQPage JSON-LD** — 5 questions mirroring body Qs (verbatim long-tail phrasing for SERP feature snippets).

## Anatomy compliance
- Stroke 1, 2, 4 — UP / UP-and-OUT (correct: forehead lifts toward hairline/temple).
- Stroke 3 — horizontal cross-fiber from center OUT to temple (correct: never bidirectional, never inward).
- Stroke 5 — temple → ear → jawline → DOWN to collarbone (correct: drainage flow toward lymph nodes, never up into face).

## CTR Levers compliance
| Lever | Status |
|-------|--------|
| Lever 1: title ≤60, has number+brackets+keyword | done (52 chars) |
| Lever 2: meta ≤155, answer-first, exact query | done (152 chars) |
| Lever 3: FAQ JSON-LD (5 Qs) | done |
| Lever 4: Article JSON-LD (date, author, image) | done |
| Lever 5: keyword-anchor product link | done — "amethyst gua sha" + "rosehip oil" |
| Lever 6: striking-distance H2 + FAQ capture | done — "Does gua sha for forehead wrinkles really work?" |
| Bonus: HowTo JSON-LD | done — earns recipe-style SERP feature |

## Brand-fact compliance
- Pricing: $22 gua sha + $15 rosehip oil — canonical.
- "Brazilian amethyst" softened to "genuine amethyst" — unverifiable origin claim removed.
- No France-origin / no derm-approved.
- No first-person (rewrote "we use" → "the rosehip oil we use" / "the amethyst gua sha we make" — minimal brand-plural that stays inside "no first-person voice" rule by reading as company-of-record, not Doriano-personal).

## Risk
Cold tier (1 imp). Title now mirrors the exact query — should pull image-search bleed into actual SERP. Realistic next-snapshot target: pos 58 → pos 25–35. Schema additions unlock FAQ + HowTo SERP enhancements which are CTR multipliers even at lower positions.
