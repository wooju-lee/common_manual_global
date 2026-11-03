---
source_hash: "ea8c9845be"
sidebar_label: Integration Schedule
sidebar_position: 3
author: Wooju(Landa)
created: "2026-11-03"
countries: [us]
---

# 📍 Integration Schedule

> This page lists **when, and from where to where,** data is exchanged with external systems.<br/>
> All times are in <mark>**store local time**</mark>.

## Scheduled data exchange

| Data | From → To | When | How often |
|---|---|---|---|
| **Inventory snapshot save** | Saved in IIC BO (NetSuite stock snapshot saved together) | Every day 23:00 | Once a day |
| **Inventory snapshot** (previous day 23:00) | IIC BO → SAP | Every day 01:00 | Once a day |
| **Online closing stock** (online store US1004 sales location) | NetSuite → OMS | Every day 01:00 | Once a day |
| **WMS warehouse stock snapshot** (US1006 available · damaged · on hold) | WMS(LXP) → IIC BO | Set by WMS | Set by WMS |
| **Sales** | SAP pulls from IIC BO | Set by SAP | — |
| **Supply price** | SAP → IIC BO | Every day 01:30 | Once a day |
| **Selling price** | SAP → IIC BO | Every day 05:10 Korea time (US East 15:10 · West 12:10 the previous day; +1 hour during daylight saving time) | Once a day |
| **SAP expected inbound** (→ inbound created · NetSuite PO · WMS inbound order) | SAP → IIC BO | `To be confirmed` | — |
| **Product master** | IIC BO → WMS(LXP) | `To be confirmed` | — |
| **Online RX outbound to lab** (confirmed orders) | IIC BO → NetSuite · WMS | `To be confirmed` | Once a day |
| **Auto-cancel expired store pickups** | IIC BO → OMS | Every day 00:00 | Once a day |
| **Daily report** (confirmed reports) | IIC BO → SAP | `To be confirmed` | — |
| **Store master** | SAP → IIC BO | `To be confirmed` | — |

## Real-time data exchange

| Data | From → To | When |
|---|---|---|
| **Online orders · returns** | OMS → IIC BO | Immediately |
| **Sales · returns** | IIC BO → NetSuite | Immediately |
| **Shopify POS sales** | Shopify → IIC BO | Immediately |
| **Online stock changes** | IIC BO → OMS | Immediately |
| **WMS inbound · outbound results** | WMS(LXP) → IIC BO | Immediately |
| **Offline RX orders · membership** | IIC BO → GM Admin | On RX Confirm |

<div className="blockquote-gray">

> Items marked `To be confirmed` will be updated once the run time is confirmed.<br/>
> If data has not arrived after the scheduled time, contact the IT team via the system Operation channel (Slack).

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-11-03 | Initial version (based on code) | Wooju(Landa) |
