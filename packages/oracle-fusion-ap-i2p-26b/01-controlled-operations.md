# Governance Package: Oracle Fusion Cloud AP Invoice-to-Pay 26B - Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Supporting references:
> - `01-invoice-to-pay-governance-package.md`
> - `analytics/`
>
> Source anchor: Oracle Help Center, *Oracle Fusion Cloud Financials 26B* - Payables / Invoice-to-Pay guidance.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Accounts Payable Invoice-to-Pay (release **26B**) |
| Business function | AP operations, payment governance, exception handling, and post-payment review |
| Governance objective | Establish controlled, auditable, and repeatable AP invoice-to-pay operations that preserve invoice integrity, approval compliance, payment accuracy, and retained evidence |
| Primary audience | AP Process Owner, AP Managers, AP Analysts, Finance Controls Lead, Controllership, Internal Audit |
| Reference pattern | Oracle-native process execution wrapped with explicit control ownership, SOP evidence, issue routing, and monthly governance review |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Operational, control-focused, and evidence-oriented |
| Non-goals | Procurement sourcing governance, supplier master governance, AR operations, enterprise record-to-report design outside AP posting and reconciliation handoffs |

---

## 1) Executive Summary

**Context.** AP leadership needs a practical operating baseline that improves control consistency without slowing invoice throughput. Oracle Fusion AP 26B already provides the transaction system, approvals, payment processing, and standard reports, but those capabilities still require explicit control ownership, evidence expectations, exception routing, and review cadence.

**What this package does.** It defines the controlled operating layer for AP I2P: policy rules, end-to-end process gates, SOPs, named roles, a COSO-style control matrix, issue management, and evidence expectations that connect daily execution to monthly governance review.

**What is ready.** A six-stage AP operating model, five core control points, named AP role accountability, control evidence expectations, monthly review rhythm, and a baseline issue workflow.

**What remains.** Final owner names and tenant-specific workflow and report name confirmation.

**What we ask of leadership.**
1. Approve this controlled operations baseline for AP I2P.
2. Confirm named control owners and reviewers.
3. Require monthly governance review of control performance, issues, and exceptions.

---

## 2) Policy Addendum - AP Controlled Operations on Oracle Cloud

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for supplier invoice processing and payment execution in Oracle Fusion AP.

### 2.2 Scope
- In scope: invoice intake, validation, coding, approval routing, payment run preparation, payment execution, and post-payment review.
- Out of scope: sourcing and PO creation, supplier onboarding, bank-account master-data maintenance, and record-to-report governance outside AP operational handoffs.

### 2.3 Policy Rules
1. **AP-1 Intake completeness.** Supplier invoices shall be captured with required attributes before entering workflow or payment eligibility review.
2. **AP-2 Validation gate.** AP teams shall complete required validation checks before routing invoices for approval.
3. **AP-3 Approval compliance.** No invoice shall be paid without the required approval state and retained approval evidence.
4. **AP-4 Duplicate prevention.** Payment runs shall include duplicate-risk and hold review before release.
5. **AP-5 Evidence retention.** Critical control evidence shall be retained in a governed location per the records schedule.
6. **AP-6 Exception governance.** Exceptions shall be documented with owner, rationale, due date, and escalation path.
7. **AP-7 Monthly review.** AP governance owners shall review KPI results, issue aging, and repeated control breaches monthly.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Temporary intake bypass for emergency processing | AP Manager | Per event |
| Approval-path override requiring compensating review | AP Process Owner + Finance Controls Lead | 30 days |
| Payment release exception with unresolved duplicate-risk warning | AP Manager + Finance Controls Lead | Per payment run |
### 2.5 Review Cadence
Quarterly; immediately after material control failure, audit issue, workflow redesign, or major Oracle release impact.

---

## 3) High-Level Governance Process - Invoice-to-Pay on Oracle 26B

```text
[ Supplier Invoice Received ]
          |
          v
(P1) Intake and Registration
          |
          v
(P2) Validation and Coding
          |
          v
(P3) Approval Routing and Decision
          |
          v
(P4) Payment Run Preparation
          |
          v
(P5) Payment Execution
          |
          v
(P6) Post-Payment Review and Governance
```

### 3.1 Process Control Points

