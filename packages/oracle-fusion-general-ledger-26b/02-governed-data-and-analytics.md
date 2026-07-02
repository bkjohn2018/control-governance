# Governance Package: Oracle Fusion Cloud General Ledger 26B - Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Creating and Administering Analytics and Reports for Financials 26B*
> - *Subject Areas for Transactional Business Intelligence in Financials 26B*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud General Ledger 26B - data and analytics layer |
| Consumption surfaces | Financial Reporting Center, Smart View, Reports and Analytics, OTBI analyses and dashboards, Oracle Analytics Cloud (OAC) dashboards / workbooks / semantic models, scheduled reports |
| Governance objective | Establish trusted, traceable, and controlled GL metrics, reports, balances analysis, journal analytics, and reconciliation reporting |
| Primary audience | General Accounting Manager, Financial Analyst, General Accountant, Controllership, Internal Audit, BI / IT Financials Lead |
| Reference pattern | Oracle-first analytics governance using seeded GL and Financials reporting surfaces before custom extension |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Accounting and reconciliation focused, with explicit report-governance language |
| Non-goals | Replacing statutory reporting architecture, building an external GL data mart by default, or redefining core balance semantics outside approved metric governance |

---

## 1) Executive Summary

**Context.** GL reporting supports journal review, balance analysis, intercompany visibility, reconciliation, and period-close readiness. Oracle 26B already provides seeded reporting surfaces and subject areas, but governance is still needed to prevent uncontrolled formulas, improper drill paths, stale reconciliation logic, or unapproved data extracts. When governed GL content is consumed in OAC, the same approved metric, filter, drill-path, access, and change-control rules still apply.

**What this package does.** It defines the GL data and analytics governance layer: native-first reporting, canonical GL terms, KPI catalog, DQ controls, lineage expectations, issue management, and access rules for journal, balance, period-status, and reconciliation reporting.

**What is ready.** Seeded reporting surfaces and OTBI subject areas can support a strong baseline for journal backlog, balance inquiry, period status, and reconciliation reporting with limited extension.

**What remains.** Tenant-specific report catalog structure, threshold calibration, and any approved custom dashboard logic.

**What we ask of leadership.**
1. Endorse the KPI catalog in Section 7 as the approved GL monitoring baseline.
2. Require native Financial Reporting Center / OTBI assessment before custom GL analytics are approved.
3. Confirm ownership for reconciliation, report stewardship, and exception monitoring.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- GL journal, balance, period-status, intercompany, and reconciliation analytics.
- Financial Reporting Center, Smart View, OTBI, Reports and Analytics, OAC dashboards / workbooks / semantic models, and scheduled-report outputs.
- Seeded subledger-to-GL reconciliation reporting where used by GL governance.
- Approved report extensions and dashboard logic for GL monitoring.

### 2.2 Out of scope
- Detailed AP / AR / Assets operational analytics outside reconciliation use.
- External consolidation tooling beyond governed GL outputs.
- Unapproved spreadsheet exports used as shadow ledgers.

### 2.3 Objectives
1. Single canonical definition for each GL governance KPI.
2. Explicit ownership and stewardship for governed GL reports and metrics.
3. Defined drill path from balances to journals where applicable.
4. DQ and reconciliation checks for control-sensitive analytics.
5. Native-first discipline before building custom GL reporting.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **GL Analytics Review Forum** | Approve KPI definitions, thresholds, and exceptions | General Accounting Manager | Monthly |
| **Close and Reconciliation Review** | Review close blockers, reconciliation variances, and report readiness | Controller delegate | Per close |
| **Reporting Steward Session** | Maintain lineage, foldering, and access approvals | BI / IT Financials Lead | Monthly |

### 3.2 Domain ownership

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| Journal reporting | General Accounting Manager | General Accountant | BI / IT Financials Lead |
| Balance and period-status reporting | General Accounting Manager | Financial Analyst | BI / IT Financials Lead |
| Intercompany reporting | General Accounting Manager | Intercompany Accountant | BI / IT Financials Lead |
| Reconciliation reporting | Controller delegate / General Accounting Manager | Financial Analyst | BI / IT Financials Lead |

---

## 4) Policy Addendum - GL Data and Analytics

