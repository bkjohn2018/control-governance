# Approval Rule (AMX) Configuration Standard and Runbook — Oracle Fusion Cloud Procurement 26B

> Companion files (governance layer above this standard):
> - `01-controlled-operations.md` — Controls C-03, C-04, C-06, C-12, C-16, C-20; SOP-01–SOP-07
> - `02-governed-data-and-analytics.md` — KPI-08 Approval Aging; data quality DQ-07
> - `03-governed-ai.md` — Control CC-1 (release readiness for AI features)
>
> Source anchor: Oracle Help Center, *Oracle Fusion Cloud Procurement 26B Documentation Library* — <https://docs.oracle.com/en/cloud/saas/procurement/26b/index.html>
> Oracle reference content: *Implementing Procurement 26B* (approval setup chapters), *Using Procurement 26B* (approvals and notifications), *Oracle Fusion Cloud Procurement: Transaction Console Guide*, *Oracle BPM / AMX setup guidance*.

---

## 0) Document control

| Item | Value |
|---|---|
| Audience (primary) | Oracle Procurement system administrators / functional admins; IT Procurement Lead's team |
| Audience (read-only) | Internal Audit, Procurement Ops Mgr, Controllership, Procurement Process Owners |
| Document type | Standard + Runbook (with embedded SOPs) — sits at the standard/procedure layer beneath the controlled-operations policy |
| Policy parent | `01-controlled-operations.md` §2 (Procurement Controlled Operations on Oracle Cloud) |
| Owner | IT Procurement Lead |
| Accountable | Procurement Operations Mgr |
| Reviewer | Internal Audit |
| Approver (initial baseline) | CPO + Controllership + IT Procurement Lead |
| Review cadence | Annual + every Oracle quarterly release that materially affects AMX or any procurement approval setup task |
| Document lifecycle | Per Finance Documentation Lifecycle (intake, review, approval, publish, version, retain, retire) |

---

## 1) Purpose, Scope, and Non-Goals

### 1.1 Purpose
Establish the mandatory design rules, configuration patterns, naming conventions, change controls, testing expectations, and operational procedures that Oracle Procurement system administrators **shall** follow when authoring, modifying, retiring, promoting, monitoring, or investigating any approval rule in Oracle Fusion Cloud Procurement 26B.

### 1.2 Scope
This standard governs every approval rule set configured under the Oracle Procurement approval setup tasks, including:

- *Manage Requisition Approvals* (and related: Manage Requisition Approval Reassignment Rules)
- *Manage Purchasing Document Approvals* (POs, Blanket Purchase Agreements, Contract Purchase Agreements)
- *Manage Change Order Approvals*
- *Manage Negotiation Approvals* (sourcing event creation, award)
- *Manage Contract Approvals* (procurement contracts and clause deviation)
- *Manage Supplier Registration Approvals*
- *Manage Supplier Profile Change Approvals*
- *Manage Approval Groups for Procurement Documents*
- *Manage Procurement Agents* (action-level authorization)
- *Manage Approval Limits* (where exposed) and *Manage Job-Level Hierarchy* references

It also governs:
- Reassignment / vacation rules that affect any of the above.
- Configuration migration packages that move approval rules between pods.
- Use of the Transaction Console for monitoring, reassignment, withdrawal, and inspection.

### 1.3 Non-goals
- Defining the corporate Delegation of Authority (DOA). The DOA is an organizational artifact owned by Finance/Legal/Board; this standard governs how Oracle Procurement is configured to enforce it.
- Defining the controls themselves. The control objectives sit in `01-controlled-operations.md` §6.
- AI feature configuration (see `03-governed-ai.md`).
- HR job, position, or supervisor hierarchy data quality (separate HCM governance), except where those data quality issues degrade AMX behavior.

---

## 2) Source Anchors

This standard inherits from and traces to:

- **`01-controlled-operations.md`**
  - Policy rules R-2 (Approval enforcement), R-3 (Segregation of duties), R-7 (Quarterly release readiness), R-8 (Exception governance).
  - Controls C-03, C-04, C-06, C-12, C-16, C-20.
  - SOP-01 through SOP-07 (each depends on AMX runtime behavior).
- **`02-governed-data-and-analytics.md`**
  - KPI-08 (Approval Aging) — the operational metric this standard's monitoring SOP feeds.
  - DQ-07 (Requisitions have valid requester + approver hierarchy).
- **`03-governed-ai.md`**
  - CC-1 (quarterly release readiness for AI features) — paired with SOP-AR-07 here.
- **Finance Documentation Lifecycle standard** — for the lifecycle of this document.
- **Oracle 26B Procurement documentation** — for the setup tasks, attributes, list builders, and Transaction Console capabilities referenced throughout.

