---
source_hash: "c6de504f80"
sidebar_label: L2S Distribution Outbound
sidebar_position: 4
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-03"
countries: [us]
---

# 📍 L2S Distribution Outbound

> L2S : Logistics To Store, an outbound type for distributing logistics warehouse stock to stores. 👉 **[Go to Outbound types](/docs/inventory/outbound/c2c-outbound#outbound-types)**
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## Outbound status

This outbound is integrated with ERP (NetSuite) · WMS (LXP), and its status changes at each processing stage.

`Outbound Planned` → `Pending Registration` → `Outbound Registered` → `Outbound Completed`

| Status | Meaning |
|---|---|
| **Outbound Planned** | Outbound registered. Not yet sent to ERP · WMS |
| **Pending Registration** | Outbound request sent to ERP · WMS |
| **Outbound Registered** | WMS has accepted the request |
| **Outbound Completed** | WMS (LXP) has completed the outbound. The outbound store's stock is deducted. |
| **Registration Failed** | Registration in ERP · WMS failed |
| **Outbound Canceled** | Canceled in WMS |

<div className="blockquote-gray">

> The status changes automatically when the result is received from WMS and cannot be changed manually.<br/>
> If the status is `Registration Failed`, contact the IT team via the system Operation channel (Slack).

</div>

## Key restrictions

| Item | Details |
|---|---|
| **Same BP only** | The outbound store and inbound store must belong to <mark>**the same BP**</mark>. |
| **No outbound during stocktaking** | You cannot ship out while stocktaking is in progress at the outbound store · location. |
| **Up to 300 SKUs** | One outbound can contain up to 300 products (SKUs). |
| **No duplicate products** | The same product code cannot be added twice in one outbound. Combine the quantities into one line. |
| **Inbound store address required** | WMS (LXP) ships to <mark>**the inbound store's master address**</mark>. If the address is missing or invalid, the outbound cannot be registered. |

<div className="blockquote-gray">

> Registration screen · procedure guide is being prepared.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-09-15 | Initial version | Wooju(Landa) |
| 2026-11-03 | Added outbound status · restrictions (moved from the Transfer Order page) | Wooju(Landa) |
