# AP Workload & Throughput Analytics — Deployment Guide

This guide consolidates all artifacts and provides step-by-step deployment instructions.

---

## Overview

This analytics capability measures AP workload, throughput, and exceptions using a governed approach. It is approved for operational management only (not HR or performance evaluation).

**Key deliverables:**
1. BI Publisher datasets (5 queries)
2. Report layout (4 sections)
3. Data governance checklist
4. Finance documentation lifecycle

---

## Deployment Steps

### Step 1: Review Governance Charter

Reference: [`01-invoice-to-pay-governance-package.md`](../01-invoice-to-pay-governance-package.md)

Confirm:
- [ ] Analytics charter is signed
- [ ] Use cases approved (workload, throughput, holds)
- [ ] Non-goals documented (no HR/performance use)

---

### Step 2: Prepare Source Tables

Verify access to:
- `AP_INVOICES_ALL` — invoice header, status, approval, hold flag
- `AP_PAYMENT_SCHEDULES_ALL` — due dates, remaining amounts
- `AP_INVOICE_PAYMENTS_ALL` — payment completion events
- `AP_HOLDS_ALL` — hold details
- `POZ_SUPPLIERS` — vendor labels

**Test query:**
```sql
SELECT COUNT(*) FROM AP_INVOICES_ALL 
WHERE INVOICE_DATE >= DATE '2025-01-01';
```

---

### Step 3: Create BI Publisher Datasets

In your BI Publisher environment, create five datasets using the queries below.

#### Dataset 1: `WIP_DETAIL`

```sql
SELECT
  i.INVOICE_ID,
  i.INVOICE_NUM,
  i.ORG_ID,
  s.VENDOR_NAME,
  i.INVOICE_DATE,
  i.INVOICE_RECEIVED_DATE,
  p.DUE_DATE,
  i.INVOICE_AMOUNT,
  p.AMOUNT_REMAINING,
  i.PAYMENT_STATUS_FLAG,
  i.APPROVAL_STATUS,
  i.HOLD_FLAG,
  NVL(h.HOLD_TYPE, 'None') AS HOLD_TYPE,
  NVL(h.HOLD_REASON, 'None') AS HOLD_REASON,
  CASE
    WHEN i.HOLD_FLAG = 'Y' OR h.HOLD_ID IS NOT NULL THEN 'Hold / Exception'
    WHEN i.APPROVAL_STATUS != 'APPROVED' THEN 'Approval'
    WHEN p.PAYMENT_STATUS_FLAG IN ('N','P') AND p.AMOUNT_REMAINING > 0 THEN 'Payment Scheduling'
    WHEN pm.PAYMENT_DATE IS NOT NULL THEN 'Payment Execution'
    ELSE 'Entry / Coding'
  END AS CURRENT_STAGE,
  CASE
    WHEN i.HOLD_FLAG = 'Y' OR h.HOLD_ID IS NOT NULL THEN 'Exceptions Team'
    WHEN i.APPROVAL_STATUS != 'APPROVED' THEN 'Approval Queue'
    WHEN p.PAYMENT_STATUS_FLAG IN ('N','P') AND p.AMOUNT_REMAINING > 0 THEN 'Payment Scheduling'
    WHEN pm.PAYMENT_DATE IS NOT NULL THEN 'Payments Team'
    ELSE NVL(i.INVOICE_SOURCE, 'Intake/Coding')
  END AS OWNER_LABEL,
  TRUNC(SYSDATE) - COALESCE(h.HOLD_START_DATE, i.INVOICE_DATE) AS STAGE_AGE_DAYS
FROM AP_INVOICES_ALL i
LEFT JOIN AP_PAYMENT_SCHEDULES_ALL p
  ON i.INVOICE_ID = p.INVOICE_ID
LEFT JOIN (
  SELECT INVOICE_ID,
         MAX(ACCOUNTING_DATE) AS PAYMENT_DATE,
         SUM(AMOUNT) AS TOTAL_PAID,
         SUM(DISCOUNT_TAKEN) AS TOTAL_DISCOUNT_TAKEN
  FROM AP_INVOICE_PAYMENTS_ALL
  GROUP BY INVOICE_ID
) pm ON i.INVOICE_ID = pm.INVOICE_ID
LEFT JOIN (
  SELECT INVOICE_ID,
         HOLD_ID,
         HOLD_TYPE,
         HOLD_REASON,
         HOLD_START_DATE,
         HOLD_END_DATE
  FROM (
    SELECT h.*,
           ROW_NUMBER() OVER (PARTITION BY INVOICE_ID ORDER BY HOLD_START_DATE DESC) rn
    FROM AP_HOLDS_ALL h
  )
  WHERE rn = 1
) h ON i.INVOICE_ID = h.INVOICE_ID
LEFT JOIN POZ_SUPPLIERS s
  ON i.VENDOR_ID = s.VENDOR_ID
WHERE i.INVOICE_DATE BETWEEN :P_START_DATE AND :P_END_DATE
  AND (:P_ORG_ID IS NULL OR i.ORG_ID = :P_ORG_ID)
  AND (:P_VENDOR_ID IS NULL OR i.VENDOR_ID = :P_VENDOR_ID);
```

