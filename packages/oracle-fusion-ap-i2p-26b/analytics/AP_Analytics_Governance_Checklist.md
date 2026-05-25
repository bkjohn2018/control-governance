# AP Workload & Throughput Analytics — Governance Checklist

Use this checklist to validate the analytics capability before deployment.

---

## Definition Phase

- [ ] Analytics charter is approved and signed by AP leadership
- [ ] Approved use cases are documented (workload, throughput, hold impact)
- [ ] Explicit non-goals are listed (no HR/performance use)
- [ ] Source tables identified: `AP_INVOICES_ALL`, `AP_PAYMENT_SCHEDULES_ALL`, `AP_INVOICE_PAYMENTS_ALL`, `AP_HOLDS_ALL`
- [ ] Stage definitions finalized and agreed
- [ ] Owner mapping rules approved (queue/team level, not individual)
- [ ] Governance statement drafted and reviewed

---

## Data Model Phase

- [ ] AP_INVOICES_ALL — required fields mapped
  - [ ] INVOICE_ID, INVOICE_NUM, INVOICE_DATE, INVOICE_RECEIVED_DATE
  - [ ] PAYMENT_STATUS_FLAG, APPROVAL_STATUS, HOLD_FLAG
  - [ ] ORG_ID, VENDOR_ID, INVOICE_AMOUNT
  - [ ] INVOICE_SOURCE (for ownership mapping)
- [ ] AP_PAYMENT_SCHEDULES_ALL — required fields mapped
  - [ ] DUE_DATE, AMOUNT_REMAINING, PAYMENT_STATUS_FLAG
  - [ ] HOLD_FLAG (for exception context)
- [ ] AP_INVOICE_PAYMENTS_ALL — required fields mapped
  - [ ] INVOICE_ID, ACCOUNTING_DATE, AMOUNT
  - [ ] Used for throughput completion events
- [ ] AP_HOLDS_ALL — required fields mapped
  - [ ] HOLD_ID, INVOICE_ID, HOLD_TYPE, HOLD_REASON
  - [ ] HOLD_START_DATE, HOLD_END_DATE
- [ ] POZ_SUPPLIERS — required fields mapped
  - [ ] VENDOR_ID, VENDOR_NAME

---

## Query Validation Phase

- [ ] `WIP_DETAIL` query tested against production or test data
  - [ ] CURRENT_STAGE logic returns expected values
  - [ ] OWNER_LABEL values are team/queue names, not person names
  - [ ] STAGE_AGE_DAYS calculation is correct
- [ ] `WIP_BY_STAGE` query tested
  - [ ] Stage count and amount totals reconcile to WIP_DETAIL
- [ ] `WIP_BY_OWNER` query tested
  - [ ] Owner labels are team/queue names
- [ ] `THROUGHPUT_TREND` query tested
  - [ ] Payment period filtering is correct
  - [ ] Flow time calculations use INVOICE_RECEIVED_DATE and ACCOUNTING_DATE
- [ ] `HOLD_IMPACT` query tested
  - [ ] Hold duration calculation handles NULL HOLD_END_DATE (SYSDATE)
  - [ ] Hold counts are accurate

---

## Stage Logic Validation

- [ ] Spot-checked 5-10 sample invoices
  - [ ] Manually verified stage classification for each
  - [ ] Confirmed CURRENT_STAGE logic matches actual invoice state
- [ ] Verified hold records are captured correctly
  - [ ] Invoices with HOLD_FLAG='Y' show as Hold / Exception
  - [ ] Invoices in AP_HOLDS_ALL are correctly flagged
- [ ] Confirmed approval status mapping
  - [ ] Non-approved invoices show as Approval stage
- [ ] Validated payment scheduling stage
  - [ ] Approved invoices with AMOUNT_REMAINING > 0 show as Payment Scheduling
- [ ] Verified payment execution detection
  - [ ] Invoices with payment records show as Payment Execution

---

## BI Publisher Build Phase

