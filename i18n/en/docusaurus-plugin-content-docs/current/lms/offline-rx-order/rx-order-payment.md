---
source_hash: "7628a3c052"
sidebar_label: RX Order Creation
sidebar_position: 1
author: Wooju(Landa)
created: "2026-04-27"
countries: [us]
---

# 📍 RX Order Creation

> This guide explains how offline RX orders are created in the store and how to view the created orders in BO.
>
> Path : <span className="path-badge">BO > Order List</span> / <span className="path-badge">POS > RX Operation</span>

## 1. Order Creation via POS Payment Integration

When payment is made in Shopify (US / CA), an order is created automatically in **Unfulfilled status**.

| Step | Description |
|:---:|---|
| **a** | Pay for the RX product in Shopify POS. |
| | *Because the order must be recorded as 'Sales' when it is handed over to the customer, it is created as an incomplete order.* |
| **b** | You can check the created order in the following IIC BO menus. |
| | ⅰ. <span className="path-badge">BO > Order List</span> — initial status : `Pending` |
| | ⅱ. <span className="path-badge">POS > RX Operation</span> — initial status : `Unready` |
| **c** | An SO (Sales Order) is also created in NetSuite. |

:::tip Inventory flow
When the order is created, stock is moved (Movement) from the **Store Sales 1 → Store RX HLD** location.
:::

---

## 2. Created Directly in POS

This is when the order is created directly in POS. The update date is not taken into account.

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
