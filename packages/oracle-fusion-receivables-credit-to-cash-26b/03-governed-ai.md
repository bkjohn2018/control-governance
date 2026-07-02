# Governance Package: Oracle Fusion Cloud Receivables Credit to Cash 26B — Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source posture:
> - Oracle Fusion Financials and EPM platforms describe embedded AI capabilities at the platform level; tenant-specific AR AI features must be validated before approval.
> - Native Oracle automation such as AutoInvoice, Recognize Revenue, automatic receipts, lockbox processing, and approval workflows is **not** AI and should not be confused with AI delegation.
> - Oracle Analytics Cloud (OAC) introduces analytics-layer AI capabilities such as AI Assistant and AI Agents, which are in scope when they are used with governed AR content.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Receivables Credit to Cash 26B — AI usage and bounded agents |
| Governance objective | Ensure AI use with AR data or AR decisions is intentional, classified, reviewable, and bounded so human accountability for billing, cash application, revenue, credit, and collection decisions remains explicit |
| Primary audience | AR Process Owner, AR Manager, Credit Manager, Revenue Accountant, Finance Controls Lead, Data / Governance Reviewer, Security / Privacy, Internal Audit |
| Reference pattern | Domain-bounded AI safe use layered on top of controlled AR operations and governed AR analytics |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Mandatory verbs reserved for policy statements; explicit autonomy limits |
| Non-goals | Enterprise-wide AI policy, autonomous receipt application, or AI replacing AR process ownership |

---

## 1) Executive Summary

**Context.** AR teams may use AI for summarization, dispute triage, collection commentary, credit narrative drafting, and workflow support. AR is data-sensitive and control-heavy: customer data, payment data, tax data, credit information, revenue contingencies, and receipt application evidence cannot be handled informally.

**What this package does.** It defines AR AI safe-use categories, intake requirements, risk-and-control mapping, bounded-agent readiness expectations, incident handling, and recertification rules aligned to AR operating and analytics controls.

**What is ready.** A domain-specific safe-use policy, intake fields, initial AR AI risk matrix, and a bounded-agent template that prevents receipt application, credit override, and revenue certification delegation.

**What remains.** Tenant-specific approved tool inventory, named approvers, and recurring AI monitoring cadence after pilot activation.

**What we ask of leadership.**
1. Endorse the AR AI safe-use policy in Section 3.
2. Require intake and approval before AI is used with AR-sensitive or control-relevant data.
3. Prohibit autonomous receipt application, credit override, and revenue certification without a redesigned control environment.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- AI use involving AR process documentation, AR analytics, AR issue logs, AR-sensitive data, AR workflow support, and approved AR content surfaced through Oracle Analytics Cloud (OAC).
- AI-assisted drafting, summarization, classification, commentary, and bounded automation related to AR.
- Agentic workflows that retrieve approved AR reports, OAC dashboards / workbooks, prepare issue tickets, or compile draft evidence packets.

### 2.2 Out of scope
- AI uses outside AR domain boundaries.
- Enterprise model-development governance.
- Autonomous billing, receipt application, credit limit changes, revenue recognition, write-offs, or unsupported accounting conclusions.

### 2.3 Source anchors
- `01-controlled-operations.md` for AR control gates and evidence.
- `02-governed-data-and-analytics.md` for metric, lineage, and data-use rules.
- Enterprise analytics intake policy for native-first and governed-extension discipline.

---

## 3) AR AI Safe Use Policy

### 3.1 Purpose
Define how AI may be used in AR while preserving Oracle as the system of record, human accountability, evidence retention, and restricted-data handling.

### 3.2 Use categories

| Category | Description | AR examples | Approval needed |
|---|---|---|---|
| **Permitted** | Low-risk drafting or summarization with no restricted data and no control reliance | Rewriting AR training text, summarizing public Oracle documentation, drafting non-sensitive meeting notes | Standing approval if tool is approved |
| **Restricted** | Involves internal AR process details, approved KPI outputs, or recurring AR work products | Drafting collection commentary, summarizing unapplied cash trends, preparing control narratives from approved reports, using OAC AI Assistant over approved AR dashboards | AR Manager + Governance Reviewer |
| **High Risk** | Involves customer, payment, tax, credit, revenue, audit-evidence, or control-relevant analysis | Dispute analysis support, credit memo commentary, revenue contingency support, audit workpaper drafting, OAC AI analysis over restricted AR content | AR Process Owner + Finance Controls Lead + Security / Privacy |
| **Agentic** | AI can call tools, retrieve AR data, stage work, or recommend actions with limited autonomy | Agent compiles exception packets, prepares draft remediation tickets, or uses an OAC AI Agent against approved AR analytics content | All high-risk approvals plus readiness assessment |
| **Prohibited** | Bypasses AR controls or exposes restricted AR data to unapproved tools | Autonomous receipt application, credit override, revenue recognition posting, write-off approval, unsupported accounting / tax conclusion | Not allowed |

### 3.3 Data handling rules

| Data type | Allowed use | Restrictions | Evidence |
|---|---|---|---|
| Public Oracle documentation | Summarize, compare, draft training | Must not be presented as tenant-confirmed configuration | Source citation |
| AR process documentation | Drafting and gap analysis | Draft until human reviewed | Reviewer signoff |
| Approved AR KPI outputs | Commentary and explanation | Must use approved metric definitions and current scorecards | Metric owner review |
| Customer billing data | Restricted analysis only in approved tools | Minimize fields; avoid unmanaged extracts | Intake + approval |
| Payment / remittance data | Generally restricted | No public AI tools; strict least privilege | Security / privacy approval |
| Credit and revenue data | Restricted or high risk based on use | Purpose limitation and retention controls required | Privacy / controller decision record |
| Audit evidence / workpapers | Drafting only, never sole evidence | Human validation required | Reviewer evidence |

