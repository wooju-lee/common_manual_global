---
source_hash: "4e8cccf320"
sidebar_label: Adjustment
sidebar_position: 5
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

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

<div className="img-placeholder">📷 [Image] Inventory Adjustment list screen</div>

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

<div className="img-placeholder">📷 [Image] Inventory Adjustment Registration — Single Registration 3 steps</div>

| Step | Screen | Input |
|:---:|---|---|
| **1** | Select Adjustment Store / Location | Select `BP`, `Store`, `Location` |
| **2** | Select Adjustment Product | Search by brand · category · product code/name and select the products to adjust (check `Inventory Qty`) |
| **3** | Enter Adjustment Information | Enter adjustment information per product, then click **Register** |

**Step 3 fields**

| Field | Required | Description |
|---|:---:|---|
| **Adjustment Reason Code** | **Required** | Select the adjustment reason |
| **Adjustment Qty** | **Required** | Adjustment quantity. The reason code determines whether stock increases or decreases; `-` can be entered only for bidirectional reasons |
| **Accounting Code** | Optional | Accounting code |
| **Billing Store / Location** | Optional | Store / location the cost is charged to |
| **Remarks** | Optional | Remarks |

- Once registered, the adjustment appears in the list with `Pending` status.

<div className="blockquote-gray">

> The box titles in Steps 1 and 2 may appear as `Select Inbound Store` / `Select Inbound Product`, but these steps select the store and products to adjust.

</div>

## 3. Register an adjustment — Bulk Registration

If you have many products to adjust, register them in bulk with an Excel file.

<div className="img-placeholder">📷 [Image] Bulk Registration tab — template download and file upload</div>

| Step | Action |
|:---:|---|
| **1** | Click **Download Upload Template** → download the template (`Adjustment_upload_form.xlsx`) |
| **2** | Fill in the adjustments following the template format |
| **3** | Drag and drop or select the completed file (.xlsx / .xls / .csv, max 5MB) |
| **4** | Click **Adjustment Registration** |

### 📝 How to fill in the template

<div className="img-placeholder">📷 [Image] Adjustment_upload_form.xlsx — first tab (input form) / second tab (adjustment reason codes)</div>

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

## 4. Approve / reject an adjustment

Only accounts with **Approve** permission can approve or reject, and only items in `Pending` status can be processed.

<div className="img-placeholder">📷 [Image] Confirm / Rejected bar at the bottom after selecting list checkboxes</div>

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
