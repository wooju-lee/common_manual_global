---
source_hash: "2b6e022866"
sidebar_label: Product Sales View
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Product Sales View

> Use this menu to view sale and return totals **by product**, per date and store.
>
> Path : <span className="path-badge">IIC BO > Sales > Product Sales View</span>

## 👉 When to use

- To check **how much a specific product was sold and returned at each store**
- To compare **product sales performance** by date

## 1. Search sales

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/product-sales-view-01.png').default}
  alt="Product Sales View — keyword search, Sales Type"
  boxes={[
    {x: 1.4, y: 36.2, w: 64.2, h: 4.4},
    {x: 70.8, y: 64.6, w: 5.0, h: 35.0},
  ]}
/>

Select the period and store. To view specific products only, enter a product code or product name in **Keyword**, then click **Search**.

<div className="blockquote-gray">

> Select a BP first to enable **Store** selection.

</div>

## 2. What you can see in the list

- Each row is a total per **date · store · product**. If the same product has returns on the same day, `Sales` and `Refund` are shown on separate rows.
- **Product Category 1 / 2** shows the product classification (e.g. `OPTICAL` / `OPTICAL COMBI`).
- **Total** is the amount including VAT, and **Net** is the amount excluding VAT.
- Unlike other sales menus, **there is no Total Sum area.** If you need totals, download the list with **Excel Export**.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created AU menu, added search instructions | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
