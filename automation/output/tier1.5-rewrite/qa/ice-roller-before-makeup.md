# QA: ice-roller-before-makeup

**File:** `blog-posts/71-ice-roller-before-makeup.html`
**QA date:** 2026-05-05
**Verdict:** PASS

## Validation checklist

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | Title length ≤60 chars | PASS | 51 chars — `Ice Roller Before Makeup: The 3-Min Foundation Hack` |
| 2 | Meta length ≤155 chars | PASS | 144 chars |
| 3 | Target query in H2 | PASS | `<h2 id="protocol">Ice Roller Before Makeup: The 3-Minute, 7-Zone Protocol</h2>` (line 61) — exact slug-derived phrase as substring. Also captured at line 48 (`Why Ice Rolling Before Makeup Works`) and line 114 (`Ice Roller or Primer First?`) for long-tail spread. |
| 4 | No brand-fact violations | PASS | No matches for France-originated, made in France, dermatologist-approved, derm-approved, or warranty |
| 5 | No first-person voice | PASS | `I` matches confined to FAQ questions ("Should I use ice roller or gua sha before makeup?", "Can I use ice roller before foundation if I have sensitive skin?", "Can I ice roll over sunscreen?") and FAQPage JSON-LD `name` fields — searcher voice, allowed. Body uses "we"/"our" plural editorial only. |
| 6 | Schema present | PASS | 3 types: Article + HowTo + FAQPage (FAQ expanded 5→6) |
| 7 | Internal links valid | PASS | All hrefs structurally correct: `/blogs/news/ice-roller-benefits-for-skin`, `/blogs/news/ice-roller-vs-gua-sha-for-puffiness`, `/blogs/news/amethyst-gua-sha`, `/products/ice-roller` (×2 with keyword-rich anchors), `/products/amethyst-gua-sha` (cross-sell), related-posts trio (ice-roller-vs-gua-sha-for-puffiness, ice-roller-for-hangover-face, ice-roller-for-migraine-relief). Anchor text matches target in every case — proposal explicitly fixed the previously flagged "image is ice roller, CTA is gua sha" mismatch. |
| 8 | Pricing intact | PASS | `$19` for Ice Roller, `$22` for Amethyst Gua Sha — both match canonical |

## H1 alignment

H1 (line 15) matches the new frontmatter Title verbatim — `Ice Roller Before Makeup: The 3-Min Foundation Hack`. Clean.
