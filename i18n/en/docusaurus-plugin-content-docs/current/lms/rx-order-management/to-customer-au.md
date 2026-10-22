---
source_hash: "ab6cecc026"
sidebar_label: To Customer
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-21"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';
import ProcessFlow from '@site/src/components/ProcessFlow';

# 📍 To Customer

> This guide covers the flow for approved online RX orders: lens work, outbound inspection, shipping label registration, and label / AC card printing.
>
> Path : <span className="path-badge">IIC BO > RX (Lens) > Rx Work Management > To Customer</span>

## 👉 AU Online RX Work process

<ProcessFlow
  perRow={3}
  steps={[
    {no: '1', title: 'Shipment created', desc: 'A shipment is created automatically for each confirmed order (ONLINE → AU_RX_LAB)', statuses: [
      {k: 'BO : Outbound', v: ['Create', '(Auto) Outbound Completed']},
    ]},
    {no: '2', title: 'Inbound created', desc: 'Lab inbound is created once the shipment auto-completes (AU_RX_LAB)', statuses: [
      {k: 'BO : Inbound', v: 'Pending Inbound'},
    ]},
    {no: '3', title: 'Inbound confirmed (manual)', link: 'At the lab (when OWNDAYS work is done)', focus: '📍 Staff deliver the product and prescription to the lab (OWNDAYS) in person', desc: 'Confirm the inbound when the order is handed to the lab (Inbound List)', statuses: [
      {k: 'BO : Inbound', v: ['Pending Inbound', 'Inbound Confirmed']},
    ]},
    {no: '4', title: 'Work status changed', desc: 'Change the RX work status once the work is done (ready to ship)', statuses: [
      {k: 'BO : Rx Work Management', v: 'Outbound Inspection'},
    ]},
    {no: '5', title: 'Label register / print', desc: ['Register / print the customer shipping label', '• Labels can be registered only in Outbound Inspection', '• Once registered, the status changes to Completed automatically'], statuses: [
      {k: 'BO : Rx Work Management', v: ['Outbound Inspection', 'Completed']},
    ]},
    {no: '6', title: 'Finalized', desc: ['Carrier pickup completed', '• Completed → Finalized (automatic)', '• ONLINE RX Sales created and AU_RX_LAB pending-outbound quantity deducted (automatic)'], statuses: [
      {k: 'BO : Rx Work Management', v: ['Completed', 'Finalized']},
    ]},
  ]}
/>

