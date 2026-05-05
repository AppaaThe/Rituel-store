# Proposal: gua-sha-during-pregnancy-safe

**File:** blog-posts/65-gua-sha-during-pregnancy-safe.html
**Tier:** hot (page 1 edge — pos 10.4, 65 imp 28d, 0% CTR)
**Date:** 2026-05-04

## Title — old vs new

| | Old | New |
|--|--|--|
| Text | `Gua Sha During Pregnancy: Is It Safe? (A Trimester-by-Trimester Guide)` | `Is Gua Sha Safe During Pregnancy? Yes, Face Only (3 Rules)` |
| Chars | 74 (OVER 60) | 58 |

**Why:** Brief flagged title rewrite as highest-leverage lever in entire batch. New title (1) fits ≤60 limit, (2) mirrors exact query phrase ("Is gua sha safe during pregnancy"), (3) leads with verdict ("Yes") which pregnant searchers reward heavily — they're high-anxiety and want pre-answered titles, (4) adds parenthetical specificity hook ("3 Rules") that promises actionable scope. SERP analysis showed top results all use question-format with no answer in title — gap captured.

## Meta — old vs new

| | Old | New |
|--|--|--|
| Text | `Pregnancy gua sha — safe with 5 rules [areas to avoid, trimester limits, what your OB should know]. Evidence-based answer from a mother's perspective.` | `Gua sha during pregnancy is safe — but face only, light pressure, and avoid SP6 + LI4 acupressure points. Trimester rules + what your OB should know.` |
| Chars | 155 | 151 |

**Why:** Old version wasted last 12 chars on persona claim ("from a mother's perspective") which (a) violates first-person rule and (b) doesn't move CTR. New meta leads with the verdict, mirrors exact query phrase ("gua sha during pregnancy is safe"), names the specific acupressure points (signals depth/expertise to scanners), ends with OB pull-through.

## Full change list

1. **Frontmatter:** rewrote Title + Meta Description, removed "Cautious Mother Voice" persona line (replaced with "BY RITUEL Team — safety-first, evidence-based, OB-deferring"), added `Modified: 2026-05-04`.
2. **H1:** changed to match new title.
3. **Intro hook (line 16):** stripped first-person opening ("I searched this question myself at 11 weeks..."). Replaced with verdict-first paragraph that mirrors the target query phrase verbatim in sentence 1, then layers the nuance.
4. **Disclaimer paragraph (line 22):** changed "Before I go further" → "Before going further", "your individual pregnancy has variables I can't see" → "...we can't see".
5. **First trimester section (line 53):** stripped "My personal guidance" → "The conservative guidance", "If you were thinking" → "If you're thinking".
6. **New striking-distance H2 added:** `Is gua sha during pregnancy safe? The complete verdict` (id `is-gua-sha-safe-during-pregnancy`) — captures the exact target query phrase as an H2, adds ~400 words of direct verdict content, also added to TOC. This is the striking-distance lever (Lever 6) for pos 10.4 → top 10.
7. **TOC:** added new H2 anchor.
8. **Article JSON-LD schema:** added before the existing FAQPage schema. Includes `headline`, `datePublished` (2026-04-19), `dateModified` (2026-05-04), Organization author/publisher, hero image URL, `mainEntityOfPage`.
9. **FAQPage schema:** unchanged — already present and well-formed.

## Brand compliance status

- **First-person ("I"/"my")** — all narrator-voice instances stripped from intro, disclaimer, and trimester section. Remaining "I"/"my" instances are user-voice inside FAQ questions ("Can I gua sha my face...") and one related-post card title — those are the searcher's voice, not narrator. Compliant.
- **No France-origin claims** — none present, none added.
- **No derm-approved claims** — none present, none added.
- **No warranty>2yr claims** — none present.
- **No founder name** — none present.
- **Product price ($22)** — preserved correctly in CTA line.

## Schema added

- **Article** (new) — 14-line JSON-LD block. Earns publish/updated date in SERP.
- **FAQPage** (existing) — kept intact, 5 Q&A entries.

## Internal links — touched

All existing internal links preserved unchanged:
- `/blogs/news/5-minute-morning-gua-sha-routine` (in Face section)
- `/blogs/news/gua-sha-for-migraine-headache` (verified file exists: `51-gua-sha-for-migraine-headache.html`)
- `/blogs/news/amethyst-gua-sha` (pillar handle per system prompt's canonical link list)
- `/products/amethyst-gua-sha` ($22 CTA)
- Related-posts cards: `how-often-should-i-gua-sha-my-face`, `gua-sha-after-botox-how-long-wait`, `gua-sha-for-rosacea-safe` (all verified to exist)

No wrong handles found that needed fixing.

## CTR levers status

- ✅ Lever 1 (title): 58 chars, has verdict + parens + number ("3 Rules")
- ✅ Lever 2 (meta): 151 chars, answer-first, mirrors exact query phrase
- ✅ Lever 3 (FAQ schema): present (5 entries, mirrors long-tail queries)
- ✅ Lever 4 (Article schema): added with dateModified
- ✅ Lever 5 (product link with keyword anchor): existing CTA "Start with the BY RITUEL Amethyst Gua Sha ($22)" — keyword-rich, no "shop now"
- ✅ Lever 6 (striking-distance capture): new H2 `Is gua sha during pregnancy safe? The complete verdict` captures exact query phrase + 400 words
