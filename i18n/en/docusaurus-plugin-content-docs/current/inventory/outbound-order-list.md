---
source_hash: "b4863bf69c"
sidebar_label: Outbound Order List
sidebar_position: 3
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-12"
countries: [us]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Outbound Order List

> For outbound types that are **created by grouping orders**, such as RX and pre-orders, this menu lets you **view each outbound together with its linked orders**.
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound Order List</span>

## 👉 When to use

- To check **which orders are grouped** into an RX or pre-order outbound
- To **create an outbound** from pre-order store pickup orders
- To check whether an outbound was **registered in NetSuite and WMS (LXP) and completed**

<div className="blockquote-gray">

> This menu shows **only outbounds linked to orders**. Regular stock transfer outbounds (C2C · S2S · L2S · S2L) are shown in `Outbound List`.

</div>

| Outbound Tag | How the outbound is created |
|---|---|
| **RX** | <mark>**Created automatically once a day**</mark>: view only in this menu |
| **Pre-Order** | <mark>**Created manually by the operator**</mark> 👉 See **3. Create outbound** below |

## 1. List search

<AnnotatedImage
  maxWidth="900px"
  src={require('@site/docs/inventory/img/outbound-order-list-01.png').default}
  alt="Outbound Order List — search area"
  boxes={[
    {n: 1, x: 10, y: 16, w: 59.5, h: 18.5},
  ]}
/>

| Search filter | Description | Notes |
|---|---|---|
| **BP** | Select the BP | Default `All` |
| **Store** | Select the from / to store (multiple selection) | Reset when the BP changes |
| **Outbound Status** | Outbound status (multiple selection) 👉 See **5. Outbound status** below | |
| **Outbound Tag** | `All` / `RX` / `Pre-Order` | |
| **Type** | Outbound type (multiple selection)<br/>• `C2C` Corporation to corporation<br/>• `S2S` Store → store<br/>• `L2S` Logistics → store<br/>• `S2L` Store → logistics | |
| **Registration Date** | Outbound registration date range (quick select `Today` / `1 Week` / `1 Month` / `3 Months`) | **Required**, default last 30 days<br/>Based on the from store's time |
| **Keyword** | • From / to store code / store name<br/>• I/V No<br/>• Tracking No<br/>• Order number | At least 2 characters |

- Use **Excel Export** to download the list for the current search conditions. (Up to 10,000 rows)

## 2. List columns

<AnnotatedImage
  maxWidth="900px"
  src={require('@site/docs/inventory/img/outbound-order-list-02.png').default}
  alt="Outbound Order List — pre-order outbound"
  boxes={[
    {n: 1, x: 20.5, y: 84, w: 28.5, h: 15.5},
  ]}
/>

| Column | Description |
|---|---|
| **Registration Date** | Outbound registration date and time (shown with the store time zone), newest first by default |
| **Outbound Status** | Current outbound status 👉 See **5. Outbound status** below |
| **Outbound Tag** | Order type that created the outbound (`RX` / `PREORDER`) |
| **Type** | Outbound type code such as `S2S` · `L2S` |
| **I/V No.** | NetSuite TO number<br/>If there is no TO yet, the BO outbound number (`STM…`) |
| **Order** | Number of orders linked to this outbound |
| **From Store / From Location** | Store and location shipping out (code / name) |
| **To Store / To Location** | Store and location receiving (code / name)<br/>For pre-orders, `1050 / OMNI` of the pickup store |
| **Created By** | Account that registered the outbound |

- Click a row to open the **outbound detail** screen.

## 3. Create outbound (Pre-Order)

<div className="blockquote-gray">

> **RX outbounds** are created automatically once a day, so this menu is for viewing them only.<br/>
> The only outbounds you create directly in this menu are **pre-orders**.

</div>

A pre-order is a **regular order with store pickup**.<br/>
Click **Outbound Registration** to see the orders to ship on the `PRE-ORDER` tab.

<div className="blockquote-warning">

> Store pickup pre-orders <mark>**can be canceled until the customer receives them.**</mark><br/>
> Orders canceled before the outbound is created disappear from the list.

</div>

### Step 1. Search orders

<AnnotatedImage
  maxWidth="640px"
  src={require('@site/docs/inventory/img/outbound-order-list-03.png').default}
  alt="Outbound Registration — Pre-Order search filters and notice"
  boxes={[
    {n: 1, x: 6.5, y: 18, w: 33, h: 6.5},
    {n: 2, x: 5, y: 39.4, w: 90, h: 6.2},
  ]}
