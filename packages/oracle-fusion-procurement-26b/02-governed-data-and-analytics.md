# Governance Package: Oracle Fusion Cloud Procurement 26B – Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchor: Oracle Help Center, *Oracle Fusion Cloud Procurement 26B Documentation Library* — <https://docs.oracle.com/en/cloud/saas/procurement/26b/index.html>
> Reporting anchors: *Subject Areas for Transactional Business Intelligence in Procurement 26B*; *Tables and Views for Oracle Procurement 26B*; *REST API for Oracle Fusion Cloud Procurement 26B*.

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Procurement (release **26B**) – data and analytics layer |
| Modules contributing data | Self Service Procurement, Purchasing, Sourcing, Procurement Contracts, Supplier Qualification Mgmt, Supplier Portal, Supplier Model, Spend Classification |
| Consumption surfaces | Oracle Transactional Business Intelligence (OTBI) seeded and custom analyses, BI Publisher (BIP) reports, Oracle Analytics Cloud (OAC) with Fusion Analytics Warehouse – Procurement, Procurement REST APIs, BICC PVO extracts |
| Governance objective | Establish trusted, traceable, and well-controlled procurement data and analytics, so that every metric, dashboard, extract, and AI input has a known owner, definition, quality threshold, and access boundary |
| Primary audience | Data Governance Council, CPO, Procurement Analytics Lead, Data Stewards, IT Data Engineering, Security/Privacy, Internal Audit |
| Reference pattern | DAMA-DMBOK aligned governance overlay on Oracle native data and analytics capabilities |
| Maturity (current → target) | Foundational → Defined |
| Tone | Plain-language definitions; precise metric formulas; mandatory verbs only in policy/control statements |
| Non-goals | Re-architecting Oracle data model; replacing Oracle OTBI/OAC with non-Oracle BI; AP invoice data quality (owned by AP governance) |

---

## 1) Executive Summary

**Context.** Procurement data on Oracle Fusion Cloud Procurement is produced by transactional modules and consumed through OTBI subject areas, BI Publisher, Oracle Analytics Cloud / Fusion Analytics Warehouse for Procurement (FAW-PROC), REST APIs, and BICC PVO extracts. Without governance, definitions drift across reports, supplier and item master data degrade, dashboards lose trust, and downstream analytics (including AI in `03-governed-ai.md`) inherit those problems.

**What this package does.** It establishes a DAMA-DMBOK aligned governance layer over the procurement data estate in 26B: an operating framework, a glossary of canonical procurement terms, governed metric definitions with formulas mapped to OTBI subject areas, data quality controls on master and transactional objects, metadata and lineage from source PVOs to consumption surfaces, and a data issue workflow.

**What is ready.** Data domain ownership; 28 canonical glossary terms; 15 governed KPIs with formulas; 12 data quality controls; lineage templates for the top six dashboards; a data issue workflow that ties back to operational controls in `01-controlled-operations.md`.

**What remains.** Automating DQ checks via OAC data flows or BICC validation; integrating Spend Classification confidence into supplier risk dashboards; certifying FAW-PROC enhancements introduced in 26B.

**What we ask of leadership.**
1. Confirm domain ownership and steward assignments (§3).
2. Endorse the canonical metric set (§7) as the single source of truth for procurement KPIs.
3. Fund the DQ automation backlog (§8.4) over the next two quarters.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- Master data: **Supplier**, **Supplier Site**, **Supplier Bank Account**, **Supplier Contact**, **Item / Catalog**, **Category**, **Buying Org / Procurement BU**.
- Transactional data: **Requisition**, **Negotiation**, **Award**, **Contract**, **Purchase Order**, **Change Order**, **Receipt**, **Qualification**.
- Reference data: **UOM**, **Currency**, **Charge Account / GL Segments**, **Approval Group**, **Job Role**.
- Reporting/analytics: OTBI subject areas (Procurement – Purchasing Real Time, Procurement – Requisitions Real Time, Procurement – Sourcing Real Time, Procurement – Contracts Real Time, Procurement – Spend, Procurement – Supplier Qualifications Real Time), BIP reports, FAW-PROC, REST consumers, BICC extracts.

### 2.2 Out of scope
- AP invoice and payment data (handed off to AP governance).
- Project costing, manufacturing, and inventory data (separate governance domains).
- Identity/HR data beyond what is referenced by procurement (e.g., requester, approver).

