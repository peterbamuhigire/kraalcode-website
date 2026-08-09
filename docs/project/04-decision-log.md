# Decision Log

**Created:** 2026-08-09 (Phase 1)
**Last updated:** 2026-08-09

---

## DEC-001: Stack Choice — Astro 5

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | Astro 5 (static-first) with vanilla CSS custom properties |
| Context | Marketing website for SaaS ERP, trilingual (EN/FR/SW), no app backend needed |
| Options considered | Next.js, Astro, Hugo, 11ty, vanilla HTML |
| Rationale | Static-first performance, built-in i18n, content collections, Sharp image optimisation, minimal JS, TypeScript support |
| Trade-offs | No React/Svelte islands (acceptable for marketing site), no CSS framework (more manual work but full control) |
| Reversibility | High — Astro pages are portable to any SSG |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-002: Typography — Source Serif 4 + Source Sans 3

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | Source Serif 4 (display/headlines) + Source Sans 3 (body/UI) |
| Context | Need distinctive, professional typefaces with multilingual Latin coverage for EN/FR/SW |
| Options considered | Playfair Display + Inter, Lora + Open Sans, Source Serif 4 + Source Sans 3, IBM Plex Serif + IBM Plex Sans |
| Rationale | Adobe open-source fonts, strong French diacritics and Kiswahili coverage, free and self-hostable, not banned AI-default fonts, distinctive serif for headlines without being decorative |
| Trade-offs | Less distinctive than some premium fonts, but excellent coverage and zero licensing cost |
| Reversibility | High — swap fonts by updating tokens.css and woff2 files |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-003: Visual Direction — Geometric System

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | "Geometric System" — structured interlocking paths derived from the kraal/longhorn logo mark |
| Context | Need one distinctive organising idea that makes the site recognisably Kraal Code, not a generic SaaS template |
| Options considered | (a) Geometric System from logo, (b) Warm African earth tones with organic shapes, (c) Minimal corporate with teal accents |
| Rationale | Derives naturally from the logo mark, works as SVG background pattern, subtle enough to not dominate, creates visual identity without being decorative |
| Trade-offs | Requires careful implementation to avoid feeling cold or mechanical |
| Reversibility | Medium — hero SVG can be replaced, but it establishes the site's identity |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-004: Colour Palette — Extracted from Logos

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | Teal-charcoal-ivory palette extracted from KraalCode light/dark logo pixels |
| Context | Need brand colours that feel grounded, African, premium, and professional |
| Rationale | Extracted directly from the actual logo marks — not chosen arbitrarily. Warm surface tones (off-white, warm grey) complement the teal-charcoal brand colours |
| Key values | Charcoal #202833, Teal #46696b, Ivory #ccd9d2, Surface #f8f6f3 |
| Reversibility | High — colours are CSS custom properties |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-005: Sector Positioning — 9 Sectors

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | Present Kraal Code across 9 sectors: Manufacturing, Trading/Distribution, Non-Profits/NGOs, Consultancy/Professional Services, Agriculture/Cooperatives, Retail/POS, Hospitality, Schools/Education, Multi-branch organisations |
| Context | Kraal Code is industry-agnostic but needs sector-specific proof to convert buyers |
| Rationale | Each sector has specific module combinations that matter (e.g., Manufacturing has BOM/routings/QC, NGOs have donor restriction tracking) |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-006: Conversion Strategy — Demo Request Primary

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | Primary CTA: "Request a guided Kraal Code demonstration". Secondary: "Discuss your requirements". Low-commitment: Explore capabilities/security/sectors |
| Context | Need one clear conversion path that matches the sales process |
| Rationale | Demo request qualifies leads, allows tailored presentation, matches B2B SaaS buying process |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-007: Pricing — 5 Tiers in UGX

| Field | Value |
|-------|-------|
| Date | 2026-08-09 (prior session) |
| Decision | 5 tiers: Starter (UGX 250K/5 users/2 branches), Small Business (500K/15/5), Professional (1M/30/10), Business (1.75M/60/20), Enterprise (2.5M/unlimited/unlimited) |
| Context | Organisation-wide flat pricing, not per-seat. Annual billing: 10 months for 12 |
| Source | `docs/project/PROGRESS.md` — verified against product-description.md |
| Owner | Peter Bamuhigire |
| Status | Approved |

---

## DEC-008: Language Targeting — Advanced Reader, No Raw Translation

| Field | Value |
|-------|-------|
| Date | 2026-08-09 |
| Decision | EN targets East Africa + globally readable. FR targets francophone Africa (not France). SW targets Kenya/Tanzania primary. All assume advanced reader comprehension. No raw translation. |
| Context | Each language has specific target markets and reader profiles |
| Rationale | Pushed to website-skills and social-media-skills engines as standard |
| Owner | Peter Bamuhigire |
| Status | Approved, engines updated and pushed |

---

## DEC-009: Blog Replaces Resources

| Field | Value |
|-------|-------|
| Date | 2026-08-09 |
| Decision | Replace placeholder "Resources" section with a professional blog. First page: 1 featured + 4 standard (1+2×2). Subsequent pages: 6 per page with pagination. Launch with 5 researched articles. |
| Context | Resources page is entirely placeholder ("Coming soon"). Blog provides ongoing SEO and thought leadership value. |
| Owner | Peter Bamuhigire |
| Status | Approved |
