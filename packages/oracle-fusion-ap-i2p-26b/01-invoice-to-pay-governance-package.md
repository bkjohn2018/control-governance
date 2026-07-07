# Governance Bundle: AP Invoice-to-Pay (Oracle Fusion Financials 26B)

## 0) Bundle Inputs
- Domain: Accounts Payable Invoice-to-Pay (I2P)
- Business function: AP operations and payment governance
- Objective: Strengthen AP controls for AP managers and process owners
- Audience: AP managers, process owners, and AP operations leads
- Maturity: Operational
- Tone: Operational and control-focused
- Primary reference: Oracle Fusion Cloud Financials 26B, Using Payables Invoice to Pay

## 1) Executive Summary
### Decision context
AP leadership needs a practical governance baseline to improve control consistency across the Invoice-to-Pay lifecycle without delaying day-to-day invoice throughput. This package establishes an operational governance model for immediate use.

### Key findings
- Control ownership is often implied in AP operations and must be made explicit at each process gate.
- Invoice accuracy, approval compliance, payment timeliness, and duplicate prevention are the minimum control outcomes required for AP governance effectiveness.
- A governance model is only operational if policy requirements, process checkpoints, SOP evidence, and KPI thresholds are traceable to one another.

### Business impact
- Financial impact: lower duplicate-payment leakage and avoidable late-payment costs.
- Operational impact: fewer rework loops and faster exception resolution through clear ownership.
- Risk/compliance impact: stronger auditability through explicit evidence, escalation paths, and enforceable policy statements.

### Recommended actions
1. Approve this governance baseline for operational use in AP I2P.
2. Assign named control owners for each gate in the RACI section.
3. Adopt the KPI thresholds and quarterly governance review cadence.
4. Conduct periodic reviews to validate and refine controls.

### Requested decision
Approve this AP I2P governance package for operational use with quarterly control performance reviews.

## 2) Policy Addendum: AP Invoice-to-Pay Control Governance Standard
### Purpose
Define mandatory AP Invoice-to-Pay control expectations to ensure invoice integrity, approval compliance, timely payment execution, and payment risk prevention.

### Scope
- In scope: Supplier invoice intake, validation, coding, approval workflow, payment preparation, payment execution, and post-payment review in Oracle Fusion AP.
- Out of scope: AR collections, GL close governance outside AP posting controls, procurement sourcing governance.

### Policy statements
1. All supplier invoices must be captured with complete required attributes before entering approval workflow.
2. AP processing teams must apply defined validation checks prior to routing invoices for approval.
3. No invoice may be paid without successful completion of required approval controls based on approval matrix rules.
4. Payment runs must include duplicate prevention checks and exception review before release.
5. AP must document evidence for critical control points and retain evidence per retention requirements.
6. Exceptions to control requirements must be approved by the AP manager and logged for governance review.
7. Control performance metrics must be reviewed monthly by AP governance owners.

### Roles and accountability
- Policy owner: AP Process Owner
- Control owner group: AP Managers
- Execution roles: AP Analysts and AP Specialists
- Oversight role: Finance Controls Lead

### Compliance, exceptions, and enforcement
- Non-compliance events are logged as data/control issues and remediated with owner and due date.
- Repeated control breaches trigger escalation to Finance leadership.
- Temporary exceptions require documented business justification, approver, and expiry date.

### Review and version control
- Review cadence: Monthly KPI review, quarterly policy review.
- Version owner: AP Process Owner.

## 3) High-Level Governance Process
### Process purpose
Provide an end-to-end AP I2P governance flow with clear handoffs, control gates, and accountability.

### Trigger and endpoint
- Trigger: Supplier invoice enters AP intake queue.
- Endpoint: Payment posted and governance evidence archived.

### Process flow
1. **Invoice Intake and Registration**  
   AP Analyst captures invoice and required metadata.
2. **Pre-Approval Validation**  
   AP Specialist validates required fields, supplier status, and basic policy checks.
3. **Approval Routing and Decision**  
   Approval workflow applies matrix rules; approver accepts/rejects/returns invoice.
4. **Payment Run Preparation**  
   AP team compiles payable items and runs duplicate and hold checks.
5. **Payment Execution**  
   AP Manager authorizes release according to control requirements.
6. **Post-Payment Control Review**  
   AP Process Owner reviews exceptions, KPI trends, and unresolved issues.

### Control points and escalations
- CP1: Intake completeness threshold check.
- CP2: Validation pass/fail gate before approval routing.
- CP3: Approval compliance gate before payment eligibility.
- CP4: Duplicate-payment prevention check before payment release.
- CP5: Monthly governance review and remediation tracking.

