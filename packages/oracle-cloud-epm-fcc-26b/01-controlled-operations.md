# Governance Package: Oracle Cloud EPM Financial Consolidation and Close — Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Administering Financial Consolidation and Close*
> - *Working with Financial Consolidation and Close*
> - [Financial Consolidation and Close Overview](https://docs.oracle.com/en/cloud/saas/financial-consolidation-cloud/agfcc/overview.html)

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Cloud EPM Financial Consolidation and Close (FCC) |
| Business function | Group consolidation, currency translation, eliminations, close orchestration, consolidation journals, supplemental data, and consolidated reporting |
| Governance objective | Establish controlled, auditable, and repeatable FCC operations for data load, consolidation execution, journal adjustment, supplemental data collection, close task management, and period lock |
| Primary audience | Corporate Controller, Consolidation Manager, Entity Controller, Consolidation Accountant, Financial Reporting Manager, EPM Service Administrator, Internal Audit |
| Reference pattern | Oracle-native FCC operating model with explicit control gates, Task Manager discipline, and evidence retention |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Close- and consolidation-control focused; mandatory verbs reserved for policy rules |
| Non-goals | Statutory filing execution outside FCC, tax provision process design, detailed subledger operating procedures, or enterprise data warehouse architecture |

---

## 1) Executive Summary

**Context.** Oracle Cloud EPM Financial Consolidation and Close provides native consolidation, translation, eliminations, cash flow, dashboarding, Task Manager close orchestration, optional consolidation journals, and optional supplemental data collection. Governance risk remains where consolidation rules, data loads, journal workflows, close schedules, and period locks lack explicit ownership, evidence expectations, or exception handling.

**What this package does.** It defines the controlled operating layer for FCC: policy rules, process stages, SOPs, RACI, a COSO-style control matrix, issue management, and evidence requirements tied to consolidation and close execution.

**What is ready.** Governance coverage for application feature enablement, data integration, consolidation execution, journal period control, supplemental data periods, Task Manager schedules, and close evidence retention.

**What remains.** Tenant-specific ownership assignments, close-calendar tailoring, and threshold calibration after implementation review.

**What we ask of leadership.**
1. Endorse the FCC controlled-operations baseline.
2. Confirm named owners for consolidation execution, journal approval, supplemental data collection, and close schedule management.
3. Require monthly and period-end review of consolidation exceptions, overdue close tasks, and unposted journal backlog.

---

## 2) Policy Addendum — Financial Consolidation and Close Controlled Operations

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for Oracle Cloud EPM Financial Consolidation and Close application configuration, consolidation execution, journal adjustment, supplemental data collection, close orchestration, and period lock.

### 2.2 Scope
- In scope: application feature enablement, data integration and load validation, translation and consolidation rules, eliminations and adjustments, consolidation journal periods and posting, supplemental data collection periods, Task Manager schedules and tasks, reporting review, and period lock.
- Out of scope: detailed GL, AP, AR, or subledger process execution except where entity data submission or Enterprise Journals posting depends on those domains.

### 2.3 Policy Rules
1. **FCC-1 Controlled application configuration.** Consolidation, Task Manager, Supplemental Data, Enterprise Journals, and consolidation journal workflow features shall be enabled only through approved application design and change control.
2. **FCC-2 Authoritative data load.** Entity and consolidation data shall enter FCC only through approved integration channels, forms, or load processes with validation review.
3. **FCC-3 Consolidation execution discipline.** Translation, consolidation rules, eliminations, and cash flow calculations shall run under approved configuration and be reviewed for exceptions before signoff.
4. **FCC-4 Journal period control.** Consolidation journal periods shall be opened and closed according to approved close policy; journals shall not post to unopened or closed periods.
5. **FCC-5 Journal approval before posting.** Where consolidation journal workflow is enabled, journals shall complete required approval before posting.
6. **FCC-6 Supplemental data period control.** Supplemental data collection periods shall follow approved open, close, and lock discipline.
7. **FCC-7 Close task governance.** Task Manager schedules, task ownership, predecessors, and schedule status changes shall follow approved close design and authorization.
8. **FCC-8 Evidence retention.** Consolidation runs, journal approvals, supplemental data submissions, close task completion, and period lock evidence shall be retained in governed locations.
9. **FCC-9 Exception routing.** Consolidation failures, overdue close tasks, unposted journals, and data-load exceptions shall be logged with owner, impact, and remediation target date.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Consolidation rule or setup change during active close | Consolidation Manager + EPM Service Administrator | Through close cycle |
| Journal posting to closed period | Corporate Controller delegate + Consolidation Manager | Per journal |
| Reopen closed Task Manager schedule | Schedule owner + Consolidation Manager | Through close cycle |
| Supplemental data period unlock after lock | Consolidation Manager + Financial Reporting Manager | Per period only |

---

## 3) High-Level Governance Process — Consolidation and Close on Oracle FCC

```text
[ Entity / Source Data ]
                |
                v
(P1) Application Foundation and Feature Controls
                |
                v
(P2) Data Integration and Load Validation
                |
                v
(P3) Entity Submission and Pre-Consolidation Review
                |
                v
(P4) Translation, Consolidation, and Eliminations
                |
                v
(P5) Consolidation Journals and Adjustments
                |
                v
(P6) Supplemental Data Collection
                |
                v
(P7) Close Task Orchestration (Task Manager)
                |
                v
(P8) Reporting Review and Period Lock
```

### 3.1 Process Control Points

| ID | Process step | Control point | Oracle / operating enforcement |
|---|---|---|---|
| CP-01 | Application Foundation and Feature Controls | Consolidation, Task Manager, journals, and supplemental data features are approved and documented | Application creation and feature enablement |
| CP-02 | Data Integration and Load Validation | Loads are complete, valid, and reconciled before consolidation | Data Integration, validation reports, valid intersections |
| CP-03 | Entity Submission and Pre-Consolidation Review | Entity data is submitted and exceptions are resolved | Forms, dashboards, entity review |
| CP-04 | Translation, Consolidation, and Eliminations | Consolidation rules run successfully and exceptions are reviewed | Consolidation rules, Financial Dashboards |
| CP-05 | Consolidation Journals and Adjustments | Journal periods are open; approved journals post correctly | Manage Periods, journal workflow, posting controls |
| CP-06 | Supplemental Data Collection | Supplemental data periods are controlled and submissions are approved | Supplemental Data Manager period status |
| CP-07 | Close Task Orchestration | Close schedule is opened, tasks complete on time, and alerts are resolved | Task Manager schedule status, dashboards |
| CP-08 | Reporting Review and Period Lock | Consolidated outputs are reviewed and periods are locked with evidence | Reporting, period lock, close checklist |

### 3.2 Process Owners
- **End-to-end consolidation and close owner:** Consolidation Manager
- **P1 owner:** EPM Service Administrator + Consolidation Manager
- **P2 / P3 owner:** Consolidation Accountant / Entity Controller
- **P4 / P5 owner:** Consolidation Manager
- **P6 owner:** Financial Reporting Manager
- **P7 owner:** Consolidation Manager with Corporate Controller oversight
- **P8 owner:** Consolidation Manager + Financial Reporting Manager

---

## 4) Standard Operating Procedures (SOPs)

### SOP-01: Govern Application Feature Enablement
- **Objective:** Ensure only approved FCC features, dimensions, and modules are enabled for the tenant.
- **Roles:** EPM Service Administrator, Consolidation Manager.
- **Steps:**
  1. Confirm Consolidation and Task Manager baseline enablement.
  2. Document whether Consolidation Journal Adjustments, journal workflow, Supplemental Data, and Enterprise Journals are enabled.
  3. Record approved feature set and change history.
  4. Escalate any post-enablement feature request through change control.
- **Evidence:** Application design record, feature enablement log.

### SOP-02: Validate Data Integration and Load
- **Objective:** Ensure entity and consolidation data loads are complete, valid, and ready for consolidation.
- **Roles:** Consolidation Accountant, Entity Controller, EPM Service Administrator.
- **Steps:**
  1. Execute approved data integration or load process for the period.
  2. Review validation, rejection, and reconciliation results.
  3. Correct mapping, intersection, or source-data defects before consolidation.
  4. Retain load and validation evidence.
- **Evidence:** Load log, validation report, reconciliation record.

### SOP-03: Execute Translation and Consolidation
- **Objective:** Run approved translation, consolidation, elimination, and cash flow processes with exception review.
- **Roles:** Consolidation Accountant, Consolidation Manager.
- **Steps:**
  1. Confirm entity readiness and approved scenario / period context.
  2. Execute consolidation rules and review job status.
  3. Investigate consolidation, translation, or elimination exceptions.
  4. Document material exceptions and remediation before signoff.
- **Evidence:** Consolidation run log, exception review, Financial Dashboard output.

### SOP-04: Manage Consolidation Journal Periods and Posting
- **Objective:** Govern journal period open/close discipline and approved journal posting.
- **Roles:** Consolidation Accountant, Consolidation Manager, journal approver.
- **Steps:**
  1. Open journal periods for the approved scenario and year.
  2. Create, load, submit, and approve journals where workflow is enabled.
  3. Post approved journals and review posting results.
  4. Close journal periods only after unposted approved journals and auto-reversals are resolved.
- **Evidence:** Period status record, approval history, posting result.

### SOP-05: Manage Supplemental Data Collection Periods
- **Objective:** Control supplemental data collection from open through lock.
- **Roles:** Financial Reporting Manager, Entity Controller, Consolidation Manager.
- **Steps:**
  1. Configure or confirm data collection period dates.
  2. Open the period and deploy approved form templates.
  3. Review submissions and resolve rejected or incomplete forms.
  4. Close and lock the period according to disclosure schedule.
- **Evidence:** Supplemental data period status, submission log, approval record.

### SOP-06: Operate Task Manager Close Schedule
- **Objective:** Execute and monitor the close schedule with timely task completion and alert resolution.
- **Roles:** Consolidation Manager, Entity Controller, task assignee, task approver.
- **Steps:**
  1. Confirm schedule template, owners, predecessors, and notifications.
  2. Change schedule status from Pending to Open at approved start.
  3. Monitor dashboards, overdue tasks, and alerts daily during close.
  4. Close or lock the schedule when follow-up work reaches approved stage.
- **Evidence:** Schedule status history, task completion log, alert resolution record.

### SOP-07: Complete Reporting Review and Period Lock
- **Objective:** Finalize consolidated reporting review and lock the period with retained evidence.
- **Roles:** Consolidation Manager, Financial Reporting Manager, Corporate Controller delegate.
- **Steps:**
  1. Review consolidated forms, dashboards, and approved reports.
  2. Confirm journal, supplemental data, and close-task exceptions are resolved or escalated.
  3. Obtain management review for material exceptions.
  4. Lock period and archive close evidence.
- **Evidence:** Reporting review signoff, close checklist, lock confirmation.

---

## 5) RACI — FCC Operating Roles

| Governance activity | Consolidation Accountant | Consolidation Manager | Entity Controller | Financial Reporting Manager | EPM Service Administrator |
|---|---|---|---|---|---|
| Application feature and setup control | I | A | I | C | R |
| Data load and validation monitoring | R | A | C | I | C |
| Consolidation execution and exception review | R | A | C | I | C |
| Journal period and posting oversight | R | A | I | I | C |
| Supplemental data collection oversight | C | C | R | A | I |
| Close schedule design and monitoring | C | A | R | C | C |
| Reporting review and period lock | C | A | I | R | I |

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Approved application configuration | Unauthorized feature or rule changes | Preventive | EPM Service Administrator | Consolidation Manager | Per change | Approved change record | SOP-01 / CP-01 |
| C-02 | Data load completeness | Consolidation runs on incomplete entity data | Preventive | Consolidation Accountant | Consolidation Manager | Per load | Validation report | SOP-02 / CP-02 |
| C-03 | Entity submission review | Unreviewed entity exceptions reach consolidation | Detective | Entity Controller | Consolidation Manager | Per period | Entity review log | SOP-02 / CP-03 |
| C-04 | Consolidation exception management | Translation or elimination errors remain unresolved | Detective | Consolidation Manager | Corporate Controller delegate | Per run / close | Exception review | SOP-03 / CP-04 |
| C-05 | Journal period discipline | Journals post outside approved period status | Preventive | Consolidation Accountant | Consolidation Manager | Per period | Period status record | SOP-04 / CP-05 |
| C-06 | Journal approval before posting | Unauthorized consolidation adjustments post | Preventive | Consolidation Manager | Corporate Controller delegate | Per batch | Approval workflow record | SOP-04 / CP-05 |
| C-07 | Supplemental data period control | Disclosure support data changes after lock | Preventive | Financial Reporting Manager | Consolidation Manager | Per period | Period lock record | SOP-05 / CP-06 |
| C-08 | Close task monitoring | Overdue close tasks delay reporting | Detective | Consolidation Manager | Corporate Controller delegate | Daily during close | Task Manager dashboard | SOP-06 / CP-07 |
| C-09 | Reporting and lock review | Period locks before required review is complete | Preventive | Consolidation Manager | Corporate Controller delegate | Per close | Close checklist | SOP-07 / CP-08 |

---

## 7) Issue Management Procedure (Operations Issues)

1. Log the issue with application, scenario, period, entity, and impact.
2. Classify severity and contain if consolidation, journal posting, or close execution remains at risk.
3. Assign remediation action and target date.
4. Validate resolution before closure.

| Severity | Example | Response target |
|---|---|---|
| S1 | Consolidation failure with statement impact, unauthorized journal posting, locked-period data change | Same business day |
| S2 | Overdue critical close task, large load rejection rate, unposted approved journal backlog | 2 business days |
| S3 | Nonmaterial mapping, notification, or template issue | 5 business days |

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Application feature and setup record | Prove approved FCC configuration | EPM Service Administrator | Life of application + 7 years |
| Data load / validation report | Prove completeness and correction of source data | Consolidation Accountant | 7 years or policy minimum |
| Consolidation run and exception review | Prove consolidation oversight | Consolidation Manager | 7 years |
| Journal approval and posting history | Prove journal control | Consolidation Manager | 7 years |
| Supplemental data submission and lock record | Prove disclosure support control | Financial Reporting Manager | 7 years |
| Task Manager schedule and task log | Prove close orchestration | Consolidation Manager | 7 years |
| Reporting review and period lock evidence | Prove final close governance | Consolidation Manager | 7 years |

---

## 9) Adoption and Training Notes

- Train entity controllers on submission timing, validation evidence, and Task Manager task completion expectations.
- Require explicit review for consolidation exceptions, journal period changes, and supplemental data lock events.
- Use close retrospectives to refine thresholds, task templates, and escalation paths.

---

## 10) Deck Outline — FCC Controlled Operations Briefing

1. Why consolidation and close need explicit governance in FCC
2. End-to-end FCC operating flow and control points
3. Journals, supplemental data, and Task Manager control model
4. Evidence and period-lock requirements
5. Leadership decisions and ownership assignments

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-20 | Initial FCC controlled-operations package created from Oracle Cloud EPM FCC source anchors | Consolidation Manager |
