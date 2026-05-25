# Control Governance

Governance packages for finance and accounting operations: controlled operations, data and analytics, AI use, and supporting standards and runbooks.

Each package is scoped to a domain and platform release. Documents cross-reference one another and are intended to be adopted as a set.

## Packages

| Package | Scope | Documents |
|---|---|---|
| [Oracle Fusion Cloud Procurement 26B](packages/oracle-fusion-procurement-26b/) | S2C/P2P procurement on Oracle Cloud Procurement release 26B | Controlled operations, governed data and analytics, governed AI, approval rules admin standard |

## Oracle Fusion Cloud Procurement 26B bundle

Start with [01-controlled-operations.md](packages/oracle-fusion-procurement-26b/01-controlled-operations.md) for the operating and control layer. Companion packages:

1. **01-controlled-operations.md** — Policy, SOPs, COSO control matrix, RACI, issue workflow
2. **02-governed-data-and-analytics.md** — DAMA-DMBOK aligned data governance, glossary, KPIs, DQ controls, lineage
3. **03-governed-ai.md** — NIST AI RMF aligned AI safe use, intake, risk controls, agent readiness
4. **04-approval-rules-admin-standard.md** — AMX configuration standard and runbook (operationalizes approval controls)

Source anchor for Oracle content: [Oracle Fusion Cloud Procurement 26B Documentation Library](https://docs.oracle.com/en/cloud/saas/procurement/26b/index.html).

## Conventions

- Mandatory language (`shall`, `must`) is reserved for policy and control statements.
- Numbered prefixes indicate reading order within a package, not document lifecycle version.
- Standards and runbooks sit beneath policy packages and trace to named controls and KPIs.

## Contributing

Add new packages under `packages/<domain-platform>/`. Each package should include a short README or bundle inputs section describing scope, audience, and companion files.