### 3.4 Human accountability
- AI output is advisory unless an approved procedure explicitly states otherwise.
- AR Managers, Credit Managers, and AR Process Owners remain accountable for billing, cash application, revenue, and credit decisions.
- AI may not apply receipts, approve credit overrides, release revenue contingencies, or certify a control as effective.

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

Every AR AI use case must record business question, process area, intended users, approved data involved, native capability reviewed first, control relevance, required reviewer, evidence retained, risk tier, and decision outcome.

Decision outcomes: allow low-risk use, approve with conditions, require high-risk review, agent pilot only, or reject.

---

## 5) AR AI Feature and Use Inventory (Initial Baseline)

| ID | Use case / feature | Capability | Typical output | Tier |
|---|---|---|---|---|
| AI-AR-01 | Draft AR training or SOP language | Assistive drafting | Draft text | Permitted |
| AI-AR-02 | Summarize unapplied cash or dispute themes | Summarization | Theme summary | Restricted |
| AI-AR-03 | Draft KPI commentary from approved scorecards | Summarization / commentary | Narrative for review | Restricted |
| AI-AR-04 | Dispute or adjustment analysis support | Analytical assistance | Investigation notes | High Risk |
| AI-AR-05 | Credit review narrative support | Drafting / analysis | Draft memo | High Risk |
| AI-AR-06 | Revenue contingency commentary support | Drafting | Draft analysis | High Risk |
| AI-AR-07 | Agent compiles approved AR reports into draft evidence packet | Bounded agent | Draft evidence package | Agentic |
| AI-AR-08 | Agent creates draft remediation tickets from approved AR issue outputs | Bounded agent | Draft issue ticket | Agentic |
| AI-AR-09 | OAC AI Assistant over approved AR dashboards or workbooks | Analytics AI assistant | Interactive summary / answer | Restricted |
| AI-AR-10 | OAC AI Agent summarizing approved AR exception dashboards | Analytics AI agent | Draft insight or follow-up content | Agentic |

---

## 6) Risk and Control Mapping

| AI risk | Impact | Control objective | Control activity | Owner | Reviewer | Evidence |
|---|---|---|---|---|---|---|
| Restricted AR data enters unapproved tool | Data exposure | Sensitive AR data only used in approved tools with defined handling | Intake requires data classification and approval | AR Process Owner | Security / Privacy | Intake record |
| AI output treated as AR control evidence | Unsupported reliance | AI output must be validated against Oracle records | Require human review before reliance | AR Manager | Finance Controls Lead | Reviewer signoff |
| AI recommendation influences receipt application or credit action without full context | Unauthorized or erroneous action | Cash and credit decisions remain subject to AR controls | Receipt- and credit-related AI use classified high risk | AR Manager | AR Process Owner | Approval record |
| AI obscures source lineage for KPI commentary | Misleading reporting | Approved KPI definitions and lineage must remain explicit | Use only approved scorecards and metric definitions | Report Steward | AR Process Owner | KPI reference and review |
| Agent acts outside approved scope | Control bypass | Agent scope, permissions, and blocked actions must be bounded | Readiness assessment and permission review | AR Process Owner | Finance Controls Lead | Readiness template |
| Model / prompt / workflow change alters behavior | Uncontrolled process change | Material AI changes require retesting and approval | Maintain AI change log and retest evidence | BI / IT Owner | Governance Reviewer | Change log |

---

## 7) Bounded Agent Readiness Assessment (AR)

### Allowed examples
- Retrieve approved AR reports from controlled locations.
- Summarize unapplied receipt aging, dispute counts, or AutoInvoice error themes.
- Prepare draft issue tickets or follow-up summaries.

### Blocked actions
- Apply, reverse, or delete receipts.
- Approve billing adjustments, credit memos, or write-offs.
- Change credit limits, profiles, or revenue contingencies.
- Post revenue or subledger accounting entries.
- Certify reconciliations or collection conclusions.

### Minimum readiness checks
- defined scope and owner,
- approved inputs and outputs,
- least-privilege permissions,
- human approval gate before any material use,
- logging, testing, incident handling, and recertification.

---

## 8) Monitoring, Metrics, and Recertification

- Review each approved AR AI use case at least quarterly.
- Reapprove after data-scope, model, prompt, entitlement, or permission changes.
- Track use-case count, incidents, rejected outputs, and blocked actions.

---

## 9) Incident Management (AI-specific)

Log and escalate any:
- unsupported collection or revenue recommendation,
- missing or misleading source attribution,
- restricted-data exposure,
- agent action outside approved scope,
- commentary that materially misstates cash application or credit status.

---

## 10) Adoption and Training Notes

- Start with low-risk drafting only.
- Train finance reviewers to treat AI output as draft analysis, not evidence.
- Publish a simple prohibited-actions list to all AR users and credit reviewers.

---

## 11) Deck Outline — AR AI Governance Briefing

1. Why the AR AI baseline is intentionally conservative
2. What Oracle-native automation is and is not
3. Safe-use tiers and prohibited actions
4. Intake, controls, and bounded-agent expectations
5. Monitoring and tenant-specific feature validation

---

## 12) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-20 | Initial AR governed AI package created with no native AR AI feature approved by default | AR Process Owner |
