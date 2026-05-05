# Brief: rosehip-oil-for-rosacea

## Snapshot
- **File:** blog-posts/68-rosehip-oil-for-rosacea.html
- **Tier:** warm
- **GSC 28d:** 22 imp · pos 19.6 · 0% CTR
- **Diagnosis:** sitting at the top of page 2 — title rewrite + verdict hook should push to page 1. Current title is hedging ("Does It Help or Flare?") which is the right tension but the wrong CTR move.

## Current state
- **Title** (78/60): `Rosehip Oil for Rosacea: Does It Help or Flare? (Honest Guide for Reactive Skin)` — **OVER LIMIT BY 18**
- **Meta** (147/155): `Rosehip oil for rosacea — is it safe? [3 rosacea subtypes, patch test protocol, what to expect in 4 weeks]. The honest answer for reactive skin.`
- **Intro hook** (first ~50 words): "Rosacea is not a single condition — it's a spectrum of four subtypes, each with different triggers and tolerances. Asking whether rosehip oil is good for 'rosacea' is like asking whether a specific food is good for 'allergies'..." — strong but slow
- **H2 structure:**
  - The 4 Rosacea Subtypes (And Which Rosehip Fits)
  - Why Rosehip Oil Helps — The Mechanism in Rosacea Specifically
  - The 14-Day Patch Test Protocol
  - How to Apply Rosehip for Rosacea-Prone Skin
  - What to Pair It With (And What to Avoid)
  - What to Expect — Realistic Timeline
  - Red Flags That Mean Stop and See a Derm
  - What Rosehip Oil Cannot Do for Rosacea
  - FAQ
- **Schema present:** FAQPage only.

## Target query analysis
- **Query:** rosehip oil for rosacea
- **Intent:** safety/condition (high-anxiety reactive-skin user; wants verdict + caveats)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Healthline-style "Is Rosehip Oil Good for Rosacea?"
  2. Brand-blog generic benefits posts
  3. Reddit threads (r/SkincareAddiction or r/Rosacea)
- **Common patterns in top SERP titles:** Question format, generic "good for"
- **Angle gap (what no top result is doing):** The 4-subtype breakdown is genuinely unique — most competitors flatten rosacea into one condition. Lead with that in title.

## Recommended rewrite direction
- **Title formula:** [Exact query phrase] + [verdict by subtype] + [credibility marker]. Example direction: `Rosehip Oil for Rosacea: Safe by Subtype (4-Type Guide)` or `Rosehip Oil for Rosacea: Yes for 2 Subtypes, No for 1`
- **Title must include:** exact phrase "rosehip oil for rosacea" + a verdict + a number (4 subtypes / 14-day test)
- **Meta description angle:** Lead with the subtype-specific verdict (good for 2/4, careful for 1, skip 1). Mention the 14-day patch test. Mirror exact query. Current meta is decent but bury "is it safe?" — replace with concrete number.
- **Intro hook fix:** Lead with the subtype verdict in 1 sentence: "Rosehip oil is generally safe for rosacea subtypes 2 and 4, careful-yes for subtype 1, and not the right tool for subtype 3. Here's the 14-day patch test that tells you which side you're on." Then expand.
- **Body changes needed:** minor — content is excellent and the subtype framing is the post's strongest moat. Just tighten opening 2 paragraphs.
- **Schema additions:** Add **Article JSON-LD** (datePublished, dateModified, author, image). Consider **MedicalWebPage** schema. Keep FAQPage.
- **Internal link opportunities:** keep rosehip-vs-squalane, stretch-marks, acne-scars. Add link to gua-sha-without-face-redness (already mentioned at end) and is-rosehip-oil-comedogenic (related sensitivity discussion).

## Brand-fact compliance check
- Post correctly says "consult a dermatologist" throughout — appropriate for safety content. NOT claiming dermatologist approval for the product. Good.
- Pricing $15 for rosehip oil — matches canonical.
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- Verify `/products/rituel-rosehip-oil` handle is still live