| Step | Action |
|:---:|---|
| **1** | For each confirmed order, a shipment (ONLINE → AU_RX_LAB) is created automatically and immediately completed (`Outbound Completed`). |
| **2** | Once the shipment auto-completes, an inbound is created at AU_RX_LAB (`Pending Inbound`). |
| **3** | <mark>**Staff deliver the product and prescription to the lab (OWNDAYS) in person**</mark>; once delivered, confirm the inbound manually in the **Inbound List** (`Inbound Confirmed`). 👉 **[Go to lab inbound confirmation](#2-confirm-lab-inbound)** |
| **4** | When the lens work is done, change the work status to `Outbound Inspection` in **Rx Work Management**. |
| **5** | In `Outbound Inspection`, register / print the customer shipping label; once the label is registered, the status updates to `Completed`. |
| **6** | When the carrier picks up the package, the status updates automatically from `Completed` to `Finalized`, ONLINE RX Sales is created, and the AU_RX_LAB pending-outbound quantity is deducted. |

<div className="blockquote-gray">

> **AU outbound creation** : **An outbound is created immediately for each approved order**.

</div>

## 1. View the work list

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-01.png').default}
  alt="Rx Work Management — Work Status, Date Search, To Customer tab"
  boxes={[
    {x: 9.1, y: 18.3, w: 7.0, h: 2.3},
    {x: 1.4, y: 23.4, w: 30.1, h: 4.9},
    {x: 1.4, y: 52.8, w: 5.0, h: 2.0},
    {x: 36.0, y: 67.4, w: 8.0, h: 26.2},
  ]}
/>

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

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-02.png').default}
  alt="Work Status Management panel"
  boxes={[
    {x: 66.2, y: 9.2, w: 31.8, h: 22.6},
  ]}
/>

In **Work Status Management** on the right of the detail screen, change `Worker`, `Work Status`, `Work Type`, `Processing Period`, and `Work ETA`, then click **Save**.

- Change to `In Progress` after handing over to OWNDAYS, and to `Outbound Inspection` after collecting and inspecting the finished product.
- To change multiple orders at once, select them in the list and click **Change Status**.
- `Completed` and `Finalized` are changed automatically by the system and cannot be selected manually.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-03.png').default}
  alt="Work Status dropdown — Completed / Finalized cannot be selected"
  boxes={[
    {x: 66.2, y: 14.4, w: 31.6, h: 2.2},
    {x: 66.4, y: 25.0, w: 10.0, h: 3.0},
  ]}
/>

## 4. Register the shipping label

Register the shipping label for orders in `Outbound Inspection` status.

<div className="img-placeholder">📷 [Image] Label Registration popup — Carrier · Service Type</div>

| Step | Action |
|:---:|---|
| **1** | Select the order at the top of the detail screen or in the list, then click **Label Registration** |
| **2** | Check `Carrier` and `Service Type` (default: `Australia Post` · `Ground`) |
| **3** | Click **Confirm** → label registration request is sent to TMS |
| **4** | Once the label is registered, the status changes to `Completed` |

- You can select multiple orders in the list to register in bulk. Only orders in `Outbound Inspection` status are sent to TMS.

| Field | Default | Description |
|---|---|---|
| **Carrier** | `Australia Post` | Australian RX customer shipments use Australia Post. |
| **Service Type** | `Ground` | Register with `Ground` by default.<br/><mark>**Change to `Express` only when requested by CS.**</mark> |

- The selected carrier and service type apply to all orders selected together. Select and register Express orders separately.

## 5. Print label / AC card

| Button | Description |
|---|---|
| **Label Print** | Print the shipping label in `Completed` status |
| **Serial Print** | Print the AC card (serial card) |
| **Print Picking List** / **Invoice Print** | Print the picking list and invoice |

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-02.png').default}
  alt="Top buttons on the detail screen — Serial Print / Label Print"
  boxes={[
    {x: 67.4, y: 4.7, w: 5.6, h: 1.6},
    {x: 93.3, y: 4.7, w: 5.6, h: 1.6},
  ]}
/>

Print the label and AC card and ship them with the product. After that, the shipping status is received automatically from TMS and changes to `Finalized`. Check shipping details in **Delivery Tracking** on the right.

Click **Print Picking List** or **Invoice Print** to open a preview popup, then print with the button at the bottom of the popup.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-04.png').default}
  alt="Picking List Preview"
  boxes={[
    {x: 81.2, y: 87.5, w: 10.2, h: 2.4},
  ]}
/>

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-05.png').default}
  alt="Invoice Preview"
  boxes={[
    {x: 79.5, y: 86.2, w: 9.7, h: 2.2},
  ]}
/>

## 6. Cancel work / refund

| Button | Available status |
|---|---|
| **Cancel Work** | `Pending` / `Inbound Inspection` / `In Progress` / `Outbound Inspection` |
| **Refund** | `Finalized` (select a return reason, then process) |

Click **Cancel Work** to open the reason popup. Select a reason, then proceed.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-06.png').default}
  alt="Cancel Work reason selection"
  boxes={[
    {x: 8.4, y: 32.0, w: 28.2, h: 5.6},
    {x: 9.0, y: 43.8, w: 16.0, h: 7.4},
  ]}
/>

For `Do Not Process` and `Prescription Information Needs Verification`, you must also select a **Sub Reason**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-management/img/to-customer-07.png').default}
  alt="Sub Reason selection"
  boxes={[
    {x: 4.5, y: 43.7, w: 29.2, h: 31.0},
  ]}
/>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU draft (text) | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
| 2026-10-21 | Shipping label registration — Australia Post carrier, service type (Ground / Express)<br/>AU Online RX Work process flow added and steps reorganized | Wooju(Landa) |
