---
source_hash: "67639e321f"
sidebar_label: Inventory Transfer SALES → DP
sidebar_position: 7
author: Wooju(Landa)
created: "2026-04-21"
countries: [us]
---

# 📍 Inventory Transfer SALES → DP

> This guide explains how to move stock from the Sales location to the DP location in the POS.
>
> Path : <span className="path-badge">IIC BO > Front POS Main > Inventory mode</span>

## 👉 What is inventory transfer?

In addition to processing sales, POS Main can also process **inventory movements between locations**.

| Type | Description |
|---|---|
| **Default mode** | SALES (sales processing) |
| **Switch mode** | Inventory (inventory transfer) |
| **Direction** | Sales location → DP location |
| **ERP integration** | Movement (Inventory Transfer) |

- Change the switch (toggle) at the top of POS Main from **SALES → Inventory** to enable inventory transfer mode.

## 1. Search Products

- Add the products to move to the list by product master code, product name, or barcode.

## 2. Process the Transfer

- Click the transfer button that becomes enabled, and 1 unit of Sales stock is moved to the DP location.

## 3. Check the History

- You can look up the movement history in the <span className="path-badge">IIC BO > Inventory > Movement</span> list.
- This location movement is **integrated with the ERP (Netsuite)**. When it is processed in IIC BO, a Netsuite Inventory Transfer record is created automatically.

## 4. Set the Processing Employee

- For inventory transfers, **a record of which employee processed it is kept**.
- Set the **employee dropdown** at the top of POS Main to the employee who actually processed it before proceeding.

---

<div className="qna-section">

## ❓ FAQ

> **Q. Where can I check the history after a transfer?**
>
> A. You can look it up in the <u>IIC BO > Inventory > Movement</u> list.

> **Q. I processed a transfer with the wrong employee set.**
>
> A. Movement history <u>cannot be edited</u>.
>
> Handle it by communicating with the staff who review that history so they are aware.

> **Q. Can I also move stock in reverse, from DP to Sales?**
>
> A. Inventory transfer in the POS is available only in the <u>Sales → DP</u> direction.
>
> If you need a reverse movement, you can process it in the <u>IIC BO > Inventory Movement</u> menu by selecting the store and location.

</div>

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-21 | Initial version | Wooju(Landa) |
