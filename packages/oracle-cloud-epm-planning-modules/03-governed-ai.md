# Governance Package: Oracle Cloud EPM Planning Modules — Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source anchor: Oracle Help Center, *Administering Planning Modules* — <https://docs.oracle.com/en/cloud/saas/planning-budgeting-cloud/epbca/index.html>

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Cloud EPM Planning Modules — AI governance layer |
| AI surface | Oracle EPM Planning predictive planning features; Oracle Digital Assistant for EPM; third-party AI tools used in planning workflows; generative AI for budget commentary, variance narrative, and plan generation |
| Governance objective | Define where AI may assist in EPM Planning processes, what data it may access, what human review is required, and what evidence must be retained |
| Primary audience | FP&A Director, Budget Manager, Capital Planning Manager, EPM Service Administrator, Controllership, IT Security, Internal Audit |
| Reference standards | NIST AI RMF; COSO internal control framework; finance AI safe-use principles |
| Maturity (current → target) | Foundational → Defined |
| Non-goals | Replacing EPM Planning business rules with AI agents; automating approval workflows without human checkpoints; AI use not yet addressed by this package |

---

## 1) Executive Summary

**Context.** Oracle Cloud EPM Planning Modules includes emerging AI capabilities — predictive planning, driver-based suggestions, digital assistant integration, and export to tools that use generative AI for narrative, commentary, and variance analysis. Finance AI risk in planning is concentrated in three areas: (1) AI-generated forecasts or plans substituting for human judgment without review; (2) planning data exported to external AI tools without data handling controls; (3) AI-assisted budget commentary or variance narrative representing plan versions as approved when they are not.

**What this package does.** It defines the AI governance layer for EPM Planning Modules: safe-use categories, restricted and prohibited uses, data handling rules, AI use-case intake routing, human review requirements, evidence retention, and monitoring expectations.

**What is ready.** Safe-use categories; data-handling rules for planning data; intake routing; human review requirements for AI-assisted forecast, commentary, and Capital planning.

**What remains.** Tenant-specific AI tool inventory; Oracle AI feature assessment per release; agent readiness review if AI-assisted workflow automation is pursued.

**What we ask of leadership.**
1. Endorse safe-use categories and prohibited uses in §3.
2. Confirm intake routing and AI tool approval list.
3. Approve evidence-retention requirements for AI-assisted plan commentary.

---

## 2) Principles

1. **AI inherits governance.** AI use in EPM Planning inherits all constraints from `01-controlled-operations.md` and `02-governed-data-and-analytics.md`. AI may not bypass approval workflows, override period locks, or produce plan versions that substitute for human-reviewed and approved versions.
2. **Human review before publication.** AI-assisted forecasts, variance narratives, and budget commentary shall be reviewed and approved by a named owner before inclusion in any management report or Approved Budget.
3. **Data handling first.** Planning data contains sensitive financial forecasts, workforce compensation assumptions, and capital investment plans. No planning data shall be shared with external AI services without explicit data-handling approval.
4. **Predictive is advisory.** Oracle predictive planning outputs are advisory inputs to the human planning process; they do not constitute an approved plan version.

---

## 3) AI Safe-Use Categories

| Category | Definition | EPM Planning examples |
|---|---|---|
| **Permitted** | Low-risk productivity support; no sensitive data; no plan-version or control impact | Grammar and readability editing of planning narrative drafts; basic formula explanation |
| **Restricted** | Useful but requires data-handling approval, defined scope, and owner sign-off before use | Oracle predictive planning features for driver suggestions; AI-assisted variance narrative reviewed by owner; Digital Assistant for EPM query; Narrative Reporting AI commentary with human review |
| **High risk** | Significant control, data, or approval impact; requires formal AI intake and risk/control mapping | Generative AI producing forecast versions or budget lines without clear human review gate; AI tools processing compensation or capital plan data externally |
| **Agentic** | AI can initiate multi-step actions in EPM or connected systems | Agent-assisted data-load orchestration; agent-triggered budget revision submission — not approved without agent readiness review |
| **Prohibited** | Never permitted regardless of controls | AI approving plan versions or budget revisions in place of human approver; AI unlocking closed planning periods; AI submitting budgets to Budgetary Control without Controllership sign-off; AI posting plans to Oracle GL |

---

## 4) Data Handling and Disclosure Rules

| Data type | Sensitivity | Permitted AI use | Prohibited AI use | Steward |
|---|---|---|---|---|
| Approved Budget plan version | Confidential | Query within EPM tenant; native AI features only | Export to external LLM without data-handling approval | FP&A Director |
| Capital investment plan and `CapExInvestmentID` | Confidential | Native EPM features; internal analytics | External AI tools without approved DPA | Capital Planning Mgr |
| Workforce compensation assumptions | Restricted / sensitive | HR-approved tools only; no general-purpose AI | General LLM processing of individual salaries, benefits, grades | Workforce Planning Mgr |
| Project budgets and actuals | Confidential | EPM native; Narrative Reporting | Export to unapproved AI tools | Project Finance Lead |
| Variance narrative drafts | Internal | AI drafting with owner review and approval before publish | Publish AI narrative without human review | FP&A Director |
| Budgetary Control exceptions | Confidential | Internal dashboards only | External AI without security review | Controllership |

