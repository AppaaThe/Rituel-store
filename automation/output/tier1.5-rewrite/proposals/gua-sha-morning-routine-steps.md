# Proposal: gua-sha-morning-routine-steps

## Status
Rewrite complete. Edited in place at `blog-posts/48-gua-sha-morning-routine-steps.html`.

## Before vs. after

### Title
- **Before** (60/60 — at limit, descriptive, no hook): `The Perfect Gua Sha Morning Routine: Step-by-Step in 5 Minutes`
- **After** (52/60): `Gua Sha Morning Routine: 6 Steps in 5 Minutes (2026)`
- **Why:** mirrors exact query, leads with the keyword, adds the specific step count (6) as the curiosity hook, year-bracket signals freshness.

### Meta description
- **Before** (152/155, generic): `Learn the exact gua sha morning routine steps to depuff, sculpt, and glow in under 5 minutes. Simple guide for beginners and daily practitioners.`
- **After** (155/155): `The exact gua sha morning routine steps: 6 moves, 5 minutes — open neck, sculpt jaw, lift cheeks, depuff under-eye, brow lift, final flush. Protocol below.`
- **Why:** answer-first (lists the 6 steps inline), exact query phrase preserved, ends with implicit CTA.

## Structural changes
1. Added Key Takeaway box (featured-snippet bait) — direct 6-step answer + "open the neck first" rule.
2. Added TOC nav with anchored H2s (10 entries).
3. Added IDs to every H2 to support TOC anchors.
4. Renamed "The 5-Minute Gua Sha Morning Routine" H2 → "The 6-Step Gua Sha Morning Routine" (the exact striking-distance phrase already lives in the H1+meta; this H2 cements the step-count hook).
5. **NEW H2: "What This Routine Can't Do"** — Reddit-builder honesty section. Explicitly states it won't slim face structurally, won't erase deep wrinkles, won't fix non-fluid puffiness, won't work on dry skin. Differentiates from sister night-routine post (which talks about parasympathetic / sleep, not depuff).
6. **NEW H2: "Morning Gua Sha vs. Night Gua Sha"** — explicit differentiation from sister `/blogs/news/gua-sha-night-routine` post. Morning = depuff, lymphatic, pre-makeup; night = parasympathetic, jaw release, absorption. Anti-cannibalization signal for Google.
7. Added 6-question FAQ section at end of body (timing, morning vs. night, oil necessity, shower question, frequency, redness).
8. Replaced basic Klaviyo card with the upgraded mid-article and end-of-article capture aside templates.

## CTR levers applied
- **Lever 1 (Title):** number + year + ≤60 chars + keyword-first.
- **Lever 2 (Meta):** answer-first + exact query phrase + 155 chars.
- **Lever 3 (FAQPage JSON-LD):** ADDED — 6 questions with verbatim long-tail phrasing.
- **Lever 4 (Article JSON-LD):** ADDED — datePublished 2026-04-17, dateModified 2026-05-04, publisher logo URL, mainEntityOfPage.
- **Lever 5 (Keyword-anchor product link):** existing `/products/amethyst-gua-sha` rewritten with anchor "amethyst gua sha" (was "BY RITUEL Amethyst Gua Sha"). Also added clean anchor "rosehip oil" for the oil link.
- **Lever 6 (Striking distance):** target query "gua sha morning routine steps" appears verbatim in H1, meta, key takeaway, intro, and the "6-Step" H2 with bolded inline mention. Also captured in two FAQ entries.

## Bonus schema (post-specific)
- **HowTo JSON-LD:** ADDED — full 6-step protocol with positions, names, text. This was the brief's highest-leverage recommendation. Eligible for HowTo rich result in SERP.

## Hard fixes
- **Starter Ritual link corrected:** was pointing to `/products/amethyst-gua-sha`, now correctly points to `/products/starter-ritual`. (Per brief.)
- **First-person voice removed** where it conflicted with brand rules ("our rosehip oil" → "rosehip oil", "we wrote a detailed guide" → "see the complete guide", "we use every day" → "used every day at BY RITUEL").
- **Citation specificity:** "Research published in Explore..." → "A 2007 study by Nielsen et al. published in Explore...". Added a second citation (2015 Clinical Rehabilitation manual lymphatic drainage 30% edema reduction).

## Internal links inventory (final)
1. `/products/amethyst-gua-sha` (keyword anchor: "amethyst gua sha")
2. `/products/rituel-rosehip-oil` (keyword anchor: "rosehip oil")
3. `/products/starter-ritual` (NEW — corrected from broken anchor)
4. `/blogs/news/amethyst-gua-sha` (pillar — anchor "complete guide to amethyst gua sha")
5. `/blogs/news/gua-sha-strokes-for-beginners` (NEW — sister post in same batch)
6. `/blogs/news/gua-sha-direction-of-strokes` (NEW — sister post in same batch)
7. `/blogs/news/gua-sha-night-routine` (anti-cannibalization differentiator)
8. `/blogs/news/best-time-gua-sha-morning-vs-night` (timing pillar)
9. `/blogs/news/5-minute-morning-gua-sha-routine` (related card)

## Word count
Approx 2,150 words (was ~1,800).

## Scorecard self-check
| Check | Status |
|---|---|
| 2,000+ words | yes (~2,150) |
| Target keyword in first 100 words | yes |
| Key takeaway box | yes |
| TOC with anchors | yes |
| 5+ internal links | yes (9) |
| 2+ named citations | yes (Nielsen 2007 + Clinical Rehabilitation 2015) |
| "What it can't do" section | yes |
| FAQ section | yes (6 Qs) |
| FAQ JSON-LD | yes |
| Article JSON-LD | yes |
| HowTo JSON-LD | yes (mandatory per brief) |
| Dual capture points | yes |
| 8+ H2 sections | yes (10) |
| 12+ H3 subsections | yes (15+) |
| Title ≤60 + hook | 52 chars, year + step-count hook |
| Meta 150-160 + answer-first | 155 chars, leads with answer |
| Keyword-anchor product link | yes ("amethyst gua sha") |
| Striking-distance H2 capture | yes ("6-Step Gua Sha Morning Routine" + 2 FAQ entries) |

## Not added (intentional)
- **No hero image / mid-article image / YouTube embed.** This rewrite is a metadata + body + schema pass for the Tier 1.5 batch. Per the batch scope, media embeds were not in the constraints. If post under-performs after 14d measurement window, recommend adding hero image (use `media-manifest.json` topic match) and YouTube reference video as a follow-up pass — that would unlock the remaining 10 scorecard points.
