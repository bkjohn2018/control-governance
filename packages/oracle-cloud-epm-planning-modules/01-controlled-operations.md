# Governance Package: Oracle Cloud EPM Planning Modules — Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchor: Oracle Help Center, *Administering Planning Modules* — <https://docs.oracle.com/en/cloud/saas/planning-budgeting-cloud/epbca/index.html>

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Cloud EPM Planning Modules |
| Modules in scope | Financials, Capital, Projects, Workforce, and application foundation (dimensions, data integration, approval workflows, period lock) |
| Business function | Enterprise planning, budgeting, and forecasting; capital investment planning; project budget governance; workforce cost planning; Budgetary Control integration |
| Governance objective | Establish controlled, auditable, and repeatable EPM Planning operations for application configuration, planning-cycle execution, Capital and Projects module governance, Workforce planning, data integration, approval workflows, and period lock |
| Primary audience | EPM Service Administrator, FP&A Director, Budget Manager, Capital Planning Manager, PMO / Project Finance Lead, Workforce Planning Manager, Controllership, Internal Audit |
| Reference pattern | Oracle-native EPM Planning operating model with explicit module configuration control, cycle-discipline, approval workflow enforcement, and evidence retention |
| Maturity (current → target) | Foundational → Defined |
| Tone | Planning-control focused; ISO 9001-inspired documentation discipline; mandatory verbs (`shall`, `must`) reserved for policy and control statements |
| Non-goals | Detailed Oracle configuration scripts; subledger operational process design (owned by AP, Projects, Assets domain bundles); statutory filing; tax provision design |

---

## 1) Executive Summary

**Context.** Oracle Cloud EPM Planning Modules provides integrated driver-based planning across Financials, Capital, Projects, and Workforce. Each module ships with predefined dimensions, forms, business rules, and dashboards that must be governed before they can be trusted as authoritative budget and forecast sources. Without a controlled operating layer, plan integrity weakens: dimension changes break history, unapproved data loads overwrite actuals, Capital plans detach from project execution, and Workforce costs drift from Financials targets.

**What this package does.** It defines the controlled operating layer for EPM Planning Modules: policy rules, process stages, SOPs for the highest-risk operations per module, a COSO-style control matrix, RACI, evidence requirements, and issue routing.

**What is ready.** Application foundation governance; Capital module controls (new investment and existing asset management); Projects module integration controls; Workforce-to-Financials synchronization controls; planning-cycle and period-lock discipline; evidence and records requirements.

**What remains.** Tenant-specific dimension structures, approval hierarchy thresholds, Budgetary Control configuration, and module-specific close-calendar tailoring after implementation review.

**What we ask of leadership.**
1. Endorse the policy addendum in §2.
2. Confirm named owners for each active module (§5 RACI).
3. Approve planning-cycle cadence, period-lock authority, and Budgetary Control integration scope.

---

## 2) Policy Addendum — EPM Planning Modules Controlled Operations

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for Oracle Cloud EPM Planning Modules application configuration, module enablement, data integration, planning-cycle execution, approval workflows, and period lock.

### 2.2 Scope
- In scope: application creation and module enablement; dimension and data-model governance; data integration and load validation; Financials, Capital, Projects, and Workforce module planning operations; approval and review workflows; Budget Revisions and Budgetary Control integration; period lock.
- Out of scope: Oracle Project Management Cloud execution SOPs (owned by Projects domain bundle); AP, AR, and Assets subledger operations; statutory filing; tax provision process.

