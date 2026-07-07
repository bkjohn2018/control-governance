# Oracle Fusion Cloud AP Invoice-to-Pay 26B — Governance Bundle

Governance package for Accounts Payable Invoice-to-Pay on Oracle Fusion Cloud Financials release **26B**.

## Documents

| # | File | Layer |
|---|---|---|
| 1 | [01-controlled-operations.md](01-controlled-operations.md) | Policy, process, controls, SOPs, RACI, evidence |
| 2 | [02-governed-data-and-analytics.md](02-governed-data-and-analytics.md) | Native-first analytics governance, glossary, KPIs, DQ, lineage |
| 3 | [03-governed-ai.md](03-governed-ai.md) | AI safe use, intake, risk mapping, bounded-agent readiness |
| — | [analytics/](analytics/) | Supporting AP workload and throughput analytics deployment package |
| — | [01-invoice-to-pay-governance-package.md](01-invoice-to-pay-governance-package.md) | Detailed legacy AP governance package retained as supporting reference |
| — | [02-finance-ai-governance-bundle.md](02-finance-ai-governance-bundle.md) | Detailed legacy AI bundle retained as supporting reference |

## Cross-cutting dependencies

- [Analytics Intake and Extension Policy](../../policies/analytics-intake-and-extension-policy.md) — Oracle-first analytics governance (required before custom AP analytics)
- [Finance & Accounting Domain Governance Architecture](../../architecture/finance-accounting-domain-governance-architecture.md) — Parent architecture model

## Adoption order

1. Endorse [01-controlled-operations.md](01-controlled-operations.md) and confirm named control owners.
2. Approve [02-governed-data-and-analytics.md](02-governed-data-and-analytics.md) as the AP KPI and reporting-governance baseline.
3. Baseline AP analytics to the native-first assessment before custom BI Publisher deployment.
4. Approve [03-governed-ai.md](03-governed-ai.md) before any AP AI or bounded-agent use.

## Supporting notes

- The `analytics/` folder remains the implementation package for the AP workload and throughput reporting product.
- The older AP governance and AI bundle files are retained as detailed supporting references during the normalization transition.

## Presentations

- [AP Invoice-to-Pay Governance Presentation](../../presentations/ap-invoice-to-pay-governance-pilot.pptx)
- [Analytics Intake](../../presentations/analytics-intake.pptx)

## Oracle reference

- [Oracle Fusion Cloud Financials 26B — Using Payables Invoice to Pay](https://docs.oracle.com/en/cloud/saas/financials/26b/index.html)
