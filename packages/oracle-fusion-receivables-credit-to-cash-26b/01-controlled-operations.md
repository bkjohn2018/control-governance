# Governance Package: Oracle Fusion Cloud Receivables Credit to Cash 26B — Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - [Overview of Oracle Receivables](https://docs.oracle.com/en/cloud/saas/financials/26b/fairp/overview-of-oracle-receivables.html)
> - *Using Receivables Credit to Cash 26B*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Receivables Credit to Cash (release **26B**) |
| Business function | Customer billing, cash application, revenue recognition, credit management, and AR balance governance |
| Governance objective | Establish controlled, auditable, and repeatable AR operations that preserve transaction integrity, receipt application accuracy, revenue compliance, credit discipline, and retained evidence |
| Primary audience | AR Process Owner, AR Manager, Billing Specialist, Cash Application Specialist, Credit Manager, Revenue Accountant, Finance Controls Lead, Controllership, Internal Audit |
| Reference pattern | Oracle-native process execution across Billing, Receivables Balances, Revenue Management, and Credit Management with explicit control ownership and evidence retention |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Operational, control-focused, and evidence-oriented |
| Non-goals | Order-to-cash front-end CRM design, treasury investment policy, enterprise record-to-report design outside AR posting and reconciliation handoffs |

---

## 1) Executive Summary

**Context.** AR leadership needs a practical operating baseline across billing, collections, revenue recognition, and credit management. Oracle Fusion Receivables 26B provides integrated work areas for these functions, but governance still requires explicit control ownership, evidence expectations, exception routing, and review cadence.

**What this package does.** It defines the controlled operating layer for AR Credit to Cash: policy rules, end-to-end process gates, SOPs, named roles, a COSO-style control matrix, issue management, and evidence expectations connecting daily execution to monthly governance review.

**What is ready.** A seven-stage AR operating model, core control points across billing, receipts, revenue, and credit, named role accountability, control evidence expectations, and a baseline issue workflow.

**What remains.** Final owner names, tenant-specific workflow and report names, and threshold tuning after implementation review.

**What we ask of leadership.**
1. Approve this controlled operations baseline for AR Credit to Cash.
2. Confirm named control owners and reviewers across billing, cash application, revenue, and credit.
3. Require monthly governance review of control performance, unapplied cash, revenue exceptions, and credit breaches.

---

## 2) Policy Addendum — AR Controlled Operations on Oracle Cloud

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for customer billing, receipt application, revenue recognition, credit authorization, and AR balance management in Oracle Fusion Receivables.

### 2.2 Scope
- In scope: transaction creation and completion, AutoInvoice import, billing adjustments and disputes, receipt capture and application, lockbox processing, remittance and clearing, revenue recognition and contingencies, credit profiles and authorization, AR-to-GL reconciliation, and receivables period status.
- Out of scope: CRM order capture, pricing strategy, treasury cash positioning, and record-to-report governance outside AR operational handoffs.

### 2.3 Policy Rules
1. **AR-1 Transaction completeness.** Receivables transactions shall complete required validation and, where enabled, transaction-completion review before becoming billable or collectible in the governed process.
2. **AR-2 AutoInvoice control.** AutoInvoice imports shall be reviewed for errors and corrected or dispositioned before downstream billing and collection actions rely on the data.
3. **AR-3 Adjustment governance.** Billing adjustments, disputes, and credit memos shall follow approved authorization paths with retained evidence.
4. **AR-4 Receipt application discipline.** Receipts shall be applied, remitted, cleared, or reversed only through approved processes with documented disposition for unapplied and on-account balances.
5. **AR-5 Revenue recognition control.** Revenue recognition and contingency changes shall follow approved policies, programs, and review routines.
6. **AR-6 Credit authorization.** Credit limits, reviews, and authorization requests shall be evaluated under approved credit-management procedures before material exposure is accepted.
7. **AR-7 Reconciliation before close.** Material AR-to-GL reconciliation exceptions shall be reviewed before receivables accounting period close.
8. **AR-8 Evidence retention.** Critical billing, receipt, revenue, credit, and reconciliation evidence shall be retained in governed locations.
9. **AR-9 Exception governance.** Exceptions shall be documented with owner, rationale, due date, and escalation path.
10. **AR-10 Monthly review.** AR governance owners shall review KPI results, unapplied cash aging, revenue exceptions, credit breaches, and repeated control failures monthly.