### Outputs and evidence
- Approved invoice records, approval logs, payment run exception logs, duplicate check reports, KPI scorecard, and issue tracker updates.

## 4) Standard Operating Procedure: AP Invoice-to-Pay Governance Execution
### 1) Purpose
Define the repeatable AP I2P governance procedure that operational teams execute to meet control objectives.

### 2) Scope
- In scope: AP I2P operational governance controls and monitoring.
- Out of scope: Non-AP process governance.
- Frequency: Daily execution steps with monthly governance review.

### 3) Definitions
- Control point: A required checkpoint that must pass before proceeding.
- Exception: A transaction or control event that violates standard criteria.
- Evidence artifact: Stored proof that a control was executed.

### 4) Roles and responsibilities
| Role | Responsibility | Backup Role |
|---|---|---|
| AP Analyst | Intake and initial data capture | AP Specialist |
| AP Specialist | Validation and exception triage | AP Analyst |
| AP Manager | Approval governance and payment release authorization | AP Process Owner |
| AP Process Owner | KPI oversight and policy compliance | Finance Controls Lead |
| Finance Controls Lead | Escalation oversight and remediation governance | Controllership Delegate |

### 5) Prerequisites and inputs
- Systems: Oracle Fusion AP (I2P), issue log, KPI tracker.
- Required access: AP transaction processing, approval monitoring, payment run controls.
- Inputs: Supplier invoice data, approval matrix, payment calendar, exception criteria.

### 6) Procedure steps
1. Register incoming invoice in AP queue.  
   - Expected result: Invoice is uniquely recorded and traceable.  
   - Evidence produced: Intake timestamp and transaction ID.
2. Perform required field and policy validation checks.  
   - Expected result: Invoice classified as valid or exception.  
   - Evidence produced: Validation checklist result.
3. Route valid invoice through approval workflow.  
   - Expected result: Approval outcome captured per matrix rules.  
   - Evidence produced: Approval log entry.
4. Resolve returned/rejected invoice exceptions before payment eligibility.  
   - Expected result: Exception disposition recorded.  
   - Evidence produced: Exception resolution note with owner/date.
5. Prepare payment run and execute duplicate/hold checks.  
   - Expected result: Payment candidate set is control-cleared.  
   - Evidence produced: Duplicate check and hold check report.
6. Submit payment run for manager authorization and release.  
   - Expected result: Authorized payments are executed on schedule.  
   - Evidence produced: Release authorization record.
7. Conduct monthly control review and remediation tracking.  
   - Expected result: KPI and issue status reviewed with actions assigned.  
   - Evidence produced: Governance review minutes and action log.

### 7) Control points and exceptions
- Control: Intake completeness >= threshold.  
  Trigger: Missing required invoice attributes.  
  Required action: Return to intake correction queue.  
  Escalation path: AP Specialist -> AP Manager if not resolved within 1 business day.
- Control: Approval compliance = threshold.  
  Trigger: Payment candidate lacks required approval state.  
  Required action: Remove from payment run and re-route for approval.  
  Escalation path: AP Manager -> AP Process Owner for repeated breaches.
- Control: Duplicate prevention <= threshold.  
  Trigger: Potential duplicate match in pre-release checks.  
  Required action: Place hold and investigate before release.  
  Escalation path: AP Manager -> Finance Controls Lead for confirmed duplicate risk.

### 8) Outputs and retention
- Output artifact: Approval and payment control logs.  
  Storage location: Governed AP control repository.  
  Retention period: 7 years (or local policy requirement, whichever is greater).
- Output artifact: Monthly KPI and issue review records.  
  Storage location: AP governance documentation workspace.  
  Retention period: 3 years minimum.

### 9) Review and version history
- Owner: AP Process Owner
- Next review date: Quarterly
- Version: 2.1.1
- Change summary: Operational governance baseline for AP I2P.

## 5) RACI / Roles and Responsibilities
| Governance Activity | AP Analyst | AP Specialist | AP Manager | AP Process Owner | Finance Controls Lead |
|---|---|---|---|---|---|
| Invoice intake and data capture | R | C | A | I | I |
| Validation and exception triage | C | R | A | I | I |
| Approval compliance monitoring | I | R | A | C | I |
| Payment run control clearance | I | R | A | C | I |
| Duplicate-risk escalation | I | R | A | C | C |
| Monthly KPI/control review | I | C | R | A | C |
| Remediation action governance | I | C | R | A | C |
| Quarterly policy review | I | I | C | A/R | C |

R = Responsible, A = Accountable, C = Consulted, I = Informed

