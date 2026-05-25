# Governance Bundle: AP Finance AI Safe Use and Agent Readiness

## 0) Bundle Inputs and Inherited Prerequisites

- Domain: Accounts Payable Invoice-to-Pay (I2P)
- Business function: AP operations, payment governance, and AP analytics governance
- Objective: Establish safe, controlled, auditable AI use for AP managers, process owners, analysts, specialists, controls reviewers, and analytics delivery teams
- Audience: AP managers, AP process owners, AP operations leads, Finance Controls Lead, Data Governance / Finance Governance reviewers, IT / Analytics Delivery Owner, internal audit stakeholders
- Maturity: Draft for pilot + operational use
- Tone: Operational, control-focused, and audit-ready
- Source prerequisites:
  - [`01-invoice-to-pay-governance-package.md`](01-invoice-to-pay-governance-package.md)
  - [`analytics-intake-and-extension-policy.md`](../../policies/analytics-intake-and-extension-policy.md)
- Framework anchors:
  - NIST AI RMF: Govern, Map, Measure, Manage
  - NIST SP 800-53 Rev. 5 control concepts: access, auditability, configuration/change, privacy, risk, monitoring, and integrity
  - DAMA-DMBOK: data governance, data ethics, stewardship, quality, metadata, lineage, and lifecycle management

### Inherited Operating Assumptions

This AI governance bundle inherits the AP I2P process scope, roles, control gates, evidence expectations, metric governance, security/privacy assessment, pilot cadence, and documentation lifecycle from the AP process bundle.

It also inherits the analytics policy's Oracle-first principle: native Oracle reporting, inquiry, workflow, audit, and system capabilities must be assessed before approving custom analytics, extracts, downstream reporting, AI-assisted analytics, or AI agents that rely on Oracle data.

AI does not replace AP process ownership, Oracle system-of-record accountability, approval workflow controls, payment release controls, reconciliation evidence, or human review.

## 1) Executive Summary and Decision Request

### Decision Context

AP teams are likely to use AI for summarization, document drafting, issue triage, report narration, exception analysis, duplicate-risk investigation support, analytics interpretation, and eventually agentic workflows. This package acknowledges AI as an operational reality while preserving AP control ownership, Oracle-first reporting discipline, data protection, and auditability.

### Recommended Decision

Approve this AP Finance AI Governance Bundle as a pilot addendum to the AP I2P Governance Package and Analytics Intake and Extension Policy.

### Requested Approval Conditions

1. AI use in AP must follow the safe-use categories in this bundle.
2. AI use cases involving AP data must complete the AI intake procedure before pilot or operational use.
3. AI-assisted AP analytics must complete the native-first assessment required by the analytics policy.
4. Any AI use that affects AP controls, reconciliations, audit evidence, payment decisions, supplier data, bank data, tax data, or management reporting must complete risk/control mapping.
5. Any AI agent or agentic workflow must complete agent readiness assessment before use.
6. Human AP owners remain accountable for final decisions, approvals, evidence, and control operation.

## 2) AI Governance Charter / Delivery Plan

### Value Statement

Enable AP teams to use AI for productivity, insight, and controlled analysis while preventing sensitive data leakage, unsupported payment or accounting conclusions, control bypass, unmanaged analytics sprawl, and audit evidence gaps.

### Pilot Scope

In scope:
- AI-assisted AP documentation, SOP drafting, issue summarization, training content, control narrative drafting, and meeting note summarization.
- AI-assisted AP analytics interpretation where Oracle-native reports, approved metrics, and approved lineage remain the basis for analysis.
- AI-assisted exception triage recommendations for duplicate-risk, holds, aging, payment timing, validation failures, and KPI trend commentary.
- AI use-case intake, risk/control mapping, and agent readiness procedures for AP.

Out of scope unless separately approved:
- Autonomous invoice approval, payment release, supplier bank maintenance, supplier master updates, journal posting, tax filing, or external supplier communication.
- Use of unapproved public AI tools with AP, supplier, bank, payment, tax, employee, PII, unreleased financial, audit, or confidential governance data.
- AI-generated outputs treated as AP control evidence without source support, reviewer signoff, and retained workpapers.

