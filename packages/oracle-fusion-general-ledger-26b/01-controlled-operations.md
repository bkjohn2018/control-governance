# Governance Package: Oracle Fusion Cloud General Ledger 26B - Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Using General Ledger 26B*
> - *Implementing Enterprise Structures and General Ledger 26B*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud General Ledger (release **26B**) |
| Business function | Record-to-report, journal governance, intercompany accounting, and ledger close |
| Governance objective | Establish controlled, auditable, and repeatable GL operations for journal capture, approval, posting, reconciliation, intercompany processing, and period close |
| Primary audience | General Accounting Manager, General Accountant, Financial Analyst, Controllership, Internal Audit, IT Financials Lead |
| Reference pattern | Oracle-native GL operating model with explicit control gates, evidence retention, and close discipline |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Accounting-control focused; mandatory verbs reserved for policy rules |
| Non-goals | Enterprise consolidation operating model redesign, tax policy, subledger process design, or financial close orchestration outside GL control boundaries |

---

## 1) Executive Summary

**Context.** Oracle Fusion General Ledger 26B provides strong native support for journal entry, import, approval, posting, revaluation, translation, intercompany processing, and reporting. Governance risk remains where manual journals, spreadsheet uploads, automated posting rules, reconciliation timing, and period-close actions lack explicit ownership, evidence expectations, or exception handling.

**What this package does.** It defines the controlled operating layer for GL / record-to-report: policy rules, process stages, SOPs, RACI, a COSO-style control matrix, issue management, and evidence and records requirements tied to journal-to-close execution.

**What is ready.** Governance coverage for journal capture, approval and posting, recurring and automated accounting, intercompany activity, and ledger close with named control points and retained evidence.

**What remains.** Tenant-specific thresholds, role assignments, and close-calendar tailoring after implementation review.

**What we ask of leadership.**
1. Endorse the GL controlled-operations baseline.
2. Confirm named owners for journal approval, posting, intercompany reconciliation, and period close.
3. Require monthly and period-end review of control exceptions and backlog aging.

---

## 2) Policy Addendum - General Ledger Controlled Operations

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for Oracle Fusion General Ledger journals, balances, intercompany activity, and period close.

### 2.2 Scope
- In scope: manual journals, spreadsheet journals, imported journals, approval, posting, reversals, allocations, intercompany, revaluation, translation, reconciliation, and ledger close.
- Out of scope: detailed AP, AR, Assets, or Projects subledger process execution except where GL close or reconciliation depends on those domains.

### 2.3 Policy Rules
1. **GL-1 Controlled journal entry.** Journals shall be created, imported, or generated only through approved channels and authorized sources.
2. **GL-2 Approval before posting.** Journals requiring approval shall complete the approval process before posting.
3. **GL-3 Period discipline.** Journals shall be entered and posted only in valid accounting periods according to close policy and approved exceptions.
4. **GL-4 Controlled automation.** AutoPost, recurring journals, reversals, allocations, revaluation, and translation shall operate under approved configuration and review routines.
5. **GL-5 Intercompany governance.** Intercompany transactions shall be monitored, reconciled, and resolved before final close.
6. **GL-6 Reconciliation before close.** Material reconciliation exceptions shall be reviewed before ledger close.
7. **GL-7 Evidence retention.** Journal, approval, posting, reconciliation, and close evidence shall be retained in governed locations.
8. **GL-8 Exception routing.** Close blockers, approval backlogs, and posting failures shall be logged with owner, impact, and remediation target date.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Prior-period journal exception | General Accounting Manager | Per journal |
| Temporary posting exception during close | Controller delegate + General Accounting Manager | Through close cycle |
| AutoPost or reversal rule override | General Accounting Manager + IT Financials Lead | 30 days |
| Intercompany unresolved-close exception | Controller delegate | Through period close only |

---

## 3) High-Level Governance Process - Journal-to-Close on Oracle 26B