## 6) Metric Definitions (Control-Focused)
### Metric 1: Invoice First-Pass Validation Rate
- Metric type: Operational KPI
- Purpose: Measure upfront invoice quality and validation effectiveness.
- Formula: (Invoices passing validation on first attempt / Total invoices validated) * 100
- Grain: Daily, aggregated monthly
- Source system: Oracle Fusion AP validation records
- Owner: AP Manager
- Steward: AP Specialist
- Cadence: Daily monitoring, monthly governance review
- Threshold:
  - Green: >= 97%
  - Amber: 94% to <97%
  - Red: <94%
- Escalation owner: AP Process Owner for red status in two consecutive weeks

### Metric 2: Approval Compliance Rate
- Metric type: Operational KPI
- Purpose: Ensure payments proceed only after required approvals.
- Formula: (Invoices paid with fully compliant approval trail / Total invoices paid) * 100
- Grain: Payment run and monthly aggregate
- Source system: Oracle Fusion AP approval and payment logs
- Owner: AP Manager
- Steward: AP Analyst
- Cadence: Per payment run and monthly
- Threshold:
  - Green: 100%
  - Amber: 99.0% to <100%
  - Red: <99.0%
- Escalation owner: Finance Controls Lead for any red result

### Metric 3: On-Time Payment Execution Rate
- Metric type: Operational KPI
- Purpose: Track payment timeliness against due dates and schedules.
- Formula: (Invoices paid on or before due date / Total invoices paid) * 100
- Grain: Weekly and monthly
- Source system: Oracle Fusion AP invoice due date and payment posting data
- Owner: AP Manager
- Steward: AP Specialist
- Cadence: Weekly review, monthly governance reporting
- Threshold:
  - Green: >= 98%
  - Amber: 95% to <98%
  - Red: <95%
- Escalation owner: AP Process Owner when red persists for 2 monthly cycles

### Metric 4: Duplicate Payment Prevention Effectiveness
- Metric type: Diagnostic control metric
- Purpose: Confirm duplicate-risk controls are preventing payment leakage.
- Formula: 1 - (Confirmed duplicate payments / Total payments executed)
- Grain: Monthly
- Source system: Payment exception log and confirmed duplicate investigations
- Owner: AP Process Owner
- Steward: AP Manager
- Cadence: Monthly
- Threshold:
  - Green: >= 99.98%
  - Amber: 99.90% to <99.98%
  - Red: <99.90%
- Escalation owner: Finance Controls Lead for any confirmed duplicate event

## Document Control
- Package owner: AP Process Owner
- Effective date: 2026-07-06
- Review cycle: Monthly operational review and quarterly control design review
- Version: 2.1 Draft Native Reporting Expansion

## Source
- Oracle documentation index used for package alignment: https://docs.oracle.com/en/cloud/saas/financials/26b/fappp/index.html
- Oracle Fusion Payables predefined reports reference: https://docs.oracle.com/en/cloud/saas/financials/26b/ocuar/oracle-fusion-payables-predefined-reports.html#OCUARoracle-fusion-payables-predefined-reports

---

## Appendix A: Risk and Internal Control Matrix
### Purpose
Define AP I2P risks, control objectives, control activities, evidence, and test expectations so the governance package can be reviewed consistently by AP leadership, Finance Controls, and audit stakeholders.

### COSO-style coverage
- Control environment: AP Process Owner and AP Managers are accountable for governance expectations, role assignment, and escalation.
- Risk assessment: Key risks are duplicate payment, unauthorized payment, incomplete invoice data, approval noncompliance, delayed payment, and unresolved exceptions.
- Control activities: Preventive and detective controls are embedded at intake, validation, approval, payment preparation, payment release, and post-payment review.
- Information and communication: KPI scorecards, issue logs, approval logs, and governance review minutes communicate control status.
- Monitoring activities: Monthly KPI/control review and quarterly control design review evaluate whether controls remain effective.

