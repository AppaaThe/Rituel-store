# Brief: rosehip-oil-for-dry-skin

## Snapshot
- **File:** blog-posts/46-rosehip-oil-for-dry-skin.html
- **Tier:** cold
- **GSC 28d:** 6 imp · pos 17.5 · 0% CTR
- **Diagnosis:** page 2 — title is decent but doesn't surface the dry-vs-dehydrated distinction (the post's strongest unique angle). Schema is completely missing.

## Current state
- **Title** (62/60): `Rosehip Oil for Dry Skin: Why It Works Better Than Moisturizer Alone` — **OVER LIMIT BY 2**
- **Meta** (149/155): `Rosehip oil for dry skin works because it repairs the barrier, not just coats it. Here's the science, how to use it, and why moisturizer alone falls short.`
- **Intro hook** (first ~50 words): "You moisturize twice a day. You drink your water. You avoid hot showers. And your skin is still tight, flaky, and dull by noon..." — good problem-aware opener
- **H2 structure:**
  - Why Your Skin Is Actually Dry
  - The Science Behind Rosehip Oil and Dry Skin
  - Rosehip Oil vs. Moisturizer: They Do Different Jobs
  - How to Use Rosehip Oil for Dry Skin
  - Common Mistakes That Make Dry Skin Worse
  - Who Should (and Shouldn't) Use Rosehip Oil for Dry Skin
  - Frequently Asked Questions
  - The Product We Built for This
  - The Bottom Line
- **Schema present:** None (no FAQPage despite 6 Qs in body, no Article).

## Target query analysis
- **Query:** rosehip oil for dry skin
- **Intent:** problem-diagnosis / commercial (user has dry skin, considering rosehip)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Brand blog posts (The Ordinary, Pai, Mario Badescu) "Rosehip Oil Benefits for Dry Skin"
  2. Healthline-style "Is Rosehip Oil Good for Dry Skin?"
  3. Reddit threads + Quora
- **Common patterns in top SERP titles:** "good for" + "dry skin" or "benefits"
- **Angle gap (what no top result is doing):** The dry-vs-dehydrated distinction is genuinely unique — most competitors flatten dry skin into one problem. Lead with that.

## Recommended rewrite direction
- **Title formula:** [Exact query] + [unique angle hook]. Example direction: `Rosehip Oil for Dry Skin: Barrier Fix Moisturizer Can't Do` or `Rosehip Oil for Dry Skin: 44% Linoleic Acid (Why It Works)`
- **Title must include:** "rosehip oil for dry skin" (exact query mirror) + a hook (% / mechanism / verdict)
- **Meta description angle:** Lead with the verdict + the dry-vs-dehydrated framing as differentiator. Cite the 44% linoleic acid mechanism. Mirror exact query.
- **Intro hook fix:** Keep the "you moisturize twice a day" opener — it's strong. Add a 1-sentence verdict before paragraph 2: "The reason: rosehip rebuilds your barrier (it's 44% linoleic acid, the exact lipid your skin uses to make ceramides), while moisturizer just sits on top." Then continue.
- **Body changes needed:** **MAJOR — add FAQ schema.** Body has 6 Qs but no schema. Add Article schema. Body content is otherwise strong.
- **Schema additions:** **MANDATORY: add FAQPage JSON-LD**, Article JSON-LD with image.
- **Internal link opportunities:** keep rosehip-before-or-after-moisturizer, vs-hyaluronic-acid, comedogenic, under-eye-wrinkles, stretch-marks, amethyst pillar. Add link to rosehip-oil-vs-jojoba-oil-face (sister post in this batch).

## Brand-fact compliance check
- Pricing $15 rosehip + $22 amethyst + Starter Ritual $35 — matches canonical.
- **NOTE:** post says "Every batch is tested for linoleic acid percentage (consistently 43-46%)" — this is a specific lab-claim. Verify with Doriano whether this is documented for the actual SKU before keeping in rewrite. If not provable, soften to "high in linoleic acid (typically 43–46% in cold-pressed rosehip seed oil)."
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- **MANDATORY: add FAQPage JSON-LD schema** — currently zero schema
- Verify or soften the "every batch tested 43–46% linoleic acid" claim — keep only if provable
