# Governance Package: Oracle Fusion Cloud Procurement 26B – Controlled Operations

> Companion files:
> - `02-governed-data-and-analytics.md`
> - `03-governed-ai.md`
>
> Source anchor: Oracle Help Center, *Oracle Fusion Cloud Procurement 26B Documentation Library* — <https://docs.oracle.com/en/cloud/saas/procurement/26b/index.html>

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Procurement (release **26B**) |
| Modules in scope | Self Service Procurement, Purchasing, Sourcing, Procurement Contracts, Supplier Qualification Management, Supplier Portal, Supplier Model, Spend Classification, Procurement Common (incl. Approvals, Notifications, Configurator) |
| Business function | Source-to-Contract (S2C), Procure-to-Pay (P2P), Supplier Lifecycle Management (SLM) |
| Governance objective | Establish controlled, auditable, and repeatable procurement operations on Oracle Cloud Procurement 26B that satisfy COSO-style internal control objectives across operations, reporting, and compliance |
| Primary audience | CPO, Procurement Process Owners, Controllership, Internal Audit, SOX PMO, IT Procurement Functional Lead |
| Reference pattern | Oracle 26B *Implementing*, *Using*, and *Securing* guides for Procurement |
| Maturity (current → target) | Foundational → Defined (12-month horizon) |
| Tone | ISO 9001:2015 documentation discipline; COSO-style control language; mandatory verbs (shall, must) reserved for policy and control statements |
| Non-goals | Detailed Oracle configuration setups (deferred to functional design docs); AP/invoice controls beyond P2P handoff (owned by AP); upstream demand planning |

---

## 1) Executive Summary

**Context.** Procurement runs on Oracle Fusion Cloud Procurement (release 26B). The platform spans requisitioning, sourcing, contracting, supplier qualification, supplier portal collaboration, and purchasing. Each quarterly Oracle release introduces new functionality (workflows, approval rules, REST resources, security privileges, embedded AI). Without a controlled operating layer over the platform, the organization is exposed to maverick spend, segregation-of-duties (SoD) gaps, contract non-compliance, supplier risk blind spots, and audit findings.

**What this package does.** It defines the **operating, process, and control layer** that wraps Oracle 26B Procurement so the platform behaves as a system of record with predictable, evidenced behavior. It pairs with the data/analytics governance package and the AI governance package to form a complete S2C/P2P governance bundle.

**What is ready.** Module ownership, end-to-end S2P process, SOPs for the seven highest-volume transactions, a 20-control COSO-style matrix mapped to Oracle privileges and approval rules, a RACI keyed to seeded job roles, and an issue/exception workflow.

**What remains.** Quarterly release readiness routine (26C onward), automation of evidence capture (Approvals notifications, Audit Reports, BIP archive), and integration of supplier risk signals into the issue workflow.

**What we ask of leadership.**
1. Endorse the policy addendum in §2.
2. Confirm the RACI in §5 and the named control owners in §6.
3. Approve resourcing for the quarterly release readiness routine (§9).

---

## 2) Policy Addendum – Procurement Controlled Operations on Oracle Cloud

### 2.1 Purpose
Establish mandatory operating, control, and evidence requirements for procurement transactions executed in Oracle Fusion Cloud Procurement.

### 2.2 Scope
- Applies to all buyers, requesters, approvers, contract administrators, category managers, supplier administrators, sourcing leads, and any service account acting on their behalf.
- Applies to all production pods of Oracle Cloud Procurement at release 26B and forward.
- Out of scope: AP invoice processing controls (covered by AP policy), iExpense, asset retirement.

