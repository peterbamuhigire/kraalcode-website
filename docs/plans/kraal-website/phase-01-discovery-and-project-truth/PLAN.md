# Phase 01 — Discovery & Project Truth

**Directory:** `docs/plans/kraal-website/phase-01-discovery-and-project-truth/`
**Depends on:** — (starting point)
**Gate:** Repository truth understood, no destructive overwrite risk, gaps visible

---

## Objective

Before any design, content, or code work begins, establish a factual understanding of everything that exists in both the marketing website repository and the ERP product codebase. Every subsequent phase depends on this truth.

---

## Tasks

### 1.1 Repository Inventory

1. Run `git status` and `git log --oneline -20` on `C:\wamp64\www\kraalcode-website`
2. Document every file in the repository with `rg --files` (or `Get-ChildItem -Recurse`)
3. Identify hidden files (`.gitignore`, `.mimocode/`, `.astro/`, `.well-known/`)
4. Record: file path, type, size, last modified, purpose
5. Output: `docs/project/01-input-inventory.md`

### 1.2 Reference Document Inventory

1. List all 54 DOCX files in `docs/references/`
2. Categorise by type:
   - **SRS documents** (17): Accounting, AdvancedInventory, AIIntelligence, Assets, AuditLog, Cooperative, HRPayroll, IntegrationLayer, Inventory, Localisation, Manufacturing, MobileAPI, Platform_Tenancy, PLM, POS, Procurement, Projects, RBAC, Sales, SalesAgents, SalesCRM, StrategyBSC, SupplyChainPlanning, Transportation
   - **Architecture** (4): HLD, LLD, DatabaseDesign, ADRCatalog
   - **Test** (4): TestPlan, TestStrategy, TestReport, TraceabilityMatrix
   - **Business** (5): BusinessCase, LeanCanvas, Vision, StakeholderAnalysis, PRD
   - **Operations** (8): DevSetup, DeploymentGuide, Infrastructure, Monitoring, Runbook, CodingGuidelines, ContributionGuide, OnboardingGuide
   - **Security** (2): SecurityCompliance, RiskAssessment
   - **UX** (2): UXSpec, UserManual
   - **Other** (7): FAQ, DoD, DoR, IoTSignalInventory
3. Note which SRS modules have corresponding implemented PHP pages in `C:\wamp64\www\kraal-code\public/`
4. Output: embedded in `docs/project/00-project-truth.md`

### 1.3 ERP Codebase Cross-Reference

1. List all PHP pages in `C:\wamp64\www\kraal-code\public/` (excluding api/, code/, sections/, components/, libs/, js/, css/, templates/)
2. List all pages in `public/superadmin/`
3. Check if `public/portal/` exists
4. Check `public/sales-agents/` for agent portal pages
5. Map each SRS module to its implemented PHP screens
6. Identify: fully implemented, partially implemented, planned (SRS exists but no code)
7. Output: table in `docs/project/00-project-truth.md`

### 1.4 Photo Bank & Asset Inventory

1. List all files in `photo-bank/` (unused/extra photos)
2. List all files in `src/assets/images/` (organised by page)
3. List all files in `public/icons/` and `public/fonts/`
4. For each image: dimensions, orientation, file size, subject, duplicate status
5. Verify which photos have known rights/releases
6. Identify missing assets (SVG logos, woff2 fonts, favicons, OG default image)
7. Output: `docs/project/07-asset-register.md`

### 1.5 Logo Colour Extraction

1. Read the KraalCode light and dark logo PNGs from `public/icons/`
2. Extract exact hex colours from the logo pixels
3. Verify the tokens in `src/styles/tokens/tokens.css` match the extracted colours
4. Document the colour rationale (charcoal wordmark, teal symbol, ivory/champagne dark mode)
5. Output: embedded in `docs/project/00-project-truth.md`

### 1.6 Website Codebase Audit

1. Read every page file in `src/pages/en/`, `src/pages/fr/`, `src/pages/sw/`
2. Read every component in `src/components/`
3. Read all style files in `src/styles/`
4. Read `astro.config.mjs`, `package.json`, `tsconfig.json`
5. Document: what's built, what's broken, what's placeholder, what's missing
6. Identify bugs (OutcomeSection Swahili caption/description key, broken links, missing assets)
7. Output: embedded in `docs/project/00-project-truth.md`

### 1.7 Gap & Assumption Register

1. List every gap discovered (missing pages, broken links, unwired forms, missing assets)
2. List every assumption made in prior sessions
3. Classify gaps as: blocking (must fix before launch), important (should fix), nice-to-have
4. Assign owner and priority to each gap
5. Output: `docs/project/03-assumptions-and-gaps.md`

### 1.8 Decision Log

1. Record all decisions made in the prior session:
   - Stack choice (Astro 5)
   - Typography (Source Serif 4 + Source Sans 3)
   - Visual direction (Geometric System from kraal mark)
   - Colour palette (extracted from logos)
   - Sector positioning (9 sectors)
   - Conversion strategy (demo request primary)
   - Pricing tiers (5 tiers in UGX)
2. Each decision: context, options considered, choice, rationale, owner, date
3. Output: `docs/project/04-decision-log.md`

---

## Deliverables

| File | Purpose |
|------|---------|
| `docs/project/00-project-truth.md` | Master truth document — what exists, what's broken, what's missing |
| `docs/project/01-input-inventory.md` | Every file in the repository categorised |
| `docs/project/03-assumptions-and-gaps.md` | All gaps and assumptions with priority |
| `docs/project/04-decision-log.md` | Decisions from prior sessions preserved |
| `docs/project/07-asset-register.md` | Every image with metadata, rights status, placement |

---

## Resources Required

- File system access to both repositories (`kraalcode-website` and `kraal-code`)
- Git log access
- Image metadata tools (dimensions, file size)

---

## Research Needed

- None (purely inventory work)

---

## Acceptance Criteria

- [ ] Every file in the website repository is categorised
- [ ] Every reference DOCX is classified by type
- [ ] Every SRS module is mapped to its implementation status in the ERP
- [ ] Every image is catalogued with dimensions and rights status
- [ ] Missing assets are identified (SVG logos, woff2 fonts, favicons, OG image)
- [ ] All bugs from prior session are documented
- [ ] All prior decisions are recorded with rationale
- [ ] No files are deleted, overwritten, or destroyed

---

## Gate to Phase 02

Repository truth is documented. No destructive overwrite risk exists. All gaps are visible and prioritised. The claim register can be started because we know what product capabilities are verified (SRS docs) vs aspirational.
