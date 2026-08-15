# Release notes

## 2026-08-15 — Phase 21 blog publication

### Added

- Five researched English articles dated June–August 2026, with French and Kiswahili authored editions.
- Blog content collection, featured index, article pages, category pages, pagination, related articles, source sidebars, Article JSON-LD, localized hreflang, and RSS at `/blog/rss.xml`.
- Research evidence records under `docs/research/blog-articles/` and internal links from each English article to relevant capability, sector, security, or contact pages.
- Existing image library reused for all 15 article pages; no new photo download is required for this phase.

### Validation

- `npm run typecheck` passed with zero errors.
- `npm run build` passed and generated 135 pages.
- Banned-term scan found no configured anti-slop terms in blog content or research notes.
- `npm run lint` remains unavailable because ESLint is not installed in the repository.
- French and Kiswahili native review, plus image rights evidence, remain explicit release caveats.

## 2026-08-15 — Phase 15 handover documentation

### Added

- Design-system, content-governance, screenshot-capture, deployment, analytics, maintenance, and handover documents required by the website execution plan.
- Explicit launch conditions for open legal, rights, screenshot, CI, analytics, and linting work.
- Legal approval record for the English Privacy Notice and its semantic list styling fix.

### Validation

- `npm run typecheck` passed with zero errors.
- `npm run build` passed and generated 114 pages.
- Handover links and operational documents point to current repository paths and known limitations.

## 2026-08-09 — Website rebuild and documentation baseline

### Added

- Shared photo-backed hero treatment for capability and sector detail pages across English, French, and Kiswahili.
- Procurement, inventory, manufacturing, retail, hospitality, trading, and education hero imagery from the approved asset set.
- Homepage capability cards with capability-specific backgrounds and medium opacity text-safe overlays.
- Shared localized hero metadata and route-based focal-point mapping.
- Root README, architecture guide, deployment runbook, maintenance guide, current-state record, documentation index, and style brief.

### Changed

- Rebuilt the tracked static `dist/` output for the current 114-page site.
- Corrected existing locale-switcher type errors and a malformed Kiswahili heading tag.
- Updated the asset register with current detail hero placements and rights status.

### Validation

- `npm run typecheck` passed with zero errors.
- `npm run build` passed and generated 114 pages.
- Capability and sector detail routes were checked at mobile width for status, heading count, hero imagery, and overflow.
- Homepage capability cards were checked in all three locales at desktop and mobile widths.

### Known limitations

- ESLint is not installed even though `npm run lint` is declared.
- CI/CD, analytics, and committed automated browser tests remain open work.
- Image rights and model-release evidence remain open in the asset register.
