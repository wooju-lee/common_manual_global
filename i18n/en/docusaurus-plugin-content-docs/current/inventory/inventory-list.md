---
source_hash: "0626900ce2"
sidebar_label: Inventory List
sidebar_position: 7
author: Wooju(Landa)
created: "2026-04-21"
countries: [us]
---

# 📍 Inventory List

> Use this menu to check current system stock in real time by store, location, and item.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inventory List</span>

## 👉 When to use

- To quickly check **whether a specific product is in stock** when assisting a customer
- To check **stock status by location** within a store
- To check the **actually usable quantity** of products with outbound or adjustment in progress

---

## 1. How to search stock

Search stock by selecting filters or entering text directly.

| Filter | Description |
|---|---|
| **Brand** | Defaults to your assigned brand |
| **BP** | Select a BP to view its store list |
| **Store** | If assigned stores are set, only those stores can be searched. Multiple selection allowed |
| **Location** | Search by location within the store. Multiple selection allowed |
| **Product Category** | Category 2 is enabled after selecting Category 1 |
| **Text search** | Enter BP code, BP name, store code, store name, product code, product name, or barcode directly |

## 2. How to check real-time stock quantities

The following fields are shown in the search results.

| Field | Meaning | Note |
|---|---|---|
| **Total stock (On-hand)** | Total quantity of the product in the location | — |
| **Available** | Quantity that can actually be used for sales and movements | On-hand − Outbound Pending − Adjustment Pending |
| **Outbound Pending** | Quantity registered for outbound but not yet completed | Excluded on inbound completion |
| **Adjustment Pending** | Adjustment quantity awaiting approval | Applied on approval |

- <mark>When informing customers about stock, check based on **Available**. Outbound Pending and Adjustment Pending quantities cannot actually be used.</mark>
- You can also **download the results to Excel**.

---

<div className="qna-section">

## ❓ FAQ

> **Q. Why are the total stock quantity and Available different?**
>
> A. Quantities with outbound registration or inventory adjustment in progress are excluded from <u>Available</u>.
>
> Check the actually usable quantity based on Available.

> **Q. I want to find stock for a specific product quickly.**
>
> A. Enter the <u>product name, product code, or barcode</u> directly in the text search field to find it quickly.

> **Q. Does the Excel download include all data?**
>
> A. It exports the <u>search results</u> matching the current search filters.

</div>

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-21 | Initial version | Wooju(Landa) |
