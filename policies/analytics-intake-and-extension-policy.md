# Analytics Intake and Extension Policy

## 1) Purpose
This policy defines how analytics, dashboards, reports, extracts, semantic models, and data extensions are requested, evaluated, approved, governed, and maintained for Oracle process areas.

The policy establishes an **Oracle-first** approach: native Oracle reporting, inquiry, workflow, audit, and system capabilities must be assessed before custom analytics, extracts, replicated datasets, or downstream reporting solutions are approved.

The intent is to preserve the Oracle system of record, reduce unnecessary data duplication, prevent uncontrolled reporting sprawl, and ensure that approved analytics extensions are governed, traceable, secure, and decision-useful.

## 2) Scope
### In Scope
- Oracle Financials, supply chain, HR, procurement, projects, and related process areas where Oracle is the system of record.
- Requests for dashboards, custom reports, data extracts, semantic models, data marts, spreadsheets, API feeds, and analytics datasets.
- Analytics supporting finance, operations, controls, compliance, audit, management reporting, and executive decision-making.
- Requests to reuse, replicate, transform, export, or combine Oracle data with other data sources.

### Out of Scope
- Routine use of approved native Oracle reports with existing access and standard parameters.
- One-time user analysis that does not create a recurring report, dataset, extract, control artifact, or management metric.
- System configuration changes governed by separate Oracle change-management procedures, unless they affect reporting, metrics, extracts, or governed data use.

## 3) Policy Principles
1. **Oracle first**: Native Oracle capabilities must be assessed before custom analytics or data extensions are approved.
2. **Process before analytics**: Analytics supports process execution and decision-making; it does not replace process ownership, control operation, or system-of-record accountability.
3. **System of record preserved**: Oracle remains the authoritative source for Oracle-owned transactions, balances, workflow evidence, and standard process records unless a formally approved exception exists.
4. **No uncontrolled decoupling**: Oracle data must not be copied, transformed, or redistributed into unmanaged spreadsheets, databases, extracts, or dashboards without approved governance controls.
5. **Documented gap required**: Custom analytics may proceed only when native capability cannot meet a defined business, control, compliance, reconciliation, or decision need.
6. **Governed extension**: Approved extensions must have owner, steward, source lineage, refresh cadence, quality checks, access controls, retention rules, and change control.
7. **Evidence and auditability**: Analytics used for controls, reporting, compliance, or leadership decisions must be traceable to source records and reproducible from approved logic.

## 4) Required Intake Information
Every analytics or extension request must include:

| Intake field | Required information |
|---|---|
| Request name | Short title of the requested report, dashboard, extract, metric, or model |
| Business question | Decision, control, reconciliation, compliance, or operational question being answered |
| Process area | Oracle module, process, and process owner |
| Intended users | Primary audience and user roles |
| Frequency | One-time, daily, weekly, monthly, quarterly, event-driven |
| Native capability reviewed | Oracle reports, inquiries, dashboards, workflows, audit logs, or scheduled processes assessed |
| Native gap | Why native capability does not satisfy the need |
| Source data | Oracle tables/views/reports/process outputs and any non-Oracle sources |
| Metrics or fields | Requested measures, dimensions, filters, grain, thresholds, and definitions |
| Sensitivity | Confidential, restricted, PII, supplier, bank, payroll, tax, payment, or other sensitive data |
| Control relevance | Whether output supports financial reporting, compliance, reconciliation, audit, or control evidence |
| Delivery type | Native report, configured report, custom dashboard, extract, semantic model, data mart, API/feed |
| Owner and steward | Accountable business owner and day-to-day data/report steward |
| Expected retention | How long output, evidence, extracts, and versions must be retained |

## 5) Native-First Assessment
Before custom analytics or data extensions are approved, the requester and process owner must complete a native capability assessment.

### Native capabilities to assess
- Oracle predefined reports
- Reports and Analytics work area content
- Scheduled Processes outputs
- Oracle transactional inquiry pages
- Workflow history and approval evidence
- Audit logs and change history
- Standard dashboards, infolets, OTBI subject areas, and seeded analytics where available
- Standard Oracle exports or integrations already governed by IT or data governance

### Assessment criteria
| Criteria | Assessment question |
|---|---|
| Fit to question | Does native capability answer the business/control question? |
| Scope | Does it include the needed business units, ledgers, suppliers, transactions, periods, or users? |
| Grain | Is the detail level appropriate: transaction, line, supplier, payment, period, metric, or aggregate? |
| Timeliness | Is the data available at the required cadence? |
| Parameters | Can standard parameters produce the needed population? |
| Evidence value | Can the output support review, reconciliation, audit, or control evidence? |
| Access control | Can access be managed through Oracle roles or approved security groups? |
| Export risk | Does use require data extraction outside Oracle? |
| Usability | Can users interpret and apply the native output with reasonable training? |
| Limitation | What specific gap remains after native capability is assessed? |

## 6) Extension Decision Standard
### Approved paths
Requests must be routed to one of these outcomes:

| Decision | Meaning | Governance requirement |
|---|---|---|
| Use native capability | Native Oracle capability meets the need | Document report/inquiry name, owner, parameters, and usage guidance |
| Configure native capability | Native capability works with parameter, schedule, layout, or access refinement | Document configuration and owner; retain change evidence |
| Governed extension approved | Native gap is material and extension is justified | Complete metric, lineage, quality, security/privacy, and lifecycle controls |
| Conditional approval | Extension can proceed after remediation or additional controls | Track conditions, owner, due date, and approval authority |
| Rejected / deferred | Need is duplicate, unsupported, unclear, too risky, or not worth cost | Document rationale and alternative |

