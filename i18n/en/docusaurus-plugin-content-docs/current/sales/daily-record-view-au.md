---
source_hash: "8c0fe0b0ba"
sidebar_label: Daily Record View
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-12"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Daily Record View

> Use this menu to view each store's sales by date, **one receipt (transaction) at a time**. You can check basic information and customer profile information for each sale and return.
>
> Path : <span className="path-badge">IIC BO > Sales > Daily Record View</span>

## 👉 When to use

- To check **each sale and return receipt one by one** for a store on a specific date
- To check the **purchased products and customer profile information** for each receipt

## 1. Search sales

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/daily-record-view-01.png').default}
  alt="Daily Record View list — Receipt No. / Original Receipt No., Sales Type"
  boxes={[
    {x: 26.4, y: 52.0, w: 9.4, h: 45.0},
    {x: 38.0, y: 52.0, w: 4.2, h: 45.0},
  ]}
/>

Select the period and store, then click **Search**.

<div className="blockquote-gray">

> - Select a BP first to enable **Store** selection.
> - The <strong>Total Sum</strong> at the top is shown only when a **Currency** is selected.

</div>

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/daily-record-view-02.png').default}
  alt="Total Sum shown when a Currency is selected"
  boxes={[
    {x: 26.0, y: 25.6, w: 6.8, h: 5.2},
    {x: 1.2, y: 62.4, w: 97.8, h: 33.0},
  ]}
/>

## 2. What you can see in the list

- **Returns** show Sales Type `REFUND`, and their quantity and amount appear as <strong>negative (-)</strong> values. The **original sales receipt number** is shown under the receipt number.
- **Customer profile information** (Country, Continent, Customer Type, Gender, Usage Type) is recorded only on sales receipts, so returns show `-`.
- `Total` in **Total Sum** is the combined amount of sales (`Sales`) and returns (`Refund`).
- Click **Excel Export** to download the search results.

## 3. View receipt details

Click <strong>Receipt No.</strong> in the list to open the receipt detail popup, where you can check the sales information, customer information, and purchased products at once.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/daily-record-view-03.png').default}
  alt="Sales receipt detail popup"
  boxes={[
    {x: 60.6, y: 25.4, w: 6.2, h: 6.4},
    {x: 7.5, y: 46.6, w: 80.8, h: 36.2},
  ]}
/>

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/daily-record-view-04.png').default}
  alt="Return receipt detail popup — negative qty and amounts"
  boxes={[
    {x: 63.6, y: 25.2, w: 6.0, h: 7.0},
    {x: 59.2, y: 59.6, w: 32.0, h: 20.6},
  ]}
/>

Return receipts show the **Original Receipt No.** (original sales receipt number), and instead of customer information, the message `Customer information is recorded on sales receipts only.` is shown.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created AU menu, added search instructions | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
