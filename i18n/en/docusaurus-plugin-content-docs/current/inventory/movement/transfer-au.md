---
source_hash: "eadd99fe49"
sidebar_label: Inventory Movement
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-12"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Inventory Movement

> This page explains how to move stock between locations within a single store.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory Movement</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are reflected only in IIC BO inventory.

</div>

## 👉 Location movement process

> **Movement Registration** → **Select store · from/to locations** → **Select products** → **Enter quantities and click Register**

| Step | Action | Handled by |
|:---:|---|---|
| **1** | Register movement (select from / to locations) | 👤 Store |
| **2** | On registration, stock is immediately deducted from the from location and added to the to location | ⚙️ Automatic |

- Because the movement is within the same store, <mark>**it is processed on registration, with no inbound confirmation or approval step**</mark>.
- The record is logged in the inventory movement list and the inventory ledger. 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**

## 1. Register a movement

In the **Inventory Movement** list, click **Movement Registration** → on the **Location Inventory Movement** tab, register in 3 steps.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/movement/img/transfer-01.png').default}
  alt="Click Movement Registration in the Inventory Movement list"
  boxes={[
    {x: 85.2, y: 71.5, w: 8.6, h: 5.2},
  ]}
/>

| Step | Screen | What to enter |
|:---:|---|---|
| **1** | Set Before / After Movement Location | Select the store, then the from location (`Location (Before Movement)`) and the to location (`Location (After Movement)`) |
| **2** | Processed Inventory Search | Search for and select the products to move (check `Inventory Qty`) |
| **3** | Enter Movement Information | Enter the movement quantity per product, select `Remarks` if needed, then click **Register** |

### Step 1. Select from / to locations

- On the **Location Inventory Movement** tab, select Brand → BP → Store, then select the from location (`Location (Before Movement)`) and the to location (`Location (After Movement)`), and click **Next**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/movement/img/transfer-02.png').default}
  alt="Step 1. Select the store and from/to locations"
  boxes={[
    {x: 8.9, y: 22.6, w: 19.0, h: 4.2},
    {x: 9.2, y: 51.8, w: 37.2, h: 17.6},
    {x: 84.8, y: 85.8, w: 8.9, h: 4.0},
  ]}
/>

### Step 2. Select products to move

- Search by product code or name, check the products to move, and click **Next**.
- `Inventory Qty` is the stock quantity in the from location.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/movement/img/transfer-03.png').default}
  alt="Step 2. Search and select products to move"
  boxes={[
    {x: 4.5, y: 34.0, w: 71.5, h: 14.5},
    {x: 5.9, y: 76.8, w: 2.0, h: 7.2},
    {x: 87.3, y: 92.8, w: 9.7, h: 3.4},
  ]}
/>

### Step 3. Enter quantity · Remarks and register

- Enter the `Movement Qty` per product, select `Remarks`, and click **Register**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/movement/img/transfer-04.png').default}
  alt="Step 3. Enter movement quantity and Remarks, then Register"
  boxes={[
    {x: 64.1, y: 67.6, w: 11.7, h: 11.6},
    {x: 78.9, y: 67.2, w: 13.2, h: 5.4},
    {x: 85.9, y: 88.2, w: 9.4, h: 4.4},
  ]}
/>

### Movement quantity · Remarks rules

- Enter the movement quantity <mark>**based on the from location's available stock**</mark>. You cannot register a quantity that exceeds available stock.
- `Remarks` options
  - `DP Setup Due to Theft`
  - `Initial DP Setup`
  - `Damage`
  - `Inventory Allocation`
  - `Temporary Hold`
  - `Etc.`

<div className="blockquote-warning">

> <mark>**A movement is applied immediately on registration and cannot be canceled.**</mark><br/>
> If you moved stock by mistake, register another movement in the opposite direction.

</div>

<div className="blockquote-gray">

> In-store SALES → DP movement can be handled more easily in POS. 👉 **[Go to Inventory Transfer SALES → DP](/docs/pos/front-pos-main/store-inventory-transfer-au)**

</div>

## 2. Bulk upload via Excel

Click **Movement Registration** → on the **Inventory Bulk Upload** tab, click **Download Upload Template** to get the template (`Inventory_movement_upload_form_V2.xlsx`), fill it in, and upload it.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/movement/img/transfer-05.png').default}
  alt="Example of a filled-in Inventory Movement upload template"
/>

| Column | Required | How to enter |
|---|:---:|---|
| **Store Code (From)** | **Required** | Master store code |
| **Location Code (From)** | **Required** | Master location code |
| **Store Code (To)** | Optional | Master store code (for in-store movement, same as the from store) |
| **Location Code (After)** | **Required** | Master location code |
| **Product Code** | **Required** | Master SAP product code |
| **Movement Qty** | **Required** | Enter **based on the from location's available stock**; cannot be registered if it exceeds available stock |
| **Remark** | **Required** | Select from the dropdown<br/>`DP Setup Due to Theft`<br/>`Initial DP Setup`<br/>`Damage`<br/>`Inventory Allocation`<br/>`Temporary Hold`<br/>`Etc.` |

<div className="blockquote-gray">

> <mark>**Within one file, the from store · from location · to store must be the same in every row.**</mark><br/>
> Only the to location can differ by row, and the same product code cannot be entered twice for the same to location.<br/>
> For in-store movement, the from location and to location must be different.

</div>

| Upload limit | Rule |
|---|---|
| File | Excel file (.xlsx / .xls), up to 5MB |
| Rows | Up to 300 rows per upload |
| To locations | Up to 20 per upload<br/>Movements are grouped and created per to location |

- <mark>**If any row has an error, the entire file is not registered.**</mark> Fix the rows shown in the error list and upload again.

<div className="qna-section">

## ❓ FAQ

> **Q. I can't register a movement.**
>
> A. Check whether the from or to location is <u>under stocktaking</u>, or whether the movement quantity exceeds the from location's <u>available stock</u>.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-04 | Added process summary · Excel upload rules, cleaned up manual format | Wooju(Landa) |
| 2026-10-12 | Added screenshots, split registration into steps | Wooju(Landa) |
