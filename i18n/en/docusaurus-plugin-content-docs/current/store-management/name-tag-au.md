---
source_hash: "43e2a6944a"
sidebar_label: Offline Name Tag
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-07"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Offline Name Tag

> This page explains how to register name tags for store display (model name · sale price · QR) and print them on A4 paper.
>
> Path : <span className="path-badge">IIC BO > Store Management > Offline Name Tag</span>

<div className="blockquote-mint">

> <mark>**Name tags can be printed for the Gentle Monster brand only.**</mark>

</div>

## 👉 Name tag print process

> **Register NameTAG** → **Select products** → **Enter Additional Note · Qty** → **Preview** → **Print & Save**

| Step | Action | Handled by |
|:---:|---|---|
| **1** | Click **Register NameTAG** → select Individual Print or Bulk Upload | 👤 Store |
| **2** | Select Brand → BP → Store, then select the models to print | 👤 Store |
| **3** | Enter Additional Note, Prescription, and Print Qty for each model | 👤 Store |
| **4** | Check the preview, then click **Print & Save** → registration is saved + printed | 👤 Store |

## 1. Name tag layout

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-01.png').default}
  alt="Printed name tag example — model name / note, price, QR"
  boxes={[
    {x: 32.6, y: 35.4, w: 4.8, h: 7.4},
    {x: 40, y: 36, w: 7.2, h: 6.8},
  ]}
/>

| Item | Description |
|---|---|
| **Model name** | Representative product name of the model (long names are shown in a smaller font; if still too long, they are truncated with `…`) |
| **Additional Note** | The note you entered (optional, one line) |
| **Sale price** | Store sale price. AU shows it in <mark>**`AUD 450`**</mark> format |
| **Prescription Available** | Shown only for models with Prescription checked |
| **QR code** | Shown when **Include product QR** is checked (link to the product search on the Gentle Monster official online store) |

- The paper size is **A4**, with 65 × 13mm name tags arranged in 2 columns. (About 26 per page)
- Set the scale to **100%** in the print dialog.

## 2. List search

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-08.png').default}
  alt="Offline Name Tag search filters — Registration Date, keyword"
  boxes={[
    {x: 1.6, y: 28.2, w: 24.2, h: 7.4},
    {x: 1.6, y: 39.8, w: 64.2, h: 3.2},
  ]}
/>

| Search filter | Description | Notes |
|---|---|---|
| **Brand** | Select a brand | |
| **Registration Date** | Name tag registration period | • Default: last 30 days<br/>• Quick select: `Today` / `1 Week` / `1 Month` / `3 Months` |
| **Search keyword** | Model Code, model name, registering account | Enter at least 2 characters |

## 3. List columns

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-08.png').default}
  alt="Offline Name Tag list — ID, Total Model, Register NameTAG"
  boxes={[
    {x: 1.6, y: 67.0, w: 9.5, h: 21.8},
    {x: 44.8, y: 67.0, w: 6.0, h: 21.8},
    {x: 91.4, y: 56.8, w: 7.4, h: 3.0},
  ]}
/>

| Column | Description |
|---|---|
| **ID** | Name tag registration number (`NT` + number) |
| **Registration Date** | Name tag registration date and time |
| **Brand** | Brand code / name |
| **Store Information** | Store code / name |
| **Total Model** | Number of registered models |
| **Registered By** | Account that registered the name tags |