- [ ] Five datasets created in BI Publisher
  - [ ] WIP_DETAIL
  - [ ] WIP_BY_STAGE
  - [ ] WIP_BY_OWNER
  - [ ] THROUGHPUT_TREND
  - [ ] HOLD_IMPACT
- [ ] Parameters configured
  - [ ] P_START_DATE, P_END_DATE
  - [ ] P_ORG_ID, P_VENDOR_ID (optional filters)
  - [ ] P_STAGE, P_OWNER_LABEL (optional filters)
- [ ] Report layout created with four sections
  - [ ] WorkloadHealth (stage chart, owner pie, detail table)
  - [ ] ThroughputTrend (trend line, detail table)
  - [ ] HoldExceptionImpact (hold bar chart, detail table)
  - [ ] DetailDrillthrough (full invoice list)

---

## Governance Labeling

- [ ] Report title: "AP Workload & Throughput Analytics"
- [ ] Subtitle: "Operational workload and throughput visibility"
- [ ] Disclaimer visible: "Not for HR, compensation, or disciplinary use"
- [ ] Glossary embedded or linked:
  - [ ] WIP = work in process
  - [ ] STAGE AGE = days since stage entry
  - [ ] THROUGHPUT = completed invoice flow
  - [ ] HOLD IMPACT = hold count, amount, duration
- [ ] Data refresh cadence documented
- [ ] Source table ownership noted

---

## Report Testing

- [ ] Ran report with full date range (1/1/2025 – present)
  - [ ] WIP count is reasonable (known baseline)
  - [ ] Throughput totals match payment records
- [ ] Tested parameter filters
  - [ ] Filter by ORG_ID — correct invoices shown
  - [ ] Filter by VENDOR_ID — correct invoices shown
  - [ ] Filter by STAGE — correct stage invoices shown
- [ ] Tested data drill-through
  - [ ] Click invoice → detail table updates
  - [ ] Drill through to hold reason from Hold section
- [ ] Verified performance
  - [ ] Report loads in < 5 seconds
  - [ ] No timeouts or data errors

---

## Reconciliation & Validation

- [ ] Reconciled WIP amount to GL trial balance (optional)
  - [ ] Total AMOUNT_REMAINING matches AP liability or open items
- [ ] Reconciled payment records
  - [ ] THROUGHPUT_TREND total payments match AP_CHECKS_ALL or payment system total
- [ ] Reconciled hold data
  - [ ] HOLD_IMPACT count matches manual count of active holds
  - [ ] Hold durations are reasonable

---

## Documentation Phase

- [ ] Data dictionary complete
  - [ ] All fields documented
  - [ ] Derived field formulas documented
- [ ] Table-to-analytics mapping documented
- [ ] Stage classification rules documented with examples
- [ ] Owner mapping rules documented
- [ ] Report parameters documented
- [ ] Known limitations documented (e.g., multi-currency, accrual invoices)
- [ ] Refresh schedule documented

---

## Approval Phase

- [ ] AP leadership reviews and approves governance statement
- [ ] BI/Analytics team approves data model and queries
- [ ] Finance Ops confirms stage definitions and owner mapping
- [ ] Compliance/Legal reviews governance guardrails (if required)
- [ ] Sign-off on final report and documentation

---

## Deployment Phase

- [ ] Report published to approved BI environment
- [ ] Refresh schedule configured
- [ ] Parameters set to default values
- [ ] Access permissions configured (teams/roles)
- [ ] Governance statement displayed on report
- [ ] Link to documentation provided to users
- [ ] Training/handoff completed with AP leadership

---

## Post-Deployment

- [ ] Monitor first month of usage
  - [ ] No unexpected data issues
  - [ ] Report refresh performs as expected
- [ ] Gather feedback from AP users
- [ ] Schedule annual governance review (or after process changes)
- [ ] Maintain documentation and changelog

---

## Sign-Off

| Role | Name | Date | Signature |
|---|---|---|---|
| AP Leadership | | | |
| BI/Analytics Lead | | | |
| Finance Ops Manager | | | |
| Compliance/Legal (if required) | | | |

