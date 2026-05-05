# QA: gua-sha-direction-of-strokes

**File:** `blog-posts/66-gua-sha-direction-of-strokes.html`
**QA date:** 2026-05-04
**Verdict:** PASS

## Validation checklist

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | Title length ≤60 chars | PASS | 58 chars — `Gua Sha Direction of Strokes: Up, Out, or Down? (2026 Map)` |
| 2 | Meta length ≤155 chars | PASS | 142 chars |
| 3 | Target query in H2 | PASS | `<h2 id="zone-by-zone">Gua Sha Direction of Strokes — Zone by Zone</h2>` (line 82) — exact slug-derived phrase as substring |
| 4 | No brand-fact violations | PASS | No matches for France-originated, made in France, dermatologist-approved, derm-approved, or warranty |
| 5 | No first-person voice | PASS | `I` matches confined to FAQ questions ("Should I gua sha up or down on the cheeks?", "Do I stroke the neck up or down?") and FAQPage JSON-LD `name` fields — searcher voice, allowed |
| 6 | Schema present | PASS | 3 types: Article + HowTo + FAQPage |
| 7 | Internal links valid | PASS | All hrefs structurally correct: `/blogs/news/amethyst-gua-sha-before-and-after`, `/blogs/news/gua-sha-for-nasolabial-folds`, `/blogs/news/gua-sha-pressure-guide`, `/blogs/news/gua-sha-strokes-for-beginners`, `/blogs/news/amethyst-gua-sha`, `/products/amethyst-gua-sha`, related-posts trio (how-to-use-gua-sha-for-jawline, gua-sha-for-nasolabial-folds, gua-sha-for-double-chin). Anchor text matches target in every case. |
| 8 | Pricing intact | PASS | `$22` for Amethyst Gua Sha — matches canonical |

## H1 alignment

H1 (line 15) matches the new frontmatter Title verbatim — `Gua Sha Direction of Strokes: Up, Out, or Down? (2026 Map)`. Clean.

## Note on HowTo schema risk

Proposal flagged HowTo as the most aggressive schema add (Google has tightened HowTo eligibility). The 9-step zone-by-zone protocol qualifies as physical-task content, so it should pass — but worth monitoring in GSC structured-data reports post-deploy. Not a QA blocker.
