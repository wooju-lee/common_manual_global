---
source_hash: "3f1583268e"
sidebar_label: Stocktaking
sidebar_position: 4
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Stocktaking

> This page explains how to count the physical stock of a store location, compare it with the system stock, and apply the differences to inventory.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory Stocktaking</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are applied to IIC BO inventory only.

</div>

## 👉 Stocktaking process

> **Start stocktaking** → **Enter / upload counted quantities** → **Save** → **Confirm or reject (Rejected)**

| Step | Action | Status | Handled by |
|:---:|---|---|---|
| **1** | Start stocktaking (select the target store) | `In Progress` | 👤 Store |
| **2** | Enter or upload counted quantities → **Save** | `Saved` | 👤 Store |
| **3** | Confirm (**Confirm**) or reject (**Rejected**) the stocktaking | `Completed` | 👤 Approver account |
| **4** | On confirmation, inventory is updated to the counted quantities + stocktaking adjustments are created for the differences | — | ⚙️ Automatic |

<div className="blockquote-warning">

> <mark>**During stocktaking, adjustment · movement · outbound are restricted for the store location; inbound is still allowed.**</mark><br/>
> You cannot start stocktaking if there is an inventory adjustment awaiting approval or another stocktaking in progress.

</div>

## 1. Start stocktaking

<div className="img-placeholder">📷 [Image] Start Stocktaking popup</div>

Click **Start Stocktaking**, select the target store, then click **Start Stocktaking**.<br/>
The location is <mark>**automatically set to whichever of the store's `1000 / SALES` or `1110 / AVAILABLE` locations is registered**</mark>, and the list of products to count is created.

<div className="blockquote-warning">

> <mark>**System stock is fixed at the quantity at the time stocktaking starts.**</mark><br/>
> If you also count products received after the start, the difference is applied twice. Count right after starting, and exclude anything received after the start from your count.

</div>

## 2. Enter counted quantities

<div className="img-placeholder">📷 [Image] Stocktaking Detail — counted quantity input list</div>

Click a stocktaking in the list to open the detail screen, then enter counted quantities using one of the two methods below.

| Method | Action |
|---|---|
| **Enter directly on screen** | Enter **Stocktaking Qty** (actual counted quantity) for each product directly on screen |
| **Excel upload** | Download the template for the stocktaking, fill in quantities, and upload (👉 see 3. Upload counted quantities via Excel) |

- If you find a product that is not in the stocktaking list, <mark>**you cannot add it on screen; you can add it only via Excel upload**</mark>.

### ⚖️ When there is a stock difference

| Case (system stock `100`) | Stocktaking Qty | Adjustment Qty | Stocktaking reason |
|---|:---:|:---:|---|
| **Fewer physical items** | `99` | `-1` (blue) | `STK002` set automatically |
| **More physical items** | `101` | `+1` (red) | `STK002` set automatically |
| **Same** | `100` | `0` | Not set |

- If system stock and counted quantity differ, <mark>**Adjustment Qty is calculated automatically and the Stocktaking Reason is set automatically**</mark>.
  - You can change the auto-set reason from the dropdown if needed.
  - You can save once quantities/reasons are entered for all products. After saving, the status changes to `Saved`.

## 3. Upload counted quantities via Excel

<div className="img-placeholder">📷 [Image] Stocktaking Upload popup — Download Upload Template / file upload</div>

| Step | Action |
|:---:|---|
| **1** | Click **Stocktaking Upload** on the stocktaking detail screen |
| **2** | Click **Download Upload Template** → download the template for this stocktaking (`stocktaking_upload_template_form.xlsx`) |
| **3** | Edit **Stocktaking Qty** for products whose actual count differs |
| **4** | Drag and drop or select the completed file (.xlsx / .xls, max 5MB), then click **Register** |

### 📝 How to fill in the template

