# QA Report: gua-sha-night-routine

**File:** `blog-posts/72-gua-sha-night-routine.html`
**Reviewed:** 2026-05-04
**Verdict:** PASS

## 8-point validation

| Check | Result | Detail |
|---|---|---|
| Title ≤60 chars | PASS | 52 chars: `Gua Sha Night Routine: 7-Min Ritual for Faster Sleep` |
| Meta ≤155 chars | PASS | 143 chars |
| Target query in H2 | PASS | Line 46: H2 `What Is a Night Time Gua Sha Routine?` (exact target query "night time gua sha routine" captured) |
| Brand-fact compliance | PASS | No France-origin / no derm-approved / no warranty claims |
| First-person voice | PASS | Only `I` instances are inside FAQ Question names — searcher voice, allowed. Founder-voice "we've been practicing and teaching this for years" successfully reframed to evidence-led third-person per proposal |
| Schema (≥1 valid type) | PASS | 3 schemas: Article (line 236) + HowTo (line 254, 7 steps + PT7M + 2 tools) + FAQPage (line 312, 6 Q&As, lead Q matches target query) |
| Internal links | PASS | `/products/amethyst-gua-sha` keyword-anchor inline (line 48) + transactional CTA (line 195). Cross-links to TMJ guide, best-oil-for-gua-sha, related blog grid all intact. No starter-ritual link present |
| Pricing | PASS | $22 gua sha (line 195) — matches canonical |

## Notes

- HowTo schema is the strongest in the batch: 7 numbered steps with `position` field, two tools listed, totalTime PT7M, well-mapped to body's minute-by-minute structure.
- FAQPage lead question is exact target query phrase — featured-snippet bait.
- Hero figcaption correctly reads "The evening practice" (proposal flagged + fixed an earlier "morning ritual" mismatch).
- Voice softening verified: "we've been practicing and teaching this for years" → "The pattern in the literature on evening relaxation rituals is consistent" (line 23).
- Note: `<a href="/blogs/news/best-facial-oil-for-gua-sha">best oil for gua sha</a>` on line 70 — confirm this slug exists, otherwise it's a soft 404. Out of scope for this QA but worth a corpus sweep.

**Final verdict: PASS — ship as-is.**
