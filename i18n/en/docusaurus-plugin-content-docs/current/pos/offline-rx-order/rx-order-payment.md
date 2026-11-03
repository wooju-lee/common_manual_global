---
source_hash: "7628a3c052"
sidebar_label: RX Order Creation
sidebar_position: 1
author: Wooju(Landa)
created: "2026-04-27"
countries: [us]
---

# 📍 RX Order Creation

> This guide explains how Offline RX orders are created in the store and how to look up the created orders in the BO.
>
> Path : <span className="path-badge">BO > Order List</span> / <span className="path-badge">POS > RX Operation</span>

## 1. Order Creation via Payment POS Integration

When payment is made in Shopify (US / CA), the order is created automatically as an **order in Unfulfill status**.

| Step | Description |
|:---:|---|
| **a** | Pay for the RX product in Shopify POS |
| | *Because it must be recorded as 'Sales' when handed over to the customer, it is created as an incomplete order* |
| **b** | The created order can be checked in the following IIC BO menus |
| | ⅰ. <span className="path-badge">BO > Order List</span> — Initial status : `Pending` |
| | ⅱ. <span className="path-badge">POS > RX Operation</span> — Initial status : `Unready` |
| **c** | An SO (Sales Order) is also created in Netsuite |

:::tip Inventory flow
When the order is created, an inventory movement occurs from the **Store Sales 1 → Store RX HLD** location.
:::

---

## 2. Created in the POS

This is the case where the order is created directly in the POS. The update date is not taken into account.

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
