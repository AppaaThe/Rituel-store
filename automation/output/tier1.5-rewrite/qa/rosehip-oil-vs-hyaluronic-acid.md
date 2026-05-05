# QA: rosehip-oil-vs-hyaluronic-acid

**File:** `blog-posts/64-rosehip-oil-vs-hyaluronic-acid.html`
**QA date:** 2026-05-04
**Verdict:** PASS

## Validation checklist

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | Title length ≤60 chars | PASS | 53 chars — `Rosehip Oil vs Hyaluronic Acid: Use Both (Here's How)` |
| 2 | Meta length ≤155 chars | PASS | 148 chars |
| 3 | Target query in H2 | PASS | `<h2 id="verdict">Rosehip Oil vs Hyaluronic Acid: The Short Answer</h2>` (line 45) — exact slug-derived phrase as substring |
| 4 | No brand-fact violations | PASS | No matches for France-originated, made in France, dermatologist-approved, derm-approved, or warranty |
| 5 | No first-person voice | PASS | `I` matches confined to FAQ question ("Can I use rosehip oil if I use hyaluronic acid?"), the secondary-keywords frontmatter line ("should I use rosehip oil or hyaluronic acid"), and FAQPage JSON-LD `name` field — searcher voice, allowed. Body uses "we"/brand-collective only. |
| 6 | Schema present | PASS | 2 types: Article + FAQPage (FAQ expanded from 5 → 6 entries, target query Q pushed to position 1) |
| 7 | Internal links valid | PASS | All hrefs structurally correct: `/blogs/news/rosehip-oil-for-under-eye-wrinkles`, `/blogs/news/rosehip-oil-for-acne-scars`, `/blogs/news/best-facial-oil-for-gua-sha`, `/blogs/news/amethyst-gua-sha`, `/products/rituel-rosehip-oil` (handle preserved per proposal note — not migrated), related-posts trio (rosehip-oil-vs-squalane, rosehip-oil-vs-retinol, rosehip-oil-vs-jojoba-oil-face). Anchor text matches target. |
| 8 | Pricing intact | PASS | `$15` for Rosehip Oil — matches canonical |

## H1 alignment

H1 (line 15) matches the new frontmatter Title verbatim — `Rosehip Oil vs Hyaluronic Acid: Use Both (Here's How)`. Clean.
