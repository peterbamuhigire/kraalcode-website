# Documentation index

This directory contains the current handoff documentation and the historical project-planning record for the Kraal Code website.

## Start here

1. Read the root [`README.md`](../README.md) for project setup and contribution context.
2. Read [`project/CURRENT-STATE.md`](project/CURRENT-STATE.md) for the current implementation truth.
3. Read [`architecture/site-architecture.md`](architecture/site-architecture.md) before changing routes, layouts, images, or design tokens.
4. Read [`deployment/site-operations.md`](deployment/site-operations.md) before building or deploying a release.
5. Read [`maintenance/site-maintenance.md`](maintenance/site-maintenance.md) before changing content, imagery, locale coverage, or release cadence.
6. Read [`project/HANDOVER.md`](project/HANDOVER.md) for the current handoff status and launch conditions.

## Current documentation

| Document | Audience | Purpose |
| --- | --- | --- |
| [`style-brief.md`](style-brief.md) | Design and engineering | Typography, colour, imagery, responsive treatment, and motion decisions |
| [`design/design-system.md`](design/design-system.md) | Designers and developers | Implemented typography, palette, spacing, component, and motion rules |
| [`architecture/site-architecture.md`](architecture/site-architecture.md) | Developers | Route model, shared shell, component boundaries, asset paths, and rendering decisions |
| [`deployment/site-operations.md`](deployment/site-operations.md) | Maintainers and hosting operators | Build, release, smoke test, rollback, and troubleshooting procedures |
| [`deployment/runbook.md`](deployment/runbook.md) | Release operators | Phase 15 release checklist and approval conditions |
| [`maintenance/site-maintenance.md`](maintenance/site-maintenance.md) | Maintainers and content owners | Review cadence, ownership, content changes, asset review, and quality checks |
| [`maintenance/schedule.md`](maintenance/schedule.md) | Maintainers and project owner | Recurring review cadence and escalation rules |
| [`governance/content-governance.md`](governance/content-governance.md) | Content, product, translation, and legal owners | Claim, language, asset, and approval workflow |
| [`analytics/event-dictionary.md`](analytics/event-dictionary.md) | Future measurement owner | Privacy-aware event design; not currently wired |
| [`project/CURRENT-STATE.md`](project/CURRENT-STATE.md) | Project owner and delivery team | Current facts, completed work, open gaps, and source-of-truth rules |
| [`project/HANDOVER.md`](project/HANDOVER.md) | Project owner and release team | Handover summary, evidence, ownership, and launch conditions |
| [`project/approvals-log.md`](project/approvals-log.md) | Project owner and release reviewers | Written record of approvals and their scope |
| [`project/screenshot-capture-plan.md`](project/screenshot-capture-plan.md) | Product, design, and capture operator | Synthetic-data screenshot plan for phases 16–20 |
| [`project/07-asset-register.md`](project/07-asset-register.md) | Design, content, and legal | Image inventory, placements, rights status, and alt-text intent |

## Historical and planning documentation

- [`plans/kraal-website/`](plans/kraal-website/) contains the phased planning record.
- [`project/00-project-truth.md`](project/00-project-truth.md) is the original discovery snapshot; use `project/CURRENT-STATE.md` for current status.
- [`project/PROGRESS.md`](project/PROGRESS.md) is a historical progress log; it is not a substitute for current build evidence.
- [`KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md`](KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md) is the original build brief and remains useful for product context, not live implementation truth.

When documents disagree, prefer the order: repository source and a successful build, `project/CURRENT-STATE.md`, current operations/architecture docs, then historical plans and logs.