```text
[ Journal Source / Accounting Event ]
                |
                v
(P1) Foundation and Setup Controls
                |
                v
(P2) Journal Capture and Import
                |
                v
(P3) Approval and Posting
                |
                v
(P4) Recurring / Automated Accounting
                |
                v
(P5) Intercompany and Reconciliation
                |
                v
(P6) Period Close and Reporting
```

### 3.1 Process Control Points

| ID | Process step | Control point | Oracle / operating enforcement |
|---|---|---|---|
| CP-01 | Foundation and Setup Controls | COA, ledger, access, and journal-rule setup approved | Setup and Maintenance tasks, approval/change control |
| CP-02 | Journal Capture and Import | Imported or manual journals are complete and valid before approval | Journal entry / import validation |
| CP-03 | Approval and Posting | Required approvals complete before posting | Journal approval workflow, posting controls |
| CP-04 | Recurring / Automated Accounting | Automated journals and reversals reviewed and exceptions handled | AutoPost, reversal criteria, allocation review |
| CP-05 | Intercompany and Reconciliation | Material intercompany and reconciliation exceptions reviewed | Intercompany status and reconciliation review |
| CP-06 | Period Close and Reporting | Open-period, balance, and close blockers addressed before close | Period status review, close checklist |

### 3.2 Process Owners
- **End-to-end R2R / GL owner:** General Accounting Manager
- **P1 owner:** IT Financials Lead + General Accounting Manager
- **P2 / P3 owner:** General Accountant / General Accounting Manager
- **P4 owner:** General Accounting Manager
- **P5 / P6 owner:** General Accounting Manager with Controllership oversight

---

## 4) Standard Operating Procedures (SOPs)

### SOP-01: Create or Import Journal
- **Objective:** Ensure journals are captured through approved channels with complete and valid attributes.
- **Roles:** General Accountant, Financial Analyst.
- **Steps:**
  1. Create a manual, spreadsheet, or imported journal through an approved source.
  2. Validate ledger, period, source, category, currency, and account details.
  3. Review import or validation errors and correct them before routing.
  4. Retain source or import evidence.
- **Evidence:** Journal batch, import report, validation result.

### SOP-02: Approve and Post Journal
- **Objective:** Ensure journals complete required approval and are posted only after approval and validation.
- **Roles:** General Accountant, approver, General Accounting Manager.
- **Steps:**
  1. Submit journal batch for approval where required.
  2. Resolve rejections or returned items.
  3. Post approved journal batch.
  4. Review posting exceptions and correct failed items.
- **Evidence:** Approval record, posting result, exception report.

### SOP-03: Review Automated and Recurring Accounting
- **Objective:** Govern recurring journals, reversals, allocations, revaluation, translation, and AutoPost.
- **Roles:** General Accounting Manager, General Accountant.
- **Steps:**
  1. Review scheduled automation scope and timing.
  2. Confirm period and configuration readiness.
  3. Review generated journal output and exceptions.
  4. Escalate configuration or threshold issues.
- **Evidence:** Schedule output, run log, exception review.

### SOP-04: Monitor Intercompany and Reconciliation Exceptions
- **Objective:** Identify and resolve intercompany and reconciliation issues before final close.
- **Roles:** Intercompany Accountant, General Accountant, Financial Analyst.
- **Steps:**
  1. Review intercompany transaction status and unresolved items.
  2. Review clearing and reconciliation exceptions.
  3. Assign owners and remediation dates for unresolved material items.
  4. Track closure before ledger close.
- **Evidence:** Reconciliation log, intercompany aging, closure record.

### SOP-05: Execute Period Close Review
- **Objective:** Close the ledger only after open-period checks, key reconciliations, and blocker review are complete.
- **Roles:** General Accounting Manager, General Accountant.
- **Steps:**
  1. Review journal approval and posting backlog.
  2. Review subledger-open-period, reconciliation, and intercompany blockers.
  3. Complete revaluation, translation, and close-specific reviews as applicable.
  4. Approve ledger close and archive close evidence.
