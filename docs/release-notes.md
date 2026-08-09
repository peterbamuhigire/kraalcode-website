# Release notes

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