### Pilot Milestones

| Milestone | Timing | Owner | Exit Criteria |
|---|---|---|---|
| Approve AP AI governance pilot | Week 0 | AP Process Owner | Sponsor approves scope, owners, and pilot conditions |
| Confirm approved AI tools | Week 1 | Data Governance / Finance Governance owner | Approved tool list and prohibited tool guidance documented |
| Publish intake and safe-use guidance | Week 1-2 | AP Manager | AP users receive AI use categories and intake procedure |
| Complete first AI use-case reviews | Month 1 | Governance Reviewer | Initial use cases classified and routed |
| Complete agent readiness template review | Month 2 | Finance Controls Lead | Template tested against a hypothetical AP agent |
| Post-pilot readiness decision | Month 3 | AP Process Owner | Go / Conditional Go / No-Go recommendation documented |

## 3) AI Safe Use Policy Requirements

### Policy Intent

AI may support AP work only when it preserves Oracle as the system of record, protects AP-sensitive data, maintains human accountability, and produces reviewable evidence when used for controls, reporting, compliance, or management decisions.

### Use Categories

| Category | Description | AP Examples | Approval Required |
|---|---|---|---|
| Permitted | Low-risk AI use with no sensitive AP data and no authoritative output without human review | Drafting generic training text, rewriting procedure language, summarizing public Oracle documentation, creating non-sensitive meeting agendas | User may proceed if tool is approved and no restricted data is entered |
| Restricted | AI use involving internal AP process details, AP metrics, confidential data, control interpretation, analytics commentary, or recurring work products | Drafting AP KPI commentary, summarizing exception trends, analyzing approved dashboard outputs, preparing control narratives, triaging issue logs | AP Manager and Governance Reviewer approval; security/privacy review if sensitive data is involved |
| High Risk | AI use involving payment decisions, supplier data, bank/payment data, tax data, audit evidence, control reliance, financial reporting, or broad deployment | Duplicate-risk investigation support, payment run exception analysis, AP close support, supplier bank anomaly review, control test support | AP Process Owner, Finance Controls Lead, Data Owner, and Security/Privacy Reviewer approval |
| Agentic | AI can call tools, access systems, retrieve AP data, execute workflow steps, schedule runs, or recommend actions in a controlled process | Agent that monitors payment exceptions, prepares draft remediation tickets, or compiles evidence packets | Agent readiness assessment required before pilot |
| Prohibited | AI use that bypasses AP controls, discloses sensitive data to unapproved tools, or delegates accountable AP decisions to AI | Autonomous payment release, approval bypass, supplier bank change, unsupported accounting/tax conclusion, credential sharing, unapproved external supplier communication | Not allowed unless governance formally redesigns the control environment |

### Data Handling Requirements

| Data Type | Allowed AI Use | Restrictions | Approval / Evidence |
|---|---|---|---|
| Public Oracle documentation | Summarization, training, process interpretation | Do not imply Oracle configuration is confirmed without tenant validation | User citation or source note |
| AP process documentation | Drafting, summarization, gap analysis | Must be marked draft until reviewed by AP owner | AP Manager review |
| AP KPI summaries | Commentary, trend explanation, action drafting | Must use approved metric definitions, thresholds, and lineage | Metric owner and AP Process Owner review for recurring use |
| Supplier invoice data | Restricted analysis only in approved tools | Minimize fields; mask supplier identifiers where possible | Data Owner and Security/Privacy review |
| Supplier bank/payment data | Generally prohibited except approved control testing or anomaly review | No public AI tools; no unmanaged extracts; strict least privilege | AP Process Owner, Finance Controls Lead, Security/Privacy approval |
| Tax, payroll, PII, regulated data | Restricted or prohibited depending on tool and purpose | Requires purpose limitation, minimization, retention, and privacy review | Security/Privacy approval and retained decision record |
| Audit evidence and control testing workpapers | Drafting and summarization only with approved data handling | AI output cannot be sole evidence; reviewer must validate against source | Finance Controls Lead review |

