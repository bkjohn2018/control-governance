# Governance Package: Oracle Fusion Cloud General Ledger 26B - Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source posture:
> - The reviewed Oracle GL 26B source set evidences strong native automation, reporting, approval, and close functionality.
> - The same source set does **not** evidence a GL-specific Oracle-native generative AI or digital-assistant capability.
> - Oracle Analytics Cloud (OAC) introduces analytics-layer AI capabilities such as AI Assistant and AI Agents, which are in scope when they are used with governed GL content.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud General Ledger 26B - AI governance |
| Governance objective | Ensure any AI use involving GL journals, balances, close, or reconciliation is intentional, reviewable, and bounded so accounting authority and close accountability remain human-owned |
| Primary audience | General Accounting Manager, Controller delegate, General Accountant, Financial Analyst, Security / Privacy, Internal Audit |
| Reference pattern | Domain-bounded AI safe use on top of journal-to-close control gates and governed GL analytics |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Conservative and control-first because no explicit GL-native AI feature is evidenced in the reviewed 26B sources |
| Non-goals | Authorizing AI to post journals, approve journals, close periods, or replace accounting judgment |

---

## 1) Executive Summary

**Context.** The reviewed Oracle 26B GL documentation shows extensive native automation and analytics, but no explicit GL-specific AI assistant or generative feature. That means the appropriate baseline is conservative: AI use with GL data should begin only as bounded assistive work, with stronger controls for commentary, reconciliations, and close support.

**What this package does.** It establishes the AI safe-use posture for GL, including approved and prohibited use categories, intake requirements, risk and control mapping, bounded-agent readiness, and recertification expectations.

**What is ready.** A conservative baseline that allows low-risk drafting and controlled summarization while prohibiting posting, approval, or close delegation.

**What remains.** Any future Oracle-native GL AI feature must be added through intake, source validation, and revised decision posture.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- AI use with GL reports, approved backlog metrics, reconciliation outputs, close commentary, or OAC workbooks / dashboards built on governed GL content.
- Bounded AI assistants or agents that summarize approved GL evidence or prepare draft issue tickets, including OAC AI Assistant or OAC AI Agent interactions over approved analytics content.
- Future Oracle-native GL AI features if later evidenced and formally reviewed.

### 2.2 Out of scope
- Autonomous journal creation, approval, posting, reversal, or period close.
- Unsupported accounting-policy or regulatory conclusions.
- Use of unapproved AI tools with restricted finance data.

### 2.3 Source posture
- No GL-native assistant or GenAI capability was confirmed in the reviewed Oracle GL 26B source set.
- Native Oracle automation such as AutoPost, approvals, recurring journals, reversals, and reporting is **not** AI and should not be confused with AI delegation.

---

## 3) GL AI Safe Use Policy

### 3.1 Use categories

| Category | Description | GL examples | Approval needed |
|---|---|---|---|
| **Permitted** | Low-risk drafting or summarization using approved nonrestricted inputs | Draft training text, summarize public Oracle GL documentation, rewrite procedure wording | Standing approval if tool is approved |
| **Restricted** | Uses approved GL KPI outputs, period-status summaries, or recurring work products that support management review | Draft journal-backlog commentary, summarize reconciliation themes, prepare close-readiness narrative, use OAC AI Assistant on approved GL dashboards | General Accounting Manager + Governance Reviewer |
| **High Risk** | Supports material reconciliation, close, or accounting analysis with restricted finance data | Drafting close memos from restricted reports, variance analysis that informs controller decisions, OAC AI Assistant interaction with restricted close content | General Accounting Manager + Controller delegate + Security / Privacy |
| **Agentic** | Retrieves approved GL reports or stages draft issue / follow-up content | Agent compiles backlog evidence packet, creates draft reconciliation follow-up, or uses an OAC AI Agent over approved GL analytics content | High-risk approvals plus readiness assessment |
| **Prohibited** | Bypasses accounting authority or performs material accounting action | Posting journals, approving journals, changing setup, closing periods, making unsupported accounting conclusions | Not allowed |

### 3.2 Data handling rules
- GL balance, journal, and reconciliation data are internal finance data and require approved tools and controlled storage.
- Restricted close, unreleased financial, or sensitive supporting-reference data may not be entered into unapproved tools.
- AI output cannot serve as sole accounting evidence or signoff support.