### 2.4 Exception Authority

| Exception type | Approver | Max duration |
|---|---|---|
| Temporary bypass of transaction-completion review | AR Manager | Per event |
| Credit limit override above policy threshold | Credit Manager + AR Process Owner | Per customer / order |
| Receipt application exception with unresolved remittance error | AR Manager + Finance Controls Lead | Per batch |
| Revenue contingency release without standard approval path | Revenue Accountant + Controller delegate | Per transaction set |
| Temporary control threshold exception during pilot calibration | AR Process Owner | Through pilot window |

### 2.5 Review Cadence
Monthly during initial operation; quarterly after formalization; immediately after material control failure, audit issue, workflow redesign, or major Oracle release impact.

---

## 3) High-Level Governance Process — Credit to Cash on Oracle 26B

```text
[ Customer Transaction / Billing Event ]
                |
                v
(P1) Billing and Transaction Completion
                |
                v
(P2) AutoInvoice Import and Validation
                |
                v
(P3) Adjustments, Disputes, and Credit Memos
                |
                v
(P4) Receipt Capture and Application
                |
                v
(P5) Revenue Recognition and Contingencies
                |
                v
(P6) Credit Management and Authorization
                |
                v
(P7) AR Balance Review, Reconciliation, and Governance
```

### 3.1 Process Control Points

| ID | Process step | Control point | Oracle / operating enforcement |
|---|---|---|---|
| CP-01 | Billing and Transaction Completion | Required transaction attributes and completion review satisfied | Billing work area, control of transaction completion |
| CP-02 | AutoInvoice Import and Validation | Import errors reviewed and corrected before reliance | AutoInvoice import and resubmit controls |
| CP-03 | Adjustments, Disputes, and Credit Memos | Adjustments approved before financial effect is accepted | Adjustment approval workflow |
| CP-04 | Receipt Capture and Application | Receipts applied correctly; unapplied balances monitored | Receipt application, lockbox, remittance review |
| CP-05 | Revenue Recognition and Contingencies | Revenue programs and contingencies reviewed per policy | Recognize Revenue program and revenue adjustments |
| CP-06 | Credit Management and Authorization | Credit exposure within approved limits or override | Credit profiles, case folders, authorization review |
| CP-07 | AR Balance Review and Governance | Reconciliation and period status reviewed before close | AR-to-GL reconciliation, period status, monthly review |

### 3.2 Process Owners
- **End-to-end AR owner:** AR Process Owner
- **P1 / P2 / P3 owner:** AR Manager
- **P4 owner:** Cash Application Specialist / AR Manager
- **P5 owner:** Revenue Accountant
- **P6 owner:** Credit Manager
- **P7 owner:** AR Process Owner with Finance Controls Lead oversight

---

## 4) Standard Operating Procedures (SOPs)

### SOP-01: Create or Complete Billing Transaction
- **Objective:** Ensure receivables transactions are complete, valid, and ready for billing or collection activity.
- **Roles:** Billing Specialist, AR Analyst.
- **Steps:**
  1. Create or review the transaction in the Billing work area.
  2. Validate customer, business unit, terms, tax, and line completeness.
  3. Complete transaction-completion review where enabled.
  4. Retain source documentation and completion evidence.
- **Evidence:** Transaction record, completion review, source attachment set.

### SOP-02: Process AutoInvoice Import
- **Objective:** Import external billing data with validated, corrected, and dispositioned errors.
- **Roles:** Billing Specialist, AR Analyst.
- **Steps:**
  1. Run or monitor the AutoInvoice import process.
  2. Review rejected or incomplete records.
  3. Correct source data or mapping defects and resubmit as required.
  4. Confirm successful records before downstream billing actions rely on them.
