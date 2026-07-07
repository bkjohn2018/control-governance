# Governance Package: Oracle Fusion Cloud Project Management 26B - Governed AI

> Companion files:
> - `01-controlled-operations.md`
> - `02-governed-data-and-analytics.md`
>
> Source anchors:
> - *Using Project Execution Management 26B* (Oracle Digital Assistant for Project Management)
> - *Creating and Administering Analytics and Reports for Project Management 26B*
> - Oracle Analytics Cloud AI Assistant / AI Agent when used with governed project analytics content

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Fusion Cloud Project Management 26B - AI and assistant governance |
| Governance objective | Ensure native and nonnative AI uses in project operations are bounded, reviewable, and aligned to project ownership, issue governance, and reporting controls |
| Primary audience | Project Manager, Project Executive, Project Administrator, PMO, Security / Privacy, Internal Audit |
| Reference pattern | Domain-bounded AI safe use anchored to project execution controls, governed project analytics, and Oracle Digital Assistant capabilities evidenced in the 26B guide |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Practical and control-aware, with explicit permission and action boundaries |
| Non-goals | Delegating final project governance decisions to AI or replacing project-manager accountability |

---

## 1) Executive Summary

**Context.** Oracle 26B explicitly includes `Oracle Digital Assistant for Project Management`, allowing project managers and team members to view and update projects, tasks, deliverables, issues, and action items. Oracle Analytics Cloud also adds analytics-layer AI capabilities such as AI Assistant and AI Agents over governed analytics content. Together, these capabilities create real productivity value, but they also create governance risk if permissions, ownership, evidence, and approved data boundaries are unclear.

**What this package does.** It defines the project AI and assistant safe-use posture, intake workflow, risk and control mapping, native Digital Assistant baseline, bounded-agent expectations, and monitoring requirements.

**What is ready.** An initial governance baseline for Oracle Digital Assistant intents plus broader project AI use cases such as drafting commentary or summarizing project issues.

**What remains.** Tenant-specific enablement decisions, approved-channel list, and role-based rollout criteria.

**What we ask of leadership.**
1. Endorse the safe-use policy for Oracle Digital Assistant and other project AI uses.
2. Approve the initial decision posture for assistant actions.
3. Require intake and review before broader AI or agentic use in project workflows.

---

## 2) Scope, Source Anchors, and Non-Goals

### 2.1 In scope
- Oracle Digital Assistant capabilities evidenced in the 26B execution guide.
- AI-assisted drafting, summarization, and reporting support for project work, including OAC AI interaction over approved project dashboards or workbooks.
- Bounded agents that summarize project information or stage draft issue / action-item content.

### 2.2 Out of scope
- Autonomous project approval, uncontrolled change-order approval, or AI replacing named owners.
- Unapproved use of external AI tools with restricted project, financial, or personnel data.

### 2.3 Oracle-native assistant evidence
The 26B execution guide explicitly documents Oracle Digital Assistant support for:
- viewing project status and financial summaries,
- listing and updating tasks,
- listing and updating deliverables,
- listing issues,
- creating issues and action items.

The same guide notes that:
- skill enablement is controlled by the project application administrator,
- existing functional privileges secure intents,
- supported channels are SMS and mobile app,
- English is the supported language.

---

## 3) Projects AI Safe Use Policy

### 3.1 Use categories

| Category | Description | Projects examples | Approval needed |
|---|---|---|---|
| **Permitted** | Low-risk assistive use with no restricted project data and no final governance action | Draft training text, summarize public Oracle docs, draft meeting notes | Standing approval if tool is approved |
| **Restricted** | Uses project status, issue, resource, or performance outputs to support recurring work | Draft project-status commentary, summarize issue trends, summarize task backlog, use OAC AI Assistant over approved project dashboards | Project Manager + Governance Reviewer |
| **High Risk** | Affects issue ownership, change governance, staffing, or financial interpretation | Drafting executive variance commentary, AI support for change-order reasoning, sensitive resource commentary, OAC AI analysis over restricted project financial content | Project Executive + Security / Privacy + Governance Reviewer |
| **Agentic** | Uses assistant or agent workflow to retrieve records or stage actions | Oracle Digital Assistant issue creation, task status update, deliverable status update, bounded project agent creating draft follow-ups, OAC AI Agent over approved project analytics content | Project Executive approval plus readiness review |
| **Prohibited** | Bypasses named owner accountability or executes unauthorized governance decisions | Autonomous approval of change orders, autonomous reassignment of owners, uncontrolled external communication, unsupported project financial commitments | Not allowed |

### 3.2 Data handling rules
- Public Oracle documentation may be summarized freely inside approved tools.
- Internal project plans, issues, resource data, and project financial outputs require approved tools and reviewers.
- Project financial, contract, or personnel-sensitive data requires least-privilege handling and may need security / privacy review.
- AI output cannot be sole evidence for project governance decisions.

### 3.3 Human accountability
- Project Managers remain accountable for project status, task ownership, issues, and action-item governance.
- Project Executives remain accountable for material change, escalation, and governance decisions.
- AI or Oracle Digital Assistant may support actions only within the permissions and boundaries already approved in Oracle.

---

## 4) AI Use Case Intake Workflow

Every project AI use case shall capture:
- business purpose and expected benefit,
- users and channels,
- feature or tool used,
- data involved and sensitivity,
- process or decision impact,
- human reviewer,
- retained evidence,
- risk tier and routing decision.

