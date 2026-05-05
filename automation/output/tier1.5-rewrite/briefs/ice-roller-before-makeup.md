# Brief: ice-roller-before-makeup

## Snapshot
- **File:** blog-posts/71-ice-roller-before-makeup.html
- **Tier:** warm
- **GSC 28d:** 31 imp · pos 57.8 · 0% CTR
- **Diagnosis:** stuck deep on page 5–6 despite strong content. Title is verbose and competes with stronger product/celebrity content for this query. Needs a more specific hook + body keyword density boost (we currently sell ICE ROLLER but don't have a dedicated product page for it — this affects internal link targeting).

## Current state
- **Title** (76/60): `Ice Roller Before Makeup: The 3-Minute Prep That Makes Foundation Look Airbrushed` — **OVER LIMIT BY 16**
- **Meta** (158/155): `Ice roller before makeup [3-minute protocol, the science of pore tightening, and why it makes foundation sit better]. The prep step makeup artists swear by.` — **OVER BY 3**
- **Intro hook** (first ~50 words): "There's a reason every makeup artist you've watched on set pulls an ice roller out of a cooler before the foundation goes on. It's not a gimmick..." — strong celebrity-MUA hook
- **H2 structure:**
  - Why Ice Rolling Before Makeup Works (3 Mechanisms)
  - The 3-Minute Pre-Makeup Protocol
  - Where It Fits in Your Routine
  - How It Changes Foundation Application
  - Which Skin Types Benefit Most
  - The 4 Mistakes That Kill the Effect
  - Does It Make Makeup Last Longer?
  - What Ice Rolling Cannot Do for Makeup
  - FAQ
- **Schema present:** FAQPage only.

## Target query analysis
- **Query:** ice roller before makeup
- **Intent:** how-to / routine (user wants to know if they should + how)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Allure / Byrdie editorial "Why MUAs Use Ice Rollers Before Makeup"
  2. Brand product pages for ice rollers (Esarora, Fresh, Skin Gym)
  3. TikTok-style "Ice rolling for makeup" tutorials
- **Common patterns in top SERP titles:** "Why" + benefit, MUA association, "how to" framing
- **Angle gap (what no top result is doing):** Promising the EXACT TIME ("3 minutes") + the airbrushed/foundation-specific outcome. Most competitors talk about "depuffing" generically. Pre-makeup is a specific use case that deserves its own angle.

## Recommended rewrite direction
- **Title formula:** [Time] + [exact query phrase] + [outcome hook]. Example direction: `Ice Roller Before Makeup: 3-Min Prep MUAs Swear By` or `Ice Roller Before Makeup: The 3-Minute Foundation Hack`
- **Title must include:** exact phrase "ice roller before makeup" + a number/time + outcome hook
- **Meta description angle:** Lead with the time + outcome (smaller pores, smoother foundation, less product needed). Drop the "swear by" cliche. Mirror exact query.
- **Intro hook fix:** Lead with the verdict + steps preview: "Three minutes of ice rolling before foundation tightens pores, drops puffiness, and makes makeup adhere better — measurably. Here's the 7-zone protocol and why it works." Then drop into mechanism. Current MUA opener is good but takes too long.
- **Body changes needed:** minor — keep all 7-zone protocol detail. Add an H2 "Ice Roller Before Makeup: 3-Minute Protocol" that mirrors query exactly (currently "The 3-Minute Pre-Makeup Protocol" — close but not exact-match).
- **Schema additions:** **Add HowTo JSON-LD** (the 7-zone protocol is purpose-built for it). Add Article JSON-LD. Keep FAQPage.
- **Internal link opportunities:** keep ice-roller-vs-gua-sha-for-puffiness, hangover-face, migraine-relief. **PROBLEM:** the post links to `/blogs/news/ice-roller-benefits-for-skin` but that's also a tier 1.5 cold post — circular reference fine, but make sure rewrite doesn't double down on weak links. Consider adding link to amethyst-gua-sha pillar (already linked in body).

## Brand-fact compliance check
- **PRODUCT MENTION:** post references "BY RITUEL stainless steel ice roller" with image, but the product CTA at the end goes to `/products/amethyst-gua-sha` — there's a mismatch. The hero image and persona suggest selling an ice roller; the CTA sells gua sha. Two options for the writer: (a) leave CTA pointing to gua sha (current state, since Ice Globes/ice roller launch is paused per memory), OR (b) point at Rose Ice Roller ($19) if that handle exists. **Default: keep gua sha CTA, but add a soft mention of the Rose Ice Roller ($19) where appropriate.** Verify product handle before linking.
- **ICE GLOBES status:** memory says ice globes launch is paused. Don't promote what we don't sell.
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- Verify Rose Ice Roller product handle ($19) before linking; if missing, keep gua sha CTA
- HowTo schema strongly recommended for the 7-zone protocol