### 2.3 Policy Rules (mandatory)
1. **R-1 Authorized roles only.** No user shall be granted a procurement job role outside the approved role catalog (§5) without a documented access request approved by the role owner.
2. **R-2 Approval enforcement.** All requisitions, purchase orders, change orders, supplier registrations, sourcing awards, and contracts shall route through an Oracle-configured approval rule. Manual workarounds (e.g., direct buyer keying without requisition for catalog-eligible spend) are prohibited except per §2.4.
3. **R-3 Segregation of duties.** A user shall not perform both *Create* and *Approve* on the same procurement document. SoD conflicts must be removed within 30 days of detection or remediated by compensating control with documented approval.
4. **R-4 Supplier onboarding gate.** No purchase order shall be issued to a supplier that has not completed Supplier Registration, Supplier Qualification (where required by category), and Bank Account verification.
5. **R-5 Contract-backed spend.** For categories designated "contract-required," POs must reference an active Oracle Procurement Contract or Blanket Purchase Agreement; off-contract POs require category manager approval.
6. **R-6 Evidence retention.** Approval notifications, change history, audit reports, and supporting documents shall be retained per the records schedule (§8). Deleting or bypassing system-of-record evidence is prohibited.
7. **R-7 Quarterly release readiness.** Each Oracle quarterly release (26B, 26C, ...) shall be assessed for impact on controls, approval rules, security privileges, and AI features before promotion to production.
8. **R-8 Exception governance.** All policy exceptions require documented rationale, compensating control, approver per §2.4, expiration date, and entry in the exception register.

### 2.4 Exception Authority
| Exception type | Approver | Max duration |
|---|---|---|
| Off-contract PO (R-5) | Category Manager | Per PO |
| SoD compensating control (R-3) | Controllership + Procurement Director | 90 days, renewable once |
| Bypass of supplier qualification (R-4) | CPO + Risk Officer | 30 days |
| Skipped release readiness (R-7) | CPO + IT Procurement Lead | One release |

### 2.5 Non-goals
This addendum does not redefine spend authority limits (governed by the Delegation of Authority), nor does it govern AP three-way match controls (AP Policy §X).

### 2.6 Review cadence
Annual, or upon any of: material Oracle release change, control failure, audit finding, organizational restructure, or merger/divestiture.

---

## 3) High-Level Governance Process – Source-to-Pay on Oracle 26B

```
[ Demand ]
    │
    ▼
(P1) Requisitioning ── Self Service Procurement
    │   • Catalog / Non-catalog / Smart Form
    │   • Approval Rules (Procurement Approvals)
    ▼
(P2) Sourcing (conditional) ── Oracle Sourcing
    │   • Negotiation (RFI/RFQ/Auction)
    │   • Award & Award Approval
    ▼
(P3) Contracting (conditional) ── Procurement Contracts
    │   • Contract Authoring / Clause Library
    │   • Contract Approval / Signature
    ▼
(P4) Supplier Qualification (parallel) ── Supplier Qualification Mgmt
    │   • Initiative → Questionnaire → Evaluation
    ▼
(P5) Purchase Order Issuance ── Oracle Purchasing
    │   • PO Creation, Approval, Communication
    │   • Change Orders
    ▼
(P6) Receiving / Service Confirmation ── (Inv/SCM or SSP Confirm Receipt)
    ▼
(P7) Invoice & Match ── (Payables; handoff point)
    ▼
(P8) Close, Cancel, or Final Close ── Oracle Purchasing
```

### 3.1 Process control points (CP)

| ID | Process step | Control point | Oracle enforcement |
|---|---|---|---|
| CP-01 | Requisition submit | Buyer approval per amount/category | Approval Rules (BPM) |
| CP-02 | Sourcing award | Award justification + approval | Negotiation Award Approval |
| CP-03 | Contract approval | Clause deviations require Legal | Contract Approval Rules |
| CP-04 | Supplier qualification | Required for restricted categories | Qualification status flag |
| CP-05 | PO approval | Hierarchy + DOA | Document Approval |
| CP-06 | PO communication | Auto-send to supplier | Communication Method |
| CP-07 | Change order | Reapproval if material change | Change Order Approval Rules |
| CP-08 | Receipt | 3-way match prereq | Receiving |
| CP-09 | Final close | Prevent further invoicing | Manage Orders |

### 3.2 Process owners
- **End-to-end S2P owner:** CPO
- **P1 / P5 / P8 owner:** Procurement Operations Mgr
- **P2 owner:** Strategic Sourcing Lead
- **P3 owner:** Contracts Manager
- **P4 owner:** Supplier Risk & Qualification Lead

---

## 4) Standard Operating Procedures (SOPs)

> Each SOP follows: Objective · Scope · Roles · Prerequisites · Steps · Evidence · Exceptions. SOPs are referenced by ID across the control matrix in §6.

