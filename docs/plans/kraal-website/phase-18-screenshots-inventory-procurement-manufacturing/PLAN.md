# Phase 18 — Screenshots: Inventory, Procurement & Manufacturing

**Directory:** `docs/plans/kraal-website/phase-18-screenshots-inventory-procurement-manufacturing/`
**Depends on:** Phase 17
**Gate:** 11 screenshots, no real data, responsive derivatives, placed in pages

---

## Objective

Capture inventory, procurement, and manufacturing screens — the operational backbone of the ERP.

---

## Screenshots to Capture

| # | ERP Screen | File | What to Show | Placement |
|---|-----------|------|-------------|-----------|
| 1 | Store Dashboard | `store-dashboard.php` | Inventory overview with utilisation bars, location cards, expiring batches | /en/capabilities/inventory/ |
| 2 | Stock Summary | `stock-summary.php` | Aggregate stock view across locations | /en/capabilities/inventory/ |
| 3 | Stock Valuation | `stock-valuation.php` | Valuation report (FIFO/weighted avg) | /en/capabilities/inventory/ |
| 4 | Batch Expiry | `batch-expiry.php` | Expiry tracking with urgency badges (green/amber/red) | /en/capabilities/inventory/ |
| 5 | Purchase Order | `purchase-order.php` | PO creation form with line items | /en/capabilities/procurement/ |
| 6 | Procurement Dashboard | `procurement-dashboard.php` | Gradient KPI cards, AP aging, PO status | /en/capabilities/procurement/ |
| 7 | GRN-PO Matching | `grn-matching.php` | Three-way matching (PO ↔ GRN ↔ Invoice) | /en/capabilities/procurement/ |
| 8 | Recipe Builder | `recipe-builder.php` | BOM/recipe management with ingredients and quantities | /en/capabilities/manufacturing/ |
| 9 | Production Orders | `production-orders.php` | Production order lifecycle with status tracking | /en/capabilities/manufacturing/ |
| 10 | Quality Inspection | `quality-inspection.php` | QC workflow with inspection checklist | /en/capabilities/manufacturing/ |
| 11 | Farmer Map | `farmer-map.php` | Geographic visualisation of outgrower farmers | /en/sectors/agriculture/ |

---

## Integration Points

| Page | Screenshots | Purpose |
|------|-------------|---------|
| /en/capabilities/inventory/ | Store Dashboard, Stock Summary, Stock Valuation, Batch Expiry | Inventory module depth |
| /en/capabilities/procurement/ | Purchase Order, Procurement Dashboard, GRN-PO Matching | Procurement controls |
| /en/capabilities/manufacturing/ | Recipe Builder, Production Orders, Quality Inspection | Manufacturing capability |
| /en/sectors/manufacturing/ | Recipe Builder, Production Orders | Sector-specific proof |
| /en/sectors/agriculture/ | Farmer Map | Agricultural supply chain |
| /en/sectors/trading/ | Store Dashboard, Stock Valuation | Distribution inventory |

---

## Data Requirements

- Demo stock items across multiple categories (raw materials, finished goods, packaging)
- Multiple store locations (warehouse, factory floor, shop)
- Demo purchase orders with vendor data
- Demo production orders with recipes/BOM
- Demo farmer registrations with geographic coordinates

---

## Deliverables

| Count | Output |
|-------|--------|
| 11 screenshots × 3 viewports | 33 source images |
| 66 optimised derivatives | AVIF + WebP |
| Updated pages | 6 pages updated |
| Updated manifest | screenshot-manifest.md |

---

## Acceptance Criteria

- [ ] 11 screenshots with synthetic data
- [ ] Inventory screens show multi-location stock
- [ ] Manufacturing screens show recipe/BOM capability
- [ ] Farmer map shows geographic distribution
- [ ] No real data in any screenshot
- [ ] Placed in relevant pages

---

## Gate to Phase 19

Inventory, procurement, and manufacturing screenshots captured and integrated.