### Human Accountability

- AP Analysts, AP Specialists, AP Managers, AP Process Owners, and Finance Controls Lead remain accountable for their assigned AP responsibilities.
- AI output is advisory unless a governance-approved procedure states otherwise.
- AI may not approve invoices, release payments, override controls, close exceptions, change supplier master data, or certify control operation.
- Reviewers must validate AI output against Oracle records, approved reports, source documentation, or retained control evidence before reliance.

### Disclosure and Evidence

AI use must be disclosed when the output supports AP controls, governance review, KPI commentary, audit evidence, management reporting, policy/procedure drafting, or issue remediation.

Retain evidence appropriate to risk:
- Use-case intake and approval decision.
- Tool/model or approved AI capability used.
- Prompt or instruction summary when needed for reproducibility.
- Inputs used or source reports referenced.
- AI output version relied upon.
- Human review evidence, corrections, and final approval.
- Exception, incident, or remediation records.

## 4) Finance AI Use Case Intake Procedure

### Intake Trigger

Complete AI intake before using AI for AP data, AP analytics, AP controls, recurring AP work products, vendor AI features, workflow automation, or any agentic behavior.

### Intake Fields

| Intake Field | Required Information |
|---|---|
| Request name | Short title of the AI use case |
| Business question | AP decision, control, reconciliation, compliance, or operational question supported |
| Process area | AP I2P stage and process owner |
| Intended users | AP roles and reviewer roles |
| AI capability | Assistant, summarization, extraction, classification, forecasting, anomaly support, automation, agent, or embedded vendor AI |
| Tool/vendor/model | Approved tool status and deployment context |
| Native Oracle capability reviewed | Oracle reports, inquiries, workflow, audit logs, or seeded analytics assessed |
| Native or process gap | Why native capability or standard procedure does not satisfy the need |
| Source data | Oracle AP reports, logs, datasets, documents, or non-Oracle sources |
| Sensitivity | Supplier, bank, payment, tax, PII, confidential, restricted, unreleased financials |
| Control relevance | Whether output supports payment release, approval compliance, reconciliation, close, audit, or KPI review |
| Human review | Required reviewer and review criteria |
| Evidence retained | Intake, source references, AI output, review signoff, approval, and retention location |
| Risk tier | Low, medium, high, agentic, or prohibited |
| Required next step | Safe-use fit, risk/control mapping, security/privacy review, agent readiness, or rejection |

### Decision Paths

| Decision | Meaning | Governance Requirement |
|---|---|---|
| Allowed low-risk use | Approved AI tool, no sensitive data, no control reliance | Document safe-use obligations |
| Restricted use approved | Internal AP or analytics support with review | Complete intake and retain approval |
| Governed AI use approved | Control-relevant, sensitive, recurring, or management-facing use | Complete risk/control mapping and security/privacy review |
| Agent pilot approved | AI can call tools, access systems, schedule work, or execute steps | Complete agent readiness assessment |
| Conditional approval | Use may proceed after conditions are met | Track conditions, owner, due date, and evidence |
| Rejected / prohibited | Use is unclear, duplicate, unsafe, unsupported, or control-bypassing | Document rationale and alternative |

## 5) AI Risk Tiering and Approval Model

| Tier | Criteria | AP Examples | Required Review |
|---|---|---|---|
| Low | No sensitive data, no AP system access, no control reliance, human review | Drafting generic AP training outline | User self-check against safe-use guidance |
| Medium | Internal AP process data or recurring AP work product, but no restricted data or system action | Drafting monthly issue-summary narrative from approved non-sensitive scorecard | AP Manager and Governance Reviewer |
| High | Sensitive data, AP controls, payment decisions, audit evidence, close/reconciliation, financial reporting, broad deployment | Duplicate-risk analysis support, payment exception commentary, control test drafting | AP Process Owner, Finance Controls Lead, Data Owner, Security/Privacy Reviewer |
| Agentic | Tool access, system access, scheduled workflow, delegated action, autonomous retrieval, or action recommendation | Agent prepares draft exception tickets from Oracle report outputs | Agent readiness assessment plus high-risk approval |
| Prohibited | Autonomous payment/approval, supplier bank changes, control bypass, unapproved sensitive disclosure, unsupported accounting/tax conclusions | AI releases payments or changes supplier bank data | Not allowed |

