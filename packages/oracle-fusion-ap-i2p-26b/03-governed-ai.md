# Governance Package: Oracle Fusion Cloud AP Invoice-to-Pay 26B - Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Supporting references:
> - `02-finance-ai-governance-bundle.md`
> - `../../policies/analytics-intake-and-extension-policy.md`
> - Oracle Analytics Cloud AI Assistant / AI Agent capabilities when used with approved AP analytics content
>
> Governance lenses: NIST AI RMF, NIST SP 800-53 Rev. 5 control concepts, DAMA-DMBOK, and finance control practice.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud AP Invoice-to-Pay 26B - AI usage and bounded agents |
| Governance objective | Ensure AI use with AP data or AP decisions is intentional, classified, reviewable, and bounded so human accountability for approvals, payments, evidence, and exception handling remains explicit |
| Primary audience | AP Process Owner, AP Managers, Finance Controls Lead, Data / Governance Reviewer, Security / Privacy, Internal Audit |
| Reference pattern | Domain-bounded AI safe use layered on top of controlled AP operations and governed AP analytics |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Mandatory verbs reserved for policy statements; explicit autonomy limits |
| Non-goals | Enterprise-wide AI policy, autonomous payment release, or AI replacing AP process ownership |

---

## 1) Executive Summary

**Context.** AP teams increasingly use AI for summarization, issue triage, commentary drafting, exception analysis, and workflow support. Those use cases can improve productivity, but AP is data-sensitive and control-heavy: supplier data, payment data, tax data, approval evidence, and duplicate-risk analysis cannot be handled informally.

**What this package does.** It defines AP AI safe-use categories, intake requirements, risk-and-control mapping, bounded-agent readiness expectations, incident handling, and recertification rules aligned to AP operating and analytics controls.

**What is ready.** A domain-specific safe-use policy, intake fields, initial AP AI risk matrix, and a bounded-agent template that prevents approval or payment delegation.

**What remains.** Tenant-specific approved tool inventory, named approvers, and recurring AI monitoring cadence.

**What we ask of leadership.**
1. Endorse the AP AI safe-use policy in Section 3.
2. Require intake and approval before AI is used with AP-sensitive or control-relevant data.
3. Prohibit autonomous AP approval, payment, and supplier-bank action without a redesigned control environment.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- AI use involving AP process documentation, AP analytics, AP issue logs, AP-sensitive data, AP workflow support, and approved AP content surfaced through Oracle Analytics Cloud (OAC).
- AI-assisted drafting, summarization, classification, commentary, and bounded automation related to AP.
- Agentic workflows that retrieve approved AP reports, OAC dashboards / workbooks, prepare issue tickets, or compile draft evidence packets.

### 2.2 Out of scope
- AI uses outside AP domain boundaries.
- Enterprise model-development governance.
- Autonomous approvals, payment release, supplier-bank changes, tax filing, or unsupported accounting conclusions.

### 2.3 Source anchors
- `01-controlled-operations.md` for AP control gates and evidence.
- `02-governed-data-and-analytics.md` for metric, lineage, and data-use rules.
- Enterprise analytics intake policy for native-first and governed-extension discipline.

---

## 3) AP AI Safe Use Policy

### 3.1 Purpose
Define how AI may be used in AP while preserving Oracle as the system of record, human accountability, evidence retention, and restricted-data handling.

### 3.2 Use categories

| Category | Description | AP examples | Approval needed |
|---|---|---|---|
| **Permitted** | Low-risk drafting or summarization with no restricted data and no control reliance | Rewriting AP training text, summarizing public Oracle documentation, drafting non-sensitive meeting notes | Standing approval if tool is approved |
| **Restricted** | Involves internal AP process details, approved KPI outputs, or recurring AP work products | Drafting KPI commentary, summarizing issue trends, preparing control narratives from approved reports, using OAC AI Assistant over approved AP dashboards | AP Manager + Governance Reviewer |
| **High Risk** | Involves payment, supplier, bank, tax, audit-evidence, or control-relevant analysis | Duplicate-risk analysis support, payment-exception commentary, close-support analysis, audit workpaper drafting, externalized OAC AI analysis over restricted AP content | AP Process Owner + Finance Controls Lead + Security / Privacy |
| **Agentic** | AI can call tools, retrieve AP data, stage work, or recommend actions with limited autonomy | Agent compiles exception packets, prepares draft remediation tickets, or uses an OAC AI Agent against approved AP analytics content | All high-risk approvals plus readiness assessment |
| **Prohibited** | Bypasses AP controls or exposes restricted AP data to unapproved tools | Autonomous payment release, approval override, supplier-bank maintenance, unsupported accounting / tax conclusion | Not allowed |

