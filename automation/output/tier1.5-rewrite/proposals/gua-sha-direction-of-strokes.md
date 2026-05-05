# Proposal: gua-sha-direction-of-strokes

**File:** blog-posts/66-gua-sha-direction-of-strokes.html
**Tier:** hot (pos 6.7, 41 imp/28d, 0% CTR)
**Diagnosis:** title is the only barrier — body ranks page 1, packaging fails to convert.

## Title

| | Text | Chars |
|---|---|---|
| OLD | Gua Sha Direction of Strokes: Why It Matters (And Where Every Line Should Go) | 78 |
| NEW | Gua Sha Direction of Strokes: Up, Out, or Down? (2026 Map) | 58 |

- Lever 1 compliance: under 60 (58/60), exact query mirror (`gua sha direction of strokes`) preserved, curiosity hook (`Up, Out, or Down?`), year token (`2026`), parenthetical hook (`(2026 Map)`).
- Format: `[Exact query] + [verdict question] + (year + format)`. Matches the brief's recommended formula.

## Meta description

| | Text | Chars |
|---|---|---|
| OLD | Gua sha stroke directions [zone-by-zone map] — the anatomical logic of why every line goes outward and why one wrong direction ruins your session. | 147 |
| NEW | Face strokes go up and out. Neck goes down. Here's the gua sha direction of strokes for every zone — plus the 3 exceptions that flip the rule. | 142 |

- Lever 2 compliance: 142/155, answer-first (states the rule in sentence 1), exact query phrase included, specificity (`3 exceptions`), implicit CTA via curiosity (`flip the rule`).

## Intro hook (first paragraph)

- OLD opened with `There's a rule in gua sha that most tutorials treat as an arbitrary convention…` — slow, editorial, buries the answer.
- NEW opens with `Face strokes go up and out. Neck strokes go down. There are 3 exceptions…` — answer-first, mirrors meta, drops searcher into the rule on line 1. Removes the meandering second paragraph and replaces with a tight reader-path sentence.

## H2 striking-distance capture

- Renamed `Zone-by-Zone Stroke Direction` → `Gua Sha Direction of Strokes — Zone by Zone` (and TOC anchor text matched). This puts the exact query phrase in an H2, which is the strongest on-page signal for the target query and feeds Lever 6.

## Schema

| Type | Status |
|---|---|
| FAQPage | preserved (5 Q/A) |
| **Article** | **ADDED** — headline, datePublished 2026-04-19, dateModified 2026-05-04, author/publisher (Organization: BY RITUEL), image (hero CDN URL), mainEntityOfPage |
| **HowTo** | **ADDED** — 9 steps mapping every zone (forehead → neck reversal), totalTime PT5M, tool: amethyst gua sha. This is the rich-snippet play the brief explicitly recommended. Body is already a stroke-by-stroke protocol; HowTo schema describes exactly what's there. |

## Internal links

- Preserved all 4 existing in-body links: amethyst-gua-sha-before-and-after, gua-sha-for-nasolabial-folds, gua-sha-pressure-guide, gua-sha-strokes-for-beginners (already present), amethyst-gua-sha pillar.
- Preserved 3 related-post tiles: how-to-use-gua-sha-for-jawline, gua-sha-for-nasolabial-folds, gua-sha-for-double-chin.
- **Added 1 keyword-anchored product link** in the `What Direction Alone Cannot Fix` section: `[amethyst gua sha](/products/amethyst-gua-sha)` — natural fit, reads as technique recommendation not pitch. Lever 5 satisfied.
- End-of-article CTA preserved (also keyword-rich anchor).

## Body changes

- Tightened intro from 2 paragraphs to 2 paragraphs but answer-first (no length loss, intent shift only).
- No structural body changes — body was already excellent per brief.

## Brand-fact compliance

- No France-origin claim
- No dermatologist-approved claim
- No warranty over 2 years
- No first-person `I` / `Doriano` / founder voice
- USD pricing ($22) preserved
- Product name literal (`Amethyst Gua Sha`)

## CTR scorecard

| Lever | Status |
|---|---|
| 1 — Title ≤60 + hook + year | PASS (58 chars, verdict question + 2026 Map) |
| 2 — Meta ≤155 + answer-first + query phrase | PASS (142 chars, rule on sentence 1) |
| 3 — FAQ JSON-LD | PASS (preserved, 5 Q/A) |
| 4 — Article JSON-LD | PASS (added with publish + modified dates) |
| 5 — Product link, keyword anchor | PASS (`amethyst gua sha` inline + end-of-article CTA) |
| 6 — Striking-distance H2 capture | PASS (exact query as H2, TOC anchor matches) |
| Bonus — HowTo JSON-LD | PASS (9-step zone-by-zone protocol — high rich-snippet odds) |

## Risk / watch-outs

- HowTo schema is the most aggressive add. Google has tightened HowTo eligibility to physical-task content; a body-application protocol qualifies. If GSC flags it, fall back to FAQ + Article only.
- Title swap loses the editorial flavor of the original. Trade-off acceptable given pos 6.7 + 0% CTR — current packaging earns zero clicks regardless of how literary it reads.