### Extension approval criteria
Custom analytics, extracts, dashboards, semantic models, or data marts may be approved only when:
- Native capability assessment is complete.
- A material native gap is documented.
- The use case supports a defined process, decision, control, reconciliation, compliance, or management review need.
- Oracle remains the authoritative source for Oracle-owned data.
- Source lineage from Oracle to the output is documented.
- Metric definitions, grain, filters, and business rules are approved.
- Data quality checks are defined for critical fields and calculations.
- Access, privacy, extract/download, and retention controls are approved.
- The extension owner and steward are named.
- Change control and periodic review are defined.

## 7) Decoupling Controls
Oracle data must not be decoupled from the system of record without explicit approval.

### Prohibited without approval
- Recurring manual exports used as unofficial databases.
- Personal or team spreadsheets that become operational reporting sources.
- Replicated Oracle data stores without owner, lineage, refresh, quality, and access controls.
- Custom dashboards that redefine Oracle metrics without approved metric governance.
- Extracts containing sensitive data without security/privacy review.
- Downstream transformations that obscure source transactions or approval evidence.
- Reports that bypass native control evidence, reconciliation reports, or workflow history.

### Required controls for approved decoupling
| Control area | Requirement |
|---|---|
| Ownership | Business owner and technical steward must be named |
| Lineage | Source-to-output lineage must identify Oracle source, transformations, and downstream consumers |
| Reconciliation | Output must reconcile to Oracle-native reports or documented authoritative totals where applicable |
| Refresh | Refresh cadence, latency, failure handling, and monitoring must be defined |
| Quality | Completeness, validity, consistency, timeliness, and uniqueness checks must be documented |
| Security | Access must follow least privilege and be reviewed periodically |
| Privacy | PII/sensitive data must have purpose, minimization, masking, sharing, and retention controls |
| Retention | Extracts, outputs, and evidence must follow approved retention requirements |
| Change control | Formula, source, transformation, access, or distribution changes must be logged and approved |

## 8) Roles and Accountability
| Role | Accountability |
|---|---|
| Requester | Defines business need, intended use, and required decision/action |
| Process Owner | Confirms process relevance, native capability fit, and operational impact |
| Data Owner | Approves use of data and confirms authoritative source expectations |
| Metric Owner | Approves metric definitions, formulas, thresholds, and grain |
| Data Steward / Report Steward | Maintains metadata, lineage, quality checks, and usage guidance |
| Security/Privacy Reviewer | Reviews access, sensitive data handling, extracts, sharing, and retention |
| Governance Reviewer | Confirms intake completeness, decision record, and policy compliance |
| IT / Analytics Delivery Owner | Builds or configures approved extension according to governed requirements |

## 9) Evidence Requirements
Each approved extension must retain:
- Completed intake request.
- Native capability assessment.
- Decision record and approval.
- Business requirements and acceptance criteria.
- Metric definitions and approved formulas.
- Source lineage and transformation logic.
- Data quality checks and threshold rules.
- Security/privacy review.
- Access approval and review cadence.
- Change log.
- User guidance or operating procedure.
- Retirement or review date.

## 10) Exceptions
Exceptions to this policy require documented approval.

### Exception record must include
- Exception requested.
- Business justification.
- Native capability assessed.
- Risk accepted.
- Compensating controls.
- Data sensitivity.
- Approver.
- Expiration date.
- Required follow-up action.

Emergency exceptions must be time-bound and reviewed after use. Exceptions involving financial reporting, audit evidence, regulated data, supplier bank data, tax data, payroll data, or PII require security/privacy and governance review.

## 11) Review and Compliance
- Review cadence: At least annually, or when Oracle capability, reporting architecture, data governance policy, or regulatory requirements materially change.
- Policy owner: Data Governance / Finance Governance owner to be assigned.
- Approval authority: Finance Data Governance Council or equivalent governance body.
- Compliance monitoring: Periodic review of approved extensions, active extracts, custom dashboards, and recurring reports.
- Noncompliance: Unapproved extensions may be retired, restricted, remediated, or escalated to governance leadership.

## 12) Document Control
| Field | Value |
|---|---|
| Document title | Analytics Intake and Extension Policy |
| Version | 1.0 Draft |
| Status | Draft for governance review |
| Owner | Data Governance / Finance Governance owner to be assigned |
| Approval authority | Finance Data Governance Council or equivalent |
| Effective date | To be assigned at approval |
| Review cadence | Annual or upon material system/governance change |
| Controlled copy location | To be assigned |
| Retention | Retain approved policy and change history per governance documentation retention requirements |

## 13) Intake Checklist
Use this checklist before approving custom analytics or data extension work:

- [ ] Business question or control need is clearly stated.
- [ ] Oracle process owner is identified.
- [ ] Native Oracle reports/inquiries/workflows/audit evidence were assessed.
- [ ] Native capability gap is documented.
- [ ] Decision path is recorded: native, configured native, governed extension, conditional, rejected/deferred.
- [ ] Oracle system-of-record status is preserved.
- [ ] Metric definitions, grain, filters, and thresholds are documented.
- [ ] Source lineage and transformations are documented.
- [ ] Data quality checks are defined.
- [ ] Access, privacy, extract, and retention controls are defined.
- [ ] Owner, steward, approver, and review cadence are assigned.
- [ ] Change control and retirement criteria are defined.