## 6) AI Risk and Control Matrix

| AI Risk | Impact | Control Objective | Control Activity | Owner | Reviewer | Frequency | Evidence |
|---|---|---|---|---|---|---|---|
| Sensitive AP data is entered into an unapproved AI tool | Supplier, bank, tax, payment, or PII exposure | Restricted AP data must only be used in approved AI tools with defined data handling controls | Safe-use policy prohibits unapproved tools; intake screens data sensitivity; security/privacy review required | AP Process Owner | Security/Privacy Reviewer | Per use case | Intake record, approval, tool status, data handling decision |
| AI output is treated as authoritative AP evidence | Unsupported control or audit reliance | AI output must be validated against Oracle records, native reports, or approved evidence before reliance | Require human review and source support for control-relevant AI output | AP Manager | Finance Controls Lead | Per control-relevant output | Source report, reviewer signoff, retained AI output |
| AI recommends payment action based on incomplete or stale data | Unauthorized, duplicate, or delayed payment risk | AI-supported payment recommendations must use current approved source data and remain subject to AP approval controls | Require native report/source date validation and AP Manager approval before action | AP Manager | AP Process Owner | Per payment-related use | Source timestamp, approval record, exception disposition |
| AI obscures Oracle system-of-record lineage | Unreliable analytics and weak audit trail | AI-assisted analytics must preserve source lineage, grain, filters, and transformation logic | Apply analytics intake native-first assessment and lineage documentation | Data Steward / Report Steward | Governance Reviewer | Per approved AI analytics use | Native capability assessment, lineage map, metric definition |
| AI-generated KPI commentary misstates AP performance | Misleading management decisions | AI commentary must use approved metric definitions, thresholds, and current scorecards | Require metric-owner review for recurring commentary and threshold interpretation | AP Manager | AP Process Owner | Monthly or per release | KPI scorecard, commentary review, change log |
| AI agent performs an action outside approved scope | Control bypass or unauthorized system action | Agent autonomy must be bounded and approval-gated before material AP action | Complete agent readiness assessment; restrict permissions; log tool calls | AP Process Owner | Finance Controls Lead | Before release and after change | Readiness assessment, permission listing, test results, logs |
| Prompt, model, vendor, or workflow changes alter behavior | Uncontrolled change to AI-supported process | Material AI configuration changes must be reviewed before use | Log and approve changes to prompts, models, workflows, permissions, and source data | IT / Analytics Delivery Owner | Governance Reviewer | Per material change | Change log, approval, test evidence |
| AI exception or incident is not escalated | Recurring risk remains unresolved | AI incidents must be logged, triaged, remediated, and closed with evidence | Use issue management workflow for data leakage, incorrect output, control failure, or unauthorized agent action | Governance Reviewer | AP Process Owner | Per incident | Incident record, root cause, remediation, closure validation |

## 7) AI Agent Readiness Assessment Template

### Agent Overview

- Agent name:
- Business owner:
- Process/team:
- Purpose:
- Intended users:
- Operating frequency:
- Tools/systems accessed:
- Data sources:
- Outputs/actions:
- Pilot or production status:

### Scope Boundaries

The agent may:
- Retrieve approved AP reports or approved extracts.
- Summarize exception trends for human review.
- Prepare draft issue tickets or remediation notes.
- Compile draft evidence packets from approved locations.

The agent may not:
- Approve invoices.
- Release payments.
- Change supplier master data or supplier bank data.
- Override holds, approvals, or workflow controls.
- Submit external supplier communications without human approval.
- Close control exceptions without reviewer signoff.
- Use unapproved data sources or unapproved AI tools.

### Autonomy and Permissions