### Risk-control matrix
| Risk | Control objective | Control activity | Type | Owner | Performer | Reviewer | Frequency | Evidence | Test approach |
|---|---|---|---|---|---|---|---|---|---|
| Incomplete or inaccurate invoice attributes enter workflow | Invoices entering approval must contain required AP attributes and traceable transaction identifiers | Validate required fields before approval routing; return incomplete invoices to correction queue | Preventive | AP Manager | AP Specialist | AP Manager | Daily | Validation checklist result, transaction ID, intake timestamp | Sample invoices entering approval and verify required fields and validation evidence |
| Invoice bypasses required approval | No invoice may become payment-eligible without required approval trail | Approval workflow must apply matrix rules before payment eligibility | Preventive / automated | AP Manager | AP Analyst / workflow | AP Process Owner | Per invoice / payment run | Approval log entry, approval status, workflow routing record | Sample paid invoices and verify approval trail before payment date |
| Duplicate payment is released | Duplicate-risk items must be identified and resolved before payment release | Run duplicate and hold checks during payment run preparation; place suspected duplicates on hold | Detective / preventive | AP Process Owner | AP Specialist | Finance Controls Lead | Per payment run | Duplicate check report, hold report, investigation notes | Reperform duplicate check for sampled payment runs and verify disposition of flagged items |
| Unauthorized or unsupported payment run is released | Payment release must be authorized by an accountable AP Manager after control clearance | Manager reviews payment candidate set, exception status, and duplicate/hold reports before release | Preventive / approval | AP Manager | AP Manager | AP Process Owner | Per payment run | Release authorization record, payment run control packet | Sample payment runs and verify authorization occurred after control clearance |
| Exceptions remain unresolved or unowned | Control exceptions must have owner, disposition, due date, and escalation path | Log exceptions and track remediation through governance review | Corrective / monitoring | AP Process Owner | AP Specialist | Finance Controls Lead | Daily triage / monthly review | Exception log, remediation action log, governance minutes | Review aged exceptions and verify owner, action, status, and escalation |
| KPI deterioration is not acted on | Control performance trends must trigger timely governance action | Review KPI scorecard monthly and assign remediation actions for red or recurring amber status | Detective / monitoring | AP Process Owner | AP Manager | Finance Controls Lead | Monthly | KPI scorecard, review minutes, action log | Inspect monthly review records and verify actions for breached thresholds |

### Deficiency severity guide
| Severity | Criteria | Required response |
|---|---|---|
| Critical | Control failure enables unauthorized payment, confirmed duplicate payment, missing approval for paid invoice, or material audit exposure | Immediate escalation to Finance Controls Lead and AP Process Owner; define containment and remediation before next payment cycle |
| Major | Control evidence missing, repeated threshold breach, unresolved exception aging beyond target, or design gap in approval/payment gate | Assign owner and due date; review in next monthly governance meeting |
| Minor | Documentation inconsistency, isolated evidence quality issue, or unclear procedure language that does not impair control operation | Correct in next package refresh or quarterly review |

### Control testing expectations
- Test frequency: Monthly for the first quarter, then quarterly if control performance is stable.
- Sample basis: Include invoices from each major process gate and at least one payment run per month.
- Pass criteria: Control evidence exists, control occurred before dependent action, reviewer is appropriate, and exceptions are dispositioned.
- Retention: Testing evidence follows the retention rules in Appendix E.

---

## Appendix B: Security and Privacy Control Assessment
### Purpose
Protect sensitive AP data used in invoice intake, supplier validation, approval, payment execution, reporting, and governance review.

### Data classification
| Data category | Examples | Sensitivity | Primary concern |
|---|---|---|---|
| Supplier master and invoice data | Supplier name, remit-to address, invoice number, tax identifiers where applicable | Confidential | Fraud, privacy, unauthorized change, payment misdirection |
| Supplier banking/payment data | Bank account, payment method, payment batch, payment confirmation | Restricted | Payment fraud, unauthorized disclosure, unauthorized change |
| Approval and workflow data | Approver, approval timestamp, rejection reason, routing history | Internal / Confidential | Auditability, accountability, unauthorized override |
| Exception and issue records | Duplicate investigation, control breach, remediation action | Confidential | Audit sensitivity, reputational risk, incomplete remediation |
| KPI and governance reports | Monthly scorecard, issue aging, threshold breaches | Internal / Confidential | Misinterpretation, premature disclosure, decision risk |

### Access and segregation of duties
| Role | Minimum access need | Restriction / segregation expectation | Review cadence |
|---|---|---|---|
| AP Analyst | Invoice intake and approval monitoring needed for assigned work | No payment release authorization; no supplier bank maintenance unless separately approved | Quarterly |
| AP Specialist | Validation, exception triage, duplicate/hold review | No final payment release authorization for items they prepared | Quarterly |
| AP Manager | Payment run authorization, control review, escalation | Should not perform routine invoice intake for items they approve unless exception is logged | Quarterly |
| AP Process Owner | KPI oversight, policy compliance, remediation governance | Oversight role should not independently execute payment runs | Quarterly |
| Finance Controls Lead | Review evidence, control exceptions, remediation status | Read/review access preferred; production change access requires separate approval | Quarterly |

