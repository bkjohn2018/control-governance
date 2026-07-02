# Governance Package: Oracle Cloud EPM Planning Modules — Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchor: Oracle Help Center, *Administering Planning Modules* — <https://docs.oracle.com/en/cloud/saas/planning-budgeting-cloud/epbca/index.html>

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Cloud EPM Planning Modules — data and analytics layer |
| Consumption surfaces | EPM Planning native forms, dashboards, infolets, Smart View, Narrative Reporting, Oracle Analytics Cloud (OAC) workbooks / dashboards / semantic models, Budgetary Control dashboards |
| Governance objective | Establish trusted, traceable, and controlled planning metrics, budget vs. actuals reporting, Capital module analytics, Projects integration reporting, and Workforce cost analytics so every KPI has a known owner, formula, lineage, and quality threshold |
| Primary audience | FP&A Director, Budget Manager, Capital Planning Manager, PMO / Project Finance Lead, Workforce Planning Manager, EPM Service Administrator, Controllership, Internal Audit |
| Reference pattern | Oracle-first EPM reporting governance built on native forms, dashboards, and subject areas before custom extension |
| Maturity (current → target) | Foundational → Defined |
| Tone | Planning-analytics focused, decision-oriented |
| Non-goals | Replicating an external data mart from EPM Planning by default; replacing native EPM dashboards without documented native gap; rebuilding Oracle Budgetary Control reporting outside approved lineage |

---

## 1) Executive Summary

**Context.** EPM Planning Modules provides strong native reporting through forms, dashboards, infolets, Smart View, and Narrative Reporting across Financials, Capital, Projects, and Workforce. Without governance, metric definitions drift between modules and teams, variance calculations conflict with source-system actuals, and custom OAC workbooks inherit uncontrolled logic. When governed planning content is promoted to OAC or Narrative Reporting, the same approved metric, lineage, access, and change-control requirements still apply.

**What this package does.** It defines the EPM Planning data and analytics governance layer: native-first reporting rule, canonical planning terms, governed KPI catalog, data quality controls, lineage requirements, issue workflow, and sensitive-data handling for planning analytics.

**What is ready.** A strong seeded reporting baseline across all four modules; governed KPI definitions for budget, forecast, variance, and Capital and Workforce analytics.

**What remains.** Tenant-specific form structure, dashboard certification, and any approved governed extensions beyond native EPM content.

**What we ask of leadership.**
1. Endorse the KPI catalog in §7 as the approved EPM Planning reporting baseline.
2. Require native EPM forms and dashboard assessment before custom OAC analytics are approved.
3. Confirm data stewardship for Capital, Projects, Workforce, and Financials planning data.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- Budget, forecast, actuals, and variance analytics across Financials, Capital, Projects, and Workforce modules.
- Native EPM Planning forms, dashboards, infolets, Smart View, and Narrative Reporting.
- Approved governed extensions to OAC workbooks, dashboards, and semantic models built on governed EPM sources.
- Budgetary Control dashboards where EPM Financials–Budgetary Control integration is active.

### 2.2 Out of scope
- Unapproved spreadsheet models used as shadow plans.
- Direct Oracle Project Management Cloud operational analytics (governed by Projects `02` bundle).
- Tax-provision or statutory-reporting analytics outside EPM Planning scope.

### 2.3 Objectives
1. Single canonical definition for every governed EPM Planning KPI.
2. Explicit owner and steward for each governed planning report or analytic asset.
3. Native-first use of EPM forms, dashboards, and subject areas before custom joins or extracts.
4. DQ controls for actuals completeness, formula consistency, and plan-version integrity.
5. Traceable lineage from Oracle source systems to EPM Planning outputs.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **EPM Planning Analytics Review Forum** | Approve KPI definitions, thresholds, and report exceptions | FP&A Director | Monthly |
| **Capital Planning Data Review** | Validate Capital KPIs, Capital-to-CapEx overlay reconciliation | Capital Planning Manager | Per planning cycle |
| **EPM Reporting Steward Session** | Maintain lineage, glossary updates, access review | EPM Service Administrator | Monthly |
| **Analytics Intake Review** | Assess native-first evidence and approve governed OAC extensions | FP&A Director + Governance Reviewer | As needed |

### 3.2 Domain ownership

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| Financials planning (P&L, balance sheet, cash flow) | FP&A Director | Budget Manager | EPM Service Administrator |
| Capital planning and CapEx budget | Capital Planning Manager | Capital steward | EPM Service Administrator |
| Projects planning and project budgets | PMO / Project Finance Lead | Project Finance steward | EPM Service Administrator |
| Workforce planning and compensation | Workforce Planning Manager | HR analytics steward | EPM Service Administrator |
| Budget revisions and Budgetary Control | Controllership | Budget Manager | EPM Service Administrator |

