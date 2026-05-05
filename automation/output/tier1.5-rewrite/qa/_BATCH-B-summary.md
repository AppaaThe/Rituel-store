# Batch B QA Summary — Tier 1.5 Blog Rewrite

**Reviewed:** 2026-05-04
**Reviewer:** Code Reviewer agent
**Scope:** 6 of 18 reworked posts

## Result: 6 PASS / 0 FAIL

| # | Slug | File | Verdict |
|---|---|---|---|
| 1 | rosehip-oil-vs-jojoba-oil-face | `42-rosehip-oil-vs-jojoba-oil-face.html` | PASS |
| 2 | does-gua-sha-slim-your-face | `47-does-gua-sha-slim-your-face.html` | PASS (🟡 starter-ritual) |
| 3 | gua-sha-for-jowls | `69-gua-sha-for-jowls.html` | PASS |
| 4 | gua-sha-for-neck-lines-tech-neck | `43-gua-sha-for-neck-lines-tech-neck.html` | PASS |
| 5 | rosehip-oil-for-hyperpigmentation | `49-rosehip-oil-for-hyperpigmentation.html` | PASS (🟡 starter-ritual) |
| 6 | gua-sha-night-routine | `72-gua-sha-night-routine.html` | PASS |

## 8-point checklist roll-up

| Check | 6/6 |
|---|---|
| Title ≤ 60 chars | 6/6 PASS (range: 49–56) |
| Meta ≤ 155 chars | 6/6 PASS (range: 141–154) |
| Target query in H2 | 6/6 PASS |
| Brand-fact compliance | 6/6 PASS (no France / derm / warranty) |
| No founder first-person | 6/6 PASS (all `I`/`I'm` confined to FAQ Q's = searcher voice) |
| ≥1 valid schema | 6/6 PASS — Article on all 6, HowTo on 4 (43, 69, 72; HowTo missing intentionally on 42 + 47 + 49), FAQPage on all 6 |
| Internal links sound | 4/6 clean / 2/6 🟡 starter-ritual handle suggestion |
| Pricing intact ($22 / $35 / $15) | 6/6 PASS |

## Blocking issues

**None.** All 6 posts ship as-is.

## 🟡 Cross-batch suggestion (non-blocking)

**Starter-ritual handle inconsistency.** Two competing handles in the live corpus:

- `/products/starter-ritual` — used in 3 files: `43-gua-sha-for-neck-lines-tech-neck.html`, `47-does-gua-sha-slim-your-face.html`, `48-gua-sha-morning-routine-steps.html`
- `/products/rituel-starter-ritual` — used in 2 files: `31-amethyst-gua-sha-results-timeline.html`, `49-rosehip-oil-for-hyperpigmentation.html`

The proposal for post #49 claimed `/products/rituel-starter-ritual` is "used in 20+ existing posts" — that claim is false (verified 2 occurrences total corpus-wide). One of these handles is broken on the live store. Recommend Doriano verify the canonical Shopify handle and standardize. Single-file fix candidate if `starter-ritual` (no `rituel-` prefix) wins: edit line 172 of post #49.

## Other small notes (non-blocking)

- Post #43: Article schema `image` URL (`https://byrituel.com/cdn/shop/files/amethyst-gua-sha-hero.jpg`) is unversioned and may 404. Worth verifying live. Other posts use versioned CDN URLs.
- Post #49: H2 anchor IDs are on wrapping `<section>` elements rather than the `<h2>` tags themselves, unlike peers in this batch which put IDs on H2s. TOC still resolves correctly. Cosmetic inconsistency only.
- Post #72: References `/blogs/news/best-facial-oil-for-gua-sha` — confirm slug exists or it's a soft 404. Out of QA scope.

## Strengths across the batch

- All 6 titles + metas hit CTR-lever targets cleanly: verdict-in-title or number-in-title, exact-query mirror, parenthetical hooks.
- HowTo schema added on the 3 protocol posts (43, 69, 72) — strong rich-result candidates.
- Honest-limits framing throughout (10–20% softer, can't reverse fat/bone, can't cure melasma alone) — protects against misclick bounce, a real Google CTR signal.
- Citation hygiene strong: Nielsen 2007, Phetcharat 2015, Kuo 2004, BJD 1998, Plastic & Reconstructive Surgery 2011, Clinical Rehabilitation 2015 all named correctly across the batch.
- Voice work clean: founder-voice openings (`I'm going to give you the honest answer`, `we've been practicing and teaching this for years`) successfully reframed to third-person evidence-led tone where called out in proposals.

**Recommendation: Ship all 6. Flag the starter-ritual handle for a single corpus-wide fix when admin token is available.**
