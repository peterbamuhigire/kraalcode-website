# Kraal Code Website

> Kraal Code — a multilingual Astro website for a connected ERP platform built for modern African organisations.

[![Website](https://img.shields.io/badge/site-kraalcode.com-46696b)](https://kraalcode.com)
[![Build](https://img.shields.io/badge/build-Astro%205-ff5d01)](https://astro.build)
[![Locales](https://img.shields.io/badge/locales-EN%20%7C%20FR%20%7C%20SW-202833)](https://kraalcode.com/en/)

Kraal Code is a static, multilingual marketing website for Chwezi Core Systems' connected ERP platform. The site explains the platform, its capabilities, sector configurations, security posture, pricing, implementation approach, and contact path for organisations operating in Africa.

## Current delivery state

- **Production URL:** [https://kraalcode.com](https://kraalcode.com)
- **Default branch:** `main`
- **Framework:** Astro 5.12+
- **Generated output:** 114 static pages from 86 source route entrypoints and redirect routes
- **Locales:** English (`/en/`), French (`/fr/`), and Kiswahili (`/sw/`)
- **Primary CTA:** Request a guided demonstration
- **Current release:** Homepage capability imagery and detail-page hero treatment are included in the latest pushed build

The site has no runtime application backend. Forms, analytics, and any production submission handling must be treated as separate integrations and must not be inferred from the static pages.

## What is in the site

- Multilingual homepage, product overview, capabilities, sectors, security, why Kraal Code, work-from-anywhere, contact, legal, and disclosure pages.
- Eight capability detail routes: accounting, inventory, sales, procurement, manufacturing, HR and payroll, projects, and reporting.
- Eight sector detail routes: manufacturing, trading and distribution, non-profits, consultancy, agriculture, retail, hospitality, and education.
- Shared header, footer, layout, locale switching, canonical URLs, hreflang links, sitemap generation, structured organisation data, and branded 404 handling.
- Self-hosted Source Serif 4 and Source Sans 3 font files with Latin-ext coverage for English, French, and Kiswahili.
- Capability and sector imagery sourced from the repository asset set and user-supplied Downloads assets, with placement recorded in the asset register.

## Technology

| Area | Choice |
| --- | --- |
| Site generator | Astro 5, static output |
| Language | TypeScript with Astro checks |
| Styling | Vanilla CSS, component-scoped styles, shared `--kc-*` tokens |
| Client JavaScript | Minimal progressive enhancement for navigation |
| Images | Static JPG assets with explicit crop and placement rules |
| Fonts | Self-hosted Source Serif 4 and Source Sans 3 |
| SEO | `@astrojs/sitemap`, canonical URLs, hreflang, JSON-LD |
| Deployment unit | `dist/` |

## Local development

### Prerequisites

- Node.js 18.17 or newer
- npm
- Git

### Install and run

```bash
npm install
npm run dev
```

The development server normally runs at `http://localhost:4321`. Use `Ctrl+C` to stop it.

### Preview the production build

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

### Available scripts

| Command | Purpose | Status |
| --- | --- | --- |
| `npm run dev` | Start Astro development server | Supported |
| `npm run build` | Generate the static site in `dist/` | Supported |
| `npm run preview` | Serve the generated `dist/` locally | Supported |
| `npm run typecheck` | Run `astro check` across the project | Supported; repository hints remain |
| `npm run lint` | Run ESLint against `src/` | Not currently executable because ESLint is not installed in the project dependencies |

The repository currently treats a successful `npm run typecheck` and `npm run build` as the minimum local validation gate. Do not describe lint as passing until the missing ESLint dependency is resolved.

## Project structure

```text
src/
├── components/
│   ├── global/                 Shared Header and Footer
│   └── sections/              Homepage and reusable section components
├── layouts/
│   └── BaseLayout.astro       Metadata, locale links, shell, and shared styles
├── pages/
│   ├── en/                     English routes
│   ├── fr/                     French routes
│   ├── sw/                     Kiswahili routes
│   ├── index.astro             Root redirect to /en/
│   └── [...redirect].astro     Compatibility redirects
├── styles/
│   ├── foundations/            Reset and global layout rules
│   └── tokens/                 Fonts and `--kc-*` design tokens
└── utils/
    ├── localizedRoutes.ts      Route keys, locale paths, and hreflang mapping
    └── detailHeroes.ts         Shared capability and sector hero image mapping

public/
├── fonts/                      Self-hosted font files
├── icons/                      Logos and favicons
└── src/assets/images/          Static site imagery served under /src/assets/...

dist/                           Generated static output; tracked for deployment handoff
docs/                           Architecture, operations, maintenance, and project truth
photo-bank/                     Staged unused imagery; do not place directly in production
tests/                          Repository test fixtures and quality evidence
```

## Route and locale conventions

English is the canonical content language for route naming. French and Kiswahili use localized slugs where authored. All route equivalence is defined in [`src/utils/localizedRoutes.ts`](src/utils/localizedRoutes.ts); update that map whenever a localized route is added, renamed, or redirected.

Examples:

| Content | English | French | Kiswahili |
| --- | --- | --- | --- |
| Capabilities index | `/en/capabilities/` | `/fr/capacites/` | `/sw/uwezo/` |
| Procurement capability | `/en/capabilities/procurement/` | `/fr/capacites/achats/` | `/sw/uwezo/ununuzi/` |
| Manufacturing sector | `/en/sectors/manufacturing/` | `/fr/secteurs/industrie/` | `/sw/sekta/viwanda/` |
| Contact | `/en/contact/` | `/fr/contact/` | `/sw/mawasiliano/` |

When adding a page, update the source route, localized alternates, navigation behavior if relevant, sitemap eligibility, and the appropriate documentation record.

## Visual system

- **Display type:** Source Serif 4 for high-trust editorial headlines.
- **Body/UI type:** Source Sans 3 for operational copy and controls.
- **Brand anchors:** charcoal, teal, warm ivory, champagne, and warm off-white surfaces.
- **Distinctive idea:** a geometric system derived from the Kraal Code mark.
- **Detail heroes:** each capability and sector page receives a mapped image, restrained image grade, and a lighter glass text-safe panel.
- **Capability cards:** homepage cards use capability-specific photography with a medium dark overlay so the image remains visible while light copy remains readable.

The rationale and treatment values are documented in [`docs/style-brief.md`](docs/style-brief.md).

## Images and asset handling

Use the photo-manager workflow before placing new imagery:

1. Inspect the decoded image, not only its filename.
2. Assign a stable descriptive name and intended placement.
3. Record the asset in [`docs/project/07-asset-register.md`](docs/project/07-asset-register.md).
4. Record rights and consent as `unknown` until evidence exists.
5. Copy the approved asset into the appropriate `public/src/assets/images/` folder.
6. Run a production build and verify the asset exists in `dist/`.

The repository currently contains user-supplied and stock imagery whose rights evidence is not yet attached. Treat the asset register as a release dependency, not as proof of licence.

## Quality checks

Before merging a site change:

1. Run `npm run typecheck`.
2. Run `npm run build`.
3. Preview representative routes at desktop and mobile widths.
4. Check one route from each locale and each changed template family.
5. Check one h1 per page, no horizontal overflow, readable text over imagery, working locale links, and no broken local image paths.
6. Review the generated `dist/` diff when the build output is tracked.

The latest visual work was checked across all 48 capability and sector detail routes at 390px and across the three homepages at desktop and mobile widths.

## Deployment summary

The deployable unit is `dist/`. Build it on the deployment host or use the committed output when the hosting workflow explicitly serves the repository's generated directory.

```bash
git pull origin main
npm ci
npm run build
```

Point the web server document root at `dist/` and configure directory index handling for trailing-slash routes. See [`docs/deployment/site-operations.md`](docs/deployment/site-operations.md) for the full release, smoke-test, and rollback procedure.

## Documentation map

- [`docs/design/design-system.md`](docs/design/design-system.md) — implemented typography, palette, spacing, and component rules
- [`docs/governance/content-governance.md`](docs/governance/content-governance.md) — claim, language, asset, and approval workflow
- [`docs/deployment/runbook.md`](docs/deployment/runbook.md) — concise Phase 15 release checklist
- [`docs/maintenance/schedule.md`](docs/maintenance/schedule.md) — recurring review schedule and escalation rules
- [`docs/analytics/event-dictionary.md`](docs/analytics/event-dictionary.md) — future privacy-aware measurement design
- [`docs/project/HANDOVER.md`](docs/project/HANDOVER.md) — handover summary, evidence, owners, and launch conditions
- [`docs/project/approvals-log.md`](docs/project/approvals-log.md) — written record of approvals and scope
- [`docs/project/screenshot-capture-plan.md`](docs/project/screenshot-capture-plan.md) — synthetic-data capture plan for phases 16–20

- [`docs/README.md`](docs/README.md) — documentation index and source-of-truth order
- [`docs/architecture/site-architecture.md`](docs/architecture/site-architecture.md) — route, layout, style, and asset architecture
- [`docs/deployment/site-operations.md`](docs/deployment/site-operations.md) — build, deploy, smoke test, and rollback runbook
- [`docs/maintenance/site-maintenance.md`](docs/maintenance/site-maintenance.md) — maintenance cadence and ownership
- [`docs/project/CURRENT-STATE.md`](docs/project/CURRENT-STATE.md) — current implementation status and known gaps
- [`docs/style-brief.md`](docs/style-brief.md) — typography, colour, imagery, and motion decisions
- [`docs/project/07-asset-register.md`](docs/project/07-asset-register.md) — asset placement and rights register
- [`docs/project/04-decision-log.md`](docs/project/04-decision-log.md) — architectural and product decisions
- [`docs/plans/kraal-website/`](docs/plans/kraal-website/) — phase plans and historical delivery context

## Contribution rules

- Make changes on a feature branch when working with more than one contributor.
- Preserve existing user changes and inspect `git status` before editing.
- Keep route and locale changes synchronized.
- Prefer shared components and mappings over duplicating localized markup.
- Do not invent product claims, security certifications, client proof, prices, or licences.
- Run the local validation commands before committing.
- Include documentation updates with changes that affect routes, deployment, assets, design rules, or operator behavior.

## Known gaps

- ESLint is referenced by `package.json` but is not currently installed.
- The content collection folders are empty, so Astro reports a non-blocking content glob hint.
- Product screenshot blocks remain placeholders until approved product captures are supplied.
- Legal pages are drafts and require legal review before being represented as formal policy.
- Image rights and model-release evidence remain open in the asset register.
- Analytics, CI/CD, and automated browser tests are not yet part of this repository's committed release pipeline.

## Ownership

The website is maintained for Chwezi Core Systems. Product, legal, content, imagery, and deployment decisions require the project owner’s approval before release.
