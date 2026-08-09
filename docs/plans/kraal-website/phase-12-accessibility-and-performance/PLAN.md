# Phase 12 — Accessibility & Performance

**Directory:** `docs/plans/kraal-website/phase-12-accessibility-and-performance/`
**Depends on:** Phase 11
**Gate:** No serious/critical a11y violations, keyboard works everywhere, Lighthouse targets met

---

## Objective

Achieve WCAG 2.2 AA compliance and meet Lighthouse performance targets calibrated for African connectivity (3G, mid-range mobile).

---

## Tasks

### 12.1 Accessibility Audit

**Semantic structure:**
- [ ] Every page has semantic landmarks (header, main, footer, nav)
- [ ] One H1 per page, logical heading hierarchy
- [ ] Skip link works on every page
- [ ] `lang` attribute correct per page

**Keyboard navigation:**
- [ ] All interactive elements reachable by Tab
- [ ] Focus visible on all elements (teal focus ring from tokens)
- [ ] Mobile menu operable by keyboard
- [ ] Language switcher operable by keyboard
- [ ] Forms operable by keyboard
- [ ] No keyboard traps

**Target sizes:**
- [ ] All buttons/links minimum 44×44px touch target
- [ ] Adequate spacing between interactive elements

**Content:**
- [ ] No hover-only content
- [ ] Labels (not placeholders) as form field names
- [ ] Error messages associated with fields
- [ ] Text zoom to 200% without horizontal scroll
- [ ] 320px reflow without loss of content
- [ ] `prefers-reduced-motion` honoured (already in tokens.css)

**Contrast:**
- [ ] Text contrast ≥ 4.5:1 (normal text)
- [ ] Large text contrast ≥ 3:1
- [ ] UI component contrast ≥ 3:1
- [ ] Focus indicator contrast ≥ 3:1

**Images:**
- [ ] Meaningful alt text on content images
- [ ] Empty alt on decorative images
- [ ] No text embedded in images (or repeated accessibly)

**Media:**
- [ ] Captions/transcripts for any future video/audio
- [ ] No inaccessible CAPTCHA-only path

### 12.2 Performance Optimisation

**LCP (Largest Contentful Paint):**
- [ ] Name LCP element per page family
- [ ] Never lazy-load LCP asset
- [ ] Preload critical fonts and hero images
- [ ] Target: LCP < 2.5s on 3G

**CLS (Cumulative Layout Shift):**
- [ ] Reserve dimensions for all images/media
- [ ] Font-display strategy prevents layout shift
- [ ] Target: CLS < 0.1

**Asset optimisation:**
- [ ] All images use Astro Image component (AVIF/WebP)
- [ ] Responsive srcset/sizes on all images
- [ ] Lazy-load below-the-fold media
- [ ] Fonts subset to latin-ext, self-hosted
- [ ] Total JS < 50KB gzipped (currently minimal — good)
- [ ] No unnecessary client-side hydration

**Network calibration:**
- [ ] Test on mid-range mobile profile
- [ ] Test on constrained network (3G, 1.6Mbps down)
- [ ] Pages useful before all enhancements load
- [ ] No background video in this phase

### 12.3 Lighthouse Targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| Performance | ≥ 90 | African connectivity calibration |
| Accessibility | ≥ 95 | WCAG 2.2 AA floor |
| Best Practices | ≥ 95 | Security and modern standards |
| SEO | ≥ 95 | Search discoverability |

Run Lighthouse on all page families:
- Homepage (EN, FR, SW)
- Product
- One capability detail
- One sector detail
- Security
- Contact
- Blog placeholder

### 12.4 Automated Testing

1. Run axe-core automated scan on all pages
2. Run Lighthouse CI (if configured)
3. Manual keyboard traversal of every page
4. Screen reader smoke test (NVDA or VoiceOver) on:
   - Homepage navigation
   - Capability detail page
   - Contact form
   - Language switcher

---

## Deliverables

| File | Purpose |
|------|---------|
| `reports/accessibility/` | axe-core reports per page |
| `reports/lighthouse/` | Lighthouse scores per page |
| Accessibility findings log | Issues found and fixed |

---

## Acceptance Criteria

- [ ] No serious or critical automated accessibility violations
- [ ] No known WCAG 2.2 AA failure in primary journeys
- [ ] Keyboard and screen-reader smoke evidence exists
- [ ] No horizontal overflow at required widths/locales
- [ ] No visible layout shift from unsized media
- [ ] All critical images optimised and responsive
- [ ] Font loading within documented budget
- [ ] Lighthouse Performance ≥ 90 on all page families
- [ ] Lighthouse Accessibility ≥ 95 on all page families

---

## Gate to Phase 13

Accessibility and performance targets are met. Evidence exists for all checks. No serious violations remain.