| Capability | Permission Level | Approval Gate | Evidence / Log |
|---|---|---|---|
| Read approved AP reports | Read-only, approved locations only | AP Process Owner approval | Access listing and run log |
| Read sensitive AP data | Restricted, least privilege | Security/Privacy and Data Owner approval | Access approval and data handling record |
| Write draft notes/tickets | Draft only | AP Manager review before finalization | Draft record and reviewer signoff |
| Update AP systems | Prohibited unless separately governed | Formal redesign required | Not applicable |
| Send external communication | Prohibited for pilot | Formal approval required | Not applicable |
| Schedule recurring runs | Conditional | Monitoring owner and cadence defined | Schedule, log, monitoring review |

### Readiness Decision

| Readiness Area | Minimum Requirement | Status |
|---|---|---|
| Purpose and scope | Bounded to AP-approved process use | Pending |
| Data sensitivity | Classified and approved | Pending |
| Access | Least privilege and reviewed | Pending |
| Human oversight | Review and approval gates defined | Pending |
| Testing | Normal, edge, negative, permission, and recovery tests completed | Pending |
| Logging | Prompts, inputs, outputs, tool calls, approvals, and exceptions logged where feasible | Pending |
| Rollback | Containment and correction process documented | Pending |
| Monitoring | Owner, cadence, signals, and escalation defined | Pending |
| Recertification | Triggered by model/tool/prompt/data/permission/workflow change and at least quarterly during pilot | Pending |

Decision options: Ready / Ready with Conditions / Not Ready / Prohibited.

## 8) Security and Privacy Control Assessment

### AP AI Data Classification

| Data Category | Examples | Sensitivity | AI Handling Requirement |
|---|---|---|---|
| Supplier master and invoice data | Supplier name, remit-to address, invoice number, tax identifiers | Confidential | Approved tools only; minimize or mask where possible |
| Supplier banking/payment data | Bank account, payment batch, payment method, payment confirmation | Restricted | Generally prohibited in AI unless approved for controlled testing or anomaly review |
| Approval and workflow data | Approver, timestamp, routing history, rejection reason | Internal / Confidential | Use only with approved purpose and retained review evidence |
| Exception and issue records | Duplicate investigation, control breach, remediation action | Confidential | Approved tools only; protect audit-sensitive content |
| KPI and governance reports | Monthly scorecard, issue aging, threshold breaches | Internal / Confidential | Validate source and avoid premature disclosure |
| Tax, PII, regulated data | 1099 data, tax identifiers, personal information | Restricted | Security/privacy review required; public AI prohibited |

### Required Controls

| Control Area | Requirement | Evidence |
|---|---|---|
| Approved tools | AP AI use must occur only in approved tools for the relevant data classification | Approved tool list and use-case approval |
| Least privilege | AI tools, agents, and users must have only the access needed for approved AP purpose | Access listing and approval |
| Sensitive data minimization | Use masked, aggregated, or sampled data when full detail is not required | Data handling decision |
| Logging | Control-relevant AI use must retain prompt/output summary, source references, approvals, and reviewer signoff where feasible | Workpaper or governance record |
| Extract control | AI use must not create unmanaged AP extracts, spreadsheets, or downstream datasets | Extract log or exception record |
| External sharing | Supplier, bank, payment, tax, PII, audit, or unreleased financial data may not be externally shared without approval | Approval record |
| Change control | AI prompt, workflow, model, data source, access, or vendor changes must be logged for governed use cases | Change log |
| Incident response | Data leakage, incorrect output, control failure, or unauthorized agent action must be escalated and remediated | Incident and closure record |

## 9) Data Standards, Metadata, Lineage, and Quality Requirements

AI-assisted AP analytics must inherit the analytics policy's governed extension controls.

Required elements:
- Oracle-native capability assessment before custom analytics or AI-assisted analytics are approved.
- Source-to-output lineage from Oracle AP reports, workflow evidence, audit logs, or approved datasets.
- Approved metric definitions, grain, filters, thresholds, and owners.
- Data quality checks for completeness, validity, consistency, timeliness, and uniqueness.
- Reconciliation to Oracle-native reports or documented authoritative totals where applicable.
- Change control for formulas, thresholds, prompts, source reports, transformations, and AI-generated recurring narratives.
- Retention rules for AI-supported outputs, evidence, extracts, approvals, and change history.

