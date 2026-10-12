---
source_hash: "0148db1772"
sidebar_label: Report Board
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-06"
countries: [au]
---

# 📍 Report Board

> This page explains how to view, edit, and approve registered daily reports, and how to download them to Excel.
>
> Path : <span className="path-badge">IIC BO > Global Report > Report Board</span>

## 👉 When to use

- To **view or edit** a registered daily report
- When an approver account **approves** a report
- To **download** reports by store **to Excel**

## 1. List search

<div className="img-placeholder">📷 [Image] Report Board search filters</div>

| Search filter | Description | Notes |
|---|---|---|
| **BP** | Select a BP | |
| **Store** | Select a store | <mark>**Select the BP first**</mark> to enable this field |
| **Approve Status** | Approval status (`All` / `Y` / `N`) | |
| **Search Period** | Period based on `Record Date` or `Approval Date` | • Required<br/>• Default: last 30 days |

- Check **View Draft Only** above the list to view only reports in draft (`Save`) status.

## 2. List columns

<div className="img-placeholder">📷 [Image] Report Board list</div>

| Column | Description |
|---|---|
| **Record Date** | Report Record Date |
| **Report Status** | `Save` (draft) / `Save Completed` (submitted) |
| **BP Information** | BP code / name (click to open details) |
| **Store Information** | Store code / name (click to open details) |
| **Created By** | Account that registered the report |
| **Image Attached** | `Y` if there is an attached file or an image in the notes |
| **Approve Status** | `Y` / `N` |
| **Approval Date** | Approval date and time (store local time) |
| **Approved By** | Account that approved the report |
| **Visitor Count** | Visitor count entered |
| **Total Sales Items Qty** | Quantity of products sold on the date |
| **Number of Transactions** | Number of sales transactions on the date |
| **Sales Conversion Rate (%)** | Number of Transactions ÷ Visitor Count × 100 (`-` if 0) |

- <mark>**Click the BP or Store information**</mark> to open the report details screen. Clicking the row does not open it.

## 3. Edit a report

<div className="img-placeholder">📷 [Image] Report details screen</div>

Review the content on the details screen. If you have edit permission, you can edit it directly.

| Report status | Accounts that can edit |
|---|---|
| `Save` (draft) | Accounts with register permission — all fields, including Record Date · store |
| `Save Completed` (before approval) | Approver accounts |
| Approved | Cannot be edited |

- A `Save Completed` report cannot be reverted to draft (`Save`).
- Attached files can be downloaded or deleted (✕) on the details screen. Deletion is applied when you save.

## 4. Approve a report

<div className="img-placeholder">📷 [Image] Approval button after selecting checkboxes in the list</div>

The **approver account** checks reports with Approve Status `N` in the list, then clicks **Approval**. You can approve multiple reports at once.

<div className="blockquote-warning">

> <mark>**An approved report cannot be unapproved · rejected · deleted, and cannot be edited afterward.**</mark><br/>
> Review the content before approving.

</div>

## 5. Excel download

Click **Excel Export**, select the information to download, then click **Download**.

| Information | Content |
|---|---|
| **List** | List information (default) |
| **Report Basic Information** | Basic information + daily metrics + notes |
| **Product Feedback** | Product feedback |
| **Sales Loss** | Sales loss |
| **Celebrity** | Celebrity requests |
| **Other Issues** | Other issues |

- The download uses the last searched filters, up to 10,000 records.

<div className="qna-section">

## ❓ FAQ

> **Q. I want to delete a report.**
>
> A. There is no report delete function. If the report is not yet approved, edit its content on the details screen.

> **Q. I can't see the approval checkbox.**
>
> A. Your account does not have <u>approval permission</u>, or the report is already approved (`Y`).

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-06 | AU initial version (text) | Wooju(Landa) |