### SOP-01: Create and Approve Non-Catalog Requisition
- **Objective:** Submit a requisition that is auditable, correctly costed, and routed through the right approver hierarchy.
- **Scope:** Self Service Procurement non-catalog requests (smart forms and free-text).
- **Roles:** Requester, Manager Approver, Buyer.
- **Prerequisites:** Active employee record; default expense account assigned; cost center owner identified.
- **Steps:**
  1. Open *Purchase Requisitions* → *More Tasks* → *Enter Requisition Line*.
  2. Select Smart Form (preferred) or *Non-Catalog Request* (justification required).
  3. Complete Item Description, Category, UOM, Quantity, Unit Price, Need-by-Date, Supplier (if known), Charge Account.
  4. Attach justification, quote, and supporting documents.
  5. Submit. The system routes per Approval Rules.
  6. Monitor *Manage Requisitions* until status = *Approved* and *Order Created*.
- **Evidence:** Requisition number, Approval History (notifications archive), attachments.
- **Exceptions:** Emergency PO process per Procurement Director approval; document under exception register.

### SOP-02: Process a Sourcing Negotiation Award
- **Objective:** Run an Oracle Sourcing negotiation and award to qualified supplier(s) with documented rationale.
- **Roles:** Category Manager, Sourcing Analyst, Award Approver, Legal (if redlines).
- **Prerequisites:** Approved sourcing strategy; bidder list with qualification status; scoring criteria pre-defined.
- **Steps:**
  1. Create negotiation (*Manage Negotiations* → *Create Negotiation*) using approved template.
  2. Configure header, lines, requirements (scoring), and invite suppliers.
  3. Publish; monitor Q&A; close negotiation per schedule.
  4. Analyze responses using *Analyze*; complete scoring.
  5. Generate *Award Decision* with comparison and rationale.
  6. Submit for Award Approval per rule (amount + category).
  7. On approval, *Create Purchasing Document* (BPA or PO).
- **Evidence:** Negotiation document, scoring sheets, Q&A log, award memo, approval history.
- **Exceptions:** Single-source justification template required if only one bid; CPO approval.

### SOP-03: Author and Approve a Procurement Contract
- **Objective:** Author a contract using the approved Clause Library and obtain authorized signatures.
- **Roles:** Contract Administrator, Legal Reviewer, Contract Approver, Supplier signatory.
- **Steps:**
  1. *Contracts* → *Create Contract* using approved template.
  2. Populate parties, term, deliverables, lines, payment terms.
  3. Author terms — use Clause Library; record any deviations.
  4. Send to *Internal Approval* — Legal routes if deviations present.
  5. Send for *Signature* (DocuSign integration where enabled).
  6. *Activate* contract on full signature receipt.
- **Evidence:** Contract document, deviation report, approval history, executed PDF.

### SOP-04: Onboard and Qualify a Supplier
- **Objective:** Register, qualify, and activate a supplier for use in transactions.
- **Roles:** Requester (sponsor), Supplier Administrator, Supplier Risk Lead, Tax / AP for bank verification.
- **Steps:**
  1. Sponsor submits *Supplier Registration Request* (internal) or supplier self-registers via *Supplier Portal*.
  2. Supplier Administrator reviews registration, validates business identifiers, tax IDs, addresses.
  3. Launch *Qualification Initiative* matching category requirements (financial, ESG, cyber, diversity, conflict minerals as applicable).
  4. Supplier completes Questionnaire; Evaluator scores responses.
  5. Outcome posted to Supplier profile (Qualified / Conditionally Qualified / Not Qualified).
  6. Bank account independently verified per AP/Treasury procedure before first payment.
- **Evidence:** Registration request, qualification responses, evaluator notes, qualification certificate, bank verification record.

### SOP-05: Issue and Approve a Purchase Order
- **Objective:** Convert an approved requisition into an issued PO with the correct supplier site, terms, and accounting.
- **Roles:** Buyer, PO Approver per DOA, Procurement Operations.
- **Steps:**
  1. *Process Requisitions* → review demand workbench; consolidate where appropriate.
  2. *Create Order* (or auto-create where enabled).
  3. Validate supplier site, freight, payment terms, FOB, ship-to, distributions.
  4. Apply BPA reference if applicable.
  5. Submit for approval per rule.
  6. On approval, *Communicate* PO (email/portal/B2B).
