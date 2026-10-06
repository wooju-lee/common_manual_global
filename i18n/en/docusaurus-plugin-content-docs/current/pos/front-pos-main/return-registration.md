---
source_hash: "d6692a21d4"
sidebar_label: Return Registration & Inquiry
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Return Registration & Inquiry

> This guide explains how to **register a return (sales return)** in IIC BO POS after the refund is completed on an external POS (retailer POS or Bluebell POS).
>
> Path : <span className="path-badge">IIC BO > FRONT POS (MAIN)</span>

## 👉 AU offline return process

| Step | Action | Where |
|:---:|---|---|
| **1** | Complete the customer payment refund | External POS (retailer POS / Bluebell POS) |
| **2** | Look up the original sale and register the return, **or** create a new return | IIC BO POS |
| **3** | Return created + stock reflected in the store's **Sales** location | IIC BO (automatic) |

<div className="blockquote-warning">

> **Complete the refund on the external POS first**, then register the return in BO.<br/>
> Each store has a different operating environment (POS), so **exchanges and returns between stores are not supported.**

</div>

## Choose a return method

| Situation | Return method | Notes |
|---|---|---|
| Original sale exists in BO<br/>(found by receipt ID) | **[1. Return with original sale lookup (Confirm Refund)](#refund-with-origin)** | — |
| No original sale in BO<br/>(not found) | **[2. Return without original sale (Manual Refund)](#refund-without-origin)** | Use only in exceptional cases<br/>**Check the cause first** |

## 1. Return with Original Sale Lookup (Confirm Refund) {#refund-with-origin}

### Step 1. Look up the original sale

<div className="img-placeholder">📷 [Image] Look up the original sale by Invoice No. — lookup mode screen</div>

Scan or enter the original sale's **receipt ID** in the `Invoice No.` field and press Enter.<br/>
The original sale details are shown, and `Qty` shows the quantity available for return.

### Step 2. Select products to return

<div className="img-placeholder">📷 [Image] Move products to the return list with the ▼ button</div>

- Click the **▼** button on a product row to move it to the return list below, **one unit at a time**. (Partial returns are possible.)
- Products linked to a package move together with the package.
- If you moved a product by mistake, use the **▲** button in the return list to move it back.

### Step 3. Confirm Refund

1. Click **Confirm Refund**.
2. In the `Would you like to create a New Return?` popup, click <strong>Yes.</strong>
3. The return is complete when the `Return has been successfully created.` message appears.<br/>
   The return is created as a new invoice.

<div className="blockquote-warning">

> <mark>**Returns cannot be looked up in POS.**</mark><br/>
> Check created returns in IIC BO under Sales > Daily Record View or Order > Refund List. 👉 **[Go to Daily Record View](/docs/sales/daily-record-view-au)** 👉 **[Go to Refund List](/docs/order/refund-list-au)**

</div>

## 2. Return without Original Sale (Manual Refund) {#refund-without-origin}

If there is no original sale in BO, register the products to return directly to create a new return.

<div className="blockquote-warning">

> Use Manual Refund **only in truly exceptional cases**.<br/>
> First **check why the original sale is not in BO**, then proceed.

</div>

In AU, the original sale may be missing in the following cases.

| Case | Description |
|---|---|
| **BO sale not created** | The external POS and BO are not integrated, so the sale was not registered in BO after payment on the external POS |
| **Sale from before BO was introduced** | Sales from the system used before BO are not migrated to BO, so the return is for a past sale |

<div className="img-placeholder">📷 [Image] Manual Refund button</div>

| Step | Action |
|:---:|---|
| **1** | Leave `Invoice No.` blank, and scan or search for the products to return in `Product Barcode` |
| **2** | Check the quantity, then click the red **Manual Refund** button |
| **3** | In the `Would you like to create a New Return?` popup, click **Yes.** |
| **4** | Check the `Return has been successfully created.` message |

<div className="blockquote-gray">

> Manual Refund does not require membership or Customer Information. Only **Cashier** needs to be selected.

</div>

## When the return button is disabled

| Check | Description |
|---|---|
| **Cashier** | A Cashier must be selected |
| **Return products** | At least 1 product must be in the return list (or in the sales list for Manual Refund) |
| **Lens products** | Returns that include **LENS** products cannot be processed in POS |
| **Return eligibility** | If the original sale cannot be returned or the returnable quantity is 0, the ▼ button is disabled |

## 📌 Note — Return handling by POS type

Store staff follow the same steps in BO. Only the way the return is sent to Bluebell ERP after registration differs.

| POS used | After the return is registered in BO |
|---|---|
| **Distributor POS** | BO sends the return to Bluebell ERP in real time (per product line) |
| **Bluebell POS** | Bluebell POS has already sent it to the ERP, so BO stores it only as an internal return |

## 📌 Note — Invoice number generation

- <mark>**When BO creates sales, sales and return invoice numbers each follow their own generation rules.**</mark>
- Return invoice numbers are always **newly generated** in the format `RF + store code + date/time (yyMMdd HHmmss) + 5 random characters`, regardless of the input.
  - e.g. `RFAU1003261001091530INQ0L`
- A return invoice is created for each return processed.
  - Full return: **1** return invoice is created
  - Partial returns processed in several rounds: a return invoice is created **for each return**
- In the SALES menu, returns are shown under the new return invoice, but you can **also look them up by the original order number (Original Receipt No.)**. 👉 **[Go to Daily Record View](/docs/sales/daily-record-view-au)**

<div className="qna-section">

## ❓ FAQ

> **Q. Where does the stock for returned products go?**
>
> A. It is added to the <u>Sales location</u> stock of the store that registered the return.

> **Q. Can I return only part of the quantity?**
>
> A. Yes. Click the ▼ button once for each unit to return to process a <u>partial return</u>.

> **Q. A customer wants to return a product purchased at another store.**
>
> A. Exchanges and returns between stores are not supported. Ask the customer to return it at the store of purchase.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