### 3.3 Data handling rules

| Data type | Allowed use | Restrictions | Evidence |
|---|---|---|---|
| Public Oracle documentation | Summarize, compare, draft training | Must not be presented as tenant-confirmed configuration | Source citation |
| AP process documentation | Drafting and gap analysis | Draft until human reviewed | Reviewer signoff |
| Approved AP KPI outputs | Commentary and explanation | Must use approved metric definitions and current scorecards | Metric owner review |
| Supplier invoice data | Restricted analysis only in approved tools | Minimize fields; avoid unmanaged extracts | Intake + approval |
| Supplier bank / payment data | Generally prohibited except approved control testing | No public AI tools; strict least privilege | Security / privacy approval |
| Tax, PII, regulated data | Restricted or prohibited based on context | Purpose limitation and retention controls required | Privacy decision record |
| Audit evidence / workpapers | Drafting only, never sole evidence | Human validation required | Reviewer evidence |

### 3.4 Human accountability
- AI output is advisory unless an approved procedure explicitly states otherwise.
- AP Managers and AP Process Owners remain accountable for approval, payment, and governance decisions.
- AI may not approve invoices, release payments, override holds, or certify a control as effective.

### 3.5 Disclosure and retained evidence
Retain, as appropriate:
- Approved intake record.
- Tool or capability used.
- Source reports or datasets referenced.
- AI output version relied on.
- Human review, corrections, and final approval.
- Incident or exception record where applicable.

---

## 4) AI Use Case Intake Workflow

### 4.1 Triggers
- A user wants to use AI with AP-sensitive data.
- A recurring AP work product will rely on AI-generated content.
- An AI feature or vendor capability is being evaluated for AP.
- An agent or automation will retrieve AP reports or prepare workflow actions.

### 4.2 Intake fields

| Intake field | Required information |
|---|---|
| Request name | Short title of the AI use case |
| Business question | AP decision, issue, control, or productivity question supported |
| Process area | Intake, validation, approval, payment, review, or analytics |
| Intended users | AP roles and reviewers |
| Capability type | Drafting, summarization, classification, anomaly support, assistant, or agent |
| Tool / vendor / model | Approved or proposed tool and deployment context |
| Analytics surface | Native report, BI Publisher artifact, OAC dashboard / workbook, OAC AI Assistant, OAC AI Agent, or other approved surface |
| Native capability reviewed | Oracle-native report, workflow, or standard procedure assessed first |
| Data involved | AP reports, issue logs, invoice details, payment details, tax, supplier, or other data |
| Sensitivity | Standard, restricted, bank, payment, tax, PII, confidential |
| Control relevance | Whether output supports payment, compliance, audit, or KPI review |
| Human review | Required reviewer and review criteria |
| Evidence retained | Intake, source references, output, review signoff, approval location |
| Risk tier | Low, medium, high, agentic, or prohibited |

### 4.3 Decision outcomes

| Decision | Meaning | Governance requirement |
|---|---|---|
| Allowed low-risk use | Approved tool, no restricted data, no control reliance | Record policy fit |
| Restricted use approved | Use may proceed with named mitigations | Retain intake and approval |
| High-risk use approved | Control-relevant use may proceed with controls | Complete risk/control mapping |
| Agent use approved | Agentic use may proceed in bounded scope | Complete readiness assessment |
| Conditional approval | Use approved after conditions are met | Track conditions and owner |
| Rejected / prohibited | Use is unsafe, duplicate, or unsupported | Record rationale and alternative |

---

## 5) AP AI Feature and Use Inventory (Initial Baseline)

| ID | Use case / feature | Capability | Typical output | Tier |
|---|---|---|---|---|
| AI-01 | Draft AP training or SOP language | Assistive drafting | Draft text | Low |
| AI-02 | Summarize AP issue log themes | Summarization | Theme summary | Restricted |
| AI-03 | Draft KPI commentary from approved scorecards | Summarization / commentary | Narrative for review | Restricted |
| AI-04 | Duplicate-risk analysis support | Analytical assistance | Investigation notes | High |
| AI-05 | Payment-exception triage support | Classification / commentary | Triage recommendation | High |
| AI-06 | Draft control narrative or audit response from approved evidence | Drafting | Draft memo | High |
| AI-07 | Agent compiles approved AP reports into draft evidence packet | Bounded agent | Draft evidence package | Agentic |
| AI-08 | Agent creates draft remediation tickets from approved AP issue outputs | Bounded agent | Draft issue ticket | Agentic |
| AI-09 | OAC AI Assistant over approved AP dashboards or workbooks | Analytics AI assistant | Interactive summary / answer | Restricted |
| AI-10 | OAC AI Agent summarizing approved AP exception dashboards | Analytics AI agent | Draft insight or follow-up content | Agentic |

