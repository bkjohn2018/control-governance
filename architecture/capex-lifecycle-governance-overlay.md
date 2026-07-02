# CapEx Lifecycle Governance Overlay

> **Type:** Cross-domain governance overlay (not a domain bundle)  
> **Parent architecture:** [Finance & Accounting Domain Governance Architecture](finance-accounting-domain-governance-architecture.md)  
> **Data companion:** [CapEx Master Data Management Framework](capex-master-data-management-framework.md)  
> **Domain bundles referenced:** [Procurement](../packages/oracle-fusion-procurement-26b/), [AP I2P](../packages/oracle-fusion-ap-i2p-26b/), [Projects](../packages/oracle-fusion-project-management-26b/), [Fixed Assets](../packages/oracle-fusion-fixed-assets-26b/), [General Ledger](../packages/oracle-fusion-general-ledger-26b/)

---

## 0) Overlay Inputs

| Item | Value |
|---|---|
| Business function | Capital expenditure (CapEx) lifecycle from demand approval through place-in-service, depreciation, and retirement |
| Platform | Oracle Fusion Cloud 26B (Procurement, Payables, Project Management, Assets, General Ledger) |
| Governance objective | Ensure cross-domain consistency, completeness, and accountability for CapEx without duplicating domain SOPs |
| Primary audience | CFO delegate, CapEx process owner, CPO, AP process owner, PMO lead, Asset Accounting Manager, Controllership, Internal Audit |
| Maturity (current → target) | Foundational → Defined (12-month horizon) |
| Tone | ISO 9001-inspired documentation discipline; COSO-style control language; mandatory verbs (`shall`, `must`) reserved for policy and control statements |
| Non-goals | Domain SOP replacement; detailed Oracle configuration; enterprise portfolio prioritization; tax-policy design; maintenance work management |

---

## 1) Executive Summary

**Context.** CapEx spans four governed domains—Projects, Procurement, AP, and Fixed Assets—each with its own controlled-operations package. Domain boundaries are correctly scoped, but handoffs are defined as *out of scope* in adjacent domains. That creates accountability gaps at requisition coding, receipt-to-match, pay-to-capitalize, and place-in-service transitions.

**What this overlay does.** It establishes the **cross-domain operating and control layer** for CapEx: lifecycle stage gates, joint RACI, handoff data contracts, enterprise metrics, and issue routing. Domain SOPs, control matrices, and analytics remain authoritative within each bundle.

**What is ready.** Six lifecycle stages mapped to domain control points; cross-domain policy rules; handoff SLAs; joint RACI; overlay control matrix; CapEx funnel metrics; bundle traceability.

**What remains.** Tenant-specific capitalization thresholds, approval hierarchies, and Oracle segment values; automated exception dashboards; CapEx board charter ratification.

**What we ask of leadership.**
1. Endorse the policy addendum in §2.
2. Name a CapEx lifecycle process owner and confirm the joint RACI in §5.
3. Approve the handoff SLAs and enterprise metrics in §§4 and §8.

---

## 2) Policy Addendum — CapEx Lifecycle Governance

### 2.1 Purpose
Establish mandatory cross-domain operating, control, and evidence requirements for capital expenditure from approved demand through asset retirement.

### 2.2 Scope
- In scope: CapEx demand and budget approval; requisition and PO coding; receiving and three-way match; invoice validation and posting; project cost accumulation; asset source ingestion, capitalization, depreciation, reconciliation, and retirement.
- Out of scope: Detailed domain SOPs (see §10); Opex spend outside capital thresholds; enterprise demand planning; procurement sourcing methodology; GL close design beyond FA posting handoffs.

