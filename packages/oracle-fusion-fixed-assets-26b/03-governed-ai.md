# Governance Package: Oracle Fusion Cloud Fixed Assets 26B - Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source posture:
> - The reviewed Assets and Financials 26B source set evidences strong lifecycle, reporting, approval, and analytics capability.
> - The same source set does **not** evidence a Fixed Assets-specific Oracle-native assistant or generative AI feature.
> - Oracle Analytics Cloud (OAC) introduces analytics-layer AI capabilities such as AI Assistant and AI Agents, which are in scope when they are used with governed asset content.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Fixed Assets 26B - AI governance |
| Governance objective | Ensure any AI use involving asset lifecycle, depreciation, reconciliation, or retirement data is intentional, bounded, and reviewable so accounting authority remains human-owned |
| Primary audience | Asset Accounting Manager, Asset Accountant, Financial Analyst, Security / Privacy, Internal Audit |
| Reference pattern | Domain-bounded AI safe use layered on top of controlled asset operations and governed asset analytics |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Conservative and control-first because no domain-specific native AI feature is evidenced in the reviewed sources |
| Non-goals | Delegating asset posting, approval, depreciation close, or retirement accounting decisions to AI |

---

## 1) Executive Summary

**Context.** The reviewed Oracle source set for Assets is rich in lifecycle operations, reports, and extract-backed OTBI but does not evidence a Fixed Assets-specific AI assistant. The appropriate starting posture is therefore conservative: allow low-risk drafting and summarization, and require strong review for any AI use touching depreciation, reconciliation, retirement, or restricted asset data.

**What this package does.** It defines safe-use tiers, intake expectations, risk and control mapping, bounded-agent requirements, and monitoring for any AI use in the Fixed Assets domain.

**What is ready.** A no-default-automation posture that permits bounded assistive use and prohibits autonomous posting, depreciation, or retirement action.

**What remains.** Future Oracle-native asset AI features, if introduced, must be added through documented intake and review.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- AI use with approved asset reports, reconciliation outputs, lifecycle commentary, or OAC dashboards / workbooks built on governed asset content.
- Bounded assistants or agents that summarize approved asset evidence or prepare draft issue / follow-up content, including OAC AI Assistant or OAC AI Agent interactions over approved analytics content.
- Future native AI features only after formal review.

### 2.2 Out of scope
- Autonomous posting of additions, transfers, retirements, or reinstatements.
- Autonomous depreciation close, accounting signoff, or reconciliation signoff.
- Use of unapproved tools with restricted asset or financial data.

### 2.3 Source posture
- No native Fixed Assets assistant, digital assistant, or generative AI capability was confirmed in the reviewed source set.
- OTBI `Agents` mentioned in Financials reporting guidance are scheduled-delivery components, not AI assistants.

---

## 3) Fixed Assets AI Safe Use Policy

### 3.1 Use categories

| Category | Description | Fixed Assets examples | Approval needed |
|---|---|---|---|
| **Permitted** | Low-risk drafting and summarization with nonrestricted inputs | Draft training text, summarize public Oracle docs, rewrite procedure language | Standing approval if tool is approved |
| **Restricted** | Uses approved asset metrics, queue summaries, or recurring reporting outputs | Draft additions-backlog commentary, summarize retirement aging, draft extract-freshness narrative, use OAC AI Assistant over approved asset dashboards | Asset Accounting Manager + Governance Reviewer |
| **High Risk** | Involves depreciation, close, reconciliation, retirement, or restricted financial data | Draft close memo from asset reports, summarize material recon variances, interpret gain/loss themes, OAC AI analysis over restricted close content | Asset Accounting Manager + Controller delegate + Security / Privacy |
| **Agentic** | Retrieves approved asset reports or stages draft issue / follow-up content | Agent compiles reconciliation package, creates draft retirement follow-up ticket, or uses an OAC AI Agent over approved asset analytics content | High-risk approval plus readiness assessment |
| **Prohibited** | Bypasses asset-control authority | Post additions, approve retirement, run or certify depreciation close, approve accounting | Not allowed |

### 3.2 Data handling rules
- Approved asset reports and nonrestricted operational summaries may be used only in approved tools.
- Asset source-line detail, financial outputs, and close-related data are restricted and require controlled handling.
- AI output cannot be sole evidence for asset accounting, close, or retirement decisions.

### 3.3 Human accountability
- Asset Accounting Manager and controller delegates remain accountable for setup, capitalization, depreciation, reconciliation, and retirement decisions.
- AI may support analysis or drafting but may not approve, post, or certify asset actions.

