---
source_hash: "33baedb393"
sidebar_label: Outbound Bulk Upload
sidebar_position: 5
author: Wooju(Landa)
created: "2026-10-04"
countries: [au]
---

# 📍 Outbound Bulk Upload

> This page explains how to register C2C · S2S outbounds at once with the Excel template when you have many products to ship out.
>
> Path : <span className="path-badge">IIC BO > Inventory > Outbound List > Outbound Registration / Request > Bulk Upload (BULK)</span>

## 👉 Bulk upload process

> **Download template** → **Fill in template** → **Upload file** → **Register**

## 1. Download the template

<div className="img-placeholder">📷 [Image] Outbound Registration / Request — Bulk Upload (BULK) tab</div>

Click **Outbound Registration / Request** → on the **Bulk Upload (BULK)** tab, click **Download Upload Template**.<br/>
Always use the downloaded template (`Outbound_upload_form_V3.xlsx`).

## 2. Fill in the template

<div className="img-placeholder">📷 [Image] Outbound upload template (Excel)</div>

| Column | Required | How to enter | Options / Notes |
|---|:---:|---|---|
| **No.** | Optional | Sequence number | Numbering is recommended to make error rows easier to find |
| **Outbound Type** | **Required** | Select from the dropdown | • `CORP` : C2C corporate outbound registration<br/>• `NORM` : general outbound registration (S2S store transfer outbound) |
| **Outbound Order Type** | — | Select from the dropdown | 🚫 <mark>**Not used; leave blank**</mark> |
| **Outbound Store Code / Location Code** | **Required** | Master store / location code | — |
| **Inbound Store Info / Location Info** | Conditional | Master store / location code | • `NORM` : Required<br/>• `CORP` : leave blank (automatically set to Korea HQ) |
| **Outbound Product Code** | **Required** | Master **SAP product code** | — |
| **Outbound Qty** | **Required** | — | Enter **based on available stock**; cannot be registered if it exceeds available stock |
| **Requested Outbound Date** | Optional | Enter in `yyyy-mm-dd` format | Leave blank<br/>(the system treats it as 'today') |
| **Outbound Request Status** | Optional | Select from the dropdown | • `Y` : request (shipped out after approval)<br/>• `N` : register directly (outbound completed immediately)<br/>&emsp;• If blank, treated as `N` (register directly)<br/>&emsp;• `CORP` cannot use `Y` (request) |

<div className="blockquote-warning">

> <mark>**Enter the outbound · inbound store and location codes accurately.**</mark><br/>
> An incorrect code may ship goods to the wrong store or cause a registration error.

</div>

<div className="blockquote-gray">

> Rows with **the same** outbound type · outbound store/location · inbound store/location · requested outbound date · request status are **grouped into one outbound record**.<br/>
> The same product code cannot be entered twice within one outbound record.

</div>

| Upload limit | Rule |
|---|---|
| File | Excel file (.xlsx / .xls), up to 5MB |
| Rows | Up to 3,000 rows per upload |
| Outbound records created | Up to 50 per upload<br/>Counted by **outbound records grouped by the same conditions**, not by rows |
| Products per outbound record | Up to 300 SKUs<br/>The number of products that can be included in one grouped outbound record |

<div className="blockquote-gray">

> **Example** — Uploading 200 products from AU1002 to AU1004 with the same date → **1** outbound record (200 products)<br/>
> Uploading from AU1002 to 60 different stores → **60** outbound records, which exceeds the 50-record limit, so the upload fails<br/>
> If you exceed a limit, the entire file is not registered. Split the file and upload it in parts.

</div>

## 3. Upload the file and register

<div className="img-placeholder">📷 [Image] Register after file upload / error list</div>

Drag and drop or select the completed file, then click **Register**.<br/>
Once registered, C2C · S2S outbounds are <mark>**completed immediately**</mark>, and records uploaded as requests wait for approval in the **Outbound Request List**.

- If the template format is different, the message `The upload format is invalid.` is shown.
- If any input values have errors, an error list is shown. Fix the rows and upload again.

| Common error | What to check |
|---|---|
| `Store(...) is not found.` / `Location(...) is not found.` | Whether the store · location codes are correct |
| `The outbound store and inbound store cannot be the same.` | Whether the outbound store and inbound store are different |
| `To store code is required for NORM type` | Whether the inbound store · location is entered in `NORM` rows |
| `CORP type outbound requests are not allowed` | Whether any `CORP` rows were uploaded as requests |
| `Insufficient available stock` | Whether the outbound location has enough available stock |

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-04 | AU menu created | Wooju(Landa) |
