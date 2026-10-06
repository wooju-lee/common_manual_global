---
source_hash: "edbea3daa5"
sidebar_label: Sales Registration & Inquiry
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Sales Registration & Inquiry

> This guide explains how to **create a sale** in IIC BO POS and print the AC card after payment is completed on an external POS (retailer POS or Bluebell POS).
>
> Path : <span className="path-badge">IIC BO > FRONT POS (MAIN)</span>

## 👉 Sale creation process

> **Enter external POS receipt number** → **Add products** → **Check cashier / seller** → **Set membership** → **Select customer profile information** → **Confirm Sales** → **Print AC card**

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-01.png').default}
  alt="Front POS Main default screen (SALES mode)"
  boxes={[
    {n: 1, x: 1.2, y: 15.6, w: 28.9, h: 3.6},
    {n: 2, x: 30.8, y: 15.6, w: 42.7, h: 3.6},
    {n: 3, x: 74.2, y: 8.6, w: 12.6, h: 5.2},
    {n: 4, x: 75.8, y: 15.6, w: 23, h: 15.8},
    {n: 5, x: 75.5, y: 70.2, w: 23.3, h: 25},
    {n: 6, x: 75.9, y: 34.9, w: 22.5, h: 4.2},
  ]}
/>

You can create a sale only after products, membership, and customer profile information are all set.

## 1. Enter the External POS Receipt Number

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-04.png').default}
  alt="Invoice No. field — enter the external POS receipt number"
  maxWidth="500px"
  boxes={[
    {x: 23.1, y: 29.7, w: 69.6, h: 10},
  ]}
/>

Scan or enter the **receipt number** issued by the external POS after payment in the `Invoice No.` field.<br/>
The BO sale is **created with the same number**.

**Input rules**

- <mark>**Use only letters, numbers, and hyphens (`-`), and include at least 1 number.**</mark>
  - Numbers containing spaces or special characters such as `_` or `/` cannot be used later to look up or return the sale by receipt number.
- Up to 25 characters.
- A number already used in the same store cannot be entered.

<div className="blockquote-warning">

> **Enter the receipt number before adding products.** Pressing Enter in `Invoice No.` clears the product list.
>
> If the field is left blank, BO generates a number automatically. <mark>**Always enter the receipt number so the sale matches the external POS.**</mark>

</div>

## 2. Add Products

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-05.png').default}
  alt="Product Barcode search — search by product code / product name / barcode and select"
  boxes={[
    {x: 49.75, y: 7.7, w: 48.65, h: 5.7},
    {x: 1.9, y: 25.3, w: 47.6, h: 16.1},
  ]}
/>

Place the cursor in the **Product Barcode** field and enter product information (code, product name, barcode), or scan the physical barcode to add the product.