- **Evidence:** PO PDF, approval history, communication log.

### SOP-06: Process a Purchase Order Change Order
- **Objective:** Manage PO modifications with reapproval where the change is material.
- **Roles:** Buyer, Requester (for descriptive changes), PO Approver.
- **Steps:**
  1. Identify change driver (price, quantity, schedule, supplier site, descriptive).
  2. Open *Edit Order*; describe reason in *Change Order Description*.
  3. Capture revised lines/distributions; system computes change order revision.
  4. Submit. Reapproval triggers based on *Change Order Approval Rules* (e.g., amount delta > 10% or > $X).
  5. Communicate revised PO upon approval.
- **Evidence:** Revision history, reason text, approval history.

### SOP-07: Final Close a Purchase Order
- **Objective:** Prevent further activity on a completed or canceled PO and release commitments.
- **Roles:** Buyer, Procurement Operations.
- **Steps:**
  1. Confirm receipts and invoices reconciled (or canceled).
  2. *Manage Orders* → select PO → *Final Close*.
  3. Document reason if closing prior to full receipt/invoice.
  4. Verify commitment is released in GL (per Finance procedure).
- **Evidence:** PO status = Finally Closed; close reason text.

---

## 5) RACI – Seeded Oracle Job Roles + Business Roles

> R = Responsible · A = Accountable · C = Consulted · I = Informed
> Job role names reflect Oracle seeded names where applicable.

| Activity \ Role | Requester | Procurement Preparer | Buyer | Category Manager | Contracts Admin | Supplier Admin | Supplier Risk Lead | Procurement Operations Mgr | CPO | Controllership | Internal Audit | IT Procurement Lead |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Submit requisition | R | C | I | I | – | – | – | I | A | – | – | – |
| Approve requisition (per DOA) | – | – | C | C | – | – | – | R | A | – | – | – |
| Run negotiation | I | – | R | A | C | – | C | C | I | – | – | – |
| Award approval | I | – | C | R | C | – | I | C | A | C | I | – |
| Author contract | I | – | C | C | R | – | – | C | A | C | – | – |
| Approve contract | I | – | – | C | R | – | – | C | A | C | – | – |
| Supplier registration | C | – | I | C | – | R | C | A | I | – | – | – |
| Supplier qualification | I | – | – | C | – | C | R | A | I | – | – | – |
| Issue PO | I | C | R | C | – | – | – | A | I | – | – | – |
| PO approval | I | – | C | C | – | – | – | R | A | C | I | – |
| Change order | I | C | R | C | C | – | – | A | I | – | – | – |
| Final close | I | – | R | – | – | – | – | A | I | C | – | – |
| Role/privilege grant | – | – | – | – | – | – | – | C | A | C | I | R |
| Quarterly release readiness | – | – | – | C | C | C | C | R | A | C | I | R |

---

## 6) Internal Control Matrix (COSO-style)

