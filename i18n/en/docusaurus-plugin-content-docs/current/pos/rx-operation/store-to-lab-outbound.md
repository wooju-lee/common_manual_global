---
source_hash: "b62e54ce78"
sidebar_label: Store > Lab Outbound Creation
sidebar_position: 1
author: Wooju(Landa)
created: "2026-04-21"
updated: "2026-10-03"
countries: [us]
---

# 📍 Store > Lab Outbound Creation

> This guide explains the full flow for RX sales orders from Shopify: looking up the order, registering prescription information, creating the Lab outbound, and printing the shipping label.
>
> Path : <span className="path-badge">IIC BO > POS > RX Operation View</span>

## 👉 RX order flow

> **Unready** → **Request** → **Confirm** → **Register outbound** → **Print shipping label**

| Step | Status | Handled by | Description |
|:---:|---|---|---|
| 1 | **Unready** | Shopify | RX order created (required information not registered) |
| 2 | **Request** | Store | Prescription information registered → requested to the Lab |
| 3 | **Confirm / Reject** | Lab staff | Review the information and decide whether the work is possible |
| 4 | **Confirm** | Store | Approved order → outbound can be registered |
| 5 | **Outbound completed** | Store | Register outbound + print shipping label |

---

## 1. Check RX Orders

![RX Operation List](@site/docs/pos/img/rx-operation-list.png)

When an **RX sale**, as opposed to a regular sale, occurs in Shopify, you can find it in **Unready** status in the POS > RX Operation View list.

<div className="blockquote-warning">

> RX orders must be created in Shopify as orders with **Unfulfill** applied.

</div>

| Status | Description |
|---|---|
| **Unready** | Only the order has been created; required information is not yet filled in (**not-ready order**) |

## 2. Register Prescription & Customer Information

![Register prescription & customer information](@site/docs/pos/img/스크린샷%202026-04-21%2018.40.11.png)

> **Step 1.** The store optician selects/enters the required prescription information in the order detail and saves it.

<div className="blockquote-gray">

> If the customer saved a prescription 'in advance' on the .com online My Page, you can look up the membership and select the pre-registered prescription.
>
> 1. **Look up the membership** in the same way as a regular membership search.
> 2. The **list of prescriptions** pre-registered for that ID is shown.
> 3. Select 1 prescription, then check the saved prescription image with the **View** button.
> 4. When you select a prescription, the **Prescription** information below is filled in automatically.
>
> - Expired prescriptions are **automatically excluded** and not shown in the list.
> - <mark>When you select a prescription from the membership information, the Prescription information is filled in automatically, so no separate input is needed.</mark>

</div>

> **Step 2.** Once prescription information is registered, the order status changes to **Request** and the request is sent to the Lab staff.
>
> If the store has an optician, they process **Confirm** directly in `IIC BO > RX > Prescription Review`.

## 3. Approve / Reject Through Prescription Review (From Lab Optician)

![Lab review and approval](@site/docs/pos/img/스크린샷%202026-04-21%2018.41.07.png)

Lab staff (lens technicians) review the registered information, decide whether the work is possible, and process **Confirm** or **Reject**.

| Result | Description |
|---|---|
| **Confirm** | Work is possible → the store registers the outbound |
| **Reject** | Work is not possible → check the reason and register again |

If the store has an optician, the store registers all required prescription information and also processes **Confirm**.

---

## 4. Create Outbound for Confirmed Orders Only (Outbound Registration)

![Create outbound](@site/docs/pos/img/스크린샷%202026-04-21%2018.46.51.png)

To send multiple confirmed RX orders to the Lab together, select the orders to send and register an outbound.

> **Step 1.** Select orders whose <mark>**Approval Status is Confirm**</mark> to create the outbound.
>
> Only orders that the Lab staff approved as workable are eligible for outbound.

> **Step 2.** The created outbound appears as **1 outbound entry** in <span className="path-badge">Front POS > Outbound Label Print</span>. → [Outbound Label Print](/docs/pos/outbound-label-print)

> **Step 3.** Because multiple orders were combined into 1 outbound, **1 shipping label** is printed.

:::danger Contact the carrier
Printing the shipping label and the carrier's pickup of the goods are **separate**. You must **contact the carrier separately**.
:::

---

<div className="qna-section">

## ❓ FAQ

> **Q. The order does not appear in RX Operation View.**
>
> A. Check whether the order was created in Shopify in <u>Unfulfill</u> status.
>
> Orders without Unfulfill applied are not shown in RX Operation View.

> **Q. The customer's prescription is not shown.**
>
> A. Expired prescriptions are <u>automatically excluded</u> and not shown.
>
> Ask the customer to register a valid prescription again on the online My Page.

> **Q. I want to check the prescription image.**
>
> A. Select 1 prescription from the list, then view the saved prescription image with the <u>View</u> button.

> **Q. Can I combine multiple orders into one outbound?**
>
> A. In RX Operation View, you can combine orders in <u>Confirm</u> status into 1 outbound, and it is printed as <u>1 B2B shipping label</u>.

</div>

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-21 | Initial version | Wooju(Landa) |
| 2026-10-03 | Split into separate RX Operation / Outbound Label Print documents | Wooju(Landa) |
