---
source_hash: "d03154f633"
sidebar_label: Outbound Label Print
sidebar_position: 8
author: Wooju(Landa)
created: "2026-04-21"
updated: "2026-10-03"
countries: [us]
---

# 📍 Outbound Label Print

> This guide explains how to check the progress of RX outbounds (Store > Lab) and print shipping labels.
>
> Path : <span className="path-badge">IIC BO > FRONT POS > Outbound Label Print</span>

## 1. Outbound Label Print List

Check the progress of the outbound list in <span className="path-badge">Front POS > Outbound Label Print</span>.

| Item | Description |
|---|---|
| **Create Date** | Date and time the outbound was created |
| **Outbound No.** | Outbound number |
| **Order No.** | Order number |
| **Product Info** | Product code / barcode |
| **Qty** | Quantity |
| **Tracking No.** | Carrier tracking number |
| **Print** | Button to request label registration and print |

## 2. Printing Steps

> 1. After the outbound is registered and the `Tracking No.` is received successfully, it becomes ready to print.
> 2. The **Print shipping labels** button is enabled.
> 3. When you click the button, the printer system popup appears and **1 B2B shipping label** is printed on the label printer.

:::danger If processing fails
When you click the button, a system **failure alert** appears at the top right. Check which step caused the error, then **ask the IT team for support** via the system Operation channel (Slack).
:::

---

<div className="qna-section">

## ❓ FAQ

> **Q. The Tracking No. was not created after registering the outbound.**
>
> A. Check whether the TMS shipping request was processed successfully.
>
> If no information was received, contact the IT team via the system Operation channel (Slack).

> **Q. The label print button is not enabled.**
>
> A. Labels can be printed only after the <u>Tracking No.</u> is received successfully.
>
> Check whether the information was received in the shipping label registration step.

</div>

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-21 | Initial version | Wooju(Landa) |
| 2026-10-03 | Split into separate RX Operation / Outbound Label Print documents | Wooju(Landa) |
