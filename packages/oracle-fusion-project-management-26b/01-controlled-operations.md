# Governance Package: Oracle Fusion Cloud Project Management 26B - Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Using Project Execution Management 26B*
> - Oracle Project Management 26B playbooks and workflow guidance

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Project Management (release **26B**) |
| Business function | Project definition, planning, staffing, execution, issue management, change control, and project performance monitoring |
| Governance objective | Establish controlled, auditable, and repeatable project-management operations for project plans, tasks, resources, issues, change orders, and performance refresh |
| Primary audience | Project Manager, Project Administrator, Resource Manager, Project Executive, Project Accountant, PMO / governance reviewers |
| Reference pattern | Oracle-native project execution model with explicit ownership, issue routing, baseline discipline, and evidence retention |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Delivery and governance focused, with clear handoff and control language |
| Non-goals | Enterprise portfolio strategy, detailed billing policy, contract administration outside project impacts, or full PMO methodology design |

---

## 1) Executive Summary

**Context.** Oracle Project Management 26B supports project definition, work plans, tasks, resources, issues, change orders, and performance monitoring. Governance risk shows up when project plans are imported without validation, baselines drift, deliverables and issues are not owned, change orders bypass discipline, or performance data becomes stale.

**What this package does.** It defines the controlled operating layer for Projects 26B: policy rules, project lifecycle stages, SOPs, role accountability, issue and change routing, and evidence requirements for project execution and governance review.

**What is ready.** Governance coverage for project intake and definition, planning and scheduling, resource and assignment management, execution and progress capture, issue and change control, and performance review.

**What remains.** Tenant-specific approval thresholds, role assignments, and PMO-tailored cadence once the operating model is confirmed.

**What we ask of leadership.**
1. Endorse the project controlled-operations baseline.
2. Confirm owners for change orders, issue review, and performance refresh.
3. Require project-review cadence with explicit governance for overdue items and stale data.

---

## 2) Policy Addendum - Project Controlled Operations

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for Oracle Fusion Project Management plans, tasks, resources, issues, and change orders.

### 2.2 Scope
- In scope: project creation/import, work plan setup, task and deliverable execution, resource assignments, issues, action items, change requests/orders, and performance refresh.
- Out of scope: portfolio prioritization, contract negotiation, detailed billing policy, or nonproject operational work outside project-management scope.

### 2.3 Policy Rules
1. **PM-1 Controlled project intake.** Projects and work plans shall be created or imported through approved methods with validation review.
2. **PM-2 Baseline discipline.** Project plans, milestones, and financial impacts shall maintain approved baseline history.
3. **PM-3 Named ownership.** Tasks, deliverables, issues, and change orders shall have explicit owners.
4. **PM-4 Resource assignment integrity.** Project resource requests and assignments shall use approved roles, dates, and allocation logic.
5. **PM-5 Issue and action-item control.** Open issues and action items shall be reviewed, routed, and aged against defined thresholds.
6. **PM-6 Change governance.** Material scope, schedule, cost, or revenue changes shall move through approved change-request or change-order workflow.
7. **PM-7 Performance freshness.** Project performance data shall be refreshed on the approved cadence before governance reporting.
8. **PM-8 Evidence retention.** Import, baseline, issue, change, and review evidence shall be retained in governed locations.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Emergency project-plan import exception | Project Administrator + Project Manager | Per event |
| Temporary baseline timing exception | PMO / Project Executive delegate | Through review cycle |
| Change-order workflow bypass with compensating review | Project Executive + Controller / PMO delegate | 30 days |
| Performance-refresh delay for governance report | Project Manager + PMO delegate | Through reporting cycle |

---

## 3) High-Level Governance Process - Project Execution on Oracle 26B

