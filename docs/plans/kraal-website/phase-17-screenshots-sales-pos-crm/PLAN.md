# Phase 17 — Screenshots: Sales, POS & CRM

**Directory:** `docs/plans/kraal-website/phase-17-screenshots-sales-pos-crm/`
**Depends on:** Phase 16
**Gate:** 10 screenshots, no real data, responsive derivatives, placed in pages

---

## Objective

Capture the ERP's sales, point-of-sale, and customer management screens for the marketing website.

---

## Screenshots to Capture

| # | ERP Screen | File | What to Show | Placement |
|---|-----------|------|-------------|-----------|
| 1 | POS Terminal | `pos.php` | Full POS with cart, payment methods, receipt preview — the "retail proof" | /en/capabilities/sales/, /en/sectors/retail/ |
| 2 | Sales Invoice Register | `invoices-register.php` | Invoice list with filters, status badges, amounts | /en/capabilities/sales/ |
| 3 | Customer Management | `customers.php` | Customer list or detail view with account summary | /en/capabilities/sales/ |
| 4 | Customer Map | `customer-map.php` | Geographic visualisation of customers | /en/capabilities/sales/, /en/sectors/trading/ |
| 5 | Price Lists | `price-lists.php` | Pricing management with multiple price lists | /en/capabilities/sales/ |
| 6 | Sales Trends | `sales-trends.php` | Trend analysis charts — monthly/quarterly | /en/capabilities/reporting/ |
| 7 | Agent POS | `agent-pos.php` | Mobile field sales interface — simpler, phone-optimised | /en/work-from-anywhere/, /en/sectors/trading/ |
| 8 | Agent Commissions Centre | `agents-commissions-center.php` | Commission management dashboard | /en/capabilities/sales/ |
| 9 | Agent Daily Sales | `agents-daily-sales.php` | Daily field tracking — show field force management | /en/capabilities/sales/ |
| 10 | Territory Management | `territories-management.php` | Sales territories with map or list view | /en/capabilities/sales/ |

---

## Integration Points

| Page | Screenshots | Purpose |
|------|-------------|---------|
| /en/capabilities/sales/ | POS, Invoices, Customers, Commissions | Show sales module depth |
| /en/sectors/retail/ | POS terminal | Retail-specific proof |
| /en/sectors/trading/ | Customer Map, Agent POS | Distribution-specific features |
| /en/work-from-anywhere/ | Agent POS | Mobile/remote proof |
| /en/capabilities/reporting/ | Sales Trends | Reporting integration |

---

## Data Requirements

- Demo customers with realistic names (fictional Ugandan/East African businesses)
- Demo invoices with UGX amounts
- Demo sales agents with territories
- Demo POS session with cart items
- Geographic data for customer map (plot points across East Africa)

---

## Deliverables

| Count | Output |
|-------|--------|
| 10 screenshots × 3 viewports | 30 source images |
| 60 optimised derivatives | AVIF + WebP at 1x/2x |
| Updated pages | 5 pages updated |
| Updated manifest | screenshot-manifest.md |

---

## Acceptance Criteria

- [ ] 10 screenshots with synthetic data
- [ ] POS terminal shows realistic retail scenario
- [ ] Agent POS shows mobile-optimised interface
- [ ] No real data in any screenshot
- [ ] Placed in relevant pages
- [ ] Manifest updated

---

## Gate to Phase 18

Sales and POS screenshots captured and integrated.
