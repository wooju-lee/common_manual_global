---
source_hash: "fcdbccedc5"
sidebar_label: Rx Prescription Review
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-21"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';
import ProcessFlow from '@site/src/components/ProcessFlow';

# 📍 Rx Prescription Review

> This guide explains how to review prescription information on online RX orders and <strong>approve (Confirm) or reject (Reject)</strong> them.
>
> Path : <span className="path-badge">IIC BO > RX (Lens) > Rx Prescription Review</span>

## 👉 AU Online RX process

- The AU RX business runs **online orders only**.
- Lens work is done at **OWNDAYS**, an external lab near the office. Online staff hand over and collect the product and prescription in person.

<ProcessFlow
  steps={[
    {no: '1', title: 'Payment', sub: 'GM Admin', desc: 'Customer pays online → order created'},
    {no: '2', title: 'Order received', sub: 'OMS → BO', statuses: [
      {k: 'OMS', v: 'Pending'},
      {k: 'BO : Order', v: 'Pending'},
    ]},
    {no: '3', title: 'Inventory allocated', sub: '1 hour after payment', focus: '📍 Viewable in Rx Prescription Review', statuses: [
      {k: 'OMS', v: 'Shipment Requested'},
      {k: 'BO : Order', v: 'Confirm'},
      {k: 'BO : Rx Prescription Review', v: 'Request'},
    ]},
    {no: '4', title: 'Prescription review', sub: 'BO : Rx Prescription Review', desc: 'Check the prescription, then Confirm or Reject'},
  ]}
  branches={[
    {no: '5-A', title: 'Confirm', tone: 'ok', desc: ['1. Confirm event sent to OMS', '2. Order added to the lens work list'], statuses: [
      {k: 'BO : Rx Prescription Review', v: 'Confirm'},
      {k: 'BO : Rx Work Management', v: 'Pending'},
    ]},
    {no: '5-B', title: 'Reject', tone: 'ng', desc: ['1. Order cancellation sent to OMS → refund in GM Admin'], statuses: [
      {k: 'BO : Rx Prescription Review', v: 'Reject'},
      {k: 'OMS', v: 'Canceled'},
      {k: 'GM ADM', v: 'Canceled'},
    ]},
  ]}
/>

| Step | Action |
|:---:|---|
| **1** | When the customer completes online payment, the order is created in **GM Admin**. |
| **2** | The order is received in BO through OMS. Until inventory is allocated, it appears as `Pending` only in the **Order List**. 👉 **[Go to Order List](/docs/order/order-list-au)** |
| **3** | **One hour** after payment, once OMS completes inventory allocation (`Shipment Requested`), the order is <mark>**viewable in Rx Prescription Review**</mark>. |
| **4** | Check the prescription and **Confirm** or **Reject** it. The result is sent to OMS. |
| **5-A** | **Confirm**: the confirm event is sent to OMS, which completes the prescription review, and the order moves on to lens work. 👉 **[Go to To Customer](/docs/lms/rx-order-management/to-customer-au)** |
| **5-B** | **Reject**: sent to OMS as an **order cancellation**, and the customer **refund is processed** in the online store (GM Admin). |

## 1. View the prescription review list

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-review/img/rx-prescription-review-01.png').default}
  alt="Rx Prescription Review list — search filters, status cards, Review status"
  boxes={[
    {x: 1.0, y: 13.0, w: 65.6, h: 18.6},
    {x: 1.0, y: 34.0, w: 98.6, h: 10.4},
    {x: 41.6, y: 53.4, w: 6.2, h: 41.4},
  ]}
/>

- You can click a row in the list to open the detail screen.

### Search filters

You can search for prescription reviews using the filters at the top of the list.

| Search filter | Description |
|---|---|
| **BP / Store** | Select a BP, then select stores (multiple selection allowed) |
| **Channel** | `ALL` / `ONLINE` / `OFFLINE` <mark>**(AU uses `ONLINE` only)**</mark> |
| **Review status** | `Request` / `Confirm` / `Reject` / `Canceled` |
| **Search Period** | Based on `Order Date` or `Approval Date` (default: last 30 days) |
| **Keyword** | Order number, store code/name, customer name, phone number, email (2+ characters) |

### Review status

These are the review statuses of incoming RX orders.

| Status | Meaning |
|---|---|
| **Request** | Waiting for review (can be confirmed / rejected) |
| **Confirm** | Approved — lens work proceeds |
| **Reject** | Rejected — order cancellation (refund) proceeds |
| **Canceled** | Cancellation completed |

## 2. Check the RX order detail (Index)

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-review/img/rx-prescription-review-02.png').default}
  alt="Rx Prescription Review detail — Index panel, lens product mapping, prescription upload, REJECT / CONFIRM / SAVE"
  boxes={[
    {x: 85.0, y: 5.4, w: 13.8, h: 22.8},
    {x: 39.8, y: 44.0, w: 24.6, h: 5.0},
    {x: 2.2, y: 62.0, w: 81.2, h: 9.0},
    {x: 73.6, y: 95.8, w: 26.0, h: 4.0},
  ]}
/>

