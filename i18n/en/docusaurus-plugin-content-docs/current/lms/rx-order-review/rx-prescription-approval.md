---
source_hash: "ba7f228f3f"
sidebar_label: Rx Prescription Review
sidebar_position: 1
author: Wooju(Landa)
created: "2026-04-27"
updated: "2026-11-03"
countries: [us]
---

# 📍 Rx Prescription Review

> This guide explains how to review RX prescription information received from stores or online, and approve or reject it depending on whether the work can be done.
>
> Path : <span className="path-badge">BO > RX Prescription Review</span>

## 1. Search Conditions

This menu shows **only orders whose RX Approval Status is `Request`**.

| Channel | When it changes to `Request` |
|---|---|
| **Offline** | When the store has finished saving the required information |
| **Online** | When the `Shipment` information is received |

---

## 2. Approve (Confirm)

After checking the prescription, click **Confirm** if the work can be done.

| Item | Description |
|---|---|
| **Status after approval** | Shown in `Pending` (waiting for work) status in <span className="path-badge">RX Work Management</span> |
| **Offline** | Sends the order information to Admin based on the selected membership `→ ADM` |
| **Online** | Sends the approval result to OMS `→ OMS` |

---

## 3. Reject

If the work cannot be done, click **Reject**. When rejected, the RX order is **cancelled (refunded) immediately**.

| Item | Description |
|---|---|
| **Offline** | Sends a Shopify Refund request `→ Shopify` |
| **Online** | Sends a refund request to OMS `→ OMS` |

:::tip Operation note
- **Stores with an optician** : can Confirm orders directly in the store.
- **Stores without an optician** : the US entity's Lab reviews and processes the orders.
:::

---

## 4. When membership is sent to GM Admin (Offline)

Offline RX orders are <mark>**first sent to GM Admin when they are confirmed in this menu, not when the order is created (POS payment)**</mark>.<br/>
They are sent again when the serial card is printed, and when the order is canceled or returned.

| When | Sent | What is sent |
|---|---|---|
| **Order created** (POS payment) | Not sent | — |
| **Confirm** (prescription approved) | **First send** | Order details + membership (customer ID · nationality) + prescription · shipping details |
| **Reject** | Not sent | — |
| **Serial card printed** | Sent again | Confirm data + serial number |
| **Canceled during work** (Rx Work Management) | Sent | The same order, sent as a refund |
| **Return** | Sent | Return sale |

<div className="blockquote-gray">

> Only Gentle Monster brand orders are sent. Online RX orders are not included.<br/>
> Orders without a linked membership are sent without membership details (customer ID · nationality).<br/>
> If a send is missing, ask the IT team to resend it via the system Operation channel (Slack).

</div>

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
| 2026-11-03 | Added when membership is sent to GM Admin (Offline) | Wooju(Landa) |