### 2.3 Objectives
1. Single canonical definition for each procurement KPI.
2. Known and accountable owner / steward for each governed asset.
3. Defined quality thresholds and remediation for master data.
4. Documented lineage from source to consumption.
5. Sensitive data classified, access controlled, and monitored.

---

## 3) Data Governance Operating Framework (DMBOK-aligned)

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **Procurement Data Governance Council** | Approve domain ownership, policies, glossary, KPIs, DQ thresholds, exceptions | CPO (sponsor) + Chief Data Officer (co-chair) | Monthly |
| **Procurement Data Stewards Forum** | Operationalize standards; triage issues; approve glossary updates; certify KPIs | Procurement Analytics Lead | Bi-weekly |
| **Data Quality Tiger Team** | Drive remediation for S1/S2 DQ issues across master data | Supplier MDM Steward | On demand |

### 3.2 Domains, owners, and stewards

| Data domain | Business Owner | Data Steward | Technical Custodian |
|---|---|---|---|
| Supplier (Model, Sites, Bank, Contacts) | Procurement Operations Mgr | Supplier MDM Steward | Oracle Procurement IT Lead |
| Item / Catalog | Category Mgmt Lead | Catalog Steward | Oracle PIM/Procurement IT |
| Category (Purchasing Category, UNSPSC) | Category Mgmt Lead | Taxonomy Steward | Oracle Procurement IT |
| Requisition / PO / Receipt | Procurement Operations Mgr | P2P Steward | Oracle Procurement IT |
| Sourcing (Negotiation, Award) | Strategic Sourcing Lead | Sourcing Steward | Oracle Procurement IT |
| Contracts | Contracts Mgr | Contracts Steward | Oracle Procurement IT |
| Qualification | Supplier Risk Lead | Qualification Steward | Oracle Procurement IT |
| Spend (Classified) | Procurement Analytics Lead | Spend Analytics Steward | OAC / FAW-PROC team |

### 3.3 Decision rights

| Decision | RACI |
|---|---|
| Add / change canonical KPI definition | R: Spend Analytics Steward · A: Procurement Analytics Lead · C: domain stewards, Controllership · I: Council |
| Certify a dashboard as "Gold" | R: Spend Analytics Steward · A: Procurement Analytics Lead · C: business owner · I: Council |
| Add new OTBI custom subject-area role | R: Oracle Procurement IT Lead · A: IT Procurement Lead · C: Procurement Analytics Lead · I: Security |
| Approve DQ threshold exception | R: Domain Steward · A: Council · C: Controllership · I: Internal Audit |
| Approve PII / sensitive data extract | R: Security / Privacy · A: Data Owner · C: Legal · I: Council |

### 3.4 Policy lifecycle
- Draft → Steward review → Council approval → Publish → Annual review.
- Policy / standard wording follows the governance writing style guide; document control follows the Finance Documentation Lifecycle.

---

## 4) Policy Addendum – Procurement Data and Analytics

1. **D-1 Authoritative source.** Oracle Fusion Cloud Procurement is the authoritative source for procurement transactional and master data. Reporting and analytics shall trace to this source.
2. **D-2 Canonical metrics.** Procurement KPIs published to leadership shall use the canonical definitions in §7. Reports using non-canonical formulas shall be labeled "exploratory."
3. **D-3 Glossary.** Terms used in dashboards, KPIs, and AI inputs shall align to the glossary in §6. New terms shall be proposed through the Stewards Forum.
4. **D-4 Master data quality.** Master data shall meet the thresholds in §8. Records failing critical thresholds shall be blocked from new transactions where systemically enforceable.
5. **D-5 Lineage and metadata.** Each Gold dashboard, certified KPI, and downstream extract shall have published lineage and metadata (§9).
6. **D-6 Access control.** Access to procurement data shall follow least privilege; sensitive data (bank, tax ID, contract pricing, evaluation scores) shall be additionally restricted (§11).
7. **D-7 Change control.** Changes to OTBI custom subject areas, BIP report logic, FAW-PROC semantic layer, or REST API consumers shall follow change control with steward sign-off.
8. **D-8 Issue management.** Data issues shall be logged, triaged, and remediated per §10; recurring issues shall feed back into standards and controls.
9. **D-9 AI input fitness.** Data used as input to AI features (catalog matching, supplier recommendations, contract analysis, spend classification, AI assistants) shall meet the same quality thresholds as the corresponding decision support use, and shall be governed per `03-governed-ai.md`.
10. **D-10 Review cadence.** Policy reviewed annually; on material Oracle release change; or after a control failure.

