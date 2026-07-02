# Governance Package: Oracle Fusion Cloud Project Management 26B - Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Creating and Administering Analytics and Reports for Project Management 26B*
> - *Using Project Execution Management 26B*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Project Management 26B - data and analytics layer |
| Consumption surfaces | OTBI subject areas, predefined dashboards, Reports and Analytics, Smart View, Analytics Publisher, Oracle Analytics Cloud (OAC) dashboards / workbooks / semantic models, infolets |
| Governance objective | Establish trusted, traceable, and well-controlled project metrics, dashboards, issue reporting, resource analysis, and performance reporting |
| Primary audience | Project Manager, Project Executive, Resource Manager, Project Administrator, PMO, BI / Analytics Delivery Owner |
| Reference pattern | Oracle-first project reporting governance built on subject areas, predefined analyses, and performance-refresh discipline |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Decision-oriented and operationally grounded |
| Non-goals | Portfolio strategy optimization, arbitrary metric proliferation, or uncontrolled project extracts |

---

## 1) Executive Summary

**Context.** Project Management 26B provides strong native reporting for planning, baseline variance, tasks, issues, resources, change management, and overall project performance. Governance is still required to ensure schedule and cost metrics are current, issue and deliverable reporting is trusted, and extensions do not drift away from approved subject areas and business rules. When approved project content is promoted into OAC, the same metric, refresh, access, and change-control requirements still apply.

**What this package does.** It defines the Projects data and analytics governance layer: native-first reporting, canonical project terms, governed KPI catalog, DQ controls, lineage expectations, issue routing, and sensitive-data handling for project reporting and performance analysis.

**What is ready.** The Oracle 26B reporting guide provides a strong seeded baseline for planning, progress, issues, task management, change management, and resource analytics.

**What remains.** Tenant-specific dashboard certification, PMO-specific thresholds, and any governed extension logic beyond seeded subject areas.

**What we ask of leadership.**
1. Endorse the KPI catalog in Section 7 as the project-governance baseline.
2. Require approved Oracle subject areas and native dashboards to be assessed before extension work.
3. Confirm report stewardship and data-refresh accountability.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- Project planning, progress, baseline, issue, task, resource, and change analytics.
- Predefined project dashboards and subject areas in Oracle Project Management 26B.
- Project performance reporting that depends on refreshed Oracle project-performance data.
- Approved governed extensions for PMO or leadership decision support, including OAC dashboards, workbooks, and semantic-layer content built on governed project sources.

### 2.2 Out of scope
- Unapproved spreadsheets used as a project system of record.
- Enterprise portfolio scoring logic outside approved governance.
- Direct replacement of native dashboards without a documented gap.

### 2.3 Objectives
1. Single canonical definition for governed project KPIs.
2. Explicit owner and steward for each governed reporting asset.
3. Approved use of seeded subject areas before custom joins or extracts.
4. Defined refresh and DQ controls for performance-critical reporting.
5. Published lineage from project source data to governance outputs.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **Project Analytics Review Forum** | Approve KPI definitions, dashboard certification, and reporting exceptions | PMO / Project Executive | Monthly |
| **Project Data Steward Session** | Maintain glossary, lineage, and DQ issue triage | Project Administrator / Report Steward | Bi-weekly |
| **Performance Review Cadence** | Review refreshed project performance outputs and exceptions | Project Manager / Project Executive | Weekly or per reporting cycle |

### 3.2 Domain ownership

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| Project planning and baseline data | Project Manager | Project Administrator | BI / Analytics Delivery Owner |
| Task / work item / deliverable data | Project Manager | Report Steward | BI / Analytics Delivery Owner |
| Issue and action-item data | Project Manager | Report Steward | BI / Analytics Delivery Owner |
| Resource and staffing analytics | Resource Manager | Report Steward | BI / Analytics Delivery Owner |
| Project performance reporting | Project Executive / Project Manager | Report Steward | BI / Analytics Delivery Owner |

---

## 4) Policy Addendum - Projects Data and Analytics