/>

| Search filter | Description | Notes |
|---|---|---|
| **BP** | Select the BP | |
| **Store** | Select the pickup store | <mark>**Select the BP first**</mark> to enable it |
| **Date Type** | Date basis<br/>• `Order Date` (default)<br/>• `Launch Date`<br/>• `Ship Date`<br/>• `Pickup Date` | |
| **Registration Date** | Date and time range (default last 30 days) | Time applies only when `Order Date` is selected |
| **Keyword** | Order number, store code / store name | At least 2 characters |

Only orders that meet all of the following appear in the list.
- Pre-order + store pickup orders
  - Not canceled
  - No outbound created yet

### Step 2. Select orders and register

<AnnotatedImage
  maxWidth="640px"
  src={require('@site/docs/inventory/img/outbound-order-list-04.png').default}
  alt="Outbound Registration — select orders and Register"
  boxes={[
    {n: 1, x: 4, y: 73.5, w: 4.2, h: 10.5},
    {n: 2, x: 85.8, y: 91.4, w: 11, h: 3.6},
  ]}
/>

Check the orders to ship and click **Register**.

| Rule | Description |
|---|---|
| **Same BP only** | Only orders from the same BP can be registered together. |
| **Created per store** | Even if you select orders from several pickup stores, outbounds are <mark>**split by pickup store**</mark>. |
| **To location** | Automatically set to the pickup store's `1050 / OMNI` location. |

Registration is blocked with an error in the following cases.
- The from location does not have enough on-hand stock (lenses · packages excluded)
- The from store is in stocktaking
- The pickup store has no address registered

## 4. Outbound detail

<AnnotatedImage
  maxWidth="900px"
  src={require('@site/docs/inventory/img/outbound-order-list-05.png').default}
  alt="Outbound detail — outbound information and linked orders"
  boxes={[
    {n: 1, x: 8.4, y: 6.5, w: 5.6, h: 5.5},
    {n: 2, x: 0.6, y: 47.8, w: 7.8, h: 5.5},
    {n: 3, x: 74.5, y: 53.5, w: 24.8, h: 7},
  ]}
/>

| Area | Description |
|---|---|
| **Header** | I/V No. (click to copy) and outbound status |
| **Outbound Information** | Registration date and time, from / to store and location |
| **Order List** | Number of linked orders (`N orders`) and products per order<br/>• `Order #` Order number<br/>• `Product Info` Product code / name<br/>• `Product Category` / `Product Sub category` Product classification<br/>• `Outbound Qty (Registered)` Registered outbound quantity<br/>• `Outbound Qty (Completed)` Completed outbound quantity |

- Use **Excel Export** to download the outbound information and products per order.
- L2S · S2L outbounds in `Outbound Registered` status can be canceled with the **Outbound Canceled** button.<br/>
Canceling also cancels the NetSuite TO and the WMS outbound request, and the orders appear again in the outbound creation list.

## 5. Outbound status

In the US, creating an outbound **requests a TO in NetSuite**, and after the TO information is received, **an outbound request is sent to WMS (LXP) (B2B)**.

<div className="blockquote-gray">

> Outbound created → NetSuite TO requested → TO information received → WMS (LXP) outbound request (B2B) → WMS outbound completed

</div>

| Status | Meaning | When it changes |
|---|---|---|
| **Outbound Planned** | Outbound has been created | Right after the outbound is created |
| **Pending Registration** | Waiting for the NetSuite TO | When the TO is requested from NetSuite |
| **Outbound Registered** | WMS (LXP) has accepted the outbound request | When the WMS acceptance is received |
| **Registration Failed** | Registration in NetSuite or WMS failed | When the failure result is received |
| **Outbound Completed** | Outbound has been completed in WMS | When the WMS completion is received |
| **Outbound Canceled** | Outbound has been canceled | When canceled on the detail screen, or when WMS sends a cancellation |

- Statuses are not changed by users; they change **automatically based on NetSuite · WMS results**. (Except cancellation)
- If the status is `Registration Failed`, contact the IT team via the system Operation channel (Slack).

When the status becomes `Outbound Completed`, inventory is updated as follows.
- From location: outbound pending released, **on-hand stock deducted**
- To store `1050 / OMNI`: **pending inbound** created

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-11-12 | Menu content written (search · pre-order outbound creation · detail · outbound status, based on code) | Wooju(Landa) |
| 2026-09-15 | Initial version | Wooju(Landa) |