---

## 4) Policy Addendum — EPM Planning Data and Analytics

1. **DA-EPM-1 Authoritative source.** EPM Planning is the system of record for approved budget, forecast, and planning-version data in scope; Oracle source systems (GL, Projects, Workforce) are authoritative for actuals.
2. **DA-EPM-2 Native first.** EPM native forms, dashboards, and Narrative Reporting shall be assessed before custom OAC analytics are approved.
3. **DA-EPM-3 Canonical metrics.** Planning analytics shall use approved KPI definitions in §7; ad-hoc variance formulas outside the KPI catalog require Analytics Intake Review.
4. **DA-EPM-4 Actuals reconciliation.** Actuals displayed in EPM Planning reports shall be reconciled to the source system (GL, Projects, Workforce) before management reporting use.
5. **DA-EPM-5 Controlled OAC content.** OAC workbooks, dashboards, and semantic-layer content using EPM Planning data shall inherit the same metric, lineage, access, and change-control requirements.
6. **DA-EPM-6 Plan version control.** Only approved plan versions (Working, Current Forecast, Approved Budget) shall be published in governed reports; sandbox or personal versions shall not appear in management reports.
7. **DA-EPM-7 Change control.** Custom form logic, business-rule modifications, custom accounts, and OAC semantic logic shall be versioned and approved per SOP-01 in `01-controlled-operations.md`.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | How does current forecast compare to approved budget by entity, cost center, and period? | Budget performance, reforecast decisions |
| Q2 | What is the capital plan vs. committed spend for active investment projects? | CapEx portfolio management |
| Q3 | Where are project budgets over or under plan? | PMO intervention, project reforecast |
| Q4 | How do workforce headcount and compensation costs track against plan? | HR decision support, cost management |
| Q5 | Which budget lines have been revised, and what was the impact? | Budget revision transparency |
| Q6 | Are actuals reconciled to source systems before plan comparison is used? | Reporting reliability |
| Q7 | Where are Budgetary Control commitment or encumbrance exceptions? | Spend authority monitoring |

---

## 6) Business Glossary (EPM Planning Canonical Terms)

> Status: A = Approved · P = Proposed · D = Deprecated.

| Term | Definition | Domain | Owner | Steward | Approved synonyms | Disallowed synonyms | Status |
|---|---|---|---|---|---|---|---|
| Approved Budget | The plan version that has completed the full approval workflow and represents the authorized spending baseline | Financials | FP&A Director | Budget Manager | Budget | "Target" (when plan precision is required) | A |
| Current Forecast | The most recently approved forecast version reflecting updated expectations for the period | Financials | FP&A Director | Budget Manager | Forecast | "Revised budget" (different approval path) | A |
| Working Plan | A draft or in-process plan version not yet submitted or approved | All modules | FP&A Director | Budget Manager | Draft plan | "Budget" (when unpublished) | A |
| Budget Variance | Actual or forecast amount less approved budget amount for a given entity, account, and period | Financials | FP&A Director | Budget Manager | Variance to budget | "Gap" | A |
| Forecast Accuracy | Percentage difference between current forecast and actual result at period end | Financials | FP&A Director | Budget Manager | – | "Hit rate" | A |
| Capital Plan | The EPM Planning Capital module version of approved new investment and existing asset assumptions for the planning period | Capital | Capital Planning Mgr | Capital steward | CapEx plan | "Asset plan" (different scope) | A |
| New Capital Investment | A planned capital expenditure for a new asset or project, entered in the EPM Capital module | Capital | Capital Planning Mgr | Capital steward | – | "New spend" | A |
| Existing Asset | A capital asset currently in service whose ongoing costs, adjustments, or retirements are tracked in the EPM Capital module | Capital | Capital Planning Mgr | Capital steward | In-service asset | "Legacy asset" | A |
| Project Budget | The approved budget for a project, loaded from Oracle Project Management Cloud into EPM Projects module | Projects | Project Finance Lead | Project Finance steward | – | "Project plan" (broader) | A |
| Headcount Plan | The approved forecast of full-time equivalents by entity, grade, and period in the EPM Workforce module | Workforce | Workforce Planning Mgr | HR analytics steward | HC plan | "Staffing plan" | A |
| Workforce Push | The data-push job that transfers approved Workforce compensation and benefit costs into the Financials module | Workforce | Workforce Planning Mgr | EPM Service Admin | – | "Sync" | A |
| Budget Revision | An approved, in-cycle change to the Approved Budget routed through the Budget Revisions workflow | Financials | Controllership | Budget Manager | BR | "Reforecast" (different workflow) | A |
| Budgetary Control | The Oracle commitment-control integration that enforces budget availability before spend is committed or invoiced | Financials | Controllership | Budget Manager | Commitment control | "Encumbrance" (sub-component) | A |
| Plan Version | A named, time-stamped snapshot of planning data (e.g., Approved Budget FY26, Q3 Forecast) | All modules | FP&A Director | Budget Manager | Scenario version | "Budget copy" | A |