- **Evidence:** Import log, error report, resubmit record.

### SOP-03: Approve Billing Adjustments and Disputes
- **Objective:** Govern adjustments, disputes, and credit memos through approved authorization.
- **Roles:** Billing Specialist, AR Manager, designated approver.
- **Steps:**
  1. Initiate adjustment, dispute, or credit memo request.
  2. Route through required approval workflow.
  3. Resolve returned or rejected items.
  4. Retain approval and disposition evidence.
- **Evidence:** Adjustment approval history, dispute log.

### SOP-04: Capture and Apply Receipts
- **Objective:** Ensure receipts are recorded and applied accurately with monitored unapplied balances.
- **Roles:** Cash Application Specialist, AR Analyst, AR Manager.
- **Steps:**
  1. Create, import, or generate receipts through approved channels including lockbox or automatic receipts.
  2. Apply, unapply, reverse, or remit receipts according to policy.
  3. Review unapplied, on-account, and remittance exceptions.
  4. Escalate aged unapplied balances and funds transfer errors.
- **Evidence:** Receipt batch log, application record, remittance review.

### SOP-05: Execute Revenue Recognition and Adjustments
- **Objective:** Run revenue recognition and govern contingencies and revenue adjustments per policy.
- **Roles:** Revenue Accountant, AR Manager.
- **Steps:**
  1. Confirm billing and scheduling rules are current for the period.
  2. Run Recognize Revenue or equivalent approved program.
  3. Review revenue distributions, contingencies, and adjustment requests.
  4. Escalate policy exceptions or material misstatements.
- **Evidence:** Revenue run log, contingency review, adjustment approval.

### SOP-06: Manage Credit Authorization and Review
- **Objective:** Maintain credit profiles, evaluate authorization requests, and perform periodic credit reviews.
- **Roles:** Credit Manager, Credit Analyst, AR Manager.
- **Steps:**
  1. Maintain customer credit profiles, limits, and review cycles.
  2. Evaluate credit authorization requests and case-folder recommendations.
  3. Document overrides and periodic review outcomes.
  4. Escalate material exposure or policy breaches.
- **Evidence:** Credit case folder, authorization record, review log.

### SOP-07: Reconcile AR Balances and Conduct Governance Review
- **Objective:** Reconcile receivables to GL, manage period status, and review control performance monthly.
- **Roles:** AR Manager, Revenue Accountant, AR Process Owner, Finance Controls Lead.
- **Steps:**
  1. Review AR-to-GL reconciliation and receivables accounting period status.
  2. Review KPI scorecard, unapplied cash aging, revenue exceptions, and credit breaches.
  3. Assign remediation owners and due dates.
  4. Record governance decisions and follow-up actions.
- **Evidence:** Reconciliation record, period status review, governance meeting minutes.

---

## 5) RACI — AR Operating Roles

| Governance activity | Billing Specialist | Cash Application Specialist | AR Manager | Credit Manager | Revenue Accountant | AR Process Owner | Finance Controls Lead |
|---|---|---|---|---|---|---|---|
| Transaction creation and completion | R | I | A | I | C | I | I |
| AutoInvoice import monitoring | R | I | A | I | I | C | I |
| Adjustment / dispute approval | R | I | A | C | C | C | I |
| Receipt capture and application | C | R | A | I | I | C | I |
| Revenue recognition review | I | I | C | I | R | A | C |
| Credit authorization and review | I | I | C | R | I | A | C |
| AR reconciliation and period status | C | C | R | I | C | A | C |
| Monthly governance review | I | C | R | C | C | A | C |

R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 6) Internal Control Matrix (COSO-style)