| Column | Required | Input |
|---|:---:|---|
| **Store Code** | **Required** | Store code of the stocktaking (not editable) |
| **Location Code** | **Required** | Location code of the stocktaking (not editable) |
| **Product Code** | **Required** | Product codes from the stocktaking product list are shown as is (not editable) |
| **Stock Qty** | **Required** | On-hand stock at the time stocktaking started (not editable) |
| **Stocktaking Qty** | **Required** | • Actual counted quantity<br/>• <mark>**Prefilled with the system stock value**</mark>, so edit only products with differences |
| **Adjustment Reason** | Optional | • If left blank, `STK002` is set automatically for products with differences<br/>• For products with no difference, <mark>**always leave it blank**</mark> |
| **Remarks** | Optional | Remarks |

- <mark>**Do not delete (exclude) the existing product rows**</mark> in the template. If even one row is missing, the upload fails.
- For products not in the stocktaking list, add a row and enter `0` for **Stock Qty**.
- Do not enter the same product code in multiple rows.

<div className="blockquote-warning">

> <mark>**Uploading discards any unsaved on-screen input and overwrites it with the uploaded values.**</mark><br/>
> In `In Progress` status, click **Save** after uploading to change the status to `Saved`. If you upload in `Saved` status, the uploaded values immediately become the values to be confirmed.

</div>

<div className="blockquote-gray">

> If there is an error, the entire file is not registered and an error message is displayed. Check the message, fix the file, and upload again.<br/>
> Excel files downloaded from the detail screen cannot be used for upload. Always use the **Download Upload Template** form.

</div>

## 4. Confirm / reject stocktaking

<div className="img-placeholder">📷 [Image] Confirm / Rejected buttons and confirmation popup</div>

An account with **approval permission** confirms or rejects a stocktaking in `Saved` status.

| Button | Result |
|---|---|
| **Confirm** | <mark>**Inventory is updated to the counted quantities**</mark>, and adjustments for the differences are created in the `Stocktaking Adjustment` tab of Adjustment |
| **Rejected** | No inventory change; only the result is kept as a record |

- The transactions are recorded in the inventory ledger. 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**

## 5. Cancel stocktaking

<div className="img-placeholder">📷 [Image] Cancel Stocktaking button and confirmation popup</div>

You can cancel with **Cancel Stocktaking** only in `In Progress` status.<br/>
When canceled, <mark>**nothing is applied to inventory and it ends in `Canceled` status**</mark>. The entered data can only be viewed in the list.

<div className="blockquote-gray">

> <mark>**You cannot cancel in `Saved` status.**</mark><br/>
> To close a saved stocktaking, ask an approver account to reject it (**Rejected**).

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. I get an error when starting stocktaking.**
>
> A. If the message `An adjustment or ongoing stocktaking exists.` is displayed, the store has an <u>inventory adjustment awaiting approval</u> or a <u>stocktaking in progress</u>. Complete it first, then start again.

> **Q. I clicked Save, but it was not saved.**
>
> A. Check that a <u>counted quantity</u> is entered for every product.

> **Q. I get an error when uploading Excel.**
>
> A. Check the following based on the message displayed.
>
> | Message | What to check |
> |---|---|
> | `Excel file is missing existing product codes` | Existing product rows in the template were deleted |
> | `Stock quantity mismatch for product` | The **Stock Qty** value was edited |
> | `Excel file contains duplicate product codes` | The same product code was entered in multiple rows |
> | `Excel file contains product codes that do not exist` | A product code that does not exist was entered |
> | `Adjustment reason must be null for product` | A reason was entered for a product with no difference |
> | `Excel file is missing stocktaking quantities for products` | **Stocktaking Qty** is blank or not an integer |
> | `Only Excel files can be uploaded.` | The file is not .xlsx / .xls |

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-04 | Added process summary, cleaned up manual format, added Excel upload instructions · operational cautions, revised stocktaking cancellation criteria | Wooju(Landa) |
