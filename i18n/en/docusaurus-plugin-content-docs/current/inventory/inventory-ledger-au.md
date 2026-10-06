---
source_hash: "455d356713"
sidebar_label: Inventory Ledger
sidebar_position: 8
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Ledger

> This page explains how to **view the full inventory ledger history** of inbound, outbound, sales, returns, adjustments, stocktaking (adjustments), and movements in the system.
>
> Path : <span className="path-badge">IIC BO > Inventory > Monitoring > Inventory Ledger</span>

## 👉 When to use

- To trace **when and why** a product's stock changed
- To check the **cause of changes** when a stocktaking difference occurs

## 1. List search

<div className="img-placeholder">📷 [Image] Inventory Ledger search filters</div>

| Search filter | Description | Notes |
|---|---|---|
| **BP** | Select BP | |
| **Store** | Select store (multiple selection allowed) | Available <mark>**after selecting a BP**</mark> |
| **Location** | Select location within the store (multiple selection allowed) | Available <mark>**after selecting a Store**</mark> |
| **Inventory Transaction Type** | Type of stock change (multiple selection allowed) | |
| **Search Period** | Search period (default: last 7 days) | Required |
| **Keyword** | Invoice No., product code/name, barcode | Enter 2+ characters |

## 2. List columns

<div className="img-placeholder">📷 [Image] Inventory Ledger list — Include Reversal History / Excel Export</div>

| Column | Description |
|---|---|
| **Transaction Date Time** | Date and time of the stock change (store local time, e.g. `Australia/Sydney`) |
| **BP Information** | BP code / name |
| **Store Information** | Store code / name |
| **Location Information** | Location code / name |
| **Product Info** | Product code / name / barcode |
| **Inventory Transaction Type** | Type of stock change (👉 see 3. Main inventory transaction types) |
| **Before Qty** | On-hand stock (On-hand Qty) before the transaction |
| **Transaction Qty** | Quantity increased/decreased by the transaction (decreases shown with `-`) |
| **After Qty** | On-hand stock (On-hand Qty) after the transaction |
| **Invoice No.** | Number of the transaction that caused the change (sale · return · order · inbound · outbound number, etc.). `-` for adjustment · movement · stocktaking |

- Check **Include Reversal History** to include system reversal history in the results. (Default: not included)
- Use **Excel Export** to download.

## 3. Main inventory transaction types (AU)

The transaction types below are recorded in the ledger for each operation. The quantity indicates the increase/decrease applied in Transaction Qty.

| Operation | Transaction type | When is it recorded? | Qty |
|---|---|---|:---:|
| **Sales / returns** | `Sales` | On online/offline sale | `-` |
| | `Refund` | On online/offline return | `+` |
| **Inbound** | `Inbound (Manual)` | On inbound confirmation (all inbound, including C2C · S2S · L2S) | `+` |
| | `Inbound Adjustment` | When C2C inbound is confirmed with less than the expected quantity, the shortage is deducted | `-` |
| **Outbound** | `Outbound (Confirmed)` | On outbound completion | `-` |
| **Adjustment / stocktaking** | `Adjustment` | On inventory adjustment approval | `+` / `-` |
| | `Stocktaking Adjustment` | On stocktaking confirmation (only products with differences) | `+` / `-` |
| **Movement** | `Movement` | On location movement (including POS stock movement SALES → DP) | From `-`<br/>To `+` |
| | `Movement (RX)` | On offline RX order registration (SALES → RX Holding) | From `-`<br/>To `+` |
| | `Movement Compensation (RX)` | On RX order cancellation (RX Holding → SALES) | From `-`<br/>To `+` |
| **Reversal** | `○○ Reversal` | When automatically reversed due to a system processing failure (not triggered by user cancellation) | Opposite of the original change |

- <mark>**Stocktaking results (`Stocktaking Adjustment`) and inbound shortages (`Inbound Adjustment`) appear only when you search by `Adjustment`**</mark>.
- A movement is recorded as one row each for the source location (`-`) and the destination location (`+`).
- Steps where the quantity is not yet finalized, such as adjustment registration or outbound request, are not recorded in the ledger.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
