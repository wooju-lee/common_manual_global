---
source_hash: "16b99f29b7"
sidebar_label: S2S Store Transfer Inbound
sidebar_position: 4
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 S2S Store Transfer Inbound

> In Australia, all master data is set up as stores, and movement between stores is defined as <strong>S2S (Store To Store)</strong>.<br/>
> This page explains how to receive products shipped from another store and confirm inbound.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inbound List</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are reflected only in IIC BO inventory.

</div>

## 👉 S2S inbound process

> **Outbound store registers outbound** → **Inbound info created on outbound completion** → **Receive goods · count stock** → **Confirm inbound**

| Step | Action | Handled by |
|:---:|---|---|
| **1** | Outbound store registers S2S outbound → status immediately updated to outbound completed | 👤 Outbound store (outbound registration)<br/>⚙️ Automatic (outbound completion) |
| **2** | Inbound info is created for the inbound store on outbound completion (`Pending Inbound`) | ⚙️ Automatic |
| **3** | Goods arrive → count stock | 👤 Inbound store |
| **4** | Confirm inbound → stock is added to the inbound store (`Inbound Confirmed`) | 👤 Inbound store (Approver account) |

<div className="blockquote-gray">

> From outbound registration until inbound confirmation, the quantity is shown as `Pending Inbound` for the inbound store, and <mark>**is not reflected in stock until inbound is confirmed.**</mark> 👉 **[Go to Inventory List](/docs/inventory/inventory-list-au)**

</div>

## 1. Check pending inbound

<div className="img-placeholder">📷 [Image] Inbound List — S2S / TO_INBOUND pending inbound</div>

Check pending inbound records in the **Inbound List**.<br/>
S2S inbound is shown with Type `S2S` and Channel `TO_INBOUND` (inbound created from an outbound registration).

- On the inbound detail screen, you can also see the outbound information entered by the outbound store (`Outbound Method`, `Carrier / Tracking No.`).

## 2. Confirm inbound

<div className="img-placeholder">📷 [Image] Inbound detail — Inbound Confirmed button and confirmation popup</div>

Check that the physical quantity matches `Expected Inbound Qty`, then click **Inbound Confirmed** → **Confirm**.<br/>
Once confirmed, stock is added to the inbound store and the status changes to `Inbound Confirmed`.

- On inbound confirmation, stock is added and <mark>**an inbound record is logged in the inventory ledger by order number**</mark> (`Inbound (Manual)`). 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**
- To confirm multiple records at once, select them with the checkboxes in the list and click **Inbound Confirmed** at the bottom.

<div className="blockquote-warning">

> <mark>**S2S inbound quantities cannot be edited; the outbound quantity is confirmed as is.**</mark><br/>
> If the physical quantity differs, handle it as follows.

</div>

| Case | How to handle |
|---|---|
| **Fewer goods arrived** | After the outbound and inbound store operators check with each other, handle it with an **additional shipment** or an **inventory adjustment** 👉 **[Go to Adjustment](/docs/inventory/adjustment-au)** |
| **More goods arrived** | When the outbound store **creates an additional outbound**, process inbound for the record added to the Inbound List 👉 **[Go to S2S Store Transfer Outbound](/docs/inventory/outbound/s2s-store-transfer-outbound-au)** |

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-04 | Added process summary, cleaned up manual format | Wooju(Landa) |
