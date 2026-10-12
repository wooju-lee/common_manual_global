---
source_hash: "ff54f16fed"
sidebar_label: Period Sales View
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Period Sales View

> Use this menu to view store sales totaled **by hour, day, or month**.
>
> Path : <span className="path-badge">IIC BO > Sales > Period Sales View</span>

## 👉 When to use

- To check store sales as **hourly, daily, or monthly totals**
- To see **sale/return counts, net sales**, and **customer profile ratios** for a period at a glance

## 1. Select the view unit

Select the view unit in the top tabs. When you open the menu, the **DAILY TOTAL** tab is selected by default and results load immediately.

| Tab | What it shows | Example |
|---|---|---|
| **HOURLY TOTAL** | Totals per hour | e.g. Totals for 09:00 ~ 09:59 at the Melbourne store |
| **DAILY TOTAL** | Totals per day | e.g. Totals for October 3 |
| **MONTHLY TOTAL** | Totals per month | e.g. Totals for October |

## 2. Search sales

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/period-sales-view-01.png').default}
  alt="Period Sales View — DAILY TOTAL"
  boxes={[
    {x: 11.4, y: 10.8, w: 11.0, h: 3.6},
    {x: 28.2, y: 20.4, w: 7.4, h: 3.4},
    {x: 77.0, y: 57.4, w: 14.4, h: 41.0},
  ]}
/>

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/period-sales-view-02.png').default}
  alt="Period Sales View — HOURLY TOTAL, Time Slot"
  boxes={[
    {x: 1.4, y: 8.1, w: 12.0, h: 2.4},
    {x: 16.0, y: 42.6, w: 6.0, h: 54.0},
  ]}
/>

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/sales/img/period-sales-view-03.png').default}
  alt="Period Sales View — MONTHLY TOTAL, monthly Sales Date"
  boxes={[
    {x: 21.6, y: 11.5, w: 10.4, h: 3.5},
    {x: 1.6, y: 27.3, w: 24.2, h: 3.8},
    {x: 10.8, y: 63.8, w: 5.0, h: 31.4},
  ]}
/>

To view a different period or store, change the filters and click **Search**.

<div className="blockquote-gray">

> - Select a BP first to enable **Store** selection.
> - The <strong>Total Sum</strong> at the top is shown only when a **Currency** is selected.

</div>

## 3. What you can see in the list

- Each row is a total per **date (or time slot / month) · store · currency**. If there are returns, `Sales` and `Refund` are shown on two separate rows.
- **HOURLY TOTAL** shows totals per `Time Slot` (e.g. `09:00 ~ 09:59`) for each date.
- For **MONTHLY TOTAL**, select the period **by month** (e.g. September ~ October 2026), and `Sales Date` is shown as a month, such as `2026-10`.
- The bold **Total Qty** at the right end is the **net sales quantity** (sales quantity minus return quantity), and **Total Amount** is the **net sales amount** (sales amount minus return amount).
- **Average Unit** is the average amount per product (amount ÷ quantity).
- **Customer Type / Continent** (customer profile) is shown as a ratio and count based on the number of sales. e.g. `37.5% (3)` = 3 out of 8 sales
- Click **Excel Export** to download the search results.

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created AU menu, added search instructions | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
