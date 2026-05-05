# QA Report: does-gua-sha-slim-your-face

**File:** `blog-posts/47-does-gua-sha-slim-your-face.html`
**Reviewed:** 2026-05-04
**Verdict:** PASS (with 🟡 starter-ritual handle suggestion)

## 8-point validation

| Check | Result | Detail |
|---|---|---|
| Title ≤60 chars | PASS | 51 chars: `Does Gua Sha Slim Your Face? Yes (Lymph) — No (Fat)` |
| Meta ≤155 chars | PASS | 154 chars (em-dash counts as 1) |
| Target query in H2 | PASS | Line 30: H2 `Does gua sha slim your face? The honest 3-mechanism answer` (exact phrase) |
| Brand-fact compliance | PASS | No France-origin / no derm-approved / no warranty claims |
| First-person voice | PASS | No `I/I'm/my face/Doriano` outside FAQ Q's. Brand-plural "we" only ("we would rather lose the sale", "the exact stroke sequence we use every morning") — acceptable BY RITUEL plural |
| Schema (≥1 valid type) | PASS | 2 schemas: Article (line 223) + FAQPage (line 241, 6 Q&As, lead Q is exact target query) |
| Internal links | 🟡 SUGGESTION | Line 113: `/products/starter-ritual` — corpus is split (3 posts use this form, 2 use `/products/rituel-starter-ritual`). Without admin verification can't confirm which is live. Most peers in Tier 1.5 batch use `/products/starter-ritual`, so this matches majority |
| Pricing | PASS | $22 gua sha (lines 109, 164), $15 rosehip oil (line 105), $35 starter ritual (line 113) — matches canonical |

## Notes

- Article + FAQPage schema both correctly nested, valid JSON-LD.
- Lead H2 captures target query verbatim — strong striking-distance lever.
- Key Takeaway box present (featured-snippet bait).
- Product anchor `this amethyst gua sha` (line 109) is clean keyword anchor (Lever 5).
- No HowTo schema — proposal didn't claim one. Article + FAQPage satisfies the ≥1 schema requirement.

## 🟡 Starter-ritual handle (cross-batch finding)

Across the corpus, 3 files use `/products/starter-ritual` (this post + #43 + #48) and 2 files use `/products/rituel-starter-ritual` (#31 + #49). Proposal for sister post #49 claimed `rituel-starter-ritual` is "used in 20+ existing posts" — that claim is false (only 2 files). Recommend verifying which handle is live on Shopify and standardizing the corpus. Not blocking this post.

**Final verdict: PASS — ship as-is.**
