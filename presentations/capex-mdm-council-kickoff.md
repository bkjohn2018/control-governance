# Governance Deck Outline — CapEx Master Data Management Council Kickoff

**Source:** [capex-master-data-management-framework.md](../architecture/capex-master-data-management-framework.md), [capex-lifecycle-governance-overlay.md](../architecture/capex-lifecycle-governance-overlay.md)  
**Deck file:** [capex-mdm-council-kickoff.pptx](capex-mdm-council-kickoff.pptx)  
**Suggested duration:** 25–30 minutes (9 core slides + appendix)  
**Audience:** CFO delegate, CapEx process owner, domain leads (PMO, Procurement, AP, Fixed Assets, GL), enterprise data architect, Controllership, Internal Audit (informed)

---

## Slide 1: Title and objective

**Title:** CapEx Master Data Governance — Council Kickoff

- **Purpose:** Ratify the CapEx MDM framework, confirm ownership, and approve Phase 0–1 mobilization.
- **Meeting date:** [TBD]
- **Audience:** CapEx / investment committee delegates, domain process owners, data stewards

---

## Slide 2: Executive takeaway

**Headline 1:** Domain CapEx controls are in place; **cross-domain master data breaks at handoffs** — not inside individual Oracle modules.

**Headline 2:** Fix the chain with **five global identifiers + ten enterprise DQ rules (MDQ-01–10)** before investing in new MDM tooling.

**Headline 3:** Highest near-term value: **L4→L5 investment-to-project linkage** and **MDQ-01/02 enforcement at requisition**.

---

## Slide 3: Decision requests

| # | Decision needed | Option set | Recommended option |
|---|---|---|---|
| D1 | Adopt CapEx MDM framework as data authority layer | Approve / Revise / Defer | **Approve** framework §2 policy (MDM-1–10) |
| D2 | Name CapEx MDM Council chair | Nominee from finance / PMO | **CapEx process owner** (to be named today) |
| D3 | Ratify global identifier policy | Approve formats TBD / Approve with tenant workshop | **Approve policy**; workshop formats in Phase 1 |
| D4 | Select upstream portfolio pattern (L1–L4) | A: EPM · B: External PPM · C: Intake register | **Time-box selection** to Phase 1 (weeks 5–10) |
| D5 | Fund Phase 0–1 mobilization | Yes / No / Partial | **Yes** — weeks 1–10 only; defer full MDQ automation |

---

## Slide 4: KPI and control health snapshot

| KPI / control | Target (12 mo.) | Current | Status |
|---|---|---|---|
| CXM-01 — Reqs with valid project + asset category | ≥ 95% | Not baselined | Measure in Phase 0 |
| CXM-03 — CIP aging > 90 days | < 10% of CIP | Not baselined | Measure in Phase 0 |
| CXM-05 — FA–GL recon exceptions at close | 0 material | Not baselined | Per close review |
| MDQ-01 — Valid ProjectNumber + task on CapEx txn | 100% | Not enforced | Phase 2 target |
| MDQ-10 — CapExInvestmentID traceable L1–L12 | 100% | Not enforced | Phase 1 priority |
| Handoff SLA compliance (H-01–H-06) | ≥ 90% | Not measured | Overlay metric CXM-07 |

**Implication:** Controls and metrics are defined; **baseline and enforce** are the gaps — not missing documentation.

---

## Slide 5: Top risks and issue status

| Risk / issue | Severity | Owner | Status | ETA |
|---|---|---|---|---|
| Investment ID not carried to Oracle project (L4→L5) | High | CapEx process owner | Open — no cross-ref | Phase 1 wk 10 |
| Duplicate asset capitalization (MDQ-09) | High | Asset Accounting Mgr | Open — manual review only | Phase 2 wk 20 |
| Opex account on CapEx requisition (MDQ-02) | High | Controllership | Open — not system-blocked | Phase 2 wk 16 |
| Duplicate / unqualified supplier on CapEx PO | Medium | Supplier MDM steward | Partial — Proc DQ-10 exists | Phase 2 wk 18 |
| CIP not cleared after PIS (MDQ-08) | Medium | Asset Accountant | Open — H-06 SLA not tracked | Phase 3 wk 28 |
| Upstream pattern (A/B/C) undecided | Medium | CFO delegate | Open — analysis paralysis risk | Phase 1 wk 8 |
| Executive CapEx funnel distrusted | Medium | Controllership | Open — lineage unpublished | Phase 3 wk 28 |

---

## Slide 6: Root-cause themes

