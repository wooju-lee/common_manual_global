---
source_hash: "6844e8a50d"
sidebar_label: To Customer
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 To Customer

> This guide covers the flow for approved online RX orders: lens work, outbound inspection, shipping label registration, and label / AC card printing.
>
> Path : <span className="path-badge">IIC BO > RX (Lens) > Rx Work Management > To Customer</span>

## 👉 AU online RX work process

| Step | Action | Handled by |
|:---:|---|---|
| **1** | On prescription approval, an **S2S outbound from the online store → lab (AU_RX_LAB) is automatically created and completed** (frame deducted from online stock) | IIC BO (automatic) |
| **2** | Confirm lab inbound (manual) | Online staff |
| **3** | Hand over the product + prescription directly to the external lab **OWNDAYS** → lens work | Online staff / OWNDAYS |
| **4** | Collect the finished product → update work status → `Outbound Inspection` | Online staff |
| **5** | Select a carrier + request shipping label registration (TMS) | Online staff |
| **6** | Print the shipping label + AC card, then ship | Online staff |
| **7** | Receive shipping status → update order status, save RX sales, and deduct lab stock (frame, package, lens) | IIC BO (automatic) |

<div className="blockquote-gray">

> **AU outbound creation** : Other countries collect approved orders and create outbounds in one batch per day, but in AU **an outbound is created immediately for each approved order**.

</div>

## 1. View the work list

<div className="img-placeholder">📷 [Image] Rx Work Management — To Customer tab list</div>

- Select **To Customer** in the top tab. (All AU online RX orders are To Customer.)
- Search by `Work Status`, `Date Search` (Order Date / Approval Date / Complete Date), and more.
- Click a row to open the detail screen.

### Work Status

| Status | Changed by | Meaning |
|---|---|---|
| **Pending** | Automatic | Waiting for work right after approval |
| **Inbound Inspection** | Manual | Lab inbound inspection |
| **In Progress** | Manual | Lens work in progress |
| **Re Do** | Manual | Rework |
| **Outbound Inspection** | Manual | Outbound inspection — label registration available |
| **Completed** | Automatic | Shipping label registered |
| **Finalized** | Automatic | Shipment departed (outbound confirmed) |

## 2. Confirm lab inbound

Manually confirm the lab (AU_RX_LAB) inbound for the outbound that was automatically created on approval.

<div className="img-placeholder">📷 [Image] Inbound List — S2S inbound with To Store AU_RX_LAB</div>

| Step | Action |
|:---:|---|
| **1** | In `Inventory > Inbound List`, search with To Store set to the lab (AU_RX_LAB) and Type `S2S` |
| **2** | In the inbound detail, click **Inbound Confirmed** → **Confirm** |

<div className="blockquote-warning">

> **If the lab inbound is not confirmed, the shipping label cannot be registered.** (`Frame inventory not arrived at Lab` error)

</div>

## 3. Manage work status

<div className="img-placeholder">📷 [Image] Rx Work Management detail — Work Status Management panel</div>

In **Work Status Management** on the right of the detail screen, change `Worker`, `Work Status`, `Work Type`, `Processing Period`, and `Work ETA`, then click **Save**.

- Change to `In Progress` after handing over to OWNDAYS, and to `Outbound Inspection` after collecting and inspecting the finished product.
- To change multiple orders at once, select them in the list and click **Change Status**.
- `Completed` and `Finalized` are changed automatically by the system and cannot be selected manually.

## 4. Register the shipping label

Register the shipping label for orders in `Outbound Inspection` status.

<div className="img-placeholder">📷 [Image] Label Registration popup — Carrier selection</div>

| Step | Action |
|:---:|---|
| **1** | Select the order at the top of the detail screen or in the list, then click **Label Registration** |
| **2** | Select a `Carrier` |
| **3** | Click **Confirm** → label registration request is sent to TMS |
| **4** | Once the label is registered, the status changes to `Completed` |

- You can select multiple orders in the list to register in bulk. Only orders in `Outbound Inspection` status are sent to TMS.

## 5. Print label / AC card

| Button | Description |
|---|---|
| **Label Print** | Print the shipping label in `Completed` status |
| **Serial Print** | Print the AC card (serial card) |
| **Print Picking List** / **Invoice Print** | Print the picking list and invoice |

<div className="img-placeholder">📷 [Image] Top buttons on the detail screen — Serial Print / Label Print</div>

Print the label and AC card and ship them with the product. After that, the shipping status is received automatically from TMS and changes to `Finalized`. Check shipping details in **Delivery Tracking** on the right.

## 6. Cancel work / refund

| Button | Available status |
|---|---|
| **Cancel Work** | `Pending` / `Inbound Inspection` / `In Progress` / `Outbound Inspection` |
| **Refund** | `Finalized` (select a return reason, then process) |

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU draft (text) | Wooju(Landa) |