---

## 3) AMX Glossary (Controlled Vocabulary)

> Use these terms consistently in all rule names, descriptions, change tickets, and reviews. Synonyms in italics are tolerated in conversation but not in rule metadata.

| Term | Definition (Procurement 26B context) | Disallowed synonyms |
|---|---|---|
| **AMX (Approvals Management Extensions)** | Oracle's declarative approval framework built on Oracle BPM, invoked by Procurement document workflows | "BPM" (broader); "Workflow" (ambiguous) |
| **Approval rule set** | The complete collection of stages, rules, and participants configured under one approval setup task (e.g., the full Requisition Approval configuration) | "Workflow" |
| **Stage** | An ordered phase of approval within a rule set. Stages run serial or parallel | "Step" (used for SOP steps only) |
| **Rule** | A single if-then statement, scoped to a stage, that determines whether a participant is invoked for a given document and how the list is constructed | "Routing" |
| **Participant** | A node within a stage that names the approver(s) for that stage when its rule fires | "Approver" (use only for the human) |
| **Participant type** | `Single`, `Serial`, `Parallel`, `FYI` | – |
| **List Builder** | The algorithm AMX uses to construct the approver list for a participant | "Routing method" |
| **List Builder kinds** | Supervisory, Job Level, Position, Approval Group, Single Approver, Resource | – |
| **Approval Group** | A reusable named list of approvers with voting and sequencing rules | "Distribution list" |
| **Approval Limit** | Authority threshold attached to a job, position, or person; consumed as a stop condition by hierarchy-based list builders | "DOA limit" (use only in policy text) |
| **Stop Condition / Top Worker** | The condition that halts escalation up a hierarchy | "Cap" |
| **Routing Restriction** | Constraint on who may appear in a list (e.g., exclude preparer) | "Filter" |
| **Procurement Agent** | A configured buyer with action-level rights (Create POs, Manage Negotiations, etc.); separate from amount authorization | "Buyer role" |
| **Bypass approval** | A configured pattern that auto-approves documents meeting narrow criteria | "Auto-approve" (ambiguous) |
| **Transaction Console** | The Oracle UI used to monitor, reassign, withdraw, or inspect in-flight approval transactions | "Worklist" |
| **Vacation / Reassignment rule** | User- or admin-configured rule that redirects approvals when an approver is unavailable | "Out-of-office" |
| **DOA-to-configuration mapping** | The traceability artifact that maps each DOA policy row to its enforcing Oracle objects | – |
| **Rule Inventory** | The catalog of every active rule across all in-scope rule sets, with metadata required by this standard (§5) | – |
| **Risk attribute** | A document attribute that drives risk-based routing (amount, category, on/off-contract flag, supplier risk tier, regulated flag, etc.) | – |

---

## 4) Configuration Standard (Mandatory Design Rules)

> Mandatory verbs in this section. "Shall" and "must" carry policy weight; "should" is strongly recommended and requires documented rationale to deviate.

### 4.1 Three-layer separation of concerns

Every rule shall be designed so that the **risk model**, the **control model**, and the **role model** are independently maintainable.

| Layer | What lives here | Where it is configured |
|---|---|---|
| Risk model | Document attributes used in rule conditions (amount, category, on/off-contract, supplier qualification status, regulated flag, item type, charge segment, BU, project, risk tier, etc.) | Rule condition expression |
| Control model | Which stages and participants must fire, and in what order, given the risk profile | Stage and Rule structure |
| Role model | Who currently performs each control | HCM (job, position, supervisor), Approval Groups, Procurement Agents |

**S-1.** Rules **shall not** name individual persons in conditions or list builders, except for documented sole-incumbent roles (e.g., CFO, CPO) where the named person is acting in that role. Any person-named rule shall carry a written exception and an annual reaffirmation.

**S-2.** Approval Limits **shall** be assigned at the job or position level by default. Person-level limits shall be the exception, documented, and reaffirmed annually.

**S-3.** Role assignment changes (promotion, transfer, exit) **shall** be sourced from HCM data, not from rule changes.

### 4.2 Naming conventions

All artifact names follow these patterns. Names are stable identifiers used in evidence trails and the Rule Inventory.

| Artifact | Pattern | Example |
|---|---|---|
| Stage | `<DOCTYPE>_S<n>_<ShortName>` | `REQ_S1_ManagerApproval` |
| Rule | `<DOCTYPE>_<ControlRef>_<ConditionShortName>` | `REQ_C04_NonCatalogBuyerReview` |
| Approval Group | `<Scope>_<Function>_<Variant>` | `GLOBAL_CategoryCouncil_Restricted` |
| Procurement Agent grouping | `<BU>_<RoleClass>` | `US_PROC_StrategicBuyers` |
| Approval Limit set | `<RoleClass>_<Region>_<Currency>` | `Director_NA_USD` |
| Reassignment / Vacation rule | `VR_<UserId>_<StartDate>_<EndDate>` | `VR_jsmith_2026-06-01_2026-06-14` |