```text
[ Approved Project Need ]
          |
          v
(P1) Project Intake and Definition
          |
          v
(P2) Planning, Scheduling, and Baseline
          |
          v
(P3) Resource Demand and Assignment
          |
          v
(P4) Execution, Progress, and Deliverables
          |
          v
(P5) Issues and Change Control
          |
          v
(P6) Performance Review and Governance
```

### 3.1 Process Control Points

| ID | Process step | Control point | Oracle / operating enforcement |
|---|---|---|---|
| CP-01 | Project Intake and Definition | Imports and new-project creation validated before use | Import process report, project setup review |
| CP-02 | Planning, Scheduling, and Baseline | Planned dates, dependencies, and baseline history are governed | Manage Project Plan, baseline tracking |
| CP-03 | Resource Demand and Assignment | Roles, allocations, and dates are valid before staffing commitment | Resource request and assignment controls |
| CP-04 | Execution, Progress, and Deliverables | Tasks and work items have owners and current status | Task / deliverable management |
| CP-05 | Issues and Change Control | Issues and change orders are routed and approved | Issue workflow, change management |
| CP-06 | Performance Review and Governance | Performance data refreshed and reviewed before reporting | Update Project Performance Data process |

### 3.2 Process Owners
- **End-to-end project owner:** Project Manager
- **P1 owner:** Project Administrator + Project Manager
- **P2 / P3 owner:** Project Manager with Resource Manager support
- **P4 owner:** Project Manager / team leads
- **P5 owner:** Project Manager / Project Executive delegate
- **P6 owner:** Project Manager with PMO / Project Executive oversight

---

## 4) Standard Operating Procedures (SOPs)

### SOP-01: Create or Import Project Plan
- **Objective:** Create projects and work plans through approved methods with validation and duplicate prevention.
- **Roles:** Project Administrator, Project Manager.
- **Steps:**
  1. Create or import project and plan using approved method.
  2. Review import errors, warnings, or duplicate conditions.
  3. Confirm required attributes, task hierarchy, and dates.
  4. Publish approved plan for operational use.
- **Evidence:** Import report, project setup review, approval note.

### SOP-02: Establish Baseline and Schedule Controls
- **Objective:** Govern planned dates, milestones, dependencies, and baseline versions.
- **Roles:** Project Manager.
- **Steps:**
  1. Review planned dates and dependencies.
  2. Confirm project calendar, schedule type, and milestone treatment.
  3. Create or update baseline according to review cadence.
  4. Document material variance rationale where required.
- **Evidence:** Baseline record, variance note, plan review output.

### SOP-03: Manage Resource Requests and Assignments
- **Objective:** Ensure resource demand, assignments, and allocations are valid and reviewable.
- **Roles:** Project Manager, Resource Manager.
- **Steps:**
  1. Create or update project resource requests.
  2. Confirm role, dates, allocation, and staffing status.
  3. Resolve open or proposed requests exceeding threshold.
  4. Retain decision evidence for staffing changes.
- **Evidence:** Resource request output, assignment review, exception log.

### SOP-04: Track Tasks, Deliverables, and Issues
- **Objective:** Maintain accurate execution status for tasks, deliverables, issues, and action items.
- **Roles:** Project Manager, Team Member, Deliverable Owner, Issue Owner.
- **Steps:**
  1. Update task and deliverable status through approved process.
  2. Log new issues and assign owners and due dates.
  3. Review aging and unresolved items.
  4. Escalate overdue critical items.
- **Evidence:** Task status history, deliverable status, issue log, action-item record.

### SOP-05: Route Change Requests and Change Orders
- **Objective:** Govern material project changes through approved workflow and retained decisions.
- **Roles:** Project Manager, Project Executive, Project Administrator.
- **Steps:**
  1. Log change request or change order.
  2. Record impact on schedule, cost, revenue, or scope.
  3. Route for approval according to threshold.
  4. Implement approved change and update baseline as required.
- **Evidence:** Change-order record, approval, updated baseline or plan.

