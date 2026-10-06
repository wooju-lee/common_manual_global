---
source_hash: "734d932263"
sidebar_label: Daily Record View
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Daily Record View

> Use this menu to view each store's sales by date, **one receipt (transaction) at a time**. You can check basic information and customer profile information for each sale and return.
>
> Path : <span className="path-badge">IIC BO > Sales > Daily Record View</span>

## 👉 When to use

- To check **each sale and return receipt one by one** for a store on a specific date
- To check the **purchased products and customer profile information** for each receipt

## 1. Search sales

<div className="img-placeholder">📷 [Image] Daily Record View search and list screen</div>

Select the period and store, then click **Search**.

<div className="blockquote-gray">

> - Select a BP first to enable **Store** selection.
> - The <strong>Total Sum</strong> at the top is shown only when a **Currency** is selected.

</div>

## 2. What you can see in the list

- **Returns** show Sales Type `REFUND`, and their quantity and amount appear as <strong>negative (-)</strong> values. The **original sales receipt number** is shown under the receipt number.
- **Customer profile information** (Country, Continent, Customer Type, Gender, Usage Type) is recorded only on sales receipts, so returns show `-`.
- `Total` in **Total Sum** is the combined amount of sales (`Sales`) and returns (`Refund`).
- Click **Excel Export** to download the search results.

## 3. View receipt details

Click <strong>Receipt No.</strong> in the list to open the receipt detail popup, where you can check the sales information, customer information, and purchased products at once.

<div className="img-placeholder">📷 [Image] Sales (NORMAL) receipt detail popup</div>

<div className="img-placeholder">📷 [Image] Return (REFUND) receipt detail popup</div>

Return receipts show the **Original Receipt No.** (original sales receipt number), and instead of customer information, the message `Customer information is recorded on sales receipts only.` is shown.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created AU menu, added search instructions | Wooju(Landa) |
