# QA Report: rosehip-oil-for-hyperpigmentation

**File:** `blog-posts/49-rosehip-oil-for-hyperpigmentation.html`
**Reviewed:** 2026-05-04
**Verdict:** PASS (with 🟡 starter-ritual handle inconsistency)

## 8-point validation

| Check | Result | Detail |
|---|---|---|
| Title ≤60 chars | PASS | 54 chars: `Rosehip Oil for Hyperpigmentation: Fades in 8-16 Weeks` |
| Meta ≤155 chars | PASS | 141 chars |
| Target query in H2 | PASS | Line 48: H2 `Rosehip oil for hyperpigmentation: what it does and what it doesn't` (exact target query captured) |
| Brand-fact compliance | PASS | No France-origin / no derm-approved / no warranty claims. Tretinoin and hydroquinone framed as separate prescription products, not endorsed |
| First-person voice | PASS | Only `I` instances are inside FAQ Q names (`Can I use rosehip oil with prescription tretinoin?`, `How long should I use rosehip oil before giving up?`) — searcher voice, allowed. Brand-plural "we'd actually recommend" (line 166 H2) is acceptable |
| Schema (≥1 valid type) | PASS | 2 schemas: Article (line 224) + FAQPage (line 242, 5 Q&As mirroring body) |
| Internal links | 🟡 SUGGESTION | Line 172: `/products/rituel-starter-ritual` — corpus inconsistency. Only 2 of 5 starter-ritual references corpus-wide use this form; 3 use `/products/starter-ritual`. Proposal claimed `rituel-starter-ritual` is "used in 20+ existing posts" — verified false (only 2 files). One of these handles is broken on the live store |
| Pricing | PASS | $22 gua sha (line 170), $15 rosehip oil (line 169), $35 starter ritual (line 172) — matches canonical |

## Notes

- Striking-distance H2 with explicit target query phrase is a clean Lever 6 capture.
- 5 named citations now in body: Phetcharat 2015 (Clin Interventions in Aging), Lin 2003 (Exp Dermatology), BJD 1998, JCDS&A 2015, Nielsen 2007. Solid research surface.
- Key Takeaway + TOC + Article+FAQ schema are all new vs original — strong CTR-lever stack.
- H2 sections lack `id` anchors despite TOC referencing them (lines 33–44). The TOC `<a href="#why-hyperpigmentation">` etc. won't work because `<h2>` tags at lines 53, 59, 72 etc. have no `id` attributes. Anchor IDs are on the wrapping `<section>` tags instead — TOC links to `#why-hyperpigmentation` will resolve to the section, so functionally OK, but worth noting for consistency vs other Batch B posts which put IDs on H2s.

## 🟡 Starter-ritual handle (cross-batch finding)

Same finding as `does-gua-sha-slim-your-face.md`. Recommend Doriano verify the canonical handle on Shopify and standardize. Most likely fix: change `/products/rituel-starter-ritual` (line 172) to `/products/starter-ritual` to match the majority of corpus including peer Batch B posts. Not blocking — the page renders, the link just may 404 if `rituel-starter-ritual` isn't the live handle.

**Final verdict: PASS — ship as-is, flag handle for batch-level cleanup.**
