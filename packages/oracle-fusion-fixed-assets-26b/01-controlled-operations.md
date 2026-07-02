# Governance Package: Oracle Fusion Cloud Fixed Assets 26B - Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - *Using Assets 26B*
> - *Implement Assets*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Fixed Assets / Assets (release **26B**) |
| Business function | Asset setup, acquisition, additions, transfers, adjustments, depreciation, reconciliation, and retirements |
| Governance objective | Establish controlled, auditable, and repeatable fixed-asset operations for setup, acquisition, posting, depreciation, reconciliation, and retirement events |
| Primary audience | Asset Accounting Manager, Asset Accountant, Financial Analyst, AP / Project Costing upstream owners, Internal Audit |
| Reference pattern | Oracle-native asset lifecycle with explicit setup controls, queue governance, approval, depreciation discipline, and reconciliation evidence |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Operational and accounting focused |
| Non-goals | Enterprise asset strategy, tax-policy design, maintenance work management, or procurement receiving process ownership |

---

## 1) Executive Summary

**Context.** Oracle Assets supports end-to-end asset lifecycle management, including source ingestion from Payables, Project Costing, and Receiving, plus transfers, adjustments, capitalization, depreciation, reconciliation, and retirements. Governance risk appears where setup choices, source-line quality, queue status handling, approval routing, or close discipline are weak.

**What this package does.** It defines the controlled operating layer for Fixed Assets 26B: policy rules, process stages, SOPs, role accountability, a COSO-style control matrix, issue routing, and evidence expectations for lifecycle events and close.

**What is ready.** Governance coverage for setup and books, additions and source ingestion, transaction posting, depreciation and accounting, reconciliation, and retirements.

**What remains.** Tenant-specific approval thresholds, role assignments, and book-level close cadence once implementation details are confirmed.

**What we ask of leadership.**
1. Endorse the controlled-operations baseline for Fixed Assets.
2. Confirm named owners for setup changes, additions, depreciation, and retirements.
3. Require close and reconciliation review before final period close.

---

## 2) Policy Addendum - Fixed Assets Controlled Operations

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for Oracle Assets setup, lifecycle transactions, depreciation, reconciliation, and retirement processing.

### 2.2 Scope
- In scope: setup controls, asset books, categories, source ingestion, additions, adjustments, transfers, capitalization, depreciation, accounting, reconciliation, physical inventory, impairment / revaluation, retirements, and reinstatements.
- Out of scope: procurement receiving operations, payables source processing before transfer, maintenance planning, and enterprise asset-strategy decisions outside the Assets domain.

### 2.3 Policy Rules
1. **FA-1 Controlled setup.** Asset books, categories, thresholds, calendars, prorate conventions, and key setup controls shall be established and changed only through approved governance.
2. **FA-2 Source validation.** Asset source lines from Payables, Project Costing, Receiving, or imports shall be validated before posting.
3. **FA-3 Queue and posting discipline.** Transactions shall move through controlled statuses and be reviewed before posting.
4. **FA-4 Approval control.** Asset transaction approvals shall be configured and applied where required before posting material transactions.
5. **FA-5 Depreciation discipline.** Depreciation and accounting shall be completed and reviewed before close.
6. **FA-6 Reconciliation before close.** Material asset, depreciation, and GL reconciliation exceptions shall be reviewed before final close.
7. **FA-7 Retirement governance.** Retirements and reinstatements shall be supported by approved transaction, accounting, and gain/loss evidence.
8. **FA-8 Evidence retention.** Setup, posting, approval, depreciation, reconciliation, and retirement evidence shall be retained in governed locations.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Temporary source-line posting exception | Asset Accounting Manager | Per batch |
| Setup threshold or book-rule exception | Controller delegate + Asset Accounting Manager | 30 days |
| Close with unresolved nonmaterial recon exception | Controller delegate | Through close only |
| Emergency retirement workflow exception | Asset Accounting Manager + Internal Control delegate | Per event |

---

## 3) High-Level Governance Process - Fixed Assets Lifecycle on Oracle 26B