### Required security and privacy controls
| Control area | Requirement | Evidence |
|---|---|---|
| Least privilege | Access must align to AP job responsibility and segregation-of-duties expectations | Role/access listing and approval record |
| Access review | AP access for sensitive functions must be reviewed at least quarterly | Access review attestation and remediation log |
| Supplier bank/payment protection | Bank and payment data must be restricted to approved roles and protected from unauthorized export or change | Access listing, change log, payment setup audit trail |
| Logging and monitoring | Payment release, supplier bank changes, approval overrides, bulk exports, and exception closures must be logged where system capability exists | System logs, audit reports, review evidence |
| Extract/download control | Exports containing supplier, tax, bank, or payment data must have business purpose, owner, storage location, and retention expectation | Extract log or evidence note |
| External sharing | External sharing of AP data requires documented business purpose and approval by AP Process Owner or Finance Controls Lead | Approval record and shared artifact inventory |
| Exception handling | Security/privacy exceptions require rationale, approver, compensating control, expiration date, and follow-up action | Exception log |

### Open implementation questions
- Confirm whether Oracle Fusion AP role design supports the segregation-of-duties boundaries listed above.
- Confirm available audit logs for supplier bank changes, approval overrides, payment release, and bulk export activity.
- Confirm whether any AP data extracts include personal data subject to privacy or local regulatory requirements.

---

## Appendix C: Operational Readiness Record
### Outcome
The AP I2P governance package is operational. Controls, evidence expectations, KPI thresholds, and review cadence have been validated and confirmed for ongoing use.

### Readiness criteria — status
- Named owners, performers, and reviewers are assigned for each control gate.
- Required evidence is retained for all sampled control activities.
- All governed metrics are produced using documented source logic.
- Red KPI status or critical control exceptions have assigned remediation actions.
- Security/privacy open questions in Appendix B are resolved or converted into tracked risks.
- Documentation lifecycle metadata in Appendix E is completed.

### Items carried forward
| Item | Owner | Status |
|---|---|---|
| Final named owners documented in controlled copy | AP Process Owner | To complete |
| Tenant-specific workflow and report names confirmed | AP Manager | To complete |
| Controlled copy location assigned | AP Process Owner | To complete |

---

## Appendix D: Metric Governance and Lineage
### Purpose
Strengthen KPI trust by documenting metric ownership, source logic, lineage, threshold rationale, and data quality checks.

### Shared metric governance requirements
- Approval authority: AP Process Owner for metric definitions; Finance Controls Lead for control-sensitive threshold changes.
- Change control: Formula, grain, source, or threshold changes require versioned change log entry.
- Source system: Oracle Fusion AP unless otherwise documented.
- Refresh cadence: Must match the cadence stated in each metric definition.
- Data quality checks: Completeness, validity, consistency, timeliness, and uniqueness checks must be documented where relevant.
- Lineage: Each metric must trace from source transaction/event to KPI output and governance review.

### Metric lineage table
| Metric | Source event / record | Key source fields to confirm | Transformation / calculation | Quality checks | Threshold rationale | Approval status |
|---|---|---|---|---|---|---|
| Invoice First-Pass Validation Rate | Invoice validation outcome in Oracle Fusion AP | Invoice ID, validation date, validation result, exception code | Count invoices passing validation on first attempt divided by total invoices validated | Required fields populated; validation result present; duplicate invoice IDs excluded | 97% target supports high intake quality while allowing early calibration | Active |
| Approval Compliance Rate | Approval and payment logs | Invoice ID, approval status, approver, approval timestamp, payment status, payment date | Paid invoices with compliant approval trail divided by total invoices paid | Paid invoices have approval status and approval timestamp before payment date | 100% green because payment without approval is a control failure | Active |
| On-Time Payment Execution Rate | Invoice due date and payment posting data | Invoice ID, due date, payment date, payment status, hold status | Invoices paid on or before due date divided by total invoices paid | Due date and payment date present; held invoices classified consistently | 98% target balances timeliness with valid exception handling | Active |
| Duplicate Payment Prevention Effectiveness | Payment exception log and duplicate investigations | Payment ID, invoice ID, supplier ID, amount, invoice date, duplicate flag, disposition | 1 minus confirmed duplicate payments divided by total payments executed | Confirmed duplicate status reviewed; suspected duplicates dispositioned | Near-zero tolerance because confirmed duplicates create direct leakage | Active |

