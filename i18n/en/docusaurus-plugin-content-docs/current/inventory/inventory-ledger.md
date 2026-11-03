---
source_hash: "6f4f29aa00"
sidebar_label: Inventory Ledger
sidebar_position: 8
author: Wooju(Landa)
created: "2026-04-14"
countries: [us]
---

# 📍 Inventory Ledger

> Use this menu to view the full history of all inventory transactions.
>
> Path : `Inventory > Inventory Ledger`

## AS-IS → TO-BE

| Category | AS-IS (ERP, Old IPOS) | TO-BE (IIC BO) |
|:---:|---|---|
| **View all inventory transaction history** | No single place to view it all at once | Inventory Ledger |
| **Transaction type filter** | Had to check each system separately | Unified filter for sale/refund/inbound/outbound/adjustment/stocktaking/movement |
| **Quantity change tracking** | Had to check individually | See before → change → after at a glance |

:::tip Key changes
- **Unified ledger** — View all stock changes, including sales, refunds, inbound, outbound, adjustments, stocktaking, and movements, on one screen
- **Quantity change tracking** — Each record shows the before quantity / change quantity / after quantity, making the flow easy to follow
- **Error reversal history** — History automatically reversed after a system error can also be viewed optionally
:::

---

## How to search

| Step | Action |
|:---:|---|
| **1** | Go to the `Inventory > Inventory Ledger` menu |
| **2** | Set the **start date / end date** (required) |
| **3** | Set additional filters such as BP, store, warehouse (optional) |
| **4** | Select inventory transaction type filters (optional) |
| **5** | Run the search |
| **6** | Download to Excel if needed |

### Search filters

| Filter | Description | Required |
|---|---|:---:|
| **Start date** | Search start date | **Required** |
| **End date** | Search end date (on or after the start date) | **Required** |
| BP | Select BP code (multiple allowed) | Optional |
| Store | Select store code (multiple allowed) | Optional |
| Warehouse | Select warehouse (Location) (multiple allowed) | Optional |
| Transaction type | Select from the types below (multiple allowed) | Optional |
| Include reversal history | Whether to show error reversal (compensation) history | Optional (default: OFF) |
| Keyword | Invoice No., product code, product name, barcode (2+ characters) | Optional |

---

## Inventory transaction types

| Type | Description | Included history |
|:---:|---|---|
| **Sale** | POS/Shopify sales | Regular sales, RX sales |
| **Refund** | Refund processing | Stock restored by refunds |
| **SAP Inbound** | SAP-based inbound | BP initial stock inbound |
| **Manual Inbound** | Inbound registered directly in BO | Store manual inbound, Excel upload inbound |
| **Outbound** | Outbound processing | Outbound request reservation + actual outbound deduction |
| **Adjustment** | Inventory adjustment | Inbound difference adjustment, regular adjustment, stocktaking adjustment |
| **Stocktaking** | Inventory stocktaking | Quantity changes from stocktaking |
| **Movement** | Movement between warehouses | Regular movement, RX movement |

:::info What is reversal history?
History of inventory transactions that failed due to a system error, etc., and were automatically restored to their original state.
It is hidden by default and is included when you turn the **"Include reversal history"** option ON.
:::

---

## Search result fields

| Field | Description |
|---|---|
| Transaction date/time | Date/time the stock change occurred (store time zone) |
| BP / Store / Warehouse | Where the stock change occurred |
| Product info | Product code, product name |
| Transaction type | Sale, refund, inbound, outbound, adjustment, stocktaking, movement |
| **Before Qty** | Quantity held before the transaction |
| **Change Qty** | Increased (+) or decreased (-) quantity |
| **After Qty** | Quantity held after the transaction |

### Sortable fields

Created date, BP info, store info, product info, before qty, change qty, after qty

---

## FAQ

### Q. Which time zone are the ledger times shown in?

> Times are shown in the **store time zone**.
> e.g. History for a US store is shown in that store's local time.

---

### Q. How do I see both sales and refunds?

> Select both **Sale** and **Refund** in the transaction type filter.
> If no filter is selected, all types are shown.

---

### Q. How do I find the cause when stock doesn't match?

> 1. Search the ledger for the period by store · warehouse · product code
> 2. Trace the before/after quantities to find when the difference occurred
> 3. Use the transaction type filter to look at specific types only (outbound, adjustment, etc.) in detail
> 4. If needed, turn "Include reversal history" ON to also check system error reversal records


---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-14 | Initial version | Wooju(Landa) |
