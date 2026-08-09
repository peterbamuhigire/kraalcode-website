# Phase 04 — Brand Direction & Design System

**Directory:** `docs/plans/kraal-website/phase-04-brand-direction-and-design-system/`
**Depends on:** Phase 03
**Gate:** Direction is recognisably Kraal Code, not generic SaaS; type/colour/images/layout defensible

---

## Objective

Refine and complete the design system so every component, page, and interaction looks authored by a senior human design team. Establish shared components that eliminate style duplication.

---

## Tasks

### 4.1 Typography Verification

1. Confirm Source Serif 4 and Source Sans 3 woff2 files exist in `public/fonts/`
2. If missing, download from Google Fonts (variable weight, latin-ext subset)
3. Verify `@font-face` declarations work (currently loaded via `<link rel="preload">` only)
4. Verify language coverage: English, French (diacritics: é, è, ê, ë, ç, à, â, ù, û, ü, ô, î, ï, æ, œ), Kiswahili (diacritics: limited, but verify)
5. Verify font-display strategy (recommend `swap` with tuned fallback metrics)
6. Document: chosen typefaces, licence (SIL Open Font Font), language coverage, loading strategy
7. Output: section in `docs/design/design-system.md`

### 4.2 Colour System Audit

1. Verify all `--kc-*` colour tokens in `tokens.css` against extracted logo colours
2. Test WCAG contrast ratios:
   - `--kc-text-primary` (#202833) on `--kc-surface-light` (#f8f6f3) — must be ≥ 4.5:1
   - `--kc-text-secondary` (#4a5568) on `--kc-surface-light` — must be ≥ 4.5:1
   - `--kc-text-inverse` (#ccd9d2) on `--kc-surface-dark` (#1a1f28) — must be ≥ 4.5:1
   - `--kc-teal` (#46696b) on `--kc-surface-light` — links, must be ≥ 4.5:1
   - Focus ring visibility on all backgrounds
3. Add missing semantic colours if needed (info, success, warning, danger are defined — verify usage)
4. Document the palette intent and source in the actual marks
5. Output: section in `docs/design/design-system.md`

### 4.3 Shared Component Library

Currently button styles are duplicated across 8+ components. Create shared components:

1. **Button component** (`src/components/ui/Button.astro`)
   - Variants: primary, outline, inverse, outline-inverse
   - Sizes: sm, md, lg
   - States: default, hover, active, focus, disabled, loading
   - Props: variant, size, href, type, disabled, loading, fullWidth

2. **Card component** (`src/components/ui/Card.astro`)
   - Variants: default, dark, warm, featured
   - Props: variant, href, image, title, description, badge

3. **Section wrapper** (`src/components/ui/Section.astro`)
   - Variants: default, dark, warm, narrow, wide
   - Props: variant, id, ariaLabel

4. **Grid component** (`src/components/ui/Grid.astro`)
   - Columns: 2, 3, 4
   - Props: columns, gap

5. **Screenshot frame** (`src/components/ui/ScreenshotFrame.astro`)
   - For phases 16-20
   - Props: src, alt, caption, viewport

6. Move button styles from per-component duplication to `global.css` or the Button component

### 4.4 Photo Treatment & Art Direction

1. Review all 53 images in `src/assets/images/`
2. Create art direction brief:
   - Intent: show real operating contexts, not generic "digital transformation"
   - Subject world: people doing recognisable work
   - Emotional tone: confident, operational, grounded
   - Lighting: natural or industrial, not studio-flash
   - Camera distance: medium to close-up for people, wide for environments
   - Treatment: slight warmth, muted saturation, no heavy filters
   - Crop ratios: 16:9 (hero), 4:3 (cards), 1:1 (avatars)
   - Text-safe zones: left or right third for overlay text
   - What to reject: law enforcement, legal, vague "excited" poses
3. Verify the 4 unsuitable images from photo-bank/ are not used
4. Document image loading strategy (Astro Image component, AVIF/WebP, srcset/sizes)
5. Output: `docs/design/art-direction.md`

### 4.5 Visual Direction Refinement

The organising idea is "Geometric System" — structured interlocking paths derived from the kraal/longhorn logo mark. Refine:

1. Document the one distinctive visual idea that makes the site recognisably Kraal Code
2. How it manifests: SVG background pattern in hero, subtle geometric dividers, consistent angular accents
3. How it does NOT manifest: repeated logo everywhere, heavy decorative geometry
4. Create 2-3 wireframe variations for: homepage hero, capability detail page, sector detail page
5. Evaluate against: brand, audience, multilingual growth, accessibility, image availability, performance
6. Commit one direction with rationale
7. Output: `docs/design/visual-direction.md`

### 4.6 Motion & Interaction Principles

1. Motion must explain relationships, reinforce connectivity, or provide feedback
2. No decorative parallax, constant floating objects, autoplay video, scroll hijacking
3. Honour `prefers-reduced-motion` (already in tokens.css)
4. Define transition timing for: page load, hover states, focus states, menu open/close, modal open/close
5. Output: section in `docs/design/design-system.md`

### 4.7 Responsive & Multilingual Constraints

1. Define breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl)
2. Test all existing components at each breakpoint
3. Define expansion rules for French (~20% longer than English) and Kiswahili (variable)
4. Define minimum touch target sizes (44×44px)
5. Output: section in `docs/design/design-system.md`

---

## Deliverables

| File | Purpose |
|------|---------|
| `docs/design/design-system.md` | Complete design system documentation |
| `docs/design/art-direction.md` | Photo treatment and crop system |
| `docs/design/visual-direction.md` | Organising idea and wireframes |
| `src/components/ui/Button.astro` | Shared button component |
| `src/components/ui/Card.astro` | Shared card component |
| `src/components/ui/Section.astro` | Shared section wrapper |
| `src/components/ui/Grid.astro` | Shared grid component |
| `src/components/ui/ScreenshotFrame.astro` | Screenshot frame for phases 16-20 |

---

## Resources Required

- Design system skills at `C:\wamp64\www\design-system-skills`
- Logo files in `public/icons/` for colour extraction
- All 53 images in `src/assets/images/` for review
- WCAG contrast checking tool

---

## Acceptance Criteria

- [ ] Font files exist and load correctly
- [ ] All colour combinations pass WCAG contrast
- [ ] Shared components exist and replace duplication
- [ ] Art direction brief is documented
- [ ] Visual direction is committed with rationale
- [ ] Motion principles are defined
- [ ] Responsive constraints are documented

---

## Gate to Phase 05

The design system is complete and documented. Shared components exist. The visual direction is recognisably Kraal Code and defensible against "generic SaaS" criticism.
