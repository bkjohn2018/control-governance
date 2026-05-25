# Oracle Fusion Cloud AP Invoice-to-Pay 26B — Governance Bundle

Governance package for Accounts Payable Invoice-to-Pay on Oracle Fusion Cloud Financials release **26B**. AP is the first worked example in the [Finance & Accounting Domain Governance Architecture](../../architecture/finance-accounting-domain-governance-architecture.md).

## Documents

| # | File | Layer |
|---|---|---|
| 1 | [01-invoice-to-pay-governance-package.md](01-invoice-to-pay-governance-package.md) | Policy, process, controls, SOPs, RACI, KPIs |
| 2 | [02-finance-ai-governance-bundle.md](02-finance-ai-governance-bundle.md) | AI safe use, intake, risk mapping, agent readiness |
| — | [analytics/](analytics/) | AP workload and throughput analytics deployment package |

## Cross-cutting dependencies

- [Analytics Intake and Extension Policy](../../policies/analytics-intake-and-extension-policy.md) — Oracle-first analytics governance (required before custom AP analytics)
- [Finance & Accounting Domain Governance Architecture](../../architecture/finance-accounting-domain-governance-architecture.md) — Parent architecture model

## Adoption order

1. Approve the I2P governance package for a 90-day pilot.
2. Endorse the analytics intake policy for AP reporting requests.
3. Baseline AP analytics to the native-first assessment before custom BI Publisher deployment.
4. Approve AI safe-use categories and complete intake before any AP AI pilot.

## Presentations

- [AP Invoice-to-Pay Governance Pilot](../../presentations/ap-invoice-to-pay-governance-pilot.pptx)
- [Analytics Intake](../../presentations/analytics-intake.pptx)

## Oracle reference

- [Oracle Fusion Cloud Financials 26B — Using Payables Invoice to Pay](https://docs.oracle.com/en/cloud/saas/financials/26b/index.html)
