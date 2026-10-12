---
source_hash: "6bc8f0d8f8"
sidebar_label: Daily Report Register
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-06"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Daily Report Register

> This page explains how to register a store's daily operating results (visitor count, sales metrics, notes, customer feedback, etc.) as a daily report.
>
> Path : <span className="path-badge">IIC BO > Global Report > Daily Report Register</span>

## 👉 Daily report registration process

> **Enter basic information** → **Check daily metrics** → **Enter notes** → **Enter additional information (optional)** → **Save or Submit** → **Approve**

| Step | Action | Status | Handled by |
|:---:|---|---|---|
| **1** | Enter Record Date, BP, store, and visitor count | — | 👤 Store |
| **2** | Daily metrics (sales qty · amount · transactions, etc.) are aggregated automatically | — | ⚙️ Automatic |
| **3** | Enter notes and attach files if needed | — | 👤 Store |
| **4** | Enter product feedback · sales loss · celebrity · other issues (optional) | — | 👤 Store |
| **5** | **Save** (draft) or **Submit** | `Save` / `Save Completed` | 👤 Store |
| **6** | Approve the report | Approve Status `Y` | 👤 Approver account |

<div className="blockquote-warning">

> <mark>**Only one report can be registered per store per Record Date.**</mark><br/>
> Saving with a date that already has a report shows the `Report already exists for the date` error. In this case, find the existing report in Report Board and edit it.

</div>

## 1. Enter basic information

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/report/img/daily-report-register-01.png').default}
  alt="Report Basic Information — Record Date, Corporation, Store, Visitor Count"
  boxes={[
    {x: 5.0, y: 34.6, w: 37.0, h: 7.2},
    {x: 5.0, y: 47.8, w: 72.4, h: 8.0},
  ]}
/>

| Field | Description | Input | Notes |
|---|---|---|---|
| **Record Date** | Date the report is recorded for | A calendar opens when you click the field; select one date | • Required<br/>• Default: today<br/>• <mark>**Cannot be saved if a report already exists for the same date and store**</mark> (one report per date per store) |
| **Account** | Account registering the report | The logged-in account is shown automatically and cannot be changed | Automatic |
| **Corporation** | BP to register the report for | Select one from the dropdown (only BPs the account has permission for) | Required |
| **Store** | Store to register the report for | Select one from the dropdown (only stores of the selected BP) | • Required<br/>• <mark>**Select the BP first**</mark> to enable this field<br/>• Reset when the BP changes |
| **Visitor Count** | Number of visitors on the date | Enter a number (default `0`, thousand separators shown automatically) | • Required<br/>• Integer of 0 or greater |

## 2. Check daily metrics (automatic)

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/report/img/daily-report-register-01.png').default}
  alt="Daily Metrics (Auto) — calculated after entering Visitor Count"
  boxes={[
    {x: 54.8, y: 48.0, w: 22.6, h: 7.6},
    {x: 1.8, y: 67.6, w: 98.2, h: 29.0},
  ]}
/>

When you select the store and Record Date, <mark>**daily metrics are aggregated automatically based on sales stored in BO**</mark>. They cannot be edited manually.

| Field | Description |
|---|---|
| **Total Sales Items Qty** | Quantity of products sold on the date |
| **Total Sales Amount** | Sales amount on the date |
| **Number of Transactions** | Number of sales transactions on the date (sales · returns included) |
| **Sales Conversion Rate (%)** | Number of Transactions ÷ Visitor Count × 100 |
| **Average Transaction Value** | Total Sales Amount ÷ Number of Transactions |
| **Week-over-Week Growth (%)** | Compares this week's sales (Monday ~ Record Date) with last week's sales |

- The sales conversion rate is calculated only after the visitor count is entered.

## 3. Enter notes (required)

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/report/img/daily-report-register-03.png').default}
  alt="Daily Report Register full screen — notes, File Upload"
  boxes={[
    {x: 0.3, y: 31.5, w: 95.6, h: 21.5},
    {x: 0.3, y: 55.3, w: 95.6, h: 9.1},
  ]}
/>

- After writing the notes, save the report with <mark>**Save** (draft) or **Submit**</mark> at the bottom of the screen.
  - The report cannot be saved without text in the notes (including when only images are added).
- You can enter up to 5,000 characters.
- You can attach files with **File Upload**.
  - Up to 3 files, 10MB or less per file
  - Only `.xlsx` / `.png` / `.jpg` / `.jpeg` / `.pdf` are allowed

## 4. Enter additional information (optional)

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/report/img/daily-report-register-04.png').default}
  alt="Product Feedback / Sales Loss / Celebrity / Other Issues"
  boxes={[
    {x: 30.0, y: 30.5, w: 38.0, h: 3.5},
    {x: 78.4, y: 30.6, w: 15.2, h: 3.0},
    {x: 90.2, y: 46.2, w: 6.6, h: 2.4},
  ]}
/>

| Type | Input |
|---|---|
| **Product Feedback** | Entry path, nationality, gender, product / comparison product, purchase factor, purchase status, positive · negative feedback |
| **Sales Loss** | Lost product, comparison product, lost quantity, purchase status |
| **Celebrity** | Requested product, requested quantity, requester name, purchase status |
| **Other Issues** | Issue type (`Store` / `Brand` / `Customer VOC` / `ETC`), content (up to 300 characters) |

- Enter at least 2 characters to search for a product, then <mark>**select it from the list**</mark>. If you only type it in, an error occurs when saving.
- If you set purchase status to `Not Purchased`, you must select a non-purchase reason.
- Click **+ Add** to add a row.

## 5. Save / Submit

<AnnotatedImage
  maxWidth="720px"
  src={require('@site/docs/report/img/daily-report-register-05.png').default}
  alt="Submit confirmation popup — click SAVE to save"
  boxes={[
    {x: 14.8, y: 29.4, w: 63.0, h: 21.6},
    {x: 73.8, y: 57.6, w: 16.0, h: 10.0},
  ]}
/>

| Button | Result | Editing afterward |
|---|---|---|
| **Save** | Saved as draft (`Save` status) | Accounts with register permission can edit all fields |
| **Submit** | Saved after the confirmation popup (`Save Completed` status) | Only approver accounts can edit until approval |

- After saving, you are taken to Report Board. 👉 **[Go to Report Board](/docs/report/report-board-au)**
- A `Save Completed` report cannot be reverted to draft (`Save`).
- Approved reports cannot be edited.

<div className="qna-section">

## ❓ FAQ

> **Q. I get a `Content is required` error when saving.**
>
> A. Enter text in the <u>notes</u>. The same error appears if you added only images.

> **Q. I get a `Report already exists for the date` error.**
>
> A. A report already exists for the same store · same Record Date. Find the existing report in Report Board and edit it.

> **Q. All daily metrics show 0.**
>
> A. There are no sales stored in BO for the date, or a different <u>Record Date</u> was selected. Check the Record Date and store.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-06 | AU initial version (text) | Wooju(Landa) |
| 2026-10-12 | Added screen images | Wooju(Landa) |