```text
[ Setup / Source Transaction ]
            |
            v
(P1) Foundation and Setup Controls
            |
            v
(P2) Source Ingestion and Additions
            |
            v
(P3) Transaction Review, Approval, and Posting
            |
            v
(P4) Depreciation and Accounting
            |
            v
(P5) Reconciliation and Monitoring
            |
            v
(P6) Retirement, Reinstatement, and Close
```

### 3.1 Process Control Points

| ID | Process step | Control point | Oracle / operating enforcement |
|---|---|---|---|
| CP-01 | Foundation and Setup Controls | Books, categories, thresholds, and calendars governed before use | Setup and Maintenance tasks / approval |
| CP-02 | Source Ingestion and Additions | Incoming asset lines are complete and valid before posting | Mass Additions / source-line review |
| CP-03 | Transaction Review, Approval, and Posting | Material asset transactions reviewed and approved before posting | Approval rules and queue status control |
| CP-04 | Depreciation and Accounting | Depreciation and accounting complete before close | Depreciation and accounting processes |
| CP-05 | Reconciliation and Monitoring | Asset, depreciation, and GL exceptions reviewed | Asset Inquiry, reports, reconciliation review |
| CP-06 | Retirement, Reinstatement, and Close | Retirement actions and period close backed by evidence | Retirement workflow and close checklist |

### 3.2 Process Owners
- **End-to-end Assets owner:** Asset Accounting Manager
- **P1 owner:** Asset Accounting Manager + IT / implementation owner
- **P2 / P3 owner:** Asset Accountant
- **P4 / P5 / P6 owner:** Asset Accounting Manager with Financial Analyst support

---

## 4) Standard Operating Procedures (SOPs)

### SOP-01: Govern Asset Setup
- **Objective:** Ensure books, categories, thresholds, locations, and conventions are approved and current before operational use.
- **Roles:** Asset Accounting Manager, implementation owner.
- **Steps:**
  1. Review requested setup or change.
  2. Validate downstream accounting and reporting impact.
  3. Approve and implement through controlled change.
  4. Retain approval and configuration evidence.
- **Evidence:** Approved setup request, configuration record, impact note.

### SOP-02: Review and Post Asset Additions
- **Objective:** Validate source lines and additions before posting assets.
- **Roles:** Asset Accountant.
- **Steps:**
  1. Review additions or transferred source lines.
  2. Resolve queue errors or missing fields.
  3. Confirm correct book, category, and threshold treatment.
  4. Post approved additions.
- **Evidence:** Mass-additions review, posting log, exception resolution.

### SOP-03: Review Asset Transactions and Approvals
- **Objective:** Govern transfers, adjustments, reclassifications, capitalization, and other lifecycle changes.
- **Roles:** Asset Accountant, Asset Accounting Manager.
- **Steps:**
  1. Enter or import transaction.
  2. Route through required approval where applicable.
  3. Review transaction group or batch details.
  4. Post only after approval and validation.
- **Evidence:** Approval record, transaction group detail, posting result.

### SOP-04: Run Depreciation and Accounting
- **Objective:** Complete and review depreciation and accounting before close.
- **Roles:** Asset Accountant, Asset Accounting Manager.
- **Steps:**
  1. Confirm additions and transaction queues are ready.
  2. Run depreciation.
  3. Review exceptions and fix material issues.
  4. Run accounting and review journal outputs.
- **Evidence:** Depreciation run, accounting output, exception review.

### SOP-05: Reconcile Asset Reporting and Balances
- **Objective:** Confirm asset, depreciation, and GL views reconcile before close.
- **Roles:** Asset Accounting Manager, Financial Analyst.
- **Steps:**
  1. Review Asset Inquiry and relevant reports.
  2. Review asset balances, depreciation, and transaction exceptions.
  3. Reconcile material totals to approved GL / SLA outputs.
  4. Record unresolved items and close decision.
- **Evidence:** Reconciliation package, exception log, signoff.

### SOP-06: Process Retirements and Reinstatements
- **Objective:** Govern retirement and reinstatement actions with approved accounting and gain/loss review.
- **Roles:** Asset Accountant, Asset Accounting Manager.
- **Steps:**
  1. Enter retirement or reinstatement transaction.
  2. Confirm approval routing and transaction-group requirements.
  3. Post and review accounting results.
  4. Retain gain/loss, cost-of-removal, and disposal evidence.