| ID | Process step | Control point | Oracle / operating enforcement |
|---|---|---|---|
| CP-01 | Intake and Registration | Required invoice attributes present before workflow | Intake checklist, invoice registration controls |
| CP-02 | Validation and Coding | Validation pass before approval routing | Validation checklist, matching / hold review |
| CP-03 | Approval Routing and Decision | Required approval state before payment eligibility | Approval workflow history and reviewer evidence |
| CP-04 | Payment Run Preparation | Duplicate / hold exceptions cleared before release | Payment-run review, duplicate check, hold review |
| CP-05 | Post-Payment Review | KPI, issue, and exception review completed monthly | Governance scorecard, issue log, meeting record |

### 3.2 Process Owners
- **End-to-end AP I2P owner:** AP Process Owner
- **P1 / P2 owner:** AP Manager
- **P3 / P4 / P5 owner:** AP Manager
- **P6 owner:** AP Process Owner with Finance Controls Lead oversight

---

## 4) Standard Operating Procedures (SOPs)

> Each SOP follows: objective, scope, roles, steps, evidence, and exceptions.

### SOP-01: Register Supplier Invoice
- **Objective:** Ensure each invoice is uniquely recorded, traceable, and complete enough to enter AP workflow.
- **Roles:** AP Analyst, AP Specialist.
- **Steps:**
  1. Register the invoice in the AP intake queue.
  2. Capture required supplier, invoice, date, amount, and organizational attributes.
  3. Attach source documentation and supporting files.
  4. Route incomplete items back to correction before further processing.
- **Evidence:** Transaction ID, intake timestamp, source attachment set.

### SOP-02: Validate and Code Invoice
- **Objective:** Confirm invoice completeness, basic policy compliance, and readiness for approval.
- **Roles:** AP Specialist, AP Analyst.
- **Steps:**
  1. Perform required field validation.
  2. Review supplier status, match/hold indicators, and coding sufficiency.
  3. Classify invoice as valid, return-for-correction, or exception.
  4. Record exception reason and owner when validation fails.
- **Evidence:** Validation checklist result, exception note, supporting report or screen evidence.

### SOP-03: Route Invoice Through Approval
- **Objective:** Ensure invoices receive the required approvals before payment eligibility.
- **Roles:** AP Specialist, AP Manager, designated approvers.
- **Steps:**
  1. Route validated invoice through Oracle approval workflow.
  2. Monitor for approved, rejected, or returned status.
  3. Resolve returned items and reroute after correction.
  4. Retain approval history for governance and audit support.
- **Evidence:** Approval log, workflow record, returned-item disposition.

### SOP-04: Prepare Payment Run
- **Objective:** Assemble a payment candidate set that has cleared required control checks.
- **Roles:** AP Specialist, AP Manager.
- **Steps:**
  1. Assemble payable items for the run.
  2. Execute duplicate-risk checks and review holds or unusual exceptions.
  3. Remove noncompliant items from the run population.
  4. Record disposition for held or excluded items.
- **Evidence:** Payment candidate listing, duplicate check output, hold review log.

### SOP-05: Authorize and Execute Payment
- **Objective:** Release only control-cleared payments on the approved cadence.
- **Roles:** AP Manager, AP Process Owner as backup.
- **Steps:**
  1. Review the payment-run control summary.
  2. Confirm unresolved exceptions are dispositioned.
  3. Authorize release through the designated approval path.
  4. Archive payment execution evidence.
- **Evidence:** Release authorization, payment-run record, exception signoff.

### SOP-06: Conduct Monthly Governance Review
- **Objective:** Review control performance, unresolved issues, repeat exceptions, and remediation actions.
- **Roles:** AP Process Owner, AP Manager, Finance Controls Lead.
- **Steps:**
  1. Review KPI scorecard and threshold status.
  2. Review open issues, aging, and recurring exception themes.
  3. Assign remediation owners and due dates.
  4. Record decisions, escalations, and follow-up items.
- **Evidence:** Governance meeting record, action log, updated issue register.

---

## 5) RACI - AP Operating Roles

| Governance activity | AP Analyst | AP Specialist | AP Manager | AP Process Owner | Finance Controls Lead |
|---|---|---|---|---|---|
| Invoice intake and registration | R | C | A | I | I |
| Validation and coding review | C | R | A | I | I |
| Approval compliance monitoring | I | R | A | C | I |
| Payment candidate clearance | I | R | A | C | I |
| Payment release authorization | I | C | R | A | C |
| Duplicate-risk escalation | I | R | A | C | C |
| Monthly KPI/control review | I | C | R | A | C |
| Remediation governance | I | C | R | A | C |

