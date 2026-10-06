---
source_hash: "c9a7f9d6a3"
sidebar_label: C2C Corporate Inbound
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 C2C Corporate Inbound

> This page explains how to review and confirm **C2C (Corporation To Corporation)** inbound from Korea HQ (SAP) to the Australia BP.
>
> Path : <span className="path-badge">IIC BO > Inventory > Inbound List</span>

<div className="blockquote-mint">

> <mark>**AU inventory transactions (inbound · outbound · movement · adjustment · stocktaking) are not integrated with an ERP.**</mark><br/>
> All results are reflected only in IIC BO inventory.

</div>

## 👉 C2C inbound process

> **Check pending inbound** → **Receive goods · count stock** → **Confirm inbound**

| Step | Action | Handled by |
|:---:|---|---|
| **1** | Korea HQ SAP issues an inbound document (ASN) → created in the BO Inbound List in real time (`Pending Inbound`) | Korea HQ → IIC BO (automatic) |
| **2** | Goods arrive → count stock | Inbound store |
| **3** | Confirm inbound → stock is added to the inbound store (`Inbound Confirmed`) | Inbound store (Approver account) |

<div className="blockquote-gray">

> C2C inbound, such as a BP's initial stock inbound, is not created from an outbound. It is created in BO <mark>**only from Korea HQ SAP's pending inbound information (ASN)**</mark>.<br/>
> AU is a self-logistics country: **packages** are created in the **WH Inbound List**, and **products** in the **store Inbound List**.

</div>

## 1. Check pending inbound

<div className="img-placeholder">📷 [Image] Inbound List — C2C / SAP pending inbound</div>

Check pending inbound records in the **Inbound List**.<br/>
C2C inbound is shown with Type `C2C` and Channel `SAP`, and the status is `Pending Inbound`.

- Click a row in the list to open the inbound detail screen.
- **Inbound Registration** at the top of the list is not used in AU.

## 2. Confirm inbound

<div className="img-placeholder">📷 [Image] Inbound detail — Actual Inbound Qty input and Inbound Confirmed button</div>

After counting the goods, click **Inbound Confirmed** → **Confirm** on the inbound detail screen.<br/>
Once confirmed, stock is added to the inbound store and the status changes to `Inbound Confirmed`.

- On inbound confirmation, stock is added and <mark>**an inbound record is logged in the inventory ledger by order number**</mark> (`Inbound (Manual)`). 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**
- If fewer goods arrive than expected, enter the actual quantity in `Actual Inbound Qty`. If left blank, the expected quantity is confirmed.
- If you confirm less than the expected quantity, <mark>**the difference is automatically recorded as an inventory adjustment**</mark>.
- To confirm multiple records at once, select them with the checkboxes in the list and click **Inbound Confirmed** at the bottom. In this case, <mark>**the expected quantity is confirmed as is**</mark>.

<div className="blockquote-warning">

> <mark>**Inbound confirmation cannot be canceled.**</mark> Finish counting the goods and check the quantity before confirming.<br/>
> Only inbound store accounts with **approval permission** can confirm inbound and enter quantities.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. More goods arrived than expected.**
>
> A. You cannot confirm more than the expected quantity. Confirm the expected quantity, then consult the operations team about the excess.

> **Q. Can I confirm inbound during stocktaking?**
>
> A. Yes. Inbound is allowed during stocktaking.

> **Q. I need to return items to Korea HQ due to defects.**
>
> A. After confirming inbound, process it as a C2C corporate outbound. 👉 **[Go to C2C Corporate Outbound](/docs/inventory/outbound/c2c-outbound-au)**

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-04 | Added process summary, cleaned up manual format | Wooju(Landa) |