- Gentle Monster products are **mapped to a package**, so the package is also shown in the list when you add the product.
- The list shows the **sale amount** (Customer Price, Discount Price, Total) and **Stock (SALES)** (available stock in the store's Sales location).
- Adjust quantity with the `-` / `+` buttons, and remove a wrong product with the **X** button on the right of the row. To start over, click **All Clear**.

## 3. Check Cashier / Seller

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-06.png').default}
  alt="Cashier / Seller dropdowns"
  maxWidth="420px"
  boxes={[
    {x: 4.3, y: 12, w: 44.6, h: 10.5},
    {x: 52.7, y: 12, w: 44.5, h: 24.6},
  ]}
/>

| Field | Description |
|---|---|
| **Cashier** (Required) | Defaults to the account logged in to the POS. You can change it |
| **Seller** (Optional) | If the staff member who assisted the customer is different from the one who processed payment, set the assisting staff member as Seller |

## 4. Set Membership (Required)

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-02.png').default}
  alt="Customer Member Search area"
  maxWidth="400px"
  boxes={[
    {x: 6.4, y: 38.6, w: 86.4, h: 13.5},
    {x: 78.5, y: 54.3, w: 14.8, h: 7},
    {x: 6.4, y: 75.4, w: 86.4, h: 13.5},
  ]}
/>

**Membership is required** to create a sale. Set it using one of the methods below.

| Method | Description |
|---|---|
| **Email / phone number search** | The country defaults to the POS store's country.<br/>Enter an email (`ID@` format) or phone number (at least 8 digits) in `Search by Email OR Phone` and search |
| **Membership QR scan** | When the customer shows the membership QR provided on sign-up to the online store, scan it in `Scan Customer QR` to look it up immediately |
| **Non-Member** | For customers who do not sign up, select **Non-Member** |

## 5. Select Customer Profile Information (Required)

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-07.png').default}
  alt="Customer profile information input area"
  maxWidth="384px"
  boxes={[
    {x: 6, y: 14.8, w: 86.1, h: 9},
    {x: 6, y: 32.3, w: 86.1, h: 9},
    {x: 6, y: 48.7, w: 86.1, h: 9},
    {x: 6, y: 65.2, w: 69.8, h: 9},
    {x: 6, y: 81.6, w: 69.8, h: 9},
  ]}
/>

You must select **all** customer profile information fields at the bottom right of the screen.

| Field | Values |
|---|---|
| **Country** | Customer's country |
| **Continent** | Continent. Set automatically when you select Country, and can be changed |
| **Customer Type** | `LOCAL` / `FOREIGN` |
| **Gender** | `N/A` / `MALE` / `FEMALE` |
| **Usage Type** | `N/A` / `Normal` / `Gift` |

## 6. Confirm Sales

<AnnotatedImage
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-03.png').default}
  alt="Confirm Sales enabled after required information (product / membership / customer profile information) is set"
  boxes={[
    {x: 1.8, y: 25.1, w: 71.5, h: 7.5},
    {x: 76.1, y: 19, w: 22.1, h: 7.8},
    {x: 76.1, y: 35, w: 22.1, h: 3.6},
    {x: 76.1, y: 73.5, w: 22.1, h: 24.1},
  ]}
/>

When all required values (product, membership, customer profile information) are set, the **Confirm Sales** button is enabled. Click it to create the sale.

<div className="blockquote-gray">

> After the sale is created, the screen resets and **Cashier is also reset**.<br/>
> To keep the same cashier, check **Save cashier information** just below Confirm Sales before clicking Confirm Sales.

</div>

## 7. Print the AC Card

When the sale is created, the **AC card is printed** and sales registration is complete.

<div className="blockquote-warning">

> To print the AC card, **QZ Tray** must be running on the PC and the AC card printer (Smart-51S) must be connected. 👉 **[Go to AC Card Printer Setup](/docs/common/ac-card-print-set-au)**
>
> The completion message is shown even if printing fails due to a printer connection issue, so always check that the AC card was actually printed.

</div>

## 8. Look Up Sales and Reprint the AC Card

<div className="img-placeholder">📷 [Image] Purchased product history looked up by Invoice No.</div>

Enter the sale's **Invoice No.** (external POS receipt number) in the `Invoice No.` field and search to load the purchased product history.

- To print the AC card again, click **AC Card RE Print**.

## 📌 Note — Invoice number generation

- The sales invoice number is created from the number entered in `Invoice No.` (the **external POS receipt number**).
- If no number is entered, it is generated automatically in the format `SL + store code + date/time (yyMMdd HHmmss) + 5 random characters`.
  - e.g. `SLAU1002260928113256C2W36`
- If you enter a number that already exists in the same store, the error `InvoiceNo already exists` is shown.

<div className="qna-section">

## ❓ FAQ

> **Q. The Confirm Sales button is not enabled.**
>
> A. Check that products have been added, that <u>membership (or Non-Member)</u> is set, and that all <u>5 customer profile information fields</u> are selected.

> **Q. Can I process products purchased at another store?**
>
> A. Each store has a different operating environment (POS), so <u>exchanges and returns between stores are not supported.</u> Process them at the store of purchase.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-03 | Rewritten as a screen-based sale creation process | Wooju(Landa) |