| # | Control | Risk addressed | Type | Owner | Performer | Reviewer | Frequency | Oracle enforcement | Evidence | SOP |
|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | Role assignment requires approved access request | Excess privilege | Preventive (IT-dep) | IT Procurement Lead | Security Admin | Procurement Ops Mgr | Per request | *Manage Users*, Role Provisioning Rules | Access request ticket, role assignment log | – |
| C-02 | SoD review of procurement job roles | Fraud, error | Detective | Controllership | Internal Audit / RM | Procurement Ops Mgr | Quarterly | OAC/OARM SoD report or 3rd-party | SoD report, remediation memo | – |
| C-03 | Requisition approval enforced | Unauthorized spend | Preventive (auto) | Procurement Ops Mgr | System | Buyer | Per txn | Approval Rules (BPM) | Approval History | SOP-01 |
| C-04 | Off-contract PO requires Category Mgr approval | Maverick spend | Preventive | Category Mgr | Buyer | Procurement Ops Mgr | Per txn | Approval rule on contract reference flag | Approval History, exception note | SOP-05 |
| C-05 | Three-way match before invoice payment (handoff) | Payment error | Preventive (auto) | AP Mgr | System | Controllership | Per invoice | Receipt + Match controls | Match exceptions report | – |
| C-06 | Supplier qualification before PO issuance | Risk supplier use | Preventive | Supplier Risk Lead | Supplier Admin | Procurement Ops Mgr | Per supplier | Qualification status check | Qualification record | SOP-04 |
| C-07 | Bank account independent verification | Vendor master fraud | Preventive | Treasury | AP | Controllership | Per change | *Supplier Bank Account* approval flow | Verification evidence | SOP-04 |
| C-08 | Negotiation award memo + approval | Bid manipulation | Detective | Category Mgr | Sourcing Analyst | CPO (over threshold) | Per award | Award Approval | Award memo, approval history | SOP-02 |
| C-09 | Clause deviation review by Legal | Contract risk | Preventive | Legal | Contract Admin | Contracts Mgr | Per deviation | Contract Approval Rules | Deviation report | SOP-03 |
| C-10 | PO change order reapproval > threshold | Approval avoidance | Preventive (auto) | Procurement Ops Mgr | System | Buyer | Per CO | Change Order Approval Rules | Revision history | SOP-06 |
| C-11 | Final close timeliness | Stale commitments | Detective | Procurement Ops Mgr | Buyer | Controllership | Monthly | Aging report (Open POs > N days) | Close log | SOP-07 |
| C-12 | Approval rule change control | Control bypass | Preventive | Procurement Ops Mgr | IT Procurement Lead | Internal Audit | Per change | BPM rule versioning + migration package | Change ticket, before/after extract | – |
| C-13 | Supplier site/payment terms change review | Master data drift | Detective | Supplier Admin | Procurement Ops Mgr | AP | Monthly | *Audit Reports* on Supplier object | Audit report | – |
| C-14 | Privileged access (admin) review | Insider risk | Detective | IT Procurement Lead | Security Admin | Internal Audit | Quarterly | Admin role report | Access review attestation | – |
| C-15 | Emergency / one-time supplier register | Unauthorized payee | Preventive | Procurement Ops Mgr | Supplier Admin | Controllership | Per request | Restricted privilege | Exception register | – |
| C-16 | Spend authority alignment to DOA | Over-authority approval | Preventive (auto) | Procurement Ops Mgr | System | Internal Audit | Per txn | Approval Group + DOA matrix | Approval rule extract | – |
| C-17 | Periodic open requisition cleanup | Stale demand | Detective | Procurement Ops Mgr | Buyer | – | Monthly | *Manage Requisitions* aging | Cleanup log | – |
| C-18 | Contract activation gate | Premature use | Preventive | Contracts Mgr | Contract Admin | – | Per contract | Contract Status workflow | Status history | SOP-03 |
| C-19 | Communication confirmation for PO | Lost order | Detective | Buyer | System | Procurement Ops Mgr | Per PO | Communication log | Log extract | SOP-05 |
| C-20 | Quarterly Oracle release readiness assessment | Inadvertent control change | Directive | CPO | Procurement Ops Mgr + IT | Internal Audit | Quarterly (per release) | Release Readiness package | Readiness memo, regression test results | – |

### 6.1 COSO Coverage Check
- **Control Environment:** Policy addendum §2; CPO accountability; documented RACI.
- **Risk Assessment:** Risk column in §6; SoD review (C-02); release readiness (C-20).
- **Control Activities:** §6 matrix.
- **Information & Communication:** Approval notifications, Supplier Portal, deck (§10), exception register.
- **Monitoring:** Periodic reviews (C-02, C-11, C-13, C-14, C-17); internal audit; KPI scorecard (see `02-governed-data-and-analytics.md` §7).

---

## 7) Issue Management Procedure (Operations Issues)

> Operational issues only. Data-quality issues are handled in `02-governed-data-and-analytics.md` §10. AI-related issues are handled in `03-governed-ai.md` §10.

### 7.1 Severity model

| Severity | Definition (operational) | Initial response | Target resolution |
|---|---|---|---|
| S1 – Critical | Stops PO issuance, payment, or supplier transactions; financial/legal/regulatory exposure | < 1 business hour | < 1 business day |
| S2 – High | Material control failure or workaround required broadly | < 4 business hours | < 5 business days |
| S3 – Medium | Localized impact; workaround exists | < 1 business day | < 15 business days |
| S4 – Low | Inefficiency or minor anomaly | < 3 business days | Next release cycle |

