---
source_hash: "cc849d11e4"
sidebar_label: Adjustment
sidebar_position: 5
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Adjustment

> This page explains how to increase or decrease the system stock of a store location. An adjustment is applied to inventory only after it is **registered → approved by an approver account (Confirm)**.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory Adjustment</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are applied to IIC BO inventory only.

</div>

## 👉 Inventory adjustment process

> **Select store / location** → **Select products** → **Enter qty / reason and register** → **Approve (Confirm) or reject (Rejected)**

| Step | Action | Status | Handled by |
|:---:|---|---|---|
| **1** | Select the target store / location | — | 👤 Store |
| **2** | Select the products to adjust | — | 👤 Store |
| **3** | Enter the adjustment quantity / reason and register | `Pending` | 👤 Store |
| **4** | Approve (**Confirm**) or reject (**Rejected**) the adjustment | `Confirmed` / `Rejected` | 👤 Approver account |
| **5** | On approval, the adjustment quantity is applied to inventory | — | ⚙️ Automatic |

<div className="blockquote-gray">

</div>

## 1. View the adjustment list

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-01.png').default}
  alt="Inventory Adjustment list — tabs and Adjustment Registration button"
  boxes={[
    {x: 12.6, y: 12.2, w: 30.4, h: 4.6},
    {x: 84.4, y: 49.3, w: 9.0, h: 2.7},
  ]}
/>

| Tab | Description |
|---|---|
| **All** | All adjustments |
| **Standard Adjustment** | Standard adjustments registered manually |
| **Stocktaking Adjustment** | Adjustments created by confirming a stocktaking |

| Search filter | Description |
|---|---|
| **Brand / BP / Store** | Select in order: brand → BP → store (multiple stores allowed) |
| **Adjustment Reason** | Adjustment reason (multiple selection allowed) |
| **Status** | `All` / `Pending` / `Rejected` / `Confirmed` |
| **Search Period** | Based on `Registration Date` or `Confirm Date` (default: last 30 days) |
| **Keyword** | BP · store · product code/name, barcode (2+ characters) |

- Rejected items are shown in red in the list.
- Use **Excel Export** to download the list for the current filters.

## 2. Register an adjustment — Single Registration

Click **Adjustment Registration** → register in 3 steps on the `Single Registration` tab.

| Step | Screen | Input |
|:---:|---|---|
| **1** | Select Adjustment Store / Location | Select `BP`, `Store`, `Location` |
| **2** | Select Adjustment Product | Search by brand · category · product code/name and select the products to adjust (check `Inventory Qty`) |
| **3** | Enter Adjustment Information | Enter adjustment information per product, then click **Register** |

### Step 1. Select store / location

Select `BP` → `Store` → `Location`, then click **Next**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-02.png').default}
  alt="Step 1 — select BP / Store / Location, then Next"
  boxes={[
    {x: 11.3, y: 58.8, w: 29.0, h: 5.6},
    {x: 83.3, y: 76.9, w: 8.0, h: 4.6},
  ]}
/>

### Step 2. Select products to adjust

Search by brand · category · product code/name, check the products to adjust, then click **Next**.<br/>
You can check the current stock in `Inventory Qty`.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-03.png').default}
  alt="Step 2 — search and check products, check Inventory Qty"
  boxes={[
    {x: 5.0, y: 27.6, w: 69.5, h: 9.8},
    {x: 5.6, y: 49.2, w: 3.1, h: 43.5},
    {x: 59.5, y: 49.2, w: 8.0, h: 43.5},
  ]}
/>

### Step 3. Enter reason · qty and register

Enter the adjustment information for each selected product.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-04.png').default}
  alt="Step 3 — enter Adjustment Reason Code / Adjustment Qty"
  boxes={[
    {x: 37.8, y: 52.2, w: 24.8, h: 28.0},
    {x: 87.6, y: 86.3, w: 9.0, h: 4.6},
  ]}
/>

| Field | Required | Description |
|---|:---:|---|
| **Adjustment Reason Code** | **Required** | Select the adjustment reason |
| **Adjustment Qty** | **Required** | Adjustment quantity. The reason code determines whether stock increases or decreases; `-` can be entered only for bidirectional reasons |
| **Accounting Code** | Optional | Accounting code |
| **Billing Store / Location** | Optional | Store / location the cost is charged to |
| **Remarks** | Optional | Remarks |

Select the adjustment reason from the dropdown.

<AnnotatedImage
  maxWidth="320px"
  src={require('@site/docs/inventory/img/adjustment-05.png').default}
  alt="Adjustment Reason Code dropdown"
  boxes={[
    {x: 23.0, y: 21.8, w: 57.5, h: 70.8},
  ]}
/>

When done, click **Register**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-06.png').default}
  alt="Enter reason · qty · Remarks, then Register"
  boxes={[
    {x: 15.8, y: 59.5, w: 24.1, h: 18.1},
    {x: 85.9, y: 84.3, w: 8.5, h: 4.3},
  ]}
/>

Once registered, the adjustment appears in the list with `Pending` status.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-07.png').default}
  alt="Registered adjustments shown as Pending in the list"
  boxes={[
    {x: 7.2, y: 38.2, w: 6.5, h: 4.0},
    {x: 17.4, y: 75.5, w: 5.0, h: 17.5},
  ]}
/>

<div className="blockquote-gray">