### 3.3 Human accountability
- General Accounting Manager and controller delegates remain accountable for accounting decisions and close.
- AI may support analysis or drafting but may not perform or approve accounting actions.

---

## 4) AI Use Case Intake Workflow

Every GL AI use case must record:
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

> Oracle-native GL AI feature evidence was not confirmed in the reviewed 26B source set. The table below governs possible use patterns, including analytics-layer OAC AI capabilities, not approved GL-native features.

| ID | Use case | Capability | Tier |
|---|---|---|---|
| AI-GL-01 | Draft close commentary from approved GL scorecards | Summarization / drafting | Restricted |
| AI-GL-02 | Summarize journal backlog exceptions | Summarization | Restricted |
| AI-GL-03 | Draft reconciliation issue narrative from approved variance logs | Drafting | High Risk |
| AI-GL-04 | Agent compiles approved close packet artifacts | Bounded agent | Agentic |
| AI-GL-05 | Agent creates draft follow-up tickets for posting / reconciliation issues | Bounded agent | Agentic |
| AI-GL-06 | OAC AI Assistant over approved GL dashboards / workbooks | Analytics AI assistant | Restricted |
| AI-GL-07 | OAC AI Agent summarizing approved GL analytics content | Analytics AI agent | Agentic |

---

## 6) Risk and Control Mapping

| AI risk | Impact | Control objective | Control activity | Owner | Reviewer | Evidence |
|---|---|---|---|---|---|---|
| AI output used as accounting evidence | Unsupported accounting reliance | Human validation required before reliance | Require source-reference check and signoff | General Accounting Manager | Controller delegate | Review record |
| AI influences close or reconciliation decision without full context | Misstated decision | Close and reconciliation decisions remain human-owned | High-risk approval and reviewer checklist | General Accounting Manager | Controller delegate | Approval + review |
| Restricted finance data enters unapproved tool | Confidentiality breach | GL finance data stays within approved environment | Intake and security review | General Accounting Manager | Security / Privacy | Intake record |
| Agent performs material accounting action | Control bypass | Agents cannot post, approve, or close | Blocked actions and readiness review | General Accounting Manager | IT Financials Lead | Readiness template |
| AI-generated commentary obscures metric or drill-path logic | Loss of traceability | Commentary must reference approved metrics and reports | Require approved-source citation | Financial Analyst | General Accounting Manager | Commentary review |

---

## 7) Bounded Agent Readiness Assessment (GL)

### Allowed examples
- Retrieve approved GL reports from controlled locations.
- Summarize backlog aging or reconciliation issue counts.
- Prepare draft issue tickets or follow-up summaries.

### Blocked actions
- Post journals.
- Approve journals.
- Change journal rules, setup, or security.
- Close periods or mark close complete.
- Certify reconciliations or accounting conclusions.

### Minimum readiness checks
- defined scope and owner,
- approved inputs and outputs,
- least-privilege permissions,
- human approval gate before any material use,
- logging, testing, incident handling, and recertification.

---

## 8) Monitoring, Metrics, and Recertification

- Review each approved GL AI use case at least quarterly.
- Reapprove after data-scope, model, prompt, or permission changes.
- Track use-case count, incidents, rejected outputs, and blocked actions.

---

## 9) Incident Management (AI-specific)

Log and escalate any:
- unsupported accounting recommendation,
- missing or misleading source attribution,
- restricted-data exposure,
- agent action outside approved scope,
- commentary that materially misstates close status.

---

## 10) Adoption and Training Notes

- Start with low-risk drafting only.
- Train finance reviewers to treat AI output as draft analysis, not evidence.
- Publish a simple prohibited-actions list to all GL users.

---

## 11) Deck Outline - GL AI Governance Briefing

1. Why the GL AI baseline is intentionally conservative
2. What Oracle-native automation is and is not
3. Safe-use tiers and prohibited actions
4. Intake, controls, and bounded-agent expectations
5. Monitoring and future-feature review

---

## 12) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial GL governed AI package created with no native GL AI feature approved by default | General Accounting Manager |
