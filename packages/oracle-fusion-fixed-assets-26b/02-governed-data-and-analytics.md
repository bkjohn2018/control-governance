# Governance Package: Oracle Fusion Cloud Fixed Assets 26B - Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Creating and Administering Analytics and Reports for Financials 26B*
> - *Subject Areas for Transactional Business Intelligence in Financials 26B*
> - *Using Assets 26B*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Fixed Assets 26B - data and analytics layer |
| Consumption surfaces | Asset Inquiry, predefined reports, OTBI analyses, Reports and Analytics, Financial Reporting Center where applicable, Oracle Analytics Cloud (OAC) dashboards / workbooks / semantic models |
| Governance objective | Establish trusted, traceable, and controlled fixed-assets balances, depreciation, transaction, and reconciliation reporting |
| Primary audience | Asset Accounting Manager, Asset Accountant, Financial Analyst, Internal Audit, BI / IT Financials Lead |
| Reference pattern | Oracle-first asset reporting using seeded OTBI subject areas, reports, and extract freshness controls |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Accounting, reconciliation, and lifecycle focused |
| Non-goals | Building a shadow asset register outside Oracle or replacing seeded asset and accounting reports without a documented gap |

---

## 1) Executive Summary

**Context.** Fixed Assets 26B provides rich native reporting for asset balances, depreciation, and transactions, plus adjacent reconciliation and accounting review capability. Governance is needed to ensure extract-backed OTBI subject areas remain fresh, lifecycle definitions stay consistent, and reporting supports close, retirement, and asset-monitoring decisions without uncontrolled exports or local logic drift. When certified asset content is promoted into OAC, those same freshness, lineage, access, and change-control requirements continue to apply.

**What this package does.** It defines the Fixed Assets data and analytics governance layer: native-first reporting, canonical terms, governed KPI catalog, DQ controls, lineage requirements, issue management, and access expectations for asset reporting.

**What is ready.** A strong seeded reporting baseline for balances, depreciation, transactions, and asset inquiry, plus clear reporting dependencies such as `Extract Asset Reporting Data`.

**What remains.** Tenant-specific dashboard certification, tolerance thresholds, and any approved governed extensions beyond seeded subject areas.

**What we ask of leadership.**
1. Endorse the KPI catalog and DQ baseline in this package.
2. Require OTBI extract freshness and reconciliation checks before using governed Fixed Assets dashboards.
3. Confirm report stewardship and close-review ownership.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- Asset balances, depreciation, transaction, retirement, and reconciliation reporting.
- Asset Inquiry, seeded reports, and OTBI subject areas for Fixed Assets.
- Approved extracts or governed extensions for fixed-asset decision support, including OAC dashboards, workbooks, and semantic-layer content built on governed asset sources.

### 2.2 Out of scope
- Unapproved spreadsheet asset ledgers.
- Maintenance planning and procurement receiving analytics outside the asset reporting boundary.
- Tax or valuation policy design beyond approved reporting definitions.

### 2.3 Objectives
1. Single canonical definition for governed asset-reporting metrics.
2. Explicit owner and steward for asset dashboards, reports, and extracts.
3. Native-first use of seeded OTBI and report content.
4. DQ and freshness controls for extract-backed subject areas.
5. Traceable lineage from Oracle asset sources to reporting outputs.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **Assets Analytics Review Forum** | Approve KPI definitions, thresholds, and report exceptions | Asset Accounting Manager | Monthly |
| **Assets Close Review** | Review close-critical variances and report readiness | Controller delegate / Asset Accounting Manager | Per close |
| **Reporting Steward Session** | Maintain lineage, extract-freshness monitoring, and access review | BI / IT Financials Lead | Monthly |

### 3.2 Domain ownership

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| Asset balances reporting | Asset Accounting Manager | Financial Analyst | BI / IT Financials Lead |
| Depreciation reporting | Asset Accounting Manager | Asset Accountant | BI / IT Financials Lead |
| Asset transaction reporting | Asset Accounting Manager | Asset Accountant | BI / IT Financials Lead |
| Reconciliation and close reporting | Asset Accounting Manager | Financial Analyst | BI / IT Financials Lead |

---

## 4) Policy Addendum - Fixed Assets Data and Analytics

