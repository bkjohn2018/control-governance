# Oracle Cloud EPM Planning Modules — Governance Bundle

Governance package for **Oracle Cloud EPM Planning Modules**, covering application configuration, planning-cycle operations, Capital module governance, Projects module governance, Workforce module governance, Financials module governance, data integration, approval and review workflows, and period lock.

## Documents

| # | File | Layer |
|---|---|---|
| 1 | [01-controlled-operations.md](01-controlled-operations.md) | Policy, process, controls, SOPs, RACI, evidence |
| 2 | [02-governed-data-and-analytics.md](02-governed-data-and-analytics.md) | Native-first reporting, glossary, KPIs, DQ, lineage |
| 3 | [03-governed-ai.md](03-governed-ai.md) | AI safe use, intake, risk controls, bounded-agent posture |

## Scope

| Module | Governance coverage |
|---|---|
| **Financials** | P&L, balance sheet, cash flow, driver-based planning, budget revisions, Budgetary Control integration |
| **Capital** | New capital investment planning, existing asset management, CapEx demand and budget authoring |
| **Projects** | Project budget planning, forecast, integration with Oracle Project Management Cloud |
| **Workforce** | Headcount and compensation planning, benefits, synchronization with Financials |
| **Application foundation** | Dimension model, data model, data integration, approval workflows, period lock |

## Cross-cutting dependencies

- [CapEx Lifecycle Governance Overlay](../../architecture/capex-lifecycle-governance-overlay.md) — EPM Planning is upstream Pattern A for stages L1–L5
- [CapEx Master Data Management Framework](../../architecture/capex-master-data-management-framework.md) — EPM Planning governs budget versions and `CapExInvestmentID` for Pattern A
- [Analytics Intake and Extension Policy](../../policies/analytics-intake-and-extension-policy.md)
- [Finance & Accounting Domain Governance Architecture](../../architecture/finance-accounting-domain-governance-architecture.md)

## Adoption order

1. Endorse controlled operations for application configuration, planning cycles, and Capital module.
2. Confirm approved forms, dashboards, and KPIs for each active module.
3. Approve AI posture before any AI-assisted forecast, predictive planning, or agentic pilot.

## Oracle reference

- [Oracle Cloud EPM Administering Planning Modules](https://docs.oracle.com/en/cloud/saas/planning-budgeting-cloud/epbca/index.html)
- Configuring Financials — Enabling Financials Features
- Configuring Capital — Enabling New Capital Investment and Manage Existing Assets
- Configuring Projects — Enabling Projects Features and Project Management Cloud Integration
- Configuring Workforce — Enabling Workforce Features