### 2.3 Policy Rules (mandatory)
1. **EPM-1 Controlled application configuration.** Application creation, module enablement, dimension-model changes, custom accounts, drivers, and business-rule modifications shall be approved and documented before deployment to production.
2. **EPM-2 Data integration discipline.** Actuals, workforce data, project actuals, and capital actuals shall enter EPM Planning only through approved data integration jobs or load processes with validation review before plan calculations are run.
3. **EPM-3 Capital module governance.** Capital investment requests, asset assumptions, retirement plans, and existing-asset adjustments shall route through the Capital module workflow and require named owner review before inclusion in the plan.
4. **EPM-4 Projects module governance.** Project budgets, forecasts, and actuals loaded from Oracle Project Management Cloud shall be reviewed for completeness and reconciled against approved project scope before rollup to Financials.
5. **EPM-5 Workforce module governance.** Headcount plans, salary and benefit assumptions, and Workforce-to-Financials pushes shall be reviewed and approved by the Workforce Planning Manager before consolidation into the budget.
6. **EPM-6 Approval workflow enforcement.** Where approval workflows are configured, plans, budget revisions, and forecast submissions shall complete required approval before the planning period is locked.
7. **EPM-7 Budgetary Control alignment.** Where EPM Planning Financials is integrated with Oracle Budgetary Control, approved budget versions shall be submitted to Budgetary Control only after sign-off by Controllership; budget revisions shall route through the approved revision workflow.
8. **EPM-8 Period lock discipline.** Planning periods shall be locked only after approval workflows are complete, data-push jobs have run, and required reviews are signed off. Unlocking a closed period requires documented approval.
9. **EPM-9 Evidence retention.** Application-change records, data-load logs, approval histories, push-data job results, and period-lock records shall be retained in governed locations.
10. **EPM-10 Exception routing.** Failed data loads, rule errors, workflow bypasses, and period-lock overrides shall be logged with owner, impact, and remediation target date.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Dimension or metadata change during active cycle | EPM Service Administrator + FP&A Director | Through planning cycle |
| Data load outside approved integration path | Budget Manager + EPM Service Administrator | Per load, with post-load validation |
| Unlock closed planning period | FP&A Director + Controllership | Per period only |
| Budgetary Control budget revision bypass | Controllership delegate | Per revision, documented |
| Capital or Workforce plan override outside workflow | Capital Planning Mgr or Workforce Planning Mgr | Per event, documented |

---

## 3) High-Level Governance Process — EPM Planning Modules

```text
[ Enterprise Strategy and Capital Allocation Decision ]
                |
                v
(P1) Application Foundation and Module Configuration
                |
                v
(P2) Data Integration and Actuals Load Validation
                |
                v
(P3) Planning Cycle Launch (Financials, Capital, Projects, Workforce)
                |
        ┌───────┼───────────────────┐
        v       v                   v
   (P3a)       (P3b)             (P3c)
  Capital    Projects           Workforce
  Module     Module             Module
  Planning   Planning           Planning
        └───────┼───────────────────┘
                v
(P4) Plan Review, Approval Workflow, and Consolidation
                |
                v
(P5) Financials Rollup and Budgetary Control Submission
                |
                v
(P6) Budget Revision Management
                |
                v
(P7) Forecast Refresh Cycles
                |
                v
(P8) Period Lock and Evidence Retention
```

### 3.1 Process control points (CP)

| ID | Process step | Control point | EPM enforcement |
|---|---|---|---|
| CP-01 | Application Foundation | Module enablement, dimensions, and rules are approved before production | Application design record; change control |
| CP-02 | Data Integration | Actuals loads are complete, reconciled, and validated before plan runs | Data Integration job log; validation report |
| CP-03a | Capital Planning | Capital investment assumptions, retirement plans, and asset adjustments are owned and reviewed | Capital module workflow; Capital Planning Mgr review |
| CP-03b | Projects Planning | Project budgets and actuals from Project Management Cloud are reconciled before Financials rollup | Projects integration log; Project Finance Lead review |
| CP-03c | Workforce Planning | Headcount and compensation assumptions are approved before Workforce-to-Financials push | Workforce approval workflow; Workforce Planning Mgr signoff |
| CP-04 | Plan Review and Approval | Plans complete approval workflow before period lock | Approval workflow history |
| CP-05 | Budgetary Control Submission | Budget version is signed off by Controllership before submission | Controllership sign-off record |
| CP-06 | Budget Revision | Revisions route through approved workflow with impact review | Revision approval history |
| CP-07 | Forecast Refresh | Forecast cycles are run on approved schedule with actuals reconciled | Forecast run log; actuals validation |
| CP-08 | Period Lock | Periods are locked only after approvals and reviews are complete | Lock record; sign-off |