---

## 7) Metric Definitions (Governed KPI Catalog)

> Every KPI is mapped to module, formula, grain, owner, steward, cadence, threshold, and decision link.

### KPI-01 — Budget vs. Actuals Variance (%)
- **Question:** Q1
- **Formula:** (Actuals − Approved Budget) ÷ |Approved Budget| × 100
- **Grain:** Entity × Account × Period
- **Source:** EPM Financials forms; GL actuals loaded via Data Integration.
- **Owner / Steward:** FP&A Director / Budget Manager
- **Cadence:** Monthly.
- **Threshold:** Variance > ±5% at entity level triggers narrative. > ±10% triggers FP&A Director review.

### KPI-02 — Forecast Accuracy (%)
- **Question:** Q1
- **Formula:** 1 − |Current Forecast − Actual| ÷ |Actual| × 100 at period close.
- **Grain:** Entity × Period
- **Owner / Steward:** FP&A Director / Budget Manager
- **Cadence:** Quarterly.
- **Threshold:** < 90% accuracy triggers forecast methodology review.

### KPI-03 — Capital Plan vs. Approved Budget (%)
- **Question:** Q2
- **Formula:** (Capital Plan − Approved CapEx Budget) ÷ |Approved CapEx Budget| × 100
- **Grain:** Capital project / investment × Period
- **Source:** EPM Capital module; reconciled to CapEx overlay CXM-01.
- **Owner / Steward:** Capital Planning Manager / Capital steward
- **Cadence:** Monthly during planning cycle; aligned to CapEx overlay CXM-01 (≥ 95% reqs coded).
- **Threshold:** Variance > ±5% per investment triggers Capital Planning Manager review.

### KPI-04 — Capital Plan Coverage (%)
- **Question:** Q2
- **Formula:** Capital investments with approved `CapExInvestmentID` ÷ total capital investments × 100
- **Grain:** Investment
- **Source:** EPM Capital module; cross-ref to CapEx MDM framework MDQ-10.
- **Owner / Steward:** Capital Planning Manager / Capital steward
- **Cadence:** Per planning cycle.
- **Threshold:** 100% required before Approved Budget lock.

### KPI-05 — Project Budget Utilization (%)
- **Question:** Q3
- **Formula:** Project actuals (loaded from Project Management Cloud) ÷ Project Approved Budget × 100
- **Grain:** Project × Period
- **Owner / Steward:** Project Finance Lead / Project Finance steward
- **Cadence:** Monthly.
- **Threshold:** > 90% actuals-to-budget triggers PMO review.

### KPI-06 — Workforce Cost vs. Plan (%)
- **Question:** Q4
- **Formula:** (Workforce actuals − Workforce plan) ÷ |Workforce plan| × 100
- **Grain:** Entity × Job family × Period
- **Owner / Steward:** Workforce Planning Manager / HR analytics steward
- **Cadence:** Monthly.
- **Threshold:** > ±5% variance at entity level triggers Workforce Planning Manager review.

### KPI-07 — Headcount Plan vs. Actuals
- **Question:** Q4
- **Formula:** Approved headcount plan FTE − actual FTE headcount for period
- **Grain:** Entity × Period
- **Owner / Steward:** Workforce Planning Manager / HR analytics steward
- **Cadence:** Monthly.
- **Threshold:** > ±3 FTE at entity level triggers review.

### KPI-08 — Budget Revision Rate (%)
- **Question:** Q5
- **Formula:** Count of approved budget revisions ÷ total budget lines × 100 for the period
- **Grain:** Entity × Period
- **Owner / Steward:** Controllership / Budget Manager
- **Cadence:** Per cycle.
- **Threshold:** > 10% revision rate triggers Controllership narrative.

### KPI-09 — Actuals Reconciliation Status
- **Question:** Q6
- **Formula:** % of EPM actuals loads reconciled to source system before management reporting use
- **Grain:** Load × Period
- **Owner / Steward:** EPM Service Administrator / Budget Manager
- **Cadence:** Per load.
- **Threshold:** 100%; failures block plan comparison reporting (DQ-03).