### Metric change log
| Date | Metric | Change | Reason | Approved by |
|---|---|---|---|---|
| 2026-07-06 | All governed metrics | Operational metric definitions confirmed | AP governance package v2.1.1 | AP Process Owner |
| 2026-07-06 | KPI-09 (new) | New metric added to primary governed documents: AP Outstanding Balance by Aging Tier (Financial Aging) — due-date-based financial truth anchor for all operational aging views. See 02-governed-data-and-analytics.md Section 7 | Aging definition and predefined report inventory update | AP Process Owner |
| 2026-07-06 | Metric 3 (On-Time Payment Execution Rate) | Date Reference clarification added to primary governed KPI-03: due date is the reference for on-time measurement. See 02-governed-data-and-analytics.md Section 7 | Aging definition governance alignment | AP Process Owner |

### Open lineage questions
- Confirm the exact Oracle Fusion AP fields used for validation result, approval status, payment date, and duplicate flags. Note: the predefined reports that surface this data are now cataloged with governance tier and KPI linkage in 02-governed-data-and-analytics.md Section 10.
- Confirm whether payment timeliness (KPI-03) excludes invoices on valid hold or includes them with separate exception classification.
- Confirm duplicate prevention denominator: total payments executed, total invoices paid, or total payment lines.
- Confirm approved aging bucket boundaries in the Oracle system configuration to align KPI-09 financial aging to the approved tier structure (Current / 1–30 / 31–60 / 61–90 / 91–120 / 120+ DPD).

---

## Appendix E: Documentation Lifecycle Record
### Purpose
Control this AP I2P governance package as documented information with clear ownership, approval, publication, review, retention, revision, and retirement expectations.

### Lifecycle metadata
| Field | Value |
|---|---|
| Document title | AP Invoice-to-Pay Governance Package |
| Document ID | AP-I2P-GOV-001 |
| Version | 2.1.1 |
| Status | Active |
| Document owner | AP Process Owner |
| Content owners | AP Manager, Finance Controls Lead |
| Reviewers | AP Manager, Finance Controls Lead, AP Process Owner |
| Approval authority | Finance leadership sponsor and AP Process Owner |
| Effective date | 2026-07-06 |
| Controlled copy location | Governed AP control repository, exact path to be assigned |
| Review cadence | Quarterly |
| Retention period | 7 years for control evidence; 3 years minimum for governance review records unless local policy requires longer |
| Supersedes | Version 2.1 Draft |
| Next review trigger | Material process change, control failure, metric definition change, native report dependency change, system change, audit finding, or quarterly review |

### Version history
| Version | Date | Change summary | Owner | Status |
|---|---|---|---|---|
| 1.0 | 2026-05-25 | Baseline AP I2P governance package | AP Process Owner | Historical |
| 2.0 | 2026-05-25 | Added risk-control matrix, security/privacy assessment, delivery plan, metric lineage, and lifecycle record | AP Process Owner | Historical |
| 2.1 | 2026-05-25 | Added native Oracle Fusion Payables reporting capability inventory and process/report alignment | AP Process Owner | Historical |
| 2.1.1 | 2026-07-06 | Metric change log updated with KPI-09 (financial aging anchor) and Metric 3 date reference clarification; Appendix F cross-referenced to Section 10 of 02-governed-data-and-analytics.md as governing report inventory; open lineage questions updated; primary governed documents promoted to v1.1; all pilot-status language removed and package promoted to operational | AP Process Owner | Active |

### Approval record
| Approver | Role | Decision | Date | Conditions |
|---|---|---|---|---|
| TBD | Finance leadership sponsor | Pending | TBD | Confirm authorization and rollout scope |
| TBD | AP Process Owner | Pending | TBD | Confirm ownership, review cadence, and controlled copy location |
| TBD | Finance Controls Lead | Pending | TBD | Confirm control evidence, testing approach, and remediation workflow |

### Publication and access
- Controlled copy: Store only the approved version in the governed AP control repository.
- Working drafts: Mark as draft and prevent use as official operating guidance.
- Access: AP operations and Finance Controls stakeholders may view; edit access limited to assigned document owner or delegate.
- Uncontrolled copies: Any exported, emailed, or printed copy is for reference only unless reconciled to the controlled copy.

### Retirement and supersession criteria
Retire or supersede this package when:
- Oracle Fusion AP process design materially changes.
- Payment control ownership or approval workflow changes.
- Ongoing review identifies a need for a redesigned operating model.
- A new enterprise AP governance standard replaces this package.
- Audit, compliance, or regulatory expectations require redesign.

---

## Appendix F: Native Oracle Fusion Payables Reporting Capability Assessment

> **Governing report inventory:** The official predefined report inventory — with governance tier (Evidence-Required / Close-Critical / Operational / Reference), KPI/control/DQ linkage, and retention flags — is maintained in **02-governed-data-and-analytics.md Section 10**. This appendix is retained as supporting reference for process-stage alignment context and the native-first assessment framework.

