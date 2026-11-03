---
source_hash: "cab3021c88"
sidebar_label: Inventory Movement
sidebar_position: 2
author: Wooju(Landa)
created: "2026-04-14"
countries: [us]
---

# 📍 Inventory Movement

> This feature moves stock between locations within the same store.
>
> Path : `Inventory > Movement`

## AS-IS → TO-BE

| Category | AS-IS (NetSuite ERP) | TO-BE (IIC BO) |
|:---:|---|---|
| **Stock movement** | Inventory Transfer created directly in NetSuite | Movement registered in IIC BO → reflected in NetSuite automatically |
| **Movement history** | Looked up individually in NetSuite | Viewed together in the IIC BO movement list |
| **Stock update** | Updated manually in NetSuite | From / to location stock updated automatically on registration |

:::tip Key changes
- **Immediate update** — On movement registration, stock is deducted from the from location and added to the to location immediately
- **Automatic ERP integration** — For US/CA stores, an Inventory Transfer is created in NetSuite automatically
- **Automatic error recovery** — If a follow-up process fails, stock is automatically restored to its original state
:::

---

## Procedure

| Step | Action |
|:---:|---|
| **1** | Go to the `Inventory > Movement` menu and click the **Register** button |
| **2** | Select the store (only stores assigned to you can be selected) |
| **3** | Select the **from location** and **to location** (they must be different) |
| **4** | Enter the product codes and quantities to move (1 or more) |
| **5** | Enter remarks (optional, up to 500 characters) |
| **6** | Click the **Register** button → stock updated immediately |

:::info Note
Stock movement is reflected immediately on registration. There is no separate confirmation (approval) step, so check the quantities before registering.
:::

---

### ERP integration (US/CA stores)

For US·CA stores, an Inventory Transfer is **created automatically** in NetSuite after the movement is registered.

- This runs in the background; the BO screen is updated immediately.
- If the NetSuite integration fails, BO stock is restored automatically and a Slack alert is sent to the operations team.

---

## Key restrictions

| Item | Details |
|---|---|
| Same location not allowed | **An error occurs if** the from location and to location **are the same** |
| Blocked during stocktaking | **Movement is not allowed if either** the from or to location **is under stocktaking** |
| No duplicate product codes | The same product code cannot be entered twice in one movement |
| Quantity limit | You cannot move more than the quantity held in the from location |
| Assigned stores only | You can only move stock in stores you have permission for |

---

## FAQ

### Q. Do I move stock from Sales → DP here?

> Sales (sales stock) → DP (display stock) movement is handled in the **POS General > Inventory Transfer** menu.
> In that menu, the from / to locations are fixed as Sales (1000) → DP (1010), so you don't need to select them.
>
> This menu (`Inventory > Movement`) allows movement between any locations.

---

### Q. Is the movement reflected in NetSuite right away?

> For US·CA stores, it is reflected in NetSuite automatically after the movement is registered. However, since it is processed asynchronously, there may be a delay of a few seconds.
> If the NetSuite integration fails, BO stock is restored automatically and a Slack alert is sent.

---

### Q. Can I cancel a movement?

> Canceling a movement after registration is currently not supported.
> If stock was moved by mistake, correct it by registering another movement in the opposite direction.


---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-14 | Initial version | Wooju(Landa) |