1. **DA-PM-1 Authoritative source.** Oracle Project Management remains the system of record for project plan, task, issue, resource, and change data in scope.
2. **DA-PM-2 Native first.** Seeded dashboards, subject areas, and reports shall be assessed before custom project analytics are approved.
3. **DA-PM-3 Canonical metrics.** Project governance reporting shall use approved KPI definitions in Section 7.
4. **DA-PM-4 Refresh discipline.** Performance-critical reporting shall only be used after required data-refresh processes are completed.
5. **DA-PM-5 Controlled OAC content.** OAC workbooks, dashboards, and semantic-layer content using project data shall inherit the same refresh, metric, lineage, access, and retention rules as their source assets.
6. **DA-PM-6 Controlled extensions.** New joins, extracts, or dashboards require approved lineage, DQ, access, and retention controls.
7. **DA-PM-7 Change control.** Report logic, subject-area combinations, OAC semantic logic, thresholds, and certified dashboard content shall be versioned and approved.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | Are project plans complete, current, and valid after import or creation? | Intake quality |
| Q2 | How far is the current plan from the approved baseline? | Schedule / plan governance |
| Q3 | Which tasks, deliverables, and issues are overdue or aging? | Execution intervention |
| Q4 | Are staffing requests and assignments aging or misaligned? | Resource governance |
| Q5 | Which change orders are pending or repeatedly delayed? | Change governance |
| Q6 | Is project performance data fresh enough for leadership reporting? | Reporting reliability |
| Q7 | Which projects show adverse cost, margin, or progress trends? | Executive review |

---

## 6) Business Glossary (Projects Canonical Terms)

| Term | Definition | Owner | Steward | Approved synonyms | Disallowed synonyms |
|---|---|---|---|---|---|
| Project Plan | Approved work plan structure, dates, and dependencies for a project | Project Manager | Project Administrator | Work plan | "Schedule" when broader plan context is needed |
| Baseline | Approved historical reference version of the project plan | Project Executive | Project Administrator | Baseline version | "Frozen plan" |
| Deliverable | Project work item owned and tracked to completion | Project Manager | Report Steward | Work item (subset) | "Task" when the object differs |
| Issue | Logged problem requiring owner and action | Project Manager | Report Steward | Project issue | "Risk" unless separately governed |
| Action Item | Owned follow-up step associated with issue or project work | Project Manager | Report Steward | Follow-up action | "Reminder" |
| Change Order | Approved mechanism to govern material project changes | Project Executive | Project Administrator | Change request / order | "Update" |
| Resource Request | Demand signal for staffing a project role or assignment | Resource Manager | Report Steward | Staffing request | "Headcount request" |
| Performance Refresh | Update of project-performance data used by dashboards and analytics | Project Manager | Report Steward | Performance data update | "Dashboard refresh" when process-specific meaning matters |
| Schedule Variance | Difference between baseline and current schedule state | Project Executive | Report Steward | Baseline variance | "Delay" without a defined basis |
| Utilization | Measure of assigned or available resource capacity in approved reporting | Resource Manager | Report Steward | Resource utilization | "Busy rate" |

---

## 7) Metric Definitions (Governed KPI Catalog)

### KPI-01 - Project Plan Import Success Rate
- **Question:** Q1
- **Formula:** Successful project-plan imports / total project-plan imports.
- **Source:** Import Project Plan process report.
- **Owner / Steward:** Project Administrator / Report Steward.
- **Threshold:** Sustained <98% success triggers remediation.

### KPI-02 - Tasks Missing Required Dates
- **Question:** Q1
- **Formula:** Open project tasks without required planned start or finish dates.
- **Source:** `Project Management - Planning Real Time`.
- **Owner / Steward:** Project Manager / Report Steward.
- **Threshold:** Zero for governed milestone and close-critical tasks.

### KPI-03 - Baseline Schedule Variance
- **Question:** Q2
- **Formula:** Difference between current and baseline dates or duration for governed projects.
- **Source:** `Project Management - Baseline Versions Real Time`.
- **Owner / Steward:** Project Manager / Report Steward.
- **Threshold:** Project-specific tolerance; red projects escalate.

### KPI-04 - Overdue Deliverable Rate
- **Question:** Q3
- **Formula:** Overdue deliverables / total open deliverables.
- **Source:** `Project Management - Project Work Items Real Time`.
- **Owner / Steward:** Project Manager / Report Steward.
- **Threshold:** Sustained >10% triggers review.

### KPI-05 - Open Issue Aging
- **Question:** Q3
- **Formula:** Open issues exceeding age threshold by bucket and owner.
- **Source:** `Project Management - Project Issues Real Time`.
- **Owner / Steward:** Project Manager / Report Steward.
- **Threshold:** High-priority issues >10 business days escalate.

### KPI-06 - Resource Request Aging
- **Question:** Q4
- **Formula:** Open or resource-proposed requests exceeding target age.
- **Source:** `Project Resource Management - Resource Management Real Time`.
- **Owner / Steward:** Resource Manager / Report Steward.
- **Threshold:** Threshold set by staffing policy.

