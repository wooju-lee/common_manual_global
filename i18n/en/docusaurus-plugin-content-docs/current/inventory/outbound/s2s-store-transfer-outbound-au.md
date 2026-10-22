---
source_hash: "a6373bb5c9"
sidebar_label: S2S Store Transfer Outbound
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-21"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 S2S Store Transfer Outbound

> In Australia, all master data is set up as stores, and movement between stores is defined as <strong>S2S (Store To Store)</strong>.<br/>
> This page explains how to register an S2S outbound and how the outbound is completed.
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are reflected only in IIC BO inventory.

</div>

## 👉 S2S outbound process

> **Select the General Outbound tab** → **Select the outbound store** → **Select the inbound store** → **Select products** → **Enter quantities and click Register**

| Step | Action | Handled by |
|:---:|---|---|
| **1** | Set the outbound store / inbound store and register the outbound | 👤 Outbound store |
| **2** | Outbound completed immediately on registration (`Outbound Completed`) + outbound store stock deducted | ⚙️ Automatic |
| **3** | Inbound info is created for the inbound store on outbound completion | ⚙️ Automatic |
| **4** | Inbound store checks the goods and confirms inbound → stock added | 👤 Inbound store |

<div className="blockquote-gray">

> S2S outbound is only possible **between stores within the same BP (Australia)**.<br/>
> For how the inbound store handles it, see S2S Store Transfer Inbound. 👉 **[Go to S2S Store Transfer Inbound](/docs/inventory/inbound/s2s-store-transfer-au)**

</div>

## 1. Register outbound

Click **Outbound Registration / Request** → on the **General Outbound** tab, register in 4 steps.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-register-01.png').default}
  alt="Click Outbound Registration / Request on the Outbound List → General Outbound tab"
  boxes={[
    {x: 80.0, y: 50.9, w: 12.3, h: 1.9},
    {x: 11.9, y: 33.2, w: 11.1, h: 2.3},
    {x: 10.9, y: 44.7, w: 65.9, h: 3.9},
    {x: 12.1, y: 55.0, w: 63.4, h: 2.4},
  ]}
/>

| Step | Screen | What to enter |
|:---:|---|---|
| **1** | Select Outbound Store | Select the processing method, then the outbound store and location<br/>• **Outbound Registration** : outbound completed immediately on registration<br/>• **Request Outbound** : shipped out after approval |
| **2** | Select Inbound Store | Select the inbound store and location. The outbound type (`S2S`) is shown automatically |
| **3** | Select Outbound Product | Select the products to ship out (only products with stock in the outbound location are shown) |
| **4** | Enter Outbound Information | Enter the outbound quantity per product, then click **Register** |

### Which stores are shown {#store-dropdown}

The stores shown in the outbound store / inbound store dropdowns <mark>**depend on the processing method and the permissions (store / BP) set on the account.**</mark>

| Processing method | Outbound store | Inbound store |
|---|---|---|
| **Outbound Registration** | Based on the account's **stores**<br/>→ only your stores are shown | Based on the account's **BPs**<br/>→ all stores of the BP are shown |
| **Request Outbound** | Based on the account's **BPs**<br/>→ all stores of the BP are shown | Based on the account's **stores**<br/>→ only your stores are shown |

- **Outbound Registration** sends stock from your store to another store, so the outbound store is limited to your stores.
- **Request Outbound** asks another store to send stock to your store, so the inbound store is limited to your stores.

### Step 1. Select the Outbound Store

- Select the processing type (**Outbound Registration** / **Request Outbound**), then select the outbound store and location.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-register-02.png').default}
  alt="Step 1. Select Register Outbound, then the outbound store and location"
  boxes={[
    {x: 5.5, y: 42.9, w: 44.1, h: 7.7},
    {x: 7.1, y: 63.1, w: 85.6, h: 4.5},
    {x: 86.3, y: 84.3, w: 8.1, h: 3.6},
  ]}
/>

### Step 2 ~ 3. Select the Inbound Store and Products

- When you select the inbound store and location, the outbound type (`S2S`) is shown automatically.
- Only products with stock in the outbound location are listed. Check the products to ship.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-register-03.png').default}
  alt="Step 3. Select outbound products (check inbound store and outbound type S2S)"
  boxes={[
    {x: 5.6, y: 51.8, w: 89.8, h: 7.2},
    {x: 85.6, y: 33.3, w: 8.2, h: 2.6},
    {x: 7.3, y: 63.1, w: 3.4, h: 18.7},
  ]}
/>

### Step 4. Enter Outbound Quantities

- Enter the outbound quantity for each product, then click **Register**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-register-04.png').default}
  alt="Step 4. Enter the outbound quantity per product, then click Register"
  boxes={[
    {x: 45.3, y: 77.6, w: 10.3, h: 7.7},
    {x: 87.2, y: 87.8, w: 8.2, h: 3.1},
  ]}
/>

- The outbound quantity must be **1 or more**, and **registration is not possible if available stock is insufficient**.
- The outbound store and inbound store cannot be the same.
- If you have many products to ship out, you can register them in bulk with the Excel template. 👉 **[Go to Outbound Bulk Upload](/docs/inventory/outbound/outbound-bulk-upload-au)**

<div className="blockquote-warning">

> <mark>**Outbound registration is completed immediately and cannot be canceled.**</mark><br/>
> Double-check the inbound store, products, and quantities before registering.

</div>

