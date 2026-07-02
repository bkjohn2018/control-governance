# Governance Package: Oracle Cloud EPM Financial Consolidation and Close — Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source posture:
> - Oracle EPM marketing and product materials describe AI and machine learning capabilities for consolidation automation and Intelligent Performance Management (IPM) on eligible subscriptions.
> - Tenant-specific AI features, entitlements, and configuration must be validated before any use is approved.
> - Oracle Analytics Cloud (OAC) introduces analytics-layer AI capabilities such as AI Assistant and AI Agents, which are in scope when they are used with governed FCC content.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Cloud EPM Financial Consolidation and Close — AI governance |
| Governance objective | Ensure any AI use involving consolidation data, close orchestration, journals, or supplemental data is intentional, reviewable, and bounded so consolidation authority and close accountability remain human-owned |
| Primary audience | Consolidation Manager, Corporate Controller delegate, Financial Reporting Manager, Consolidation Accountant, Security / Privacy, Internal Audit |
| Reference pattern | Domain-bounded AI safe use on top of consolidation control gates and governed FCC analytics |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Conservative and control-first because consolidation and close outcomes are material and audit-sensitive |
| Non-goals | Authorizing AI to post journals, lock periods, change consolidation rules, or certify consolidated results |

---

## 1) Executive Summary

**Context.** Oracle positions EPM Cloud, including Financial Consolidation and Close, as an AI-enabled platform with automation for consolidation and close monitoring. That creates opportunity for assistive analysis and commentary, but consolidation signoff, journal posting, period lock, and rule changes must remain human-controlled and evidence-backed.

**What this package does.** It establishes the AI safe-use posture for FCC, including approved and prohibited use categories, intake requirements, risk and control mapping, bounded-agent readiness, and recertification expectations.

**What is ready.** A conservative baseline that allows low-risk drafting and controlled summarization while prohibiting posting, approval, period lock, or consolidation rule changes by AI.

**What remains.** Any tenant-specific Oracle-native FCC AI or IPM feature must be validated, intake-reviewed, and added to the approved inventory before use expands beyond the baseline.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- AI use with FCC dashboards, close task summaries, consolidation exception reports, journal backlog views, supplemental data status, or OAC workbooks built on governed FCC content.
- Bounded AI assistants or agents that summarize approved close evidence or prepare draft issue tickets, including OAC AI Assistant or OAC AI Agent interactions over approved analytics content.
- Future Oracle-native FCC AI or IPM features if later evidenced and formally reviewed for the tenant.

### 2.2 Out of scope
- Autonomous consolidation rule changes, journal posting, period lock, or schedule status changes.
- Unsupported accounting-policy, GAAP / IFRS, or regulatory conclusions.
- Use of unapproved AI tools with restricted consolidation or close data.

### 2.3 Source posture
- Oracle describes AI and ML support for consolidation automation and intelligent close monitoring at the platform level; tenant entitlement and feature availability must be confirmed before approval.
- Native Oracle automation such as consolidation rules, Task Manager workflows, EPM Automate jobs, and scheduled reporting is **not** AI and should not be confused with AI delegation.

---

## 3) FCC AI Safe Use Policy

### 3.1 Use categories

| Category | Description | FCC examples | Approval needed |
|---|---|---|---|
| **Permitted** | Low-risk drafting or summarization using approved nonrestricted inputs | Draft training text, summarize public Oracle FCC documentation, rewrite procedure wording | Standing approval if tool is approved |
| **Restricted** | Uses approved FCC KPI outputs, close summaries, or recurring work products that support management review | Draft close commentary from scorecards, summarize overdue task themes, summarize entity submission status, use OAC AI Assistant on approved FCC dashboards | Consolidation Manager + Governance Reviewer |
| **High Risk** | Supports material consolidation review, disclosure support, or controller decisions with restricted finance data | Drafting consolidation exception memos from restricted reports, variance analysis that informs signoff, OAC AI Assistant on restricted close content | Consolidation Manager + Corporate Controller delegate + Security / Privacy |
| **Agentic** | Retrieves approved FCC reports or stages draft issue / follow-up content | Agent compiles close packet artifacts, creates draft follow-up for load failures or overdue tasks, or uses an OAC AI Agent over approved FCC analytics content | High-risk approvals plus readiness assessment |
| **Prohibited** | Bypasses consolidation authority or performs material close action | Posting journals, approving journals, changing consolidation rules, locking periods, certifying consolidated results, making unsupported accounting conclusions | Not allowed |

### 3.2 Data handling rules
- Consolidation, entity, journal, and supplemental data are internal finance data and require approved tools and controlled storage.
- Restricted close, unreleased financial, or sensitive supporting-reference data may not be entered into unapproved tools.
- AI output cannot serve as sole consolidation evidence or signoff support.

