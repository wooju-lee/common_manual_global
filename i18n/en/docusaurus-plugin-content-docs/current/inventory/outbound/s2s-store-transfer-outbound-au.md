---
source_hash: "2ea79f7168"
sidebar_label: S2S Store Transfer Outbound
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

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

<div className="img-placeholder">📷 [Image] Outbound Registration / Request — General Outbound tab</div>

Click **Outbound Registration / Request** → on the **General Outbound** tab, register in 4 steps.

| Step | Screen | What to enter |
|:---:|---|---|
| **1** | Select Outbound Store | Select the processing method, then the outbound store and location<br/>• **Outbound Registration** : outbound completed immediately on registration<br/>• **Request Outbound** : shipped out after approval |
| **2** | Select Inbound Store | Select the inbound store and location. The outbound type (`S2S`) is shown automatically |
| **3** | Select Outbound Product | Select the products to ship out (only products with stock in the outbound location are shown) |
| **4** | Enter Outbound Information | Enter the outbound quantity per product, then click **Register** |

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

<div className="img-placeholder">📷 [Image] Outbound Request List and request detail</div>

- Check requests on the **Outbound Request List** tab. <mark>**Only accounts with approval permission for the outbound store**</mark> can approve (Confirm) / reject (Reject).
- In the request detail, adjust the confirmed quantity with **Edit Qty**, then approve with **Request Confirm** → **Approve**. To reject, click **Rejected**.

| Status | Description |
|---|---|
| **Request Pending** | Awaiting approval |
| **Approved (Registered)** | Approved → outbound registered and completed |
| **Rejected** | Rejected → only the request record is kept |

## 3. Check outbound history

On the **Outbound List** tab, search with Type `S2S` and click a row to view the outbound detail.<br/>
If you enter the outbound method and the carrier and tracking number in **Outbound Information** on the detail screen and click **Save**, they are also shown in the inbound store's inbound detail.

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
