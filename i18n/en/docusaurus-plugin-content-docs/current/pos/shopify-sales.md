---
source_hash: "62c47d9a59"
sidebar_label: Shopify Sales Creation
sidebar_position: 1
author: Wooju(Landa)
created: "2026-04-21"
countries: [us]
---

# 📍 Shopify Sales Creation

> This guide explains how to look up offline sales paid through Shopify, set membership, print AC cards, and process Gift Card use.
>
> Path : <span className="path-badge">IIC BO > Front POS Main</span>

## 1. How to Look Up Sales

When an offline customer's order is paid through Shopify, the sale is **synced to IIC BO immediately** and can be looked up.

### Lookup steps

> 1. Check the **QR code at the bottom of the receipt** issued by Shopify
> 2. **Scan** the QR into the **Invoice No.** search field in the POS
> 3. Check the purchased **order item list, quantity, and amount**

### If the QR cannot be scanned

| Method | Description |
|---|---|
| **Enter the Invoice No. directly** | Enter the Invoice No. used in Shopify directly to look it up (the actual Invoice No., not the `#4-digit number`) |
| **Look up in IIC BO > Sales** | Search for the order by the store's sales registration date/time and item details |

- <mark>After finding the order in IIC BO > Sales, look it up in the POS with that order number to see the same details.</mark>

---

## 2. Membership and AC Card Printing

### 👉 Why set membership

To **manage online and offline order history together** based on the online member ID.

| Type | Description |
|---|---|
| **Customer** | Can view **all online and offline order history** on My Page |
| **Admin** | Can **manage customer orders and members** by member ID in the online admin |

### How to set membership

When you look up an order created in Shopify by scanning the Invoice QR, **setting membership is required** for that order.

Once membership is set, the **AC Card Print** button is enabled. When you click it, **one AC Card is printed for each frame** in the order.

### Member search

| Search method | Description |
|---|---|
| **Mobile number** | Enter 8 or more characters |
| **Email** | Enter in `ID@` format |
| **Member QR** | Scan the member QR on the customer's .com My Page |

> 1. For customers with brand online member information, **set the Country** where the account is registered, then search for the customer.
> 2. If the customer signed up online with multiple emails, the list of emails registered for each `ID@` is shown.
> 3. If the search returns **1 exact match**, membership is set as is.

<div className="blockquote-warning">

> In most cases, you must **enter exact information** to search.

</div>

- <mark>Asking the customer for the member QR on the .com My Page is the most accurate search method, because it carries the customer's exact ID.</mark>

### Non-members

- When you click the **Non-member** button, the membership search area is disabled and you can print the AC Card for the order.

### AC Card printing

You can print the AC Card after looking up the Invoice and **completing membership setup** for the order.

- After printing, you can look it up again to **reprint the same AC Card**.

---

## 3. Gift Card Use

### 👉 What is a Gift Card?

A payment method issued within the brand, **similar to a gift voucher**.

| Type | Description |
|---|---|
| **Shopify (payment POS)** | Gift Card payment **not supported** |
| **IIC BO** | **Supported** via manual sale creation > payment method (Gift Card) |

<div className="blockquote-warning">

> A Gift Card can be **applied to only 1 product**.
>
> Even if you add multiple products, it is applied to **1 frame (the first product added)**, and if lens products are mixed in, it is applied **based on the frame**.

</div>

### Steps

> 1. In **Product Info**, search for the product by product name, product master code, or barcode and add it.
> 2. After the product is added to the list, **set membership** for the order.
> 3. Enter the code in the Gift Card code field and click the **POC Check** button.
> 4. After validation is completed, click the **Confirm Sales** button to print the AC Card.

- <mark>If the Gift Card is valid, the product's selling price is updated to **0**.</mark>

### Check the result

- Manually created orders can be checked in the <span className="path-badge">IIC BO > Sales</span> sales list.
- The **Gift Card code used** can also be viewed in that sales record.

---

<div className="qna-section">

## ❓ FAQ

> **Q. The QR does not scan.**
>
> A. You can enter the <u>Invoice No.</u> used in Shopify directly to look it up.
>
> Enter the actual Invoice No., not the `#4-digit number`.

> **Q. I cannot find it by Invoice No. either.**
>
> A. In <u>IIC BO > Sales</u>, you can search for the order by sales registration date/time and item details.
>
> After finding the order, look it up in the POS with that order number to see the same details.

> **Q. Member search does not work.**
>
> A. You must enter the mobile number with <u>8 or more characters</u> and the email in <u>ID@</u> format exactly.
>
> Asking the customer for the member QR on the .com My Page gives the most accurate search.

> **Q. Can I process it as a non-member?**
>
> A. When you click the <u>Non-member</u> button, the membership search area is disabled and you can print the AC Card.

> **Q. Can I reprint the AC Card?**
>
> A. Look up the Invoice again to <u>reprint</u> the same AC Card.

> **Q. Can I pay for multiple products with a Gift Card?**
>
> A. A Gift Card can be <u>applied to only 1 product</u>.
>
> Even if you add multiple products, it is applied to 1 frame (the first product added).

> **Q. It says the Gift Card code is invalid.**
>
> A. Validation is done with the <u>POC Check</u> button.
>
> Check the code again, or contact the system Operation channel (Slack).

> **Q. Where can I check Gift Card usage?**
>
> A. You can check it in the <u>IIC BO > Sales</u> sales list, along with the Gift Card code used.

</div>