### 7.2 Workflow
1. **Log** in the procurement issue register (single source of truth).
2. **Triage** by Procurement Ops Mgr within initial response window; classify severity, control reference (C-##), SOP reference, and affected modules.
3. **Contain** — disable rule, restrict role, or freeze transactions as needed; document containment.
4. **Investigate root cause** — distinguish configuration, training, process, master data, or release-induced root cause.
5. **Remediate** — implement permanent fix and reapply control; reapprove rule via C-12 where applicable.
6. **Validate closure** — Internal Audit or Controllership signs off for S1/S2; Procurement Ops Mgr for S3/S4.
7. **Feed back** — recurring root causes drive updates to §2 policy, §6 controls, or §4 SOPs.

### 7.3 Exception Register
| Field | Required |
|---|---|
| Exception ID | yes |
| Policy rule waived | yes (e.g., R-5) |
| Rationale | yes |
| Compensating control | yes |
| Approver | yes |
| Effective / expiration date | yes |
| Linked transactions | yes |
| Review outcome | on expiration |

---

## 8) Evidence and Records

| Evidence type | Source / Oracle artifact | Retention | Owner |
|---|---|---|---|
| Approval notifications & history | BPM Approval History, Notifications archive | 7 years | Procurement Ops Mgr |
| Audit Reports (supplier, PO, contract changes) | *Audit Reports* setup task | 7 years | Procurement Ops Mgr |
| Contract executed PDFs | Procurement Contracts repository | Term + 7 years | Contracts Mgr |
| Supplier qualification responses | Supplier Qualification Mgmt | Term + 3 years | Supplier Risk Lead |
| Sourcing negotiation documents | Sourcing | 7 years | Category Mgr |
| Approval rule change tickets | ITSM (e.g., Jira/ServiceNow) | 7 years | IT Procurement Lead |
| SoD review reports | SoD tool | 7 years | Controllership |
| Exception register | Governance shared drive (controlled) | 7 years | Procurement Ops Mgr |
| Release readiness memos | Governance shared drive | 7 years | Procurement Ops Mgr |

Records lifecycle (intake → approve → publish → access → version → retire) is governed by the Finance Documentation Lifecycle standard.

---

## 9) Adoption and Training Notes

- **Audience-specific learning paths:**
  - Requesters: 30-min e-learning on SOP-01 and approval expectations.
  - Buyers: half-day workshop on SOP-05, SOP-06, SOP-07 and control evidence.
  - Category Managers: SOP-02 + negotiation governance.
  - Contracts Admins: SOP-03 + clause library use.
  - Supplier Admins / Risk Lead: SOP-04 + Supplier Portal handling.
  - Approvers: 20-min micro-learning on approval evidence and prohibited delegation.
- **Quarterly release readiness routine** (R-7 / C-20):
  1. Subscribe to *Oracle Cloud Customer Connect* release announcements.
  2. Within 5 business days of *What's New* publication: assess impact on §6 controls.
  3. Run regression test pack in test pod prior to production promotion.
  4. Update SOPs and the deck (§10) where changes affect operations.
  5. Memo to CPO; copy Internal Audit.
- **Communication cadence:**
  - Monthly procurement ops huddle (control KPIs).
  - Quarterly Governance Council (policy, exceptions, audit findings).
  - Annual policy review.

---

## 10) Deck Outline – Procurement Controlled Operations Briefing

1. Why this matters (risk and value)
2. Scope: Oracle 26B modules and S2P process
3. Operating principles (§2 policy in plain language)
4. End-to-end process (§3 diagram)
5. Roles and accountability (§5 RACI summary)
6. The 20-control framework (§6 highlights)
7. Issue and exception flow (§7)
8. Quarterly release readiness routine
9. KPI scorecard (link to data/analytics package)
10. Decision asks: endorse policy, confirm RACI, approve resourcing

---

## 11) Version History

| Version | Date | Author | Change | Approver |
|---|---|---|---|---|
| 0.1 | 2026-05-18 | Procurement Governance Lead | Initial draft for Oracle 26B | – |
| 1.0 | TBD | Procurement Governance Lead | Approved baseline | CPO |