### KPI-10 — Budgetary Control Exception Count
- **Question:** Q7
- **Formula:** Count of Budgetary Control transactions with insufficient-funds or override status
- **Grain:** Entity × Period
- **Owner / Steward:** Controllership / Budget Manager
- **Cadence:** Weekly during active spend periods.
- **Threshold:** Any override triggers Controllership review within 2 business days.

---

## 8) Data Quality Controls

| ID | Rule | Object | Check method | Threshold | Owner | Evidence |
|---|---|---|---|---|---|---|
| DQ-01 | All active plan versions have named owner and approved status | Plan version | Version status review | 100% | FP&A Director | Version catalog |
| DQ-02 | Capital investments have valid `CapExInvestmentID` cross-reference | Capital investment | Cross-ref table check | 100% (KPI-04) | Capital steward | MDM cross-ref |
| DQ-03 | Actuals loads reconcile to GL / source system before reporting use | Actuals | Reconciliation report | 100% (KPI-09) | EPM Service Admin | Load recon log |
| DQ-04 | Workforce push-data job completes without errors before Financials lock | Workforce push | Job log review | 100% | EPM Service Admin | Push log |
| DQ-05 | Project actuals match Oracle Project Management Cloud totals | Project actuals | Integration reconciliation | ≤ 0.1% variance | Project Finance steward | Reconciliation |
| DQ-06 | No sandbox or draft plan versions appear in published governance reports | Plan version | Report version tag audit | 100% | Budget Manager | Report audit |
| DQ-07 | Budget revision approvals are complete before Budgetary Control submission | Budget revision | Workflow status check | 100% | Controllership | Approval history |
| DQ-08 | Reporting period in EPM matches source-system period before actuals comparison | Period alignment | Period cross-check | 100% | EPM Service Admin | Period log |

---

## 9) Metadata and Lineage (Key Patterns)

| Report / metric | Source(s) | Transformation | Owner | Steward | Freshness | Access |
|---|---|---|---|---|---|---|
| Budget vs. actuals dashboard | EPM Financials forms; GL actuals via Data Integration | EPM calculation engine; no custom joins | FP&A Director | Budget Manager | Per Data Integration load | Planning users; Controllership |
| Capital plan report | EPM Capital module forms | Capital-to-Financials push; no manual override | Capital Planning Mgr | Capital steward | Per Capital cycle | Capital, FP&A |
| Project budget vs. actuals | EPM Projects module; Oracle Project Mgmt Cloud | Projects integration job | Project Finance Lead | Project Finance steward | Per integration run | PMO, FP&A |
| Workforce cost report | EPM Workforce forms; HR source data | Workforce calculation + push to Financials | Workforce Planning Mgr | HR analytics steward | Per Workforce cycle | HR, FP&A |
| OAC extensions | EPM Planning data extract | Approved extension per Analytics Intake Policy | Analytics owner | EPM Service Admin | Per approved schedule | Restricted to governed users |

---

## 10) Issue Management Procedure (Analytics Issues)

1. Log the issue with module, metric, plan version, period, and impact description.
2. Classify severity: S1 (blocks management reporting or Budgetary Control), S2 (affects material metric), S3 (localized or non-material).
3. Assign owner and target date.
4. Remediate per domain SOP; rerun reconciliation or recalculation where needed.
5. Recurring issues feed back into glossary, KPI definitions, DQ thresholds, or load-process controls.

| Severity | Response target | Escalation |
|---|---|---|
| S1 | < 1 business day | FP&A Director + Controllership |
| S2 | < 3 business days | FP&A Director |
| S3 | < 10 business days | Budget Manager |

---

## 11) Adoption and Training Notes

- **FP&A analysts:** Two-hour onboarding on canonical KPIs, approved plan versions, and native-first reporting discipline.
- **Capital steward:** Training on `CapExInvestmentID` cross-reference requirement and Capital module DQ controls (DQ-02).
- **EPM Service Administrator:** Training on data-load reconciliation requirements (DQ-03) and version-control discipline (DQ-06).
- **Controllership:** Orientation on Budgetary Control integration, Budget Revision workflow (DQ-07), and KPI-10 exception monitoring.

---

## 12) Document Control

| Field | Value |
|---|---|
| Document title | Oracle Cloud EPM Planning Modules — Governed Data and Analytics |
| Version | 1.0 Draft |
| Status | Draft reference package |
| Owner | FP&A Director (to be confirmed) |
| Approval authority | EPM Planning Analytics Review Forum |
| Review cadence | Annual or upon material module, metric, or regulatory change |
| Related operations package | `01-controlled-operations.md` |
| Related AI package | `03-governed-ai.md` |