## 10) Exception, Incident, and Issue Handling Procedure

### Exception Record

Exceptions must include:
- Exception requested.
- Business justification.
- Native Oracle capability assessed.
- AI safe-use category.
- Data sensitivity.
- Risk accepted.
- Compensating controls.
- Approver.
- Expiration date.
- Required follow-up action.

Exceptions involving supplier bank data, payment execution, tax data, PII, audit evidence, financial reporting, or agentic behavior require AP Process Owner, Finance Controls Lead, and Security/Privacy Reviewer involvement.

### Incident Triggers

Log and escalate:
- Sensitive AP data entered into unapproved AI.
- AI output used without required human review.
- Incorrect AI output affects AP decision, control, report, or management communication.
- AI agent performs unauthorized or unexpected action.
- AI-supported analytics bypass native-first assessment.
- Prompt/model/workflow change affects approved control use without review.
- Evidence is missing for AI-supported control or audit work.

### Severity Guide

| Severity | Criteria | Required Response |
|---|---|---|
| Critical | Unauthorized payment, supplier bank exposure, PII/tax data leakage, control bypass, or external disclosure | Immediate containment, Finance Controls Lead and AP Process Owner escalation, root cause, remediation before continued use |
| Major | Missing review evidence, recurring incorrect output, unauthorized sensitive input, or agent permission issue | Assign owner and due date; review in next governance meeting |
| Minor | Documentation inconsistency, isolated prompt/output quality issue, or unclear guidance without control impact | Correct in next refresh or training update |

## 11) Monitoring and Recertification Plan

### Monitoring Signals

- AI use-case intake volume and decision path.
- Restricted/high-risk/agentic use cases approved, rejected, or conditionally approved.
- AI exceptions by type, data sensitivity, owner, and expiration.
- AI incidents and closure status.
- Control-relevant AI outputs with missing reviewer signoff.
- Agent logs, tool calls, permission changes, and failed runs.
- Prompt/model/vendor/workflow changes for governed AI uses.
- User feedback, training questions, and policy noncompliance.

### Review Cadence

- Monthly during AP AI pilot.
- Quarterly after formalization if no critical incidents remain open.
- Immediate review after material incident, tool/vendor change, agent permission change, AP control failure, audit finding, or policy exception.

### Recertification Triggers

- New AI tool, model, vendor feature, agent, or workflow automation.
- Change to prompt, model, system access, data source, output use, user group, frequency, or control reliance.
- Change to AP process, Oracle reporting capability, payment controls, approval workflow, supplier data controls, or metric definitions.
- New regulatory, audit, security/privacy, or finance governance requirement.

## 12) RACI / Roles and Responsibilities

| AI Governance Activity | Requester | AP Manager | AP Process Owner | Finance Controls Lead | Data Owner | Security/Privacy Reviewer | Governance Reviewer | IT / Analytics Delivery Owner |
|---|---|---|---|---|---|---|---|---|
| Submit AI use-case intake | R | C | I | I | I | I | C | C |
| Confirm AP process relevance | C | R | A | C | I | I | C | I |
| Classify data sensitivity | C | C | C | C | A | R | C | C |
| Determine safe-use category | C | R | A | C | C | C | R | I |
| Approve high-risk AP AI use | I | C | A | R | C | R | C | C |
| Complete AI risk/control mapping | C | R | A | R | C | C | R | C |
| Complete agent readiness assessment | C | C | A | R | C | R | C | R |
| Review AI-supported control evidence | I | R | A | R | I | I | C | I |
| Monitor AI issues and exceptions | I | R | A | R | C | C | R | C |
| Approve policy/package changes | I | C | A | R | C | C | R | I |

R = Responsible, A = Accountable, C = Consulted, I = Informed.

## 13) Documentation Lifecycle Metadata