---

## 5) Question-Driven Anchoring

The package is anchored on the questions procurement leadership asks Oracle 26B data to answer. Each governed KPI in §7 maps to at least one of these.

| # | Business question | Decision supported |
|---|---|---|
| Q1 | What is total spend by category, supplier, and business unit? | Sourcing strategy, supplier consolidation |
| Q2 | What share of spend is under contract / on-catalog / on-PO? | Spend leakage remediation |
| Q3 | How long does it take to convert requisition to PO and PO to receipt? | Cycle time improvement |
| Q4 | Which suppliers carry elevated risk (qualification, concentration, performance)? | Risk mitigation |
| Q5 | What savings have been realized from sourcing events? | Sourcing program ROI |
| Q6 | Where are approval bottlenecks and policy bypasses? | Control effectiveness, training |
| Q7 | What is the supplier diversity / ESG profile of our spend? | Compliance / ESG reporting |
| Q8 | Are open commitments aging beyond expectation? | Working capital, GL accuracy |
| Q9 | Is master data fit for use (supplier, item, category)? | Operational readiness, AI readiness |
| Q10 | What contract obligations are expiring or up for renewal? | Contract continuity, renegotiation |

---

## 6) Business Glossary (Procurement Canonical Terms)

> Status legend: A = Approved · P = Proposed · D = Deprecated.
> All terms align to Oracle 26B object semantics in the *Tables and Views* and *Subject Areas* guides.

| Term | Definition | Domain | Owner | Steward | Approved synonyms | Disallowed synonyms | Status |
|---|---|---|---|---|---|---|---|
| Procurement Business Unit | Business unit configured to perform procurement on behalf of one or more requisitioning BUs | Org | Procurement Ops Mgr | P2P Steward | Procurement BU | "Operating Unit" | A |
| Requisitioning BU | BU that originates demand and is the cost-incurring entity | Org | Procurement Ops Mgr | P2P Steward | – | "Sold-To BU" | A |
| Supplier | Legal entity registered in the Oracle Supplier Model with which the org transacts | Supplier | Procurement Ops Mgr | Supplier MDM Steward | Vendor (legacy) | "Payee" | A |
| Supplier Site | Physical or operational location of a supplier used on transactions | Supplier | Procurement Ops Mgr | Supplier MDM Steward | – | "Supplier Address" (when site has more than address) | A |
| Qualified Supplier | Supplier whose most recent qualification outcome for the relevant area is Qualified or Conditionally Qualified and not expired | Supplier | Supplier Risk Lead | Qualification Steward | Approved Supplier | "Active Supplier" | A |
| Item Catalog | Curated set of items available for catalog requisitioning | Item | Category Mgmt Lead | Catalog Steward | Punchout Catalog (subset) | "Item Master" | A |
| Purchasing Category | Procurement-specific category used for sourcing, contracts, and policy | Category | Category Mgmt Lead | Taxonomy Steward | Procurement Category | "GL Category" | A |
| UNSPSC | United Nations Standard Products and Services Code mapped to items/categories | Category | Category Mgmt Lead | Taxonomy Steward | – | "Commodity Code" (ambiguous) | A |
| Requisition | Internal request to procure goods/services | Txn | Procurement Ops Mgr | P2P Steward | Req | "Purchase Request" | A |
| Negotiation | Sourcing event (RFI, RFQ, Auction) created in Oracle Sourcing | Sourcing | Strategic Sourcing Lead | Sourcing Steward | RFx, Event | "Bid" | A |
| Award | Outcome of a negotiation indicating selected supplier(s) and quantities | Sourcing | Strategic Sourcing Lead | Sourcing Steward | – | "Win" | A |
| Procurement Contract | Legal agreement authored in Oracle Procurement Contracts | Contract | Contracts Mgr | Contracts Steward | Agreement | "MSA" (only if contract type) | A |
| Blanket Purchase Agreement (BPA) | Long-term agreement enabling release orders against agreed pricing | Contract | Contracts Mgr | Contracts Steward | BPA | "Blanket PO" | A |
| Purchase Order | Authorized commitment to purchase goods/services from a supplier | Txn | Procurement Ops Mgr | P2P Steward | PO | "Order" (ambiguous w/ Sales) | A |
| Change Order | Reapproved modification to an issued PO | Txn | Procurement Ops Mgr | P2P Steward | CO Revision | "Edit" | A |
| Receipt | Acknowledgement of goods or service delivery | Txn | Procurement Ops Mgr | P2P Steward | – | "ASN" (different) | A |
| Spend | Cumulative monetary value of goods/services procured, measured by approved POs invoiced (preferred) or by invoiced + non-PO | Spend | Procurement Analytics Lead | Spend Analytics Steward | Total Spend | "Cost" (different framing) | A |
| Addressable Spend | Spend that procurement can influence | Spend | Procurement Analytics Lead | Spend Analytics Steward | Influenceable Spend | "Controllable Spend" | A |
| Maverick Spend | Spend made outside the policy-defined buying channel (e.g., off-contract or off-catalog when contract/catalog exists) | Spend | Procurement Analytics Lead | Spend Analytics Steward | Off-Contract Spend | "Rogue Spend" | A |
| Realized Savings | Savings actually achieved against a documented baseline and validated by Finance | Spend | Procurement Analytics Lead | Spend Analytics Steward | Hard Savings | "Negotiated Savings" (different) | A |
| Negotiated Savings | Savings claimed at award time vs baseline, prior to realization | Spend | Strategic Sourcing Lead | Sourcing Steward | Cost Avoidance (subset) | "Realized Savings" | A |
| Cycle Time – Req to PO | Calendar days from requisition submit to PO approval | Performance | Procurement Ops Mgr | P2P Steward | Req-to-Order Cycle Time | "Lead Time" | A |
| Cycle Time – PO to Receipt | Calendar days from PO approval to first receipt | Performance | Procurement Ops Mgr | P2P Steward | – | "Lead Time" | A |
| Open Commitment | Approved, unliquidated PO amount | Spend | Procurement Ops Mgr | P2P Steward | – | "Encumbrance" (similar but accounting) | A |
| Supplier Concentration | Share of spend with the top N suppliers | Risk | Procurement Analytics Lead | Spend Analytics Steward | – | "Vendor Mix" | A |
| Diverse Supplier | Supplier flagged as diverse per the supplier classification standard | Risk | Supplier Risk Lead | Qualification Steward | – | – | A |
| Spend Classification Confidence | Confidence score produced by Oracle Spend Classification when assigning a category | Spend | Procurement Analytics Lead | Spend Analytics Steward | Classification Score | "Match %" | A |
| Vendor | Legacy term | Supplier | – | – | – | – | D → use *Supplier* |

