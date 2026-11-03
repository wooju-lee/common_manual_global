---
source_hash: "7c207f5b5c"
sidebar_label: C2C Manual Inbound
sidebar_position: 1
author: Wooju(Landa)
created: "2026-11-03"
countries: [us]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 C2C Manual Inbound

> This page explains how to **register C2C corporate pending inbound** directly in IIC BO, without pending inbound information (ASN) from Korea HQ SAP.<br/>
> There are two registration methods: <strong>Bulk Registration</strong>, which uploads multiple records at once with an Excel file, and **Single Registration (single product entry)**, which registers by selecting products on screen.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inbound List > Inbound Registration</span>

<div className="blockquote-mint">

> <mark>**Manual registration only creates pending inbound; stock is reflected when inbound is confirmed.**</mark><br/>
> Manually registered inbound is not sent to NetSuite ERP (Purchase Order · Item Receipt) or WMS (LXP), and is reflected only in IIC BO inventory.

</div>

<div className="blockquote-gray">

> Manually registered inbound is shown in the list with Type `C2C` and Channel `MANUAL`, which distinguishes it from inbound received from SAP (Channel `SAP`).<br/>
> At registration, only the inbound store's `Pending Inbound` quantity increases. <mark>**On-hand stock increases after inbound is confirmed.**</mark>

</div>

## 👉 Choose a registration method

Click **Inbound Registration** at the top of the **Inbound List** to open the registration window. Select the registration method from the tabs at the top.

<AnnotatedImage
  src={require('@site/docs/inventory/inbound/img/c2c-manual-inbound-01.png').default}
  alt="Inbound Registration — registration method tabs"
  boxes={[
    {x: 85.6, y: 45.6, w: 8.6, h: 3.6},
    {x: 20.6, y: 38.8, w: 58.8, h: 6.2},
  ]}
/>

| Tab | When to use | How |
|---|---|---|
| **Bulk Registration** | To register multiple stores · multiple inbound records at once | Fill in the upload template (Excel) and upload it |
| **Single Registration** (single product entry) | To register one inbound record for one store · location | Enter the store → products → inbound information on screen |

- The **Inbound Registration** button is shown only to accounts with **Write permission** for the Inbound List menu.
- When the registration window opens, the **Bulk Registration** tab is selected by default.

<div className="blockquote-warning">

> <mark className="mark-red">**Registered inbound cannot be deleted or canceled.** Double-check the B/L No. · I/V No. · quantities · inbound location before registering.</mark>

</div>

## 1. Bulk Registration

Fill in the inbound information in the Excel template and upload it all at once.

<AnnotatedImage
  src={require('@site/docs/inventory/inbound/img/c2c-manual-inbound-02.png').default}
  alt="Bulk Registration — download template · upload file · register inbound"
  boxes={[
    {x: 72, y: 50, w: 8.2, h: 3.4},
    {x: 43.4, y: 53.2, w: 13.6, h: 4.4},
    {x: 45.4, y: 59, w: 9.6, h: 3.8},
  ]}
/>

1. Click **Download Upload Template** to download `Inbound_upload_form.xlsx`.
2. Fill in the inbound information in the template. (See **How to fill in the template** below.)
3. Drag and drop the file onto the upload area, or click it to select the file.
4. Click **Inbound Registration** at the bottom.
5. If there are no errors, a save-complete message is shown, the window closes, and the records are created in the Inbound List with status `Pending Inbound`.

### How to fill in the template

<AnnotatedImage
  src={require('@site/docs/inventory/inbound/img/c2c-manual-inbound-03.png').default}
  alt="Upload template example"
/>

| Column | Required | What to enter | Notes |
|---|:---:|---|---|
| **No.** | ✅ | Row number | Used to identify the row in the error table |
| **B/L No.** | ✅ | Bill of lading number | Up to 50 characters |
| **I/V No.** | ✅ | Invoice number | Up to 50 characters; shown as the Reference number in the Inbound List<br/>Managing it as the ERP PO No. makes tracking easier. |
| **BP Code** | ✅ | Inbound BP code | |
| **Store Code** | ✅ | Inbound store code | |
| **Location Code** | ✅ | Inbound location code | Must be a location in use at that store |
| **Product Code** | ✅ | Product code | |
| **Expected Inbound Qty** | ✅ | Expected inbound quantity | Integer of 1 or more |
| **Expected Inbound Date** | ✅ | Expected inbound date | `yyyy-mm-dd` format (e.g. 2026-11-03) |

<mark>**Rows with the same B/L No. + I/V No. are grouped into one inbound record.**</mark>

