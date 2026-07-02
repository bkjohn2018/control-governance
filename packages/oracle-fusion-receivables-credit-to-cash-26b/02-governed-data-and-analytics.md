# Governance Package: Oracle Fusion Cloud Receivables Credit to Cash 26B — Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - [Overview of Oracle Receivables](https://docs.oracle.com/en/cloud/saas/financials/26b/fairp/overview-of-oracle-receivables.html)
> - [Subject Areas for Transactional Business Intelligence in Financials 26B](https://docs.oracle.com/en/cloud/saas/financials/26b/faofb/subject-areas-for-transactional-business-intelligence-in-financials.pdf)
> - *Using Receivables Credit to Cash 26B*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Receivables Credit to Cash 26B — data and analytics layer |
| Consumption surfaces | Oracle native Receivables reports and dashboards, Reports and Analytics, OTBI analyses and dashboards, Oracle Analytics Cloud (OAC) dashboards / workbooks / semantic models, governed extracts, issue and KPI scorecards |
| Governance objective | Establish trusted, traceable, and well-controlled AR metrics, reports, and analytics so every AR KPI has a known owner, formula, lineage, quality threshold, and usage boundary |
| Primary audience | AR Process Owner, AR Manager, Billing Specialist, Cash Application Specialist, Credit Manager, Revenue Accountant, Report / Data Stewards, Finance Controls Lead, BI / IT Financials Lead, Internal Audit |
| Reference pattern | Oracle-first reporting and analytics governance aligned to the enterprise analytics intake policy |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Plain-language definitions, explicit thresholds, and controlled extension language |
| Non-goals | Replacing Oracle-native accounting reports, creating people-performance analytics, or using AR analytics as an unofficial system of record |

---

## 1) Executive Summary

**Context.** AR leaders need reliable visibility into billing completeness, unapplied cash, dispute and adjustment activity, revenue recognition status, credit exposure, and collection performance. Oracle-native Receivables reports and OTBI subject areas should remain the first-line source for reconciliations, close support, and standard evidence, while governed extensions may be approved when a documented native gap remains. When governed AR data is promoted into Oracle Analytics Cloud, the same metric, lineage, freshness, access, and change-control rules still apply.

**What this package does.** It defines the AR data and analytics governance layer: domain ownership, canonical AR terms, governed KPI definitions, data quality controls, metadata and lineage expectations, issue routing, and sensitive-data handling rules.

**What is ready.** Canonical AR KPI definitions, a native-first reporting rule, baseline lineage patterns for billing, receipts, revenue, and credit monitoring, and recurring DQ controls tied to operational gates.

**What remains.** Tenant-specific source mapping, dashboard certification, and automated DQ monitoring on approved datasets.

**What we ask of leadership.**
1. Endorse the KPI catalog in this package as the AR source of truth for operational analytics.
2. Require native-report assessment before any new custom AR dashboard or extract.
3. Confirm AR stewardship and BI support ownership for governed extensions.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- AR transaction, receipt, adjustment, revenue, and credit data used for billing monitoring, cash application, collection analysis, revenue compliance, credit review, and management reporting.
- Native Oracle Receivables reports, dashboards, and inquiry outputs used as evidence or decision support.
- Approved governed extensions, including OAC dashboards, workbooks, and semantic-layer content built on approved AR sources.
- Metric definitions, lineage, DQ thresholds, access controls, and issue management for AR analytics assets.

### 2.2 Out of scope
- CRM pipeline analytics, sales commission design, and enterprise data-mart design outside approved AR scope.
- Individual employee performance scoring or disciplinary analytics.
- Unapproved spreadsheet extracts that become operational reporting sources.

### 2.3 Objectives
1. Single canonical definition for each AR KPI.
2. Explicit owner and steward for each governed AR analytic asset.
3. Native-first assessment before custom reporting is approved.
4. Defined data quality checks for control-sensitive fields and calculations.
5. Published lineage from Oracle source data to governed output.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **AR Analytics Review Forum** | Approve KPI definitions, review DQ issues, certify governed outputs | AR Process Owner | Monthly |
| **AR Data Steward Working Session** | Maintain glossary, lineage, and issue triage | AR Manager / Report Steward | Bi-weekly |
| **Analytics Intake Review** | Assess native-first evidence and approve governed extensions | Governance Reviewer + AR owner | As needed |

### 3.2 Domains, owners, and stewards

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| Billing and transactions | AR Manager | Billing Specialist | Oracle Financials / BI support |
| Receipts and cash application | AR Manager | Cash Application Specialist | Oracle Financials / BI support |
| Adjustments and disputes | AR Manager | Billing Specialist | Oracle Financials / BI support |
| Revenue recognition | AR Process Owner | Revenue Accountant | Oracle Financials / BI support |
| Credit management | Credit Manager | Credit Analyst | Oracle Financials / BI support |

---

## 4) Policy Addendum — AR Data and Analytics

1. **DA-AR-1 Authoritative source.** Oracle Fusion Receivables remains the authoritative source for AR transactions, receipts, revenue records, credit profiles, and standard process evidence.
2. **DA-AR-2 Native first.** Native Oracle reports, inquiries, dashboards, workflow history, and scheduled-process outputs shall be assessed before custom AR analytics or extracts are approved.
3. **DA-AR-3 Canonical metrics.** AR KPI commentary, dashboards, and recurring management reporting shall use the approved metric definitions in Section 7.
4. **DA-AR-4 Governed extension only.** Custom dashboards, OAC workbooks, semantic models, extracts, or BI Publisher products shall proceed only through approved intake and retained lineage.
5. **DA-AR-5 Controlled OAC content.** OAC workbooks, dashboards, and semantic-layer content using AR data shall inherit the same metric, drill-path, access, and retention controls as the source Oracle reporting assets.
6. **DA-AR-6 Data quality.** Critical AR analytics fields and calculations shall meet the quality thresholds in Section 8.
7. **DA-AR-7 Sensitive data controls.** Customer, payment, tax, credit, and other restricted AR data shall be access controlled and handled per approved security and privacy expectations.
8. **DA-AR-8 Change control.** Formula, source, threshold, parameter, or logic changes shall be logged and approved before release.
9. **DA-AR-9 AI input fitness.** AR data used in AI-assisted analysis or agents shall comply with this package and `03-governed-ai.md`.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | What billing transactions remain incomplete or blocked? | Billing throughput and control health |
| Q2 | What is the AutoInvoice rejection or correction rate? | Source-data and integration quality |
| Q3 | How much cash remains unapplied or on account? | Cash application prioritization |
| Q4 | Are receipts applied accurately and cleared on time? | Collection effectiveness |
| Q5 | What revenue contingencies or recognition exceptions remain open? | Revenue compliance |
| Q6 | Which customers exceed credit limits or require review? | Credit risk management |
| Q7 | Does AR reconcile to GL before period close? | Close readiness |
| Q8 | Which native Oracle reports already answer the need, and where is the material gap? | Native-first decision |

---

## 6) Business Glossary (AR Canonical Terms)

| Term | Definition | Owner | Steward | Approved synonyms | Disallowed synonyms |
|---|---|---|---|---|---|
| Receivables Transaction | Customer invoice, debit memo, credit memo, or related billing record in Oracle Receivables | AR Manager | Billing Specialist | AR transaction | "Sale" when accounting record is meant |
| Transaction Completion | Control state in which a transaction has passed required review before proceeding | AR Manager | Billing Specialist | Completion review | "Approved invoice" when completion workflow is meant |
| AutoInvoice Import | Process that imports external billing data and generates receivables transactions | AR Manager | Billing Specialist | Billing import | "Interface" without process qualifier |
| Unapplied Receipt | Receipt recorded but not yet applied to a receivable transaction | AR Manager | Cash Application Specialist | Open receipt | "Pending cash" |
| On-Account Receipt | Receipt applied to customer account without specific transaction application | AR Manager | Cash Application Specialist | On-account balance | "Unallocated cash" |
| Receipt Application | Matching of receipt to invoice, debit memo, or on-account balance | AR Manager | Cash Application Specialist | Cash application | "Allocation" outside AR context |
| Revenue Contingency | Condition delaying or altering revenue recognition per policy | AR Process Owner | Revenue Accountant | Contingency | "Hold" when revenue-specific meaning is required |
| Credit Profile | Customer creditworthiness record including limits, classifications, and review cycle | Credit Manager | Credit Analyst | Customer credit record | "Risk score" alone |
| Dispute | Customer challenge to billing accuracy requiring research and resolution | AR Manager | Billing Specialist | Billing dispute | "Complaint" |
| AR-to-GL Reconciliation | Comparison of receivables subledger balances to general ledger | AR Process Owner | Revenue Accountant | Subledger reconciliation | "Balance check" |

---

## 7) Metric Definitions (Governed KPI Catalog)

### KPI-01 — Transaction Completion Rate
- **Question:** Q1
- **Formula:** Completed transactions / total transactions requiring completion review.
- **Grain:** Day -> month aggregate.
- **Source:** `Receivables - Transactions Real Time`.
- **Owner / Steward:** AR Manager / Billing Specialist.
- **Threshold:** Green >= 98%; Amber 95% to <98%; Red <95%.

### KPI-02 — AutoInvoice First-Pass Success Rate
- **Question:** Q2
- **Formula:** Successfully imported AutoInvoice records / total imported records.
- **Grain:** Import run and monthly aggregate.
- **Source:** AutoInvoice import log and error report.
- **Owner / Steward:** AR Manager / Billing Specialist.
- **Threshold:** Green >= 97%; Amber 94% to <97%; Red <94%.

### KPI-03 — Unapplied Receipt Rate
- **Question:** Q3
- **Formula:** Unapplied receipt amount / total open receipt amount.
- **Grain:** Daily snapshot, monthly review.
- **Source:** `Receivables - Receipts Details Real Time`.
- **Owner / Steward:** AR Manager / Cash Application Specialist.
- **Threshold:** Target <= 5%; sustained >8% triggers review.

### KPI-04 — Unapplied Receipt Aging Over Threshold
- **Question:** Q3, Q4
- **Formula:** Count or amount of unapplied receipts older than approved threshold.
- **Grain:** Age bucket x day.
- **Source:** `Receivables - Receipts Details Real Time`.
- **Owner / Steward:** AR Manager / Cash Application Specialist.
- **Threshold:** Age threshold set by collection policy; trend reviewed weekly.

### KPI-05 — Receipt Application Accuracy
- **Question:** Q4
- **Formula:** Correctly applied receipts / total receipts applied in review sample.
- **Grain:** Batch and monthly aggregate.
- **Source:** Application review log and receipt detail reports.
- **Owner / Steward:** AR Manager / Cash Application Specialist.
- **Threshold:** Green >= 99.5%; Amber 99.0% to <99.5%; Red <99.0%.

### KPI-06 — Dispute / Adjustment Rate
- **Question:** Q1, Q5
- **Formula:** Open disputes or pending adjustments / total active billed transactions.
- **Grain:** Monthly.
- **Source:** `Receivables - Adjustments Real Time` and dispute tracking.
- **Owner / Steward:** AR Manager / Billing Specialist.
- **Threshold:** Trend monitored monthly; spikes trigger root-cause review.

### KPI-07 — Open Revenue Contingency Count
- **Question:** Q5
- **Formula:** Transactions with active revenue contingencies above approved age threshold.
- **Grain:** Monthly.
- **Source:** `Receivables - Revenue Adjustments Real Time` and revenue reports.
- **Owner / Steward:** Revenue Accountant / AR Process Owner.
- **Threshold:** Material open contingencies escalate to controller review.

### KPI-08 — Credit Limit Breach Rate
- **Question:** Q6
- **Formula:** Customers exceeding approved credit limit or requiring override / total active credit-managed customers.
- **Grain:** Monthly.
- **Source:** Credit Management work area and customer credit reports.
- **Owner / Steward:** Credit Manager / Credit Analyst.
- **Threshold:** Any unauthorized breach escalates same day.

### KPI-09 — AR-to-GL Reconciliation Variance
- **Question:** Q7
- **Formula:** Count or amount of reconciliation items above approved tolerance.
- **Grain:** Per close.
- **Source:** AR reconciliation reporting and subledger-to-GL views.
- **Owner / Steward:** AR Process Owner / Revenue Accountant.
- **Threshold:** Material unresolved items block period close signoff.

### KPI-10 — Native-First Reuse Rate
- **Question:** Q8
- **Formula:** AR reporting requests satisfied through native Oracle capability / total AR reporting requests reviewed.
- **Grain:** Quarterly.
- **Source:** Analytics intake register.
- **Owner / Steward:** AR Process Owner / Governance Reviewer.
- **Threshold:** Target >= 60% without forcing poor-fit reuse.

---

## 8) Data Quality Controls

| ID | Rule | Critical data | Threshold | Owner | Evidence |
|---|---|---|---|---|---|
| DQ-01 | Transaction IDs are unique within the governed reporting population | Transaction ID | 100% unique | AR Manager | Query validation |
| DQ-02 | Required completion or approval status is present for governed billing metrics | Completion / approval status | 100% for in-scope transactions | Billing Specialist | Completion review check |
| DQ-03 | Receipt application status and dates are populated where cash metrics apply | Application status, application date | >= 99.5% populated | Cash Application Specialist | Application accuracy check |
| DQ-04 | Customer and bill-to site references are valid for governed AR reports | Customer, bill-to site | 100% valid | Billing Specialist | Customer master reconciliation |
| DQ-05 | Revenue contingency status is consistent with revenue policy logic | Contingency status | 100% for governed revenue reporting | Revenue Accountant | Revenue policy review |
| DQ-06 | Credit limit and profile fields are current for credit-managed customers | Credit limit, review date | 100% current or flagged | Credit Analyst | Credit profile review |
| DQ-07 | AutoInvoice error disposition is recorded for rejected records | Error code, disposition | 100% for investigated items | Billing Specialist | Import issue log |
| DQ-08 | Governed reports reconcile to native AR totals where applicable | Open AR amount / counts | <= approved tolerance | AR Process Owner | Reconciliation record |

---

## 9) Metadata and Lineage

### 9.1 Required metadata
- Business purpose and decision use.
- Owner, steward, and technical custodian.
- Source subject area, report, or dashboard.
- Refresh / run cadence and close criticality.
- Parameters, thresholds, and approved filters.
- Review date and change history.

### 9.2 Approved subject areas
- `Receivables - Transactions Real Time`
- `Receivables - Receipts Details Real Time`
- `Receivables - Adjustments Real Time`
- `Receivables - Payment Schedules Real Time`
- `Receivables - Credit Memo Applications Real Time`
- `Receivables - Revenue Adjustments Real Time`
- `Receivables - Customer Real Time`
- Other governed Receivables OTBI subject areas as approved through intake

### 9.3 Lineage pattern
Source transaction, receipt, or credit record -> governed metric logic -> dashboard / report -> collection, revenue, credit, or close review action.

---

## 10) Data Issue Management

1. Log issue with affected report, metric, customer, transaction, or receipt context.
2. Assess whether billing, cash application, revenue, credit, or close decisions are impacted.
3. Contain by flagging the report or pausing distribution if material.
4. Remediate and revalidate before closure.

---

## 11) Sensitive Data and Access Controls

- Access to AR reporting follows least privilege and approved Receivables security roles.
- Report folders and distribution lists must align to approved customer and financial data access.
- Extracts used outside Oracle require explicit owner, retention, and storage approval.

---

## 12) Adoption and Training Notes

- Train users on the difference between transaction, receipt, adjustment, revenue, and credit reporting subject areas.
- Publish approved drill-path and parameter guidance for close-critical AR reports.
- Review report catalog structure and stale content at least annually.

---

## 13) Deck Outline — AR Data and Analytics Briefing

1. Oracle-first reporting posture for Credit to Cash
2. Canonical KPI and glossary baseline
3. Approved reporting surfaces and drill paths
4. DQ and reconciliation controls
5. Access, extracts, and report-governance decisions

---

## 14) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-20 | Initial AR governed data and analytics package created from Oracle Receivables 26B source anchors | AR Process Owner |