---

## 7) Metric Definitions (Governed KPI Catalog)

> Every KPI is mapped to source OTBI subject area(s), grain, formula, owner, steward, cadence, threshold, and escalation. Mapped to a control point in `01-controlled-operations.md` §6 where applicable.

### KPI-01 — Total Spend
- **Question:** Q1
- **Formula:** Sum of invoiced PO amount in functional currency, plus non-PO spend, within reporting period, by Procurement BU.
- **Grain:** Supplier × Category × Period × BU
- **Source:** OTBI – *Procurement – Spend*; FAW-PROC fact `FACT_PROCUREMENT_SPEND`.
- **Owner / Steward:** Procurement Analytics Lead / Spend Analytics Steward
- **Cadence:** Daily refresh; reported monthly.
- **Threshold / Escalation:** No threshold; variance > 10% vs prior period triggers narrative.

### KPI-02 — Addressable Spend %
- **Question:** Q1, Q2
- **Formula:** Addressable Spend ÷ Total Spend.
- **Grain:** BU × Period
- **Source:** OTBI – *Procurement – Spend* with category exclusion list.
- **Cadence:** Monthly.
- **Threshold:** Target ≥ 75%; below 65% → CPO review.

### KPI-03 — Spend Under Contract %
- **Question:** Q2
- **Formula:** Spend backed by an active Procurement Contract or BPA ÷ Addressable Spend.
- **Grain:** Category × BU × Period
- **Source:** *Procurement – Spend* joined with *Procurement – Contracts Real Time*.
- **Threshold:** ≥ 60% (target 80%); below 60% triggers sourcing plan.

### KPI-04 — On-Catalog Spend %
- **Question:** Q2
- **Formula:** Catalog PO line spend ÷ Addressable Spend in catalog-eligible categories.
- **Source:** *Procurement – Purchasing Real Time*.
- **Threshold:** ≥ 70%.

