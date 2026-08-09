# Phase 16 — Screenshots: Core Dashboards & Finance

**Directory:** `docs/plans/kraal-website/phase-16-screenshots-core-dashboards-finance/`
**Depends on:** Phase 07 (capability pages exist)
**Gate:** 10 screenshots captured, no real data visible, responsive derivatives generated, placed in pages

---

## Objective

Capture screenshots of the ERP's financial and dashboard screens using synthetic demo data, then integrate them into the marketing website's capability and product pages.

---

## Critical Rules

- **Synthetic data only** — never real tenant, employee, payroll, customer, or financial data
- **No sensitive info** — no internal URLs, no debug elements, no real IP addresses
- **Clean captures** — no browser chrome, no dev tools, no personal bookmarks
- **Consistent treatment** — use ScreenshotFrame component from Phase 04
- **Responsive derivatives** — AVIF/WebP at 1x and 2x for each viewport
- **Meaningful alt text** — describe what the screen shows, not "screenshot"

---

## Screenshots to Capture

| # | ERP Screen | File | What to Show | Placement |
|---|-----------|------|-------------|-----------|
| 1 | Executive Dashboard | `executive-dashboard.php` | KPI cards, achievement bars, 12-month trend chart, top 10 products | /en/product/ hero, /en/capabilities/reporting/ |
| 2 | Accounting Dashboard | `accounting-dashboard.php` | Financial ratios (current ratio, debt-to-equity, profit margin) with Healthy/Fair/Weak badges | /en/capabilities/accounting/ |
| 3 | Profit & Loss | `profit-loss.php` | Full income statement with demo data — revenue, expenses, net profit | /en/capabilities/accounting/ |
| 4 | Balance Sheet | `balance-sheet.php` | Assets, liabilities, equity — balanced | /en/capabilities/accounting/ |
| 5 | Trial Balance | `trial-balance.php` | Debit/credit columns, balanced | /en/capabilities/accounting/ |
| 6 | Chart of Accounts | `chart-of-accounts.php` | COA tree structure — show depth and organisation | /en/capabilities/accounting/ |
| 7 | Cash Flow Dashboard | `cash-flow-dashboard.php` | Cash flow monitoring with charts | /en/capabilities/accounting/ |
| 8 | Budget Performance | `budget-performance.php` | Budget vs actual with variance indicators | /en/capabilities/accounting/ |
| 9 | Period Closing | `period-closing.php` | Month-end close workflow — show accounting controls | /en/capabilities/accounting/ |
| 10 | Financial Audit Trail | `financial-audit-trail.php` | Immutable audit log — show who did what, when | /en/capabilities/accounting/, /en/security/ |

---

## Capture Process

1. **Prepare demo data:**
   - Create a demo tenant in the ERP with synthetic data
   - Use realistic but fictional company name, products, amounts
   - Ensure all screens have data to display (not empty states)
   - Currency: UGX with realistic amounts

2. **Capture viewports:**
   - Desktop: 1440×900px (primary)
   - Tablet: 768×1024px (secondary)
   - Mobile: 375×812px (tertiary)

3. **Browser setup:**
   - Chrome in clean profile (no extensions, no bookmarks bar)
   - Zoom: 100%
   - No dev tools open
   - Hide any real tenant data or internal URLs

4. **Post-processing:**
   - Crop to remove browser chrome
   - Light treatment: slight warmth, muted saturation (match site palette)
   - Generate AVIF and WebP derivatives at 1x and 2x
   - File naming: `screenshot-[screen-name]-[viewport].[ext]`

---

## Integration Tasks

1. Place screenshots in `/en/capabilities/accounting/` page (6 screenshots)
2. Place executive dashboard in `/en/product/` page hero
3. Place audit trail in `/en/security/` page
4. Use ScreenshotFrame component with:
   - Desktop viewport frame
   - Caption with screen name
   - Meaningful alt text
   - Component ID for future replacement

5. Generate responsive `<img>` tags with srcset/sizes
6. Add to `docs/project/screenshot-manifest.md`

---

## Data Sanitisation Checklist

- [ ] No real tenant names
- [ ] No real employee names or IDs
- [ ] No real customer names or account numbers
- [ ] No real financial amounts from actual businesses
- [ ] No internal server URLs or IP addresses
- [ ] No debug elements or development flags
- [ ] No personal browser data (bookmarks, extensions)

---

## Deliverables

| Count | Output |
|-------|--------|
| 10 screenshots × 3 viewports | 30 source images |
| 30 × 2 derivatives (AVIF + WebP) | 60 optimised images |
| Updated pages | /en/product/, /en/capabilities/accounting/, /en/security/ |
| `docs/project/screenshot-manifest.md` | Complete inventory |

---

## Acceptance Criteria

- [ ] 10 screenshots captured with synthetic data
- [ ] No real data visible in any screenshot
- [ ] Responsive derivatives generated (AVIF/WebP, 1x/2x)
- [ ] Placed in relevant pages with ScreenshotFrame
- [ ] Alt text describes what's shown
- [ ] Screenshot manifest created

---

## Gate to Phase 17

Financial and dashboard screenshots are captured, processed, and integrated. No real data exposed.
