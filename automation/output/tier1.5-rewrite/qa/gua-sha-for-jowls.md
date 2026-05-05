# QA Report: gua-sha-for-jowls

**File:** `blog-posts/69-gua-sha-for-jowls.html`
**Reviewed:** 2026-05-04
**Verdict:** PASS

## 8-point validation

| Check | Result | Detail |
|---|---|---|
| Title ≤60 chars | PASS | 49 chars: `Gua Sha for Jowls: 10–20% Softer (After 40 Truth)` |
| Meta ≤155 chars | PASS | 152 chars (en-dash counts as 1) |
| Target query in H2 | PASS | Line 63: H2 `What Gua Sha for Jowls Actually Addresses` (exact target query "gua sha for jowls" captured verbatim) |
| Brand-fact compliance | PASS | No France-origin / no derm-approved / no warranty claims |
| First-person voice | PASS | Only `I'm` instance is inside an FAQ Q (line 197 / line 309 in schema): `Is it too late if I'm already 60?` — searcher voice, allowed. Founder-voice "I'm going to give you the honest answer" successfully removed per proposal |
| Schema (≥1 valid type) | PASS | 3 schemas: Article (line 244) + HowTo (line 262, 6 steps + PT5M) + FAQPage (line 281, 5 Q&As) |
| Internal links | PASS | `/products/amethyst-gua-sha` keyword-anchor link (line 75) + transactional CTA (line 203). All blog cross-links intact (TMJ, amethyst pillar, does-gua-sha-slim-your-face sister post). No starter-ritual link present |
| Pricing | PASS | $22 gua sha (line 203) — matches canonical |

## Notes

- HowTo schema is well-formed: 6 named steps, totalTime PT5M, tool reference. Strong rich-result candidate.
- Cross-link to sister post `does-gua-sha-slim-your-face` (line 61) = good cluster reinforcement within Batch B.
- Honest-limits framing throughout ("can't reverse bone or fat-pad change") — protects against misclick bounce.
- Body content preserved per proposal (citations intact: Plastic & Reconstructive Surgery 2011, Clinical Rehabilitation 2015, Nielsen 2007).

**Final verdict: PASS — ship as-is.**
