---
source_hash: "00ac9ea09d"
sidebar_label: To Store
sidebar_position: 2
author: Wooju(Landa)
created: "2026-04-27"
countries: [us]
---

# 📍 To Store

> This guide covers the B2B process in which confirmed RX orders are worked on in the Lab, shipped to the store, and handed over to the customer.
>
> Path : <span className="path-badge">BO > RX Work Management > To Store</span>

## 1. B2B Work Process

| Step | Description |
|:---:|---|
| **1** | **Print work orders** — print in bulk from the list or one at a time from the detail screen. |
| **2** | **Do the work** — organize the work orders and the physical items into trays, then work on them (Inhouse / Outsource). |
| **3** | **Update status** — change the Work Status as the work progresses. |
| **4** | **Register outbound** — run **Outbound Registration** for orders in `Outbound Inspection` status. |
| | An Outbound (TO) is created in BO to move the stock to the store in bulk. |
| **5** | **Automatic status change** — once the outbound is registered, the status changes automatically from `Outbound Inspection` → `Completed`. |

---

## 2. Store Inbound and Customer Handover

Follow-up process in the store after the outbound is completed.

| Step | Description | Path |
|:---:|---|---|
| **6** | When the product arrives at the store, check the stock and **confirm the inbound**. | <span className="path-badge">Inventory > Inbound</span> |
| **7** | For orders whose inbound is complete, send the customer an **arrival and pickup request email**. | <span className="path-badge">POS > RX Operation</span> |
| **8** | When the customer visits and receives the product, complete the **Shopify Order Fulfillment**. | |
| | When fulfillment is complete, the work status changes automatically to `Finalized`. | |

:::tip Label printing
Labels for the created outbound (TO) can be printed in <span className="path-badge">Inventory > Outbound Order List</span>.
:::

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
