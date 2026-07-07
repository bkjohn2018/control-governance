# Governance Package: Oracle Fusion Cloud AP Invoice-to-Pay 26B - Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Supporting references:
> - `analytics/README.md`
> - `analytics/AP_Analytics_Package_Summary.md`
> - `../../policies/analytics-intake-and-extension-policy.md`
>
> Source anchors:
> - Oracle Help Center, *Oracle Fusion Cloud Financials 26B* — Payables reporting and inquiry capability
> - [Oracle Fusion Payables Predefined Reports 26C](https://docs.oracle.com/en/cloud/saas/financials/26c/fappp/oracle-fusion-payables-predefined-reports.html)

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud AP Invoice-to-Pay 26B - data and analytics layer |
| Consumption surfaces | Oracle native Payables reports, Reports and Analytics, OTBI where available, BI Publisher deployment package, Oracle Analytics Cloud (OAC) dashboards / workbooks / semantic models, governed extracts, issue and KPI scorecards |
| Governance objective | Establish trusted, traceable, and well-controlled AP metrics, reports, extracts, and analytics so every AP KPI has a known owner, formula, lineage, quality threshold, and usage boundary |
| Primary audience | AP Process Owner, AP Manager, Report / Data Stewards, Finance Controls Lead, BI / Analytics Delivery Owner, Internal Audit |
| Reference pattern | Oracle-first reporting and analytics governance aligned to the enterprise analytics intake policy |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Plain-language definitions, explicit thresholds, and controlled extension language |
| Non-goals | Replacing Oracle-native accounting reports, creating people-performance analytics, or using AP analytics as an unofficial system of record |

---

## 1) Executive Summary

**Context.** AP leaders need reliable operational visibility into workload, approval compliance, holds, payment timeliness, and duplicate risk. Oracle-native Payables reports should remain the first-line source for reconciliations, close support, and standard evidence, while governed extensions may be approved for workload, throughput, or exception insight when a documented native gap remains. When governed AP data is promoted into Oracle Analytics Cloud, the same metric, lineage, freshness, access, and change-control rules still apply.

**What this package does.** It defines the AP data and analytics governance layer: domain ownership, canonical AP terms, governed KPI definitions, data quality controls, metadata and lineage expectations, issue routing, and sensitive-data handling rules.

**What is ready.** Canonical AP KPI definitions including KPI-09 (AP Outstanding Balance by Aging Tier) as the financial truth anchor for all operational aging views; a predefined report inventory (Section 10) covering all 43 Oracle-shipped Payables reports with governance tier, KPI/control/DQ linkage, and retention flags; canonical aging definitions establishing past-due financial aging as distinct from operational stage aging; a native-first reporting rule; a workload analytics use case boundary; baseline lineage for the AP workload package; and recurring DQ controls tied to operational gates.

**What remains.** Tenant-specific source mapping, dashboard certification, and automated DQ monitoring on approved datasets.

**What we ask of leadership.**
1. Endorse the KPI catalog in this package as the AP source of truth for operational analytics.
2. Require native-report assessment before any new custom AP dashboard or extract.
3. Confirm AP stewardship and BI support ownership for governed extensions.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- AP transaction data used for invoice lifecycle monitoring, exception analysis, payment operations, reconciliation support, and management review.
- Native Oracle Payables reports and inquiry outputs used as evidence or decision support.
- Approved governed extensions such as AP workload and throughput analytics, including OAC dashboards, workbooks, and semantic-layer content built on approved AP sources.
- Metric definitions, lineage, DQ thresholds, access controls, and issue management for AP analytics assets.

### 2.2 Out of scope
- Procurement sourcing analytics, supplier onboarding analytics, and enterprise data-mart design outside approved AP scope.
- Individual employee performance scoring or disciplinary analytics.
- Unapproved spreadsheet extracts that become operational reporting sources.

### 2.3 Objectives
1. Single canonical definition for each AP KPI.
2. Explicit owner and steward for each governed AP analytic asset.
3. Native-first assessment before custom reporting is approved.
4. Defined data quality checks for control-sensitive fields and calculations.
5. Published lineage from Oracle source data to governed output.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **AP Analytics Review Forum** | Approve KPI definitions, review DQ issues, certify governed outputs | AP Process Owner | Monthly |
| **AP Data Steward Working Session** | Maintain glossary, lineage, and issue triage | AP Manager / Report Steward | Bi-weekly |
| **Analytics Intake Review** | Assess native-first evidence and approve governed extensions | Governance Reviewer + AP owner | As needed |

### 3.2 Domains, owners, and stewards

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| AP invoice lifecycle | AP Manager | AP Specialist / Report Steward | Oracle Financials / BI support |
| Approval and payment evidence | AP Process Owner | AP Analyst | Oracle Financials / BI support |
| Holds and exceptions | AP Manager | AP Specialist | Oracle Financials / BI support |
| AP workload analytics extension | AP Process Owner | AP Report Steward | BI / Analytics Delivery Owner |

### 3.3 Policy lifecycle
- Draft -> AP owner review -> governance approval -> publish -> annual or change-trigger review.
- Controlled copies remain in the repository; working drafts are not official operating guidance.

---

## 4) Policy Addendum - AP Data and Analytics

1. **DA-1 Authoritative source.** Oracle Fusion AP remains the authoritative source for AP transactions, workflow evidence, balances, and standard process records.
2. **DA-2 Native first.** Native Oracle reports, inquiries, workflow history, and scheduled-process outputs shall be assessed before custom AP analytics or extracts are approved.
3. **DA-3 Canonical metrics.** AP KPI commentary, dashboards, and recurring management reporting shall use the approved metric definitions in Section 7.
4. **DA-4 Governed extension only.** Custom dashboards, OAC workbooks, semantic models, extracts, or BI Publisher products shall proceed only through approved intake and retained lineage.
5. **DA-5 Data quality.** Critical AP analytics fields and calculations shall meet the quality thresholds in Section 8.
6. **DA-6 Sensitive data controls.** Supplier, bank, payment, tax, and other restricted AP data shall be access controlled and handled per approved security and privacy expectations.
7. **DA-7 Change control.** Formula, source, threshold, parameter, or logic changes shall be logged and approved before release.
8. **DA-8 AI input fitness.** AP data used in AI-assisted analysis or agents shall comply with this package and `03-governed-ai.md`.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | How much AP workload is in each processing stage and queue? | Staffing, backlog management |
| Q2 | What share of invoices pass validation first time? | Intake / quality improvement |
| Q3 | Are invoices paid only after required approvals? | Control effectiveness |
| Q4 | Are payments executed on time and with acceptable exception handling? | Cash operations and supplier management |
| Q5 | Where are hold and exception bottlenecks occurring? | Root-cause remediation |
| Q6 | Is duplicate-risk prevention performing to tolerance? | Leakage prevention |
| Q7 | Which native Oracle reports already answer the need, and where is the material gap? | Native-first decision |
| Q8 | What evidence supports monthly AP governance review? | Auditability and oversight |

---

## 6) Business Glossary (AP Canonical Terms)

| Term | Definition | Owner | Steward | Approved synonyms | Disallowed synonyms |
|---|---|---|---|---|---|
| AP Invoice | Supplier invoice captured in Oracle Fusion AP for processing and payment | AP Manager | AP Analyst | Supplier invoice | Voucher when used as a generic replacement |
| Invoice Intake | Point at which an invoice is received, registered, and assigned a traceable record | AP Manager | AP Analyst | Registration | "Data entry" as the sole definition |
| Validation | Required completeness, coding, and policy checks performed before approval routing | AP Manager | AP Specialist | Pre-approval validation | "Review" when the gate is not explicit |
| Approval Compliance | Condition in which invoice payment is supported by the required approval trail | AP Process Owner | AP Analyst | Approval adherence | "Approved enough" |
| Hold / Exception | Condition preventing normal progression of an invoice or payment candidate | AP Manager | AP Specialist | Exception | "Problem item" |
| Payment Candidate | Invoice or installment selected for payment-run consideration | AP Manager | AP Specialist | Payment population | "Ready to pay" before controls clear |
| Duplicate Risk | Potential that the same payable obligation is paid more than once | AP Process Owner | AP Manager | Duplicate-payment exposure | "Duplicate invoice" when payment status is the issue |
| Work in Process (WIP) | Open AP invoice workload not yet fully paid or resolved | AP Process Owner | Report Steward | AP backlog | "Aging" when stage view is intended |
| Stage Age | Number of days an invoice has remained in its current processing stage | AP Manager | Report Steward | Queue age | "Cycle time" |
| Flow Time | End-to-end days from invoice receipt or registration to payment completion | AP Process Owner | Report Steward | Throughput time | "Stage age" |
| Aging (AP) | Elapsed days since the due date for AP invoices not yet paid as of the reporting as-of date, grouped into approved aging bucket boundaries. Distinct from Stage Age, which measures operational processing time from stage entry | AP Process Owner | AP Manager | Payables aging; past-due payables | "Stage age" when financial aging is meant; "days outstanding" when past-due meaning is intended |
| Past Due (AP) | An AP invoice where the due date has passed and full payment has not been executed as of the as-of date. Represents a late payment against supplier terms. Days past due = as-of date minus due date | AP Manager | AP Specialist | Overdue payable; late payment | "Outstanding" alone; "in process" |
| Current (AP) | An AP invoice outstanding within approved payment terms; the due date has not yet been reached as of the as-of date. Current items are excluded from past-due aging buckets | AP Manager | AP Specialist | Not yet due; within terms | "Current aging" |
| Due Date (AP) | The date by which payment must be executed to satisfy supplier payment terms, calculated as invoice date plus the payment terms on the invoice. The due date is the reference date for on-time payment measurement and AP aging calculations | AP Manager | AP Specialist | Payment due date; terms date | "Invoice date" when due date is meant |

---

## 7) Metric Definitions (Governed KPI Catalog)

### KPI-01 - Invoice First-Pass Validation Rate
- **Question:** Q2
- **Formula:** Invoices passing validation on first attempt / total invoices validated.
- **Grain:** Day -> month aggregate.
- **Source:** Oracle Fusion AP validation records.
- **Owner / Steward:** AP Manager / AP Specialist.
- **Threshold:** Green >= 97%; Amber 94% to <97%; Red <94%.

### KPI-02 - Approval Compliance Rate
- **Question:** Q3
- **Formula:** Invoices paid with a fully compliant approval trail / total invoices paid.
- **Grain:** Payment run and monthly aggregate.
- **Source:** Approval logs and payment records; Payables Payment Register; Payables Invoice Audit Listing.
- **Owner / Steward:** AP Manager / AP Analyst.
- **Threshold:** Green = 100%; Amber 99.0% to <100%; Red <99.0%.

### KPI-03 - On-Time Payment Execution Rate
- **Question:** Q4
- **Formula:** Invoices paid on or before due date / total invoices paid.
- **Grain:** Week -> month aggregate.
- **Source:** Due date and payment posting data; Payables Payment Register.
- **Owner / Steward:** AP Manager / AP Specialist.
- **Threshold:** Green >= 98%; Amber 95% to <98%; Red <95%.
- **Date Reference:** Due date is the reference for "on time." Payment is on time if the payment posting date is on or before the due date. As-of date for period review must be consistent with the period-close date.

### KPI-04 - Duplicate Payment Prevention Effectiveness
- **Question:** Q6
- **Formula:** 1 - (confirmed duplicate payments / total payments executed).
- **Grain:** Monthly.
- **Source:** Payment exception log and duplicate investigations.
- **Owner / Steward:** AP Process Owner / AP Manager.
- **Threshold:** Green >= 99.98%; Amber 99.90% to <99.98%; Red <99.90%.

### KPI-05 - Hold / Exception Rate
- **Question:** Q5
- **Formula:** Open invoices on hold or in exception state / total open invoices.
- **Grain:** Daily snapshot, monthly review.
- **Source:** AP hold and exception records; Payables Matching Hold Detail Report; Payables Key Indicators Report.
- **Owner / Steward:** AP Manager / AP Specialist.
- **Threshold:** Target <= 8%; sustained >10% triggers review.

### KPI-06 - Stage Aging Over Threshold
- **Question:** Q1, Q5
- **Formula:** Count of invoices whose current-stage age exceeds the approved stage threshold.
- **Grain:** Stage x day.
- **Source:** AP workload analytics extension or equivalent native population logic.
- **Owner / Steward:** AP Manager / Report Steward.
- **Threshold:** Stage-specific; trend reviewed weekly.
- **Date Reference:** Stage age measures elapsed days from stage entry date (operational aging). This KPI measures processing timeliness, not financial delinquency. For due-date-based financial aging of AP balances, see KPI-09.

### KPI-07 - Workload Backlog Value
- **Question:** Q1
- **Formula:** Sum of remaining AP liability for open invoices in WIP.
- **Grain:** Stage x owner x day.
- **Source:** Open invoice balances and payment schedules.
- **Owner / Steward:** AP Process Owner / Report Steward.
- **Threshold:** No fixed target; variance and concentration reviewed monthly.

### KPI-08 - Native-First Reuse Rate
- **Question:** Q7
- **Formula:** AP reporting requests satisfied through native Oracle capability / total AP reporting requests reviewed.
- **Grain:** Quarterly.
- **Source:** Analytics intake register.
- **Owner / Steward:** AP Process Owner / Governance Reviewer.
- **Threshold:** Target >= 60% without forcing poor-fit reuse.

### KPI-09 - AP Outstanding Balance by Aging Tier (Financial Aging)
- **Question:** Q4 — balance sheet provenance for all operational payables views.
- **Formula:** Total unpaid AP invoice balance stratified by aging tier: Current (not yet due) / 1–30 DPD / 31–60 DPD / 61–90 DPD / 91–120 DPD / 120+ DPD. Days past due = as-of date minus due date. Current items have a positive days-to-due value and are excluded from past-due buckets.
- **Grain:** As-of date snapshot; required at each period close.
- **Date Reference:** Due date is the aging reference for all past-due buckets. As-of date must match the period-end date used in the AP-to-GL reconciliation for the same close.
- **Source:** Payables Trial Balance Report; Payables Invoice Aging Report; Supplier Balance Aging Report; `Payables - Invoices Real Time` OTBI subject area.
- **Owner / Steward:** AP Process Owner / AP Manager.
- **Threshold:** No fixed target; aging tier distribution reviewed monthly. Growth in 30+ DPD concentration triggers supplier terms review. Any 90+ DPD balance requires documented explanation before period close sign-off.
- **Governance note:** This KPI is the financial truth anchor for AP. Operational views (payment queues, hold populations, discount-capture windows, stage queues) must reconcile their total to this figure within approved tolerance before use in governance reporting.

---

## 8) Data Quality Controls

| ID | Rule | Critical data | Threshold | Owner | Evidence |
|---|---|---|---|---|---|
| DQ-01 | Invoice IDs are unique within the governed reporting population | Invoice ID | 100% unique | AP Manager | Query validation / reconciliation; Payables Invoice Audit by Voucher Number Listing; Payment Audit by Voucher Number Report |
| DQ-02 | Required approval status and timestamp are present for paid invoices | Approval status, approval timestamp | 100% for paid invoices | AP Analyst | Approval compliance check |
| DQ-03 | Due date and payment date are populated where on-time metric applies | Due date, payment date | >= 99.5% populated | AP Specialist | Payment timeliness check |
| DQ-04 | Hold records have valid hold type and status fields | Hold type, hold status | >= 99% valid | AP Specialist | Hold review log |
| DQ-05 | Duplicate investigation records have final disposition | Duplicate flag, disposition | 100% for investigated items | AP Manager | Duplicate issue log; Payables Invoice Audit Listing |
| DQ-06 | Stage mapping logic is versioned and current | Stage model logic | 100% governed | Report Steward | Change log |
| DQ-07 | Owner / queue labels use approved governance mapping | Owner label | 100% approved mapping | Report Steward | Mapping file review |
| DQ-08 | Governed reports reconcile to native AP totals where applicable | WIP amount / counts | <= approved tolerance | AP Process Owner | Reconciliation record; Payables Trial Balance Report; Payables to Ledger Reconciliation Report |
| DQ-09 | AP aging calculations use due date as the aging reference date, not invoice date or stage entry date | Due date field | 100% populated for aged AP population | AP Specialist | Payment timeliness check; Payables Invoice Aging Report validation |

---

## 9) Metadata and Lineage

### 9.1 Required metadata for governed assets
- Business name and purpose.
- Business owner and steward.
- Source system and key source objects.
- Refresh cadence and failure handling.
- Approved metrics and glossary terms used.
- Sensitive-data classification.
- Change history and next review date.

### 9.2 Lineage example - AP workload and throughput analytics

| Layer | Asset | Governance note |
|---|---|---|
| Source | `AP_INVOICES_ALL`, `AP_PAYMENT_SCHEDULES_ALL`, `AP_INVOICE_PAYMENTS_ALL`, `AP_HOLDS_ALL`, `AP_INVOICE_LINES_ALL`, `POZ_SUPPLIERS` | Oracle remains system of record |
| Transform | Stage mapping, owner mapping, flow-time and stage-age calculations | Logic must be versioned and approved |
| Consumption | AP workload / throughput dashboard, OAC workbook, or approved report | Certified only after reconciliation and DQ checks |
| Review | AP monthly governance scorecard | Output used for management review, not employee scoring |

### 9.3 Native-report baseline
Before approving a custom AP report or dashboard, record:
- Native Oracle report assessed.
- Business/control question being answered.
- Gap in fit, grain, timeliness, parameterization, or evidence value.
- Decision outcome: native, configured native, or governed extension.

---

## 10) Predefined Report Inventory

Oracle Fusion Payables ships predefined reports run from the Scheduled Processes work area and accessible in the Reports and Analytics work area. The inventory below covers all Oracle-shipped reports across the seven product categories, classified by governance tier and mapped to the KPIs, controls, and DQ rules they support.

**Governance tiers:**
- **Evidence-Required** — must be run and retained per AP-5 at the prescribed frequency
- **Close-Critical** — must be completed before payables accounting period close
- **Operational** — run on cadence for monitoring; retain per general records schedule
- **Reference / On-demand** — available when needed; no mandatory run or retention requirement

### 10.1 Invoices

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Import Payables Invoices Report | Evidence-Required | KPI-01 | Y |
| Payables Credit Memo Matching Report | Operational | — | Y |
| Payables Invoice Aging Report | Operational | KPI-09 | Y |
| Supplier Balance Aging Report | Operational | KPI-09 | Y |
| Payables Invoice Audit by Voucher Number Listing | Evidence-Required | DQ-01 | Y |
| Payables Invoice Audit Listing | Evidence-Required | KPI-02, DQ-05 | Y |
| Payables Invoice Register | Operational | KPI-07 | Y |
| Payables Key Indicators Report | Operational | KPI-05, KPI-07 | Y |
| Payables Matched and Modified Receipts Report | Evidence-Required | KPI-01 | Y |
| Payables Matching Detail Report | Operational | KPI-01, KPI-02 | Y |
| Payables Matching Hold Detail Report | Evidence-Required | KPI-05 | Y |
| Payables Negative Supplier Balance Report | Operational | — | Y |

### 10.2 Payments

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Payables Cash Requirement Report | Operational | KPI-03, KPI-07 | N |
| Payables Payment Requests Import Report | Evidence-Required | KPI-03 | Y |
| Payables Discounts Taken and Lost Report | Operational | KPI-03 | Y |
| Payables Payment Register | Evidence-Required | KPI-02, KPI-03 | Y |
| Payables Selected Installments Report | Operational | KPI-03 | Y |
| Payment Audit by Voucher Number Report | Evidence-Required | DQ-01 | Y |
| Update Matured Bills Payable Status | Evidence-Required (if feature enabled) | — | Y |
| Escheated Payments Listing Report | Evidence-Required | — | Y |

### 10.3 Payables to Ledger Reconciliation

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Payables to Ledger Reconciliation Report | Evidence-Required | KPI-09, DQ-08 | Y |

### 10.4 Period Close

All six period-close reports must be reviewed before the payables accounting period can close.

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Payables Open Items Revaluation Report | Operational | — | N |
| Payables Period Close Exceptions Report | Close-Critical | — | Y |
| Payables Posted Invoice Register | Close-Critical | DQ-08 | Y |
| Payables Posted Payment Register | Close-Critical | DQ-08 | Y |
| Payables Trial Balance Report | Close-Critical | KPI-09, DQ-08 | Y |
| Payables Unaccounted Transactions and Sweep Report | Close-Critical | — | Y |

### 10.5 Prepayments

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Prepayment Remittance Notice | Reference / On-demand | — | N |

### 10.6 Income Tax and Withholding

Tax and withholding reports have mandatory run and retention requirements driven by tax compliance obligations independent of the AP operational KPI framework.

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Payables Withholding Tax by Tax Authority Report | Operational | — | Y |
| Payables Withholding Tax Letter | Reference / On-demand | — | Y |
| Payables Withholding Tax Report | Operational | — | Y |
| Update and Report Income Tax Details | Evidence-Required | — | Y |
| US 1096 Report | Evidence-Required | — | Y |
| US 1099 Electronic Media Report | Evidence-Required | — | Y |
| US 1099 Forms - Comma Delimited Format | Evidence-Required | — | Y |
| US 1099 Invoice Exceptions Report | Evidence-Required | — | Y |
| US 1099 Payments Report | Evidence-Required | — | Y |
| US 1099 Report | Evidence-Required | — | Y |
| US 1099 Supplier Exceptions Report | Evidence-Required | — | Y |

### 10.7 Netting

Netting reports apply only when AP–AR netting is configured. Cross-domain coordination with the Receivables domain is required.

| Report | Governance Tier | KPI / Control / DQ Link | Retention Required |
|---|---|---|---|
| Netting Settlement Letter | Reference / On-demand | — | N |
| Netting Reversal Letter | Reference / On-demand | — | N |
| Netting Settlement Report | Operational | — | Y |
| Netting Settlement Listing | Operational | — | Y |

---

## 11) Data Issue Management

1. Log issue with affected KPI, report, field, or extract.
2. Classify severity based on decision or control impact.
3. Contain by flagging report, suspending distribution, or annotating the KPI.
4. Assign owner, target date, and corrective action.
5. Close only after validation and retained evidence.

| Severity | Example | Response target |
|---|---|---|
| S1 | KPI used for governance review is materially wrong | Same business day |
| S2 | Repeated DQ failure or stale governed report | 2 business days |
| S3 | Nonmaterial definition or labeling issue | 5 business days |

---

## 12) Sensitive Data and Access Controls

- Supplier, bank, payment, tax, and restricted invoice attributes require least-privilege access.
- Approved AP analytics shall favor queue or team views over named-person views unless specifically approved.
- Extracts with sensitive fields require recorded business purpose, owner, steward, retention, and approved storage location.
- Public or uncontrolled AI tools may not be used with restricted AP data.

---

## 13) Adoption and Training Notes

- Train AP leaders on the difference between native evidence reports and governed extension analytics.
- Publish the canonical KPI list with plain-language definitions.
- Review stage and owner mapping at least annually.
- Use the analytics intake policy for every recurring AP reporting request.

---

## 14) Deck Outline - AP Data and Analytics Briefing

1. Why AP needs governed data and analytics
2. Native-first principle and extension boundary
3. Canonical AP glossary and KPI catalog
4. DQ controls and lineage expectations
5. Sensitive-data controls and issue workflow
6. Leadership decisions and next steps

---

## 15) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Created normalized AP governed data and analytics root artifact | AP Process Owner |
| 1.1 | 2026-07-06 | Added Oracle Payables predefined report inventory (Section 10, 43 reports across 7 categories) with governance tier, KPI/control/DQ links, and retention flags; added Aging (AP), Past Due (AP), Current (AP), and Due Date (AP) canonical glossary terms with date-reference definitions; added KPI-09 AP Outstanding Balance by Aging Tier as financial truth anchor; added Date Reference field to KPI-03 and KPI-06; updated KPI-02, KPI-03, and KPI-05 source fields to name specific predefined reports; updated DQ-01, DQ-05, and DQ-08 evidence citations; added DQ-09 aging date reference rule; added Oracle Fusion Payables Predefined Reports 26C source anchor | AP Process Owner |
