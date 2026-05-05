# QA: gua-sha-strokes-for-beginners

**File:** `blog-posts/63-gua-sha-strokes-for-beginners.html`
**QA date:** 2026-05-04
**Verdict:** PASS (with one cosmetic flag)

## Validation checklist

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | Title length ≤60 chars | PASS | 51 chars — `Gua Sha Strokes for Beginners: 7 Moves in 5 Minutes` (frontmatter `Title:`) |
| 2 | Meta length ≤155 chars | PASS | 145 chars |
| 3 | Target query in H2 | PASS | `<h2 id="strokes">Gua Sha Strokes for Beginners: The 7 Moves in Order</h2>` (line 59) |
| 4 | No brand-fact violations | PASS | No matches for France-originated, made in France, dermatologist-approved, derm-approved, or warranty |
| 5 | No first-person voice | PASS | All `I`/`my` matches occur inside FAQ questions ("Can I do this in the shower?", "What if I can't find the angle?", "Do I need to do all 7 strokes every day?") and inside FAQPage JSON-LD `name` fields — searcher voice, allowed |
| 6 | Schema present | PASS | 3 types: Article + HowTo + FAQPage |
| 7 | Internal links valid | PASS | All hrefs structurally correct: `/blogs/news/is-rosehip-oil-comedogenic`, `/blogs/news/gua-sha-pressure-guide`, `/blogs/news/amethyst-gua-sha-before-and-after`, `/blogs/news/gua-sha-for-tmj-jaw-tension`, `/blogs/news/amethyst-gua-sha-care-guide`, `/products/amethyst-gua-sha`, related-posts trio. Anchor text matches link target in every case. |
| 8 | Pricing intact | PASS | `$22` for Amethyst Gua Sha — matches canonical |

## Cosmetic flag (non-blocking)

- **H1 still old (80 chars):** Line 14 `<h1>Gua Sha Strokes for Beginners: The 7 Moves That Cover Your Whole Face (In Order)</h1>` is the pre-rewrite H1. The frontmatter `Title:` was updated to the 51-char version, but the visible page heading was not. This is not a blocker for the validation checklist (title length check passes against the frontmatter `Title:` which is what Shopify renders into `<title>`), but it creates an inconsistency between the SERP `<title>` users see in search results and the H1 they land on. Recommend syncing in next pass.