### 2.3 Policy Rules (mandatory)
1. **CX-1 Lifecycle ownership.** A named CapEx lifecycle process owner shall govern end-to-end stage gates, handoff SLAs, and cross-domain exceptions.
2. **CX-2 Capital classification.** Spend proposed as CapEx shall be classified at demand or requisition per approved capitalization policy before PO issuance.
3. **CX-3 Project and asset coding.** CapEx requisitions, POs, receipts, and invoices shall carry valid project, task, and asset-category references before downstream processing.
4. **CX-4 Handoff accountability.** Each lifecycle handoff shall have a documented sender owner, receiver owner, required data fields, SLA, and evidence artifact (§4).
5. **CX-5 No silent bypass.** Manual workarounds that skip project coding, receipt confirmation, three-way match, or FA source validation are prohibited except per documented exception with compensating control.
6. **CX-6 Place-in-service discipline.** Assets shall not be depreciated until place-in-service date, useful life, book, and category are approved per Fixed Assets policy.
7. **CX-7 Cross-domain issue routing.** Exceptions that span domains shall route through the CapEx issue workflow (§7), not remain in domain silos.
8. **CX-8 Metric conformance.** Enterprise CapEx metrics (§8) shall use the conformed glossary and approved lineage before management reporting.

### 2.4 Exceptions
Exceptions require documented rationale, risk assessment, compensating control, approver per DOA, and expiration date. Standing exceptions are prohibited.

---

## 3) Governance Tiers and Lifecycle Process Map

### 3.1 Three governance tiers

| Tier | Body | Cadence | Decisions |
|---|---|---|---|
| **Strategic** | CapEx / investment committee | Quarterly | Capital policy, thresholds, category standards, portfolio limits |
| **Tactical** | CapEx governance board (process owner + domain leads) | Monthly | Stage-gate exceptions, SLA breaches, metric trends, release impacts |
| **Operational** | Domain process owners and performers | Daily / weekly | Transaction execution per domain SOPs; handoff clearance |

### 3.2 CapEx lifecycle stages

```text
(S1) Demand & Budget Approval ── Projects / Finance
    │   • Capital vs. Opex classification
    │   • Approved project, WBS, budget
    ▼
(S2) Requisition & PO ── Procurement
    │   • Contract-backed spend (where required)
    │   • Project / asset segment coding
    ▼
(S3) Receive & Confirm ── Procurement (+ SCM receiving)
    │   • Receipt or service confirmation
    ▼
(S4) Invoice, Match & Pay ── AP
    │   • Validation, holds, three-way match, posting
    ▼
(S5) Accumulate & Capitalize ── Projects / Fixed Assets
    │   • Project costs; FA source lines; place in service
    ▼
(S6) Depreciate, Reconcile & Retire ── Fixed Assets / GL
        • Depreciation, FA–GL recon, impairment, retirement
```

### 3.3 Stage-to-domain control mapping

| Stage | Primary domain bundle | Domain control anchors | Overlay gate (CX) |
|---|---|---|---|
| S1 | Projects, GL | PM-1, PM-2; budget availability | CX-2 capital classification |
| S2 | Procurement | CP-01, CP-05; R-5 contract-backed spend | CX-3 coding completeness |
| S3 | Procurement | CP-08 receipt | Handoff H-03 |
| S4 | AP I2P | Invoice validation, match controls | Handoff H-04 |
| S5 | Projects, Fixed Assets | PM-6 change governance; FA-2 source validation | CX-6 place in service |
| S6 | Fixed Assets, GL | FA-5, FA-6 depreciation and recon | Close readiness |

### 3.4 MDM lifecycle map (L1–L12)

The [CapEx Master Data Management Framework](capex-master-data-management-framework.md) extends this overlay with twelve master-data-aware stages. Stages L1–L4 cover upstream portfolio authoring (EPM Planning, external PPM, or governed intake register); L5–L12 align to operational execution.

| MDM stage | Overlay stage | Description |
|---|---|---|
| L1 Strategy | Upstream of S1 | Investment themes, portfolio buckets, capital policy |
| L2 Demand intake | Upstream of S1 | Demand requests, business cases, preliminary classification |
| L3 Feasibility | Upstream of S1 | Feasibility studies, options, risk registers |
| L4 Authorization | Feeds S1 | Investment decision, `CapExInvestmentID`, funding envelope |
| L5 Budgeting | S1 | Budget version, project charter, WBS shell, CapEx COA |
| L6 Design | S1 | Detailed WBS, tasks, asset template, location |
| L7 Sourcing | S2 | Supplier, contract, item, purchasing category |
| L8 Construction / implementation | S3, S4 | PO, receipt, project actuals, CIP |
| L9 Capitalization | S5 | FA source lines, PIS, `GlobalAssetTag` |
| L10 Commissioning | S5 extension | Commissioning certificate, acceptance |
| L11 Operational handoff | S5–S6 | Operating asset, custodian, maintenance reference |
| L12 Retirement | S6 | Retirement, disposal, gain/loss |