**S-4.** Names **shall** include the linked control reference (e.g., `C04`) for every rule whose existence is justified by a control objective in `01-controlled-operations.md` §6.

**S-5.** Names **shall not** include personal names, project codenames, or temporary references that lose meaning over time.

### 4.3 Acceptance criteria for any new or modified rule

A new or modified rule shall not be promoted to production unless **all** of the following are true. The change ticket (§7) is the evidence pack.

1. **Linked control.** The rule has a documented purpose and is linked to a control objective in `01-controlled-operations.md` §6, an SOP step, or a DOA row. Rules that exist for "convenience" without a linked control objective shall not be approved.
2. **Risk-attribute conditions only.** The rule's conditions use document attributes (amount, category, etc.), not user identity.
3. **List builder selection justified.** The chosen list builder (Supervisory, Job Level, Position, Approval Group, Single Approver, Resource) is documented with rationale, including a written reason any non-hierarchy builder was selected.
4. **Stop condition specified.** Hierarchy-based list builders specify a stop condition that is testable (e.g., approval limit ≥ document amount), not unbounded.
5. **Routing restrictions applied.** Preparer / requester exclusion is configured wherever R-3 (no self-approval) applies.
6. **Mutual exclusivity considered.** Where overlapping conditions could trigger duplicate participants, the rules document why duplication is intended or how the overlap is prevented.
7. **Test pack passed.** Scenario, edge-case, and negative tests (§8) have been executed in a non-production pod with documented results.
8. **DOA alignment confirmed.** If the rule implements a DOA threshold, the DOA-to-configuration mapping (SOP-AR-06) has been updated.
9. **Reviewer signoff.** Procurement Ops Mgr (control owner) and IT Procurement Lead (configuration custodian) have signed off; Internal Audit informed for material changes.
10. **Promotion plan documented.** Effective date, in-flight transaction handling, rollback approach, and post-promotion validation are written.

### 4.4 Prohibited patterns

The following design patterns are prohibited and shall be rejected at change review.

| Prohibited pattern | Why | Required alternative |
|---|---|---|
| Person named in a rule condition or list builder (except sole-incumbent roles) | Drift on org change; opacity in audit | Use job or position |
| Person-level approval limit as the default | Drift on promotion / exit | Job- or position-level limit |
| Static Approval Group containing the requester / preparer | Self-approval / SoD breach (R-3) | Dynamic group with preparer exclusion, plus Routing Restriction |
| Bypass-approval configuration without a documented scope (category, max amount, supplier qualification status) | Uncontrolled auto-approval | Bypass scoped tightly + monthly review + change ticket per change |
| Hierarchy list builder with no stop condition | Infinite or arbitrary escalation | Stop condition tied to approval limit, job level, or position level |
| Catch-all rule with `Amount > 0` and no other condition (where a tier-based design exists) | Defeats risk-based routing | Tier-based rule set with mutually exclusive amount bands |
| Rule whose name does not reference a linked control or SOP | Untraceable rule; audit risk | Rename to include control reference (§4.2) or retire the rule |
| Approval Group with no named owner | No one to attest membership | Each Approval Group has a single named owner (job/position) |
| Vacation / Reassignment rule with no return date | Permanent silent reroute | Mandatory end date; auto-expire enforced |
| Rule changes promoted directly to production without test-pod evidence | Bypass of C-12 | Promotion only via documented migration package |

### 4.5 Procurement Agent setup (action-level authorization)

Procurement Agents control **what actions** a buyer can perform; they do not control **amount authority**. Both layers shall be configured deliberately.

