# Phase 19 — Screenshots: HR, Payroll & People

**Directory:** `docs/plans/kraal-website/phase-19-screenshots-hr-payroll-people/`
**Depends on:** Phase 18
**Gate:** 10 screenshots, no real data, responsive derivatives, placed in pages

---

## Objective

Capture HR, payroll, and people management screens — the module that handles an organisation's most sensitive data.

---

## Screenshots to Capture

| # | ERP Screen | File | What to Show | Placement |
|---|-----------|------|-------------|-----------|
| 1 | Payroll Run | `payroll-run.php` | Full payroll processing with NSSF/PAYE calculations, gross-to-net | /en/capabilities/hr-payroll/ |
| 2 | Payroll Report | `payroll-report.php` | Payroll summary with department breakdowns | /en/capabilities/hr-payroll/ |
| 3 | Staff Profile | `staff-profile.php` | Employee detail view with personal info, contract, department | /en/capabilities/hr-payroll/ |
| 4 | Leave Management | `my_leave.php` | Leave request form with balance display | /en/capabilities/hr-payroll/ |
| 5 | Performance Appraisal | `appraisal-form.php` | Appraisal with KPI templates and competency scoring | /en/capabilities/hr-payroll/ |
| 6 | Employee KPI Dashboard | `employee-kpi-staff.php` | KPI tracking with targets and actuals | /en/capabilities/hr-payroll/ |
| 7 | Organisation Chart | `organization-chart.php` | Org structure visualisation | /en/capabilities/hr-payroll/ |
| 8 | Departments Management | `departments-management.php` | Department hierarchy with head count | /en/capabilities/hr-payroll/ |
| 9 | Payslips | `payslips.php` | Payslip view/download with earnings and deductions | /en/capabilities/hr-payroll/ |
| 10 | Recruitment | `recruitment.php` | Hiring workflow with candidate tracking | /en/capabilities/hr-payroll/ |

---

## Integration Points

| Page | Screenshots | Purpose |
|------|-------------|---------|
| /en/capabilities/hr-payroll/ | All 10 | Show HR module comprehensiveness |
| /en/sectors/nonprofits/ | Payroll, Departments | NGO HR needs |
| /en/sectors/education/ | Payroll, Staff Profile | Education sector HR |

---

## Data Requirements

- Demo employees with fictional names, departments, grades
- Demo payroll with UGX amounts, NSSF/PAYE calculations
- Demo leave requests and balances
- Demo appraisal with KPI templates
- Demo job postings and candidates

**Critical:** Employee data is the most sensitive. Every name, ID, salary, and personal detail must be synthetic. Cross-reference against `KraalCode_SRS_HRPayroll.docx` for feature accuracy.

---

## Deliverables

| Count | Output |
|-------|--------|
| 10 screenshots × 3 viewports | 30 source images |
| 60 optimised derivatives | AVIF + WebP |
| Updated pages | /en/capabilities/hr-payroll/, sector pages |
| Updated manifest | screenshot-manifest.md |

---

## Acceptance Criteria

- [ ] 10 screenshots with synthetic data
- [ ] Payroll shows NSSF/PAYE statutory compliance
- [ ] No real employee data in any screenshot
- [ ] Appraisal shows KPI template capability
- [ ] Placed in relevant pages

---

## Gate to Phase 20

HR and payroll screenshots captured and integrated. The most sensitive data module is properly sanitised.
