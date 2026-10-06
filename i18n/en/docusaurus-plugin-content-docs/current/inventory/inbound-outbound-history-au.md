---
source_hash: "4d76b078e8"
sidebar_label: Inventory In/Out History
sidebar_position: 10
author: Wooju(Landa)
created: "2026-10-04"
countries: [au]
---

# 📍 Inventory In/Out History

> This menu shows the progress of store-to-store stock transfers — **outbound request → outbound → inbound confirmation** — by product on one screen.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory In/Out History</span>

## 👉 When to use

- To check whether an S2S (store-to-store) transfer has been **completed through inbound confirmation**
- To check the **outbound request · outbound · inbound confirmation date/time and handling account** of a transfer

## 1. List search

<div className="img-placeholder">📷 [Image] Inventory In/Out History search filters</div>

| Search filter | Description | Notes |
|---|---|---|
| **From Store Location** | Select source Brand / BP / Store / Location | Lower-level items are available <mark>**after selecting the upper-level item**</mark> |
| **To Store Location** | Select destination Brand / BP / Store / Location | Lower-level items are available <mark>**after selecting the upper-level item**</mark> |
| **Type** | Transfer type (`S2S` / `L2S` / `S2L`) | |
| **Search Period** | Select the date basis, then enter the search period | • Basis: `Request Date` (outbound request date) / `Confirmed Inbound Date` (inbound confirmation date) / `Registration Date` (registration date)<br/>• Default: `Registration Date`, last 30 days |
| **Keyword** | Product code/name, barcode, registrant (Created By), inbound confirmer (Approved By) | Enter 2+ characters |

- When searching by `Request Date`, outbound items registered directly without an outbound request are not shown.

<div className="blockquote-gray">

> AU uses only store-to-store transfers (**S2S**). L2S / S2L types do not apply.

</div>

## 2. List columns

<div className="img-placeholder">📷 [Image] Inventory In/Out History list</div>

| Column | Description |
|---|---|
| **Request Date** | Date/time the outbound request was registered. `-` for outbound registered directly without a request |
| **Confirmed Inbound Date** | Date/time of inbound confirmation. `-` before confirmation |
| **Registration Date** | Date/time the outbound was registered |
| **In/Outbound Type** | `S2S` / `L2S` / `S2L` |
| **Brand** | Brand name |
| **From Store Location** | Source store code / name |
| **From Location Information** | Source location code / name |
| **To Store Location** | Destination store code / name |
| **To Location Information** | Destination location code / name |
| **Product Info** | Product code / name / barcode |
| **Product Category 1** | HQ SAP master data |
| **Product Category 2** | HQ SAP master data |
| **Outbound Request Qty** | Approved outbound request quantity. `-` for outbound registered directly without a request |
| **Outbound Qty** | Outbound quantity |
| **Confirmed Inbound Qty** | Confirmed inbound quantity. `-` before confirmation |
| **Created By** | Account that registered the outbound (for outbound requests, the account that approved the request) |
| **Approved By** | Account that confirmed the inbound |

- Items appear in the list once the outbound is registered. Outbound requests not yet approved are not shown.
- <mark>**If Confirmed Inbound Date / Qty is `-`, inbound has not been confirmed yet**</mark>.
- Use **Excel Export** to download the list for the current filters.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-04 | AU menu created | Wooju(Landa) |
