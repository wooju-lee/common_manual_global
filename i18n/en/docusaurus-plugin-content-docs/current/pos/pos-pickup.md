---
source_hash: "097a8a0eaa"
sidebar_label: Store Pickup
sidebar_position: 8
author: Wooju(Landa)
created: "2026-04-21"
countries: [us]
---

# 📍 Store Pickup

> Use this menu to look up store pickup orders placed online and to process pickup, cancellation, and returns.
>
> Path : <span className="path-badge">IIC BO > POS > Store Pickup List</span>

## 👉 Online store pickup status flow

After the outbound instruction is completed in SCM and the goods arrive at the store, the order proceeds as follows.

> **Store inbound** → **Customer notification email sent (sent 1 day before when .com inbound is completed)** → **Customer visits and pickup is completed**

| Step | Status | Description |
|:---:|---|---|
| 1 | **Waiting for Arrival** | Initial status of a pickup order. The customer can cancel it. |
| 2 | **Pickup Available** | Inbound to the store is completed and the order can be handed over to the customer. It can be cancelled by the customer or in the POS. |
| 3 | **Completed** | The customer has picked up the order (closed). |

---

## 1. Look Up Online Orders by QR

When a customer places an online order with store pickup, a **QR** is created for looking up the order.

- Scan the QR to look up the order in the store.

## 2. Online : Store Pickup Inbound Completion (Stock Update)

Online stock is shipped to the store on the 'outbound date' set to match the pickup date.

> 1. When the goods arrive at the store, **check the quantity** and process **Inbound Confirm** to update the stock.
> 2. The updated stock is received into the **Store : Omni location**.

Menus where you can check this : <span className="path-badge">Inventory > Inbound</span> · <span className="path-badge">Inventory > Inventory List</span> · <span className="path-badge">Inventory > Inventory Ledger</span>

## 3. Customer Notification and Pickup Processing

Once inbound is completed, an **inbound completion email** is sent to the customer automatically.

| Status | Description |
|---|---|
| **Waiting for Arrival** | Not yet received at the store |
| **Pickup Available** | Inbound completed → can be handed over to the customer |

- The customer may not pick up on the pickup date; they visit and pick up after receiving the notification email.
- You can process the **handover to the customer** on the detail screen.

## 4. Auto-Cancellation Rules

<div className="blockquote-warning">

> If the customer does not pick up within a set period, the order is **cancelled automatically**.

</div>

| Case | Auto-cancellation time |
|---|---|
| **Normal inbound** | Cancelled automatically at **00:00 on day 15, after 14 days** from the pickup date |
| **Delayed inbound (exception)** | Cancelled automatically at **00:00 on day 16, after +15 days** from the inbound date |

- <mark>Why the exception case counts +15 days: the next-day pickup notice is sent on the evening of the inbound date, so that day is not meaningful to the customer and **+1 day is added**.</mark>

## 5. Cancellation

You can cancel an order in **Waiting for Arrival** or **Pickup Available** status.

> 1. Select the **cancellation reason**.
> 2. When the cancellation is processed, the stock **remains in the Omni location**.

### Post-cancellation stock handling

In the cancelled orders tab, you can decide how the cancelled stock will be used.

| Handling | Stock movement |
|---|---|
| **Assign to store stock** | Move from Store : Omni → **Store : Sales** location |
| **Return to online stock** | Stays in the existing **Store : Omni** location |

## 6. Returns

The store can process returns for completed store pickup orders or regular online orders.

<div className="blockquote-warning">

> A return can be processed only after the **return to the store is requested online on .com** and a **return QR** is issued.

</div>

### Return steps

> 1. Click the **Return processing** button.
> 2. **Scan the return QR** to look up the return order.
> 3. Select the **returned products** and the **return reason**, then process.
> 4. When the return is completed, a **refund request** is made and the stock **remains in the Omni location**.

### Post-return stock handling

In the returned orders tab, you can **select a grading** for the returned stock to record it and process the stock movement.

| Handling | Stock movement | Example |
|---|---|---|
| **Assign to store** | Move to the Store : Sales location | Use as store stock if it can be restored to sellable condition |
| **Return to online** | Stays in the Store : Omni location | Send back to the online warehouse |
| **Dispose** | Move to the Store : Defect location | To be disposed of |

---

<div className="qna-section">

## ❓ FAQ

> **Q. The customer did not come on the pickup date.**
>
> A. The order stays in Pickup Available status for up to <u>14 days</u> from the pickup date.
>
> It is cancelled automatically at 00:00 on day 15. After cancellation, handle the stock.

> **Q. What happens to the stock after cancellation?**
>
> A. Cancelled stock <u>remains in the Omni location</u>.
>
> In the cancelled orders tab, you can assign it to the store or return it to online stock.

> **Q. Can I process a return without a return QR?**
>
> A. No. You must have the return QR issued after the <u>return is requested online on .com</u>.

> **Q. Can returned stock be used as store stock right away?**
>
> A. In the returned orders tab, select a <u>grading</u> to record its condition. If it can be restored to sellable condition, you can assign it to store stock.

</div>

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-21 | Initial version | Wooju(Landa) |
