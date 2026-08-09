# Phase 05 — Technical Foundation

**Directory:** `docs/plans/kraal-website/phase-05-technical-foundation/`
**Depends on:** Phase 04
**Gate:** Build/lint/typecheck pass, no hallucinated packages, locale routing tested, no secrets committed

---

## Objective

Solidify the technical foundation so that page implementation in phases 06-09 can proceed without infrastructure interruptions. Fix missing assets, install missing integrations, establish testing, and create essential system pages.

---

## Tasks

### 5.1 Stack ADR

Write Architecture Decision Record for the website stack:

- **Decision:** Astro 5 (static-first) with vanilla CSS custom properties
- **Context:** Marketing site for SaaS ERP, trilingual, no app backend needed
- **Options considered:** Next.js, Astro, Hugo, 11ty, vanilla HTML
- **Rationale:** Static-first performance, built-in i18n, content collections, image optimisation, minimal JS, familiar to the team
- **Trade-offs:** No React/Svelte islands (acceptable for marketing site), no CSS framework (more manual work but full control)
- **Reversibility:** High — Astro pages are portable

Output: `docs/decisions/ADR-001-stack-choice.md`

### 5.2 Missing Asset Resolution

1. **SVG logos:** Create or obtain SVG versions of KraalCode light and dark logos
   - `public/icons/kraalcode-logo.svg` (referenced by Header.astro)
   - `public/icons/kraalcode-logo-light.svg` (referenced by Footer.astro)
   - If SVGs unavailable, update Header/Footer to use existing PNG files

2. **Font files:** Obtain and place woff2 files
   - `public/fonts/source-serif-4-latin-ext.woff2`
   - `public/fonts/source-sans-3-latin-ext.woff2`
   - Download from Google Fonts, subset to latin-ext, self-host
   - Add proper `@font-face` declarations (currently only `<link rel="preload">`)

3. **Favicons:** Generate favicon set
   - `public/icons/favicon-32x32.png`
   - `public/icons/favicon-16x16.png`
   - `public/icons/apple-touch-icon.png`
   - Source from KraalCode logo mark

4. **OG default image:** Create default social sharing image
   - `public/static/og-default.jpg` (1200×630px)
   - Brand-appropriate with Kraal Code name and tagline

### 5.3 Integration Installation

1. Install `@astrojs/sitemap` for automatic sitemap generation
2. Verify no other integrations needed (no Tailwind, no React — confirmed)
3. Configure sitemap in `astro.config.mjs` with locale-aware output

### 5.4 Root Redirect & 404 Page

1. Create `src/pages/index.astro` — redirect to `/en/` (or language picker)
2. Create `src/pages/404.astro` — custom 404 page with:
   - Brand-appropriate design
   - Clear message that page wasn't found
   - Links to homepage, capabilities, contact
   - Language switcher
   - Proper 404 HTTP status

### 5.5 TypeScript & Linting

1. Verify `tsconfig.json` extends `astro/tsconfigs/strict` (already done)
2. Install eslint if not present (referenced in package.json scripts but not in deps)
3. Configure eslint for Astro + TypeScript
4. Add prettier configuration
5. Verify `npm run typecheck` passes

### 5.6 Testing Scaffold

1. Install vitest for unit testing
2. Create test configuration
3. Write initial tests:
   - Route existence test (all defined routes return 200)
   - Locale routing test (EN/FR/SW prefixes work)
   - Content test (no lorem ipsum, no TODO in public pages)
   - Link test (no broken internal links)
4. Output: `tests/` directory

### 5.7 Build Verification

1. Run `npm run build` — verify clean build with no errors
2. Run `npm run typecheck` — verify no TypeScript errors
3. Verify build output in `dist/` contains all expected routes
4. Verify no source maps in production build
5. Verify no secrets or environment-specific URLs in build output

### 5.8 Environment Configuration

1. Create `.env.example` with required public variables
2. Document which variables are needed for: site URL, analytics, form endpoint
3. Verify no secrets are committed to repository

### 5.9 CI Configuration (Optional)

1. Create `.github/workflows/build.yml` for:
   - `npm run typecheck`
   - `npm run build`
   - Basic link checking
2. This is optional for phase 05 — can be deferred to phase 15

---

## Deliverables

| File | Purpose |
|------|---------|
| `docs/decisions/ADR-001-stack-choice.md` | Architecture decision record |
| `public/icons/kraalcode-logo.svg` | Light logo SVG (or PNG fallback) |
| `public/icons/kraalcode-logo-light.svg` | Dark logo SVG (or PNG fallback) |
| `public/fonts/source-serif-4-latin-ext.woff2` | Display font |
| `public/fonts/source-sans-3-latin-ext.woff2` | Body font |
| `public/icons/favicon-*.png` | Favicon set |
| `public/static/og-default.jpg` | Default OG image |
| `src/pages/index.astro` | Root redirect |
| `src/pages/404.astro` | Custom 404 page |
| `tests/` | Test scaffold |
| `.env.example` | Environment template |

---

## Resources Required

- Font files from Google Fonts (Source Serif 4, Source Sans 3)
- Logo source files (AI/EPS/SVG or high-res PNG)
- npm packages: @astrojs/sitemap, vitest, eslint

---

## Acceptance Criteria

- [ ] `npm run build` completes without errors
- [ ] `npm run typecheck` passes
- [ ] All font files load correctly in browser
- [ ] Logos display in header and footer
- [ ] Favicons work
- [ ] Root redirect sends `/` to `/en/`
- [ ] 404 page renders for unknown routes
- [ ] No secrets in repository
- [ ] Sitemap generates correctly

---

## Gate to Phase 06

The technical foundation is solid. Build passes cleanly. All assets load. System pages (root redirect, 404) exist. Page implementation can begin without infrastructure blockers.