### KPI-05 — Maverick Spend %
- **Question:** Q2, Q6
- **Formula:** Off-contract or off-catalog spend (where contract/catalog exists) ÷ Addressable Spend.
- **Threshold:** ≤ 5%; > 5% triggers training and Category Mgr review (links to C-04).

### KPI-06 — Requisition Cycle Time (Req-to-PO)
- **Question:** Q3
- **Formula:** Avg calendar days between Req submit and PO approved.
- **Source:** *Procurement – Requisitions Real Time* + *Purchasing Real Time*.
- **Threshold:** ≤ 5 days (catalog ≤ 1 day); > 7 days → Procurement Ops Mgr review.

### KPI-07 — PO Cycle Time (PO-to-Receipt)
- **Formula:** Avg calendar days between PO approved and first receipt.
- **Threshold:** Category-specific; > 30 days for stocked items → escalate to Buyer.

### KPI-08 — Approval Aging
- **Question:** Q6
- **Formula:** Open approval notifications older than threshold by document type.
- **Source:** *Procurement – Procurement Approval Workflow* (OTBI workflow SA).
- **Threshold:** > 3 business days → notify Approver and Procurement Ops Mgr (links to C-03, C-05).

### KPI-09 — Negotiated Savings
- **Question:** Q5
- **Formula:** Σ (Baseline price − Award price) × Awarded quantity in negotiation award.
- **Source:** *Procurement – Sourcing Real Time*.
- **Threshold:** Reported per event; rolled up monthly.

### KPI-10 — Realized Savings
- **Question:** Q5
- **Formula:** Negotiated Savings × % validated by Finance post-realization.
- **Source:** Sourcing + Spend; Finance validation tag.
- **Threshold:** Realization rate ≥ 70% of negotiated.

### KPI-11 — Supplier Concentration (Top 10)
- **Question:** Q4
- **Formula:** Σ Spend of Top-10 suppliers ÷ Total Spend.
- **Threshold:** > 40% → risk review for affected categories.

### KPI-12 — Qualified Supplier Coverage
- **Question:** Q4
- **Formula:** Active suppliers with current qualification ÷ Active suppliers in qualification-required categories.
- **Threshold:** ≥ 95% (links to C-06).

### KPI-13 — Open Commitment Aging
- **Question:** Q8
- **Formula:** Open PO amount aged in buckets (0–30, 31–60, 61–90, > 90 days).
- **Threshold:** > 90-day bucket > 5% of open → final-close campaign (links to C-11).

### KPI-14 — Contract Expiry Pipeline
- **Question:** Q10
- **Formula:** Contracts expiring within 30 / 60 / 90 days by spend tier.
- **Source:** *Procurement – Contracts Real Time*.
- **Threshold:** Any tier-1 contract within 90 days without renewal plan → Contracts Mgr action.

### KPI-15 — Diverse / ESG Supplier Spend %
- **Question:** Q7
- **Formula:** Spend with diverse / ESG-classified suppliers ÷ Addressable Spend.
- **Threshold:** Per ESG commitment; trend reported.

---

## 8) Data Quality Controls

### 8.1 DQ control catalog

| ID | Quality objective | Asset | Validation | Threshold | Escalation | Evidence |
|---|---|---|---|---|---|---|
| DQ-01 | Supplier records have valid tax IDs in registered jurisdictions | Supplier | Format + country rule check via OAC/BICC validation | 100% for new; 99% existing | Supplier MDM Steward → Supplier Risk Lead | DQ run log |
| DQ-02 | Supplier bank accounts independently verified | Supplier Bank Account | Reconcile to verification log | 100% before first payment | Treasury → Controllership | Verification record (links C-07) |
| DQ-03 | Active suppliers have current qualification where required | Supplier × Category | Cross-check qualification expiry | 100% (links C-06) | Supplier Risk Lead | Qualification report |
| DQ-04 | Item master records have UOM, default category, status | Item | Profile completeness check | ≥ 98% | Catalog Steward | Profile report |
| DQ-05 | Purchasing categories mapped to UNSPSC | Category | Mapping table coverage | 100% | Taxonomy Steward | Mapping extract |
| DQ-06 | PO charge accounts pass GL validation | PO | GL combo edit | 100% (system) | Procurement Ops Mgr | Failed-validation log |
| DQ-07 | Requisitions have valid requester + approver hierarchy | Requisition | HR hierarchy lookup | 100% | P2P Steward | Failure log |
| DQ-08 | Sourcing award price ≤ approved budget (where applicable) | Award | Cross-check budget tag | 100% with exception | Strategic Sourcing Lead | Exception register |
| DQ-09 | Contract pricing matches BPA pricing | Contract / BPA | Variance scan | Variance ≤ 1% | Contracts Steward | Variance report |
| DQ-10 | No duplicate suppliers (fuzzy match on name + tax ID + address) | Supplier | Periodic match run | < 0.5% duplicates | Supplier MDM Steward | Match report |
| DQ-11 | Spend classification confidence above floor for AI input | Spend (Classified) | Confidence score histogram | ≥ 80% confidence on ≥ 90% of transactions | Spend Analytics Steward | OAC dashboard |
| DQ-12 | OTBI / FAW-PROC refresh completes within SLA | Reporting | Job run monitoring | 99% on-time | Oracle Procurement IT Lead | Job log |