#### Dataset 2: `WIP_BY_STAGE`

```sql
SELECT
  CURRENT_STAGE,
  COUNT(*) AS INVOICE_COUNT,
  SUM(AMOUNT_REMAINING) AS WIP_AMOUNT
FROM (
  SELECT
    i.INVOICE_ID,
    p.AMOUNT_REMAINING,
    CASE
      WHEN i.HOLD_FLAG = 'Y' OR h.HOLD_ID IS NOT NULL THEN 'Hold / Exception'
      WHEN i.APPROVAL_STATUS != 'APPROVED' THEN 'Approval'
      WHEN p.PAYMENT_STATUS_FLAG IN ('N','P') AND p.AMOUNT_REMAINING > 0 THEN 'Payment Scheduling'
      WHEN pm.PAYMENT_DATE IS NOT NULL THEN 'Payment Execution'
      ELSE 'Entry / Coding'
    END AS CURRENT_STAGE
  FROM AP_INVOICES_ALL i
  LEFT JOIN AP_PAYMENT_SCHEDULES_ALL p
    ON i.INVOICE_ID = p.INVOICE_ID
  LEFT JOIN (
    SELECT INVOICE_ID, MAX(ACCOUNTING_DATE) AS PAYMENT_DATE
    FROM AP_INVOICE_PAYMENTS_ALL
    GROUP BY INVOICE_ID
  ) pm ON i.INVOICE_ID = pm.INVOICE_ID
  LEFT JOIN (
    SELECT INVOICE_ID,
           ROW_NUMBER() OVER (PARTITION BY INVOICE_ID ORDER BY HOLD_START_DATE DESC) rn,
           HOLD_ID
    FROM AP_HOLDS_ALL
  ) h ON i.INVOICE_ID = h.INVOICE_ID AND h.rn = 1
  WHERE i.INVOICE_DATE BETWEEN :P_START_DATE AND :P_END_DATE
    AND (:P_ORG_ID IS NULL OR i.ORG_ID = :P_ORG_ID)
    AND (:P_VENDOR_ID IS NULL OR i.VENDOR_ID = :P_VENDOR_ID)
)
GROUP BY CURRENT_STAGE
ORDER BY INVOICE_COUNT DESC;
```

#### Dataset 3: `WIP_BY_OWNER`

```sql
SELECT
  OWNER_LABEL,
  CURRENT_STAGE,
  COUNT(*) AS INVOICE_COUNT,
  SUM(AMOUNT_REMAINING) AS WIP_AMOUNT
FROM (
  SELECT
    i.INVOICE_ID,
    p.AMOUNT_REMAINING,
    CASE
      WHEN i.HOLD_FLAG = 'Y' OR h.HOLD_ID IS NOT NULL THEN 'Hold / Exception'
      WHEN i.APPROVAL_STATUS != 'APPROVED' THEN 'Approval'
      WHEN p.PAYMENT_STATUS_FLAG IN ('N','P') AND p.AMOUNT_REMAINING > 0 THEN 'Payment Scheduling'
      WHEN pm.PAYMENT_DATE IS NOT NULL THEN 'Payment Execution'
      ELSE 'Entry / Coding'
    END AS CURRENT_STAGE,
    CASE
      WHEN i.HOLD_FLAG = 'Y' OR h.HOLD_ID IS NOT NULL THEN 'Exceptions Team'
      WHEN i.APPROVAL_STATUS != 'APPROVED' THEN 'Approval Queue'
      WHEN p.PAYMENT_STATUS_FLAG IN ('N','P') AND p.AMOUNT_REMAINING > 0 THEN 'Payment Scheduling'
      WHEN pm.PAYMENT_DATE IS NOT NULL THEN 'Payments Team'
      ELSE NVL(i.INVOICE_SOURCE, 'Intake/Coding')
    END AS OWNER_LABEL
  FROM AP_INVOICES_ALL i
  LEFT JOIN AP_PAYMENT_SCHEDULES_ALL p
    ON i.INVOICE_ID = p.INVOICE_ID
  LEFT JOIN (
    SELECT INVOICE_ID, MAX(ACCOUNTING_DATE) AS PAYMENT_DATE
    FROM AP_INVOICE_PAYMENTS_ALL
    GROUP BY INVOICE_ID
  ) pm ON i.INVOICE_ID = pm.INVOICE_ID
  LEFT JOIN (
    SELECT INVOICE_ID,
           ROW_NUMBER() OVER (PARTITION BY INVOICE_ID ORDER BY HOLD_START_DATE DESC) rn,
           HOLD_ID
    FROM AP_HOLDS_ALL
  ) h ON i.INVOICE_ID = h.INVOICE_ID AND h.rn = 1
  WHERE i.INVOICE_DATE BETWEEN :P_START_DATE AND :P_END_DATE
    AND (:P_ORG_ID IS NULL OR i.ORG_ID = :P_ORG_ID)
    AND (:P_VENDOR_ID IS NULL OR i.VENDOR_ID = :P_VENDOR_ID)
)
GROUP BY OWNER_LABEL, CURRENT_STAGE
ORDER BY OWNER_LABEL, CURRENT_STAGE;
```