## 2. Approve outbound requests (Request Outbound)

If you select **Request Outbound** in Step 1, the outbound is processed after an approver confirms it.<br/>
<mark>**Until approval, nothing is shipped out and the stock is held as Outbound Pending Qty.**</mark>

<div className="blockquote-gray">

> For **Request Outbound**, <mark>**the outbound store shows all stores of the BP, and the inbound store shows only the account's stores**</mark>. 👉 **[Go to Which stores are shown](#store-dropdown)**

</div>

> **Register outbound request** → **Find the request** → **Approve / Reject** → **Outbound registration created**

| Status | Description |
|---|---|
| **Request Pending** | Awaiting approval |
| **Approved (Registered)** | Approved → outbound registered and completed |
| **Rejected** | Rejected → only the request record is kept |

### Step 1. Register an Outbound Request

- In outbound registration Step 1, select **Request Outbound**, then enter the inbound store, products, and quantities the same way as a regular outbound registration.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-request-01.png').default}
  alt="Select Request Outbound in Step 1"
  boxes={[
    {x: 50.9, y: 43.8, w: 43.4, h: 7.6},
    {x: 51.1, y: 63.6, w: 20.3, h: 26.0},
  ]}
/>


### Step 2. Find the Request

- On the **Outbound Request List** tab, find requests in `Request Pending` status.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-request-02.png').default}
  alt="Outbound Request List tab — search Request Pending requests"
  boxes={[
    {x: 12.9, y: 15.3, w: 11.2, h: 3.4},
    {x: 51.0, y: 68.9, w: 6.0, h: 3.4},
    {x: 1.9, y: 94.0, w: 96.6, h: 4.6},
  ]}
/>


### Step 3. Approve / Reject

- Check requests on the **Outbound Request List** tab. <mark>**Only accounts with approval permission for the outbound store**</mark> can approve (Confirm) / reject (Reject).
- In the request detail, adjust the confirmed quantity with **Edit Qty**, then approve with **Request Confirm** → **Approve**. To reject, click **Rejected**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-request-03.png').default}
  alt="Select a request, then click Approval / Rejected"
  boxes={[
    {x: 2.0, y: 60.1, w: 96.1, h: 3.0},
    {x: 48.2, y: 94.8, w: 11.9, h: 2.2},
  ]}
/>


### Step 4. Check the Created Outbound

- Once approved, an outbound registration is created in the **Outbound List** with status `Outbound Completed`.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/outbound/img/outbound-request-04.png').default}
  alt="After approval, the outbound is created on the Outbound List (Outbound Completed)"
  boxes={[
    {x: 1.5, y: 16.1, w: 11.4, h: 3.5},
    {x: 1.7, y: 94.9, w: 97.8, h: 4.6},
  ]}
/>


## 3. Check outbound history

On the **Outbound List** tab, search with Type `S2S` and click a row to view the outbound detail.<br/>
If you enter the outbound method and the carrier and tracking number in **Outbound Information** on the detail screen and click **Save**, they are also shown in the inbound store's inbound detail.

<AnnotatedImage
  src={require('@site/docs/inventory/outbound/img/outbound-list-01.png').default}
  alt="Search with Type S2S on the Outbound List tab, then click a row"
  boxes={[
    {x: 13.8, y: 12.4, w: 9.9, h: 2.8},
    {x: 21.6, y: 31.7, w: 31.0, h: 2.2},
    {x: 57.1, y: 43.4, w: 5.3, h: 2.2},
    {x: 14.0, y: 58.9, w: 84.8, h: 3.0},
  ]}
/>

<AnnotatedImage
  src={require('@site/docs/inventory/outbound/img/outbound-detail-01.png').default}
  alt="Outbound detail screen"
  boxes={[
    {x: 12.1, y: 6.2, w: 6.9, h: 2.3},
    {x: 0.7, y: 13.1, w: 99.2, h: 23.9},
    {x: 1.9, y: 76.7, w: 96.8, h: 14.9},
  ]}
/>

<AnnotatedImage
  src={require('@site/docs/inventory/outbound/img/outbound-detail-02.png').default}
  alt="Outbound Information — select the outbound method"
  boxes={[
    {x: 11.4, y: 67.7, w: 11.9, h: 23.6},
    {x: 92.9, y: 60.5, w: 6.0, h: 4.1},
  ]}
/>

<AnnotatedImage
  src={require('@site/docs/inventory/outbound/img/outbound-detail-03.png').default}
  alt="Enter the outbound method and carrier / tracking number, then click Save"
  boxes={[
    {x: 11.3, y: 67.7, w: 11.9, h: 3.6},
    {x: 11.3, y: 77.3, w: 87.6, h: 3.8},
    {x: 93, y: 60.5, w: 5.9, h: 4.1},
  ]}
/>

<div className="qna-section">

## ❓ FAQ

> **Q. I can't register an outbound.**
>
> A. Check whether the outbound location is <u>under stocktaking</u>, or whether the outbound quantity exceeds <u>available stock</u>.

> **Q. I only want to move stock between locations within the same store.**
>
> A. Movement within the same store is handled as a location movement, not an outbound. 👉 **[Go to Inventory Movement](/docs/inventory/movement/transfer-au)**

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-04 | Added process summary, cleaned up manual format | Wooju(Landa) |
| 2026-10-21 | Added outbound / inbound store dropdown rules for registration vs. request | Wooju(Landa) |
