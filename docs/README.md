# Documentation index

This directory contains the current handoff documentation and the historical project-planning record for the Kraal Code website.

## Start here

1. Read the root [`README.md`](../README.md) for project setup and contribution context.
2. Read [`project/CURRENT-STATE.md`](project/CURRENT-STATE.md) for the current implementation truth.
3. Read [`architecture/site-architecture.md`](architecture/site-architecture.md) before changing routes, layouts, images, or design tokens.
4. Read [`deployment/site-operations.md`](deployment/site-operations.md) before building or deploying a release.
5. Read [`maintenance/site-maintenance.md`](maintenance/site-maintenance.md) before changing content, imagery, locale coverage, or release cadence.

## Current documentation

| Document | Audience | Purpose |
| --- | --- | --- |
| [`style-brief.md`](style-brief.md) | Design and engineering | Typography, colour, imagery, responsive treatment, and motion decisions |
| [`architecture/site-architecture.md`](architecture/site-architecture.md) | Developers | Route model, shared shell, component boundaries, asset paths, and rendering decisions |
| [`deployment/site-operations.md`](deployment/site-operations.md) | Maintainers and hosting operators | Build, release, smoke test, rollback, and troubleshooting procedures |
| [`maintenance/site-maintenance.md`](maintenance/site-maintenance.md) | Maintainers and content owners | Review cadence, ownership, content changes, asset review, and quality checks |
| [`project/CURRENT-STATE.md`](project/CURRENT-STATE.md) | Project owner and delivery team | Current facts, completed work, open gaps, and source-of-truth rules |
| [`project/07-asset-register.md`](project/07-asset-register.md) | Design, content, and legal | Image inventory, placements, rights status, and alt-text intent |

## Historical and planning documentation

- [`plans/kraal-website/`](plans/kraal-website/) contains the phased planning record.
- [`project/00-project-truth.md`](project/00-project-truth.md) is the original discovery snapshot; use `project/CURRENT-STATE.md` for current status.
- [`project/PROGRESS.md`](project/PROGRESS.md) is a historical progress log; it is not a substitute for current build evidence.
- [`KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md`](KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md) is the original build brief and remains useful for product context, not live implementation truth.

When documents disagree, prefer the order: repository source and a successful build, `project/CURRENT-STATE.md`, current operations/architecture docs, then historical plans and logs.