### Purpose
Document Oracle Fusion Payables predefined reporting capabilities before governed custom analytics, dashboards, extracts, or reporting customizations are proposed. Native reporting is not the AP process itself and analytics is not the process; both are information capabilities that support process execution, control evidence, reconciliation, close, compliance, and management review.

### Reporting principle
Native Oracle reports are the first-line reporting capability for operational evidence, standard reconciliations, close support, and statutory or tax-oriented reporting. Custom analytics should be entertained only after native capability is assessed and a documented gap remains.

### Process, native reporting, and analytics boundaries
| Layer | What it is | What it is not | Governance implication |
|---|---|---|---|
| AP process | The work performed to intake, validate, approve, pay, reconcile, close, and review AP activity | A report, dashboard, or metric artifact | Process governance defines roles, control gates, handoffs, evidence, and accountability |
| Native reporting capability | Standard Oracle Fusion Payables reports available through Scheduled Processes or Reports and Analytics | A custom analytics product or replacement for process ownership | Native reports must be assessed first for fit, evidence value, access, parameters, and limitations |
| Governed analytics | Curated metrics, dashboards, models, or custom reports designed to answer business questions not fully covered by native reports | The operating process or the first default source of evidence | Custom analytics require documented business need, native capability gap, lineage, quality checks, controls, and owner approval |

### Native-first assessment rule
Before building governed custom analytics or reporting customizations:
1. Identify the process decision, control, reconciliation, close, compliance, or management question.
2. Identify relevant native Oracle Fusion Payables reports.
3. Assess whether native reports answer the question with acceptable scope, grain, timeliness, parameters, evidence, and access controls.
4. Document any gap: missing field, unsuitable grain, unavailable parameter, weak usability, lineage limitation, timing issue, or control evidence limitation.
5. Approve custom analytics only when the gap is material and cannot be resolved through native report configuration, standard scheduling, report parameter discipline, or process clarification.
6. Apply metric governance, lineage, data quality, security/privacy, and documentation lifecycle controls to any approved custom analytics.

### Access and execution
- Primary execution path: Scheduled Processes work area.
- Secondary access path: Reports and Analytics work area when available.
- Report evidence should retain run parameters, run date/time, preparer, reviewer, and output location when used for control or governance review.
- Reports containing supplier, tax, bank, payment, or exception details must follow the security and privacy requirements in Appendix B.

### Native reporting capability inventory
| Reporting area | Native Oracle report examples | Process stage informed | Governance use |
|---|---|---|---|
| Invoices | Import Payables Invoices Report; Payables Invoice Register; Payables Invoice Audit Listing; Payables Invoice Audit by Voucher Number Listing | Invoice intake, registration, validation, audit review | Supports invoice completeness, audit traceability, invoice population review, and source evidence for first-pass validation |
| Invoice aging and supplier balances | Payables Invoice Aging Report; Supplier Balance Aging Report; Payables Negative Supplier Balance Report | Open invoice monitoring, exception follow-up, cash planning inputs | Supports unpaid invoice visibility, aging review, supplier balance monitoring, and exception prioritization |
| Matching and holds | Payables Matching Detail Report; Payables Matching Hold Detail Report; Payables Matched and Modified Receipts Report; Payables Credit Memo Matching Report | Pre-approval validation, matching, hold resolution, exception management | Supports validation of matching controls, hold release review, and investigation of modified receipts or credit/debit memo matching |
| Payments | Payables Payment Register; Payables Cash Requirement Report; Payables Selected Installments Report; Payables Discounts Taken and Lost Report; Payables Payment Requests Import Report; Payment Audit by Voucher Number Report; Escheated Payments Listing Report | Payment run preparation, payment release, cash requirements, payment audit | Supports payment authorization evidence, payment population review, cash need forecasting, discount performance, imported payment request exceptions, and escheatment review |
| Payables to ledger reconciliation | Payables to Ledger Reconciliation Report | Subledger-to-ledger reconciliation | Supports reconciliation between Payables, Subledger Accounting, and General Ledger for open payables balances |
| Period close | Payables Period Close Exceptions Report; Payables Trial Balance Report; Payables Posted Invoice Register; Payables Posted Payment Register; Payables Unaccounted Transactions and Sweep Report; Payables Open Items Revaluation Report | Period close, accounting transfer, open liability review, revaluation | Supports close readiness, accounting completeness, trial balance review, unaccounted transaction remediation, and revaluation review |
| Prepayments | Prepayment Remittance Notice | Prepayment application and supplier communication | Supports prepayment application evidence and supplier remittance communication |
| Income tax and withholding | Payables Withholding Tax Report; Payables Withholding Tax by Tax Authority Report; Payables Withholding Tax Letter; Update and Report Income Tax Details; US 1096 Report; US 1099 Electronic Media Report; US 1099 Forms - Comma Delimited Format; US 1099 Invoice Exceptions Report; US 1099 Payments Report; US 1099 Report; US 1099 Supplier Exceptions Report | Tax compliance, withholding review, 1099 reporting, supplier/tax exception handling | Supports tax reporting completeness, withholding review, supplier/tax data exception management, and statutory reporting evidence |
| Netting | Netting Settlement Report; Netting Settlement Listing; Netting Settlement Letter; Netting Reversal Letter | Payables/receivables netting settlement and reversal | Supports netting transaction review, settlement evidence, reversal evidence, and supplier/customer communication |

