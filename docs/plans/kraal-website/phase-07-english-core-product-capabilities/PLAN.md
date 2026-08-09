# Phase 07 — English Core: Product & Capabilities

**Directory:** `docs/plans/kraal-website/phase-07-english-core-product-capabilities/`
**Depends on:** Phase 06
**Gate:** All 8 capability detail pages built, no broken links, each references verified product features from SRS docs

---

## Objective

Build the 8 capability detail pages that currently link to dead URLs. Each page must be backed by its SRS reference document and include screenshot placeholder slots for phases 16-20.

---

## Tasks

### 7.1 Product Page Refinement

`/en/product/` exists with 19 modules listed. Refinements:
1. Verify module list matches `PROJECT_BRIEF.md` and `docs/product-description.md`
2. Add screenshot placeholder for executive dashboard (hero image for the page)
3. Add "How modules connect" section showing data flow between modules
4. Add CTA to capabilities index

### 7.2 Capability Detail Pages (8 pages)

Each page follows this structure:
1. Hero section with capability name, one-line description, CTA
2. "Who this is for" — audience and pain points
3. "What you can do" — verified workflows from SRS docs
4. "How it connects" — related modules and data flow
5. "Controls and permissions" — RBAC, approvals, audit
6. "Mobile and remote" — field/mobile capabilities
7. "Security notes" — relevant security controls
8. Screenshot placeholder slots (for phases 16-20)
9. CTA: "See this in action" → contact page

**Page 1: /en/capabilities/accounting/**
- Source: `docs/references/KraalCode_SRS_Accounting.docx`
- Key features: GL, AP/AR, bank reconciliation, multi-currency (UGX/KES/TZS/RWF), budgets, financial statements (BS, P&L, Cash Flow), tax configuration, period closing, audit trail
- Screenshots to place later: Chart of Accounts, P&L, Balance Sheet, Trial Balance, Budget Performance, Period Closing
- Connected modules: Inventory (stock valuation GL), Sales (revenue posting), Procurement (AP posting), HR (payroll posting)

**Page 2: /en/capabilities/inventory/**
- Source: `docs/references/KraalCode_SRS_Inventory.docx`, `KraalCode_SRS_AdvancedInventory.docx`
- Key features: Item catalogue, UOM conversion, FIFO/weighted average valuation, GRN, stock ledger, batch/serial tracking, multi-location warehousing, FEFO, reorder levels, stock transfers
- Screenshots: Store Dashboard, Stock Summary, Stock Valuation, Batch Expiry
- Connected modules: Accounting (GL posting), Sales (stock deduction), Procurement (GRN), Manufacturing (raw material consumption)

**Page 3: /en/capabilities/sales/**
- Source: `docs/references/KraalCode_SRS_Sales.docx`, `KraalCode_SRS_SalesCRM.docx`, `KraalCode_SRS_SalesAgents.docx`
- Key features: Quotations, orders, invoices, delivery notes, credit notes, customer management, POS, CRM pipeline, agent management, commission calculation, territory management
- Screenshots: POS Terminal, Invoice Register, Customer Map, Agent Commissions
- Connected modules: Inventory (stock deduction), Accounting (revenue posting), Procurement (customer orders)

**Page 4: /en/capabilities/procurement/**
- Source: `docs/references/KraalCode_SRS_Procurement.docx`
- Key features: Vendor management, purchase requests, purchase orders, goods receipt (GRN), three-way matching (PO-GRN-Invoice), purchase returns, cooperative/outgrower procurement
- Screenshots: Procurement Dashboard, Purchase Order, GRN-PO Matching
- Connected modules: Inventory (stock receipt), Accounting (AP posting), Manufacturing (raw material sourcing)

**Page 5: /en/capabilities/manufacturing/**
- Source: `docs/references/KraalCode_SRS_Manufacturing.docx`
- Key features: BOM/recipe management, production orders, WIP tracking, quality control, batch certification, yield analysis, worker management, materials requisition
- Screenshots: Recipe Builder, Production Orders, Quality Inspection
- Connected modules: Inventory (raw material consumption, finished goods receipt), Accounting (WIP, COGS), HR (worker management)

**Page 6: /en/capabilities/hr-payroll/**
- Source: `docs/references/KraalCode_SRS_HRPayroll.docx`
- Key features: Employee records, leave management, attendance (biometric), payroll processing (NSSF/PAYE for Uganda, configurable for other countries), appraisals, KPI tracking, recruitment, organisation chart
- Screenshots: Payroll Run, Staff Profile, Leave Management, Appraisals
- Connected modules: Accounting (payroll GL posting), Projects (resource allocation)

**Page 7: /en/capabilities/projects/**
- Source: `docs/references/KraalCode_SRS_Projects.docx`
- Key features: Project register, task management, resource allocation, milestone tracking, project costing, timesheets, billing
- Screenshots: (limited project screens in ERP — use available ones)
- Connected modules: HR (resource allocation), Accounting (project costing), Sales (project billing)

**Page 8: /en/capabilities/reporting/**
- Source: `docs/references/KraalCode_SRS_StrategyBSC.docx`, dashboard files
- Key features: Executive dashboard, sales manager dashboard, store dashboard, accounting dashboard, procurement dashboard, KPI dashboard, compliance dashboard, BSC, strategic plan, AI intelligence
- Screenshots: Executive Dashboard, KPI Dashboard, Compliance Dashboard
- Connected modules: All modules feed into reporting

### 7.3 Screenshot Placeholder Components

For each capability page, create placeholder slots using the ScreenshotFrame component from Phase 04:
- Desktop viewport (1440px wide)
- Caption with screen name
- "Live product screenshot — coming soon" label
- Component ID for easy replacement in phases 16-20

### 7.4 Capabilities Index Update

Update `/en/capabilities/index.astro`:
- Ensure all 8 "Learn more" links point to the newly built detail pages
- Add brief descriptions from each capability's hero section
- Verify images are appropriate

---

## Deliverables

| File | Purpose |
|------|---------|
| `src/pages/en/capabilities/accounting/index.astro` | Accounting capability detail |
| `src/pages/en/capabilities/inventory/index.astro` | Inventory capability detail |
| `src/pages/en/capabilities/sales/index.astro` | Sales capability detail |
| `src/pages/en/capabilities/procurement/index.astro` | Procurement capability detail |
| `src/pages/en/capabilities/manufacturing/index.astro` | Manufacturing capability detail |
| `src/pages/en/capabilities/hr-payroll/index.astro` | HR & Payroll capability detail |
| `src/pages/en/capabilities/projects/index.astro` | Projects capability detail |
| `src/pages/en/capabilities/reporting/index.astro` | Reporting capability detail |
| `src/pages/en/product/index.astro` | Refined product page |

---

## Resources Required

- All SRS documents from `docs/references/`
- ScreenshotFrame component from Phase 04
- Images from `src/assets/images/capabilities/`

---

## Acceptance Criteria

- [ ] All 8 capability pages built with real, verified content
- [ ] Each page references its SRS document for feature claims
- [ ] No broken "Learn more" links from capabilities index
- [ ] Screenshot placeholder slots exist on each page
- [ ] Responsive at all breakpoints
- [ ] Each page has audience, workflows, connected modules, controls, CTA

---

## Gate to Phase 08

All 8 capability detail pages are built and linked. No broken links from the capabilities index. Each page has verified content from SRS docs and screenshot placeholder slots.
