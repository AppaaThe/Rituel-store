# Brief: gua-sha-lymphatic-drainage-face

## Snapshot
- **File:** blog-posts/41-gua-sha-lymphatic-drainage-face.html
- **Tier:** cold
- **GSC 28d:** 5 imp · pos 46.6 · 0% CTR
- **Diagnosis:** page 5 — full rework needed. Title doesn't include exact query phrase. No schema. **CANNIBALIZATION RISK:** the related-articles section links to `/blogs/news/gua-sha-for-lymphatic-drainage-face` (a different post with similar topic) — this is competing internally for the same intent.

## Current state
- **Title** (75/60): `How Gua Sha Drains Your Lymphatic System (And Why That Fixes Puffiness)` — **OVER LIMIT BY 15, doesn't mirror query exactly**
- **Meta** (142/155): `Learn how gua sha lymphatic drainage works on your face, why puffiness happens, and the exact technique to move stagnant fluid in under 5 minutes.`
- **Intro hook** (first ~50 words): "You wake up, look in the mirror, and your face looks like it belongs to someone who slept face-down in a bowl of salt..." — relatable, slow
- **H2 structure:**
  - Your Lymphatic System: The Drainage Network Nobody Talks About
  - Why Your Face Gets Puffy (The Real Reasons)
  - How Gua Sha Actually Moves Lymph Fluid
  - The Correct Stroke Direction (This Is Where Most People Go Wrong)
  - Pressure: How Much Is Enough?
  - Why Stone Material Matters for This
  - The 5-Minute Morning Lymphatic Drainage Routine
  - What to Expect (Realistic Timeline)
  - When Puffiness Isn't Just Puffiness
  - The Bottom Line
- **Schema present:** None.

## Target query analysis
- **Query:** gua sha lymphatic drainage face
- **Intent:** how-to / informational (user wants the lymph drainage technique specifically)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Lanshin / Cecily Braden "Lymphatic Drainage Gua Sha Technique"
  2. Healthline / Allure "Gua Sha for Lymphatic Drainage"
  3. YouTube tutorials (heavy)
- **Common patterns in top SERP titles:** "for lymphatic drainage" + technique focus
- **Angle gap (what no top result is doing):** Including the 30% edema-reduction stat in title. Stating the "open the neck first" rule prominently.

## Recommended rewrite direction
- **Title formula:** [Exact query mirror] + [time/method hook]. Example direction: `Gua Sha Lymphatic Drainage Face: 5-Min Anatomy Routine` or `Gua Sha Lymphatic Drainage (Face): 6 Steps in 5 Min`
- **Title must include:** "gua sha" + "lymphatic drainage" + "face" (exact query mirror) — current title misses this entirely
- **Meta description angle:** Lead with the 30% edema reduction stat + 6-step routine + open-neck-first rule. Mirror exact query verbatim. Current meta is decent but doesn't cite the stat.
- **Intro hook fix:** Replace "salt face" opener with answer-first: "Manual lymphatic drainage with a gua sha stone reduces facial edema by up to 30% in a single session — but only if you stroke toward the right nodes and open the neck first. Here's the anatomy and the 6-step routine." Then drop into the lymphatic system overview.
- **Body changes needed:** **MAJOR — add FAQ section + schema.** Currently no FAQ at all. Pull 5 Qs (e.g., "How long until results?" "Direction matters?" "Which node first?" "Daily or weekly?" "Can I press hard?"). **Cannibalization concern:** decide whether to keep this post OR `/blogs/news/gua-sha-for-lymphatic-drainage-face` as the canonical — the writer should flag for Doriano which one wins, then 301 the other or differentiate intent.
- **Schema additions:** **MANDATORY: add FAQPage JSON-LD** (after FAQs added), HowTo JSON-LD for the 6-step routine, Article JSON-LD with image.
- **Internal link opportunities:** keep gua-sha-vs-face-yoga, gua-sha-statistics-research. **Resolve the cannibal post** — either differentiate or consolidate. Add link to amethyst pillar (already in body), gua-sha-direction-of-strokes (sister post in this batch — major topic overlap).

## Brand-fact compliance check
- Pricing $22 + $15 — matches canonical.
- No France-origin / derm-approved violations.
- **CANNIBALIZATION:** `gua-sha-for-lymphatic-drainage-face` (related sidebar) appears to be a separate live post. Both target similar intent. Either differentiate (e.g., this one = "anatomy primer," other = "5-min protocol") or consolidate via 301 redirect.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable; must include "gua sha lymphatic drainage face")
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- **MANDATORY: add FAQPage JSON-LD + HowTo JSON-LD** schemas — currently zero schema
- **FLAG TO DORIANO:** cannibalization between `/gua-sha-lymphatic-drainage-face` and `/gua-sha-for-lymphatic-drainage-face` — needs decision (consolidate or differentiate before publishing rewrite)
- Add at least 5 FAQ Q&As at the end of the body
