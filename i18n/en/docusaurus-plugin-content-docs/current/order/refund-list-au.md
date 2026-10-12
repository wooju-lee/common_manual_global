---
source_hash: "0fa865d582"
sidebar_label: Refund List
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Refund List

> Use this menu to view return orders collected in IIC BO.
>
> Path : <span className="path-badge">IIC BO > Order > Refund List</span>

## 👉 When to use

- To check **return (refund) history** from online and offline channels
- To check the **original order number** of a return
- To check **which store > location** the returned stock was added to

## 1. Search returns

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/order/img/refund-list-01.png').default}
  alt="Refund List — quick period buttons, Refund No., Original Order No."
  boxes={[
    {x: 1.4, y: 26.6, w: 19.4, h: 3.4},
    {x: 23.2, y: 52.6, w: 10.5, h: 46.8},
    {x: 35.9, y: 52.6, w: 9.9, h: 46.8},
  ]}
/>

Select the period and store, then click **Search**.<br/>
Use the `TODAY` / `1 WEEK` / `1 MONTH` / `3 MONTHS` buttons to quickly select a period.

<div className="blockquote-gray">

> To find a specific return, enter the refund number or original order number in the **Refund No., Original Order No., Store Code, Store Name** field. (2+ characters)

</div>

## 2. Refund type

> 🌐 Online return · 🏪 Offline return

| Refund Type | Meaning | Details |
|---|---|---|
| **REFUND** | Regular return | 🌐 **Online** : When refund confirmation is received from OMS<br/>🏪 **Offline** : When the return is created in POS (offline only has return confirmation) |
| **EXCHANGE** | Exchange | 🌐 **Online** only : Only same-product exchanges are received<br/>&emsp;• When inspection of the collected item is complete (`COMPLETE_GRADE`), a $0 return is created + stock is restored based on grading<br/>&emsp;• When the exchange item ships (`SHIP`), a $0 sale is created + stock is deducted (reflected as a sale, not in Refund List) |
| **FORCE_REFUND** | Force refund | 🌐 **Online** only : A refund forcibly processed in OMS, reflected the same way as a regular return confirmation<br/>&emsp;• Not planned for use in AU |

## 3. What you can see in the list

- **Refund Date** is shown in each store's local time zone.
- The BO refund number is shown in parentheses under **Refund No.**, and the original order number of the return is shown in <strong>Original Order No.</strong> on the right.
- If one original order is returned multiple times, each return is shown as a separate row.
- Click **Excel Export** to download the search results.

## 4. View return details

Click <strong>Refund No.</strong> in the list to open the return detail popup. The top of the popup shows the original order number, the BO refund number, and the **refund type**.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/order/img/refund-list-02.png').default}
  alt="Return detail popup — refund type, Store / Location per product"
  boxes={[
    {x: 49.2, y: 54.6, w: 5.8, h: 2.8},
    {x: 34.6, y: 78.4, w: 22.4, h: 11.4},
  ]}
/>

- **Refund Information** shows the return date/time, store, and currency.
- **Refund Products** shows the quantity and amounts (Unit, Net, VAT, Total Price) for each returned product.
  - Each product shows its **Store** and **Location Information**, so you can check **which store and location the returned stock was received into**.
  - **Packages** included with a product are shown with an amount of `0` and are not included in the Total quantity at the bottom.

| Type | Where returned stock is received |
|---|---|
| 🏪 **Offline** return | Added directly to the `1000 / SALES` location of the store that received the return |
| 🌐 **Online** return | Added based on the **grading value** sent from OMS<br/>&emsp;• Grade A · B : `1000 / SALES`<br/>&emsp;• Grade C : `1020 / DEFECT` |
| 🌐 **Online** RX cancel / return (exception) | Not allowed in normal operations, but can be processed as an exception in Rx Work Management. Added to the **store > location holding the stock at the time of processing**<br/>&emsp;• Before lab inbound confirmation (online → lab outbound completed) : returned to the online store<br/>&emsp;• After lab inbound confirmation : added to the lab (AU_RX_LAB) |

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Created menu, added search instructions | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