- **Evidence:** Period status review, close checklist, close approval.

---

## 5) RACI - GL Operating Roles

| Governance activity | General Accountant | General Accounting Manager | Financial Analyst | Intercompany Accountant | IT Financials Lead |
|---|---|---|---|---|---|
| Journal preparation and import monitoring | R | A | C | I | C |
| Journal approval oversight | R | A | I | I | I |
| Posting and error remediation | R | A | I | I | C |
| Automated accounting review | C | A | I | I | R |
| Intercompany exception review | I | C | I | R | I |
| Reconciliation and close review | R | A | C | C | I |
| Setup / rule change control | I | A | I | I | R |

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Approved setup and access | Invalid ledger or journal-rule configuration | Preventive | IT Financials Lead | General Accounting Manager | Per change | Approved change record | SOP-05 / CP-01 |
| C-02 | Journal capture completeness | Incomplete or invalid journal data | Preventive | General Accountant | General Accounting Manager | Daily | Import / validation report | SOP-01 / CP-02 |
| C-03 | Approval before posting | Unauthorized journal posting | Preventive | General Accounting Manager | Controller delegate | Per batch | Approval workflow record | SOP-02 / CP-03 |
| C-04 | Posting exception management | Errors remain unresolved in GL | Detective | General Accountant | General Accounting Manager | Daily / close | Posting execution report | SOP-02 / CP-03 |
| C-05 | Automated journal oversight | High-volume entries post without review | Detective | General Accounting Manager | Financial Analyst | Per run | Automation run review | SOP-03 / CP-04 |
| C-06 | Intercompany backlog review | Intercompany imbalances delay close | Detective | Intercompany Accountant | General Accounting Manager | Weekly / close | Aging and reconciliation log | SOP-04 / CP-05 |
| C-07 | Clearing / reconciliation review | Material reconciliation variance reaches close unreviewed | Detective | General Accountant | General Accounting Manager | Weekly / close | Reconciliation evidence | SOP-04 / CP-05 |
| C-08 | Period close blocker review | Ledger closes with unresolved material issues | Preventive | General Accounting Manager | Controller delegate | Per close | Close checklist | SOP-05 / CP-06 |

---

## 7) Issue Management Procedure (Operations Issues)

1. Log the issue with source, ledger, period, impact, and owner.
2. Classify severity and contain if posting or close risk remains active.
3. Assign remediation action and target date.
4. Validate resolution before closure.

| Severity | Example | Response target |
|---|---|---|
| S1 | Unauthorized posting, material reconciliation failure, close blocker with financial-statement impact | Same business day |
| S2 | Large journal backlog, recurring import failures, intercompany aging beyond threshold | 2 business days |
| S3 | Nonmaterial mapping or parameter issue | 5 business days |

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Journal import / validation report | Prove completeness and correction of journal capture | General Accountant | 7 years or policy minimum |
| Approval history | Prove journal approval | General Accounting Manager | 7 years |
| Posting execution report | Prove posting result and remediation | General Accountant | 7 years |
| Automation run review | Prove oversight of recurring / automated accounting | General Accounting Manager | 7 years |
| Intercompany / reconciliation log | Prove issue identification and remediation | Intercompany Accountant / General Accountant | 7 years |
| Close checklist and approval | Prove period-close governance | General Accounting Manager | 7 years |

---

## 9) Adoption and Training Notes

- Train journal preparers and approvers on evidence expectations, not just system steps.
- Require specific review for manual and spreadsheet journals, prior-period entries, and automated run exceptions.
- Use close retrospectives to tighten threshold and backlog rules.

---

## 10) Deck Outline - GL Controlled Operations Briefing

1. Why journal-to-close needs explicit governance
2. End-to-end GL operating flow and control points
3. Manual, automated, and intercompany control model
4. Reconciliation and close evidence requirements
5. Leadership decisions and ownership assignments

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial GL controlled-operations package created from Oracle 26B sources | General Accounting Manager |