| Theme | Evidence |
|---|---|
| **No golden keys across domains** | Overlay handoffs H-01–H-06 fail when CapExInvestmentID, ProjectNumber, or GlobalAssetTag break |
| **Strong domain MD, weak boundary MD** | Each domain has governed data packages; enterprise MDQ-01–10 not yet operational |
| **Process gates without data contracts** | Overlay defines SLAs; MDM framework adds required fields and MDQ enforcement at each gate |
| **Upstream portfolio disconnected from Oracle** | L1–L4 authored in EPM/PPM/spreadsheet without mandatory L4→L5 cross-reference |
| **Detection after the fact** | Post-hoc audit vs. system block at requisition (MDQ-01/02) |

---

## Slide 7: Remediation plan and timeline

| Action | Owner | Start | End | Dependency |
|---|---|---|---|---|
| Ratify MDM policy + identifier policy | CapEx process owner | Wk 1 | Wk 1 | D1, D3 approval |
| Charter CapEx MDM Council + Steward WG | Enterprise data architect | Wk 1 | Wk 2 | Named chair (D2) |
| Baseline CXM-01, MDQ-01/02 on top 3 asset categories | P2P steward + Controllership | Wk 2 | Wk 4 | Audit access |
| Select upstream pattern A/B/C | Investment & Portfolio Forum | Wk 5 | Wk 8 | D4 |
| Publish CapExInvestmentID ↔ ProjectNumber cross-ref | Portfolio steward | Wk 6 | Wk 10 | Pattern selection |
| Enforce MDQ-01/02 at requisition (Oracle holds) | IT ERP + Procurement | Wk 11 | Wk 16 | Steward WG active |
| MDQ-09 duplicate-asset check at mass additions | Asset Accountant | Wk 14 | Wk 20 | FA queue SOP |
| CapEx funnel + MD quality dashboard | Controllership + BI lead | Wk 21 | Wk 28 | Lineage template |
| Monthly MDM Council + quarterly MD health scorecard | CapEx process owner | Wk 5 | Ongoing | Council charter |

---

## Slide 8: Open decisions and next milestones

**Open decisions (today):**

- Name CapEx process owner / MDM Council chair
- Confirm steward assignments: portfolio, project, supplier MDM, asset, GL
- Approve Phase 0–1 scope limited to **top 3 asset categories**

**Milestones:**

| Date | Milestone |
|---|---|
| Wk 4 | Baseline audit complete — MDQ-01/02 pass rate published |
| Wk 8 | Upstream pattern A/B/C selected |
| Wk 10 | L4→L5 cross-reference live; MDQ-10 pilot |
| Wk 16 | MDQ-01/02 system enforcement on pilot categories |
| Wk 28 | Certified CapEx funnel dashboard with MD quality overlay |

**Explicit ask:** Approve framework adoption, name the chair, and fund weeks 1–10 mobilization.

---

## Slide 9+: Appendix

### A1 — Definitions (governed terms)

| Term | Definition |
|---|---|
| CapExInvestmentID | Enterprise ID from intake through retirement |
| ProjectNumber | Oracle authoritative project ID |
| GlobalAssetTag | Unique physical asset ID in FA register |
| CIP | Costs before place in service |
| PIS | Depreciation start trigger |
| MDQ-01–10 | Enterprise cross-domain data-quality rules |

### A2 — Twelve-stage lifecycle (abbreviated)

L1 Strategy → L2 Demand → L3 Feasibility → L4 Authorization → **L5 Budgeting** → L6 Design → L7 Sourcing → L8 Construction → L9 Capitalization → L10 Commissioning → L11 Operational handoff → L12 Retirement

*Overlay S1–S6 maps to L5–L12 execution.*

### A3 — Six data domains

Investment & Portfolio · Project & WBS · Financial Coding · Supplier & Contract · Location & Site · Asset Register

### A4 — Data notes

- Platform: Oracle Fusion Cloud 26B; optional EPM / external PPM for L1–L4
- Maturity: Foundational → Defined (12-month horizon)
- Framework status: v1.0 Draft — tenant segment values TBD

### A5 — Supporting evidence

- [CapEx Master Data Management Framework](../architecture/capex-master-data-management-framework.md)
- [CapEx Lifecycle Governance Overlay](../architecture/capex-lifecycle-governance-overlay.md)
- Domain bundles: Procurement, Projects, AP, Fixed Assets, GL `02-governed-data-and-analytics.md`

---

## Quality checklist

- Presentable in 25–30 minutes without skipping D1–D5
- Every risk has owner and ETA
- Headlines use governed terms (MDQ, CXM, H-01–H-06, identifiers)
- Narrative flows: problem → decision → phased action
- Appendix holds detail; core deck stays decision-focused