### KPI-07 - Change Order Cycle Time
- **Question:** Q5
- **Formula:** Average days from change-order creation to approval / closure.
- **Source:** `Project Management - Change Management Real Time`.
- **Owner / Steward:** Project Executive / Project Administrator.
- **Threshold:** Project-specific target with aging review.

### KPI-08 - Performance Refresh Freshness
- **Question:** Q6
- **Formula:** Hours or days since last successful performance refresh for governed reporting.
- **Source:** Refresh run log and reporting steward register.
- **Owner / Steward:** Project Manager / Report Steward.
- **Threshold:** Critical reports must meet agreed reporting cutoff.

### KPI-09 - Cost / Margin Variance
- **Question:** Q7
- **Formula:** Approved budget or forecast variance versus actual project performance.
- **Source:** `Projects - Performance Reporting Real Time`, `Project Control - Forecasts Real Time`.
- **Owner / Steward:** Project Executive / Report Steward.
- **Threshold:** Tolerance set by project governance.

### KPI-10 - Unprocessed Transaction Count
- **Question:** Q6, Q7
- **Formula:** Count of pending, failed, or unprocessed transactions by project and source.
- **Source:** `Project Costing - Unprocessed Transactions Real Time`.
- **Owner / Steward:** Project Administrator / Report Steward.
- **Threshold:** Any material aging item triggers investigation.

---

## 8) Data Quality Controls

| ID | Rule | Critical data | Threshold | Owner | Evidence |
|---|---|---|---|---|---|
| DQ-01 | Imported plan data passes required validation | Import attributes | 100% for released plans | Project Administrator | Import report |
| DQ-02 | Governed tasks have valid date fields | Start / finish dates | 100% for governed tasks | Project Manager | Planning review |
| DQ-03 | Baseline versions are recorded before major variance reporting | Baseline record | 100% for governed projects | Project Executive | Baseline history |
| DQ-04 | Deliverables and issues have named owners and status | Owner, status | 100% populated | Project Manager | Issue / deliverable review |
| DQ-05 | Resource requests use valid roles and dates | Role, dates, status | 100% valid for governed requests | Resource Manager | Assignment review |
| DQ-06 | Change-order status logic is current and documented | Status, stage | 100% governed | Project Administrator | Workflow review |
| DQ-07 | Performance reporting uses current refreshed data | Refresh timestamp | Within approved cutoff | Project Manager | Refresh log |
| DQ-08 | Certified dashboards reconcile to approved subject-area totals | Counts / amounts | Within approved tolerance | Report Steward | Validation record |

---

## 9) Metadata and Lineage

### 9.1 Required metadata
- Business purpose and governance decision supported.
- Owner, steward, and technical custodian.
- Approved subject area(s) or native dashboard.
- Refresh cadence, cutoff, and failure handling.
- Approved filters, thresholds, and definitions.
- Change history and next review date.

### 9.2 Approved subject areas (baseline)
- `Project Management - Planning Real Time`
- `Project Management - Baseline Versions Real Time`
- `Project Management - Project Issues Real Time`
- `Project Management - Task Management Real Time`
- `Project Management - Change Management Real Time`
- `Project Management - Project Resources Real Time`
- `Project Resource Management - Resource Management Real Time`
- `Project Management - Project Work Items Real Time`
- `Projects - Performance Reporting Real Time`
- `Project Costing - Unprocessed Transactions Real Time`

### 9.3 Lineage pattern
Oracle project transaction / plan object -> approved subject area or dashboard -> governed metric logic -> project or PMO review output.

---

## 10) Data Issue Management

1. Log issue with project, report, metric, or subject area affected.
2. Assess impact on leadership reporting, project review, or staffing decision.
3. Contain by flagging or withholding report if needed.
4. Remediate and validate before closure.

---

## 11) Sensitive Data and Access Controls

- Project access follows approved Oracle role and data-security boundaries.
- Resource, financial, and contract-related project data require least-privilege access.
- Exports for PMO or executive use must retain owner, purpose, cadence, and retention expectations.

---

## 12) Adoption and Training Notes

- Train project managers and PMO users on approved subject areas and freshness rules.
- Document when to use seeded dashboards versus governed extensions.
- Publish canonical definitions for baseline variance, issue aging, and resource request aging.

---

## 13) Deck Outline - Projects Data and Analytics Briefing

1. Oracle-first reporting posture for projects
2. Canonical KPI and glossary baseline
3. Approved subject areas and dashboard patterns
4. DQ and refresh-discipline controls
5. PMO decisions and stewardship assignments

---

## 14) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial Projects governed data and analytics package created from Oracle 26B sources | Project Manager |
