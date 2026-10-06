---
source_hash: "d74449af3f"
sidebar_label: Rx Prescription Review
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Rx Prescription Review

> This guide explains how to review prescription information on online RX orders and <strong>approve (Confirm) or reject (Reject)</strong> them.
>
> Path : <span className="path-badge">IIC BO > RX (Lens) > Rx Prescription Review</span>

## 👉 How AU RX operates

- The AU RX business runs **online orders only**.
- Lens work is done at **OWNDAYS**, an external lab near the office. Online staff hand over and collect the product and prescription in person.

| Step | Action | Handled by |
|:---:|---|---|
| **1** | Online payment completed → order received in BO LMS via OMS (`Request`) | Online store → IIC BO (automatic) |
| **2** | Review the prescription information, then **Confirm** or **Reject** | Online staff |
| **3-A** | Confirm → lens work proceeds 👉 **[Go to To Customer](/docs/lms/rx-order-management/to-customer-au)** | Online staff |
| **3-B** | Reject → result sent to OMS → refund processed | OMS / Admin |

## 1. View the prescription review list

<div className="img-placeholder">📷 [Image] Rx Prescription Review list and status cards</div>

| Search filter | Description |
|---|---|
| **BP / Store** | Select a BP, then select stores (multiple selection allowed) |
| **Channel** | `ALL` / `ONLINE` / `OFFLINE` (AU uses `ONLINE`) |
| **Review status** | `Request` / `Confirm` / `Reject` / `Canceled` |
| **Search Period** | Based on `Order Date` or `Approval Date` (default: last 30 days) |
| **Keyword** | Order number, store code/name, customer name, phone number, email (2+ characters) |

| Status | Meaning |
|---|---|
| **Request** | Waiting for prescription review — can be approved/rejected |
| **Confirm** | Approved — lens work proceeds |
| **Reject** | Rejected — order cancellation (refund) proceeds |
| **Canceled** | Order canceled |

Click a row in the list to open the detail screen.

## 2. Check prescription information

<div className="img-placeholder">📷 [Image] Rx Prescription Review detail — Index panel on the right</div>

In the **Index** panel on the right of the detail screen, check whether each section is complete (green check).

| Section | What to check |
|---|---|
| **Customer Info** | Customer membership information |
| **Order Info** | Order date and ordered products. **Lens product mapping** is required for each lens quantity (`In This Order` or `Product Search`) |
| **Prescription Values** | `PD` (Single / Dual), and `Sphere`, `Cylinder`, `Axis`, `PD`, `OC` for the left eye `OS (Left Eye)` / right eye `OD (Right Eye)` |
| **Documents** | Prescription file (JPG / PNG / PDF, max 10MB) and `EXP Date` (expiration date) |
| **Delivery** | Customer name, phone number, email, and shipping address (`Address`, `CITY`, `STATE`, `ZIP`) |
| **Comment** | Internal memo |

- Click **Save** to save your changes.

## 3. Approve (Confirm)

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

## 4. Reject

1. Click **Reject**.
2. In the `Please select a reason for Reject.` popup, select a rejection reason.
3. Click **Reject**. The rejection result is sent to OMS, and the order is refunded.

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

> A rejection cannot be undone. The refund is processed in OMS.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU draft (text) | Wooju(Landa) |
