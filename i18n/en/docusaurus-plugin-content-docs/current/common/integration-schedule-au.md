---
source_hash: "840b5ea334"
sidebar_label: Integration Schedule
sidebar_position: 3
author: Wooju(Landa)
created: "2026-11-03"
countries: [au]
---

# 📍 Integration Schedule

> This page lists **when, and from where to where,** data is exchanged with external systems.<br/>
> All times are in <mark>**store local time**</mark>.

## Scheduled data exchange

| Data | From → To | When | How often |
|---|---|---|---|
| **Inventory snapshot save** | Saved in IIC BO | Every day 23:00 | Once a day |
| **Inventory snapshot** (previous day 23:00) | IIC BO → SAP | Every day 01:00 | Once a day |
| **Online closing stock** (online store AU1005 sales location) | IIC BO → OMS | Every day 01:00 | Once a day |
| **Sales** (previous day, returns as negative) | IIC BO → SAP | Every day 01:00 | Once a day |
| **Supply price** | SAP → IIC BO | Every day 01:30 | Once a day |
| **Selling price** | SAP → IIC BO | Every day 05:10 Korea time (Sydney 07:10; 06:10 outside daylight saving time) | Once a day |
| **SAP expected inbound** (→ inbound created) | SAP → IIC BO | `To be confirmed` | — |
| **Auto-cancel expired store pickups** | IIC BO → OMS | Every day 00:00 | Once a day |
| **Daily report** (confirmed reports) | IIC BO → SAP | `To be confirmed` | — |
| **Store master** | SAP → IIC BO | `To be confirmed` | — |

## Real-time data exchange

| Data | From → To | When |
|---|---|---|
| **Online orders · returns** | OMS → IIC BO | Immediately |
| **Sales · returns** (except AU1001 · AU1004) | IIC BO → Bluebell ERP | Immediately |
| **Online stock changes** | IIC BO → OMS | Immediately |
| **Online RX outbound to lab** | Within IIC BO | On RX Confirm (out-of-stock orders retried once a day) |

<div className="blockquote-gray">

> Items marked `To be confirmed` will be updated once the run time is confirmed.<br/>
> If data has not arrived after the scheduled time, contact the IT team via the system Operation channel (Slack).

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-11-03 | Initial version (based on code) | Wooju(Landa) |