| ID | Control objective | Risk addressed | Type | Owner | Reviewer | Frequency | Evidence | SOP / CP link |
|---|---|---|---|---|---|---|---|---|
| C-01 | Transaction completion discipline | Incomplete or unauthorized billing enters collection | Preventive | AR Manager | AR Process Owner | Daily | Completion review record | SOP-01 / CP-01 |
| C-02 | AutoInvoice error management | Imported billing data is unreliable | Detective | Billing Specialist | AR Manager | Per import | Import / error report | SOP-02 / CP-02 |
| C-03 | Adjustment approval compliance | Unauthorized credits or adjustments post | Preventive | AR Manager | AR Process Owner | Per adjustment | Approval workflow record | SOP-03 / CP-03 |
| C-04 | Receipt application accuracy | Cash misapplied or left unapplied | Preventive | Cash Application Specialist | AR Manager | Daily | Application log | SOP-04 / CP-04 |
| C-05 | Unapplied cash monitoring | Collection delays and misstatement risk | Detective | AR Manager | AR Process Owner | Daily / weekly | Unapplied receipt report | SOP-04 / CP-04 |
| C-06 | Revenue recognition oversight | Revenue posted outside policy | Preventive | Revenue Accountant | AR Process Owner | Per run / period | Revenue run review | SOP-05 / CP-05 |
| C-07 | Credit limit enforcement | Unauthorized customer exposure | Preventive | Credit Manager | AR Process Owner | Per request / review | Credit authorization record | SOP-06 / CP-06 |
| C-08 | AR reconciliation review | AR balances do not reconcile to GL before close | Detective | AR Manager | Finance Controls Lead | Per close | Reconciliation evidence | SOP-07 / CP-07 |
| C-09 | Monthly governance review | Repeat failures persist without action | Detective | AR Process Owner | Finance Controls Lead | Monthly | Scorecard and minutes | SOP-07 / CP-07 |

---

## 7) Issue Management Procedure (Operations Issues)

1. Log the issue with customer, transaction, receipt, revenue, or credit context and impact.
2. Classify severity and contain if billing, application, revenue, or close risk remains active.
3. Assign remediation action and target date.
4. Validate resolution before closure.

| Severity | Example | Response target |
|---|---|---|
| S1 | Unauthorized credit memo, material receipt misapplication, revenue misstatement with reporting impact | Same business day |
| S2 | Large AutoInvoice rejection rate, aged unapplied cash above threshold, credit override without documentation | 2 business days |
| S3 | Nonmaterial mapping, notification, or template issue | 5 business days |

---

## 8) Evidence and Records

| Artifact | Purpose | Owner | Retention |
|---|---|---|---|
| Transaction completion / approval record | Prove billing control | AR Manager | 7 years or policy minimum |
| AutoInvoice import and error report | Prove import oversight | Billing Specialist | 7 years |
| Adjustment and dispute approval history | Prove authorization | AR Manager | 7 years |
| Receipt application and remittance log | Prove cash application control | Cash Application Specialist | 7 years |
| Revenue recognition run and contingency review | Prove revenue control | Revenue Accountant | 7 years |
| Credit authorization and review record | Prove credit governance | Credit Manager | 7 years |
| AR reconciliation and period status review | Prove close governance | AR Manager | 7 years |

---

## 9) Adoption and Training Notes

- Train billing and cash application teams on evidence expectations across all four Receivables work areas.
- Require explicit review for AutoInvoice errors, unapplied receipts, revenue contingencies, and credit overrides.
- Use monthly governance review to tighten thresholds for DSO, unapplied cash, and dispute aging.

---

## 10) Deck Outline — AR Controlled Operations Briefing

1. Why Credit to Cash needs explicit governance across billing, cash, revenue, and credit
2. End-to-end AR operating flow and control points
3. AutoInvoice, receipt application, revenue, and credit control model
4. Reconciliation and evidence requirements
5. Leadership decisions and ownership assignments

---

## 11) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-20 | Initial AR Credit to Cash controlled-operations package created from Oracle Receivables 26B source anchors | AR Process Owner |