---

## 5) AI Use-Case Intake and Risk Tiering

### 5.1 Intake trigger
Any of the following requires AI use-case intake before first use:

- Using an AI tool to generate, adjust, or summarize any plan version or forecast.
- Using an AI tool that processes EPM Planning data outside the Oracle tenant.
- Enabling a new Oracle EPM AI feature not previously assessed.
- Piloting an agentic workflow that interacts with EPM Planning forms, workflows, or data-push jobs.

### 5.2 Intake routing

| Risk tier | Criteria | Approver |
|---|---|---|
| Low | Permitted category; no sensitive data; no plan-version impact | FP&A Director |
| Medium | Restricted category; involves planning data; advisory output only | FP&A Director + Controllership |
| High | High-risk or agentic category; involves compensation or capital data | FP&A Director + IT Security + Controllership |
| Prohibited | Matches prohibited list in §3 | Not approvable |

### 5.3 Intake record (minimum fields)

| Field | Required |
|---|---|
| Use case description | Yes |
| Safe-use category | Yes |
| Planning data involved | Yes |
| Human review gate | Yes |
| Evidence retention plan | Yes |
| Approver and date | Yes |

---

## 6) AI Risk and Control Mapping

| AI risk | Category | Control | Owner |
|---|---|---|---|
| AI-generated plan version published as Approved Budget | Prohibited | Approval workflow enforced per EPM-6; AI output must not substitute approved version | FP&A Director |
| AI-assisted variance narrative published without review | High risk | Human review and sign-off required per §4; evidence retained | Budget Manager |
| External AI tool processes compensation data | Restricted / High | Data-handling approval required; restricted to HR-approved tools | Workforce Planning Mgr |
| AI forecast deviates materially from approved methodology | Restricted | Predictive output treated as advisory; reconciled to approved driver assumptions | Budget Manager |
| Oracle EPM new AI feature enabled without assessment | High | Feature enablement requires AI intake and risk review per SOP-01 | EPM Service Admin |
| Agentic workflow triggers data push or period lock | Agentic | Agent readiness review required; human approval gate before lock | FP&A Director |
| AI prompt includes budget or investment data in external LLM | High | Data-handling approval; DPA required for external services | Controllership |

---

## 7) Human Review Requirements

| AI activity | Minimum review | Reviewer | Evidence |
|---|---|---|---|
| Oracle predictive planning output used in forecast | Owner review before version adoption | Budget Manager | Review sign-off |
| AI-drafted variance or budget narrative | Named reviewer approves before publication | FP&A Director or delegate | Approved draft with attribution |
| AI-assisted Capital planning assumption suggestion | Capital Planning Manager reviews before inclusion | Capital Planning Mgr | Review record |
| EPM Digital Assistant query producing KPI data | Verify against native form or certified report | Report user | None required unless result published |
| AI-assisted Budget Revision narrative | Controllership reviews before submission | Controllership | Sign-off record |

---

## 8) Monitoring and Recertification

| Activity | Cadence | Owner |
|---|---|---|
| Inventory of approved AI tools and use cases | Quarterly | FP&A Director + IT Security |
| Oracle EPM release AI feature assessment | Per Oracle release | EPM Service Administrator |
| Review AI-assisted narrative for attribution and accuracy | Per reporting cycle | Budget Manager |
| Recertify restricted or high-risk use cases | Annually | FP&A Director + Controllership |
| Incident review: AI output published without review | Per incident | FP&A Director + Internal Audit |

---

## 9) Agent Readiness (Pre-conditions)

AI agents that can initiate multi-step actions in EPM Planning (e.g., load data, trigger calculations, submit revisions) are **not approved** until all of the following are met:

- [ ] Agent scope and blocked actions are defined.
- [ ] Human approval gate exists before period lock, Budgetary Control submission, or data push.
- [ ] Agent access is limited to approved plan versions and forms; no access to compensation detail or Capital investment IDs outside defined scope.
- [ ] Logs and evidence capture are confirmed.
- [ ] Incident-handling and recertification cadence are defined.
- [ ] FP&A Director + Controllership approve agent readiness record.

---

## 10) Evidence Retention

| Evidence | Minimum retention | Owner |
|---|---|---|
| AI intake record | 3 years | FP&A Director |
| AI-assisted narrative draft and sign-off | 7 years (matches plan record) | Budget Manager |
| Oracle AI feature assessment record | Life of feature + 3 years | EPM Service Administrator |
| AI incident record | 7 years | FP&A Director |

---

## 11) Open Decisions

| Decision | Owner | Required before |
|---|---|---|
| Approved AI tool list for EPM Planning users | IT Security + FP&A Director | Any restricted use |
| Oracle predictive planning features active in tenant | EPM Service Administrator | AI feature assessment |
| Whether external AI tools retain EPM data or use it for training | IT Security + Controllership | Any high-risk use |
| Agent readiness scope, if any agentic pilot is pursued | FP&A Director | Agent pilot |

---

## 12) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-27 | Initial EPM Planning Modules AI governance package | FP&A Director |
