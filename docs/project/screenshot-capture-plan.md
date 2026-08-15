# Product screenshot capture plan

**Audience:** Product owner, ERP capture operator, designer, and website maintainer  
**Status:** Ready for capture; blocked on approved access and synthetic data  
**Last reviewed:** 2026-08-15

## Purpose

Replace the current product-proof placeholders with approved captures from the Kraal Code ERP. Capture only synthetic data and keep each screenshot tied to a page, module, viewport, and source screen.

## Capture inventory

The five screenshot phases define 51 captures:

| Phase | Area | Count | Primary website destinations |
| --- | --- | ---: | --- |
| 16 | Executive dashboards and finance | 10 | Product, reporting, accounting, security |
| 17 | Sales, POS, and CRM | 10 | Sales, retail, trading, work from anywhere |
| 18 | Inventory, procurement, manufacturing, farmer operations | 11 | Inventory, procurement, manufacturing, agriculture |
| 19 | HR, payroll, and people | 10 | HR and payroll |
| 20 | Admin, strategy, permissions, and integrations | 10 | Product, reporting, security, work from anywhere |

The phase plans in `docs/plans/kraal-website/phase-16-*` through `phase-20-*` are the authoritative screen-by-screen manifest. Do not mark a slot complete from a mockup alone; it needs an approved capture and manifest entry.

## Data and privacy rules

- Use synthetic organisations, people, suppliers, customers, products, transactions, and locations.
- Do not capture real names, phone numbers, emails, account numbers, tax identifiers, credentials, tokens, or production URLs.
- Use clearly fictional but plausible East African examples, with no implication of a real customer relationship.
- Check browser chrome, notifications, debug panels, and server addresses before export.
- Product owner signs off the screen content; design owner signs off crop and readability.

## Viewports and processing

Capture each selected screen at 1440px desktop, 768px tablet, and 375px mobile where the interface supports it. The preferred pipeline is:

```text
approved ERP state → capture → redact/check synthetic data → crop → optimise → derivatives → manifest → page integration
```

Keep a high-resolution source outside the public site if needed. Publish web-sized JPG/WebP/AVIF derivatives in the existing public image structure, with descriptive stable names and recorded dimensions.

## Integration contract

Each screenshot slot should have a stable ID, source screen, alt-text intent, destination route, and replacement note. Preserve the existing component boundary when one exists; do not add decorative dashboard chrome that is not present in the ERP. After integration, test the image at desktop and mobile widths and confirm it does not disclose real data.

## Gate

Phase 16 can start when the ERP environment, synthetic seed data, capture operator, and product approval owner are named. Phases 17–20 proceed sequentially so shared capture conventions and data vocabulary remain consistent.
