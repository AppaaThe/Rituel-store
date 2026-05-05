# QA: rosehip-oil-for-dry-skin

**File:** `blog-posts/46-rosehip-oil-for-dry-skin.html`
**Verdict:** PASS

## 8-point checklist

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Title <= 60 chars | PASS | 56 chars: "Rosehip Oil for Dry Skin: The Barrier Fix Cream Can't Do" |
| 2 | Meta <= 155 chars | PASS | 148 chars |
| 3 | Target query as H2 substring | PASS | H2 "Rosehip Oil for Dry Skin: How the Mechanism Works" + "How to Use Rosehip Oil for Dry Skin" + "Who Should (and Shouldn't) Use Rosehip Oil for Dry Skin" — three H2 captures of exact query. |
| 4 | No brand-fact violations | PASS | No France, no derm-approved (one mention of "see a dermatologist" for medical referral, which is allowed), no warranty. Per-batch lab-testing claim softened to industry-credible "cold-pressed batches typically test in the 43-46% linoleic acid range" per proposal. |
| 5 | No first-person outside FAQs/quotes | PASS | "I/my" only inside FAQ Qs |
| 6 | At least 1 valid schema | PASS | Article + FAQPage JSON-LD present |
| 7 | Internal links — handles correct | PASS | All `/blogs/news/*` slugs resolve: amethyst-gua-sha (16), is-rosehip-oil-comedogenic (10), rosehip-oil-for-under-eye-wrinkles (29), rosehip-oil-vs-jojoba-oil-face (42), rosehip-oil-before-or-after-gua-sha (76), rosehip-oil-vs-hyaluronic-acid (64), rosehip-oil-for-stretch-marks (23). |
| 8 | Pricing intact | PASS | $15 rosehip oil, $22 gua sha, $35 starter — canonical |

## Strengths
- Lab-claim softened correctly per brief (per-SKU testing claim removed, kept defensible "typically 43-46%" range).
- Sister-post link to /blogs/news/rosehip-oil-vs-jojoba-oil-face added per brief.
- Striking-distance H2 with verbatim query.
- Strong unique angle (dry-vs-dehydrated split) baked into both meta and FAQ.

## Issues
None blocking. None advisory.
