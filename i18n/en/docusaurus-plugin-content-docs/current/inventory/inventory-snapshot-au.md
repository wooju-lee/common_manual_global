---
source_hash: "9c75ff3a42"
sidebar_label: Inventory Snapshot
sidebar_position: 9
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Snapshot

> This page explains how to view stock status as of a specific date. Snapshots are saved automatically **every day at 23:00 store local time**.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory Snapshot</span>

## 👉 What is a snapshot?

| Item | Details |
|---|---|
| **Save time** | Every day at 23:00 store local time |
| **Saved data** | Stock list for all stores / locations |
| **Purpose** | Check stock on a past date, check closing stock |
| **SAP transfer** | At snapshot save time, total stock by store-location is sent to the Korean HQ (SAP) |

<div className="blockquote-gray">

> A snapshot records stock at save time "like a photo", so later sales · inbound/outbound · adjustments are not reflected. For current stock, use the real-time inventory list. 👉 **[Go to Inventory List](/docs/inventory/inventory-list-au)**

</div>

## 1. List search

<div className="img-placeholder">📷 [Image] Inventory Snapshot search filters</div>

| Search filter | Description | Notes |
|---|---|---|
| **Brand / BP** | Select brand, BP | • Required<br/>• Available <mark>**after selecting a brand**</mark> |
| **Store** | Select store (multiple selection allowed) | • Required<br/>• Available <mark>**after selecting a BP**</mark> |
| **Location** | Select location within the store (multiple selection allowed) | Available <mark>**after selecting a Store**</mark> |
| **Save Date** | Snapshot date to view (single day) | Required |
| **Keyword** | Product code/name, barcode | Enter 2+ characters |

## 2. List columns and how to search

<div className="img-placeholder">📷 [Image] Inventory Snapshot list</div>

| Column | Description |
|---|---|
| **Save Date** | Snapshot save date |
| **BP Information** | BP code / name |
| **Store Information** | Store code / name |
| **Location Information** | Location code / name |
| **Product Info** | Product code / name / barcode |
| **Product Category 1** | HQ SAP master data |
| **Product Category 2** | HQ SAP master data |
| **Collection** | HQ SAP master data (`-` if none) |
| **On-hand Qty** | On-hand stock at save time |
| **Available Qty** | Available stock at save time (on-hand − outbound pending − adjustment pending) |
| **Outbound Pending Qty** | Outbound pending quantity at save time |
| **Adjustment Pending Qty** | Adjustment pending quantity at save time |
| **Pending Inbound** | Pending inbound quantity at save time |

- The 5 stock quantity columns are shown under the **IIC BO** group on screen.
- Products with on-hand stock (On-hand Qty) of `0` or less are not shown in the list.
- There is no default list view for snapshots. <mark>**Select brand > BP > store to search by date (Save Date)**</mark>.
  - Before selection, the message `Please select a period and location to view the snapshot list.` is displayed.
- If there are results, use **Excel Export** to download.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