#### Dataset 4: `THROUGHPUT_TREND`

```sql
SELECT
  TO_CHAR(pm.PAYMENT_DATE, 'YYYY-MM') AS PAYMENT_PERIOD,
  COUNT(DISTINCT i.INVOICE_ID) AS COMPLETED_INVOICE_COUNT,
  SUM(pm.TOTAL_PAID) AS TOTAL_PAID_AMOUNT,
  AVG(TRUNC(pm.PAYMENT_DATE - i.INVOICE_RECEIVED_DATE)) AS AVG_FLOW_TIME_DAYS,
  MEDIAN(TRUNC(pm.PAYMENT_DATE - i.INVOICE_RECEIVED_DATE)) AS MEDIAN_FLOW_TIME_DAYS
FROM AP_INVOICES_ALL i
JOIN (
  SELECT
    INVOICE_ID,
    MAX(ACCOUNTING_DATE) AS PAYMENT_DATE,
    SUM(AMOUNT) AS TOTAL_PAID
  FROM AP_INVOICE_PAYMENTS_ALL
  GROUP BY INVOICE_ID
) pm ON i.INVOICE_ID = pm.INVOICE_ID
WHERE i.INVOICE_DATE BETWEEN :P_START_DATE AND :P_END_DATE
  AND (:P_ORG_ID IS NULL OR i.ORG_ID = :P_ORG_ID)
  AND (:P_VENDOR_ID IS NULL OR i.VENDOR_ID = :P_VENDOR_ID)
GROUP BY TO_CHAR(pm.PAYMENT_DATE, 'YYYY-MM')
ORDER BY PAYMENT_PERIOD;
```

#### Dataset 5: `HOLD_IMPACT`

```sql
SELECT
  h.HOLD_TYPE,
  h.HOLD_REASON,
  COUNT(DISTINCT h.INVOICE_ID) AS HOLD_COUNT,
  SUM(i.INVOICE_AMOUNT) AS HOLD_AMOUNT,
  AVG(TRUNC(NVL(h.HOLD_END_DATE, SYSDATE) - h.HOLD_START_DATE)) AS AVG_HOLD_DAYS
FROM AP_HOLDS_ALL h
JOIN AP_INVOICES_ALL i
  ON h.INVOICE_ID = i.INVOICE_ID
WHERE h.HOLD_START_DATE BETWEEN :P_START_DATE AND :P_END_DATE
  AND (:P_ORG_ID IS NULL OR i.ORG_ID = :P_ORG_ID)
  AND (:P_VENDOR_ID IS NULL OR i.VENDOR_ID = :P_VENDOR_ID)
GROUP BY h.HOLD_TYPE, h.HOLD_REASON
ORDER BY HOLD_COUNT DESC;
```

---

### Step 4: Define Parameters

Configure these parameters in your BI Publisher report:

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| P_START_DATE | Date | Yes | 2025-01-01 | Start of analysis period |
| P_END_DATE | Date | Yes | SYSDATE | End of analysis period |
| P_ORG_ID | Text | No | NULL | Business unit (optional filter) |
| P_VENDOR_ID | Text | No | NULL | Vendor ID (optional filter) |
| P_STAGE | Text | No | NULL | Stage filter (optional) |
| P_OWNER_LABEL | Text | No | NULL | Owner/queue filter (optional) |