| Field | Value |
|---|---|
| Document title | AP Finance AI Safe Use and Agent Readiness Governance Bundle |
| Document ID | AP-AI-GOV-001 |
| Version | 1.0 Draft |
| Status | Draft for AP AI pilot readiness review |
| Document owner | AP Process Owner |
| Content owners | AP Manager, Finance Controls Lead, Governance Reviewer |
| Reviewers | AP Manager, Finance Controls Lead, Data Owner, Security/Privacy Reviewer, IT / Analytics Delivery Owner |
| Approval authority | Finance leadership sponsor and AP Process Owner |
| Effective date | To be assigned at pilot approval |
| Controlled copy location | Governed AP control repository, exact path to be assigned |
| Review cadence | Monthly during pilot; quarterly after formalization; immediate review after material AI change or incident |
| Retention period | 7 years for control-relevant AI evidence; 3 years minimum for governance review records unless local policy requires longer |
| Supersedes | New AI governance addendum |
| Related documents | AP I2P Governance Package; Analytics Intake and Extension Policy |

### Version History

| Version | Date | Change Summary | Owner | Status |
|---|---|---|---|---|
| 1.0 Draft | Current | Initial AP AI governance bundle inheriting AP process and analytics prerequisites | AP Process Owner | Draft for review |

### Approval Record

| Approver | Role | Decision | Date | Conditions |
|---|---|---|---|---|
| TBD | Finance leadership sponsor | Pending | TBD | Confirm pilot authorization and rollout scope |
| TBD | AP Process Owner | Pending | TBD | Confirm ownership, review cadence, and controlled copy location |
| TBD | Finance Controls Lead | Pending | TBD | Confirm AI control evidence, testing, and remediation workflow |
| TBD | Security/Privacy Reviewer | Pending | TBD | Confirm approved tool and data handling requirements |

## 14) Adoption / Training Notes

Training should emphasize:
- Oracle remains the system of record for AP transactions, approvals, payment evidence, and native reporting.
- AI can help draft, summarize, classify, explain, and prepare work, but humans remain accountable.
- AP-sensitive data cannot be entered into unapproved AI tools.
- AI-supported AP analytics must follow the native-first assessment and governed extension criteria.
- AI output used for AP controls, audit, close, reconciliation, payment, or management review must be validated and evidenced.
- Agents require readiness assessment before pilot or use.

Suggested rollout sequence:
1. Publish safe-use quick guide for AP users.
2. Train AP managers and process owners on AI intake and risk tiering.
3. Train Finance Controls Lead and Governance Reviewer on AI risk/control mapping.
4. Run one tabletop agent readiness assessment using a hypothetical AP exception-monitoring agent.
5. Review first-month use cases and refine guidance.

## 15) Executive or Governance Deck Outline

1. Why AP AI governance is needed now.
2. What is in scope and out of scope.
3. How this bundle inherits AP process and analytics controls.
4. Safe-use categories: permitted, restricted, high risk, agentic, prohibited.
5. AI intake and approval routing.
6. AP AI risk/control matrix highlights.
7. Agent readiness requirements.
8. Security/privacy and data handling expectations.
9. Monitoring, exceptions, incidents, and recertification.
10. Decision request and pilot approval conditions.

## 16) Open Decisions and Questions

| Open Decision | Owner | Needed Before |
|---|---|---|
| Approved AI tool list for AP users | Data Governance / Finance Governance owner | Pilot launch |
| Whether enterprise AI tools retain prompts/outputs or use data for training | Security/Privacy Reviewer | Any restricted use |
| Controlled copy location for AI governance bundle | AP Process Owner | Formal approval |
| Intake repository and tracking workflow | Governance Reviewer | Pilot launch |
| Standard evidence retention location for AI-supported outputs | Finance Controls Lead | First high-risk use case |
| Whether any AP vendor AI features are already active | IT / Analytics Delivery Owner | Full inventory |
| Whether Oracle-native AI features are available in tenant and governed by existing controls | IT / Analytics Delivery Owner | AI capability assessment |
| Agent pilot candidate, if any | AP Process Owner | Agent readiness tabletop |

## 17) Change Log

| Date | Change | Reason | Approved By |
|---|---|---|---|
| Current draft | Initial AP AI governance bundle created | Establish pilot-ready AI governance addendum for AP I2P and AP analytics | Pending |