- **Evidence:** Retirement batch, approval, journal review, report output.

---

## 5) RACI - Fixed Assets Operating Roles

| Governance activity | Asset Accountant | Asset Accounting Manager | Financial Analyst | Upstream Source Owner | IT / Implementation Owner |
|---|---|---|---|---|---|
| Setup and configuration control | I | A | I | I | R |
| Additions and source-line review | R | A | I | C | I |
| Asset transaction approval review | R | A | I | I | I |
| Depreciation and accounting review | R | A | C | I | I |
| Reconciliation and close review | C | A | R | I | I |
| Retirement and reinstatement governance | R | A | C | I | I |

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Approved setup and change control | Invalid books, thresholds, or categories | Preventive | Asset Accounting Manager | Controller delegate | Per change | Change approval | SOP-01 / CP-01 |
| C-02 | Source-line completeness | Invalid additions enter Assets | Preventive | Asset Accountant | Asset Accounting Manager | Per batch | Additions review | SOP-02 / CP-02 |
| C-03 | Correct book / category assignment | Misstated capitalization or reporting | Preventive | Asset Accountant | Asset Accounting Manager | Per batch | Posting review | SOP-02 / CP-02 |
| C-04 | Transaction approval before posting | Unapproved lifecycle change | Preventive | Asset Accounting Manager | Controller delegate | Per material transaction | Approval evidence | SOP-03 / CP-03 |
| C-05 | Depreciation completion | Close with incomplete depreciation | Preventive | Asset Accounting Manager | Financial Analyst | Per period | Depreciation run record | SOP-04 / CP-04 |
| C-06 | Accounting and journal review | Asset accounting errors reach GL | Detective | Asset Accountant | Asset Accounting Manager | Per period | Accounting output | SOP-04 / CP-04 |
| C-07 | Reconciliation review | Asset and GL totals diverge without review | Detective | Asset Accounting Manager | Controller delegate | Per close | Reconciliation package | SOP-05 / CP-05 |
| C-08 | Retirement accounting review | Disposal / gain-loss misstatement | Detective | Asset Accountant | Asset Accounting Manager | Per retirement batch | Retirement report | SOP-06 / CP-06 |

---

## 7) Issue Management Procedure (Operations Issues)

1. Log issue with book, transaction type, and impacted reporting or close process.
2. Assess severity and active-close impact.
3. Assign remediation owner and due date.
4. Close only after retained validation evidence.

| Severity | Example | Response target |
|---|---|---|
| S1 | Material depreciation / accounting failure, unresolved close variance | Same business day |
| S2 | Repeated source-line errors, approval backlog, extract freshness failure | 2 business days |
| S3 | Nonmaterial master-data or labeling issue | 5 business days |

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Setup approval and change record | Prove controlled setup | Asset Accounting Manager | 7 years or policy minimum |
| Mass additions / posting output | Prove controlled addition processing | Asset Accountant | 7 years |
| Transaction approval record | Prove material change approval | Asset Accounting Manager | 7 years |
| Depreciation and accounting output | Prove period processing | Asset Accountant | 7 years |
| Reconciliation package | Prove close review | Asset Accounting Manager | 7 years |
| Retirement and reinstatement report | Prove disposal governance | Asset Accountant | 7 years |

---

## 9) Adoption and Training Notes

- Train asset operators on queue statuses, approval expectations, and posting evidence.
- Treat setup changes as governed accounting changes, not simple administration.
- Review reconciliation and retirement evidence as part of the close routine.

---

## 10) Deck Outline - Fixed Assets Controlled Operations Briefing

1. Why fixed assets lifecycle events require explicit governance
2. Setup, additions, depreciation, and retirement control points
3. Approval and reconciliation model
4. Close evidence and unresolved-exception handling
5. Leadership decisions and owner confirmation

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial Fixed Assets controlled-operations package created from Oracle source material | Asset Accounting Manager |