- For multiple products, write **one row per product** and enter the same B/L No. · I/V No.
- Grouped rows must also have the same **Store Code · Location Code · Expected Inbound Date**. (If they differ, the first row's values are used.)

| No. | B/L No. | I/V No. | Product Code | Result |
|---|---|---|---|---|
| 1 | BL001 | IV001 | Product A | Inbound ① |
| 2 | BL001 | IV001 | Product B | Inbound ① (grouped with row 1) |
| 3 | BL001 | IV002 | Product A | Inbound ② (separate inbound because the I/V No. differs) |

<div className="blockquote-warning">

> **[ Notes for uploading ]**
>
> 1. <mark>**Delete the guide text in row 2 of the template (expected inbound quantity / expected inbound date) before uploading.**</mark><br/>If left in, it is read as data and causes an error.
> 2. Only Excel files (.xls · .xlsx) can be uploaded. **CSV files cannot be uploaded.**<br/>One file, up to 5MB.
> 3. Set the cell format of B/L No. · I/V No. to **Text**.<br/>With a number format, the values may be changed when registered.
> 4. Decimal quantities are truncated. (e.g. 1.7 → 1)

</div>

### Check upload errors

<mark>**If even one row has an error, the entire file is not registered.**</mark> Only the rows with errors are shown in a table, with a red error message in the problem cell.<br/>
Fix the errors, then upload the entire file again.

| Error message | Cause | Action |
|---|---|---|
| **[Error] Please check the registered data again.** | A cell is empty, or the quantity · date format is invalid | Fill in empty cells; enter quantities of 1 or more and dates as `yyyy-mm-dd` |
| **[Error] Please check the master data again.** | The BP · Store · Location · Product code does not exist, or no supply price is registered for the product | Check the codes; if no supply price is registered, ask the operations team to register it |
| **[Error] Duplicate data exists.** | An inbound with the same B/L No. + I/V No. combination already exists | Check the B/L No. · I/V No. |
| **The upload template is invalid.** | The template's column names · order were changed | Download the template again with **Download Upload Template** and fill it in |

- If the file includes a store outside your account's permission scope (Brand · BP · Store), the entire file is not registered.

## 2. Single Registration (single product entry)

Register one inbound record by selecting the inbound store and products directly on screen. It takes **3 steps**.

> **Select Inbound Store** → **Select Inbound Product** → **Enter Inbound Information**

### Step 1. Select the Inbound Store

<AnnotatedImage
  src={require('@site/docs/inventory/inbound/img/c2c-manual-inbound-04.png').default}
  alt="Single Registration — Step 1 select the inbound store"
  boxes={[
    {x: 9.2, y: 53, w: 33.6, h: 10},
    {x: 82.8, y: 72, w: 8.4, h: 5.4},
  ]}
/>

- Select in the order **Brand → BP → Store → Location**. Changing a higher-level item resets the items below it.
- The selected BP · Store · Location are shown in the summary area below.
- **Next** is enabled once BP · Store · Location are all selected.

### Step 2. Select Inbound Products

<AnnotatedImage
  src={require('@site/docs/inventory/inbound/img/c2c-manual-inbound-05.png').default}
  alt="Single Registration — Step 2 search · select products"
  boxes={[
    {x: 8, y: 26.6, w: 26.4, h: 10.2},
    {x: 83.4, y: 28.8, w: 8.4, h: 3.4},
    {x: 9, y: 48, w: 3.2, h: 43.8},
  ]}
/>

- Products of the Brand selected in Step 1 are listed automatically.
- You can search by **Product Category 1 · 2**, **Product Info (Code / Name), Barcode**. Text search requires **at least 2 characters**, and part of a product code · product name · barcode is enough.
- Select the products to receive with the checkboxes. You can select multiple products across pages; the select-all checkbox at the top selects **only the products on the current page**.
- **Next** is enabled once at least one product is selected.

### Step 3. Enter Inbound Information

<AnnotatedImage
  src={require('@site/docs/inventory/inbound/img/c2c-manual-inbound-06.png').default}
  alt="Single Registration — Step 3 enter inbound information · quantities"
  boxes={[
    {x: 6.6, y: 38.2, w: 75.2, h: 8.6},
    {x: 38.6, y: 62.6, w: 12.6, h: 19.8},
    {x: 85.6, y: 84.6, w: 8.8, h: 4.4},
  ]}
/>

| Field | Required | How to enter |
|---|:---:|---|
| **B/L No.** | ✅ | Bill of lading number, 2–30 characters |
| **I/V No.** | ✅ | Invoice number, 2–30 characters (shown as the Reference number in the Inbound List) |
| **Expected Inbound Date** | ✅ | Select from the calendar |
| **Expected Inbound Qty** | ✅ | Enter an integer of 1 or more per product |

- If two or more products are selected, you can remove a product with the **X** button on its row.
- When you finish and click **Register**, a registration-complete message is shown, the window closes, and the record is created in the Inbound List with status `Pending Inbound`.

<div className="blockquote-warning">

> Clicking **Previous** clears the values entered in the current step.<br/>
> If an inbound with the same B/L No. + I/V No. combination already exists, it cannot be registered.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. I uploaded a file, but nothing was registered.**
>
> A. In Bulk Registration, if even one row has an error, nothing is registered. Fix the rows shown in the error table, then upload the entire file again.

> **Q. The codes are correct, but I get the "Please check the master data again." error.**
>
> A. This happens when no supply price is registered for the product in that BP as of the expected inbound date. Ask the operations team to register the supply price.

> **Q. Is manually registered inbound also reflected in NetSuite?**
>
> A. No. Manually registered inbound is not sent to NetSuite ERP or WMS, and is reflected only in IIC BO inventory.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-11-03 | Initial version (based on code; bulk · single registration) | Wooju(Landa) |
