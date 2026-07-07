# Oracle Fusion Cloud Receivables Credit to Cash 26B — Governance Bundle

Governance package for Accounts Receivable Credit to Cash on Oracle Fusion Cloud Financials release **26B**.

## Documents

| # | File | Layer |
|---|---|---|
| 1 | [01-controlled-operations.md](01-controlled-operations.md) | Policy, process, controls, SOPs, RACI, evidence |
| 2 | [02-governed-data-and-analytics.md](02-governed-data-and-analytics.md) | Native-first analytics governance, glossary, KPIs, DQ, lineage |
| 3 | [03-governed-ai.md](03-governed-ai.md) | AI safe use, intake, risk mapping, bounded-agent readiness |

## Cross-cutting dependencies

- [Analytics Intake and Extension Policy](../../policies/analytics-intake-and-extension-policy.md)
- [Finance & Accounting Domain Governance Architecture](../../architecture/finance-accounting-domain-governance-architecture.md)

## Adoption order

1. Endorse [01-controlled-operations.md](01-controlled-operations.md) and confirm named control owners across Billing, Cash Application, Revenue, and Credit.
2. Approve [02-governed-data-and-analytics.md](02-governed-data-and-analytics.md) as the AR KPI and reporting-governance baseline.
3. Baseline AR analytics to the native-first assessment before custom reporting deployment.
4. Approve [03-governed-ai.md](03-governed-ai.md) before any AR AI or bounded-agent use.

## Oracle reference

- [Overview of Oracle Receivables](https://docs.oracle.com/en/cloud/saas/financials/26b/fairp/overview-of-oracle-receivables.html)
- [Using Receivables Credit to Cash 26B](https://docs.oracle.com/en/cloud/saas/financials/26b/faofc/using-receivables-credit-to-cash.pdf)
- [Subject Areas for Transactional Business Intelligence in Financials 26B](https://docs.oracle.com/en/cloud/saas/financials/26b/faofb/subject-areas-for-transactional-business-intelligence-in-financials.pdf)
