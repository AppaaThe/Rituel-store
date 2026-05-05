# Brief: gua-sha-for-forehead-wrinkles

## Snapshot
- **File:** blog-posts/45-gua-sha-for-forehead-wrinkles.html
- **Tier:** cold
- **GSC 28d:** 1 imp · pos 58 · 0% CTR
- **Diagnosis:** barely indexed, page 6+ — full rework needed. Body content is excellent (3-type wrinkle classification + 5-stroke technique) but title is a vague rhetorical question and schema is missing.

## Current state
- **Title** (52/60): `Can Gua Sha Reduce Forehead Wrinkles? What Actually Works` — **WITHIN LIMIT but question format with no answer**
- **Meta** (148/155): `Gua sha can soften forehead wrinkles caused by muscle tension and dehydration. Here is the honest technique, realistic timeline, and what it cannot do.`
- **Intro hook** (first ~50 words): "Short answer: yes, gua sha can visibly reduce forehead wrinkles — but only certain kinds, and only if you understand why they are there in the first place..." — strong answer-first, well-constructed
- **H2 structure:**
  - Why forehead wrinkles form (and which ones gua sha actually helps)
  - How gua sha works on forehead wrinkles — the actual mechanisms
  - The exact technique: 5 strokes for forehead wrinkles
  - How much pressure for the forehead
  - Realistic timeline: what your forehead will actually look like
  - What makes forehead gua sha work better
  - What gua sha cannot do for forehead wrinkles
  - Frequently asked questions
  - The bottom line
  - Watch the technique
- **Schema present:** None (no FAQPage despite 6 Qs in body, no Article).

## Target query analysis
- **Query:** gua sha for forehead wrinkles
- **Intent:** problem-diagnosis / commercial (user has visible forehead lines, wants verdict)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Lanshin / Mount Lai "Gua Sha for Forehead Lines"
  2. Aesthetician blog posts
  3. YouTube technique videos
- **Common patterns in top SERP titles:** "for forehead wrinkles" + technique
- **Angle gap (what no top result is doing):** The 3-type wrinkle classification (dynamic / dehydration / structural) + which gua sha actually works for. This is a unique, evidence-based framework competitors don't have.

## Recommended rewrite direction
- **Title formula:** [Exact query] + [type-specific verdict] + [stroke count]. Example direction: `Gua Sha for Forehead Wrinkles: 5 Strokes (Type Guide)` or `Gua Sha for Forehead Wrinkles: Yes for 2 of 3 Types`
- **Title must include:** "gua sha for forehead wrinkles" (exact query mirror) + verdict word + ≤60 chars
- **Meta description angle:** Lead with the 3-type framework verdict ("works on dynamic + dehydration lines, not structural") + the 5-stroke technique. Mirror exact query.
- **Intro hook fix:** The current "Short answer: yes... but only certain kinds" is already strong. Just promote that 3-type breakdown earlier (currently buried in H2). One-sentence preview at the very top: "Gua sha works on dynamic forehead lines (muscle tension) and dehydration crinkles, but won't erase deep structural creases. The 3-type classification + 5-stroke technique below tell you exactly which is which."
- **Body changes needed:** **MAJOR — add FAQ schema.** 6 Qs in body, zero markup. Add Article schema with image.
- **Schema additions:** **MANDATORY: add FAQPage JSON-LD**, Article JSON-LD with image, **HowTo JSON-LD** for the 5-stroke sequence.
- **Internal link opportunities:** keep neck-lines-wrinkles, gua-sha-for-jowls (sister post in this batch), eye-bags-dark-circles, amethyst pillar. Add link to gua-sha-direction-of-strokes (sister post in this batch — direction overlap is high), forehead.

## Brand-fact compliance check
- Pricing $22 + $15 + Starter Ritual ($35) — matches canonical.
- **PRODUCT URL ISSUE:** post mentions "Part of our [starter ritual]($35) with the rosehip oil" but links to `/products/rituel-rosehip-oil` — the link text says "starter ritual" but the URL is the rosehip oil. Either fix the URL to `/products/starter-ritual` or change the anchor text. **Fix in rewrite.**
- "Hand-cut from a single piece of Brazilian amethyst" — verify this geological origin claim before publishing. If unverified, soften to "carved from genuine amethyst."
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- **MANDATORY: add FAQPage JSON-LD + HowTo JSON-LD** schemas — currently zero schema
- **FIX:** the "starter ritual" anchor text linking to `/products/rituel-rosehip-oil` — either match URL to anchor or vice versa
- **VERIFY:** "Brazilian amethyst" claim — soften if unprovable
