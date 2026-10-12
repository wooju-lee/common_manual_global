---
source_hash: "62f12f3173"
sidebar_label: C2C Corporate Outbound
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 C2C Corporate Outbound

> This page explains how to register a **C2C (Corporation To Corporation)** outbound to return goods from the Australia BP to Korea HQ.
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are reflected only in IIC BO inventory.

</div>

## 👉 C2C outbound process

> **Select the Corporate Outbound tab** → **Select the outbound store** → **Select products** → **Enter quantities and click Register**

- Use this when **defects** are found on BP inbound, or when goods must be **returned to Korea HQ** and system stock needs to be shipped out (deducted).
- The inbound store is **automatically set to Korea HQ**, so you only select the outbound store.
- <mark>**On registration, the outbound is completed (`Outbound Completed`) and the outbound store's stock is deducted.**</mark>

<div className="blockquote-gray">

</div>

## 1. Register outbound

Click **Outbound Registration / Request** → on the **Corporate Outbound** tab, register in 3 steps.

| Step | Screen | What to enter |
|:---:|---|---|
| **1** | Select Outbound Store | Select the outbound store and location. The inbound area shows `It will be processed as an HQ return.` |
| **2** | Select Outbound Product | Select the products to ship out (only products with stock in the outbound location are shown) |
| **3** | Enter Outbound Information | Enter the outbound quantity per product, then click **Register** |

### Step 1. Select the outbound store

- Select the **Corporate Outbound** tab, choose the outbound Brand · BP · Store · Location, then click **Next**.

<AnnotatedImage
  src={require('@site/docs/inventory/outbound/img/c2c-outbound-01.png').default}
  alt="Select the Corporate Outbound tab, then select the outbound store and location"
  boxes={[
    {x: 21.5, y: 22.5, w: 16.0, h: 7.0},
    {x: 6.3, y: 56.5, w: 87.8, h: 9.8},
    {x: 86.7, y: 83.5, w: 8.8, h: 4.6},
  ]}
/>

### Step 2. Select outbound products

- The Inbound Store is automatically set to Korea HQ and shows `It will be processed as an HQ return.`; the outbound type is shown as `C2C`.
- Only products with stock in the outbound location are shown. Check the products to ship out, then click **Next**.

<AnnotatedImage
  src={require('@site/docs/inventory/outbound/img/c2c-outbound-02.png').default}
  alt="Step 2. Confirm the inbound store is set to HQ return, then select outbound products"
  boxes={[
    {x: 3.9, y: 51.4, w: 92.2, h: 7.9},
    {x: 5.5, y: 62.9, w: 4.0, h: 19.8},
    {x: 87.2, y: 91.7, w: 8.8, h: 2.8},
  ]}
/>

### Step 3. Enter outbound quantities

- Enter the outbound quantity per product, then click **Register**.
- The outbound quantity must be **1 or more**, and **registration is not possible if available stock is insufficient**.

A C2C outbound becomes <mark>**Outbound Completed**</mark> immediately on registration and is reflected in stock right away, and the outbound history (`Outbound (Confirmed)`) is recorded in the inventory ledger. 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**

<div className="blockquote-warning">

> <mark>**C2C outbound cannot be canceled after registration.**</mark><br/>
> Double-check the outbound store, products, and quantities before registering. C2C outbound cannot use the approval request (Request Outbound) method.

</div>

## 2. Bulk upload

If you have many products to ship out, you can register them in bulk with the Excel template. 👉 **[Go to Outbound Bulk Upload](/docs/inventory/outbound/outbound-bulk-upload-au)**

## 3. Check outbound history

<div className="img-placeholder">📷 [Image] Outbound Detail — Outbound Information input</div>

On the **Outbound List** tab, search with Type `C2C` and click a row to view the outbound detail.<br/>
In **Outbound Information** on the detail screen, you can enter the outbound method (`Package` / `Direct Delivery` / `Quick Delivery`) and the carrier and tracking number, then click **Save**.

<div className="qna-section">

## ❓ FAQ

> **Q. I can't register an outbound.**
>
> A. Check whether the outbound location is <u>under stocktaking</u>, or whether the outbound quantity exceeds <u>available stock</u>.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-04 | Added process summary, cleaned up manual format | Wooju(Landa) |