1. **DA-GL-1 Authoritative source.** Oracle Fusion GL and approved Financials reporting surfaces remain authoritative for GL journals, balances, period status, and seeded reconciliation reporting.
2. **DA-GL-2 Native first.** Financial Reporting Center, Smart View, OTBI subject areas, and seeded reports shall be assessed before custom GL dashboards or extracts are approved.
3. **DA-GL-3 Canonical metrics.** GL monitoring metrics shall use approved definitions in Section 7.
4. **DA-GL-4 Controlled drill paths.** Balance dashboards that drill to journal detail shall use approved subject-area combinations and documented filters.
5. **DA-GL-5 Controlled OAC content.** OAC workbooks, dashboards, and semantic-layer content using GL data shall inherit the same metric, drill-path, reconciliation, access, and retention controls as the source Oracle reporting assets.
6. **DA-GL-6 Controlled extracts.** GL extracts outside Oracle require approved purpose, owner, refresh, retention, and access controls.
7. **DA-GL-7 Reconciliation integrity.** Reconciliation views shall preserve source-to-output traceability and stated tolerance rules.
8. **DA-GL-8 Change control.** Report logic, account group definitions, subject-area joins, OAC semantic logic, and thresholds shall be versioned and approved.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | What journal backlog remains unapproved or unposted for the period? | Close readiness |
| Q2 | What balances and journals drive a given account for a period? | Review and investigation |
| Q3 | Are prior-period or manual journals increasing beyond tolerance? | Control and training response |
| Q4 | What period-status exceptions could block close? | Close execution |
| Q5 | Are intercompany and reconciliation items aging beyond threshold? | Remediation and escalation |
| Q6 | Where are suspense, balancing, or clearing accounts being used? | Control health |
| Q7 | Are seeded GL reports sufficient, or is a governed extension justified? | Native-first decision |

---

## 6) Business Glossary (GL Canonical Terms)

| Term | Definition | Owner | Steward | Approved synonyms | Disallowed synonyms |
|---|---|---|---|---|---|
| Journal Batch | Grouping of one or more journals sharing common posting context | General Accounting Manager | General Accountant | Batch | "Entry file" when not an import |
| Journal | Accounting entry recorded in GL | General Accounting Manager | General Accountant | Journal entry | "Transaction" when accounting-specific meaning is needed |
| Manual Journal | Journal created directly by a user in page or spreadsheet workflow | General Accounting Manager | General Accountant | User-entered journal | "Normal journal" |
| Imported Journal | Journal created through journal import from an approved source | General Accounting Manager | General Accountant | FBDI / imported journal | "System journal" when source is unclear |
| Unapproved Journal Backlog | Journal population awaiting required approval | General Accounting Manager | Financial Analyst | Approval backlog | "Pending journals" without approval qualifier |
| Unposted Journal Backlog | Approved or completed journals not yet posted | General Accounting Manager | Financial Analyst | Posting backlog | "Open journals" |
| Period Status | Open, closed, or other defined status of a fiscal period in GL | General Accounting Manager | Financial Analyst | Accounting period status | "Month status" |
| Reconciliation Variance | Unexplained difference between approved source totals and GL / subledger reporting | Controller delegate | Financial Analyst | Recon variance | "Difference" without context |
| Intercompany Aging | Age of unresolved intercompany transactions or exceptions | General Accounting Manager | Intercompany Accountant | Intercompany backlog | "Intercompany balance" |
| Suspense Usage | Amount or count of postings to suspense / balancing accounts | General Accounting Manager | Financial Analyst | Suspense-account usage | "Plug" |

---

## 7) Metric Definitions (Governed KPI Catalog)

### KPI-01 - Unapproved Journal Backlog
- **Question:** Q1
- **Formula:** Count and amount of journals awaiting required approval for the reporting period.
- **Source:** `General Ledger - Journals Real Time`.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Period-end backlog above approved tolerance escalates to controller review.

### KPI-02 - Unposted Journal Backlog
- **Question:** Q1
- **Formula:** Count and amount of completed or approved journals not yet posted.
- **Source:** `General Ledger - Journals Real Time`.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Any material aged backlog during close escalates.

### KPI-03 - Manual Journal Concentration
- **Question:** Q3
- **Formula:** Manual or spreadsheet journal volume / total journal volume.
- **Source:** `General Ledger - Journals Real Time`.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Trend monitored monthly; spikes trigger review.

### KPI-04 - Prior-Period Journal Exception Rate
- **Question:** Q3
- **Formula:** Prior-period journal count / total journal count for review window.
- **Source:** `General Ledger - Journals Real Time`.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Threshold set by close policy; exceptions reviewed individually.

### KPI-05 - Intercompany Approval / Resolution Aging
- **Question:** Q5
- **Formula:** Open intercompany transactions over threshold by age bucket.
- **Source:** `Financials Common Module - Intercompany Transactions Real Time`.
- **Owner / Steward:** General Accounting Manager / Intercompany Accountant.
- **Threshold:** >30 days triggers escalation unless approved otherwise.

