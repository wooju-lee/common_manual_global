---
source_hash: "7e47fe984c"
sidebar_label: Sales Registration & Inquiry
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-13"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Sales Registration & Inquiry

> This guide explains how to **create a sale** in IIC BO POS and print the AC card after payment is completed on an external POS (retailer POS or Bluebell POS).
>
> Path : <span className="path-badge">IIC BO > FRONT POS (MAIN)</span>

## 👉 Sale creation process

> **Enter receipt number** → **Add products** → **Check cashier / seller** → **Set membership** → **Select customer profile information** → **Confirm Sales** → **Print AC card**

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-01.png').default}
  alt="Front POS Main default screen (SALES mode)"
  boxes={[
    {n: 1, x: 0.8, y: 9.9, w: 29.1, h: 3.6},
    {n: 2, x: 35.1, y: 9.9, w: 38.0, h: 3.6},
    {n: 3, x: 75.6, y: 6.6, w: 23.6, h: 5.0},
    {n: 4, x: 75.6, y: 14.6, w: 23.6, h: 9.5},
    {n: 5, x: 75.6, y: 27.4, w: 23.6, h: 19.3},
    {n: 6, x: 75.7, y: 49.6, w: 23.4, h: 3.4},
  ]}
/>

You can create a sale only after products, membership, and customer profile information are all set.

## 1. Enter the Receipt Number

Select <mark>**Register**</mark> to the left of `Invoice No.`, then scan or enter the **receipt number** issued by the external POS after payment.<br/>
The BO sale is **created with the same number**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-04.png').default}
  alt="Invoice No. — enter the receipt number in Register mode"
  boxes={[
    {x: 5.5, y: 22.5, w: 34.4, h: 14.0},
  ]}
/>

| Mode | Purpose |
|---|---|
| **Register** | Register a new sale — the sale is created with the entered number |
| **Lookup** | Look up an existing sale — used for returns and AC card reprints |

- Switching modes clears the entered number.
- The default mode is `Lookup` only for **GM_Melbourne_MALL_Chadstone**; all other stores default to `Register`.
  - At Chadstone, <mark>**switch to Register**</mark> before registering a sale.

**Input rules**

- <mark>**Use only letters, numbers, and hyphens (`-`).**</mark>
  - Numbers containing spaces or special characters such as `_` or `/` cannot be used later to look up or return the sale by receipt number.
- Up to 25 characters.
- A number already used in the same store cannot be entered.

<div className="blockquote-warning">

> **Always enter a new sale in Register mode.** Pressing Enter in Lookup mode runs a sale lookup and clears the product list.
>
> If the field is left blank, BO generates a number automatically. <mark>**Always enter the receipt number so the sale matches the external POS.**</mark>

</div>

## 2. Add Products

Place the cursor in the **Product Barcode** field and enter product information (code, product name, barcode), or scan the physical barcode to add the product.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-05.png').default}
  alt="Product Barcode search — search by product code / product name / barcode and select"
  boxes={[
    {x: 47.2, y: 9.1, w: 51.4, h: 5.0},
    {x: 1.0, y: 23.5, w: 45.8, h: 10.7},
  ]}
/>

- Gentle Monster products are **mapped to a package**, so the package is also shown in the list when you add the product.
- The list shows the **sale amount** (Customer Price, Discount Price, Total) and **Stock (SALES)** (available stock in the store's Sales location).
- Adjust quantity with the `-` / `+` buttons, and remove a wrong product with the **X** button on the right of the row. To start over, click **All Clear**.

## 3. Check Cashier / Seller

<AnnotatedImage
  maxWidth="420px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-06.png').default}
  alt="Cashier / Seller dropdowns"
  boxes={[
    {x: 5.3, y: 30.6, w: 42.0, h: 18.8},
    {x: 51.0, y: 30.6, w: 43.8, h: 43.1},
  ]}
/>

| Field | Description |
|---|---|
| **Cashier** (Required) | Defaults to the account logged in to the POS. You can change it |
| **Seller** (Optional) | If the staff member who assisted the customer is different from the one who processed payment, set the assisting staff member as Seller |

## 4. Set Membership (Required)

**Membership is required** to create a sale. Set it using one of the methods below.

<AnnotatedImage
  maxWidth="640px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-02.png').default}
  alt="Customer Member Search area"
  boxes={[
    {x: 6.6, y: 46.3, w: 88.9, h: 17.6},
    {x: 6.6, y: 73.3, w: 69.0, h: 17.6},
    {x: 79.0, y: 73.3, w: 16.6, h: 17.6},
  ]}
/>

| Method | Description |
|---|---|
| **Email / phone number search** | The country defaults to the POS store's country.<br/>Enter an email (`ID@` format) or phone number (at least 8 digits) in `Search by Email OR Phone` and search |
| **Membership QR scan** | When the customer shows the membership QR provided on sign-up to the online store, scan it in `Scan Customer QR` to look it up immediately |
| **Non-Member** | For customers who do not sign up, select **Non-Member**. Click it again to cancel |

## 5. Select Customer Profile Information (Required)

You must select **all** **CUSTOMER INFO** fields below Customer Member Search.

<AnnotatedImage
  maxWidth="420px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-07.png').default}
  alt="CUSTOMER INFO — customer profile information input area"
  boxes={[
    {x: 3.9, y: 56.1, w: 90.2, h: 6.1},
    {x: 3.9, y: 67.4, w: 90.2, h: 6.2},
    {x: 3.9, y: 78.9, w: 90.2, h: 5.9},
    {x: 3.9, y: 90.0, w: 90.2, h: 5.9},
  ]}
/>

| Field | Values |
|---|---|
| **Country** | Customer's country |
| **Continent** | Continent. Set automatically when you select Country, and can be changed |
| **Customer Type** | `LOCAL` / `FOREIGN` |
| **Gender** | `N/A` / `MALE` / `FEMALE` |
| **Usage Type** | `N/A` / `Normal` / `Gift` |

## 6. Confirm Sales (Create Sale)

When all required values (product, membership, customer profile information) are set, the **Confirm Sales** button is enabled. Click it to create the sale.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/sales-registration-03.png').default}
  alt="Confirm Sales enabled after required information (product / membership / customer profile information) is set"
  boxes={[
    {x: 0.9, y: 17.6, w: 72.0, h: 6.1},
    {x: 75.7, y: 17.2, w: 23.0, h: 6.3},
    {x: 75.7, y: 26.7, w: 23.0, h: 18.3},
    {x: 75.7, y: 48.4, w: 23.0, h: 3.1},
  ]}
/>

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

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/return-registration-01.png').default}
  alt="Purchased product history looked up by Invoice No. in Lookup mode — AC Card RE Print"
  boxes={[
    {x: 4.3, y: 10.0, w: 25.4, h: 2.9},
    {x: 0.9, y: 18.3, w: 72.8, h: 6.3},
    {x: 87.5, y: 61.4, w: 11.3, h: 2.7},
  ]}
/>

Select **Lookup** to the left of `Invoice No.`, enter the sale's **Invoice No.** (external POS receipt number), and press Enter to load the purchased product history.

- While a sale is looked up, Confirm Sales and the membership / customer profile inputs are disabled.

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
| 2026-10-13 | POS main UI change — replaced screen images, added Invoice No. Lookup / Register modes | Wooju(Landa) |
