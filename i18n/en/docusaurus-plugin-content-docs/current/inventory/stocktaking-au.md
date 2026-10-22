---
source_hash: "b733bae13c"
sidebar_label: Stocktaking
sidebar_position: 4
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-12"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

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

Click **Start Stocktaking**, select the target store, then click **Start Stocktaking**.<br/>
The location is <mark>**automatically set to whichever of the store's `1000 / SALES` or `1110 / AVAILABLE` locations is registered**</mark>, and the list of products to count is created.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-01.png').default}
  alt="Select brand, BP and store in the Start Stocktaking popup, then start"
  boxes={[
    {x: 86.9, y: 53.6, w: 6.7, h: 2.9},
    {x: 13.0, y: 63.6, w: 21.3, h: 3.6},
    {x: 54.0, y: 73.0, w: 6.6, h: 2.4},
    {x: 68.8, y: 81.1, w: 7.8, h: 3.4},
  ]}
/>

<div className="blockquote-warning">

> <mark>**System stock is fixed at the quantity at the time stocktaking starts.**</mark><br/>
> If you also count products received after the start, the difference is applied twice. Count right after starting, and exclude anything received after the start from your count.

</div>

## 2. Enter counted quantities

Click a stocktaking in the list to open the detail screen, then enter counted quantities using one of the two methods below.

| Method | Action |
|---|---|
| **Enter directly on screen** | Enter **Stocktaking Qty** (actual counted quantity) for each product directly on screen |
| **Excel upload** | Download the template for the stocktaking, fill in quantities, and upload (👉 see 3. Upload counted quantities via Excel) |

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-02.png').default}
  alt="Stocktaking Detail (In Progress) — enter Stocktaking Qty, then Save"
  boxes={[
    {x: 11.0, y: 4.8, w: 3.8, h: 2.9},
    {x: 25.5, y: 46.5, w: 6.9, h: 43.6},
    {x: 93.7, y: 37.5, w: 5.2, h: 2.8},
  ]}
/>

- If you find a product that is not in the stocktaking list, <mark>**you cannot add it on screen; you can add it only via Excel upload**</mark>.
- If any product has no counted quantity, `This field is required.` is shown when you save.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-03.png').default}
  alt="This field is required. shown when the counted quantity is empty"
  boxes={[
    {x: 42.8, y: 81.0, w: 11.6, h: 18.5},
  ]}
/>

### ⚖️ When there is a stock difference

| Case (system stock `100`) | Stocktaking Qty | Adjustment Qty | Stocktaking reason |
|---|:---:|:---:|---|
| **Fewer physical items** | `99` | `-1` (blue) | `STK002` set automatically |
| **More physical items** | `101` | `+1` (red) | `STK002` set automatically |
| **Same** | `100` | `0` | Not set |

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-04.png').default}
  alt="Adjustment Qty calculated and STK002 set automatically after entering counted quantities"
  boxes={[
    {x: 32.3, y: 21.5, w: 5, h: 72},
    {x: 39.6, y: 21.5, w: 8.2, h: 72},
  ]}
/>

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

- In the downloaded template, **Stocktaking Qty** is prefilled with the same value as the system stock (**Stock Qty**).

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-08.png').default}
  alt="Downloaded stocktaking upload template — Stocktaking Qty prefilled with Stock Qty"
  boxes={[
    {x: 52.6, y: 7.0, w: 17.0, h: 88.5},
  ]}
/>

- After the upload completes, the counted quantities on the detail screen are replaced with the uploaded values.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-09.png').default}
  alt="Stocktaking Detail after upload — uploaded counted quantities applied"
  boxes={[
    {x: 77.0, y: 37.3, w: 8.4, h: 3.0},
    {x: 31.0, y: 46.0, w: 8.4, h: 44.0},
  ]}
/>

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

### ⚠️ When system stock is negative

- For products with negative system stock, the template's **Stocktaking Qty** also shows the negative value as is.
- <mark>**Counted quantities can be saved only if they are 0 or more**</mark>, so if you upload as is, `Stocktaking quantity must be at least 0.` is shown when you click **Save**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-10.png').default}
  alt="Stocktaking quantity must be at least 0. error when saving negative counted quantities"
  boxes={[
    {x: 83.3, y: 1.4, w: 16.6, h: 14.6},
    {x: 31.5, y: 47.3, w: 8.6, h: 38.8},
  ]}
/>

- Change **Stocktaking Qty** for the negative products to the actual quantity (`0` if there is no stock) and upload again.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-11.png').default}
  alt="Template with Stocktaking Qty of negative products changed to 0"
  boxes={[
    {x: 52.3, y: 7.0, w: 17.2, h: 89.5},
  ]}
/>

- After re-uploading, the adjustment quantity is calculated for the differences and the reason is set. Then click **Save**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-12.png').default}
  alt="Adjustment quantity and stocktaking reason applied after re-upload"
  boxes={[
    {x: 40.6, y: 46, w: 5.6, h: 44},
    {x: 48.5, y: 46, w: 10.2, h: 44},
  ]}
/>

## 4. Confirm / reject stocktaking

An account with **approval permission** confirms or rejects a stocktaking in `Saved` status.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-05.png').default}
  alt="Saved Stocktaking Detail — Rejected / Confirm buttons"
  boxes={[
    {x: 11.2, y: 10.2, w: 5.0, h: 3.0},
    {x: 70.4, y: 43.4, w: 10.6, h: 2.9},
  ]}
/>

| Button | Result |
|---|---|
| **Confirm** | <mark>**Inventory is updated to the counted quantities**</mark>, and adjustments for the differences are created in the `Stocktaking Adjustment` tab of Adjustment |
| **Rejected** | No inventory change; only the result is kept as a record |

### Confirm

- Click **Confirm** → click **Confirm** in the confirmation popup.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-06.png').default}
  alt="Confirm Stocktaking popup"
  boxes={[
    {x: 62.7, y: 61.7, w: 5.4, h: 5.3},
  ]}
/>

### Reject (Rejected)

- Click **Rejected** → click **Rejected** in the confirmation popup.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-07.png').default}
  alt="Rejected confirmation popup"
  boxes={[
    {x: 58.2, y: 61.3, w: 6.6, h: 4.4},
  ]}
/>

- Once confirmed, the inventory ledger records the before · transaction · after quantities with the `Stocktaking Adjustment` type. 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-13.png').default}
  alt="Stocktaking Adjustment history in the inventory ledger after confirmation"
  boxes={[
    {x: 58.2, y: 51.8, w: 8.4, h: 41.0},
    {x: 69.6, y: 51.8, w: 21.0, h: 41.0},
  ]}
/>

## 5. Cancel stocktaking

You can cancel with **Cancel Stocktaking** only in `In Progress` status.<br/>
When canceled, <mark>**nothing is applied to inventory and it ends in `Canceled` status**</mark>. The entered data can only be viewed in the list.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/stocktaking-02.png').default}
  alt="Cancel Stocktaking button at the bottom of Stocktaking Detail"
  boxes={[
    {x: 93.1, y: 95.6, w: 6.6, h: 2.9},
  ]}
/>

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
> A. Check that a <u>counted quantity</u> is entered for every product and that there are no <u>negative values</u>. Counted quantities can be saved only if they are 0 or more.

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
| 2026-10-12 | Added screenshots, added Confirm / Rejected popup guidance, added negative-stock upload case | Wooju(Landa) |