### 8.2 Control rules
- Every policy requirement in §4 maps to at least one DQ control or governance action.
- Every DQ control produces evidence and has a named escalation owner.
- Failures move to §10 issue workflow.

### 8.3 Implementation channels
- Native Oracle: BPM rule validations, Approval Rules, *Manage Suppliers* duplicate detection, OTBI alerts.
- OAC / FAW-PROC: data flows for scheduled DQ checks and trends.
- BICC PVO extracts → external DQ tool where customer-grade tooling exists.

### 8.4 Automation backlog (priority order)
1. DQ-01, DQ-10 — automated supplier duplicate / tax-ID validation.
2. DQ-11 — Spend Classification confidence dashboard.
3. DQ-12 — automated refresh SLA monitoring.
4. DQ-07 — requester / approver hierarchy validation.

---

## 9) Metadata and Lineage

### 9.1 Asset register (template)

| Asset | Type | Owner | Steward | Source PVO / Subject Area | Refresh | Sensitivity | Consumers |
|---|---|---|---|---|---|---|---|
| Spend by Category dashboard | OAC dashboard | Procurement Analytics Lead | Spend Analytics Steward | FAW-PROC Spend; *Procurement – Spend* | Daily | Internal | CPO, Category Mgrs |
| Maverick Spend report | BIP | Procurement Analytics Lead | Spend Analytics Steward | *Procurement – Spend*, *Procurement – Contracts Real Time* | Weekly | Internal | Procurement Ops Mgr |
| Supplier Risk dashboard | OAC dashboard | Supplier Risk Lead | Qualification Steward | *Procurement – Supplier Qualifications Real Time* | Daily | Restricted (scores) | Risk, CPO |
| Sourcing Pipeline & Savings | OTBI | Strategic Sourcing Lead | Sourcing Steward | *Procurement – Sourcing Real Time* | Daily | Internal | Sourcing, CPO |
| Contract Expiry watchlist | OTBI | Contracts Mgr | Contracts Steward | *Procurement – Contracts Real Time* | Daily | Internal | Contracts, Legal |
| Approval Aging | OTBI | Procurement Ops Mgr | P2P Steward | *Procurement Approval Workflow* | Hourly | Internal | Ops, Approvers |

### 9.2 Lineage example — KPI-05 Maverick Spend %

```
Source PVO / Table:
  PoHeadersAllPEO, PoLinesAllPEO, ApInvoicesAllPEO (handoff), OknContractsAllB
        │
        ▼
OTBI Subject Areas:
  Procurement – Spend  ⨝  Procurement – Contracts Real Time
        │
        ▼
Semantic layer (FAW-PROC or custom BIP dataset):
  FACT_PROCUREMENT_SPEND  ⨝  DIM_CONTRACT  ⨝  DIM_CATEGORY (catalog-eligible flag)
        │
        ▼
Metric calculation:
  Maverick Spend % = Σ(spend where contract_flag = N AND catalog_eligible = Y AND contract_exists = Y)
                   / Σ(addressable spend)
        │
        ▼
Consumption:
  OAC dashboard "Maverick Spend"  →  Monthly CPO scorecard slide
```

### 9.3 Metadata fields required for Gold-certified assets
- Business name, technical name, owner, steward, sensitivity, refresh cadence, source, KPI references, glossary references, change history, last certification date, next review date.

---

## 10) Data Issue Management

### 10.1 Severity model