### 3.3 Human accountability
- Consolidation Manager and corporate controller delegates remain accountable for consolidation decisions and close signoff.
- AI may support analysis or drafting but may not perform or approve consolidation actions.

---

## 4) AI Use Case Intake Workflow

Every FCC AI use case must record:
- business question and process stage,
- intended users,
- approved data involved,
- native Oracle capability reviewed first,
- control relevance,
- required reviewer,
- evidence retained,
- risk tier and decision.

Decision outcomes: allow low-risk use, approve with conditions, require high-risk review, agent pilot only, or reject.

---

## 5) Initial Feature and Use Inventory

> Tenant-specific Oracle-native FCC AI or IPM feature evidence must be confirmed before expanding beyond the baseline. The table below governs possible use patterns, including analytics-layer OAC AI capabilities, not pre-approved native features.

| ID | Use case | Capability | Tier |
|---|---|---|---|
| AI-FCC-01 | Draft close commentary from approved FCC scorecards | Summarization / drafting | Restricted |
| AI-FCC-02 | Summarize overdue Task Manager tasks and alert themes | Summarization | Restricted |
| AI-FCC-03 | Draft consolidation exception narrative from approved variance logs | Drafting | High Risk |
| AI-FCC-04 | Agent compiles approved close packet artifacts | Bounded agent | Agentic |
| AI-FCC-05 | Agent creates draft follow-up tickets for load or journal issues | Bounded agent | Agentic |
| AI-FCC-06 | OAC AI Assistant over approved FCC dashboards / workbooks | Analytics AI assistant | Restricted |
| AI-FCC-07 | OAC AI Agent summarizing approved FCC analytics content | Analytics AI agent | Agentic |
| AI-FCC-08 | Oracle-native consolidation automation or IPM feature (tenant-validated) | Platform AI / automation assist | Restricted to High Risk based on scope |

---

## 6) Risk and Control Mapping

| AI risk | Impact | Control objective | Control activity | Owner | Reviewer | Evidence |
|---|---|---|---|---|---|---|
| AI output used as consolidation evidence | Unsupported reliance on consolidated results | Human validation required before reliance | Require source-reference check and signoff | Consolidation Manager | Corporate Controller delegate | Review record |
| AI influences close or consolidation decision without full context | Misstated signoff | Consolidation and close decisions remain human-owned | High-risk approval and reviewer checklist | Consolidation Manager | Corporate Controller delegate | Approval + review |
| Restricted finance data enters unapproved tool | Confidentiality breach | Consolidation data stays within approved environment | Intake and security review | Consolidation Manager | Security / Privacy | Intake record |
| Agent performs material close action | Control bypass | Agents cannot post, approve, lock, or change rules | Blocked actions and readiness review | Consolidation Manager | EPM Service Administrator | Readiness template |
| AI-generated commentary obscures metric or drill-path logic | Loss of traceability | Commentary must reference approved metrics and reports | Require approved-source citation | Consolidation Accountant | Consolidation Manager | Commentary review |

---

## 7) Bounded Agent Readiness Assessment (FCC)

### Allowed examples
- Retrieve approved FCC reports from controlled locations.
- Summarize overdue close tasks, entity submission gaps, or journal backlog counts.
- Prepare draft issue tickets or follow-up summaries.

### Blocked actions
- Post or approve consolidation journals.
- Change consolidation rules, application setup, or security.
- Open, close, or lock journal periods, supplemental data periods, or Task Manager schedules.
- Certify consolidated results or disclosure conclusions.

### Minimum readiness checks
- defined scope and owner,
- approved inputs and outputs,
- least-privilege permissions,
- human approval gate before any material use,
- logging, testing, incident handling, and recertification.

---

## 8) Monitoring, Metrics, and Recertification

- Review each approved FCC AI use case at least quarterly.
- Reapprove after data-scope, model, prompt, entitlement, or permission changes.
- Track use-case count, incidents, rejected outputs, and blocked actions.

---

## 9) Incident Management (AI-specific)

Log and escalate any:
- unsupported consolidation or accounting recommendation,
- missing or misleading source attribution,
- restricted-data exposure,
- agent action outside approved scope,
- commentary that materially misstates close or consolidation status.

---

## 10) Adoption and Training Notes

- Start with low-risk drafting only.
- Train finance reviewers to treat AI output as draft analysis, not evidence.
- Publish a simple prohibited-actions list to all FCC users and close coordinators.

---

## 11) Deck Outline — FCC AI Governance Briefing

1. Why the FCC AI baseline is intentionally conservative
2. What Oracle-native automation is and is not
3. Safe-use tiers and prohibited actions
4. Intake, controls, and bounded-agent expectations
5. Monitoring and tenant-specific feature validation

---

## 12) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-20 | Initial FCC governed AI package created with no native FCC AI feature approved by default | Consolidation Manager |
