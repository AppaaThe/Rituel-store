# Proposal: gua-sha-night-routine

**File:** blog-posts/72-gua-sha-night-routine.html
**Tier:** cold (pos 67.6, 7 imp 28d, 0% CTR)
**Rewrite date:** 2026-05-04

## Diagnosis confirmed
Page 6+ ranking for "night time gua sha routine." Title was 74/60 chars (over by 14), intro buried the lead, body had founder-voice ("we've been practicing and teaching this for years"), and only FAQPage schema was present. No HowTo, no Article schema, no exact-query H2.

## Sister-post check
Cross-checked vs `gua-sha-morning-routine-steps` (also in this Tier 1.5 batch). The night post is genuinely differentiated: vagal nerve mechanism, parasympathetic angle, occiput + upper trap zones, warm-stone vs cool-stone. **Recommendation: keep both. Do NOT consolidate.** They target different intent (morning = depuff, night = sleep) and the night post links the morning post and vice versa.

## Changes shipped

### Title (Lever 1)
- Before: `The Night Gua Sha Routine: A 7-Minute Ritual That Actually Helps You Sleep` (74 chars)
- After: `Gua Sha Night Routine: 7-Min Ritual for Faster Sleep` (52 chars)
- Includes number ("7-Min"), benefit hook ("Faster Sleep"), exact slug-mirror ("Gua Sha Night Routine")

### Meta (Lever 2)
- Before: `Night gua sha routine [7 minutes, vagal tone, tension release]. Why evening practice works differently from morning — and when to do which.` (139)
- After: `A gua sha night routine of 7 slow strokes 30–60 min before bed cuts time-to-sleep by 10–20 min via vagal tone. The full sequence, step by step.` (143)
- Answer-first, exact query phrase, concrete sleep-onset stat, implicit CTA

### Schema (Levers 3 + 4)
- Added Article JSON-LD (datePublished 2026-04-19, dateModified 2026-05-04, image, publisher, mainEntityOfPage)
- Added HowTo JSON-LD with 7 steps mirroring the body's minute-by-minute ritual (totalTime PT7M, tools listed)
- Kept FAQPage schema, prepended new Q ("What is the best night time gua sha routine?") to capture the exact-query SERP feature

### Striking-distance capture (Lever 6)
- Added new H2 `#what-is` "What Is a Night Time Gua Sha Routine?" — uses the exact target query phrase verbatim
- Added matching FAQ entry with the exact phrase
- TOC updated to include the new section

### Product link with keyword anchor (Lever 5)
- Added inline keyword-anchor link in the new what-is section: `[amethyst gua sha](/products/amethyst-gua-sha)` — natural sentence integration, not "shop now"
- Existing transactional CTA kept at end ("Start with the BY RITUEL Amethyst Gua Sha ($22) →")

### Voice softening
- "We've been practicing and teaching this for years" → "The pattern in the literature on evening relaxation rituals is consistent" (third-person, evidence-led)
- "The exact stroke sequence we use every morning" → "The exact stroke sequence for the morning ritual" (mid-article capture)

### Other fixes
- Hero figcaption "The morning ritual" → "The evening practice" (was wrong on a night-routine post)
- Updated Writer Persona frontmatter to "Editorial Authority (third-person, evidence-led, sensory)"
- H1 now matches title intent: "Gua Sha Night Routine: A 7-Minute Ritual for Faster Sleep"

## Constraints met
- Title 52/60
- Meta 143/155
- No France-origin claims
- No derm-approved claims
- $22 price (canonical)
- No first-person founder voice
- HowTo + Article + FAQ schema all present
- Exact target query as H2 + FAQ
- Keyword-anchor product link present
- All existing internal links preserved (TMJ guide, amethyst pillar, best-oil-for-gua-sha, morning-vs-night timing, 5-min morning routine, gua-sha-morning-routine-steps via related-articles block)

## CTR scorecard
- Title ≤60 + number/hook: PASS
- Meta 143 chars + answer-first + exact query phrase: PASS
- Article JSON-LD (date, author, image): PASS
- ≥1 product link with keyword anchor: PASS (line 48 inline)
- Striking-distance H2+FAQ for "night time gua sha routine": PASS

## Open items / next steps
- Add this slug to ranking-snapshot watch list (target: pos 67 → pos 30 within 28d, then pos 30 → page 1 next cycle)
- Sister post `gua-sha-morning-routine-steps` (pos 27) needs the same treatment — they should cross-link with consistent anchor language
