# Assumptions & Gaps Register

**Created:** 2026-08-09 (Phase 1)
**Last updated:** 2026-08-09

---

## Gap Register

### Blocking (must fix before launch)

| ID | Gap | Owner | Phase | Status |
|----|-----|-------|-------|--------|
| G-01 | Font files (woff2) missing from `public/fonts/` | Dev | 05 | **Resolved** — 6 woff2 files downloaded (Source Serif 4 + Source Sans 3, weights 400/600/700), @font-face added to tokens.css |
| G-02 | SVG logos missing — Header/Footer reference PNG files which exist and work | Dev | 05 | **Resolved** — Header uses kraalcode-light.png, Footer uses kraalcode-dark.png, both exist |
| G-03 | 8 capability detail pages linked but not built | Dev | 07 | **Resolved** — all 8 pages built: accounting, inventory, sales, procurement, manufacturing, hr-payroll, projects, reporting |
| G-04 | 8 sector detail pages linked but not built | Dev | 08 | **Resolved** — all 8 pages built: manufacturing, trading, nonprofits, consultancy, agriculture, retail, hospitality, education |
| G-05 | French subpages missing (only homepage exists) | Dev + FR writer | 10 | **Resolved** — all French pages built: 8 capabilities, 8 sectors, security, why, work-from-anywhere, company, contact, blog, 4 legal pages, disclosure |
| G-06 | Kiswahili subpages missing (only homepage exists) | Dev + SW writer | 10 | **Resolved** — all Kiswahili pages built: 8 capabilities, 8 sectors, security, why, work-from-anywhere, company, contact. Blog excluded (EN/FR only, SW blog links open EN) |
| G-07 | Contact form has no submission handler | Dev | 09 | **Resolved** — client-side validation, honeypot bot protection, loading/success/error states added |
| G-08 | No root redirect from `/` to `/en/` | Dev | 05 | **Resolved** — `src/pages/index.astro` exists with 302 redirect to `/en/` |
| G-09 | No custom 404 page | Dev | 05 | **Resolved** — `src/pages/404.astro` built with brand styling, links to homepage/capabilities/contact, noindex set |
| G-10 | OG default image missing | Dev | 05 | **Resolved** — SVG OG image created at `/static/og-default.svg`, BaseLayout updated |

### Important (should fix)

| ID | Gap | Owner | Phase | Status |
|----|-----|-------|-------|--------|
| G-11 | Favicons are 201KB each (should be <10KB) | Dev | 05 | **Resolved** — SVG favicon created at `/icons/favicon.svg` (512 bytes), added as primary in BaseLayout |
| G-12 | Resources page is placeholder (all "Coming soon") | Dev + Content | 09, 21 | Open |
| G-13 | No `@astrojs/sitemap` integration | Dev | 11 | **Resolved** — installed and configured with i18n locale support, sitemap-index.xml generated on build |
| G-14 | Button styles duplicated across 8+ components | Dev | 04 | Open |
| G-15 | Swahili bug: OutcomeSection uses `caption` instead of `description` | Dev | 06 | **Resolved** — key changed from `caption` to `description` on line 53 |
| G-16 | No `@font-face` declarations in CSS | Dev | 05 | **Resolved** — @font-face for Source Serif 4 + Source Sans 3 (weights 400/600/700) added to tokens.css |
| G-17 | No legal/policy pages (privacy, cookies, terms, accessibility) | Legal + Dev | 09 | **Resolved** — 4 draft legal pages built (privacy, cookies, terms, accessibility), all marked DRAFT pending legal review |
| G-18 | No responsible disclosure page | Security + Dev | 09 | **Resolved** — `/en/security/disclosure/` built with reporting process, safe harbour policy, scope definition |
| G-19 | Trust Centre has no detail sub-pages | Dev | 08 | Open |
| G-20 | No product screenshots (placeholder images only) | Dev | 16-20 | Open |

### Nice-to-have

| ID | Gap | Owner | Phase | Status |
|----|-----|-------|-------|--------|
| G-21 | No eslint installed (script references missing dep) | Dev | 05 | Open |
| G-22 | No automated tests | Dev | 05 | Open |
| G-23 | No CI/CD pipeline | Dev | 15 | Open |
| G-24 | No analytics or measurement | Dev + Marketing | 15 | Open |
| G-25 | No blog infrastructure | Dev | 21 | Open |
| G-26 | No RSS feed | Dev | 21 | Open |
| G-27 | Header `currentPath` prop not used for active-link highlighting | Dev | 06 | **Resolved** — isActive() function added, active class applied to current nav link, teal highlight style added |

---

## Assumption Register

| ID | Assumption | Basis | Risk if Wrong | Phase |
|----|-----------|-------|---------------|-------|
| A-01 | Astro 5 is the correct stack choice | Static-first performance, i18n, image optimisation | Low — high reversibility | 05 |
| A-02 | Source Serif 4 + Source Sans 3 are the right fonts | Distinctive, free, multilingual coverage, not AI-default | Low — can swap | 04 |
| A-03 | Vanilla CSS (no Tailwind) is maintainable | Small team, token-based system, scoped styles | Medium — may need framework later | 04 |
| A-04 | Inline trilingual content (no content collections) scales | Current page count is manageable | Medium — may need collections for blog | 10 |
| A-05 | Photo bank images have acceptable rights | Stock photos, no model releases confirmed | High — could require removal | 01 |
| A-06 | The "Geometric System" organising idea works | Derived from logo mark, tested in hero section | Low — can evolve | 04 |
| A-07 | Pricing tiers are final (5 tiers in UGX) | Verified against product-description.md | Medium — may change before launch | 06 |
| A-08 | Target launch markets are Uganda first, then East Africa | Per product strategy | Low — can expand | 02 |
| A-09 | Contact form will use a provider-neutral contract | No backend decision made yet | Low — form contract is portable | 09 |
| A-10 | Blog will use Astro content collections | Natural fit for markdown articles | Low — standard pattern | 21 |

---

## Review Schedule

- Gaps reviewed at start of each phase
- Assumptions validated when evidence becomes available
- Blocking gaps resolved before proceeding past their assigned phase
