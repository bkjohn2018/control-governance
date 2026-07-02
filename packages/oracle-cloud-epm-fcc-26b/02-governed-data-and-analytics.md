# Governance Package: Oracle Cloud EPM Financial Consolidation and Close — Governed Data and Analytics

> Companion files:
> - `01-controlled-operations.md`
> - `03-governed-ai.md`
>
> Source anchors:
> - [Financial Consolidation and Close Overview](https://docs.oracle.com/en/cloud/saas/financial-consolidation-cloud/agfcc/overview.html)
> - [Consolidation, Supplemental Data, and Enterprise Journals Features](https://docs.oracle.com/en/cloud/saas/financial-consolidation-cloud/agfcc/app_enable_consol_and_sdm.html)
> - *Administering Financial Consolidation and Close*

---

## 0) Bundle Inputs

| Item | Value |
|---|---|
| Domain | Oracle Cloud EPM Financial Consolidation and Close — data and analytics layer |
| Consumption surfaces | Native FCC dashboards, Financial Dashboards, forms, reports, infolets, Smart View, Narrative Reporting integration, Oracle Analytics Cloud (OAC) dashboards / workbooks / semantic models |
| Governance objective | Establish trusted, traceable, and controlled consolidation metrics, close monitoring, entity submission visibility, and consolidated reporting |
| Primary audience | Consolidation Manager, Financial Reporting Manager, Consolidation Accountant, Entity Controller, Corporate Controller, EPM Service Administrator, Internal Audit |
| Reference pattern | Oracle-first analytics governance using native FCC reporting surfaces before custom extension |
| Maturity (current -> target) | Foundational -> Defined |
| Tone | Consolidation- and close-reporting focused, with explicit metric-governance language |
| Non-goals | Replacing statutory filing systems, building an external consolidation data mart by default, or redefining consolidation accounting policy outside approved metric governance |

---

## 1) Executive Summary

**Context.** FCC provides native dashboarding, Financial Dashboards, predefined dimensions, forms, reports, and Task Manager monitoring for consolidation and close. Governance is still needed to prevent uncontrolled custom logic, stale close dashboards, inconsistent entity metrics, or unapproved extracts from becoming the de facto consolidation reporting layer. When governed FCC content is consumed in OAC, the same approved metric, drill-path, access, and change-control rules still apply.

**What this package does.** It defines the FCC data and analytics governance layer: native-first reporting, canonical consolidation terms, KPI catalog, DQ controls, lineage expectations, issue management, and access rules for consolidation, close, journal, and supplemental data reporting.

**What is ready.** Native FCC dashboards, forms, and Task Manager views can support a strong baseline for consolidation status, entity submission, close task aging, and journal backlog monitoring with limited extension.

**What remains.** Tenant-specific dashboard catalog structure, threshold calibration, and any approved custom report or OAC semantic logic.

**What we ask of leadership.**
1. Endorse the KPI catalog in Section 7 as the approved FCC monitoring baseline.
2. Require native FCC dashboard and report assessment before custom consolidation analytics are approved.
3. Confirm ownership for close monitoring, report stewardship, and exception dashboards.

---

## 2) Scope, Objectives, and Non-Goals

### 2.1 In scope
- Consolidation status, entity submission, translation, elimination, and cash flow reporting.
- Consolidation journal and supplemental data monitoring.
- Task Manager close dashboards, schedule status, and overdue-task analytics.
- Native forms, Financial Dashboards, reports, Smart View, OAC content built on governed FCC outputs.
- Approved report extensions and dashboard logic for consolidation monitoring.

### 2.2 Out of scope
- Detailed subledger operational analytics outside entity submission use.
- External consolidation or disclosure production systems beyond governed FCC outputs.
- Unapproved spreadsheet exports used as shadow consolidation ledgers.

### 2.3 Objectives
1. Single canonical definition for each FCC governance KPI.
2. Explicit ownership and stewardship for governed FCC reports and metrics.
3. Defined drill path from consolidated totals to entity or journal detail where applicable.
4. DQ and reconciliation checks for control-sensitive consolidation analytics.
5. Native-first discipline before building custom consolidation reporting.

---

## 3) Data Governance Operating Framework

### 3.1 Governance bodies

| Body | Mandate | Chair | Cadence |
|---|---|---|---|
| **FCC Analytics Review Forum** | Approve KPI definitions, thresholds, and exceptions | Consolidation Manager | Monthly |
| **Consolidation and Close Review** | Review consolidation exceptions, close blockers, and report readiness | Corporate Controller delegate | Per close |
| **EPM Reporting Steward Session** | Maintain lineage, foldering, and access approvals | EPM Service Administrator | Monthly |

### 3.2 Domain ownership

| Data domain | Business owner | Steward | Technical custodian |
|---|---|---|---|
| Consolidation status reporting | Consolidation Manager | Consolidation Accountant | EPM Service Administrator |
| Entity submission reporting | Consolidation Manager | Entity Controller | EPM Service Administrator |
| Journal reporting | Consolidation Manager | Consolidation Accountant | EPM Service Administrator |
| Supplemental data reporting | Financial Reporting Manager | Entity Controller | EPM Service Administrator |
| Close task reporting | Consolidation Manager | Consolidation Accountant | EPM Service Administrator |

---

## 4) Policy Addendum — FCC Data and Analytics

1. **DA-FCC-1 Authoritative source.** Oracle Cloud EPM Financial Consolidation and Close remains authoritative for consolidation calculations, approved forms, dashboards, and governed close monitoring within the application.
2. **DA-FCC-2 Native first.** Native FCC dashboards, Financial Dashboards, forms, and reports shall be assessed before custom consolidation dashboards, extracts, or OAC models are approved.
3. **DA-FCC-3 Canonical metrics.** FCC monitoring metrics shall use approved definitions in Section 7.
4. **DA-FCC-4 Controlled drill paths.** Consolidation dashboards that drill to entity, journal, or supplemental detail shall use approved dimensions, members, and documented filters.
5. **DA-FCC-5 Controlled OAC content.** OAC workbooks, dashboards, and semantic-layer content using FCC data shall inherit the same metric, drill-path, access, and retention controls as the source Oracle reporting assets.
6. **DA-FCC-6 Controlled extracts.** FCC extracts outside Oracle require approved purpose, owner, refresh, retention, and access controls.
7. **DA-FCC-7 Consolidation integrity.** Consolidation views shall preserve source-to-output traceability through the Consolidation dimension, Data Source dimension, and approved calculation logic.
8. **DA-FCC-8 Change control.** Form logic, report definitions, dashboard filters, OAC semantic logic, and thresholds shall be versioned and approved.

---

## 5) Question-Driven Anchoring

| # | Business question | Decision supported |
|---|---|---|
| Q1 | Which entities have not submitted complete data for the period? | Consolidation readiness |
| Q2 | Did translation, consolidation, and elimination run successfully? | Consolidation execution |
| Q3 | What consolidation journal backlog remains unapproved or unposted? | Adjustment control |
| Q4 | What supplemental data forms remain incomplete or unreconciled? | Disclosure readiness |
| Q5 | Which close tasks are overdue or blocked? | Close execution |
| Q6 | What consolidation exceptions require management review? | Escalation and signoff |
| Q7 | Are native FCC reports sufficient, or is a governed extension justified? | Native-first decision |

---

## 6) Business Glossary (FCC Canonical Terms)

| Term | Definition | Owner | Steward | Approved synonyms | Disallowed synonyms |
|---|---|---|---|---|---|
| Consolidation Application | FCC application containing dimensions, entities, scenarios, and consolidation logic | Consolidation Manager | EPM Service Administrator | FCC application | "Cube" when referring to the whole application |
| Entity | Organizational unit represented in the consolidation hierarchy | Consolidation Manager | Entity Controller | Legal entity / reporting unit | "Company" without hierarchy context |
| Scenario | Time or reporting context such as Actual, Budget, or Forecast | Consolidation Manager | Consolidation Accountant | Reporting scenario | "Version" when scenario-specific meaning is required |
| Consolidation Dimension | Dimension used to track consolidation stages and audit consolidation flow | Consolidation Manager | Consolidation Accountant | Consolidation member set | "Stage" without dimension qualifier |
| Data Source | Dimension tracking origin of data such as input, journals, or supplemental data | Consolidation Manager | Consolidation Accountant | Source member | "System" when source member is meant |
| Consolidation Journal | Manual or loaded adjustment posted through FCC journal process | Consolidation Manager | Consolidation Accountant | Journal adjustment | "JE" without consolidation qualifier |
| Supplemental Data | Supporting detail collected for disclosures and analytics outside core cube input | Financial Reporting Manager | Entity Controller | SDM data | "Footnote data" without process context |
| Task Manager Schedule | Close schedule containing dependent tasks for a business process | Consolidation Manager | Consolidation Accountant | Close schedule | "Workflow" when Task Manager schedule is meant |
| Schedule Status | Pending, Open, Closed, or Locked state of a Task Manager schedule | Consolidation Manager | Consolidation Accountant | Close schedule status | "Period status" |
| Consolidation Exception | Failed rule, rejected load, or unresolved variance blocking signoff | Consolidation Manager | Consolidation Accountant | Consolidation break | "Error" without business impact |

---

## 7) Metric Definitions (Governed KPI Catalog)

### KPI-01 — Entity Submission Completeness
- **Question:** Q1
- **Formula:** Submitted entities / total in-scope entities for the period.
- **Source:** Entity submission dashboards or approved entity status report.
- **Owner / Steward:** Consolidation Manager / Entity Controller.
- **Threshold:** 100% required before final consolidation signoff unless approved exception exists.

### KPI-02 — Data Load Rejection Rate
- **Question:** Q1
- **Formula:** Rejected load records / total load records for the period.
- **Source:** Data Integration validation report.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Above approved tolerance triggers remediation before consolidation rerun.

### KPI-03 — Consolidation Run Success Rate
- **Question:** Q2
- **Formula:** Successful consolidation jobs / total scheduled or required consolidation jobs.
- **Source:** Job monitor and consolidation run log.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Any failed close-critical run escalates same day.

### KPI-04 — Consolidation Exception Count
- **Question:** Q6
- **Formula:** Open consolidation, translation, or elimination exceptions above tolerance.
- **Source:** Financial Dashboards and exception review log.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Material unresolved exceptions block period lock.

### KPI-05 — Unapproved Consolidation Journal Backlog
- **Question:** Q3
- **Formula:** Count and amount of journals awaiting required approval.
- **Source:** FCC Journals module.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Period-end backlog above tolerance escalates to controller review.

### KPI-06 — Unposted Consolidation Journal Backlog
- **Question:** Q3
- **Formula:** Count and amount of approved journals not yet posted.
- **Source:** FCC Journals module.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Any material aged backlog during close escalates.

### KPI-07 — Supplemental Data Completion Rate
- **Question:** Q4
- **Formula:** Approved supplemental forms / required supplemental forms for the period.
- **Source:** Supplemental Data Manager status reporting.
- **Owner / Steward:** Financial Reporting Manager / Entity Controller.
- **Threshold:** Incomplete required forms block disclosure signoff.

### KPI-08 — Overdue Close Task Count
- **Question:** Q5
- **Formula:** Open tasks past due date in active close schedule.
- **Source:** Task Manager dashboards and overdue task report.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Any overdue critical-path task escalates daily during close.

### KPI-09 — Close Schedule Completion Rate
- **Question:** Q5
- **Formula:** Completed tasks / total tasks in active schedule.
- **Source:** Task Manager schedule dashboard.
- **Owner / Steward:** Consolidation Manager / Consolidation Accountant.
- **Threshold:** Monitored daily; target completion by approved close calendar.

### KPI-10 — FCC Report Failure / Staleness Rate
- **Question:** Q7
- **Formula:** Failed or stale governed FCC reports / total scheduled governed FCC reports.
- **Source:** Report run monitoring and steward log.
- **Owner / Steward:** EPM Service Administrator / Report Steward.
- **Threshold:** Any close-critical failure escalates same day.

---

## 8) Data Quality Controls

| ID | Rule | Critical data | Threshold | Owner | Evidence |
|---|---|---|---|---|---|
| DQ-01 | Entity and scenario filters are correctly applied in governed reports | Entity, scenario, period | 100% approved filter logic | Consolidation Accountant | Report design review |
| DQ-02 | Consolidation dimension logic matches approved consolidation stage design | Consolidation members | 100% approved | Consolidation Manager | Design record |
| DQ-03 | Data Source members correctly distinguish input, journal, and supplemental data | Data Source | 100% approved mapping | Consolidation Accountant | Validation report |
| DQ-04 | Load totals reconcile to approved source or entity submission totals | Amounts / counts | Within approved tolerance | Consolidation Accountant | Reconciliation record |
| DQ-05 | Journal status logic is consistent with workflow configuration | Journal status | 100% for governed backlog reporting | Consolidation Manager | Workflow reconciliation |
| DQ-06 | Supplemental data period status aligns with collection calendar | Period status | 100% approved | Financial Reporting Manager | Period review log |
| DQ-07 | Task Manager overdue logic uses approved due dates and schedule status | Task due date, status | 100% approved logic | Consolidation Manager | Dashboard test evidence |
| DQ-08 | Custom report or OAC extracts reconcile to approved native FCC totals | Counts / amounts | Within approved tolerance | Consolidation Manager | Reconciliation record |

---

## 9) Metadata and Lineage

### 9.1 Required metadata
- Business purpose and decision use.
- Owner, steward, and technical custodian.
- Source form, dashboard, report, or cube intersection.
- Refresh / run cadence and close criticality.
- Parameters, thresholds, and approved filters.
- Review date and change history.

### 9.2 Approved native surfaces
- Financial Dashboards
- Native FCC dashboards and infolets
- Approved forms and reports
- Task Manager dashboards and schedule views
- Supplemental Data Manager status and form views
- Smart View for approved FCC and supplemental data content
- OAC dashboards / workbooks built on governed FCC semantic exports

### 9.3 Lineage pattern
Source entity data or approved load -> consolidation rules / journals / supplemental data -> governed metric logic -> dashboard or report -> close review or management action.

---

## 10) Data Issue Management

1. Log issue with affected report, metric, scenario, period, and entity.
2. Assess whether consolidation, close, journal, or disclosure decisions are impacted.
3. Contain by flagging the report or pausing distribution if material.
4. Remediate and revalidate before closure.

---

## 11) Sensitive Data and Access Controls

- Access to consolidation reporting follows least privilege and approved FCC security roles.
- Report folders, forms, and distribution lists must align to approved financial reporting access.
- Extracts used outside Oracle require explicit owner, retention, and storage approval.

---

## 12) Adoption and Training Notes

- Train users on the difference between entity input, journal adjustments, and supplemental data in the Data Source dimension.
- Publish approved drill-path and parameter guidance for close-critical dashboards.
- Review dashboard and report catalog structure at least annually.

---

## 13) Deck Outline — FCC Data and Analytics Briefing

1. Oracle-first reporting posture for consolidation and close
2. Canonical KPI and glossary baseline
3. Approved reporting surfaces and drill paths
4. DQ and reconciliation controls
5. Access, extracts, and report-governance decisions

---

## 14) Version History

| Version | Date | Change summary | Owner |
|---|---|---|---|
| 1.0 | 2026-06-20 | Initial FCC governed data and analytics package created from Oracle Cloud EPM FCC source anchors | Consolidation Manager |
