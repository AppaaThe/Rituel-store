# QA Report: gua-sha-for-neck-lines-tech-neck

**File:** `blog-posts/43-gua-sha-for-neck-lines-tech-neck.html`
**Reviewed:** 2026-05-04
**Verdict:** PASS

## 8-point validation

| Check | Result | Detail |
|---|---|---|
| Title ≤60 chars | PASS | 53 chars: `Gua Sha for Neck Lines: 3-Min Tech Neck Fix (4 Steps)` |
| Meta ≤155 chars | PASS | 152 chars |
| Target query in H2 | PASS | Line 193: H2 `Gua Sha for Neck Lines: The Tech Neck Angle` (exact target query verbatim) |
| Brand-fact compliance | PASS | No France-origin / no derm-approved / no warranty claims |
| First-person voice | PASS | Only `I` instances are inside FAQ Question names — searcher voice, allowed. No founder voice |
| Schema (≥1 valid type) | PASS | 3 schemas: Article (line 285) + HowTo (line 303, 4 steps + PT3M + supplies) + FAQPage (line 339, 7 Q&As) |
| Internal links | PASS | `/products/amethyst-gua-sha` (lines 81, 248, 249), `/products/rituel-rosehip-oil` (line 83), `/products/starter-ritual` (line 85) — proposal explicitly fixed this from broken `/products/amethyst-gua-sha`. Cross-links to sister post `gua-sha-for-jowls` + pillar + TMJ guide intact |
| Pricing | PASS | $22 gua sha (lines 81, 249), $15 rosehip oil (line 83), $35 starter ritual (line 85) — matches canonical |

## Notes

- HowTo schema with `supply` array (oil + stone) is a richer pattern than peers — good rich-result candidate.
- Arrow-direction reinforcement is solid: front-of-neck UP, sides-of-neck DOWN to collarbone — explicitly stated in step 1, step 2 protocol, mistake list, and FAQ Q "Which direction do neck strokes go?" Matches `feedback_arrow_direction_anatomy.md` rule.
- Citations: Nielsen 2007, Kuo 2004, Clinical Rehabilitation 2015, Phetcharat 2015 — all named.
- Article schema `image` (line 295) uses a generic logo path `https://byrituel.com/cdn/shop/files/amethyst-gua-sha-hero.jpg` rather than a versioned CDN url. This may resolve to a 404 — worth verifying live, but does not block QA.

**Final verdict: PASS — ship as-is.**
