# Control Governance

Governance packages for finance and accounting operations: domain architecture, enterprise policies, controlled operations, governed data and analytics, governed AI, and supporting standards or runbooks.

Each package is scoped to a domain and platform release. Documents cross-reference one another and are intended to be adopted as a set.

## Start here

| Layer | Document |
|---|---|
| Architecture | [Finance & Accounting Domain Governance Architecture](architecture/finance-accounting-domain-governance-architecture.md) |
| Cross-domain overlay | [CapEx Lifecycle Governance Overlay](architecture/capex-lifecycle-governance-overlay.md) |
| Cross-domain MDM | [CapEx Master Data Management Framework](architecture/capex-master-data-management-framework.md) |
| Enterprise policy | [Analytics Intake and Extension Policy](policies/analytics-intake-and-extension-policy.md) |
| Executive decks | [Presentations](presentations/) |

**Core principle:** AI and agents inherit constraints from governed operations and governed analytics.

## Packages

| Package | Scope | Core documents |
|---|---|---|
| [Oracle Fusion Cloud AP I2P 26B](packages/oracle-fusion-ap-i2p-26b/) | Accounts Payable Invoice-to-Pay on Oracle Fusion Financials 26B | Controlled operations, governed data and analytics, governed AI, supporting analytics implementation package |
| [Oracle Fusion Cloud Receivables Credit to Cash 26B](packages/oracle-fusion-receivables-credit-to-cash-26b/) | Accounts Receivable Credit to Cash on Oracle Fusion Financials 26B | Controlled operations, governed data and analytics, governed AI |
| [Oracle Fusion Cloud Procurement 26B](packages/oracle-fusion-procurement-26b/) | Procurement on Oracle Cloud Procurement 26B | Controlled operations, governed data and analytics, governed AI, approval-rules standard |
| [Oracle Fusion Cloud General Ledger 26B](packages/oracle-fusion-general-ledger-26b/) | General Ledger / record-to-report on Oracle Fusion Financials 26B | Controlled operations, governed data and analytics, governed AI |
| [Oracle Fusion Cloud Project Management 26B](packages/oracle-fusion-project-management-26b/) | Projects on Oracle Fusion Project Management 26B | Controlled operations, governed data and analytics, governed AI |
| [Oracle Fusion Cloud Fixed Assets 26B](packages/oracle-fusion-fixed-assets-26b/) | Fixed Assets on Oracle Fusion Financials 26B | Controlled operations, governed data and analytics, governed AI |
| [Oracle Cloud EPM Financial Consolidation and Close](packages/oracle-cloud-epm-fcc-26b/) | Group consolidation and close on Oracle Cloud EPM FCC | Controlled operations, governed data and analytics, governed AI |
| [Oracle Cloud EPM Planning Modules](packages/oracle-cloud-epm-planning-modules/) | Enterprise planning, budgeting, Capital, Projects, and Workforce on Oracle Cloud EPM Planning | Controlled operations, governed data and analytics, governed AI |

## Repository layout

```text
control-governance/
├── architecture/          # Cross-domain F&A governance architecture and lifecycle overlays
├── policies/              # Enterprise policies (analytics intake, etc.)
├── packages/              # Domain-specific governance bundles
│   ├── oracle-fusion-ap-i2p-26b/
│   ├── oracle-fusion-receivables-credit-to-cash-26b/
│   ├── oracle-fusion-procurement-26b/
│   ├── oracle-fusion-general-ledger-26b/
│   ├── oracle-fusion-project-management-26b/
│   ├── oracle-fusion-fixed-assets-26b/
│   ├── oracle-cloud-epm-fcc-26b/
│   └── oracle-cloud-epm-planning-modules/
└── presentations/         # Executive and stakeholder decks
```

## Bundle Pattern

Every active domain bundle is expected to expose the same root triad:

1. `01-controlled-operations.md`
2. `02-governed-data-and-analytics.md`
3. `03-governed-ai.md`

