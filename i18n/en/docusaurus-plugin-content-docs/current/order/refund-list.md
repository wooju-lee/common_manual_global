---
source_hash: "724e9ef931"
sidebar_label: Refund List
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [us]
---

# 📍 Refund List

> Use this menu to view return orders collected in IIC BO.
>
> Path : <span className="path-badge">IIC BO > Order > Refund List</span>

## 👉 When to use

- To check **return (refund) history** from online and offline channels
- To check the **original order number** of a return
- To check **which store > location** the returned stock was added to

---

## 1. Search returns

<div className="img-placeholder">📷 [Image] Refund List search and list screen</div>

Select the period and store, then click **Search**.<br/>
Use the `TODAY` / `1 WEEK` / `1 MONTH` / `3 MONTHS` buttons to quickly select a period.

<div className="blockquote-gray">

> To find a specific return, enter the refund number or original order number in the **Refund No., Original Order No., Store Code, Store Name** field. (2+ characters)

</div>

---

## 2. Refund type

| Refund Type | Meaning |
|---|---|
| **REFUND** | Regular return |
| **EXCHANGE** | Exchange |
| **FORCE_REFUND** | Force refund (a refund forcibly processed in OMS) |

---

## 3. What you can see in the list

- **Refund Date** is shown in each store's local time zone.
- The BO refund number is shown in parentheses under **Refund No.**, and the original order number of the return is shown in <strong>Original Order No.</strong> on the right.
- If one original order is returned multiple times, each return is shown as a separate row.
- Click **Excel Export** to download the search results.

---

## 4. View return details

Click <strong>Refund No.</strong> in the list to open the return detail popup. The top of the popup shows the original order number, the BO refund number, and the **refund type**.

<div className="img-placeholder">📷 [Image] Return detail popup — Refund Information / Refund Products</div>

- **Refund Information** shows the return date/time, store, and currency.
- **Refund Products** shows the quantity and amounts (Unit, Net, VAT, Total Price) for each returned product.
  - Each product shows its **Store** and **Location Information**, so you can check **which store and location the returned stock was received into**.
  - **Packages** included with a product are shown with an amount of `0` and are not included in the Total quantity at the bottom.

| Type | Where returned stock is received |
|---|---|
| **Online return** | The store > location is set based on the **grading value** sent from OMS |
| **Offline return** | Always added to the **Sales location** of the store that received the return |

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created menu, added search instructions | Wooju(Landa) |
