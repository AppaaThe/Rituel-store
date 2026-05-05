# Proposal: gua-sha-for-jowls

## Summary
Tier 1.5 warm-tier rewrite. Page-2 ranking (pos 18.2, 11 imp/28d, 0% CTR). Body content was strong — preserved as-is. Surgical fixes targeting CTR + brand-fact compliance + schema coverage.

## Changes shipped

### 1. Title (CTR Lever 1)
- **Before** (69 chars, OVER LIMIT): `Gua Sha for Jowls: Can It Actually Lift Them? (The Honest Answer After 40)`
- **After** (49 chars): `Gua Sha for Jowls: 10–20% Softer (After 40 Truth)`
- Includes exact query phrase + concrete number + age qualifier + parenthetical hook. Realistic-but-hopeful per brief ("softer" not "lifts").

### 2. Meta description (CTR Lever 2)
- **Before** (149 chars, vague): "Gua sha for jowls — what works, what doesn't [the specific technique, realistic results, and the 3 things it won't do]. Written for the 40+ face."
- **After** (154 chars): "Gua sha for jowls softens appearance 10–20% over 6–12 weeks. It can't reverse bone or fat-pad change. The honest 4-layer breakdown plus stroke sequence."
- Answer-first, exact query mirrored, concrete numbers, honest limit stated.

### 3. First-person voice strip (brand-fact compliance)
- Removed "I'm going to give you the honest answer..." opening (founder-personal voice violation).
- Rewrote as "Honest answer first:" + the concrete 10–20% / 6–12 week verdict, then drop into the 4-layer anatomy.
- Replaced "If you're in your 30s..." with "For someone in their 30s..." (third-person reframe). FAQ-question "I" instances kept (those are the searcher's voice, standard pattern).

### 4. Striking-distance H2 (CTR Lever 6)
- Renamed `What Gua Sha Actually Addresses` → `What Gua Sha for Jowls Actually Addresses`. Captures exact target query verbatim as an H2. TOC anchor text updated to match.

### 5. Product link with keyword anchor (CTR Lever 5)
- Added inline contextual link inside the technique-intro paragraph: `<a href="/products/amethyst-gua-sha">our amethyst gua sha</a>` — keyword-rich anchor, not "shop now."

### 6. Cross-link to sister post in this batch
- Added `<a href="/blogs/news/does-gua-sha-slim-your-face">does gua sha slim your face</a>` after the 4-layer summary — internal cluster reinforcement.

### 7. Article JSON-LD (CTR Lever 4) — NEW
- Added Article schema with headline, datePublished (2026-04-19), dateModified (2026-05-04), author, publisher, image (hero CDN url), mainEntityOfPage. Earns publish/updated date in SERP.

### 8. HowTo JSON-LD — NEW
- Added HowTo schema covering all 6 stroke steps with totalTime PT5M and tool reference. Per brief: "Strong candidate for HowTo schema if body is a stroke protocol." Earns step-by-step rich result.

### 9. Frontmatter
- Added `Updated: 2026-05-04` line for tracker.

## What was NOT changed
- Body copy (4-layer anatomy breakdown, science citations, technique steps, neck section, timeline, pair-with section, when-to-see-pro, what-it-can't-do list, FAQ answers) — content was already strong (8 H2s, 6+ H3s, 3 named studies: Plastic and Reconstructive Surgery 2011, Clinical Rehabilitation 2015, Nielsen et al. 2007).
- Existing internal links (TMJ, amethyst pillar, neck-lines, face-yoga, pressure-guide, related-posts block) — all preserved.
- Capture forms, hero image, mid-article video, YouTube embed — all preserved.
- FAQPage schema — unchanged.

## Compliance check
- Title 49/60 ✓
- Meta 154/155 ✓
- No France-origin claim ✓
- No derm-approved claim ✓
- No warranty claim ✓
- No founder "I/my" voice ✓ (FAQ-question "I" is searcher voice, retained)
- Pricing $22 matches canonical ✓
- Product name literal ("amethyst gua sha") ✓

## Schema stack now active
1. Article (NEW)
2. HowTo (NEW)
3. FAQPage (preserved)

## Expected lift
- Title CTR: from 0% (currently truncated + question hedge) toward 3–5% range as concrete number + verdict beat hedging titles in the SERP. At pos 18.2 a CTR jump to even 2% on 11+ imp/28d is materially above 0.
- Schema rich-result eligibility: HowTo step list + Article date freshness adds SERP real estate even before ranking moves.
- Striking-distance: "gua sha for jowls" verbatim now in H2 + meta + title + body — gives Google a clean entity match for the head term.
