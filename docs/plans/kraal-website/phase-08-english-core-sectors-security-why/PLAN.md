# Phase 08 — English Core: Sectors, Security & Why

**Directory:** `docs/plans/kraal-website/phase-08-english-core-sectors-security-why/`
**Depends on:** Phase 07
**Gate:** All 8 sector pages built, Trust Centre has verified controls only, no unsupported compliance claims

---

## Objective

Build the 8 sector detail pages, expand the security page into a proper Trust Centre, and refine the "Why Kraal Code" page with competitive proof.

---

## Tasks

### 8.1 Sector Detail Pages (8 pages)

Each sector page structure:
1. Hero with sector name, image, one-line positioning
2. "Your challenges" — industry-specific pain points
3. "How Kraal Code helps" — specific modules and workflows for this sector
4. "Key capabilities for [sector]" — 4-6 specific features with brief descriptions
5. Screenshot placeholder slots (where sector-specific screenshots go)
6. "Organisations like yours" — hypothetical use case (no fabricated testimonials)
7. CTA: "See Kraal Code for [sector]" → contact page

**Page 1: /en/sectors/manufacturing/**
- Challenges: production planning, raw material tracking, quality control, yield management, cost accounting
- Modules: Manufacturing, Advanced Inventory, Accounting, HR
- Key features: BOM/recipes, production orders, QC inspections, batch certification, WIP tracking, OEE
- Screenshots: Recipe Builder, Production Orders, Quality Inspection

**Page 2: /en/sectors/trading/**
- Challenges: multi-location stock, batch tracking, expiry management, supplier management, order fulfillment
- Modules: Inventory, Sales, Procurement, POS
- Key features: Multi-warehouse, FEFO, GRN-PO matching, delivery notes, stock transfers
- Screenshots: Store Dashboard, Stock Valuation, Purchase Order

**Page 3: /en/sectors/nonprofits/**
- Challenges: donor-restricted funds, project budgeting, audit requirements, multi-currency grants, reporting to funders
- Modules: Accounting, Projects, HR, Strategy & BSC
- Key features: Fund accounting, project costing, budget tracking, departmental workplans, M&E
- Screenshots: Budget Performance, Project Costing, Compliance Dashboard

**Page 4: /en/sectors/consultancy/**
- Challenges: project profitability, timesheet tracking, expense management, client billing, resource allocation
- Modules: Projects, Sales, HR, Accounting
- Key features: Project register, timesheets, expense claims, invoicing, utilisation reports
- Screenshots: Project detail, Timesheet entry

**Page 5: /en/sectors/agriculture/**
- Challenges: outgrower management, commodity intake, weighbridge integration, seasonal payments, input loan deductions
- Modules: Cooperative Procurement, Inventory, Accounting
- Key features: Farmer registration, commodity purchases, deduction schedules, farmer statements, map view
- Screenshots: Farmer Map, Cooperative Management

**Page 6: /en/sectors/retail/**
- Challenges: fast checkout, barcode scanning, cash reconciliation, multi-payment modes, stock management
- Modules: POS, Inventory, Sales, Accounting
- Key features: POS terminal, barcode support, cash/mobile money/card payments, Z-reports, stock deduction
- Screenshots: POS Terminal, Sales Reports

**Page 7: /en/sectors/hospitality/**
- Challenges: table management, room service, inventory perishables, multi-outlet, end-of-day reconciliation
- Modules: POS, Inventory, Accounting, HR
- Key features: POS table mode, recipe management, stock tracking, shift management
- Screenshots: POS Terminal (hospitality mode)

**Page 8: /en/sectors/education/**
- Challenges: student fee collection, academic calendar, parent communication, staff payroll, reporting
- Modules: Accounting, Sales (fee invoices), HR, Strategy & BSC
- Key features: Fee invoicing, payment tracking, payroll, departmental budgets, KPI dashboards
- Screenshots: Invoice Register, Payroll Run

### 8.2 Sectors Index Update

Update `/en/sectors/index.astro`:
- Fix all 8 "Learn more" links to point to new detail pages
- Verify sector descriptions are accurate
- Verify images are appropriate (check `src/assets/images/industries/`)

### 8.3 Trust Centre Expansion

Expand `/en/security/` into a proper Trust Centre:

1. **Security Overview** — already exists, refine
2. **Identity & Access Control** — RBAC details, MFA, session management, password policy
3. **Tenant & Data Isolation** — row-level isolation, HTTP 404 for cross-tenant, server-side session scoping
4. **Encryption** — TLS 1.3 in transit, AES-256 at rest, Bcrypt cost ≥ 12
5. **Audit Logging** — INSERT-only, 7-year retention, immutable, external auditor role
6. **Secure Development Lifecycle** — coding guidelines, code review, testing, deployment
7. **Vulnerability Management** — dependency scanning, responsible disclosure process
8. **Infrastructure & Backup** — hosting, backups, disaster recovery
9. **Incident Response** — process, communication, recovery
10. **Sub-Processors** — maintained on request
11. **Data Location & Residency** — where data is stored, cross-border considerations
12. **Retention, Export & Deletion** — configurable retention, 72-hour SAR export, 30-day archive, 90-day purge
13. **Compliance Mapping** — OWASP Top 10 (2021), Uganda PDPA 2019, IFRS for SMEs alignment
14. **Responsible Disclosure** — security contact, process

Each section: plain-language explanation + bounded technical detail + source reference.

**Critical rule:** Only publish controls that are verified by `KraalCode_SRS_RBAC.docx`, `KraalCode_SecurityCompliance.docx`, or implementation evidence. No "bank-grade", "military-grade", "100% secure", "GDPR certified", "ISO 27001 certified" unless evidence exists.

### 8.4 Responsible Disclosure Page

Create `/en/security/disclosure/`:
- How to report a vulnerability
- What to expect (response timeline, process)
- Safe harbour policy
- Security contact: security@kraalcode.com
- PGP key (if available)

### 8.5 Why Kraal Code Refinement

`/en/why/` exists with 6 cards. Refinements:
1. Add competitive comparison table (Kraal Code vs SAP Business One vs Oracle NetSuite vs Odoo — verified pricing and features)
2. Add more specific proof points from SRS docs
3. Add "Built by people who understand the problem" section (from company page)
4. Ensure no competitor disparagement — explain Kraal Code's choices, not others' failures

---

## Deliverables

| File | Purpose |
|------|---------|
| `src/pages/en/sectors/manufacturing/index.astro` | Manufacturing sector |
| `src/pages/en/sectors/trading/index.astro` | Trading & Distribution sector |
| `src/pages/en/sectors/nonprofits/index.astro` | Non-Profits & NGOs sector |
| `src/pages/en/sectors/consultancy/index.astro` | Consultancy sector |
| `src/pages/en/sectors/agriculture/index.astro` | Agriculture sector |
| `src/pages/en/sectors/retail/index.astro` | Retail & POS sector |
| `src/pages/en/sectors/hospitality/index.astro` | Hospitality sector |
| `src/pages/en/sectors/education/index.astro` | Education sector |
| `src/pages/en/security/index.astro` | Expanded Trust Centre |
| `src/pages/en/security/disclosure/index.astro` | Responsible disclosure |
| `src/pages/en/sectors/index.astro` | Updated with working links |
| `src/pages/en/why/index.astro` | Refined with competitive proof |

---

## Resources Required

- SRS documents for all modules
- Security compliance document (`KraalCode_SecurityCompliance.docx`)
- RBAC document (`KraalCode_SRS_RBAC.docx`)
- Images from `src/assets/images/industries/`
- Digital research engine for competitive analysis

---

## Acceptance Criteria

- [ ] All 8 sector pages built with industry-specific content
- [ ] No broken links from sectors index
- [ ] Trust Centre has 14 sections with verified controls only
- [ ] No unsupported compliance claims
- [ ] Responsible disclosure page exists
- [ ] Why page has competitive comparison with verified data
- [ ] All pages responsive and accessible

---

## Gate to Phase 09

All sector pages built. Trust Centre is comprehensive but honest. No unsupported compliance or security claims. Why page has verified competitive positioning.
