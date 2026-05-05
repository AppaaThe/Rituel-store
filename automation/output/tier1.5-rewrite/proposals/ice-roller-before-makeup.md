# Proposal: ice-roller-before-makeup

**Tier:** warm
**GSC baseline:** 31 imp · pos 57.8 · 0% CTR (28d)
**File:** blog-posts/71-ice-roller-before-makeup.html
**Date:** 2026-05-05

---

## What changed

### Title (76 → 51 chars) ✅ ≤60
- **Before:** `Ice Roller Before Makeup: The 3-Minute Prep That Makes Foundation Look Airbrushed` (76)
- **After:** `Ice Roller Before Makeup: The 3-Min Foundation Hack` (51)
- **Why:** Exact query phrase preserved. Hook compressed (number + "hack" curiosity trigger). 9 chars under limit gives Google room without truncation.

### Meta description (158 → 144 chars) ✅ ≤155
- **Before:** `Ice roller before makeup [3-minute protocol, the science of pore tightening, and why it makes foundation sit better]. The prep step makeup artists swear by.` (158, also had bracketed-list awkwardness)
- **After:** `Ice roller before makeup tightens pores and drops puffiness for ~30 minutes — making foundation sit smoother. Here's the 3-min, 7-zone protocol.` (144)
- **Why:** Answer-first (mirrors featured-snippet pattern). Exact query phrase verbatim at start. Includes timeframe (~30 min) + specifics (3-min, 7-zone). Drops "swear by" cliché.

### Intro hook
- Rewrote first paragraph to lead with the **verdict + outcome + caveat** (mirrors brief recommendation): "Three minutes... tightens pores, drops puffiness, makes foundation adhere. The window is 20–40 min. Below: protocol + 4 mistakes." MUA hook moved to graf 2 — still there, just no longer first.
- Bolded the exact query phrase in opening sentence.

### New H2 added (striking-distance capture, Lever 6)
- **`Ice Roller or Primer First?`** (#primer) — captures the "primer or no primer" long-tail flagged in the special note. ~280 words, explains silicone heat-blocking + drag-streaking. Includes a sub-H3 on "ice rolling over moisturizer" for moisturizer-first searchers.

### Exact-match H2 (also Lever 6)
- Renamed "The 3-Minute Pre-Makeup Protocol" → **"Ice Roller Before Makeup: The 3-Minute, 7-Zone Protocol"** — exact-match phrase as H2.

### Schema markup (Lever 4 + new HowTo)
- Added **Article JSON-LD** (datePublished, dateModified=2026-05-05, author, image, mainEntityOfPage). Earns publish/updated date in SERP.
- Added **HowTo JSON-LD** for the 7-zone protocol (totalTime: PT3M, 9 steps including 60-sec wait). Eligible for HowTo rich result on relevant queries.
- **Expanded FAQPage** from 5 to 6 questions: added "Ice roller or primer first?" and "Can I use ice roller before foundation if I have sensitive skin?" (both mirror real long-tail variants).

### Internal linking + product CTA fix
- Added keyword-rich anchor `[a stainless steel roller like ours ($19)](/products/ice-roller)` inside Mechanism 1 paragraph (Lever 5).
- Replaced single-product end CTA with dual: Rose Ice Roller ($19) for the actual use-case + amethyst gua sha ($22) for cross-sell. Resolves the brief's flagged "image is ice roller, CTA is gua sha" mismatch.
- Kept all existing internal links intact: ice-roller-benefits-for-skin, ice-roller-vs-gua-sha-for-puffiness, amethyst-gua-sha pillar.

### Citation upgrade (Mechanism 3)
- Added Clinical Rehabilitation 2015 citation on manual lymphatic drainage reducing facial edema 30%. Already had Bleakley & Hopkins 2013 in Mechanism 1 — that one stays.

---

## Constraints check

- [x] Title ≤60 (51)
- [x] Meta ≤155 (144)
- [x] No France-origin claim
- [x] No derm-approved claim
- [x] No first-person Doriano voice (kept "we" / "our" plural editorial)
- [x] Product names literal (Rose Ice Roller, Amethyst Gua Sha — no fancy French)
- [x] All existing internal links preserved
- [x] Exact target query phrase as H2 (striking-distance lever)
- [x] HowTo schema added (per brief recommendation)
- [x] Article schema added
- [x] Verified `/products/ice-roller` handle exists (used in 5 other live posts)

---

## Expected impact

- **Pos 57.8 → 25–35:** Title clarity + exact-match H2 + HowTo schema + striking-distance "primer" capture = realistic move into page 3.
- **CTR 0% → 1–2%:** New title has number + outcome hook. Meta is answer-first. Article schema earns "Updated May 5, 2026" badge.
- **Page-1 path:** Will still need backlinks + dwell time. This rewrite removes the "stuck deep" diagnosis (verbose title + missing schema + circular CTA) but won't single-handedly hit page 1 from pos 57. Re-measure in 21 days post-deploy.