### 3.2 Process owners

- **End-to-end EPM Planning owner:** FP&A Director
- **P1 owner:** EPM Service Administrator
- **P2 owner:** EPM Service Administrator + FP&A Director
- **P3a owner:** Capital Planning Manager
- **P3b owner:** PMO / Project Finance Lead
- **P3c owner:** Workforce Planning Manager
- **P4 / P5 owner:** FP&A Director + Controllership
- **P6 / P7 owner:** Budget Manager
- **P8 owner:** FP&A Director

---

## 4) Standard Operating Procedures (SOPs)

> Each SOP follows: Objective · Scope · Roles · Steps · Evidence · Exceptions.

### SOP-01: Govern Application and Module Configuration
- **Objective:** Ensure module enablement, dimension changes, custom accounts, drivers, and business rules are approved before production deployment.
- **Roles:** EPM Service Administrator, FP&A Director.
- **Steps:**
  1. Document requested configuration change (module, dimension, rule, or account).
  2. Assess downstream impact on existing forms, business rules, and data loads.
  3. Obtain approval per change-control authority.
  4. Implement in non-production; validate before promoting to production.
  5. Retain approved change record and implementation log.
- **Evidence:** Change request, approval record, implementation log.

### SOP-02: Execute and Validate Data Integration
- **Objective:** Ensure actuals, workforce data, project actuals, and capital actuals are complete and reconciled before plan calculations run.
- **Roles:** EPM Service Administrator, FP&A Director, module owners.
- **Steps:**
  1. Run approved Data Integration job or load process for the period.
  2. Review job status, error log, and reconciliation report.
  3. Investigate and correct mapping, intersection, or source-data failures.
  4. Confirm actuals balance to source ledger or domain system before releasing for planning.
  5. Retain load log and reconciliation evidence.
- **Evidence:** Data Integration job log, error report, reconciliation record.

### SOP-03: Manage Capital Module Planning Cycle
- **Objective:** Govern new capital investment requests and existing-asset adjustments through the Capital module with owner accountability.
- **Roles:** Capital Planning Manager, EPM Service Administrator, FP&A Director.
- **Steps:**
  1. Open Capital planning cycle per approved calendar.
  2. Review and validate new capital investment assumptions (cost, timing, useful life, asset category).
  3. Review existing-asset adjustments and planned retirements.
  4. Route material capital items through approval workflow.
  5. Push capital plan to Financials after Capital Planning Manager sign-off.
  6. Reconcile Capital totals to CapEx budget in the overlay (`CapExInvestmentID` cross-reference).
- **Evidence:** Capital plan version, approval record, push-data log, reconciliation to CapEx overlay CXM-01.
- **Link:** [CapEx Lifecycle Governance Overlay §3.2 (S1–L5)](../../architecture/capex-lifecycle-governance-overlay.md); [CapEx MDM Framework §4.3 L5](../../architecture/capex-master-data-management-framework.md).

### SOP-04: Manage Projects Module Planning Cycle
- **Objective:** Govern project budget, forecast, and actuals loading from Oracle Project Management Cloud with reconciliation before Financials rollup.
- **Roles:** PMO / Project Finance Lead, EPM Service Administrator, FP&A Director.
- **Steps:**
  1. Export project budgets from Oracle Project Management Cloud using approved integration job.
  2. Review import completeness — all active projects, correct period, approved budget version.
  3. Load project actuals and reconcile to Oracle Project Management actuals report.
  4. Investigate variances before releasing project data to Financials.
  5. Retain integration job log and reconciliation record.
- **Evidence:** Integration job log, actuals reconciliation, completeness check.

