---
source_hash: "66158975e0"
sidebar_label: Inventory Snapshot (WH)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-03"
countries: [us]
---

# 📍 Inventory Snapshot (WH)

> Use this feature to view inventory snapshots for the logistics warehouse (WH).
>
> Path : `Inventory > Snapshot`

## 👉 What is a WH snapshot?

This screen compares warehouse (WH) stock side by side across three systems: **IIC BO · ERP (NetSuite) · WMS (LXP)**.

| Source | Save time |
|---|---|
| **IIC BO** | Saved automatically every day at 23:00 store local time |
| **ERP (NetSuite)** | Saved when the snapshot is sent from the ERP |
| **WMS (LXP)** | Saved when the snapshot is sent from the WMS |

<div className="blockquote-gray">

> A snapshot records stock at save time "like a photo", so later sales · inbound/outbound · movements · adjustments are not reflected.<br/>
> For current stock, use the real-time inventory list. 👉 **[Go to Inventory List](/docs/inventory/inventory-list)**

</div>

## 1. List search

| Search filter | Description | Notes |
|---|---|---|
| **Brand / BP** | Select brand, BP | |
| **Store** | Select WH store (single selection only) | Required |
| **Search date** | Snapshot date to view (single day) | Required |
| **Keyword** | Product code / product name / barcode | Enter 2+ characters |
| **Show differences only** | Show only products with a quantity difference between BO-ERP or BO-WMS | Optional |

## 2. Compared locations

Each row shows one product, with quantities by location and the differences between systems (BO − ERP / BO − WMS).

| Source | Compared locations |
|---|---|
| **IIC BO · ERP** | • Available(1110)<br/>• Online(online store 1000)<br/>• Online Damage(online store 1020)<br/>• Damage(1120)<br/>• Holding(1130)<br/>• Lost(1140)<br/>• Discontinued(1170)<br/>• PS Available(PS store 1110)<br/>• TikTok(1150) |
| **WMS** | • Available(1110)<br/>• Damage(1120)<br/>• Holding(1130)<br/>• Lost(1140) |

- WMS does not manage Discontinued(1170) · TikTok(1150) separately, so those columns are not shown. Discontinued stock is included in the Available difference.

<div className="qna-section">

## ❓ FAQ

> **Q. What happens if I search a date with no snapshot?**
>
> A. If no snapshot was saved on that date, the results are empty. Snapshots are saved automatically every day, but may be missed due to system maintenance or other reasons.

> **Q. Why are the quantities different from real-time stock?**
>
> A. A snapshot is stock at save time, so later inbound/outbound · movements · adjustments are not reflected.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-09-15 | Initial version | Wooju(Landa) |
| 2026-11-03 | Moved content from the Inventory Snapshot (Overview) page (verified against code) | Wooju(Landa) |