1. **DA-FA-1 Authoritative source.** Oracle Assets remains the system of record for in-scope asset lifecycle data and seeded reporting.
2. **DA-FA-2 Native first.** Asset Inquiry, seeded reports, and approved OTBI subject areas shall be assessed before custom asset dashboards or extracts are approved.
3. **DA-FA-3 Canonical metrics.** Fixed Assets governance reporting shall use approved KPI definitions in Section 7.
4. **DA-FA-4 Extract freshness.** OTBI reports using `FA_BALANCES_EXTRACT`, `FA_DEPRN_EXTRACT`, or `FA_TRX_EXTRACT` shall only be used after freshness checks pass.
5. **DA-FA-5 Controlled OAC content.** OAC workbooks, dashboards, and semantic-layer content using asset data shall inherit the same extract-freshness, reconciliation, access, and retention rules as the source reporting assets.
6. **DA-FA-6 Reconciliation integrity.** Asset and depreciation reporting used for close shall preserve source-to-output traceability and approved tolerance rules.
7. **DA-FA-7 Change control.** Report logic, thresholds, extract schedules, OAC semantic logic, and certified dashboard content shall be versioned and approved.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | Are additions and source transactions posting cleanly? | Addition control |
| Q2 | What is the current cost, reserve, and net book value by asset / book / period? | Balance review |
| Q3 | Are depreciation results current and complete before close? | Close readiness |
| Q4 | Which assets, transfers, or retirements need investigation? | Lifecycle exception review |
| Q5 | Are asset-to-GL or source-to-asset reconciliations within tolerance? | Reconciliation and close |
| Q6 | Is OTBI asset reporting current enough for governance use? | Reporting reliability |

---

## 6) Business Glossary (Fixed Assets Canonical Terms)

| Term | Definition | Owner | Steward | Approved synonyms | Disallowed synonyms |
|---|---|---|---|---|---|
| Asset Book | Governing book that controls asset accounting behavior | Asset Accounting Manager | Asset Accountant | Corporate book / tax book | "Ledger" when book precision is required |
| Mass Additions | Source-line staging area for new asset additions | Asset Accounting Manager | Asset Accountant | Additions queue | "Inbox" |
| Depreciation Period | Asset period used for depreciation reporting and control | Asset Accounting Manager | Financial Analyst | Asset depreciation period | "Month" without asset-book context |
| Net Book Value | Cost less accumulated depreciation / applicable reserve | Asset Accounting Manager | Financial Analyst | NBV | "Current value" |
| Capitalized Cost | Asset cost transferred and capitalized in Oracle Assets | Asset Accounting Manager | Asset Accountant | Capitalized amount | "Booked cost" |
| Assigned CIP Cost | Cost assigned to an asset but not yet transferred / capitalized | Asset Accounting Manager | Asset Accountant | CIP cost | "Open construction" |
| Retirement | Disposal transaction removing asset value or units | Asset Accounting Manager | Asset Accountant | Asset disposal | "Write-off" when broader accounting meaning differs |
| Reinstatement | Transaction reversing or restoring retirement effect | Asset Accounting Manager | Asset Accountant | Reversal of retirement | "Undo" |
| Extract Freshness | Status of required reporting extracts behind OTBI subject areas | BI / IT Financials Lead | Report Steward | Reporting freshness | "Dashboard refresh" |

---

## 7) Metric Definitions (Governed KPI Catalog)

### KPI-01 - Mass Additions Exception Rate
- **Question:** Q1
- **Formula:** Additions in error / total addition lines reviewed.
- **Source:** Additions queue / posting output.
- **Owner / Steward:** Asset Accounting Manager / Asset Accountant.
- **Threshold:** Sustained >2% triggers remediation.

### KPI-02 - Unposted Additions Aging
- **Question:** Q1
- **Formula:** Count of addition lines in New / On Hold / Post status beyond threshold.
- **Source:** Additions queue review.
- **Owner / Steward:** Asset Accounting Manager / Asset Accountant.
- **Threshold:** Threshold by book and close cycle.

### KPI-03 - Depreciation Close Readiness
- **Question:** Q3
- **Formula:** Books / periods with incomplete or failed depreciation process.
- **Source:** Depreciation run monitoring.
- **Owner / Steward:** Asset Accounting Manager / Financial Analyst.
- **Threshold:** Zero for final close.

### KPI-04 - Asset Balance Reconciliation Variance
- **Question:** Q5
- **Formula:** Unexplained variance between approved asset reporting and GL / SLA totals.
- **Source:** Reconciliation package and approved reports.
- **Owner / Steward:** Asset Accounting Manager / Financial Analyst.
- **Threshold:** Material unresolved variance escalates.