- Click a row to open the print record detail (**Print Record Detail**), where you can reprint. 👉 **[6. Reprint](#6-reprint)**

## 4. Register name tags — Individual Print

Click the **Register NameTAG** button → register on the **Individual Print** tab.

### Step 1. Select products

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-02.png').default}
  alt="Register NameTAG — Individual Print tab, Brand / BP / Store"
  boxes={[
    {x: 16.4, y: 47.0, w: 19.8, h: 3.2},
    {x: 15.3, y: 59.8, w: 81.0, h: 5.2},
  ]}
/>

- Select **Brand → BP → Store** in this order. The product list appears only after all three are selected.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-03.png').default}
  alt="Product list — same model listed per sales price"
  boxes={[
    {x: 3.3, y: 18.6, w: 91.4, h: 4.2},
    {x: 4.8, y: 51.1, w: 88.4, h: 6.3},
    {x: 4.8, y: 69.9, w: 88.4, h: 6.3},
  ]}
/>

- Search by Model Code or model name (at least 2 characters), then check the models to print.
  - You can select <mark>**up to 50 models**</mark>. Selections are kept when you move between pages.
  - The same model may appear in multiple rows if it has different sale prices. Select the correct price.
- Click **Next →**.

<div className="blockquote-gray">

> Changing the store does not reset previously selected products. If you change the store, review your selected products again.

</div>

### Step 2. Enter Additional Note · Qty

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-04.png').default}
  alt="Step 2 — Additional Note, Prescription, Print Qty"
  boxes={[
    {x: 48.6, y: 63.8, w: 14.1, h: 20.2},
    {x: 64.9, y: 63.8, w: 6.7, h: 20.2},
    {x: 73.8, y: 63.8, w: 8, h: 20.2},
  ]}
/>

| Item | Description | Notes |
|---|---|---|
| **Additional Note** | Note shown below the model name | Optional |
| **Prescription** | When checked, `Prescription Available` is shown | Optional |
| **Print Qty** | Number of name tags to print per model | 1 – 10 |

- Check multiple models to **bulk edit** them.
  - Prescription **On** / **Off** is applied immediately on click.
  - Print Qty is applied only after you enter the quantity and click **Apply**.
- **Total** at the top shows the total number of name tags to print (sheets) and the number of models (items).

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-05.png').default}
  alt="Bulk edit after checking models"
  boxes={[
    {x: 4.6, y: 47.2, w: 90.6, h: 6.2},
    {x: 5.6, y: 63.0, w: 2.2, h: 11.6},
  ]}
/>

### Step 3. Preview and print

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-06.png').default}
  alt="A4 Print Preview — Include product QR unchecked"
  boxes={[
    {x: 67.6, y: 1.8, w: 12.4, h: 5.4},
    {x: 89.8, y: 1.0, w: 9.2, h: 6.8},
  ]}
/>

- Use **Include product QR** (checked by default) to choose whether to include the QR code.
- Check the A4 print layout with **Preview**, then click **Print & Save** to open the browser print dialog.
- When saved, the message `name tag print saved successfully` is shown.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/store-management/img/name-tag-07.png').default}
  alt="Print & Save completion message"
  boxes={[
    {x: 80.6, y: 1.8, w: 18.6, h: 11.6},
  ]}
/>

<div className="blockquote-warning">

> <mark>**Clicking Print & Save saves the registration first.**</mark><br/>
> Even if you cancel printing in the print dialog, the registration remains and can be reprinted from the list.

</div>

## 5. Register name tags — Bulk Upload

When you have many models to print, register them all at once with an Excel file.

<div className="img-placeholder">📷 [Image] Bulk Upload tab — template download and file upload</div>

| Step | Action |
|:---:|---|
| **1** | **Register NameTAG** → on the **Bulk Upload** tab, click **Download Upload Template** → download the template (`NameTag_upload_form.xlsx`) |
| **2** | Fill in the template |
| **3** | Drag and drop or select the completed file (.xlsx / .xls, max 5MB), then click **Register** |
| **4** | Print from the preview that opens after registration |

### 📝 How to fill in the template

| Column | Required | Input |
|---|:---:|---|
| **Brand Code** | **Required** | Brand code (Gentle Monster `1100`) |
| **Store Code** | **Required** | Store code |
| **Product Code** | **Required** | <mark>**Product code (SKU)**</mark> — not the Model Code |
| **Additional Note** | Optional | Additional Note |
| **Prescription** | **Required** | Prescription `Y` / `N` |
| **Qty** | **Required** | Print Qty (1 – 10) |

- Each file can contain **one store** only.
- Print Qty must be between 1 and 10. Values over 10 cause an error.
- The total Print Qty in a file must be 500 or less.

<div className="blockquote-warning">

> <mark>**If even one row has an error, the entire file is not registered.**</mark><br/>
> Check the affected rows in the error list, fix them, and upload again.

</div>

## 6. Reprint

<div className="img-placeholder">📷 [Image] Print Record Detail — select models to reprint</div>

| Step | Action |
|:---:|---|
| **1** | Click the registration row to reprint in the list → go to **Print Record Detail** |
| **2** | Edit Additional Note, Prescription, and Print Qty if needed |
| **3** | Check the models to reprint → **Reprint** → **Print & Save** in the preview |

<div className="blockquote-warning">

> <mark>**Reprints use the sale price at the time of registration.**</mark><br/>
> If the sale price has changed, do not reprint. Register a new name tag instead. Notes and quantities edited when reprinting overwrite the existing registration.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. The product I want to print is not in the list.**
>
> A. Products without a <u>valid sale price</u> as of today are not shown. Packages and lenses are also excluded from the list.

> **Q. I get the error `Name tag printing is allowed only for the Gentle Monster brand.` when saving.**
>
> A. Name tags can be printed for the <u>Gentle Monster brand</u> only. Check your brand selection.

> **Q. I get the error `Invalid name tag print price` when saving.**
>
> A. The sale price of the selected product has changed, or the product is not sold at that store. Select the products again.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-07 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