---

### Step 5: Build Report Layout

Create a report with these four sections:

#### Section 1: WorkloadHealth
- **Chart 1:** Bar chart of `WIP_BY_STAGE` (X: CURRENT_STAGE, Y: INVOICE_COUNT)
- **Chart 2:** Pie chart of `WIP_BY_OWNER` (Category: OWNER_LABEL, Value: WIP_AMOUNT)
- **Table 1:** `WIP_DETAIL` (columns: INVOICE_NUM, VENDOR_NAME, CURRENT_STAGE, OWNER_LABEL, STAGE_AGE_DAYS, AMOUNT_REMAINING, HOLD_TYPE)

#### Section 2: ThroughputTrend
- **Chart 1:** Line chart of `THROUGHPUT_TREND` (X: PAYMENT_PERIOD, Y: COMPLETED_INVOICE_COUNT)
- **Table 1:** `THROUGHPUT_TREND` (columns: PAYMENT_PERIOD, COMPLETED_INVOICE_COUNT, AVG_FLOW_TIME_DAYS, MEDIAN_FLOW_TIME_DAYS)

#### Section 3: HoldExceptionImpact
- **Chart 1:** Bar chart of `HOLD_IMPACT` (X: HOLD_TYPE, Y: HOLD_COUNT)
- **Table 1:** `HOLD_IMPACT` (columns: HOLD_TYPE, HOLD_REASON, HOLD_COUNT, HOLD_AMOUNT, AVG_HOLD_DAYS)

#### Section 4: DetailDrillthrough
- **Table 1:** `WIP_DETAIL` (all columns, sortable by INVOICE_NUM or STAGE_AGE_DAYS)

---

### Step 6: Add Governance Statement

Insert this disclaimer or header on the report:

> **AP Workload & Throughput Analytics**  
> Operational workload and throughput visibility. Approved for queue health, throughput trends, and exception impact analysis. Not for HR, compensation, or disciplinary use.

---

### Step 7: Validate & Test

Use the **AP_Analytics_Governance_Checklist.md** to verify:
- [ ] All datasets return data
- [ ] Stage classifications are correct
- [ ] Parameters filter as expected
- [ ] Report loads in < 5 seconds
- [ ] Reconciliation checks pass

---

### Step 8: Deploy & Refresh

- Publish the report to your BI environment
- Configure refresh schedule (e.g., daily, weekly)
- Set parameter defaults
- Configure user access (teams/roles)
- Distribute documentation link

---

### Step 9: Handoff & Training

- Schedule brief training with AP leadership
- Provide links to:
  - Finance documentation lifecycle
  - Governance checklist
  - Data dictionary (from definition phase)
- Review approved use cases and non-goals

---

## Maintenance

### Annual Review

- [ ] Confirm stage definitions still align with AP process
- [ ] Review owner mapping rules (any team changes?)
- [ ] Check for new hold types or reasons
- [ ] Validate table structure hasn't changed
- [ ] Update governance statement if needed

### Process Changes

If AP process changes (e.g., new approval tiers, hold categories), update:
1. Stage definitions
2. Owner mapping rules
3. CURRENT_STAGE case logic in queries
4. Data dictionary
5. Governance statement

---

## Troubleshooting

### Issue: No data in WIP_DETAIL

**Cause:** Parameter date range is outside invoice data range.

**Solution:** Check that P_START_DATE and P_END_DATE span active invoices. Verify with:
```sql
SELECT MIN(INVOICE_DATE), MAX(INVOICE_DATE) FROM AP_INVOICES_ALL;
```

### Issue: OWNER_LABEL shows individual names instead of teams

**Cause:** INVOICE_SOURCE field contains person names.

**Solution:** Map INVOICE_SOURCE to team labels in the queries. Update owner mapping rules.

### Issue: HOLD_IMPACT shows zero rows

**Cause:** No active holds in the date range.

**Solution:** Confirm AP_HOLDS_ALL has records. Adjust date range or check if holds are soft-deleted.

---

## Support & Escalation

- **Data questions:** Contact Finance Analytics team
- **Process questions:** Contact AP Leadership
- **BI Publisher issues:** Contact BI/Analytics team
- **Governance review:** Contact Finance Ops Manager (annual review)

