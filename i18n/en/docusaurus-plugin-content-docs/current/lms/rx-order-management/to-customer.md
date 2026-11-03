---
source_hash: "ddaa904e53"
sidebar_label: To Customer
sidebar_position: 1
author: Wooju(Landa)
created: "2026-04-27"
countries: [us]
---

# 📍 To Customer

> This guide covers the B2C process in which confirmed RX orders are worked on in the Lab and shipped directly to the customer.
>
> Path : <span className="path-badge">BO > RX Work Management > To Customer</span>

## 1. RX Work Management Overview

Confirmed RX orders are managed in two tabs depending on the shipping method.

| Tab | Shipping flow | Applies to |
|---|---|---|
| **To Customer** | Lab → Customer | Online orders, offline orders (when chosen by the customer) |
| **To Store** | Lab → Store → Customer | Offline orders |

Right after confirmation, the initial work status is `Pending` (waiting for work), and you can set or edit the items below.

### Editable items

| Item | Description |
|---|---|
| **Worker** | Select the person in charge from the accounts in the worker permission group. |
| **Work Status** | `Pending` · `Inbound Inspection` · `In Progress` · `Re Do` · `Outbound Inspection` : can be changed freely |
| | `Completed` : **changes automatically** when the label is received (ready to print the shipping label) |
| | `Finalized` : **changes automatically** when delivery is complete (final closed status) |
| **Work Type** | In-house (Inhouse) / outsourced (Outsource) |
| **Processing Period** | Set the expected lead-time group |
| **Work ETA** | Calculated automatically from the confirmation date + Processing Period; can be edited afterward |

---

## 2. B2C Work Process

| Step | Description |
|:---:|---|
| **1** | **Print work orders** — print in bulk from the list or one at a time from the detail screen. |
| **2** | **Do the work** — organize the work orders and the physical items into trays, then work on them (Inhouse / Outsource). |
| **3** | **Update status** — change the Work Status as the work progresses. |
| **4** | **Register label** — run **Label Registration** for orders in `Outbound Inspection` status. |
| | The shipping label is created and received through the BO ↔ TMS (ShipStation) integration. |
| **5** | **Receive label** — once the label is received, the status changes automatically from `Outbound Inspection` → `Completed`. |
| **6** | **Print labels** — print labels in bulk in `Completed` status. |
| **7** | **Delivery complete** — once the carrier picks up the package and the outbound is complete, the status changes automatically to `Finalized`. |

:::caution Label registration notes
Bulk label registration can process **up to 30 orders**, and receiving the labels can take **up to about 5 minutes**.
:::

:::info Changing the shipping type
The B2C type can apply to both online and offline orders.
- **Online orders** : the shipping type cannot be changed
- **Offline orders** : the shipping type can be changed until the outbound label is registered
:::

---

## 3. Exceptions

### Cancelling an RX order during work

Cancellation is not possible while stock is in transit, i.e., **when there is an outbound whose inbound has not been completed**.

### RX returns

If a return is requested through CS for an order closed in `Finalized` status, process it as follows.

| Channel | Handling |
|---|---|
| **Online** | Send a refund request to OMS |
| **Offline** | Send a refund request to Shopify + process the stock inbound at the Lab |

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
