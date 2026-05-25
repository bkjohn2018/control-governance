# Control Governance

Governance packages for finance and accounting operations: domain architecture, enterprise policies, controlled operations, data and analytics, AI use, and supporting standards and runbooks.

Each package is scoped to a domain and platform release. Documents cross-reference one another and are intended to be adopted as a set.

## Start here

| Layer | Document |
|---|---|
| Architecture | [Finance & Accounting Domain Governance Architecture](architecture/finance-accounting-domain-governance-architecture.md) |
| Enterprise policy | [Analytics Intake and Extension Policy](policies/analytics-intake-and-extension-policy.md) |
| Executive decks | [Presentations](presentations/) |

**Core principle:** AI and agents inherit constraints from governed operations and governed analytics.

## Packages

| Package | Scope | Documents |
|---|---|---|
| [Oracle Fusion Cloud AP I2P 26B](packages/oracle-fusion-ap-i2p-26b/) | AP Invoice-to-Pay on Oracle Fusion Financials 26B (first worked example) | I2P governance, AI governance, workload analytics deployment |
| [Oracle Fusion Cloud Procurement 26B](packages/oracle-fusion-procurement-26b/) | S2C/P2P procurement on Oracle Cloud Procurement 26B | Controlled operations, data/analytics, AI, approval rules standard |

## Repository layout

```
control-governance/
├── architecture/          # Cross-domain F&A governance architecture
├── policies/              # Enterprise policies (analytics intake, etc.)
├── packages/              # Domain-specific governance bundles
│   ├── oracle-fusion-ap-i2p-26b/
│   └── oracle-fusion-procurement-26b/
└── presentations/         # Executive and stakeholder decks
```

## Oracle Fusion Cloud Procurement 26B bundle

Start with [01-controlled-operations.md](packages/oracle-fusion-procurement-26b/01-controlled-operations.md):

1. **01-controlled-operations.md** — Policy, SOPs, COSO control matrix, RACI, issue workflow
2. **02-governed-data-and-analytics.md** — DAMA-DMBOK aligned data governance, glossary, KPIs, DQ controls, lineage
3. **03-governed-ai.md** — NIST AI RMF aligned AI safe use, intake, risk controls, agent readiness
4. **04-approval-rules-admin-standard.md** — AMX configuration standard and runbook

## Oracle Fusion Cloud AP I2P 26B bundle

Start with [01-invoice-to-pay-governance-package.md](packages/oracle-fusion-ap-i2p-26b/01-invoice-to-pay-governance-package.md):

1. **01-invoice-to-pay-governance-package.md** — AP I2P policy, controls, SOPs, RACI, KPIs
2. **02-finance-ai-governance-bundle.md** — AP AI safe use, intake, risk mapping, agent readiness
3. **analytics/** — AP workload and throughput BI Publisher deployment package

## Conventions

- Mandatory language (`shall`, `must`) is reserved for policy and control statements.
- Numbered prefixes indicate reading order within a package, not document lifecycle version.
- Standards and runbooks sit beneath policy packages and trace to named controls and KPIs.

## Contributing

Add new packages under `packages/<domain-platform>/`. Each package should include a README describing scope, audience, companion files, and adoption order.