---

## 4) AI Use Case Intake Workflow

Every fixed-assets AI use case must record:
- business purpose,
- users and reviewer,
- approved source data,
- native Oracle capability assessed first,
- control relevance,
- retained evidence,
- risk tier and decision.

Decision outcomes: low-risk allowed, restricted use approved, high-risk review required, agent use approved (bounded scope), or rejected.

---

## 5) Initial Feature and Use Inventory

> No domain-specific Oracle-native AI feature was confirmed in the reviewed Assets source set. The following entries govern potential use patterns, including analytics-layer OAC AI capabilities, not approved native asset features.

| ID | Use case | Capability | Tier |
|---|---|---|---|
| AI-FA-01 | Draft additions or depreciation backlog commentary | Summarization | Restricted |
| AI-FA-02 | Summarize asset extract-freshness and reconciliation exceptions | Summarization | Restricted |
| AI-FA-03 | Draft retirement or reconciliation issue narrative from approved reports | Drafting | High Risk |
| AI-FA-04 | Agent compiles approved close / reconciliation artifacts | Bounded agent | Agentic |
| AI-FA-05 | Agent creates draft follow-up tasks for extract, queue, or retirement issues | Bounded agent | Agentic |
| AI-FA-06 | OAC AI Assistant over approved asset dashboards / workbooks | Analytics AI assistant | Restricted |
| AI-FA-07 | OAC AI Agent summarizing approved asset analytics content | Analytics AI agent | Agentic |

---

## 6) Risk and Control Mapping

| AI risk | Impact | Control objective | Control activity | Owner | Reviewer | Evidence |
|---|---|---|---|---|---|---|
| AI output used as accounting evidence | Unsupported reliance | Human validation required before use | Reviewer compares to approved reports / inquiry outputs | Asset Accounting Manager | Controller delegate | Review record |
| AI commentary misstates depreciation or close status | Poor close decision | Close decisions remain human-owned | High-risk review for close-relevant outputs | Asset Accounting Manager | Financial Analyst / controller delegate | Approval record |
| Restricted asset financial data enters unapproved tool | Confidentiality breach | Restricted data remains in approved environment | Intake and sensitivity classification | Asset Accounting Manager | Security / Privacy | Intake record |
| Agent performs material asset action | Control bypass | Agents cannot post, approve, or close | Blocked actions and readiness review | Asset Accounting Manager | IT / BI owner | Readiness template |
| AI obscures reconciliation source logic | Loss of traceability | Outputs must reference approved reports and tolerance logic | Approved-source citation required | Financial Analyst | Asset Accounting Manager | Review signoff |

---

## 7) Bounded Agent Readiness Assessment (Fixed Assets)

### Allowed examples
- Retrieve approved asset reports from controlled locations.
- Summarize additions, depreciation, or retirement exception counts.
- Prepare draft reconciliation or issue packets.

### Blocked actions
- Post additions, adjustments, transfers, retirements, or reinstatements.
- Approve transaction groups or workflow decisions.
- Run or certify depreciation close.
- Certify reconciliations or accounting entries.

### Minimum readiness checks
- defined business owner and scope,
- approved inputs and outputs,
- least-privilege permissions,
- human approval gate,
- logging, testing, incident handling, and recertification.

---

## 8) Monitoring, Metrics, and Recertification

- Review approved asset AI use cases at least quarterly.
- Reassess after data, prompt, permission, or workflow changes.
- Track use-case volume, incidents, rejected outputs, and blocked actions.

---

## 9) Incident Management (AI-specific)

Log and escalate:
- unsupported depreciation or accounting recommendations,
- misleading retirement commentary,
- restricted-data exposure,
- agent action outside scope,
- missing source attribution for reconciliations or close support.

---

## 10) Adoption and Training Notes

- Start with low-risk drafting only.
- Train reviewers to treat AI outputs as draft analysis rather than evidence.
- Publish a prohibited-actions list to all Fixed Assets users.

---

## 11) Deck Outline - Fixed Assets AI Governance Briefing

1. Why the Fixed Assets AI baseline is conservative
2. Safe-use tiers and prohibited actions
3. Intake and approval model
4. Risks, controls, and bounded-agent expectations
5. Monitoring and future-feature review

---

## 12) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial Fixed Assets governed AI package created with no native AI feature approved by default | Asset Accounting Manager |
