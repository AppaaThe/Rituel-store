# Brief: gua-sha-morning-routine-steps

## Snapshot
- **File:** blog-posts/48-gua-sha-morning-routine-steps.html
- **Tier:** cold
- **GSC 28d:** 6 imp · pos 27 · 0% CTR
- **Diagnosis:** page 3 — title is decent but missing schema entirely. Body is strong how-to but no FAQ schema, no HowTo schema, no Article schema. Cannibalization risk: post `/blogs/news/5-minute-morning-gua-sha-routine` likely targets a similar query and is more authoritative.

## Current state
- **Title** (60/60): `The Perfect Gua Sha Morning Routine: Step-by-Step in 5 Minutes` — **AT THE LIMIT**
- **Meta** (152/155): `Learn the exact gua sha morning routine steps to depuff, sculpt, and glow in under 5 minutes. Simple guide for beginners and daily practitioners.`
- **Intro hook** (first ~50 words): "You wake up. Your face looks puffy. Your jawline is somewhere under last night's water retention. You have maybe ten minutes before you need to start getting ready..." — strong relatable opener
- **H2 structure:**
  - Why Morning Is the Best Time for Gua Sha
  - What You Need (Just Two Things)
  - Before You Start: The Rules
  - The 5-Minute Gua Sha Morning Routine: Step by Step
  - What You Should See Immediately
  - Common Mistakes That Sabotage Your Routine
  - How to Build the Habit (Without Willpower)
  - Learn More About Amethyst Gua Sha
  - The Bottom Line
- **Schema present:** None (no FAQPage, no Article, no HowTo).

## Target query analysis
- **Query:** gua sha morning routine steps
- **Intent:** how-to (user wants ordered protocol)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Brand blog posts "5-Minute Morning Gua Sha Routine"
  2. YouTube tutorials (heavy competition)
  3. Pinterest-driven listicle content
- **Common patterns in top SERP titles:** "Step-by-step" + time + body part
- **Angle gap (what no top result is doing):** Stating the exact step count (6) + benefit per step + the "rules before you start" framework upfront.

## Recommended rewrite direction
- **Title formula:** [Number of steps] + [exact query] + [time]. Example direction: `Gua Sha Morning Routine: 6 Steps in 5 Minutes (2026)` or `6-Step Gua Sha Morning Routine (5 Min, Beginner Map)`
- **Title must include:** "gua sha morning routine" (exact query mirror) + step count or time + ≤60 chars
- **Meta description angle:** Lead with the 6-step structure + 5-minute promise + the "open-the-neck-first" rule (which is the post's strongest unique mechanic). Mirror exact query.
- **Intro hook fix:** The current "you wake up... face looks puffy" opener is good. Tighten to 2 sentences and follow with answer-first: "Six steps, five minutes: open neck, sculpt jaw, lift cheeks, depuff under-eye, lift brow/forehead, final flush. Here's the exact protocol." Then drop into "why morning."
- **Body changes needed:** **MAJOR — add FAQ section + schema.** Currently no FAQ at all (missed CTR lever). Pull 5 Qs from the content (e.g., "How long does it take?" "Morning or night?" "Do I need oil?" "Can I do this in the shower?" "How often per week?"). Add Article schema with image.
- **Schema additions:** **MANDATORY: add FAQPage JSON-LD** (after FAQ section is added), **HowTo JSON-LD** (the 6-step structure is purpose-built for it — single highest-leverage addition for this post), Article JSON-LD with image.
- **Internal link opportunities:** keep 5-min-morning-routine, night-routine, best-time-morning-vs-night. Add link to gua-sha-strokes-for-beginners (sister post in this batch — same beginner intent), gua-sha-direction-of-strokes (sister post), amethyst pillar.

## Brand-fact compliance check
- Pricing $22 + $15 + Starter Ritual $35 — matches canonical.
- **PRODUCT LINK ISSUE:** post links to `/products/amethyst-gua-sha` for "starter ritual bundle ($35)" — wrong handle. Should be `/products/starter-ritual`. **Fix in rewrite.**
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (current is exactly 60 — could go shorter to add a hook word)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- **MANDATORY: add FAQPage JSON-LD + HowTo JSON-LD** schemas — currently zero schema on this post
- **FIX:** Starter Ritual link should go to `/products/starter-ritual`, not `/products/amethyst-gua-sha`
- Add at least 5 FAQ Q&As at the end of the body