Decision outcomes: allow low-risk use, approve with conditions, require high-risk review, approve agent use (bounded scope), or reject.

---

## 5) Oracle Digital Assistant and Project AI Inventory

| ID | Capability / use case | Typical user | Output / action | Tier |
|---|---|---|---|---|
| AI-PM-01 | Show my projects | Project Manager | View project summary and financial highlights | Restricted |
| AI-PM-02 | List my project tasks | Team Member | View owned task list | Restricted |
| AI-PM-03 | Update my project tasks | Team Member / Project Manager | Mark task started or completed | Agentic |
| AI-PM-04 | List my deliverables | Deliverable Owner | View deliverable list | Restricted |
| AI-PM-05 | Update my deliverables | Deliverable Owner | Mark deliverable started or completed | Agentic |
| AI-PM-06 | List my issues | Issue Owner | View open issue list | Restricted |
| AI-PM-07 | Create issues and action items | Project Manager | Create issue or action item | Agentic |
| AI-PM-08 | Draft project commentary from approved dashboards | Project Manager / PMO | Draft narrative | Restricted |
| AI-PM-09 | OAC AI Assistant over approved project dashboards / workbooks | Project Manager / PMO | Interactive insight / answer | Restricted |
| AI-PM-10 | OAC AI Agent summarizing approved project analytics content | PMO / Project Executive reviewer | Draft insight or follow-up content | Agentic |

---

## 6) Risk and Control Mapping

| AI risk | Impact | Control objective | Control activity | Owner | Reviewer | Evidence |
|---|---|---|---|---|---|---|
| Assistant action exceeds intended permissions | Unauthorized task / issue / deliverable update | Existing Oracle permissions must remain the first control boundary | Role-based enablement and administrator review | Project Administrator | Project Executive | Role / enablement record |
| AI-generated commentary misstates project status | Poor executive decisions | Commentary must use approved dashboards and current data | Require Project Manager review before distribution | Project Manager | Project Executive | Review signoff |
| OAC AI query or agent uses unapproved project content | Data exposure or unsupported interpretation | Only certified OAC content may be queried through AI features | OAC content certification and access review | Project Administrator | Governance Reviewer | Certification record |
| Sensitive project or personnel data enters unapproved tool | Data exposure | Restricted data only used in approved tools and channels | Intake and sensitivity classification | Project Manager | Security / Privacy | Intake record |
| Issue or action-item creation causes noise or weak ownership | Workflow degradation | Agentic creation must remain attributable and reviewable | Require named owner review and logging | Project Manager | Governance Reviewer | Creation log |
| Change-governance decision relies on unsupported AI output | Unapproved scope or financial impact | Material change decisions remain human-owned | High-risk approval and documented evidence review | Project Executive | Governance Reviewer | Approval record |

---

## 7) Bounded Agent Readiness Assessment (Projects)

### Allowed examples
- Summarize approved project dashboards for review.
- Retrieve owned task or issue status.
- Prepare draft follow-up items or action-item summaries.
- Use Oracle Digital Assistant intents already secured by Oracle roles and enabled skills.

### Blocked actions
- Approve change orders or baseline changes.
- Reassign ownership without human approval.
- Commit financial or contractual obligations.
- Send external stakeholder messages without review.

### Minimum readiness checks
- named business owner and approver,
- defined channels and supported users,
- role-based permission review,
- retained logs of actions and responses,
- misuse and recovery testing,
- periodic recertification.

---

## 8) Decision Posture by Capability

| Capability | Default posture | Notes |
|---|---|---|
| View-only project / issue / deliverable intents | Approve with standard controls | Requires approved skill enablement and privileges |
| Task or deliverable status updates | Approve with conditions | Ownership and role checks required |
| Issue and action-item creation | Approve with conditions | Owner attribution and review required |
| AI-generated project commentary | Restricted | Approved dashboards only |
| OAC AI Assistant over approved project content | Restricted | Certified OAC content only |
| Any AI support for change-governance decisions | High Risk | Human approval mandatory |

---

## 9) Monitoring, Metrics, and Recertification

- Review enabled assistant skills and use cases at least quarterly.
- Reassess after role changes, channel changes, or new assistant intents.
- Track:
  - number of enabled project assistant capabilities,
  - number of incorrect or reversed assistant updates,
  - number of issues created via assistant and later rejected,
  - number of high-risk AI use cases approved.

---

## 10) Incident Management (AI-specific)

Escalate and log:
- incorrect task or deliverable status changes,
- issue or action-item ownership errors,
- inappropriate exposure of restricted project data,
- assistant enablement beyond approved roles,
- misleading AI-generated project commentary used in governance review.

---

## 11) Adoption and Training Notes

- Train project managers and team members on what Oracle Digital Assistant can and cannot do.
- Make ownership and review rules explicit for issue creation and status updates.
- Start with approved native assistant capabilities before any broader agentic use.

---

## 12) Deck Outline - Projects AI Governance Briefing

1. Native Oracle Digital Assistant capabilities in 26B
2. Safe-use tiers and permission boundaries
3. Intake and approval model
4. Risks, controls, and bounded-agent expectations
5. Monitoring, incidents, and rollout decisions

---

## 13) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-05-25 | Initial Projects governed AI package created with Oracle Digital Assistant baseline | Project Manager |
