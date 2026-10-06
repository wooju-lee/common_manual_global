---
source_hash: "c8f19d8370"
sidebar_label: Order List
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Order List

> Use this menu to view orders collected in IIC BO.
>
> Path : <span className="path-badge">IIC BO > Order > Order List</span>

## 👉 When to use

- To check the **progress status** of online and offline orders (confirmed, shipped, delivered, etc.)
- To find **order details** by a specific order number

## 1. Search orders

<div className="img-placeholder">📷 [Image] Order List search and list screen</div>

Select the period and store, then click **Search**.<br/>
Use the `TODAY` / `1 WEEK` / `1 MONTH` / `3 MONTHS` buttons to quickly select a period.

<div className="blockquote-gray">

> To find a specific order, the fastest way is to enter the order number in the **Order No., Store Code, Store Name** field. (2+ characters)

</div>

## 2. Order status

> 🌐 Online order · 🏪 Offline order

| Status | Meaning | Details |
|---|---|---|
| **PENDING** | Order created | 🌐 **Online** (regular / RX) : Order is created after the customer completes payment<br/>🏪 **Offline** orders have no PENDING status |
| **CONFIRMED** | Order confirmed | 🌐 **Online** regular : When the shipment instruction (Shipment `CREATE`) is received from OMS<br/>&emsp;• On confirmation, **Outbound Pending Qty** is allocated (stock reserved), and the customer can no longer cancel<br/>🌐 **Online** RX : Same as online regular — when the shipment instruction (`CREATE`) is received<br/>&emsp;• Lens work `Request` starts |
| **FULFILLED** | Shipped | 🌐 **Online** regular : When shipment completion (Shipment `SHIP`) is received from OMS<br/>&emsp;• For partial shipments, the status stays CONFIRMED and changes only when all quantities are shipped<br/>&emsp;• At this point, **sales (sale) are created (sales recognized)** and stock is deducted<br/>🌐 **Online** RX : When TMS shipment departure (`IN_TRANSIT`) is received after shipping label registration<br/>&emsp;• Confirmed lens work orders remain CONFIRMED |
| **COMPLETED** | Delivered | 🌐 **Online** regular : Changes when delivery completion (`COMPLETE`) is received from OMS<br/>🌐 **Online** RX : When TMS delivery completion (`DELIVERED`) is received<br/>🏪 **Offline** regular orders (POS sales) are picked up in store, so they are set to COMPLETED as soon as they are created |
| **CANCELED** | Order canceled | 🌐 **Online** regular : Changes when a cancellation (`CANCEL` / `REJECT`) is received from OMS |

## 3. What you can see in the list

- **Order Date** is shown in each store's local time zone.
- The original order number is shown in parentheses under **Order No.** Click the order number to view the order details.
- **Location Information** shows the location where the order stock is deducted (e.g. `1000 / SALES`).
- Click **Excel Export** to download the search results.

## 4. View order details

Click <strong>Order No.</strong> in the list to open the order detail popup. The top of the popup shows the order number and the current **order status**. The popup layout is the same regardless of status.

<div className="img-placeholder">📷 [Image] Order detail popup — Order Information / Product List</div>

- **Order Information** shows the order date/time, store, location, and currency.
- **Product List** shows the quantity and amounts (Unit, Net, VAT, Total) for each ordered product.
  - **Cancel Qty** shows the quantity canceled from the order.
  - **Packages** included with a product (e.g. `2025 PACKAGE SET`) are shown with an amount of `0` and are not included in the Total quantity at the bottom.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created menu, added search instructions | Wooju(Landa) |