---

## 6) Risk and Control Mapping

| AI risk | Impact | Control objective | Control activity | Owner | Reviewer | Evidence |
|---|---|---|---|---|---|---|
| Restricted AP data enters unapproved tool | Data exposure | Sensitive AP data only used in approved tools with defined handling | Intake requires data classification and approval | AP Process Owner | Security / Privacy | Intake record |
| AI output treated as AP control evidence | Unsupported reliance | AI output must be validated against Oracle records | Require human review before reliance | AP Manager | Finance Controls Lead | Reviewer signoff |
| AI recommendation influences payment action without full context | Unauthorized or erroneous payment | Payment decisions remain subject to AP controls | Payment-related AI use classified high risk | AP Manager | AP Process Owner | Approval record |
| AI obscures source lineage for KPI commentary | Misleading reporting | Approved KPI definitions and lineage must remain explicit | Use only approved scorecards and metric definitions | Report Steward | AP Process Owner | KPI reference and review |
| Agent acts outside approved scope | Control bypass | Agent scope, permissions, and blocked actions must be bounded | Readiness assessment and permission review | AP Process Owner | Finance Controls Lead | Readiness template |
| Model / prompt / workflow change alters behavior | Uncontrolled process change | Material AI changes require retesting and approval | Maintain AI change log and retest evidence | BI / IT Owner | Governance Reviewer | Change log |

---

## 7) Bounded Agent Readiness Assessment (AP)

### 7.1 Allowed examples
- Retrieve approved AP reports from approved locations.
- Summarize issue trends for human review.
- Prepare draft issue tickets or remediation notes.
- Compile draft evidence packets from approved repositories.

### 7.2 Blocked actions
- Approve invoices.
- Release payments.
- Change supplier or bank data.
- Override holds or workflow approvals.
- Close control exceptions without human signoff.
- Send external supplier communications without explicit approval.

### 7.3 Required checks

| Readiness area | Minimum expectation |
|---|---|
| Purpose and scope | Clear business owner, bounded task, approved users |
| Inputs and outputs | Approved report / dataset list and defined output types |
| Permissions | Least privilege, read-only unless explicitly justified |
| Human gates | Human approval before any material action or decision |
| Logging | Tool calls, outputs, and approvals retained |
| Testing | Expected use, misuse, permission limits, recovery paths |
| Monitoring | Incident route, drift review, and recertification cadence |

---

## 8) Decision Posture by Tier

| Tier | Default posture | Notes |
|---|---|---|
| Low | Approve with standing policy guardrails | No restricted data, no control reliance |
| Restricted | Approve with conditions | Named reviewer and retained evidence required |
| High | Approve only after formal review | Controls, privacy, and evidence design required |
| Agentic | Bounded scope | Readiness assessment and quarterly recertification |
| Prohibited | Do not approve | Requires redesigned control environment to revisit |

---

## 9) Monitoring, Metrics, and Recertification

- Review approved AP AI use cases at least quarterly.
- Reassess when data scope, model, workflow, permissions, or business use materially changes.
- Track:
  - number of approved AP AI use cases,
  - number of exceptions or incidents,
  - number of outputs rejected by human review,
  - number of agent actions blocked by scope guardrails.

---

## 10) Incident Management (AI-specific)

1. Log AI incident or near miss.
2. Contain access or suspend the use case if control impact is possible.
3. Assess data exposure, control impact, and decision impact.
4. Remediate, retest, and document lessons learned.
5. Reapprove before reactivation if the failure was material.

Examples include restricted-data exposure, unsupported payment recommendation, incorrect KPI commentary, agent action outside scope, or missing review evidence.

---

## 11) Adoption and Training Notes

- Publish simple AP-safe-use guidance to analysts, specialists, and managers.
- Train reviewers on when AI output requires source validation.
- Start with low-risk drafting and controlled commentary use cases before agentic use.
- Refresh training after any material tool or policy change.

---

## 12) Deck Outline - AP AI Governance Briefing

1. Why AP AI needs bounded governance
2. Safe-use categories and prohibited uses
3. Intake workflow and approval model
4. Risk/control mapping and evidence expectations
5. Bounded-agent posture and blocked actions
6. Monitoring, incidents, and leadership decisions

---

## 13) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Created normalized AP governed AI root artifact | AP Process Owner |
