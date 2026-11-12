---
source_hash: "9d15db7bbf"
sidebar_label: Integration Schedule
sidebar_position: 3
author: Wooju(Landa)
created: "2026-11-03"
updated: "2026-11-11"
countries: [us]
---

# 📍 Integration Schedule

> A list defining **'when, from where, and to where'** data is exchanged with each system, based on the US systems.

## Real-time Integration Data

| Type | Data | From → To |
|---|---|---|
| **Sales** | **Online sales · returns** | Official online store → OMS → IIC BO → NetSuite |
| | **Offline sales · returns** (Shopify POS) | Shopify → IIC BO<br/>Shopify → NetSuite |
| **Inventory** | **Online stock changes** | IIC BO → OMS |
| | **WMS inbound · outbound results**<br/><span className="info-badge">B2B inbound · outbound only</span><br/><span className="info-badge">WMS(LXP) internal batch (scheduler)</span> | WMS(LXP) → IIC BO |

## Scheduler Data

> All times are based on the <mark>**time zone set for the store in IIC BO Master : Store**</mark>.

| Type | Data | From → To | When | How often |
|---|---|---|---|---|
| **Master** | **Store master** | SAP → IIC BO | `To be confirmed` | — |
| | **Product master** | SAP → IIC BO<br/>IIC BO → WMS(LXP) | `To be confirmed` | — |
| | **Supply price** | SAP → IIC BO | Every day 01:30 | Once a day |
| | **Selling price** | SAP → IIC BO | Every day 05:10 Korea time (US East 15:10 · West 12:10 the previous day; +1 hour during daylight saving time) | Once a day |
| **Sales** | **Sales** | SAP pulls from IIC BO | Set by SAP | — |
| | **Daily report** (confirmed reports) | IIC BO → SAP | `To be confirmed` | — |
| **Inventory** | **Inventory snapshot save** | Saved in IIC BO (NetSuite stock snapshot saved together) | Every day 23:00 | Once a day |
| | **Inventory snapshot** (previous day 23:00) | IIC BO → SAP | Every day 01:00 | Once a day |
| | **Online closing stock** (online store US1004 sales location) | NetSuite → OMS | Every day 01:00 | Once a day |
| | **WMS warehouse stock snapshot** (US1006 available · damaged · on hold) | WMS(LXP) → IIC BO | Set by WMS | Set by WMS |
| | **SAP expected inbound** (→ inbound created · NetSuite PO · WMS inbound order) | SAP → IIC BO | `To be confirmed` | — |
| **Order** | **Online RX outbound to lab** (confirmed orders) | IIC BO → NetSuite · WMS | `To be confirmed` | Once a day |
| | **Auto-cancel expired store pickups** | IIC BO → OMS | Every day 00:00 | Once a day |

<div className="blockquote-gray">

> Items marked `To be confirmed` will be updated once the run time is confirmed.<br/>
> If data has not arrived after the scheduled time, contact the IT team via the system Operation channel (Slack).

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-11-11 | Time basis corrected to the store time zone, real-time · scheduler tables regrouped by type, sales (online/offline) · product master (from SAP) flows updated | Wooju(Landa) |
| 2026-11-03 | Initial version (based on code) | Wooju(Landa) |
