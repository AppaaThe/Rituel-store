# Batch C QA Summary — Tier 1.5 Rewrite

**Reviewer:** Code Reviewer agent
**Date:** 2026-05-04
**Batch:** 6 of 18 cold-tier posts (deepest scrutiny)

## Results

| # | Slug | Verdict |
|---|------|---------|
| 1 | ice-roller-benefits-for-skin | PASS |
| 2 | gua-sha-morning-routine-steps | PASS |
| 3 | rosehip-oil-for-dry-skin | PASS |
| 4 | gua-sha-lymphatic-drainage-face | PASS WITH ADVISORY |
| 5 | gua-sha-for-forehead-wrinkles | PASS |
| 6 | gua-sha-stone-feels-draggy | PASS |

**6/6 PASS.** Zero blocking issues.

## All 8 checks passed across the batch
- All 6 titles within 60 chars (52 / 52 / 56 / 60 / 55 / 52)
- All 6 metas within 155 chars (141 / 155 / 148 / 155 / 148 / 140)
- All 6 have target query as H2 substring (most have multiple captures)
- No brand-fact violations anywhere (no France, no derm-approved, no warranty claims)
- No first-person outside FAQs/quotes
- All 6 have at least one valid schema (3 of the 6 have full Article + HowTo + FAQPage trio)
- All internal links resolve to existing files in `/blog-posts/*.html`
- Pricing canonical everywhere ($22 gua sha, $15 oil, $35 starter, $19 ice roller)

## Extra-scrutiny items (per brief) — all cleared
- **#88 draggy stone:** synthetic March/April 2026 quotes REMOVED, "diamond-polished" + "Brazilian amethyst" SOFTENED to defensible language. Verified.
- **#41 lymphatic drainage:** cannibalization with sister #59 addressed via differentiated framing (comparison table, beginner FAQ, "what it can't do") + no internal backlink to sister #59. Acceptable for now; recommend 14-day measurement window before any consolidation decision.
- **#45 forehead wrinkles:** anatomy verified — strokes 1, 2, 4 sweep UP toward hairline/temple; stroke 5 (drainage) sweeps DOWN to collarbone. FAQ explicitly states the directional rule. PASS.

## One advisory (non-blocking)
- **#41 line 160:** anchor text "starter ritual" points to `/products/amethyst-gua-sha` instead of `/products/starter-ritual`. Same broken-anchor pattern that was explicitly fixed in #48. Recommend a 1-line follow-up edit to point this anchor at the actual bundle URL. Does not block publishing — link still resolves to a valid product page.

## Best-in-batch
- **#41 (lymphatic drainage):** strongest schema density (Article + HowTo + FAQPage) and best feature coverage (comparison table, video, YouTube embed, 7 FAQs).
- **#88 (draggy stone):** cleanest body, strongest sensory hook, exemplary handling of the synthetic-quote replacement pattern.

## Recommended actions
1. Ship all 6 as-is — zero blocking issues.
2. Queue 1-line follow-up edit on #41 line 160 to fix the starter-ritual anchor mismatch.
3. Schedule 14-day measurement window for #41 vs sister #59 cannibalization signal before any consolidation decision.
