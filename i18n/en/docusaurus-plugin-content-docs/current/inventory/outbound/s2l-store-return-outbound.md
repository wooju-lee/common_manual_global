---
source_hash: "eaedbee5eb"
sidebar_label: S2L Store Return Outbound
sidebar_position: 2
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-03"
countries: [us]
---

# 📍 S2L Store Return Outbound

> S2L : Store To Logistics, an outbound type for returns from a store to a logistics center. 👉 **[Go to Outbound types](/docs/inventory/outbound/c2c-outbound#outbound-types)**
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## 1. Register outbound

Clicking the outbound registration button opens a modal with the 3 tabs below.

| Tab | Description |
|:---:|---|
| **General Outbound** | Set the outbound · inbound store and location, select products individually, and enter quantities to ship out |
| **Corporate Outbound** | Select only the outbound store to return items to HQ. Since the destination is HQ, only the outbound is recorded, with no inbound store to set |
| **Bulk Outbound Registration** | When a general or corporate outbound has a large number of products, fill in an Excel file and upload it in bulk |

<details>
<summary>Selecting the outbound · inbound store</summary>

When registering an outbound, select the origin and destination in the order below.

1. **Outbound** : BP → store → location
2. **Inbound** : BP → store → location

<div className="blockquote-gray">

> The master data shown in each dropdown (BP / store / location) depends on **the permissions set on the account**.

</div>

</details>

### Register directly vs. request outbound

| Processing method | Description |
|---|---|
| **Outbound Registration** | The outbound is created immediately on registration and the ERP · WMS integration starts. |
| **Request Outbound** | The outbound is created after an approver approves it. <mark>**Until approval, nothing is shipped out and the stock is held as Outbound Pending Qty.**</mark> |

- Check requests on the **Outbound Request List** tab. <mark>**Only accounts with approval permission for the outbound store**</mark> can approve (Confirm) / reject (Reject).
- Request status : `Request Pending` (awaiting approval) → `Approved (Registered)` (approved · outbound registered) / `Rejected` (rejected, Outbound Pending Qty released)

## 2. Outbound status

This outbound is integrated with ERP (NetSuite) · WMS (LXP), and its status changes at each processing stage.

`Outbound Planned` → `Pending Registration` → `Outbound Registered` → `Outbound Completed`

| Status | Meaning |
|---|---|
| **Outbound Planned** | Outbound registered. Not yet sent to ERP · WMS |
| **Pending Registration** | Outbound request sent to ERP · WMS |
| **Outbound Registered** | WMS has accepted the request |
| **Outbound Completed** | The logistics warehouse (WMS · LXP) has confirmed inbound. The outbound store's stock is deducted. |
| **Registration Failed** | Registration in ERP · WMS failed |
| **Outbound Canceled** | Canceled in WMS |

<div className="blockquote-gray">

> The status changes automatically when the result is received from WMS and cannot be changed manually.<br/>
> If the status is `Registration Failed`, contact the IT team via the system Operation channel (Slack).

</div>

## 3. Key restrictions

| Item | Details |
|---|---|
| **Same BP only** | The outbound store and inbound store must belong to <mark>**the same BP**</mark>. |
| **No outbound during stocktaking** | You cannot ship out while stocktaking is in progress at the outbound store · location. |
| **Up to 300 SKUs** | One outbound can contain up to 300 products (SKUs). |
| **No duplicate products** | The same product code cannot be added twice in one outbound. Combine the quantities into one line. |

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-09-15 | Initial version | Wooju(Landa) |
| 2026-11-03 | Moved outbound type table to the C2C page, added outbound request · outbound status · restrictions (moved from the Transfer Order page) | Wooju(Landa) |
