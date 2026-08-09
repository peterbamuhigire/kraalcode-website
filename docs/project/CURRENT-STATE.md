# Current project state

**Audience:** Project owner, delivery team, and maintainers
**Status:** Current implementation record
**Last reviewed:** 2026-08-09
**Repository:** [peterbamuhigire/kraalcode-website](https://github.com/peterbamuhigire/kraalcode-website)

## Current implementation

| Area | Current truth |
| --- | --- |
| Framework | Astro 5.12+ with TypeScript |
| Rendering | Static build, served from `dist/` |
| Locales | English, French, Kiswahili |
| Source route entrypoints | 86 `index.astro` files |
| Generated build | 114 static pages in the latest verified build |
| Styling | Vanilla CSS with shared `--kc-*` tokens and Astro component styles |
| Fonts | Self-hosted Source Serif 4 and Source Sans 3, Latin-ext subset |
| Sitemap | `@astrojs/sitemap` configured with locale support |
| Generated output | Tracked in `dist/` for deployment handoff |
| Current branch | `main` |

## Completed site areas

- Homepage in all three locales.
- Product overview and platform narrative.
- Capabilities index and eight capability detail pages per locale.
- Sectors index and eight sector detail pages per locale.
- Security, why Kraal Code, work-from-anywhere, contact, legal, and disclosure routes where mapped.
- Locale-aware navigation, canonical metadata, hreflang links, sitemap output, organisation JSON-LD, and branded 404 page.
- Shared image-backed detail heroes with lighter glass text-safe panels.
- Homepage capability cards with capability-specific imagery and medium opacity overlays.

## Verified checks

- `npm run typecheck` passes with zero errors; Astro reports three non-blocking repository hints related to empty content folders and inline JSON-LD scripts.
- `npm run build` passes and generates 114 pages.
- Visual checks cover the 48 capability/sector detail routes at 390px and representative desktop/mobile homepages in all three locales.
- Checked routes return 200, have one `h1`, expose expected hero/card images, and do not horizontally overflow at the tested mobile width.

## Open gaps

| ID | Gap | Impact | Next action |
| --- | --- | --- | --- |
| G-01 | ESLint is referenced but not installed | `npm run lint` cannot run | Add and pin the intended ESLint/Astro configuration, then run it in CI |
| G-02 | No committed CI/CD workflow | Build and visual checks are manual | Add a workflow for install, typecheck, build, and route smoke checks |
| G-03 | No committed automated browser suite | Visual regressions depend on manual/local Playwright checks | Commit a stable browser smoke harness and evidence policy |
| G-04 | Image rights and model-release evidence are open | Production publication risk | Attach licence/release evidence or replace affected imagery |
| G-05 | Product screenshot blocks remain placeholders | Reduced product proof on detail pages | Supply approved screenshots and update the asset register |
| G-06 | Legal pages require legal review | Pages must not be treated as final policy | Complete legal review and record approval |
| G-07 | Analytics and measurement are not wired | Conversion and performance learning is limited | Approve a privacy-aware measurement plan and implement it separately |

## Source-of-truth order

When documents disagree, use this order:

1. Current source files and successful build output.
2. This document.
3. [`README.md`](../../README.md), architecture, operations, and maintenance docs.
4. The asset register, decision log, and style brief.
5. Historical phase plans, progress logs, and original build prompts.

Historical documents should retain their original context. Update this record when a current gap is closed or a release decision changes the implementation truth.