### KPI-05 - Retirement Processing Aging
- **Question:** Q4
- **Formula:** Open or incomplete retirement transactions beyond threshold.
- **Source:** Retirement queue / transaction review.
- **Owner / Steward:** Asset Accounting Manager / Asset Accountant.
- **Threshold:** Threshold by close and governance policy.

### KPI-06 - Physical Inventory Match Rate
- **Question:** Q4
- **Formula:** Fully matched inventory assets / total inventoried assets.
- **Source:** Physical inventory review outputs.
- **Owner / Steward:** Asset Accounting Manager / Financial Analyst.
- **Threshold:** Threshold set by asset-governance policy.

### KPI-07 - Extract Freshness Compliance
- **Question:** Q6
- **Formula:** Critical asset reports meeting extract freshness SLA / total critical asset reports.
- **Source:** Extract scheduler / steward log.
- **Owner / Steward:** BI / IT Financials Lead / Report Steward.
- **Threshold:** 100% for close-critical reporting.

### KPI-08 - Approval Cycle Time for Asset Transactions
- **Question:** Q1, Q4
- **Formula:** Average time from submission to approval for governed asset transactions.
- **Source:** Approval workflow / transaction groups.
- **Owner / Steward:** Asset Accounting Manager / Asset Accountant.
- **Threshold:** Threshold by transaction class.

---

## 8) Data Quality Controls

| ID | Rule | Critical data | Threshold | Owner | Evidence |
|---|---|---|---|---|---|
| DQ-01 | Asset reporting extracts run successfully before report use | Extract timestamps | 100% for critical reports | BI / IT Financials Lead | Extract run log |
| DQ-02 | Asset category, book, and location fields are present for governed reporting | Category, book, location | 100% populated where required | Asset Accountant | Report validation |
| DQ-03 | Depreciation subject-area data reflects current approved period | Depreciation period | 100% current at close | Financial Analyst | Close review |
| DQ-04 | Retirement reports include required transaction and gain/loss fields | Retirement details | 100% populated where applicable | Asset Accountant | Retirement report review |
| DQ-05 | Asset transaction subject-area logic is versioned and approved | Report logic | 100% governed | Report Steward | Change log |
| DQ-06 | Reconciliation reports use approved tolerance and mapping rules | Tolerance logic | 100% approved | Financial Analyst | Reconciliation package |
| DQ-07 | Certified dashboards reconcile to approved Oracle totals | Counts / amounts | Within approved tolerance | Asset Accounting Manager | Validation record |

---

## 9) Metadata and Lineage

### 9.1 Required metadata
- Business purpose and close criticality.
- Owner, steward, and technical custodian.
- Subject area, report family, or Asset Inquiry source.
- Refresh / extract cadence and failure handling.
- Approved thresholds, filters, and review date.

### 9.2 Approved subject areas
- `Fixed Assets - Asset Balances Real Time`
- `Fixed Assets - Asset Depreciation Real Time`
- `Fixed Assets - Asset Transactions Real Time`
- Adjacent reconciliation subject areas as approved for GL / SLA review.

### 9.3 Lineage pattern
Oracle asset transaction or balance source -> approved extract-backed subject area or report -> governed metric logic -> close or governance review output.

---

## 10) Data Issue Management

1. Log issue with book, report, metric, and period impacted.
2. Assess whether close, depreciation, or retirement decisions are affected.
3. Contain by flagging report or pausing distribution where material.
4. Remediate and validate before closure.

---

## 11) Sensitive Data and Access Controls

- Asset reporting follows approved Oracle Financials data security.
- Access to financial and source-line detail requires least-privilege review.
- Any extracts outside Oracle require explicit owner, purpose, cadence, and retention control.

---

## 12) Adoption and Training Notes

- Train users on the dependency between OTBI asset reports and extract freshness.
- Publish the difference between balances, depreciation, and transaction subject areas.
- Review report catalog sprawl and unofficial asset extracts at least annually.

---

## 13) Deck Outline - Fixed Assets Data and Analytics Briefing

1. Oracle-first asset reporting posture
2. Canonical KPI and glossary baseline
3. Extract freshness and DQ controls
4. Reconciliation and close-reporting expectations
5. Stewardship and leadership decisions

---

## 14) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial Fixed Assets governed data and analytics package created from Oracle sources | Asset Accounting Manager |