Master-data quality rules (MDQ-01 through MDQ-10), golden-record authority, and identifier policy are defined in the MDM framework. Process handoffs H-01 through H-06 remain authoritative for operational accountability.

---

## 4) Cross-Domain Handoff Data Contracts

Every handoff requires: **sender owner**, **receiver owner**, **required fields**, **SLA**, **evidence**, and **downstream system status**.

| Handoff ID | From → To | Sender → Receiver owner | Required fields | SLA | Evidence |
|---|---|---|---|---|---|
| **H-01** | S1 → S2 Projects → Procurement | PMO / Project Accountant → Buyer | Approved project; task; CapEx account; asset category; budget check | 2 business days to requisition | Approved budget; project status |
| **H-02** | S2 internal Procurement | Buyer → Procurement Ops Mgr | Valid project/task segments; contract ref (if category-required); capital flag | Before PO approval | Requisition approval; PO draft |
| **H-03** | S3 → S4 Procurement → AP | Receiving → AP Manager | PO line; receipt qty/date; receiver ID; match-ready status | 3 business days post-receipt | Receipt transaction; receiving report |
| **H-04** | S4 → S5 AP → FA / Projects | AP Specialist → Asset Accountant | Posted invoice; project cost lines; asset-eligible amount; no open holds | 5 business days post-post | Posted invoice; hold clearance log |
| **H-05** | S5 → S6 FA → GL | Asset Accountant → GL Owner | Capitalized asset; PIS date; useful life; depreciation run complete | Before period close | Mass additions post; depreciation journal |
| **H-06** | S5 Projects → FA | Project Accountant → Asset Accountant | CIP balance; completion cert; asset description; location | 10 business days post-mechanical completion | Project cost export; PIS approval |

**Data contract rule:** Receiver shall reject or hold transactions missing required fields and log a cross-domain issue (§7). Sender remains accountable until the issue is resolved or formally excepted.

---

## 5) Joint RACI — CapEx Lifecycle

| Activity | CapEx Process Owner | Projects / PMO | Procurement | AP | Fixed Assets | Controllership | IT ERP |
|---|---|---|---|---|---|---|---|
| Lifecycle policy and stage gates | **A** | C | C | C | C | **R** | I |
| S1 demand and budget approval | C | **R/A** | I | I | I | C | I |
| S2 requisition and PO coding | C | C | **R/A** | I | C | C | I |
| S3 receiving | I | I | **R/A** | C | I | I | C |
| S4 invoice match and pay | C | I | C | **R/A** | C | C | I |
| S5 capitalize / PIS | C | **R** | I | C | **A** | C | I |
| S6 depreciate and reconcile | C | I | I | I | **R/A** | C | I |
| Cross-domain exceptions | **A** | R | R | R | R | C | C |
| Enterprise CapEx metrics | **A** | C | C | C | C | **R** | C |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 6) Overlay Control Matrix

Cross-domain controls supplement—not replace—domain control matrices.

| ID | Control | Risk | Type | Owner | Performer | Frequency | Domain refs | Evidence |
|---|---|---|---|---|---|---|---|---|
| CXC-01 | Capital classification at S1/S2 | Expense misclassification | Preventive | CapEx Process Owner | Project Accountant / Buyer | Per request | CX-2; PM-1 | Classification approval |
| CXC-02 | Project/asset coding on req and PO | Break in capitalization chain | Preventive | Procurement Ops Mgr | Buyer | Per transaction | CX-3; CP-01, CP-05 | Requisition/PO audit |
| CXC-03 | Receipt before invoice match | Payment without delivery | Preventive | Procurement Ops Mgr | Receiver | Per receipt | CP-08; H-03 | Receipt record |
| CXC-04 | AP holds for missing CapEx refs | Invalid FA source | Preventive | AP Manager | AP Specialist | Per invoice | H-04 | Hold report |
| CXC-05 | FA source validation before post | Misstated asset register | Preventive | Asset Acct Mgr | Asset Accountant | Per batch | FA-2; H-04, H-06 | Mass additions review |
| CXC-06 | PIS and useful life approval | Incorrect depreciation | Preventive | Asset Acct Mgr | Asset Accountant | Per asset | CX-6; FA-3 | PIS approval record |
| CXC-07 | FA–GL recon before close | Period misstatement | Detective | Asset Acct Mgr | Asset Accountant | Per period | FA-6; H-05 | Recon signoff |
| CXC-08 | Cross-domain issue SLA | Untracked breakage | Detective | CapEx Process Owner | Domain leads | Weekly | §7 | Issue log |