### SOP-05: Manage Workforce Module Planning Cycle
- **Objective:** Govern headcount and compensation planning with approved assumptions before Workforce-to-Financials push.
- **Roles:** Workforce Planning Manager, HR delegate, FP&A Director.
- **Steps:**
  1. Open Workforce planning cycle; confirm employee master data is current.
  2. Review headcount plan and compensation assumptions (salary, benefits, taxes).
  3. Run Workforce calculation and review exceptions.
  4. Obtain Workforce Planning Manager approval before push to Financials.
  5. Execute push-data job and confirm Financials workforce lines update correctly.
- **Evidence:** Workforce plan version, approval record, push-data log.

### SOP-06: Execute Plan Review, Approval, and Consolidation
- **Objective:** Ensure all module plans complete approval workflow and consolidate correctly before period lock.
- **Roles:** FP&A Director, Budget Manager, Controllership.
- **Steps:**
  1. Confirm Capital, Projects, and Workforce push-data jobs are complete.
  2. Review Financials forms and dashboards for completeness and reasonableness.
  3. Route plan through configured approval workflow.
  4. Obtain Controllership sign-off for Budgetary Control submission where applicable.
  5. Document unresolved variances before lock.
- **Evidence:** Approval workflow history, review sign-off, variance log.

### SOP-07: Manage Budget Revisions and Budgetary Control
- **Objective:** Govern in-cycle budget revisions with impact assessment and approved submission to Budgetary Control.
- **Roles:** Budget Manager, FP&A Director, Controllership.
- **Steps:**
  1. Identify and document the revision request (scope, amount, impacted periods).
  2. Route through Budget Revisions workflow with designated approver.
  3. Upon approval, submit revised budget version to Budgetary Control.
  4. Confirm budget update reflects in commitment-control checks.
- **Evidence:** Revision request, approval record, Budgetary Control submission log.

### SOP-08: Lock Planning Period and Retain Evidence
- **Objective:** Lock completed planning periods with full evidence after all approvals, data pushes, and reviews are complete.
- **Roles:** FP&A Director, EPM Service Administrator.
- **Steps:**
  1. Confirm approval workflows are closed and no material variances are open.
  2. Confirm all push-data jobs (Workforce, Capital, Projects) have completed successfully.
  3. Obtain FP&A Director sign-off.
  4. Lock period in EPM Planning application.
  5. Archive lock record and supporting evidence.
- **Evidence:** Pre-lock checklist, push-data log, sign-off record, lock confirmation.

---

## 5) RACI — EPM Planning Modules Operating Roles

| Governance activity | FP&A Director | Budget Manager | Capital Planning Mgr | PMO / Project Finance Lead | Workforce Planning Mgr | EPM Service Admin | Controllership |
|---|---|---|---|---|---|---|---|
| Application configuration control | A | I | I | I | I | **R** | C |
| Data integration and actuals validation | A | C | C | C | C | **R** | C |
| Capital module cycle and workflow | C | C | **R/A** | I | I | C | C |
| Projects integration and reconciliation | C | C | I | **R/A** | I | C | C |
| Workforce cycle, push, and approval | A | I | I | I | **R/A** | C | I |
| Plan review and approval workflow | **A** | R | C | C | C | C | C |
| Budgetary Control submission | C | C | I | I | I | I | **R/A** |
| Budget revision workflow | C | **R** | C | C | I | I | **A** |
| Period lock authority | **A** | R | I | I | I | C | C |
| Issue and exception routing | **A** | R | R | R | R | R | C |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Approved application and module configuration | Unauthorized dimension or rule changes corrupt plan | Preventive | EPM Service Admin | FP&A Director | Per change | Change record | SOP-01 / CP-01 |
| C-02 | Data load completeness and reconciliation | Plan runs on stale or incomplete actuals | Preventive | EPM Service Admin | FP&A Director | Per load | Load log + recon | SOP-02 / CP-02 |
| C-03 | Capital plan owner review | Capital assumptions lack accountability | Preventive | Capital Planning Mgr | FP&A Director | Per cycle | Approval record | SOP-03 / CP-03a |
| C-04 | Projects actuals reconciliation | Project costs misstate Financials | Detective | Project Finance Lead | FP&A Director | Per cycle | Reconciliation | SOP-04 / CP-03b |
| C-05 | Workforce approval before push | Unapproved headcount costs enter Financials | Preventive | Workforce Planning Mgr | FP&A Director | Per cycle | Approval record | SOP-05 / CP-03c |
| C-06 | Approval workflow before lock | Unreviewed plans are locked | Preventive | FP&A Director | Controllership | Per period | Workflow history | SOP-06 / CP-04 |
| C-07 | Budgetary Control sign-off | Budget submitted without Controllership review | Preventive | Controllership | FP&A Director | Per submission | Sign-off record | SOP-07 / CP-05 |
| C-08 | Budget revision approval | Unauthorized revisions alter committed budget | Preventive | FP&A Director | Controllership | Per revision | Revision approval | SOP-07 / CP-06 |
| C-09 | Period lock completeness check | Lock before all reviews and pushes complete | Preventive | FP&A Director | EPM Service Admin | Per period | Pre-lock checklist | SOP-08 / CP-08 |
| C-10 | Exception and error log | Data failures or workflow bypasses go untracked | Detective | FP&A Director | Internal Audit | Weekly during cycle | Exception log | EPM-10 |

