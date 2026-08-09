# Phase 20 — Screenshots: Admin, Strategy & Integrations

**Directory:** `docs/plans/kraal-website/phase-20-screenshots-admin-strategy-integrations/`
**Depends on:** Phase 19
**Gate:** 10 screenshots, no real data, all placeholder slots filled, manifest complete

---

## Objective

Capture the platform administration, strategy/governance, and agent portal screens. Complete all remaining screenshot slots across the marketing website.

---

## Screenshots to Capture

| # | ERP Screen | File | What to Show | Placement |
|---|-----------|------|-------------|-----------|
| 1 | Super Admin Dashboard | `superadmin/index.php` | Platform overview — tenant count, revenue, health | /en/product/ (multi-tenancy proof) |
| 2 | Tenant Management | `superadmin/tenants.php` | Tenant list with status, plan, billing | /en/product/, /en/security/ |
| 3 | Module Management | `superadmin/modules.php` | Enable/disable modules per tenant — modular architecture proof | /en/product/ |
| 4 | Permission Matrix | `permissions-matrix.php` | RBAC grid — roles × permissions | /en/security/ |
| 5 | KPI Dashboard | `kpi-dashboard.php` | Strategic KPI tracking with targets and actuals | /en/capabilities/reporting/ |
| 6 | Strategic Plan | `strategic-plan.php` | BSC objectives hierarchy across 4 perspectives | /en/capabilities/reporting/ |
| 7 | Compliance Dashboard | `compliance-dashboard.php` | Governance monitoring with status indicators | /en/security/ |
| 8 | Risk Register | `risk-register.php` | Risk management with severity and mitigation | /en/capabilities/reporting/ |
| 9 | Workplan Dashboard | `workplan-dashboard.php` | Departmental workplans with progress tracking | /en/capabilities/reporting/ |
| 10 | Sales Agent Portal | `sales-agents/index.php` | Agent self-service dashboard — simplified, mobile-optimised | /en/work-from-anywhere/ |

---

## Integration Points

| Page | Screenshots | Purpose |
|------|-------------|---------|
| /en/product/ | Super Admin, Tenant Management, Module Management | Multi-tenancy and modularity proof |
| /en/security/ | Permission Matrix, Compliance Dashboard, Tenant Management | Security and RBAC proof |
| /en/capabilities/reporting/ | KPI Dashboard, Strategic Plan, Risk Register, Workplan Dashboard | Reporting depth |
| /en/work-from-anywhere/ | Sales Agent Portal | Mobile/remote proof |
| /en/why/ | Super Admin (competitive proof) | Why Kraal Code |

---

## Final Pass

After all screenshots from phases 16-20 are integrated:

1. **Verify all placeholder slots are filled:**
   - Every capability page has its screenshots
   - Every sector page has relevant screenshots
   - Product page has hero screenshots
   - Security page has trust-building screenshots
   - Work-from-anywhere page has mobile screenshots

2. **Visual regression test:**
   - Screenshots don't break page layouts
   - Responsive derivatives load correctly
   - ScreenshotFrame component renders consistently
   - Alt text is meaningful

3. **Final manifest:**
   - Complete inventory of all screenshots
   - Page placement map
   - Component IDs
   - Derivative file list
   - Capture date and ERP version

---

## Data Requirements

- Demo tenants with fictional company names
- Demo roles and permissions matrix
- Demo KPIs with targets and actuals
- Demo strategic objectives across BSC perspectives
- Demo risks with severity ratings
- Demo workplans with progress percentages

---

## Deliverables

| Count | Output |
|-------|--------|
| 10 screenshots × 3 viewports | 30 source images |
| 60 optimised derivatives | AVIF + WebP |
| Updated pages | Product, Security, Reporting, Work-from-anywhere, Why |
| Final manifest | Complete screenshot inventory |

---

## Acceptance Criteria

- [ ] 10 screenshots with synthetic data
- [ ] Super admin shows multi-tenancy capability
- [ ] Permission matrix shows RBAC depth
- [ ] All screenshot placeholder slots across the site are filled
- [ ] No real data in any screenshot
- [ ] Visual regression passes
- [ ] Final manifest is complete

---

## Gate to Completion (Phase 20)

All 51 screenshots (phases 16-20) are captured, processed, and integrated. The marketing website now shows real product screens instead of placeholders. The site is ready for launch (pending blog content in Phase 21).
