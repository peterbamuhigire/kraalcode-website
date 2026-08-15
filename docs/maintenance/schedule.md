# Maintenance schedule

**Audience:** Maintainers, content owners, and project owner  
**Status:** Current operating schedule  
**Last reviewed:** 2026-08-15

The detailed procedures remain in [`site-maintenance.md`](site-maintenance.md). This schedule assigns the recurring review cadence required for handover.

## Recurring cadence

| Cadence | Checks | Owner |
| --- | --- | --- |
| Weekly | Homepages, primary CTA, locale switcher, 404, sitemap, robots, server/image/font errors | Maintainer |
| Monthly | `npm ci`, typecheck, build, route/page counts, links, metadata, asset register, open gaps | Engineering + content |
| Quarterly | Performance on constrained mobile network, accessibility, design direction, legal status, rights evidence | Engineering + design + legal |
| Bi-annually | Keyboard, zoom/reflow, reduced motion, screen-reader smoke review | Engineering + accessibility reviewer |
| On change | Changed locale equivalents, claims, images, redirects, generated `dist/` output | Change owner |

## Dependency and security review

Review dependency updates monthly and inspect security advisories before upgrading. Keep `package-lock.json` authoritative. Record material upgrades and rerun typecheck, build, and changed-route smoke tests.

## Content and claims review

Review pricing, module lists, integrations, security statements, and legal copy against their sources before publication. Claim expiry or review dates belong in the claim register when the register is introduced.

## Escalation

Block release for broken routes, exposed secrets, unsupported claims, inaccessible critical interactions, unreviewed legal text, unapproved imagery, or a failed build. Record the issue in `docs/project/CURRENT-STATE.md` and restore the last known-good release if it reaches production.
