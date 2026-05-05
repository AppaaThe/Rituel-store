# QA Report: rosehip-oil-vs-jojoba-oil-face

**File:** `blog-posts/42-rosehip-oil-vs-jojoba-oil-face.html`
**Reviewed:** 2026-05-04
**Verdict:** PASS

## 8-point validation

| Check | Result | Detail |
|---|---|---|
| Title ≤60 chars | PASS | 56 chars: `Rosehip vs Jojoba Oil: 8 Differences (Skin Type Verdict)` |
| Meta ≤155 chars | PASS | 148 chars |
| Target query in H2 | PASS | Line 92: H2 `Rosehip Oil vs Jojoba Oil for Face: 8-Point Side-by-Side Comparison` (exact-phrase capture) |
| Brand-fact compliance | PASS | No France-origin / no derm-approved / no warranty claims |
| First-person voice | PASS | Only `I` instances are inside FAQ Question names (`Should I use rosehip oil...`) — searcher voice, allowed |
| Schema (≥1 valid type) | PASS | 2 schemas: Article (line 383) + FAQPage (line 401, 5 Q&As) |
| Internal links | PASS | All product handles correct: `/products/rituel-rosehip-oil`, `/products/amethyst-gua-sha`. No starter-ritual link. Cross-links to pillar + sister posts intact |
| Pricing | PASS | $22 gua sha (line 269), $15 rosehip oil (lines 206, 323) — matches canonical |

## Notes

- Article schema includes correct `headline`, `datePublished` (2026-04-16), `dateModified` (2026-05-04), `mainEntityOfPage`.
- Striking-distance H2 capture clean — exact target query phrase mirrored at `#side-by-side-comparison`.
- No starter-ritual link in this post, so it sidesteps the handle-inconsistency issue affecting other Batch B posts.
- Body voice: brand-plural "we" used sparingly (e.g., "we use", "we'd rather"). No founder voice violations.

**Final verdict: PASS — ship as-is.**
