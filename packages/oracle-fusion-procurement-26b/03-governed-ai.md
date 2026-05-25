# Governance Package: Oracle Fusion Cloud Procurement 26B – Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source anchor: Oracle Help Center, *Oracle Fusion Cloud Procurement 26B Documentation Library* — <https://docs.oracle.com/en/cloud/saas/procurement/26b/index.html>
> Related Oracle content: *Using Procurement 26B* (AI capabilities sections), *What's New for Oracle Procurement 26B*, *Oracle Fusion Cloud Procurement: Implementing Procurement* (AI/Agents/Assistants setup).
> Governance lenses: NIST AI RMF (Govern, Map, Measure, Manage), NIST AI RMF Playbook, NIST SP 800-53 Rev. 5, DAMA-DMBOK.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Procurement 26B – AI capabilities |
| AI features in scope (representative; refer to *What's New for 26B*) | Generative AI requisition / item description authoring; AI-assisted negotiation award analysis and award recommendations; AI-assisted supplier recommendations / supplier search; AI-assisted contract clause suggestions and contract risk analysis; Generative AI summarization of supplier negotiation responses; Spend Classification (ML categorization); Digital Assistant skills for Procurement; embedded AI Agents for Procurement (workflow agents that draft, summarize, or take guarded actions); Generative AI summaries on requisitions, POs, and supplier records |
| Governance objective | Ensure every AI capability used within Procurement 26B is intentional, classified by risk, controlled, monitored, evidenced, and recertified — and that human accountability for procurement decisions, contracts, and supplier commitments remains explicit |
| Primary audience | CPO, Chief Risk Officer, Chief Data / AI Officer, Procurement Process Owners, Controllership, Internal Audit, Privacy / Security, Legal |
| Reference patterns | NIST AI RMF 1.0; NIST AI RMF Playbook; finance/accounting AI safe-use practices; supplier and contract risk management practice |
| Maturity (current → target) | Foundational → Defined |
| Tone | Mandatory verbs reserved for policy / control statements; explicit boundaries on autonomy |
| Non-goals | General enterprise AI policy (this package narrows to Procurement 26B AI); model development governance (Oracle owns the underlying models); non-procurement AI features (HCM, ERP outside procurement) |

---

## 1) Executive Summary

**Context.** Oracle continues to embed AI across Fusion Cloud Procurement. The 26B release expands generative AI authoring assistance, response summarization, supplier and award recommendations, contract risk analysis, classification, Digital Assistant skills, and emerging procurement AI Agents that can perform guarded multi-step actions. These features create real productivity and risk-management value, but they also introduce risks: incorrect or unsupported recommendations, sensitive data exposure, control bypass, overreliance on AI for procurement judgment, supplier impact from biased or stale signals, contract exposure from missed legal nuance, and unauthorized agent actions in supplier-facing or transactional flows.

**What this package does.** It establishes the governance layer for Procurement 26B AI: an AI Safe Use Policy scoped to procurement (§3); a use-case intake workflow (§4) routed to a 26B AI feature inventory (§5); a risk-and-control matrix that maps each AI feature to NIST AI RMF functions and to control objectives, owners, and evidence (§6); an Agent Readiness assessment template tuned to procurement agents (§7); residual-risk and decision posture for each feature (§8); monitoring, incident, and recertification mechanics (§§9–10).

**What is ready.** AI feature inventory baseline; tiered risk classification; control matrix with named owners; agent readiness template; human-in-the-loop expectations linked to operational controls in `01-controlled-operations.md`; data fitness expectations linked to `02-governed-data-and-analytics.md`.

**What remains.** Per-feature configuration baselines (each tenant differs); model/feature change log subscription routine; AI exception register tooling; AI literacy enablement.

**What we ask of leadership.**
1. Endorse the Procurement AI Safe Use Policy in §3.
2. Approve the per-feature decision posture in §8 (Approve / Approve with Conditions / Do Not Approve).
3. Fund the monitoring and recertification routine (§9.3) starting next quarter.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- All AI capabilities surfaced inside Oracle Fusion Cloud Procurement 26B used by employees, including:
  - Embedded generative AI authoring helpers (descriptions, summaries, draft narratives).
  - AI recommenders (suppliers, awards, items, contract clauses).
  - ML classifiers (spend, risk).
  - Digital Assistant interactions tied to procurement intents.
  - Procurement AI Agents that plan or take action in procurement workflows.
- Inputs and outputs of these features, including any prompts authored by users.

### 2.2 Out of scope
- AI features outside Procurement modules.
- Custom AI models built by the organization outside the Oracle platform (governed by enterprise AI policy).
- Vendor AI used by third parties without integration to Oracle Procurement (governed by third-party AI assessment).

### 2.3 Source anchors (governance lenses)
- **NIST AI RMF (Govern / Map / Measure / Manage)** — primary lifecycle frame.
- **NIST AI RMF Playbook** — practical prompts for context, measurement, monitoring, response.
- **NIST SP 800-53 Rev. 5** — access, audit/accountability, configuration mgmt, identification/authentication, privacy, risk assessment, system & info integrity, monitoring.
- **DAMA-DMBOK** — data governance, stewardship, quality, metadata, ethics, lifecycle.
- **Finance / procurement control practice** — segregation of duties, approval, evidence, reconciliation, change control, auditability.

---

## 3) Procurement AI Safe Use Policy

### 3.1 Purpose
Define how AI features inside Oracle Procurement 26B may be used safely, with explicit boundaries, approval tiers, data handling, human review, disclosure, exception, and incident expectations.

### 3.2 Scope
All employees and service accounts interacting with AI features in Procurement 26B for any procurement activity (sourcing, contracting, supplier management, requisitioning, purchasing, analysis, reporting).

### 3.3 Use categories

| Category | Description | Procurement 26B examples | Approval needed |
|---|---|---|---|
| **Permitted** | Assistive use that produces drafts, summaries, or suggestions reviewed by a competent human before any procurement decision, commitment, or external communication | Gen AI requisition description draft; gen AI summary of supplier negotiation responses; AI item suggestion in catalog search; Digital Assistant intent help; spend classification suggestion reviewed by Spend Analytics Steward | Standing approval per policy |
| **Restricted** | Use that involves sensitive procurement data, materially supports a procurement judgment, or interacts with supplier-facing or transactional flows; requires named control mitigations and recorded human approval | AI award recommendation in Sourcing; AI supplier recommendation for new categories; AI contract clause suggestion / risk scoring; AI summary used in a supplier-facing communication; Procurement AI Agent that prepares a draft PO or change order | Per-use approval per §3.7; assessment per §6/§7 |
| **Prohibited** | Use that would bypass controls, expose restricted data, take unauthorized action, or replace human accountability | Autonomous award without human approval; autonomous PO issuance, change order, or final close; autonomous contract signature or activation; sharing supplier-confidential bid data or contract pricing into a non-approved AI tool; using AI output as the sole basis for legal, tax, or compliance determinations; uploading restricted data (bank, tax ID, contract pricing, qualification scores, PII) into AI tools outside the approved Oracle environment | Not allowed |

### 3.4 Data handling rules

| Data type | Allowed in Procurement 26B AI features | Restrictions | Required evidence |
|---|---|---|---|
| Public procurement reference data (catalog metadata, public category names) | Yes | None beyond standard | Standard |
| Internal requisition / PO descriptive content | Yes | Must remain inside the approved Oracle environment | Standard logs |
| Supplier negotiation responses (during open negotiation) | Yes, only within Sourcing | No copy outside the negotiation context; no use in non-sourcing AI tools | Sourcing context log |
| Contract pricing | Yes for contract-context AI features only | No copy into general assistants; no external sharing | Contract context log |
| Supplier bank, tax ID, PII | No, except where the feature is purpose-built and access-controlled | Mask in any preview / summary feature where feasible | Privacy review (§6) |
| Qualification scores and supplier risk detail | Restricted | Visible only to Risk and Procurement leadership roles | Access review |
| Unreleased financial impact (e.g., savings projections to be reported externally) | Restricted | Internal only until released; no external AI tool | Disclosure check |

### 3.5 Human accountability
- The human user who relies on, approves, or communicates an AI-influenced procurement output is accountable for that decision.
- AI output is **never** authoritative evidence on its own. Reviewer must validate against source documents (e.g., negotiation responses, contract clause language, supplier qualification record) before reliance.
- Delegation of procurement approvals to an AI agent without configured approval gating is prohibited.
- All controls in `01-controlled-operations.md` §6 remain in force; AI does not relax them.

### 3.6 Disclosure and evidence
- When AI output materially shaped a procurement deliverable (negotiation award memo, supplier selection rationale, contract clause, exception memo), the deliverable shall note "AI-assisted" and identify the feature.
- Evidence to retain: feature used, configuration / version where available, key inputs (or references to them), human reviewer, validation performed, final decision.
- Retention aligned with the records schedule in `01-controlled-operations.md` §8.

### 3.7 Approval tiers

| AI use scenario | Initial approver | Recurring approver |
|---|---|---|
| Permitted assistive use | Standing per policy | Annual reaffirmation |
| Restricted use with named mitigations | Procurement Process Owner + Spend Analytics Steward (and Supplier Risk Lead, Contracts Mgr, or Sourcing Lead as relevant) | Quarterly recertification |
| Agentic use (any AI Agent in Procurement 26B) | CPO + Chief Risk Officer + IT Procurement Lead | Quarterly recertification + after material change |
| Exception (waiver from §3.3 / §3.4) | CPO + Chief Risk Officer | Per exception; max 90 days |

### 3.8 Exceptions and incidents
- Exception requires rationale, compensating control, approver, expiration, scope, evidence.
- Suspected incidents: incorrect AI output relied upon, sensitive data exposure, unauthorized agent action, hallucinated supplier or contract content, prompt injection via supplier-supplied text → escalate to AI incident channel (§10) within 4 business hours.

### 3.9 Review
- Annually, after any material 26B+ release introducing or changing an AI feature, after any incident, after material change in vendor model behavior or contract terms with Oracle, and on regulator request.

---

## 4) AI Use Case Intake Workflow

> Used both for already-shipped Oracle Procurement 26B AI features and for emerging features in later releases.

### 4.1 Triggers
- A 26B AI feature is being enabled in production for the first time.
- A previously approved feature is being expanded to new users, new categories, new data, or new actions.
- An Oracle release introduces a new AI feature in Procurement.
- A team requests an exception or expanded use.

### 4.2 Intake form (apply per feature)

```markdown
# Procurement AI Use Case Intake: [Feature / Use Case]

## Business context
- Sponsor:
- Process / team:
- Business problem:
- Expected benefit:
- Frequency of use:
- Users:

## AI capability
- Feature / vendor / model: Oracle Fusion Cloud Procurement 26B – [feature name]
- Capability type: assistive / recommender / classifier / summarizer / assistant / agent
- Hosted: Oracle managed (yes/no); training use of inputs: per Oracle contract terms
- Configurable elements: prompt template, scope, role gating, action permissions, thresholds

## Data involved
- Source systems / objects: Requisition, PO, Sourcing, Contracts, Supplier, etc.
- Sensitivity: standard / restricted / PII / contract pricing / negotiation responses / qualification scores
- Financial reporting relevance: yes/no (if AI output supports a control or financial decision)
- External sharing: none / supplier-facing / regulator-facing

## Process and decision impact
- Output use: draft / suggestion / classification / score / action prep / action
- Procurement decision affected: requisition, sourcing award, supplier selection, contract content, supplier risk, spend categorization, PO change, exception
- Human review before reliance: required (always for restricted/agentic)
- Evidence retained: per §3.6

## Risk screening
| Question | Y/N | Notes |
|---|---|---|
| Restricted data involved? |  |  |
| Output supports a procurement decision or control? |  |  |
| Agentic behavior or system action involved? |  |  |
| Supplier-facing or external impact? |  |  |
| Any prohibited use indicator (§3.3)? |  |  |

## Preliminary risk tier
- Tier: Low / Medium / High / Agentic / Prohibited
- Rationale:

## Routing
- AI Safe Use fit check: §3
- Risk/control mapping: §6 (Medium+)
- Data security/privacy review: required if restricted data
- Agent Readiness Assessment: required if agentic
- Approvers per §3.7
- Conditions before use:
```

### 4.3 Tier definitions

| Tier | Definition | Required steps |
|---|---|---|
| Low | Approved feature, assistive only, no restricted data, human review always | Intake + policy fit |
| Medium | Restricted data or procurement judgment support; recurring use | Intake + risk/control mapping (§6) + data security review |
| High | Material control reliance, external impact, contracts, supplier risk decisions | Intake + risk/control mapping + data security review + CPO approval |
| Agentic | Any AI Agent acting in workflow, drafting / preparing / staging actions | All of the above + Agent Readiness Assessment (§7) |
| Prohibited | Falls in §3.3 prohibited list | Intake closed with rejection |

---

## 5) 26B AI Feature Inventory (Baseline)

> This inventory is the working baseline. Validate against *What's New for Oracle Procurement 26B* each release and revise.

| ID | Feature (representative) | Module | Capability | Typical user | Output | Action capability | Tier |
|---|---|---|---|---|---|---|---|
| AI-01 | Gen AI requisition / item description authoring | Self Service Procurement | Generative assist | Requester | Draft text | None (suggestion) | Low |
| AI-02 | Gen AI summarization of supplier negotiation responses | Sourcing | Summarizer | Category Mgr, Sourcing Analyst | Summary text | None | Medium |
| AI-03 | AI award analysis / award recommendation | Sourcing | Recommender | Category Mgr | Award suggestion + scoring narrative | None (recommendation only) | High |
| AI-04 | AI supplier recommendation / supplier search assist | Supplier Model / Sourcing | Recommender | Sourcing Analyst | Supplier shortlist | None | Medium |
| AI-05 | AI clause suggestion in Procurement Contracts | Contracts | Recommender / generative | Contract Admin | Clause draft + rationale | None | High |
| AI-06 | AI contract risk analysis / clause deviation scoring | Contracts | Classifier / scorer | Contracts Mgr, Legal | Risk score + flagged clauses | None | High |
| AI-07 | Spend Classification | Spend Classification | ML classifier | Spend Steward | Category assignment + confidence | None (per record assignment with review threshold) | Medium |
| AI-08 | Digital Assistant procurement skills (intent-based help) | Procurement Common | Conversational assistant | All procurement users | Intent answer, navigation, draft action | Limited — guarded actions only if configured | Medium (Agentic if configured to take action) |
| AI-09 | Procurement AI Agent — draft action (e.g., draft PO from approved requisition with anomaly check) | Purchasing | Agent | Buyer (approves) | Drafted document / staged action | Action prep only; human approval gate before commit | Agentic |
| AI-10 | Gen AI summary on supplier or PO records | Multiple | Summarizer | All | Summary text | None | Low |
| AI-11 | AI item recommendation in catalog search | Self Service Procurement | Recommender | Requester | Suggested items | None | Low |

> The actual list and behavior depend on tenant configuration and Oracle release. Add a row for every newly enabled feature; never assume a feature is "low risk" by analogy alone.

---

## 6) Risk and Control Mapping (per AI feature)

### 6.1 Cross-feature risk themes

| Theme | Description | Coverage strategy |
|---|---|---|
| Incorrect / unsupported output | Gen AI draft or recommendation is inaccurate, biased, or stale | Mandatory human review (HC-1), reviewer competence, sampling (DC-2) |
| Sensitive data exposure | Restricted data enters or leaks via AI feature or prompt | Data handling rules §3.4, scope gating (AC-1), monitoring (MC-1) |
| Control bypass | AI output is used to substitute for an approval, qualification, or contract control | Operational controls in `01-controlled-operations.md` §6 remain enforced; HC-1, GC-1 |
| Overreliance | Reviewer rubber-stamps AI output | Reviewer rotation, sampling QA (DC-2), training (GC-2) |
| Supplier impact | Recommendation, summary, or risk score harms a supplier unfairly | Reviewer competence (HC-1), grievance path (MC-3), monitoring of recommendation diversity (DC-4) |
| Prompt injection / adversarial input | Supplier-supplied text manipulates an AI summary or agent | Input sanitation expectations; reviewer skepticism; agent guardrails (§7) |
| Configuration / version drift | Feature behavior changes silently across releases | Release readiness (CC-1), recertification (RC-1) |
| Logging / evidence gaps | Cannot reconstruct what AI did or what the user approved | Evidence retention §3.6, monitoring (MC-1) |

### 6.2 Control catalog (procurement AI)

| ID | Control | Type | Owner | Performer | Reviewer | Frequency | Evidence |
|---|---|---|---|---|---|---|---|
| GC-1 | Procurement AI Safe Use Policy fit at intake | Directive / Preventive | CPO | Procurement Process Owner | Chief Risk Officer | Per use case | Intake form, approval |
| GC-2 | AI literacy and reviewer training for restricted/agentic features | Directive | CPO | Procurement L&D | Procurement Process Owner | Annual + on enablement | Training records |
| AC-1 | Feature role / scope gating (least privilege; restricted features visible only to required roles) | Preventive (auto) | IT Procurement Lead | Security Admin | Procurement Ops Mgr | Per change + quarterly review | Role assignment log |
| AC-2 | Privileged setup access (e.g., AI feature enablement, prompt templates, agent configuration) limited and reviewed | Preventive | IT Procurement Lead | Security Admin | Internal Audit | Quarterly | Privileged access review |
| DC-1 | Data fitness for AI input meets DQ thresholds in `02-governed-data-and-analytics.md` §8 | Preventive / Detective | Domain Steward | Spend Analytics Steward | Procurement Analytics Lead | Per cadence (asset DQ) | DQ reports |
| DC-2 | Output sampling QA per restricted/high feature (independent review of N% outputs) | Detective | Procurement Analytics Lead | Designated reviewer | Procurement Ops Mgr | Monthly | QA log |
| DC-3 | Spend Classification confidence floor (DQ-11) and below-floor manual review | Preventive | Spend Analytics Steward | Category Steward | Procurement Analytics Lead | Continuous | Confidence dashboard |
| DC-4 | Recommendation fairness / diversity check (supplier recommendations not concentrated to incumbents in violation of diversity / supplier diversification goals) | Detective | Procurement Analytics Lead | Spend Analytics Steward | CPO | Quarterly | Diversification report |
| HC-1 | Mandatory human review before any reliance on restricted/high/agentic AI output; reviewer is competent and independent of preparer where possible | Preventive | Process Owner per feature | Reviewer | Procurement Ops Mgr | Per output | Approval evidence |
| HC-2 | Disclosure of AI-assisted authorship in qualifying deliverables (§3.6) | Directive | Process Owner | Preparer | Reviewer | Per deliverable | Deliverable text + workpaper note |
| CC-1 | Quarterly release readiness for AI features (impact on behavior, prompts, scope) — links to `01-controlled-operations.md` C-20 | Directive | Procurement Ops Mgr | IT Procurement Lead | Internal Audit | Per release | Readiness memo |
| CC-2 | Change control for prompt templates, agent configurations, scope rules, and feature toggles | Preventive | IT Procurement Lead | Security Admin | Process Owner | Per change | Change ticket, before/after |
| MC-1 | Logging of AI inputs, outputs, user, reviewer, decisions where feasible | Detective | IT Procurement Lead | Platform | Internal Audit | Continuous | Log extracts |
| MC-2 | Monitoring metrics: feature usage, override rate, reviewer rejection rate, exception count, incident count | Detective | Procurement Analytics Lead | Spend Analytics Steward | CPO | Monthly | Dashboard |
| MC-3 | Supplier feedback / grievance path tied to AI recommendations or scores | Detective | Supplier Risk Lead | Supplier Relations | CPO | Continuous | Grievance log |
| RC-1 | Recertification of restricted/agentic AI use quarterly and after material change | Directive | CPO | Procurement Ops Mgr | Internal Audit | Quarterly | Recertification memo |

### 6.3 Per-feature risk and control mapping (worked examples)

#### AI-03 — AI award analysis / award recommendation (Sourcing)
| AI RMF function | Key considerations | Gaps to monitor |
|---|---|---|
| Govern | Policy fit confirmed (Restricted/High); Category Mgr accountable | Reviewer competence on edge cases |
| Map | Inputs include negotiation responses (restricted), scoring criteria; users are Category Mgrs; affected: bidding suppliers | Bias risk from historical award patterns |
| Measure | Reviewer override rate, award rationale completeness, supplier diversity in shortlists vs awards | Lack of fairness baseline |
| Manage | Award still requires SOP-02 and operational control C-08; AI output is recommendation only | Recertify quarterly; capture supplier grievances |
| Controls | GC-1, AC-1, DC-1, DC-2, DC-4, HC-1, HC-2, MC-1, MC-2, MC-3, RC-1 |

#### AI-05 / AI-06 — AI clause suggestion + contract risk analysis (Contracts)
| AI RMF function | Key considerations | Gaps to monitor |
|---|---|---|
| Govern | Restricted/High; Contracts Mgr accountable; Legal in approval path for any clause deviation (operational control C-09) | Reviewer must be qualified Legal/Contracts |
| Map | Inputs: contract metadata, clause library, party data; output: clause draft + risk score | Hallucinated or non-standard clauses |
| Measure | % of AI clauses retained as-is vs edited vs rejected; missed risk flags identified in post-execution review | Need baseline for missed-risk rate |
| Manage | SOP-03 still applies; AI output cannot be the sole basis for legal determination | Recertify on Oracle clause library updates |
| Controls | GC-1, AC-1, DC-1, DC-2, HC-1 (Legal review), HC-2, CC-1, CC-2, MC-1, MC-2, RC-1 |

#### AI-09 — Procurement AI Agent (draft action)
| AI RMF function | Key considerations | Gaps to monitor |
|---|---|---|
| Govern | Agentic — full agent readiness in §7; CPO + CRO + IT approval | Scope creep across categories |
| Map | Inputs: approved requisition, supplier history; output: staged PO draft with anomaly notes; action: prepare only, no commit | Prompt injection from descriptive fields |
| Measure | Anomaly detection precision/recall, draft acceptance rate, exception count | Hidden assumptions in agent logic |
| Manage | All operational controls C-03 / C-05 remain; PO approval gate is the system of record | Hard stop on any action requiring approval per policy |
| Controls | All of §6.2 plus §7 readiness criteria |

---

## 7) AI Agent Readiness Assessment (Procurement)

> Apply per agent. Tighten the template from `ai-agent-readiness-assessment` to procurement specifics.

```markdown
# Procurement AI Agent Readiness: [Agent Name]

## Agent overview
- Business owner:
- Process / team:
- Purpose (one sentence):
- Users:
- Operating frequency:
- Modules / systems accessed:
- Outputs / actions:

## Scope boundaries
- Agent may: draft, recommend, summarize, validate, prepare
- Agent may not: submit a requisition, approve, issue a PO, change a PO without approval, communicate to a supplier, activate or sign a contract, modify a supplier master record, change approval rules, change roles or privileges
- Human-owned decisions: award, supplier qualification outcome, contract approval, PO approval, change order approval, exception approval
- Prohibited actions: anything in policy §3.3 prohibited list

## Autonomy and permissions
| Capability | Permission level | Approval gate | Evidence / log |
|---|---|---|---|
| Read procurement data | Limited to scope categories/BUs | – | Access log |
| Read sensitive data (bank, tax ID, contract pricing) | Disallowed unless purpose-specific | n/a | n/a |
| Write/update transactional records | Draft-only; no commit | Human approval before commit | Change log |
| Send / submit | Disallowed | n/a | n/a |
| External communication | Disallowed | n/a | n/a |
| Schedule / retry | Disallowed | n/a | n/a |
| Invoke other tools / APIs | Whitelist only | Change control | Tool call log |

## Data and process impact
- Data sensitivity:
- Financial reporting / control relevance:
- Downstream consumers:
- Supplier impact:

## Oversight and controls
| Risk / failure mode | Control | Owner | Reviewer | Evidence |
|---|---|---|---|---|
| Incorrect draft | HC-1 mandatory human approval before commit | Process Owner | Buyer/Reviewer | Approval evidence |
| Prompt injection from supplier text | Input scope limits + reviewer skepticism + content rules | IT Procurement Lead | Process Owner | Test results |
| Excess privilege | AC-1 least privilege; AC-2 privileged review | IT Procurement Lead | Internal Audit | Access review |
| Hidden agent logic change | CC-2 change control + recertification RC-1 | IT Procurement Lead | Process Owner | Change ticket |
| Logging gap | MC-1 logging requirement; sampling QA DC-2 | IT Procurement Lead | Internal Audit | Log extract |

## Testing performed before release
- Scenarios:
- Edge / negative tests (e.g., malformed input, missing data, ambiguous supplier):
- Permission tests (agent cannot perform prohibited actions):
- Output validation tests:
- Recovery / rollback tests:
- Results:

## Monitoring and recertification
- Logs monitored:
- Monitoring owner:
- Cadence:
- Recertification trigger:
- Approval expiration:

## Readiness decision
- Decision: Ready / Ready with Conditions / Not Ready / Prohibited
- Conditions:
- Residual risk:
- Approvers: CPO + CRO + IT Procurement Lead
- Next review:
```

### 7.1 Mandatory readiness gates for Procurement AI Agents
- **Action ceiling.** No agent shall commit a procurement transaction, approve, sign, or externally communicate without a human gate. All operational controls in `01-controlled-operations.md` §6 remain in force.
- **Scope ceiling.** Agent permissions limited to a defined set of categories, BUs, and document types.
- **Data ceiling.** Restricted data accessible only with documented business need and equivalent role-gated controls.
- **Evidence floor.** Inputs, outputs, tool calls, approvals, exceptions, and outcomes are logged sufficiently to reconstruct the action.

---

## 8) Decision Posture by Feature (initial baseline)

| Feature | Recommended decision | Conditions |
|---|---|---|
| AI-01 Gen AI requisition / item description | Approve | HC-2 disclosure; reviewer at requisition approval |
| AI-02 Gen AI summarization of negotiation responses | Approve | Use only within Sourcing context; summary not authoritative; reviewer validates against responses (HC-1) |
| AI-03 AI award analysis / recommendation | Approve with Conditions | DC-4 fairness check; recertify quarterly (RC-1); award still per SOP-02 / C-08 |
| AI-04 AI supplier recommendation | Approve with Conditions | DC-4 fairness; shortlist reviewer skepticism; supplier diversity considered |
| AI-05 AI clause suggestion | Approve with Conditions | Legal in approval path; deviation report; CC-2 change control on clause library |
| AI-06 AI contract risk analysis | Approve with Conditions | Reviewer competence; do not rely solely on AI flag; sampling QA |
| AI-07 Spend Classification | Approve with Conditions | DQ-11 confidence floor; below-floor manual review; DC-3 |
| AI-08 Digital Assistant procurement skills | Approve with Conditions | If configured for guarded actions, treat as Agentic and run §7 |
| AI-09 Procurement AI Agent (draft action) | Approve with Conditions | §7 readiness passed; action ceiling enforced; CPO + CRO + IT signoff |
| AI-10 Gen AI summary on supplier / PO records | Approve | HC-2 disclosure if summary used outside the screen |
| AI-11 AI item recommendation in catalog search | Approve | None beyond standing policy |

> Decisions are revisited per RC-1 and on any Oracle release that materially changes a feature.

---

## 9) Monitoring, Metrics, and Recertification

### 9.1 Monitoring metrics

| Metric | Source | Threshold | Owner |
|---|---|---|---|
| AI feature usage by user / role | Platform logs | Trend; flag spikes | Procurement Analytics Lead |
| Reviewer override / rejection rate (per feature) | Output QA + sampling | Sustained >25% → investigate | Process Owner |
| Spend Classification confidence histogram | OAC / FAW-PROC | ≥80% confidence on ≥90% of records | Spend Analytics Steward |
| AI-assisted award diversity (suppliers shortlisted vs awarded) | Sourcing logs + Spend | Review quarterly | Strategic Sourcing Lead |
| Contract clause deviation flagged-but-missed (post-execution audit) | Internal Audit | Trend down | Contracts Mgr |
| Agent action drafts vs committed by humans | Platform logs | Trend; flag deviation from baseline | IT Procurement Lead |
| Incidents (AI-related) | Incident register | Zero S1 tolerance | CRO |
| Exceptions open and aging | Exception register | Aging > expiration → close | CPO |

### 9.2 Recertification
- Restricted features: quarterly; record of reviewer composition and any condition changes.
- Agentic features: quarterly + after any material configuration change or Oracle release that touches the feature.
- Trigger events for off-cycle recertification: incident, audit finding, regulator inquiry, change in vendor terms, change in scope (users, categories, data, action), material change in monitoring metrics.

### 9.3 Routine (operational cadence)
- **Weekly:** Process owners review override / rejection trends per feature.
- **Monthly:** Procurement Analytics Lead reviews monitoring dashboard with CPO.
- **Quarterly:** AI Governance review with CPO, CRO, CDO/CAIO, Internal Audit; refresh decision posture in §8; refresh feature inventory in §5; run release readiness for the new Oracle release.
- **Annually:** Policy review; reviewer training refresh; access review.

---

## 10) Incident Management (AI-specific)

### 10.1 Definitions

| Severity | Examples |
|---|---|
| S1 | Sensitive data exposed via AI feature; unauthorized agent action affecting suppliers or contracts; financial misstatement risk |
| S2 | Material AI output error relied upon for an award, supplier selection, or contract clause; broad reviewer overreliance pattern; recurring control bypass |
| S3 | Localized incorrect AI output identified before reliance; isolated reviewer training issue |
| S4 | Cosmetic / behavior change without operational impact |

### 10.2 Workflow
1. Detect (user, monitoring metric, audit).
2. Report to AI incident channel within 4 business hours for S1/S2.
3. Contain (disable feature for affected scope; freeze agent; revoke role).
4. Investigate root cause (configuration, prompt, model behavior, data, training, supplier-injected text, release change).
5. Remediate (configuration change, scope reduction, additional reviewer, recertification reset, vendor ticket with Oracle).
6. Validate closure (Internal Audit signs off S1/S2; CRO informed).
7. Feed back (update §3 policy, §6 controls, §5 inventory, §8 decision posture as needed).

### 10.3 Coordination with other registers
- Operational incidents flow into `01-controlled-operations.md` §7.
- Data-quality root causes flow into `02-governed-data-and-analytics.md` §10.
- AI incidents are tracked separately to preserve AI-RMF "Manage" evidence and to enable trend analysis at the CRO and CDO/CAIO level.

---

## 11) Adoption and Training Notes

- **Procurement AI literacy** (all users): 30-min module on permitted vs restricted vs prohibited; data handling; disclosure; incident reporting.
- **Reviewer competence** (restricted/high features): role-specific deep dive — sourcing reviewers on award narratives; contract reviewers on clause edge cases; supplier risk reviewers on score interpretation.
- **Agent operators / approvers** (agentic features): scenario-based training including misuse and failure recovery; sign-off required before access.
- **Communication cadence:** monthly AI feature changelog to procurement; quarterly Governance Council readout.
- **Release readiness:** every Oracle release, refresh AI feature inventory (§5) and rerun §6/§8 for any changed feature.

---

## 12) Deck Outline – Procurement AI Governance Briefing

1. Why governed AI in Procurement
2. NIST AI RMF framing (Govern / Map / Measure / Manage)
3. Policy at a glance (§3): permitted, restricted, prohibited; data handling; human accountability
4. 26B AI feature inventory (§5) and tiering
5. Risk themes and control coverage (§6)
6. Agent readiness gates (§7)
7. Decision posture per feature (§8) — what we approve, with what conditions
8. Monitoring and recertification (§9)
9. Incident response (§10)
10. Decision asks: endorse policy, approve decision posture, fund monitoring & training

---

## 13) Version History

| Version | Date | Author | Change | Approver |
|---|---|---|---|---|
| 0.1 | 2026-05-18 | Procurement Governance Lead + CRO delegate | Initial draft for Oracle 26B | – |
| 1.0 | TBD | Procurement Governance Lead | Approved baseline | CPO + CRO + CDO/CAIO |