### KPI-06 - Reconciliation Variance Count
- **Question:** Q5
- **Formula:** Count of reconciliation items above approved tolerance.
- **Source:** Seeded reconciliation reporting and approved variance log.
- **Owner / Steward:** Controller delegate / Financial Analyst.
- **Threshold:** Material unresolved items block final close signoff.

### KPI-07 - Open Period Exception Count
- **Question:** Q4
- **Formula:** Count of periods / ledgers with status inconsistent with close calendar.
- **Source:** `General Ledger - Period Status Real Time`.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Zero at final close.

### KPI-08 - Suspense / Balancing Account Usage
- **Question:** Q6
- **Formula:** Count and amount of journal lines using suspense, rounding, or balancing accounts.
- **Source:** `General Ledger - Journals Real Time`.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Reviewed monthly and per close.

### KPI-09 - Clearing Account Aged Balance
- **Question:** Q5
- **Formula:** Amount in approved clearing accounts past age threshold.
- **Source:** Approved balance and reconciliation reports.
- **Owner / Steward:** General Accounting Manager / Financial Analyst.
- **Threshold:** Threshold defined by account class.

### KPI-10 - GL Report Failure / Staleness Rate
- **Question:** Q7
- **Formula:** Failed or stale governed GL reports / total scheduled governed GL reports.
- **Source:** Scheduled-report monitoring and steward log.
- **Owner / Steward:** BI / IT Financials Lead / Report Steward.
- **Threshold:** Any period-close critical failure escalates same day.

---

## 8) Data Quality Controls

| ID | Rule | Critical data | Threshold | Owner | Evidence |
|---|---|---|---|---|---|
| DQ-01 | Journal source and category are populated for governed journal reporting | Source, category | 100% populated | General Accountant | Subject-area validation |
| DQ-02 | Approval-status logic is consistent with approval workflow | Approval status | 100% for governed backlog reporting | General Accounting Manager | Reconciliation to workflow |
| DQ-03 | Period and ledger filters are correctly applied | Period, ledger, COA | 100% approved filter logic | Financial Analyst | Report design review |
| DQ-04 | Balance-to-journal drill paths are documented and tested | Balance/journal relationships | 100% for governed dashboards | Report Steward | Test evidence |
| DQ-05 | Reconciliation tolerance logic is documented and current | Variance thresholds | 100% governed | Financial Analyst | Versioned rule file |
| DQ-06 | Intercompany age calculations use approved transaction dates | Transaction date | 100% approved logic | Intercompany Accountant | Report logic review |
| DQ-07 | Scheduled close reports run successfully by defined cutoff | Report freshness | 100% for critical reports | BI / IT Financials Lead | Run log |
| DQ-08 | Custom report extracts reconcile to approved native totals | Counts / amounts | Within approved tolerance | General Accounting Manager | Reconciliation record |

---

## 9) Metadata and Lineage

### 9.1 Required metadata
- Business purpose and decision use.
- Owner, steward, and technical custodian.
- Source subject area, report, or balance cube.
- Refresh / run cadence and close criticality.
- Parameters, thresholds, and approved filters.
- Review date and change history.

### 9.2 Approved subject areas
- `General Ledger - Journals Real Time`
- `General Ledger - Period Status Real Time`
- `General Ledger - Balances Real Time`
- `General Ledger - Transactional Balances Real Time`
- `General Ledger - Average Daily Balances Real Time`
- `General Ledger - Transactional Average Daily Balances Real Time`
- `Financials Common Module - Intercompany Transactions Real Time`

### 9.3 Lineage pattern
Source subject area or seeded report -> governed metric logic -> dashboard / report -> close review or management action.

---

## 10) Data Issue Management

1. Log issue with affected report, metric, period, and ledger.
2. Assess whether close, reconciliation, or approval decisions are impacted.
3. Contain by flagging the report or pausing distribution if material.
4. Remediate and revalidate before closure.

---

## 11) Sensitive Data and Access Controls

- Access to GL reporting follows least privilege and approved data access sets.
- Report folders and distribution lists must align to approved financial reporting access.
- Extracts used outside Oracle require explicit owner, retention, and storage approval.

---

## 12) Adoption and Training Notes

- Train users on the difference between balance cubes, transactional balances, and journal-detail subject areas.
- Publish approved drill-path and parameter guidance for close-critical reports.
- Review report catalog structure and stale content at least annually.

---

## 13) Deck Outline - GL Data and Analytics Briefing

1. Oracle-first reporting posture for GL
2. Canonical KPI and glossary baseline
3. Approved reporting surfaces and drill paths
4. DQ and reconciliation controls
5. Access, extracts, and report-governance decisions

---

## 14) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial GL governed data and analytics package created from Oracle 26B sources | General Accounting Manager |
