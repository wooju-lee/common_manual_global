---
source_hash: "e249dcb607"
sidebar_label: Inventory Transfer SALES → DP
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Transfer SALES → DP

> This guide explains how to easily move **SALES (sale) stock to DP (display) stock** in the store.
>
> Path : <span className="path-badge">IIC BO > FRONT POS (MAIN) > INVENTORY</span>

## 👉 Inventory transfer process

> **Switch to INVENTORY mode** → **Add products** → **Click (SALES → DP)**

The movement is fixed to <strong>SALES(1000) → DP(1010)</strong> in the logged-in account's store, so you do not select a location.

## 1. Switch to INVENTORY Mode

<div className="img-placeholder">📷 [Image] Front POS Main — INVENTORY mode screen</div>

Switch the toggle at the top of Front POS Main to **INVENTORY** to change the screen to inventory transfer mode.<br/>
The **(SALES → DP)** button appears on the right, and <mark>**the membership and customer profile information areas are not used.**</mark>

<div className="blockquote-gray">

> Switching modes clears the product list.

</div>

## 2. Add Products

<div className="img-placeholder">📷 [Image] List of products to move and the enabled (SALES → DP) button</div>

Scan a product in **Product Barcode**, or search and select it from the dropdown to add it to the list.<br/>
Once a product is added, the **(SALES → DP)** button is enabled.

- Adjust quantity with the `-` / `+` buttons, and check the SALES stock available to move in `Stock (SALES)`.

<div className="blockquote-warning">

> <mark>**The product must have available SALES stock to be moved.**</mark><br/>
> If the movement quantity is greater than the available stock in `Stock (SALES)`, it is not processed.

</div>

## 3. Click (SALES → DP)

Click **(SALES → DP)** to move the stock immediately.

- The movement is recorded in the inventory movement list and the inventory ledger. 👉 **[Go to Inventory Movement](/docs/inventory/movement/transfer-au)** 👉 **[Go to Inventory Ledger](/docs/inventory/inventory-ledger-au)**
- **Cashier** is required. To keep the same cashier, check **Save cashier information** before proceeding.
- In the inventory movement list, the processor (`Process Account`) is recorded as the **account logged in to the POS**, not the Cashier.

<div className="blockquote-warning">

> On completion, the same message as sales registration (`Sales information has been successfully registered.`) is shown, but **no sale is created; only the inventory movement is processed**.<br/>
> Stock cannot be moved during stocktaking or if available SALES stock is insufficient.

</div>

<div className="blockquote-gray">

> Movements between other locations or from DP → SALES are processed in the location movement menu. 👉 **[Go to Inventory Movement](/docs/inventory/movement/transfer-au)**

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version (text) | Wooju(Landa) |
| 2026-10-03 | Rewritten as a screen-based inventory transfer process | Wooju(Landa) |
