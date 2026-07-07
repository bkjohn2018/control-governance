# Dashboard IA Spec — Finance & Accounting Governance Platform

**Version:** 1.0  
**Date:** July 2, 2026  
**Scope:** All 8 Oracle Finance domains across Controlled Operations, Governed Data & Analytics, and Governed AI layers  
**Audiences:** Finance / Accounting Leadership · Domain Process Owners · Data Governance CoE

---

## Global Navigation

Five top-level nodes are always visible in the primary nav bar:

| Position | Label | Resolves To |
|---|---|---|
| 1 | Overview | Cross-domain executive status page |
| 2 | Domains | Domain picker → 8 Domain Hub pages |
| 3 | Data Governance | Data Governance Hub |
| 4 | AI Governance | AI Governance Hub |
| 5 | Architecture | Architecture reference page |

**Domain picker** (under Domains node) lists all 8 domains:
- Accounts Payable – Invoice to Pay
- Receivables – Credit to Cash
- Procurement
- General Ledger – Record to Report
- Project Management
- Fixed Assets
- EPM – Financial Consolidation & Close
- EPM – Planning

**Secondary nav** (within domain context): Operations · Analytics · AI · Issues

**Utility nav** (top-right): Admin / Standards · Ownership Registry · User profile

---

## Page Map

| Page | Purpose | Primary User | Main Actions |
|---|---|---|---|
| Overview | Cross-domain exception heatmap, RAG status by domain and layer, exception count tiles, trend signals | Finance / Accounting Leadership | Drill to domain, surface exceptions, view trend |
| Domain Hub (×8) | Domain KPI dashboard, control compliance rate, open issue summary, RACI owner panel | Process Owners | Drill to KPI, control, or issue; assign owner |
| KPI / Metric Detail | Canonical definition, lineage, DQ score, trend sparkline, owner, formula, approved synonyms | Data Governance CoE | Trace lineage, view DQ status, edit definition |
| Control Detail | COSO control card, evidence status, last test result, linked issues, RACI owner | Process Owners | Log issue, acknowledge, view history |
| Issue Queue | Domain or cross-domain issue list: severity, owner, SLA countdown, status | All audiences | Triage, assign, escalate, close |
| Issue Detail | Full issue record: description, root cause, remediation plan, linked control, activity log | Process Owners, CoE | Update status, add evidence, escalate |
| Data Governance Hub | DQ scores by domain, metadata coverage %, standards adherence, glossary completion | Data Governance CoE | Run assessment, surface gaps, link standard |
| AI Governance Hub | AI use case intake pipeline per domain, risk tier map, agent readiness gate summary | Data Governance CoE | Review intake, apply readiness gate, log decision |
| AI Use Case Detail | Full intake record: use case description, risk tier, control mapping, approval status | CoE, Domain Lead | Approve, escalate, add condition |
| Architecture | 5-layer domain governance architecture, CapEx lifecycle overlay, MDM framework | Leadership, CoE | Navigate to domain, view overlay |
| Admin / Standards | Ownership registry, classification standards, metric thresholds, approved synonym mappings | Admin, CoE | Update, approve, publish |

---

## Section Hierarchy

### Overview Page

- **Top band:** Page title "Finance & Accounting Governance" + as-of date + active exception count badge
- **Middle analytical band:**
  - Domain × Layer RAG heatmap grid (8 domains × 3 layers: Operations, Analytics, AI)
  - Exception count tiles: Critical open issues · Controls needing attention · KPIs off-target · AI items pending review
- **Operational band:** Top 5 cross-domain open issues (severity, domain, owner, SLA)
- **Support panel (right rail):** Quick links to Architecture, Standards, last governance review date

### Domain Hub Page

- **Top band:** Domain name + status badge (Green / Amber / Red) + last-refresh timestamp; 5 KPI summary tiles with RAG indicator, current value, trend arrow, and target
- **Middle analytical band:**
  - Control compliance rate trend (sparkline, last 12 periods)
  - Issue aging distribution (bar chart by severity bucket)
  - DQ score over time (sparkline)
- **Operational band:**
  - Open issue list (severity chip, issue title, owner, SLA days remaining)
  - Pending RACI actions table (action, role, due date)
- **Right rail:** Quick links → SOP document · Policy document · AI Governance status badge for domain · Glossary · Evidence-Required and Close-Critical predefined reports for domain (links to Scheduled Processes work area)

### KPI / Metric Detail Page

- **Top band:** Metric name + canonical definition + domain tag + owner name
- **Middle analytical band:** Current value + trend sparkline (12 periods) + DQ score + target vs. actual
- **Operational band:** Formula · Data sources · Upstream lineage · Downstream reports
- **Support panel:** Approved synonyms · Related metrics · Last reviewed date · Governance tier

### Control Detail Page

- **Top band:** Control ID + name + COSO component tag + domain + owner
- **Middle analytical band:** Last test result (Pass / Fail / Untested) + evidence items list + test history (last 4 periods)
- **Operational band:** Linked open issues · Linked SOP reference · Remediation notes
- **Support panel:** RACI summary · Frequency · Control type (Preventive / Detective / Corrective)

### Issue Queue Page