### SOP-06: Refresh and Review Performance Data
- **Objective:** Ensure project governance reporting uses current approved performance data.
- **Roles:** Project Manager, Project Executive, Project Accountant where relevant.
- **Steps:**
  1. Run or confirm `Update Project Performance Data`.
  2. Review cost, effort, margin, progress, and exception outputs.
  3. Flag stale data or unresolved variances.
  4. Record governance actions and follow-ups.
- **Evidence:** Performance refresh log, dashboard output, review minutes.

---

## 5) RACI - Project Operating Roles

| Governance activity | Project Manager | Project Administrator | Resource Manager | Project Executive | Project Accountant |
|---|---|---|---|---|---|
| Project creation / import validation | A | R | I | I | I |
| Baseline and schedule governance | R | C | I | A | I |
| Resource request and assignment review | A | I | R | I | I |
| Task / deliverable / issue review | R | I | I | A | I |
| Change-order governance | R | C | I | A | C |
| Performance refresh and governance review | R | I | C | A | C |

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Valid project creation/import | Invalid or duplicate projects and plans | Preventive | Project Administrator | Project Manager | Per event | Import report / setup review | SOP-01 / CP-01 |
| C-02 | Baseline discipline | Uncontrolled plan changes | Preventive | Project Manager | Project Executive | Per baseline change | Baseline history | SOP-02 / CP-02 |
| C-03 | Resource assignment integrity | Invalid or stale staffing commitments | Detective | Resource Manager | Project Manager | Weekly | Assignment review | SOP-03 / CP-03 |
| C-04 | Task and deliverable ownership | Work progresses without clear accountability | Preventive | Project Manager | Project Executive | Weekly | Status review | SOP-04 / CP-04 |
| C-05 | Issue aging review | Critical blockers remain unresolved | Detective | Project Manager | Project Executive | Weekly | Issue log | SOP-04 / CP-05 |
| C-06 | Change-order approval | Material scope / cost change bypasses governance | Preventive | Project Executive | PMO / controller delegate | Per change | Change approval | SOP-05 / CP-05 |
| C-07 | Performance refresh discipline | Governance reports use stale data | Preventive | Project Manager | Project Executive | Per review cycle | Refresh log | SOP-06 / CP-06 |

---

## 7) Issue Management Procedure (Operations Issues)

1. Log issue with project, owner, due date, and severity.
2. Assess impact on schedule, cost, scope, or governance review.
3. Assign remediation or escalation.
4. Close only after evidence of resolution is retained.

| Severity | Example | Response target |
|---|---|---|
| S1 | Critical project blocker, failed change governance, materially stale reporting | Same business day |
| S2 | Aging issue backlog, overdue deliverables, invalid resource assignment causing schedule impact | 2 business days |
| S3 | Minor attribute or workflow configuration issue | 5 business days |

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Import / project-creation report | Prove validated intake | Project Administrator | 3-7 years per policy |
| Baseline history | Prove approved plan changes | Project Manager | 3-7 years |
| Resource request / assignment review | Prove staffing governance | Resource Manager | 3 years minimum |
| Issue and action-item log | Prove exception governance | Project Manager | 3 years minimum |
| Change-order record | Prove change approval and implementation | Project Executive / Project Manager | 3-7 years |
| Performance refresh and review record | Prove governance review used current data | Project Manager | 3 years minimum |

---

## 9) Adoption and Training Notes

- Train project managers on baseline discipline, issue aging, and performance-refresh timing.
- Make overdue deliverables, open issues, and pending change orders part of regular project governance.
- Use the same evidence standard for projects created via import as for manually created projects.

---

## 10) Deck Outline - Projects Controlled Operations Briefing

1. Why project execution needs explicit governance
2. Lifecycle stages and control points
3. Resource, issue, and change governance model
4. Performance-refresh discipline and review cadence
5. Leadership decisions and owner confirmation

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial Projects controlled-operations package created from Oracle 26B sources | Project Manager |
