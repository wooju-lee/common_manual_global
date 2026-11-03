---
source_hash: "5f6fd547f3"
sidebar_label: C2C Corporate Outbound
sidebar_position: 1
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-03"
countries: [us]
---

# 📍 C2C Corporate Outbound

> C2C : Corporation To Corporation, an outbound type for transactions between BPs.<br/>
> The outbound type is set automatically when you select the outbound · inbound store (location).
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## Outbound types {#outbound-types}

| Type | Description | From → To | Example use |
|:---:|---|---|---|
| **C2C** | Between BPs | BP → BP | After BP logistics inbound, items must be returned to HQ and stock must be deducted (shipped out) in the system |
| **S2L** | Store → logistics | Store → logistics warehouse <span className="info-badge">Same BP only</span> | Store stock must be sent back to logistics (e.g. store return) |
| **S2S** | Between stores | Store → store <span className="info-badge">Same BP only</span> | Stock must be moved between locations set up as 'stores' in the system |
| **L2S** | Logistics → store | Logistics warehouse → store <span className="info-badge">Same BP only</span> | Logistics stock must be distributed (shipped out) to stores |

## C2C outbound processing

<mark>**C2C outbound is set to `Outbound Completed` immediately on registration, and the outbound store's stock is deducted right away.**</mark><br/>
No outbound request is sent to WMS (LXP); stock is deducted only in BO.

## Key restrictions

| Item | Details |
|---|---|
| **No outbound during stocktaking** | You cannot ship out while stocktaking is in progress at the outbound store · location. |
| **Up to 300 SKUs** | One outbound can contain up to 300 products (SKUs). |
| **No duplicate products** | The same product code cannot be added twice in one outbound. Combine the quantities into one line. |

<div className="blockquote-gray">

> Registration screen · procedure guide is being prepared.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-09-15 | Initial version | Wooju(Landa) |
| 2026-11-03 | Moved outbound type comparison table (S2L page → C2C), added C2C processing method · restrictions | Wooju(Landa) |
