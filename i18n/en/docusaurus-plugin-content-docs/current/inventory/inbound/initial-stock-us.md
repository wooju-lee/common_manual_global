---
source_hash: "e697702690"
sidebar_label: C2C Corporate Inbound
sidebar_position: 2
author: Wooju(Landa)
created: "2026-05-05"
countries: [us]
---

# 📍 C2C Corporate Inbound

> This is the corporate inbound process for stock received into a BP.
>
> Path : `Inventory > Inbound`

## Inbound procedure

### `C2C` inter-corporate inbound type

> C2C : Corporation To Corporation, an inbound type for transactions between BPs.

| Step | Action |
|:---:|---|
| **1** | HQ SAP issues pending inbound information (ASN) |
| **2** | IIC BO receives it, creates an Inbound List record, and requests NetSuite ERP to create a PurchaseOrder |
| **3** | The inbound information is sent to WMS with the created Order ID |
| **4** | When the `Completed` status is received from WMS, the inbound is confirmed in the IIC BO Inbound List and the ERP order is updated to `Received` |

> WMS statuses received : `Accept` (inbound received) · `Completed` (inbound completed → triggers inbound confirmation) · `Cancel` (inbound canceled)

---

### `S2S` store-to-store inbound type

> S2S : Store To Store, an inbound type for transactions between stores.

---

### `L2S` logistics-to-store inbound type

> L2S : Logistics To Store, an inbound type from a logistics center to a store.

---

### US inbound confirmation

US BP logistics inbound is **confirmed automatically based on the status received from WMS**. In exceptional cases, it can be handled by **changing the status manually**.

:::caution Caution
Status changes made in IIC BO are synced to NetSuite, but if you process it only in NS, the status can differ from IIC BO. (== **inventory discrepancy**)
:::

:::info Note
All interfaces between SAP - IIC BO - NS for the processes above are **processed in real time**.
:::

---

## FAQ

### Q. Can I see the NetSuite 'PO' ID in the IIC BO Inbound List?

> As ERP usage decreases, we plan to add the Order ID so it can be checked in BO.

---

### Q. What if the expected inbound quantity ≠ the actual inbound quantity?

> **As agreed with Jaeyeol (SCM)**

**Case 1. Fewer goods arrived**

e.g. 100 expected → 90 actually received

| Step | Action |
|:---:|---|
| **1** | Confirm inbound for 100 |
| **2** | Create a -10 adjustment |
| **3** | US reviews the -10 adjustment and creates it manually in ERP *(after communication)* |

**Case 2. More goods arrived**

e.g. 100 expected → 110 actually received

| Step | Action |
|:---:|---|
| **1** | Confirm inbound for 100 |
| **2** | Manually register an additional inbound of +10 *(after communication)* |
| **3** | US reviews the +10 additional registration and creates it manually in ERP |

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-05-05 | Initial version | Wooju(Landa) |
