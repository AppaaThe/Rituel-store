# Proposal: rosehip-oil-for-rosacea

## Status
- **File:** blog-posts/68-rosehip-oil-for-rosacea.html
- **Edited in place:** Yes
- **Tier:** warm (page 2 — pos 19.6, 22 imp/28d, 0% CTR)
- **Modified:** 2026-05-04

## Changes shipped

### 1. Title rewrite (CTR Lever 1)
- **Before:** `Rosehip Oil for Rosacea: Does It Help or Flare? (Honest Guide for Reactive Skin)` — 78 chars (OVER LIMIT)
- **After:** `Rosehip Oil for Rosacea: Safe by Subtype (4-Type Guide)` — **55 chars**
- Includes exact target query + verdict signal ("Safe by Subtype") + number ("4-Type"). Pattern 4 from playbook. The "Safe" word also addresses the medical-anxiety query intent flagged in the special note without making a medical claim.

### 2. Meta description rewrite (CTR Lever 2)
- **Before:** `Rosehip oil for rosacea — is it safe? [3 rosacea subtypes, patch test protocol, what to expect in 4 weeks]. The honest answer for reactive skin.` — 147 chars but buried the answer behind a question and contained a factual error (3 subtypes, not 4)
- **After:** `Rosehip oil for rosacea is generally safe for 2 of 4 subtypes, careful for 1, skip for 1. The 14-day patch test that tells you which side you're on.` — **148 chars**
- Answer-first, exact query phrase in first 4 words, specific number (2/4, 14-day), implicit CTA. No medical claim — "generally safe" mirrors how the body content is written.

### 3. Intro hook rewrite
- **Before:** Opened with abstract "Rosacea is not a single condition — it's a spectrum of four subtypes…" (slow, requires inference)
- **After:** Leads with the verdict: "Short answer: rosehip oil for rosacea is generally well-tolerated for subtypes 2 and 4, careful-yes for subtype 1, and not the right tool for subtype 3." Exact query phrase in first 12 words. Delivers the answer Google's snippet algorithm rewards.
- Replaced second intro paragraph with a more honest framing that explicitly disclaims medical advice — important for the rosacea/medical-anxiety audience flagged in the special note.

### 4. Striking-distance H2 added (CTR Lever 6)
- New H2: `Is Rosehip Oil Safe for Rosacea?` (anchor `#is-rosehip-oil-safe-for-rosacea`) added to TOC and body
- ~330 words directly answering the safety query — includes the subtype verdict, the "safe in general vs safe for your skin" distinction, the prescription-treatment caveat, and a contextual product link
- Mirrors the highest-volume long-tail variant ("is rosehip oil good for rosacea") that the brief identified as a SERP pattern

### 5. Article JSON-LD schema (CTR Lever 4) — NEW
- Added Article schema block above existing FAQPage schema
- datePublished 2026-04-19, dateModified 2026-05-04 — earns date freshness signal in SERP
- Image points to oil-product.webp hero (already embedded in post)
- mainEntityOfPage canonicalises the byrituel.com URL

### 6. FAQ schema expanded (CTR Lever 3)
- Added "Is rosehip oil safe for rosacea?" as the first FAQ entry (matches the new H2 verbatim, primary query intent capture)
- Now 6 FAQ entries — wider SERP real estate for rich result eligibility

### 7. Keyword-anchor product link (CTR Lever 5)
- Two new contextual links to /products/rituel-rosehip-oil with keyword anchors:
  - "cold-pressed rosehip oil" (in the new H2 striking-distance section)
  - "cold-pressed rosehip oil ($15)" (in the new FAQ closer)
- Existing legacy CTA ("Start with the BY RITUEL Rosehip Oil ($15) →") removed and replaced with the contextual closer above — natural anchor, not "shop now"

### 8. Key takeaway box correction
- Fixed "(ocular-sparing)" wording — that was misleading because subtype 4 IS the ocular subtype. Changed to "(ocular — for the skin around the eye, not the eye itself)" which accurately reflects the body content's guidance.
- Changed "moderate caution" to "careful-yes" and "not recommended without dermatologist input" to "not the right tool" — softer, more honest language that matches the brand voice.

## Compliance check
- ✅ Title ≤60 (55)
- ✅ Meta ≤155 (148)
- ✅ No France-origin claim
- ✅ No dermatologist-approved claim — extra critical here. Post explicitly tells readers to consult a derm and frames rosehip as "supporting" never "treatment"
- ✅ No 2yr+ warranty claim
- ✅ No first-person voice (uses "we" sparingly as brand collective, no Doriano references)
- ✅ Product name literal ("rosehip oil," not "Rituel Rose")
- ✅ $15 pricing matches canonical
- ✅ Existing internal links preserved (rosehip-oil-for-dry-skin, gua-sha-without-face-redness, amethyst-gua-sha pillar, related-articles trio)

## Body content NOT touched
The 4-subtype breakdown, mechanism section, 14-day patch test protocol, application steps, pair-with/avoid lists, timeline, red flags, "what it cannot do" section, and FAQ body content — all preserved. Brief flagged this as the post's "strongest moat" and recommended only minor tightening of the opening, which is what was done.

## Risk notes
- The "Safe by Subtype" title is verdict-leaning. The body content fully supports that verdict (subtype 2/4 = green, subtype 1 = caution, subtype 3 = not the tool), so the title is not overpromising — but a reader on subtype 1 who flares might feel misled by the word "safe" in the SERP. Mitigation: the meta description explicitly says "careful for 1, skip for 1" so anyone clicking through with subtype-1 skin lands on the right expectation.
- "Safe" is a CTR-strong word for medical-anxiety queries but borderline on the medical-claim line. Rationale for keeping it: we say "Safe by Subtype" not "doctor-recommended" or "clinically safe" — the qualifier ("by Subtype") signals it's a framework, not a blanket clinical claim. If any compliance concern surfaces in QA, swap to `Rosehip Oil for Rosacea: 4 Subtypes, 1 Honest Guide` (54 chars) as fallback.