Some bundles also include supporting standards, deployment packages, or runbooks beneath that triad.

## Current bundle highlights

### Procurement

Start with [01-controlled-operations.md](packages/oracle-fusion-procurement-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — Policy, SOPs, COSO control matrix, RACI, issue workflow
2. `02-governed-data-and-analytics.md` — DMBOK-aligned governance, glossary, KPIs, DQ controls, lineage
3. `03-governed-ai.md` — AI safe use, intake, risk controls, agent readiness
4. `04-approval-rules-admin-standard.md` — AMX configuration standard and runbook

### Receivables Credit to Cash

Start with [01-controlled-operations.md](packages/oracle-fusion-receivables-credit-to-cash-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — Billing, cash application, revenue recognition, credit management, SOPs, RACI
2. `02-governed-data-and-analytics.md` — Native-first AR reporting, glossary, KPIs, DQ, lineage
3. `03-governed-ai.md` — AR AI safe use, intake, risk mapping, bounded-agent readiness

### AP Invoice-to-Pay

Start with [01-controlled-operations.md](packages/oracle-fusion-ap-i2p-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — AP policy, process, controls, SOPs, RACI, evidence
2. `02-governed-data-and-analytics.md` — Native-first analytics governance, glossary, KPIs, DQ controls, lineage
3. `03-governed-ai.md` — AP AI safe use, intake, risk mapping, bounded-agent readiness
4. `analytics/` — Supporting AP workload and throughput implementation package

### General Ledger

Start with [01-controlled-operations.md](packages/oracle-fusion-general-ledger-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — Journal-to-close operations, control points, SOPs, RACI
2. `02-governed-data-and-analytics.md` — GL reporting, subject areas, KPIs, DQ, lineage
3. `03-governed-ai.md` — Conservative GL AI posture and bounded use

### Projects

Start with [01-controlled-operations.md](packages/oracle-fusion-project-management-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — Project execution, issues, change governance, SOPs, RACI
2. `02-governed-data-and-analytics.md` — Project reporting, subject areas, KPIs, DQ, lineage
3. `03-governed-ai.md` — Oracle Digital Assistant and broader project AI governance

### Fixed Assets

Start with [01-controlled-operations.md](packages/oracle-fusion-fixed-assets-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — Asset lifecycle controls, depreciation, reconciliation, retirements
2. `02-governed-data-and-analytics.md` — Asset balances, depreciation, transactions, KPIs, DQ, lineage
3. `03-governed-ai.md` — Conservative Fixed Assets AI posture and bounded use

### Financial Consolidation and Close

Start with [01-controlled-operations.md](packages/oracle-cloud-epm-fcc-26b/01-controlled-operations.md):

1. `01-controlled-operations.md` — Consolidation execution, journals, supplemental data, Task Manager close orchestration, SOPs, RACI
2. `02-governed-data-and-analytics.md` — Native FCC dashboards, close monitoring, glossary, KPIs, DQ, lineage
3. `03-governed-ai.md` — Conservative FCC AI posture with tenant-validated native feature review and bounded use

### EPM Planning Modules

Start with [01-controlled-operations.md](packages/oracle-cloud-epm-planning-modules/01-controlled-operations.md):

1. `01-controlled-operations.md` — Application configuration, Capital / Projects / Workforce / Financials module cycles, approval workflows, period lock, SOPs, RACI
2. `02-governed-data-and-analytics.md` — Native-first planning analytics, budget vs. actuals, Capital KPIs, glossary, DQ, lineage
3. `03-governed-ai.md` — Predictive planning safe use, AI intake routing, data handling, agent readiness pre-conditions

## Conventions

- Mandatory language (`shall`, `must`) is reserved for policy and control statements.
- Numbered prefixes indicate reading order within a package, not document lifecycle version.
- Standards and runbooks sit beneath policy packages and trace to named controls and KPIs.

## Contributing

Add new packages under `packages/<domain-platform>/`. Each package should include a README describing scope, audience, companion files, and adoption order.
