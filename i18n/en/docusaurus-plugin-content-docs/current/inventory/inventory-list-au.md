---
source_hash: "b133764deb"
sidebar_label: Inventory List
sidebar_position: 6
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory List

> This page explains how to check real-time product stock quantities by BP > store > location.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory List</span>

## 👉 When to use

- To quickly check **whether a specific product is in stock**
- To check **stock status by location** within a store
- To check the **actually usable quantity** of products with outbound or adjustment in progress

## 1. List search

<div className="img-placeholder">📷 [Image] Inventory List search filters and list</div>

| Search filter | Description | Notes |
|---|---|---|
| **Brand / BP** | Select brand, BP | Available <mark>**after selecting a brand**</mark> |
| **Store** | Select store (multiple selection allowed) | Available <mark>**after selecting a BP**</mark> |
| **Location** | Select location within the store (multiple selection allowed) | Available <mark>**after selecting a Store**</mark> |
| **Product Category 1 / 2** | Product category | |
| **Keyword** | BP · store · product code/name, barcode | Enter 2+ characters |

## 2. Stock quantity fields

| Field | Meaning |
|---|---|
| **On-hand Qty** | On-hand stock per product (total stock) |
| **Outbound Pending Qty** | Quantity held before outbound is completed |
| **Adjustment Pending Qty** | Quantity held by adjustments that are registered but not yet approved (**Confirm**) or rejected (**Rejected**) |
| **Available Qty** | Quantity actually usable: on-hand stock minus outbound pending and adjustment pending |
| **Pending Inbound** | Quantity to be received into the store (before inbound confirmation) |

- <mark>**Available Qty = On-hand Qty − Outbound Pending − Adjustment Pending**</mark>
- <mark>Check actually usable stock based on **Available Qty**.</mark>
- Use **Excel Export** to download the list for the current filters. If the search range is too large, a message asks you to narrow the range and try again.

<div className="qna-section">

## ❓ FAQ

> **Q. Why are On-hand Qty and Available Qty different?**
>
> A. Quantities in outbound pending or adjustment pending are excluded from <u>Available Qty</u>.

> **Q. A product shipped from another store is not in my stock yet.**
>
> A. Products shipped via S2S are added to inventory only after the receiving store <u>confirms inbound</u>. Until then, they are shown in `Pending Inbound`.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
