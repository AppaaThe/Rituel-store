# Brief: gua-sha-for-neck-lines-tech-neck

## Snapshot
- **File:** blog-posts/43-gua-sha-for-neck-lines-tech-neck.html
- **Tier:** warm
- **GSC 28d:** 10 imp · pos 30.7 · 0% CTR
- **Diagnosis:** page 3 — title is decent but generic. Body is good but lacks the schema completeness of more recent posts. The "tech neck" modifier in the slug is splitting query intent — needs sharpening.

## Current state
- **Title** (54/60): `Gua Sha for Neck Lines and Tech Neck: The 3-Minute Fix` — **WITHIN LIMIT**
- **Meta** (139/155): `Learn how gua sha for neck lines can smooth tech neck wrinkles in just 3 minutes a day. Step-by-step routine with technique tips and product picks.`
- **Intro hook** (first ~50 words): "You probably spend more time looking down at a screen than you realize. The average adult spends over four hours a day on their phone alone, and that repeated downward tilt creates something dermatologists have started calling 'tech neck'..." — slow, stat-heavy
- **H2 structure:**
  - Why the Neck Ages Faster Than Your Face
  - How Gua Sha Helps Neck Lines (The Actual Mechanism)
  - What You Need
  - The 3-Minute Neck Line Routine (Step by Step)
  - Technique Mistakes That Make Neck Lines Worse
  - How Quickly Will You See Results?
  - Pair It With These Habits for Better Results
  - The Bottom Line
- **Schema present:** None visible (no FAQPage, no Article schema).

## Target query analysis
- **Query:** gua sha for neck lines (primary), tech neck (secondary)
- **Intent:** how-to / problem-diagnosis (user has visible lines, wants the protocol)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Lanshin / Cecily Braden type technique pages
  2. Vogue/Allure "How to Fix Tech Neck"
  3. YouTube videos and TikToks (heavy video competition)
- **Common patterns in top SERP titles:** "How to" + body part, "neck wrinkles" framing, time promises
- **Angle gap (what no top result is doing):** Combining lymph + SCM muscle release + fascial mobilization in a 3-minute structured protocol. The 4-step routine here is more specific than competitors.

## Recommended rewrite direction
- **Title formula:** [Exact query] + [time + step count] + [bonus benefit]. Example direction: `Gua Sha for Neck Lines: 3-Min Tech Neck Fix (4 Steps)` or `Gua Sha for Neck Lines: 3-Minute Tech Neck Routine`
- **Title must include:** "gua sha for neck lines" (exact query) + "3-min" or "3 minute" or "tech neck" + a structural marker (steps/routine)
- **Meta description angle:** Lead with the time + step count. Name SCM muscle release (unique angle) + lymphatic flush. Mirror exact query. Current meta is OK but doesn't say "4 steps" or surface the muscle/lymph mechanisms.
- **Intro hook fix:** Lead with the protocol summary: "Three minutes, four steps: open the drainage, work the front lines, release the SCM muscle, flush. Here's exactly how — and why neck lines deepen so fast in your 30s." Then drop into the 4-hour-screen stat. Current opener takes 2 paragraphs to get to anything actionable.
- **Body changes needed:** **MAJOR — add an FAQ section + schema.** Currently no FAQ at all, which is a missed CTR lever. Pull 5 Qs from the body content (e.g., "How long until I see results?" "Should I press hard?" "Front of neck or sides first?" "Daily or 3x/week?" "Can I do this with rosehip oil?"). Also add Article JSON-LD.
- **Schema additions:** **MANDATORY: add FAQPage JSON-LD (currently missing entirely)**, Article JSON-LD with image, **HowTo JSON-LD** for the 4-step routine.
- **Internal link opportunities:** keep neck-lines-wrinkles, jawline, nasolabial-folds. Add link to gua-sha-for-jowls (sister post in this batch — 60% neck contribution overlap), pressure-guide, amethyst pillar.

## Brand-fact compliance check
- Pricing $22 amethyst + $15 rosehip + $35 Starter Ritual — matches canonical.
- **PRODUCT URL ISSUE:** post links to `/products/amethyst-gua-sha` for "Starter Ritual bundle" — that handle goes to the gua sha single, not the bundle. The Starter Ritual handle is `/products/starter-ritual`. **Fix in rewrite.**
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (current is 54, fine — but could optimize hook)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- **MANDATORY: add FAQPage JSON-LD schema** (post has no schema currently)
- **FIX:** Starter Ritual link should go to `/products/starter-ritual`, not `/products/amethyst-gua-sha`
- Add at least 5 FAQ Q&As at the end of the body