| Severity | Definition (data) | Initial response | Target resolution |
|---|---|---|---|
| S1 | Authoritative KPI wrong; leadership decision at risk; spend, supplier, or contract record blocks operations | < 2 hours | < 1 day |
| S2 | Material DQ failure across multiple records; trend distortion | < 1 day | < 5 days |
| S3 | Localized DQ issue; workaround available | < 3 days | < 15 days |
| S4 | Definition or labeling inconsistency without operational impact | < 5 days | Next release |

### 10.2 Workflow
1. Detect (DQ control, user report, audit finding).
2. Log in the data issue register with asset, KPI, DQ control reference, suspected root cause.
3. Triage at Stewards Forum (or immediate for S1).
4. Contain (e.g., flag dashboard, freeze extract, mark KPI as "under review").
5. Root cause classification: data entry, configuration, transformation, source change, definition drift, Oracle release behavior change, integration failure.
6. Remediate at the right layer — source fix is preferred over patching downstream.
7. Validate fix, monitor, close with evidence.
8. Recurring issues feed back into glossary, KPI definitions, DQ thresholds, or policy.

### 10.3 Linkage to operational issues
Data issues caused by control failures (e.g., supplier duplicates from C-13 weaknesses, missing qualification per C-06) shall be cross-referenced with the operational issue register in `01-controlled-operations.md` §7 so root cause is resolved once, not twice.

---

## 11) Sensitive Data and Access Controls

> Built on the data security/privacy control lens. Procurement-specific assets requiring elevated controls are listed below.

| Sensitive asset | Classification | Required controls | Owner |
|---|---|---|---|
| Supplier Bank Account, IBAN | Restricted | Least privilege; bank-account-specific privilege; verification workflow; access review quarterly | Supplier MDM Steward |
| Supplier Tax ID (TIN/VAT) | Restricted | Masked in non-prod; restricted reporting; field-level audit | Supplier MDM Steward |
| Negotiation responses (supplier-confidential) | Restricted | Sourcing role gating; no extract outside Sourcing team during open negotiation | Strategic Sourcing Lead |
| Contract pricing | Restricted | Contract role gating; redact for unauthorized roles in dashboards | Contracts Mgr |
| Supplier qualification scores | Restricted | Scoring detail visible only to Risk and Procurement leadership | Supplier Risk Lead |
| Supplier contact PII | Confidential / PII | Minimization; purpose-limited; access review | Supplier MDM Steward |
| Spend by employee (when applicable) | Confidential | Aggregated reporting only beyond manager | Procurement Analytics Lead |
| BICC PVO extracts to external systems | Restricted | Approved interface only; encrypted transfer; access review; extract log | IT Procurement Lead |
| REST API consumers | Restricted | OAuth scope minimization; service account inventory; quarterly review | IT Procurement Lead |

Access requests follow the IT procurement role-grant workflow (linked to C-01 in `01-controlled-operations.md`).

---

## 12) Adoption and Training Notes

- **Stewards onboarding:** 2-hour session per steward covering glossary, KPI catalog, DQ controls, issue workflow.
- **Analyst certification:** "Gold dashboard author" certification with a checklist (lineage published, KPI references, DQ status, security tags).
- **Consumer enablement:** quick reference card with the KPI catalog and how to interpret threshold flags.
- **Release readiness:**
  - Subscribe to Oracle 26B *What's New* for Procurement, OTBI, FAW-PROC, BIP, REST.
  - Each release: confirm subject-area changes, new attributes, deprecated columns; update lineage and KPI mappings.
- **Cadence:**
  - Bi-weekly Stewards Forum.
  - Monthly Council.
  - Quarterly KPI scorecard review with CPO.

---

## 13) Deck Outline – Procurement Data and Analytics Briefing

1. Why governed data and analytics
2. Scope: Oracle 26B data estate and consumption surfaces
3. Operating framework and decision rights (§3)
4. Policy at a glance (§4)
5. Glossary and KPI catalog (§§6–7)
6. Master data quality status and remediation (§8)
7. Lineage in practice (one Gold dashboard walkthrough)
8. Sensitive data and access controls (§11)
9. Issue trends and themes (§10)
10. Decision asks: confirm domains, endorse canonical KPIs, fund DQ automation

---

## 14) Version History

| Version | Date | Author | Change | Approver |
|---|---|---|---|---|
| 0.1 | 2026-05-18 | Procurement Analytics Lead | Initial draft for Oracle 26B | – |
| 1.0 | TBD | Procurement Analytics Lead | Approved baseline | CPO + CDO |