---

## 7) Cross-Domain Issue and Exception Workflow

### 7.1 Issue categories
- **Coding:** Missing or invalid project, task, asset category, or CapEx account.
- **Match:** Receipt, PO, or invoice mismatch on CapEx lines.
- **Timing:** SLA breach on handoff H-01 through H-06.
- **Capitalization:** CIP aging, missing PIS, or threshold disputes.
- **Reconciliation:** FA–GL or project-to-PO breaks.

### 7.2 Workflow
1. **Log** — Any domain performer opens issue with stage, handoff ID, amount, and system reference.
2. **Triage** — CapEx process owner assigns sender and receiver owners within 1 business day.
3. **Resolve** — Owners remediate per domain SOP; compensating control only if system fix is in flight.
4. **Close** — Receiver confirms downstream status; evidence attached.
5. **Escalate** — SLA breach or material amount routes to CapEx governance board (tactical tier).

### 7.3 Severity

| Severity | Criteria | Escalation |
|---|---|---|
| Low | < threshold; no close impact | Domain owner |
| Medium | SLA breach or repeat coding error | CapEx process owner |
| High | Material misstatement risk or close blocker | CapEx governance board |
| Critical | Potential fraud, duplicate payment, or unauthorized capitalization | Controllership + Audit |

---

## 8) Enterprise CapEx Metrics

Metrics use conformed terms. Domain KPIs remain authoritative for operational dashboards; these are **enterprise funnel metrics** for the tactical tier.

### 8.1 Conformed glossary (minimum)

| Term | Definition |
|---|---|
| **CapEx spend** | Approved capital expenditure posted or committed per capitalization policy |
| **CIP balance** | Project or asset costs capitalized to construction-in-progress before place in service |
| **Place in service (PIS)** | Date an asset is available for intended use; depreciation start trigger |
| **CapEx funnel** | Stage-weighted view of demand → commit → receive → pay → capitalize |
| **Handoff aging** | Business days a transaction waits at H-01 through H-06 beyond SLA |

### 8.2 Metric definitions

| Metric ID | Name | Formula / logic | Grain | Owner | Target (12 mo.) |
|---|---|---|---|---|---|
| CXM-01 | Requisitions with valid project + asset category | Count coded correctly ÷ total CapEx reqs | Requisition | Procurement | ≥ 95% |
| CXM-02 | CapEx invoices on hold | Hold balance ÷ CapEx invoice value | Invoice | AP | < 5% |
| CXM-03 | CIP aging > 90 days | CIP > 90 days ÷ total CIP | Project / asset | Projects / FA | < 10% |
| CXM-04 | FA source posted within SLA | Posted within 5 days ÷ total source lines | Source line | Fixed Assets | ≥ 90% |
| CXM-05 | FA–GL recon exceptions | Material exceptions at close | Period | Fixed Assets | 0 material |
| CXM-06 | Cross-domain issue closure | Closed within SLA ÷ total issues | Issue | CapEx Process Owner | ≥ 85% |
| CXM-07 | Handoff SLA compliance | On-time handoffs ÷ total (H-01–H-06) | Handoff | CapEx Process Owner | ≥ 90% |

### 8.3 Reporting
- **Operational:** Domain native reports per `02-governed-data-and-analytics.md` in each bundle.
- **Tactical:** Monthly CapEx funnel dashboard (stages S1–S6, CXM-01–07).
- **Strategic:** Quarterly committee pack—committed vs. approved budget, CIP trend, category mix.

Custom analytics extensions require [Analytics Intake and Extension Policy](../policies/analytics-intake-and-extension-policy.md) approval.