> The box titles in Steps 1 and 2 may appear as `Select Inbound Store` / `Select Inbound Product`, but these steps select the store and products to adjust.

</div>

## 3. Register an adjustment — Bulk Registration

If you have many products to adjust, register them in bulk with an Excel file.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-11.png').default}
  alt="Bulk Registration tab — Download Upload Template, File Upload, Adjustment Registration"
  boxes={[
    {x: 21.8, y: 61, w: 12.2, h: 4.4},
    {x: 68.2, y: 67, w: 8.6, h: 2.6},
    {x: 36.2, y: 70.6, w: 14.8, h: 4.1},
    {x: 37.7, y: 78.4, w: 12, h: 3.4},
  ]}
/>

| Step | Action |
|:---:|---|
| **1** | Click **Download Upload Template** → download the template (`Adjustment_upload_form.xlsx`) |
| **2** | Fill in the adjustments following the template format |
| **3** | Drag and drop or select the completed file (.xlsx / .xls / .csv, max 5MB) |
| **4** | Click **Adjustment Registration** |

### 📝 How to fill in the template

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-09.png').default}
  alt="Adjustment_upload_form.xlsx example"
/>

| Column | Required | Input |
|---|:---:|---|
| **Store Code** | **Required** | Code of the store to adjust |
| **Location Code** | **Required** | Code of the location to adjust (e.g. `1000`) |
| **Product Code** | **Required** | Code of the product to adjust |
| **Adjustment Qty** | **Required** | Adjustment quantity |
| **Adjustment Reason** | **Required** | Adjustment reason code (e.g. `ADJ003`) |
| **Account Code** | Optional | Accounting code |
| **Billing Location (Store Code)** | Optional | Code of the store the cost is charged to |
| **Billing Location (Location Code)** | Optional | Code of the location the cost is charged to |
| **Remarks** | Optional | Remarks (max 200 characters) |

- For the adjustment reason code, <mark>**check the `Code Key` on the second tab**</mark> of the template.

<details>
<summary>Adjustment reason code list (common to all countries)</summary>

| Code Key | Code Contents |
|---|---|
| `ADJ001` | CrossSelling |
| `ADJ002` | SaleOmission |
| `ADJ003` | Loss |
| `ADJ004` | CustomerGiveaway |
| `ADJ005` | Disposal |
| `ADJ006` | SampleUsage |
| `ADJ007` | Other |
| `ADJ008` | InitialStock |
| `ADJ009` | Seeding |
| `ADJ010` | Welfare |
| `ADJ011` | Return_HQ |
| `ADJ012` | Free_of_charge |
| `ADJ013` | Initial Stock |
| `ADJ014` | Initial Stock (-) |
| `ADJ015` | Online Refund Inbound |
| `ADJ123` | Inbound Adjustment |
| `ADJ998` | PS |

</details>

- Enter the adjustment quantity according to the reason code.
  - For decrease reasons, <mark>**enter a positive number**</mark>; it is deducted automatically.
  - `-` can be entered only for bidirectional reasons.
- For Billing Location, enter both Store Code and Location Code. Only stores in the same BP as the adjusted store are allowed.
- Do not split the same store · location · product across multiple rows. Combine them into one row.

<div className="blockquote-warning">

> <mark>**If any single row has an error, the entire file is not registered.**</mark><br/>
> Check the rows in the error list, fix them, and upload again.

</div>

- If the format differs, the message `The upload format is invalid.` is displayed. Always use the downloaded template.
- You cannot upload if the same product has an adjustment awaiting approval (`Pending`) or if the location is under stocktaking.

Once registered, the uploaded products appear in the list with `Pending` status.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-10.png').default}
  alt="Adjustments registered via Excel upload shown as Pending in the list"
  boxes={[
    {x: 1.6, y: 88.0, w: 97.6, h: 8.8},
  ]}
/>

## 4. Approve / reject an adjustment

Only accounts with **Approve** permission can approve or reject, and only items in `Pending` status can be processed.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/inventory/img/adjustment-08.png').default}
  alt="Check Pending items in the list, then Confirm / Rejected on the bottom bar"
  boxes={[
    {x: 1.6, y: 20.8, w: 2.6, h: 14.8},
    {x: 53.8, y: 92.0, w: 14.0, h: 5.6},
  ]}
/>

| Method | Action |
|---|---|
| **Bulk processing from the list** | Check `Pending` items → click **Confirm** or **Rejected** on the bottom bar |
| **Individual processing from the detail** | Click the `Product Info` link → review and edit in `Inventory Adjustment Detail`, then click **Confirm** or **Rejected / Canceled** |

| Result | Inventory |
|---|---|
| **Confirmed** | Adjustment quantity is applied to inventory |
| **Rejected** | No inventory change; only the record is kept |

<div className="blockquote-warning">

> There is no separate button to cancel a registered adjustment. If you registered one by mistake, ask an approver account to process it as **Rejected / Canceled**.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. I can't see the adjustment registration button.**
>
> A. Your account does not have <u>registration permission</u> for inventory adjustments. Request the permission from your administrator.

> **Q. Can I adjust a location that is under stocktaking?**
>
> A. No. Adjustment, movement, and outbound are restricted for a store location under stocktaking. Proceed after the stocktaking is completed.

> **Q. Where are adjustment reason codes managed?**
>
> A. They are managed in `System Setting > Inventory > Reason Code`.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-12 | Added screen images, split registration into steps | Wooju(Landa) |