- **Top band:** Scope selector (All Domains · Domain filter) + status filter (Open · In Remediation · Closed) + severity filter
- **Middle analytical band:** Issue count by severity (Critical / High / Medium / Low) + average SLA days remaining
- **Operational band:** Issue list table (ID, title, domain, severity, owner, status, SLA countdown)
- **Support panel:** SLA summary tiles · Escalation queue count

### Data Governance Hub Page

- **Top band:** Overall DQ score + metadata coverage % + standards adherence % + glossary completion %
- **Middle analytical band:** DQ score by domain (horizontal bar chart) + metadata coverage trend
- **Operational band:** Standards adherence by domain table + open DQ issues list
- **Support panel:** Glossary term count · Ungoverned terms · Last assessment date

### AI Governance Hub Page

- **Top band:** Total AI use cases in pipeline + pending review count + approved count + rejected count
- **Middle analytical band:** Intake pipeline by domain (status chips) + risk tier distribution
- **Operational band:** Agent readiness gate summary by domain (gate status: Not Started / In Progress / Passed) + pending intake items
- **Support panel:** Policy version · Last review date · Open escalations

### Architecture Page

- **Top band:** Architecture title + version + last updated
- **Middle analytical band:** 5-layer governance model visual (F&A Domain → Operations → Analytics → AI Augmentation → Bounded Agents)
- **Operational band:** CapEx lifecycle overlay summary + MDM framework summary
- **Support panel:** Domain tags (each links to Domain Hub) · Related architecture docs

---

## Drill Paths

| From | Trigger | To | Context Passed |
|---|---|---|---|
| Overview | Exception tile click | Domain Hub | Domain filter applied |
| Overview | Domain status card click | Domain Hub | Full domain context |
| Overview | Open issue row click | Issue Detail | Issue ID |
| Domain Hub | KPI tile click | KPI / Metric Detail | Metric ID, domain context |
| Domain Hub | Control status indicator click | Control Detail | Control ID |
| Domain Hub | Issue count badge click | Issue Queue | Domain-scoped filter |
| Domain Hub | DQ score click | Data Governance Hub | Domain pre-filtered |
| Control Detail | Linked issue row click | Issue Detail | Issue ID |
| Issue Queue | Issue row click | Issue Detail | Issue ID |
| Data Governance Hub | Domain DQ score click | Domain Hub | Domain, DQ tab active |
| AI Governance Hub | Use case row click | AI Use Case Detail | Use case ID |
| AI Governance Hub | Domain readiness status click | Domain Hub | Domain, AI tab active |
| Architecture | Domain layer node click | Domain Hub | Domain context |

Every drill path resolves to a page with at least one primary action available. No dead ends.

---

## Quality Checklist

- [x] Every top-level page has a distinct responsibility — no two pages serve the same decision need
- [x] Drill paths are explicit and purposeful — every trigger has a named destination and context passed
- [x] Navigation mirrors the operating model: Leadership enters via Overview, Process Owners via Domains, CoE via Data Governance and AI Governance
- [x] Users can get from signal to action in three steps or fewer: Overview → Domain Hub → Issue Queue (triage)
- [x] No dead ends: every detail page links back to its parent and provides at least one primary action
- [x] Secondary nav (Operations · Analytics · AI · Issues) allows lateral movement within a domain without returning to the top
- [x] Admin / Standards separated from operational pages — governance config does not pollute the operational experience
- [x] All 3 document layers (01-controlled-operations, 02-governed-data-and-analytics, 03-governed-ai) have a corresponding page surface in the IA

---

## Content-to-Page Mapping

| Source Document | Dashboard Surface |
|---|---|
| `01-controlled-operations.md` | Domain Hub (Operations tab) · Control Detail · Issue Queue · RACI panel |
| `02-governed-data-and-analytics.md` | Domain Hub (Analytics tab) · KPI / Metric Detail · Data Governance Hub · DQ scores · Predefined Report panel (Domain Hub right rail) |
| `03-governed-ai.md` | AI Governance Hub · AI Use Case Detail · Domain Hub (AI tab) · Agent readiness gates |
| `architecture/finance-accounting-domain-governance-architecture.md` | Architecture page (5-layer model) |
| `architecture/capex-lifecycle-governance-overlay.md` | Architecture page (CapEx overlay section) |
| `architecture/capex-master-data-management-framework.md` | Architecture page (MDM framework section) |

---

## Domain Reference

| Domain Key | Full Name | Package Path |
|---|---|---|
| AP | Accounts Payable – Invoice to Pay | `packages/oracle-fusion-ap-i2p-26b/` |
| AR | Receivables – Credit to Cash | `packages/oracle-fusion-receivables-credit-to-cash-26b/` |
| PROC | Procurement | `packages/oracle-fusion-procurement-26b/` |
| GL | General Ledger – Record to Report | `packages/oracle-fusion-general-ledger-26b/` |
| PPM | Project Management | `packages/oracle-fusion-project-management-26b/` |
| FA | Fixed Assets | `packages/oracle-fusion-fixed-assets-26b/` |
| FCC | EPM – Financial Consolidation & Close | `packages/oracle-cloud-epm-fcc-26b/` |
| PLAN | EPM – Planning | `packages/oracle-cloud-epm-planning-modules/` |
