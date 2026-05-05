# QA: gua-sha-during-pregnancy-safe

**File:** `blog-posts/65-gua-sha-during-pregnancy-safe.html`
**QA date:** 2026-05-04
**Verdict:** PASS

## Validation checklist

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | Title length ≤60 chars | PASS | 58 chars — `Is Gua Sha Safe During Pregnancy? Yes, Face Only (3 Rules)` |
| 2 | Meta length ≤155 chars | PASS | 149 chars |
| 3 | Target query in H2 | PASS | `<h2 id="is-gua-sha-safe-during-pregnancy">Is gua sha during pregnancy safe? The complete verdict</h2>` (line 157) — exact slug-derived phrase as substring |
| 4 | No brand-fact violations | PASS | No matches for France-originated, made in France, dermatologist-approved, derm-approved, or warranty |
| 5 | No first-person voice | PASS | `I`/`my` matches are inside FAQ questions ("Can I gua sha my face in the first trimester?", "Can I use gua sha for pregnancy-related puffiness?") and FAQPage JSON-LD `name` fields — searcher voice, allowed. Proposal explicitly stripped narrator-voice instances from intro/disclaimer/trimester sections. Verified clean. |
| 6 | Schema present | PASS | 2 types: Article + FAQPage |
| 7 | Internal links valid | PASS | All hrefs structurally correct: `/blogs/news/5-minute-morning-gua-sha-routine`, `/blogs/news/gua-sha-for-migraine-headache`, `/blogs/news/amethyst-gua-sha`, `/products/amethyst-gua-sha`, related-posts trio (how-often-should-i-gua-sha-my-face, gua-sha-after-botox-how-long-wait, gua-sha-for-rosacea-safe). Anchor text matches target in every case. |
| 8 | Pricing intact | PASS | `$22` for Amethyst Gua Sha — matches canonical |

## H1 alignment

H1 (line 15) matches the new frontmatter Title verbatim — `Is Gua Sha Safe During Pregnancy? Yes, Face Only (3 Rules)`. Clean.
