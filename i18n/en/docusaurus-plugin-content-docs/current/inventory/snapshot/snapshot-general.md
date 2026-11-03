---
source_hash: "9c784df727"
sidebar_label: Inventory Snapshot · Store
sidebar_position: 1
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-03"
countries: [us]
---

# 📍 Inventory Snapshot · Store

> Use this feature to view daily inventory snapshots by store.
>
> Path : `Inventory > Snapshot`

## 👉 What is a snapshot?

| Item | Details |
|---|---|
| **Save time** | Saved automatically every day at 23:00 store local time |
| **Saved data** | Stock for all stores / locations |
| **Purpose** | Check stock on a past date, check closing stock |
| **SAP transfer** | Every day at 01:00 (store local time), the previous day's 23:00 snapshot is sent to the Korean HQ (SAP) |

<div className="blockquote-gray">

> A snapshot records stock at save time "like a photo", so later sales · inbound/outbound · movements · adjustments are not reflected.<br/>
> For current stock, use the real-time inventory list. 👉 **[Go to Inventory List](/docs/inventory/inventory-list)**

</div>

## 1. List search

| Search filter | Description | Notes |
|---|---|---|
| **Brand / BP** | Select brand, BP | |
| **Store** | Select store (multiple selection allowed) | Required |
| **Location** | Select location within the store (multiple selection allowed) | |
| **Search date** | Snapshot date to view (single day) | Required |
| **Keyword** | Product code / product name / barcode | Enter 2+ characters |

- Select a store and search date to view results.
- Search results can be downloaded to Excel.

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
| 2026-11-03 | Added SAP transfer timing to the snapshot table | Wooju(Landa) |
