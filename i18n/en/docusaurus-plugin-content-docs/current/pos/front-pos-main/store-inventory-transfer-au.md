---
source_hash: "39d695989a"
sidebar_label: Inventory Transfer SALES → DP
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-13"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Inventory Transfer SALES → DP

> This guide explains how to easily move **SALES (sale) stock to DP (display) stock** in the store.
>
> Path : <span className="path-badge">IIC BO > FRONT POS (MAIN) > INVENTORY</span>

## 👉 Inventory transfer process

> **Switch to INVENTORY mode** → **Add products** → **Click (SALES → DP)**

The movement is fixed to <strong>SALES(1000) → DP(1010)</strong> in the logged-in account's store, so you do not select a location.

## 1. Switch to INVENTORY Mode

Switch the toggle at the top of Front POS Main to **INVENTORY** to change the screen to inventory transfer mode.<br/>
The **(SALES → DP)** button appears on the right, and <mark>**the membership and customer profile information areas are not used.**</mark>

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/store-inventory-transfer-01.png').default}
  alt="Front POS Main — INVENTORY mode screen"
  boxes={[
    {x: 0.9, y: 3.5, w: 9.4, h: 5.8},
    {x: 75.7, y: 65.7, w: 23.0, h: 6.0},
  ]}
/>

<div className="blockquote-gray">

> Switching modes clears the product list.

</div>

## 2. Add Products

Scan a product in **Product Barcode**, or search and select it from the dropdown to add it to the list.<br/>
Once a product is added, the **(SALES → DP)** button is enabled.

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/pos/front-pos-main/img/store-inventory-transfer-01.png').default}
  alt="List with products to transfer and the enabled (SALES → DP) button"
  boxes={[
    {x: 35.4, y: 10.6, w: 38.2, h: 5.3},
    {x: 1.0, y: 26.3, w: 72.7, h: 5.9},
    {x: 75.7, y: 65.7, w: 23.0, h: 6.0},
  ]}
/>

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
| 2026-10-13 | POS main UI change — replaced screen images | Wooju(Landa) |