---

## 9) Analytics, AI, and Agent Boundaries

CapEx AI use inherits constraints from all four domain `03-governed-ai.md` bundles. Additional overlay rules:

1. AI may assist with coding suggestions, exception summarization, and handoff aging alerts—**not** approve capitalization, override holds, or post assets.
2. No bounded agent may span domains without joint readiness review covering H-01 through H-06 blocked actions.
3. Agent inputs limited to approved metadata; no external LLM processing of supplier bank or payment data.

---

## 10) Domain Bundle Traceability

Use domain bundles for detailed policy, SOPs, RACI, controls, glossary, DQ rules, and AI governance.

| Domain | Controlled operations | Analytics | AI |
|---|---|---|---|
| Procurement | [01-controlled-operations.md](../packages/oracle-fusion-procurement-26b/01-controlled-operations.md) | [02-governed-data-and-analytics.md](../packages/oracle-fusion-procurement-26b/02-governed-data-and-analytics.md) | [03-governed-ai.md](../packages/oracle-fusion-procurement-26b/03-governed-ai.md) |
| AP I2P | [01-controlled-operations.md](../packages/oracle-fusion-ap-i2p-26b/01-controlled-operations.md) | [02-governed-data-and-analytics.md](../packages/oracle-fusion-ap-i2p-26b/02-governed-data-and-analytics.md) | [03-governed-ai.md](../packages/oracle-fusion-ap-i2p-26b/03-governed-ai.md) |
| Projects | [01-controlled-operations.md](../packages/oracle-fusion-project-management-26b/01-controlled-operations.md) | [02-governed-data-and-analytics.md](../packages/oracle-fusion-project-management-26b/02-governed-data-and-analytics.md) | [03-governed-ai.md](../packages/oracle-fusion-project-management-26b/03-governed-ai.md) |
| Fixed Assets | [01-controlled-operations.md](../packages/oracle-fusion-fixed-assets-26b/01-controlled-operations.md) | [02-governed-data-and-analytics.md](../packages/oracle-fusion-fixed-assets-26b/02-governed-data-and-analytics.md) | [03-governed-ai.md](../packages/oracle-fusion-fixed-assets-26b/03-governed-ai.md) |
| GL (posting) | [01-controlled-operations.md](../packages/oracle-fusion-general-ledger-26b/01-controlled-operations.md) | [02-governed-data-and-analytics.md](../packages/oracle-fusion-general-ledger-26b/02-governed-data-and-analytics.md) | [03-governed-ai.md](../packages/oracle-fusion-general-ledger-26b/03-governed-ai.md) |

**Mapping rule:** Overlay control CXC-*n* traces to domain control IDs in the §3.3 table. Domain SOP steps are not duplicated here.

---

## 11) Implementation and Adoption

| Phase | Weeks | Actions |
|---|---|---|
| **0 — Mobilize** | 1–4 | Ratify charter; name CapEx process owner; confirm RACI |
| **1 — Handoff design** | 5–10 | Validate H-01–H-06 against tenant segments; workshop per handoff |
| **2 — Control hardening** | 11–20 | Oracle holds, approval rules, FA DQ rules; exception dashboards |
| **3 — Analytics** | 21–28 | CapEx funnel dashboard; glossary publication; training |
| **4 — Sustain** | Ongoing | Monthly board; quarterly release readiness; annual policy review |

**Training:** Process owners and performers receive overlay orientation plus their domain bundle adoption path. Emphasize handoff rejection rights and issue logging.

---

## 12) Document Control

| Field | Value |
|---|---|
| Document title | CapEx Lifecycle Governance Overlay |
| Version | 1.0 Draft |
| Status | Draft reference overlay |
| Owner | CapEx lifecycle process owner (to be assigned) |
| Approval authority | Finance Data Governance Council or CapEx governance board |
| Effective date | To be assigned at approval |
| Review cadence | Annual or upon material process, system, or regulatory change |
| Related architecture | Finance & Accounting Domain Governance Architecture |
| Related MDM framework | CapEx Master Data Management Framework |
| Related domain bundles | Procurement, AP I2P, Projects, Fixed Assets, General Ledger 26B |