**S-6.** Procurement Agent action grants (e.g., Manage Purchasing Documents, Manage Negotiations, Manage Suppliers, View Other Agents' Documents) **shall** be assigned by job class, not by name, except for documented exceptions.

**S-7.** A Procurement Agent shall be inactivated within 1 business day of a buyer's role change or exit. SOP-AR-08 governs the procedure.

**S-8.** "View Other Agents' Documents" grants shall be reviewed quarterly and revoked where the business purpose has lapsed.

### 4.6 Approval Group hygiene

**S-9.** Each Approval Group shall have: a single named owner (job/position), a documented purpose, a defined membership rule (named members, by job, by position, or by dynamic query), a voting rule (any-one, all, sequential), and a last-reviewed date.

**S-10.** Approval Groups shall be reviewed at least quarterly to remove terminated employees, role changers, and stale members. SOP-AR-08 governs the review.

### 4.7 Restrictions on AI integration with AMX

This standard does not enable any AI feature to alter approval routing or authority. AI may:

- Populate document attributes (e.g., risk tier, anomaly score) that AMX rules then read.
- Generate a reviewer briefing or rationale text attached to the document.

AI shall **not**:

- Add, remove, or bypass approvers at runtime.
- Override a stop condition.
- Substitute for a human approver.

This restriction inherits from `03-governed-ai.md` §3.5 (Human accountability).

---

## 5) Rule Inventory (Mandatory Catalog)

The Rule Inventory is the canonical evidence artifact for C-12. Every active rule across all in-scope rule sets shall have one row. Maintained by IT Procurement Lead; reviewed by Procurement Ops Mgr; sampled by Internal Audit.

### 5.1 Metadata model (per rule)

| Field | Definition | Source |
|---|---|---|
| `RuleId` | Stable identifier per naming convention (§4.2) | Set at authoring |
| `RuleSet` | The Oracle approval setup task this rule lives in (e.g., *Manage Requisition Approvals*) | Setup task |
| `DocumentType` | REQ \| PO \| CO \| NEG \| AWARD \| CONTRACT \| SUPPLIER_REG \| SUPPLIER_CHG | Document the rule serves |
| `Stage` | Stage name | Configuration |
| `ConditionExpression` | Plain-language summary of the rule's condition | Configuration + author |
| `RiskAttributes` | List of risk attributes used (e.g., `amount`, `category`, `on_contract_flag`) | Author |
| `ParticipantType` | Single / Serial / Parallel / FYI | Configuration |
| `ListBuilder` | Supervisory / Job Level / Position / Approval Group / Single / Resource | Configuration |
| `StopCondition` | Plain-language summary | Configuration |
| `RoutingRestrictions` | Preparer exclusion; SoD rules | Configuration |
| `BusinessIntent` | Why this rule exists (one or two sentences) | Author + reviewer |
| `LinkedControl` | Control reference from `01-controlled-operations.md` §6 (e.g., C-04) or "Direct DOA: row N" | Author |
| `LinkedSOP` | SOP reference from `01-controlled-operations.md` §4 (e.g., SOP-01) | Author |
| `LinkedDOARow` | Reference to the DOA-to-configuration mapping row, if applicable | SOP-AR-06 output |
| `RuleOwner` | Job/position accountable for the rule (typically Procurement Ops Mgr or a Process Owner) | Governance |
| `ConfigurationCustodian` | Who maintains the configuration (typically IT Procurement Lead) | Standing |
| `Status` | Active / Suspended / Retired | Lifecycle |
| `EffectiveDate` | When promoted to production | Change ticket |
| `LastReviewedDate` | Last C-12 review or recertification | Review log |
| `LastChangeTicket` | ITSM ticket reference | Change ticket |
| `OverrideRate30d` | % of in-scope documents where the approver rejected or pushed back | Monitoring (§9) |
| `ReassignmentRate30d` | % reassigned (excluding vacation rule) | Monitoring (§9) |
| `Notes` | Anything material (known limitations, vendor caveats, planned changes) | Optional |

### 5.2 Worked example row

```yaml
RuleId: REQ_C04_NonCatalogBuyerReview
RuleSet: Manage Requisition Approvals
DocumentType: REQ
Stage: REQ_S5_BuyerReview
ConditionExpression: "Any line where ItemSource = 'Non-Catalog' AND AmountUSD > 0"
RiskAttributes: [item_source, amount_usd]
ParticipantType: Single
ListBuilder: Approval Group
StopCondition: "Approval Group is closed-loop; no escalation"
RoutingRestrictions: "Exclude requester; exclude preparer"
BusinessIntent: "Ensure every non-catalog requisition receives buyer review for sourcing, classification, and supplier suitability."
LinkedControl: C-04
LinkedSOP: SOP-01, SOP-05
LinkedDOARow: n/a
RuleOwner: Procurement Operations Mgr
ConfigurationCustodian: IT Procurement Lead
Status: Active
EffectiveDate: 2026-04-15
LastReviewedDate: 2026-05-10
LastChangeTicket: PROC-CHG-2026-0142
OverrideRate30d: 4.1%
ReassignmentRate30d: 0.8%
Notes: "Monitoring for spike in overrides after 26B promotion."
```

### 5.3 Inventory storage and access

- Stored in the governance shared drive (controlled), or in the ITSM CMDB if approval rules are modeled there.
- Read access for: IT Procurement Lead, Procurement Ops Mgr, Procurement Process Owners, Controllership, Internal Audit.
- Write access for: IT Procurement Lead's authorized team only.
- Change is itself controlled; the Inventory tracks its own version history.

---

## 6) Administrator SOPs

> Each SOP follows: Objective · Scope · Roles · Prerequisites · Procedure steps · Evidence · Exceptions. SOPs are referenced by ID from §7 (Change Control) and §10 (Linkage Map).

### SOP-AR-01 — Author a New Approval Rule

**Objective.** Create a new approval rule that meets the §4 standard and is ready for promotion review.

**Roles.** Author (IT Procurement Lead's team) · Reviewer (Procurement Ops Mgr) · Process Owner (per document type) · Internal Audit (informed for material changes).

**Prerequisites.** Approved business intent linked to a control or DOA row; risk attributes identified; HCM data validated for any new list builder dependency; test pod available.

**Steps.**
1. Log a change ticket in ITSM with the proposed business intent, linked control or DOA row, and risk attributes.
2. Open the relevant Oracle setup task (e.g., *Manage Requisition Approvals*) in the **test pod**.
3. Confirm or create the Stage following the §4.2 naming convention.
4. Author the Rule:
   - Condition: use risk attributes only; no person identity in conditions.
   - Participant type and List Builder: select per §4.3 acceptance criteria; document rationale in the change ticket.
   - Stop condition: specify and confirm testable.
   - Routing restrictions: apply preparer exclusion where R-3 applies.
5. Save the rule using the §4.2 naming convention; include the linked control reference (e.g., `REQ_C04_NonCatalogBuyerReview`).
6. Execute the test pack (SOP-AR-04 testing approach in §8); attach results to the ticket.
7. Pre-populate the Rule Inventory row (§5.1) with `Status = Pending`.
8. Submit for review per SOP-AR-05.

**Evidence.** Change ticket; test pack results; pre-populated Rule Inventory row; reviewer signoff record.

**Exceptions.** None inside this SOP. Any deviation from §4 acceptance criteria must follow `01-controlled-operations.md` §2.4 exception authority.

---

### SOP-AR-02 — Modify an Existing Approval Rule

**Objective.** Change a production rule with full traceability and without breaking in-flight transactions.

**Roles.** As SOP-AR-01.

**Prerequisites.** Driver for change documented (incident, audit finding, DOA change, policy update, release-readiness finding). Current Rule Inventory row located.

**Steps.**
1. Log a change ticket referencing the current Rule Inventory row (`RuleId`).
2. Extract the current rule configuration (**before** state) and attach to the ticket.
3. Author the proposed change in the **test pod**.
4. Capture the **after** state.
5. Run the test pack (§8), including a regression run against historical payloads if available via Oracle's rule simulation.
6. Identify any in-flight production transactions that could be affected and plan handling (drain, complete, reassign, or accept transition).
7. Update the Rule Inventory draft with `Status = Pending Change`; capture the proposed new values.
8. Submit for review per SOP-AR-05.

**Evidence.** Change ticket; before/after configuration extracts; test pack results; in-flight handling plan; reviewer signoff.

**Exceptions.** Emergency changes (S1 operational issue per `01-controlled-operations.md` §7) may follow an accelerated path: verbal approval from Procurement Ops Mgr + IT Procurement Lead, ticket logged within 4 business hours, full evidence reconstructed within 5 business days, Internal Audit informed.

---

### SOP-AR-03 — Retire an Approval Rule

**Objective.** Decommission a rule that is no longer needed without leaving orphaned configuration.

**Roles.** As SOP-AR-01 plus Controllership (informed).

**Steps.**
1. Confirm the rule is no longer required (control retired or merged; DOA row changed; risk pattern evolved). Document the rationale.
2. Identify dependent artifacts: linked Approval Groups, related FYI participants, downstream rules that reference the same risk attribute. Map the dependency set in the change ticket.
3. In the test pod, mark the rule inactive (or delete per Oracle's supported pattern); verify no rule-set-level errors.
4. Run the test pack (§8) and confirm document routing still meets the relevant control objectives.
5. Update the Rule Inventory to `Status = Retired`; record `EffectiveDate` of retirement and reason.
6. Submit for review per SOP-AR-05.

**Evidence.** Change ticket; dependency map; test pack results; updated Rule Inventory row.

---

### SOP-AR-04 — Investigate a Stuck Approval or Reassignment Request

**Objective.** Restore flow on a single stuck transaction and identify whether a rule-set defect or HCM data defect is the cause.

**Roles.** Administrator (IT Procurement Lead's team) · Affected requester / buyer (informed) · Procurement Ops Mgr (consulted) · Internal Audit (informed if S1/S2).

**Steps.**
1. Receive the request (user report, KPI-08 alert, Transaction Console scan).
2. Locate the transaction in the Transaction Console; capture the current state (stage, participant, pending approver, age, last activity).
3. Inspect the rule that fired: confirm the participant resolved correctly; if not, identify root cause (HCM gap, terminated approver, missing approval limit, vacation rule loop, condition mismatch).
4. If a single transaction issue: reassign in Transaction Console per documented authority; record the reassignment in the change ticket and the affected SOP-AR-08 reassignment log.
5. If a rule-set or HCM root cause: log an operational issue in `01-controlled-operations.md` §7 and route to SOP-AR-02 (rule change) or to HCM data steward (HCM fix).
6. Confirm the transaction has progressed; communicate resolution.

**Evidence.** Transaction Console screenshot of before/after; reassignment record; root-cause classification; linked issue ticket.

**Exceptions.** Reassignments performed outside the documented authority list require Procurement Ops Mgr approval and post-action review.

---

### SOP-AR-05 — Promote Rule Changes from Test Pod to Production

**Objective.** Move a tested rule change into production with controlled evidence and a defined rollback path.

**Roles.** Author · Reviewer (Procurement Ops Mgr) · IT Procurement Lead (approver) · Internal Audit (informed for material).

**Prerequisites.** Change ticket complete with §4.3 acceptance criteria evidence.

**Steps.**
1. Reviewer confirms §4.3 acceptance criteria are met; signoff recorded in ticket.
2. Build the configuration migration package (Functional Setup Manager export) from the test pod.
3. Schedule the production promotion outside peak transaction windows where possible.
4. Drain or complete in-flight transactions that would be affected, per the SOP-AR-02 in-flight handling plan.
5. Import the migration package into production; verify import without errors.
6. Execute the production post-promotion validation:
   - Submit a representative test transaction in production (using a low-amount safe scenario where feasible) and confirm routing.
   - Sample 3–5 in-flight transactions and confirm expected behavior.
7. Update the Rule Inventory to `Status = Active`; set `EffectiveDate`, `LastChangeTicket`, and `LastReviewedDate`.
8. Communicate the change to affected user audiences if behavior is user-visible.
9. Close the change ticket.

**Evidence.** Migration package reference; import log; production validation results; updated Rule Inventory row; closed change ticket.

**Rollback.** Pre-promotion configuration extract is the rollback artifact. Rollback decision rests with IT Procurement Lead + Procurement Ops Mgr.

---

### SOP-AR-06 — Quarterly DOA-to-Configuration Reconciliation

**Objective.** Confirm that every relevant DOA row is enforced by an identifiable Oracle configuration object and that no Oracle approval mechanism enforces something the DOA does not authorize.

**Roles.** IT Procurement Lead (R) · Procurement Operations Mgr (A) · Controllership (C; owns the DOA) · Internal Audit (I).

**Prerequisites.** Current signed version of the DOA; current Rule Inventory; current extracts from *Manage Approval Limits*, *Manage Buyers*, *Manage Procurement Agents*, and each in-scope approval setup task.

**Steps.**
1. Pull the current DOA-to-Configuration mapping artifact (the appendix referenced in §5.1 / §10). If the mapping does not exist, create it as part of this SOP cycle.
2. For each DOA row, identify the enforcing Oracle object(s) — usually one or more of: Approval Limit, Approval Group, AMX Rule, Procurement Agent grant, Buyer Authorization Amount.
3. Compare the DOA threshold or rule against the configured value; flag every gap (DOA but no config; config but no DOA; threshold mismatch; role mismatch).
4. For each gap, classify root cause (DOA recently changed and config lagging; config recently changed without DOA basis; org change without HCM update; legacy carryover).
5. Open SOP-AR-02 change tickets for each config gap; open feedback to Controllership for each DOA-side gap.
6. Update the DOA-to-Configuration mapping with the reconciliation date, gap log, and remediation owners.
7. Memo summarizing the reconciliation, gaps, and remediation status to Procurement Ops Mgr; copy CPO + Controllership; copy Internal Audit.

**Evidence.** Updated DOA-to-Configuration mapping; gap log; change tickets opened; reconciliation memo.

**Cadence.** Quarterly minimum. Triggered off-cycle by any of: signed DOA change; material org restructure; M&A; major Oracle release that alters AMX behavior; audit finding.

---

### SOP-AR-07 — Quarterly Oracle Release Readiness for AMX

**Objective.** Confirm that the next Oracle quarterly release does not silently change AMX behavior, approval setup UI semantics, attribute availability, or Transaction Console capabilities in a way that affects the in-scope rule set or the controls it enforces. Implements R-7 / C-20.

**Roles.** Procurement Ops Mgr (R) · IT Procurement Lead (R) · Process Owners (C) · Internal Audit (I).

**Steps.**
1. Within 5 business days of *What's New* publication for the upcoming release, scan the Procurement, Approvals, BPM, and Transaction Console sections.
2. Identify any items that touch: AMX engine behavior; list builders; approval setup UI; Approval Groups; Procurement Agent; Transaction Console; Approval Reassignment; document attributes available to conditions; notification delivery.
3. For each material item, run the regression test pack (§8) in the test pod after the release is applied to non-production.
4. Document deltas in approval behavior, attribute availability, or UI navigation.
5. Update affected SOPs (this document and `01-controlled-operations.md` §4 SOP-01–SOP-07) where user steps change.
6. Update the Rule Inventory `Notes` field for any rule whose behavior assumptions changed.
7. Produce a release readiness memo: changes detected, regression results, rule impact, SOP impact, recommended action, residual risk.
8. Submit to Procurement Ops Mgr and CPO; copy Internal Audit; coordinate with `03-governed-ai.md` CC-1 for any AI feature in the same release.

**Evidence.** Release readiness memo; regression test results; updated SOPs (if any); updated Rule Inventory notes.

---

### SOP-AR-08 — Vacation, Reassignment, and Procurement Agent Lifecycle

**Objective.** Govern vacation rules, reassignment rules, and Procurement Agent activation / inactivation so that authority is never silently transferred or left orphaned.

**Roles.** Approver (sets own vacation rule with admin oversight) · IT Procurement Lead (admin-level vacation/reassignment and Procurement Agent management) · Procurement Ops Mgr (reviewer) · HR / People Ops (source of role-change triggers).

**Vacation rule procedure (approver-set).**
1. Approver sets a vacation rule using the §4.2 naming convention; mandatory start date and end date.
2. The vacation rule names a specific replacement approver (by job/position, not generic group, unless an Approval Group is the designed replacement).
3. The replacement approver must hold equivalent or higher approval authority for the documents covered; self-naming as one's own replacement is prohibited.
4. The vacation rule auto-expires on the end date.

**Reassignment procedure (admin-level).**
1. Triggered by: user report (SOP-AR-04), KPI-08 alert, terminated approver detected in HCM, or role change.
2. IT Procurement Lead reassigns in Transaction Console per documented authority.
3. Each reassignment recorded with: source approver, target approver, transaction reference, reason code, timestamp.
4. Reassignment log reviewed monthly by Procurement Ops Mgr.

**Procurement Agent lifecycle.**
1. New Procurement Agent: requested via access request; action grants per S-6; effective on approval.
2. Procurement Agent change: any change to action grants follows SOP-AR-02 change-ticket flow.
3. Procurement Agent inactivation: within 1 business day of role change or exit, per S-7. Trigger is HCM event; weekly reconciliation report compares active Procurement Agents to active HCM employees in eligible jobs.

**Approval Group hygiene.**
1. Quarterly review per S-10: each Approval Group owner attests current membership.
2. Terminated members and role-changers removed; replacements added.
3. Review attestation recorded with date and owner.

**Evidence.** Vacation rule log; reassignment log; Procurement Agent activation/inactivation log; weekly HCM-to-Agent reconciliation; quarterly Approval Group attestation.

---

## 7) Change Control Checklist (binds to C-12)

Every change ticket for an approval rule, Approval Group, Procurement Agent grant, or Approval Limit must include the following before promotion. Reviewers reject incomplete tickets.

- [ ] Business intent (one or two sentences)
- [ ] Linked control reference from `01-controlled-operations.md` §6, or linked DOA row, or linked SOP
- [ ] Before-state configuration extract (for modifications and retirements)
- [ ] After-state configuration extract (for additions and modifications)
- [ ] Risk attributes used (no person identity in conditions)
- [ ] List builder selection and rationale
- [ ] Stop condition documented and testable
- [ ] Routing restrictions applied (preparer/requester exclusion where R-3 applies)
- [ ] §4.3 acceptance criteria met (each criterion ticked or exception documented)
- [ ] Test pack executed: scenarios, edge cases, negative tests, results attached
- [ ] In-flight transaction handling plan
- [ ] Effective date and post-promotion validation plan
- [ ] Rollback approach
- [ ] Rule Inventory row updated (pre-populated for new, modified for change, retired for decommission)
- [ ] DOA-to-Configuration mapping updated if any threshold or role is affected
- [ ] Reviewer signoff: Procurement Ops Mgr
- [ ] Approver signoff: IT Procurement Lead
- [ ] Internal Audit informed for material changes (defined as: any new rule, any change to a tier boundary, any prohibited-pattern exception, any change touching SoD enforcement, any change affecting > 1,000 in-flight transactions)

---

## 8) Testing Approach

### 8.1 Scenario pack (per rule)

Each new or modified rule has a documented scenario pack covering:

- **Representative scenarios** — typical document profiles that should match the rule (e.g., for `REQ_C04_NonCatalogBuyerReview`: a $5,000 non-catalog office furniture requisition).
- **Edge cases** — at amount boundaries; multi-line documents with mixed risk attributes; documents missing optional attributes; documents in non-functional currencies; documents tied to projects vs. cost centers.
- **Negative tests** — documents that should **not** trigger the rule; users who should **not** appear in the approver list (e.g., requester); attempts to bypass the stop condition.
- **Regression set** — a stable bundle of historical document payloads (anonymized where appropriate) that all relevant rules are re-tested against on any change.
- **Permission tests** — confirmation that no AI feature, no agent, no scheduled job, and no service account can take action that the rule design does not allow.

### 8.2 Test execution

- Tests run in a non-production pod with representative HCM, supplier, item, and project data.
- Use Oracle's rule simulation / test capabilities where available before saving the rule.
- Document expected vs actual routing for each scenario; attach screenshots or extracts.
- Failed tests block promotion until resolved.

### 8.3 Production post-promotion validation

- Per SOP-AR-05 step 6: 1 representative live test + sample of 3–5 in-flight transactions.
- Within 5 business days of promotion: sample 25 production documents that should have triggered the new/modified rule and confirm routing.

---

## 9) Operational Metrics Admins Maintain

These metrics are maintained by IT Procurement Lead's team, reviewed monthly by Procurement Ops Mgr, and feed KPI-08 in `02-governed-data-and-analytics.md`.

| Metric | Definition | Threshold | Action |
|---|---|---|---|
| Stuck approvals > 3 business days | Count and aging buckets per document type | > 3 days triggers SOP-AR-04 | Investigate; escalate to KPI-08 |
| Override / rejection rate per rule | % of routed documents where approver rejected or pushed back, trailing 30 days | Sustained > 25% triggers rule review | Open SOP-AR-02 evaluation |
| Reassignment volume (admin-initiated) | Count of admin-driven reassignments per month, excluding vacation rule | Trend; spike triggers root-cause review | Investigate HCM/data root causes |
| Vacation rule hygiene | % vacation rules with valid end date and authorized replacement | 100% | Force-expire violations |
| Approval Group membership freshness | % Approval Groups with attestation in last quarter | 100% | Escalate per SOP-AR-08 |
| Procurement Agent reconciliation gap | Count of active Procurement Agents whose HCM record is inactive or role-changed | 0 | Inactivate per S-7 |
| Rule Inventory completeness | % active rules in production with a current Rule Inventory row | 100% | Backfill |
| DOA-to-config gap count | Open gaps from last SOP-AR-06 cycle | Trend down; 0 unresolved > 1 cycle | Escalate to Controllership + CPO |
| Prohibited-pattern exceptions outstanding | Count of documented §4.4 exceptions still active | Trend down | Annual reaffirmation; retire when possible |
| Failed promotions | Count of migration imports that failed or required rollback | Trend; investigate every occurrence | Postmortem; update SOP-AR-05 |

---

## 10) Linkage Map (Back to the Governance Bundle)

| This standard | Upstream / downstream linkage |
|---|---|
| §4.3, §4.4, §7 | Implements control C-12 (Approval rule change control) |
| §4.1, §4.2, §5 | Operationalizes R-2 (Approval enforcement) and R-3 (SoD) |
| §4.5, §4.6, SOP-AR-08 | Operationalizes R-3 and supports C-02 (SoD review) |
| SOP-AR-06 | Implements C-16 (Spend authority alignment to DOA) |
| SOP-AR-07 | Implements C-20 (Quarterly release readiness) for the AMX layer; paired with `03-governed-ai.md` CC-1 |
| SOP-AR-04, §9 | Feeds KPI-08 (Approval Aging) and the operational issue register (`01-controlled-operations.md` §7) |
| §4.7 | Inherits constraints from `03-governed-ai.md` §3.5 (Human accountability) |
| All SOPs | Reference document types REQ / PO / CO / NEG / AWARD / CONTRACT / SUPPLIER_REG / SUPPLIER_CHG, consistent with `01-controlled-operations.md` §3 process |

---

## 11) Glossary cross-reference

For procurement business terminology (Procurement BU, Requisition, Negotiation, Award, Procurement Contract, etc.), refer to `02-governed-data-and-analytics.md` §6 (canonical glossary). The §3 glossary in this document covers only AMX-specific terminology.

---

## 12) Version History

| Version | Date | Author | Change | Approver |
|---|---|---|---|---|
| 0.1 | 2026-05-18 | IT Procurement Lead | Initial draft of AMX configuration standard and admin runbook for Oracle 26B | – |
| 1.0 | TBD | IT Procurement Lead | Approved baseline | CPO + Controllership + IT Procurement Lead |
