# Brief: rosehip-oil-vs-jojoba-oil-face

## Snapshot
- **File:** blog-posts/42-rosehip-oil-vs-jojoba-oil-face.html
- **Tier:** warm
- **GSC 28d:** 21 imp · pos 33.3 · 0% CTR
- **Diagnosis:** page 3 — title is OK length but lacks a verdict hook. Comparison-intent users want the decision in the title, not "which one should you use" framing.

## Current state
- **Title** (60/60): `Rosehip Oil vs Jojoba Oil for Face: Which One Should You Use?` — **AT THE LIMIT (60 exactly), question format wastes the hook**
- **Meta** (143/155): `Rosehip oil vs jojoba oil for face — 8 differences that matter [with a skin type cheat sheet] and the 4-week timeline for real results.`
- **Intro hook** (first ~50 words): "You have been staring at two bottles for twenty minutes. One says rosehip oil. The other says jojoba oil. Both promise glowing skin..." — strong relatable opener
- **H2 structure:**
  - What Rosehip Oil Actually Is (and Why It Is Not Just Another Oil)
  - What Jojoba Oil Actually Is (Spoiler: It Is Not an Oil)
  - Rosehip vs Jojoba: Side-by-Side Comparison
  - Which Oil Is Better for Your Skin Type
  - What Neither Oil Can Do (the Honest Section)
  - How to Use Rosehip Oil on Your Face — Step by Step
  - How to Use Jojoba Oil on Your Face
  - Can You Use Rosehip Oil and Jojoba Oil Together?
  - The Facial Oil + Gua Sha Method
  - Realistic Results Timeline
  - Common Mistakes That Sabotage Your Results
  - FAQ
- **Schema present:** FAQPage only.

## Target query analysis
- **Query:** rosehip oil vs jojoba oil face
- **Intent:** comparison (user choosing one or both)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Generic "Rosehip vs Jojoba: Which Is Better?"
  2. Brand-blog comparisons (often single-product-biased)
  3. Holistic-skincare blogs with no verdict
- **Common patterns in top SERP titles:** "Which is better?" question format
- **Angle gap (what no top result is doing):** Stating the by-skin-type verdict in the title or that both can be combined. The "jojoba is technically a wax, not an oil" angle in this post is a unique differentiator the competition doesn't lead with.

## Recommended rewrite direction
- **Title formula:** [Compared items] + [verdict by skin type or combined-use angle]. Example direction: `Rosehip Oil vs Jojoba Oil for Face: Which by Skin Type` or `Rosehip vs Jojoba Oil: 8 Differences (and How to Mix Them)`
- **Title must include:** "rosehip" + "jojoba" + "face" (exact query mirror) + verdict word or differentiator
- **Meta description angle:** Lead with "use both" or "choose by skin type" verdict. Reference the 8 differences AND the wax-vs-oil distinction (unique angle). Mirror exact query. Current meta is OK but doesn't deliver the verdict.
- **Intro hook fix:** Keep the "two bottles" opener (it's strong and reader-friendly), but compress to 2 sentences and follow with a verdict: "Rosehip is a treatment oil; jojoba is technically a liquid wax that mimics your sebum. Different jobs. Here's how to choose — or combine — based on your skin type." Then expand.
- **Body changes needed:** minor — content is excellent. Add "Rosehip Oil vs Jojoba Oil for Face" as exact-match H2 (currently "Rosehip vs Jojoba: Side-by-Side Comparison" is close).
- **Schema additions:** Add **Article JSON-LD** + image. Consider **HowTo schema** for the layering protocol. Keep FAQPage.
- **Internal link opportunities:** keep rosehip-vs-squalane, rosehip-vs-retinol, rosehip-vs-hyaluronic-acid, rosehip-for-dry-skin, rosehip-for-acne-scars, sensitive-skin-gua-sha, rosehip-for-hyperpigmentation, amethyst pillar — already richly linked. Don't add more, just verify all resolve.

## Brand-fact compliance check
- Pricing $22 gua sha and $15 rosehip oil — matches canonical.
- Cites specific peer-reviewed studies (1998 Br J Dermatol, 2017 Pullar Nutrients, 2015 Phetcharat) — verify these are real. They appear to match well-known dermatology references.
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable; current is exactly 60)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- Verify `/products/rituel-rosehip-oil` handle still resolves