---

## 7) Issue Management Procedure

1. Log the issue with module, period, scenario, amount, and impact description.
2. Classify severity and contain if plan integrity or Budgetary Control submission is at risk.
3. Assign remediation owner and target date.
4. Validate resolution; confirm plan recalculation or re-push is complete before closure.

| Severity | Example | Response target |
|---|---|---|
| S1 | Data load overwrites approved actuals; unauthorized period unlock; Budgetary Control submission with unreviewed budget | Same business day |
| S2 | Capital or Workforce push fails without detection; approval workflow bypassed; plan drift > materiality threshold | 2 business days |
| S3 | Minor mapping or form issue; notification failure; non-material variance | 5 business days |

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Application configuration and change record | Prove approved design | EPM Service Administrator | Life of application + 7 years |
| Data Integration job log and reconciliation | Prove actuals completeness | EPM Service Administrator | 7 years |
| Capital plan version and approval | Prove capital planning control | Capital Planning Manager | 7 years |
| Projects integration log and reconciliation | Prove project budget accuracy | Project Finance Lead | 7 years |
| Workforce plan version and push log | Prove workforce cost governance | Workforce Planning Manager | 7 years |
| Approval workflow history | Prove plan authorization | FP&A Director | 7 years |
| Budget revision approval | Prove revision control | Controllership | 7 years |
| Period lock record and pre-lock checklist | Prove close governance | FP&A Director | 7 years |

---

## 9) Adoption and Training Notes

- EPM Service Administrator requires training on change-control discipline for dimension and rule changes; changes in non-production with promotion gate.
- Capital Planning Manager and PMO leads require orientation on Capital module workflow, `CapExInvestmentID` cross-reference requirement (MDM framework §3.3), and reconciliation to the CapEx governance overlay.
- Budget Managers require training on Budget Revisions workflow and Budgetary Control integration constraints.
- All planners require training on approved data-push timing relative to period lock; data-push timing is a close-readiness prerequisite.

---

## 10) Deck Outline — EPM Planning Modules Controlled Operations Briefing

1. Why EPM Planning needs explicit governance beyond Oracle configuration
2. Module map: Financials, Capital, Projects, Workforce — and where they connect
3. Data integration and actuals governance as the foundation for trusted plans
4. Capital module: connecting EPM plans to CapEx lifecycle governance
5. Approval, Budgetary Control, and period-lock control model
6. Leadership decisions: module owners, cycle calendar, exception authority

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-27 | Initial EPM Planning Modules controlled-operations package created from Oracle Administering Planning Modules source anchor | FP&A Director |