In the **Index** panel on the right of the detail screen, check whether each section is complete (green check).

| Section | What to check | Editable |
|---|---|:---:|
| **Customer Info** | Online orders store the membership ID, so you can check the member's information. |  |
| **Order Info** | • Order date<br/>• Ordered products (frame / package / lens)<br/>• Frame to be worked on for each lens (`Mapped Product`) — mapping required for each lens quantity<br/>• Purchase quantity and amount<br/><mark>**The `C.O.F` column appears only for lens-only purchases and does not apply to AU.**</mark> |  |
| **Prescription** | Patient · prescriber · prescription dates · prescription values 👉 See **Prescription details** below | ✅ |
| **Documents** | Prescription file (JPG / PNG / PDF, max 10MB) and `EXP Date` (expiration date) |  |
| **Delivery** | Customer name, phone number, email, and shipping address (`Address`, `CITY`, `STATE`, `ZIP`) | ✅ |
| **Comment** | Internal memo | ✅ |

## 3. Prescription details

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-review/img/rx-prescription-review-03.png').default}
  alt="Prescription Values — patient, prescriber, dates, left / right eye values"
  boxes={[
    {x: 2.6, y: 5.0, w: 81.0, h: 36.6},
    {x: 2.6, y: 44.0, w: 81.0, h: 17.8},
  ]}
/>

All prescription details are <mark>**received from the prescription data of the online order**</mark>.

| Group | Fields | Notes |
|---|---|---|
| **Patient** | `Name`<br/>`Date of Birth` | Received from the online prescription |
| **Prescriber** | `Prescriber`<br/>`License No.`<br/>`Signature` (`Y` / `N`)<br/>`Address` (prescriber address)<br/>`Phone` / `Fax` | Received from the online prescription |
| **Date** | `Issue Date`<br/>`Expiry Date` | Received from the online prescription |
| **Prescription Values** | For right eye `OD (Right Eye)` / left eye `OS (Left Eye)`:<br/>`Sphere`, `Cylinder`, `Axis`, `PD` (Single / Dual), `OC` | Received from the online prescription |

## 4. Purchaser / patient (recipient) information

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/lms/rx-order-review/img/rx-prescription-review-04.png').default}
  alt="Purchaser Info / Patient & Shipping Info — purchaser, patient (recipient), and shipping information"
  boxes={[
    {x: 1.4, y: 0.6, w: 83.4, h: 16.0},
    {x: 1.4, y: 17.8, w: 83.4, h: 51.6},
  ]}
/>

Check the information of the customer who placed the order (Purchaser), the patient who will receive the product (Patient), and the shipping information.

| Group | Fields | Notes |
|---|---|---|
| **Purchaser Info** | `Name`<br/>`Phone`<br/>`Email` | • Received from the online order<br/>• <mark>**Not editable**</mark> |
| **Patient & Shipping Info** | `Patient Name`<br/>`Phone`<br/>`Email` | • Received from the online order<br/>• <mark>**Editable until Confirm**</mark><br/>• After Confirm, edit it in **Rx Work Management** until shipment<br/>• `Patient Name` is auto-filled from the patient name on the prescription |
| **Shipping Type** | `Ship to Address`<br/>`Ship to Store` | <mark>**AU uses `Ship to Address` only**</mark> (`Ship to Store` is not used) |
| **Shipping Address** | `Address` / `Address Line 2`<br/>`CITY`, `STATE`, `ZIP` | <mark>**Editable until shipment (before label registration / printing)**</mark> |

## 5. Approve (Confirm)

1. Check that all required information is entered. (Prescription values, EXP Date, PD, at least 1 prescription file, contact information, shipping address, lens product mapping)
2. Click **Confirm**.
3. In the `Do you want to ‘ Confirm’ approval for this task?` popup, click **Confirm**.
4. Manage work for approved orders in `Rx Work Management`.

<div className="blockquote-warning">

> **If the Confirm / Reject buttons are disabled, check that:**
> - the account has **approval permission**
> - the order status is `Request`
> - all required items (Index panel) are complete.

</div>

## 6. Reject

1. Click **Reject**.
2. In the `Please select a reason for Reject.` popup, select a rejection reason.
3. Click **Reject**. The order is sent to OMS as a cancellation, and the refund is processed in the online store (GM Admin).

| Rejection reason | Detailed reason (Required) |
|---|---|
| Frame is Out of stock | — |
| Do Not Process | Invalid Prescription Types / Out of recommended range / Add power |
| Prescription Information Needs Verification | Unable to verify the image / Missing prescription information / International prescription |
| Incompatible Lens-Frame | — |
| Do Not Accept P.O box shipping | — |
| Payment Method Change / Purchase a Different Product / Change of Mind | — |
| System Error / Policy Violation / Other | — |

<div className="blockquote-gray">

> A rejection cannot be undone. The refund is processed automatically in the online store (GM Admin).

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU draft (text) | Wooju(Landa) |
| 2026-10-21 | AU Online RX process flow added and steps broken down, screen images added, RX order detail (Index) · prescription details · purchaser / patient (recipient) sections reorganized | Wooju(Landa) |