### Process-to-native-report alignment
| AP I2P process stage | Primary native reports to assess | Control / metric linkage |
|---|---|---|
| Invoice Intake and Registration | Import Payables Invoices Report; Payables Invoice Register; Payables Invoice Audit Listing | Supports CP1 intake completeness and Invoice First-Pass Validation Rate population validation |
| Pre-Approval Validation | Payables Matching Detail Report; Payables Matching Hold Detail Report; Payables Matched and Modified Receipts Report | Supports CP2 validation gate, matching exception review, and exception triage |
| Approval Routing and Decision | Payables Invoice Register; Payables Invoice Audit Listing; Payables Invoice Audit by Voucher Number Listing | Supports approval compliance testing when paired with approval workflow evidence |
| Payment Run Preparation | Payables Selected Installments Report; Payables Cash Requirement Report; Payables Discounts Taken and Lost Report | Supports payment candidate review, cash requirement validation, and payment timing decisions |
| Payment Execution | Payables Payment Register; Payment Audit by Voucher Number Report; Escheated Payments Listing Report | Supports CP4 payment release review, payment auditability, and On-Time Payment Execution Rate validation |
| Post-Payment Control Review | Payables Payment Register; Payables Invoice Aging Report; Supplier Balance Aging Report; Payables Negative Supplier Balance Report | Supports monthly governance review, issue prioritization, and duplicate/payment exception follow-up |
| Payables-to-Ledger Reconciliation | Payables to Ledger Reconciliation Report; Payables Trial Balance Report; Payables Posted Invoice Register; Payables Posted Payment Register | Supports subledger-to-ledger reconciliation and close control evidence |
| Period Close | Payables Period Close Exceptions Report; Payables Unaccounted Transactions and Sweep Report; Payables Open Items Revaluation Report | Supports close readiness, unaccounted transaction remediation, and revaluation review |
| Tax and Withholding | US 1099 Supplier Exceptions Report; US 1099 Invoice Exceptions Report; US 1099 Payments Report; Payables Withholding Tax Report | Supports tax compliance, supplier data quality review, and withholding evidence |

### Native reporting governance requirements
- Report owner: Assign an AP owner for each report used in monthly governance, close, reconciliation, or control review.
- Run parameters: Document standard parameters for recurring reports, including business unit, ledger, period/date range, supplier scope, payment status, and exception criteria where applicable.
- Evidence retention: Retain control-relevant report outputs according to Appendix E.
- Reconciliation: When native reports feed KPIs or dashboards, reconcile report totals to the metric source logic in Appendix D.
- Change control: If a KPI or control changes its source from a native report to a custom extract, dashboard, or query, log the change in the metric change log.
- Security review: Reports with supplier bank, tax, payment, or sensitive supplier details require access review and extract/download controls.

### Custom analytics approval criteria
Custom analytics may be proposed only when all criteria are met:
- Native reporting capability has been assessed and the gap is documented.
- The analytics use case supports a defined AP decision, control, reconciliation, close, compliance, or management review need.
- The proposed metric, dashboard, model, or extract has a named owner and steward.
- Source lineage, grain, refresh cadence, formula logic, and data quality checks are documented.
- Access, extract/download, privacy, and retention controls are defined.
- The customization does not obscure or bypass native control evidence.
- The change is logged in Appendix D and reviewed through the package lifecycle in Appendix E.

### Native reporting gaps to resolve
- Confirm which predefined reports are available and enabled in the tenant.
- Confirm which reports contain the fields needed to support the governed metrics.
- Confirm whether approval workflow evidence is available in predefined reports or must be paired with workflow/audit logs.
- Confirm whether duplicate-payment review relies on native reports, Oracle controls, custom duplicate logic, or a combination.
- Confirm standard run parameters and output retention location for each recurring governance report.
- For each proposed custom KPI, dashboard, or report, document why native capability is insufficient before approving customization.