R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Intake completeness | Incomplete or misrouted invoices enter workflow | Preventive | AP Manager | AP Process Owner | Daily | Intake checklist / queue log | SOP-01 / CP-01 |
| C-02 | Validation discipline | Invalid invoices proceed to approval | Preventive | AP Specialist | AP Manager | Daily | Validation checklist | SOP-02 / CP-02 |
| C-03 | Approval compliance | Payments occur without required authorization | Preventive | AP Manager | AP Process Owner | Per invoice / run | Workflow approval history; Payables Payment Register | SOP-03 / CP-03 |
| C-04 | Duplicate prevention | Duplicate payment leakage | Detective | AP Manager | Finance Controls Lead | Per payment run | Duplicate check output; Payables Invoice Audit Listing | SOP-04 / CP-04 |
| C-05 | Hold / exception review | Restricted or unresolved items are paid | Preventive | AP Specialist | AP Manager | Per payment run | Hold review log; Payables Matching Hold Detail Report | SOP-04 / CP-04 |
| C-06 | Payment release approval | Unauthorized payment execution | Preventive | AP Manager | AP Process Owner | Per payment run | Release authorization | SOP-05 / CP-04 |
| C-07 | Monthly governance review | Repeat failures persist without action | Detective | AP Process Owner | Finance Controls Lead | Monthly | Scorecard and minutes | SOP-06 / CP-05 |
| C-08 | Issue remediation tracking | Exceptions remain unresolved or unowned | Corrective | AP Process Owner | Finance Controls Lead | Weekly / monthly | Issue register | SOP-06 / CP-05 |

---

## 7) Issue Management Procedure (Operations Issues)

### 7.1 Trigger
Log an AP operations issue when a control fails, an exception repeats, evidence is missing, KPI thresholds breach, or a workflow/process problem materially affects AP performance or compliance.

### 7.2 Severity

| Severity | Example | Response target |
|---|---|---|
| S1 | Confirmed duplicate payment, unauthorized payment, missing control evidence for material item | Same business day |
| S2 | Repeated approval compliance breach, unresolved payment-run blocker, repeated validation failure | 2 business days |
| S3 | Minor process gap, training issue, nonmaterial threshold drift | 5 business days |

### 7.3 Workflow
1. Log the issue with date, owner, affected process step, and impact.
2. Contain the issue if active processing risk remains.
3. Assign a remediation owner and due date.
4. Validate root cause and corrective action.
5. Close only when remediation evidence is retained.

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Intake record and attachments | Prove invoice receipt and completeness | AP Analyst | 7 years or policy minimum |
| Validation checklist | Prove pre-approval validation | AP Specialist | 7 years |
| Approval history | Prove approval compliance | AP Manager | 7 years |
| Payment-run review output | Prove payment candidate control clearance | AP Manager | 7 years |
| Duplicate / hold review log | Prove exception screening | AP Specialist | 7 years |
| Monthly governance record | Prove review and remediation governance | AP Process Owner | 3 years minimum |
| Issue register | Prove escalation and corrective action | AP Process Owner | 3 years minimum |

---

## 9) Adoption and Training Notes

- Train AP Analysts and AP Specialists on the control points before go-live.
- Use monthly review sessions to calibrate thresholds and clarify repeated exception causes.
- Treat workflow evidence and issue logging as part of standard execution, not add-on documentation.
- Refresh training after material Oracle workflow or policy changes.

---

## 10) Deck Outline - AP Controlled Operations Briefing

1. Why AP controlled operations need an explicit governance layer
2. End-to-end AP I2P operating flow and control points
3. Named role accountability and RACI
4. Core control matrix and evidence model
5. Monthly review rhythm, KPI oversight, and remediation process
6. Leadership decisions and asks

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Normalized AP controlled-operations root artifact created from the existing AP governance package | AP Process Owner |
| 1.1 | 2026-07-06 | Updated C-03, C-04, and C-05 evidence columns to name specific Oracle predefined reports (Payables Payment Register, Payables Invoice Audit Listing, Payables Matching Hold Detail Report) | AP Process Owner |
