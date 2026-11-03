---
source_hash: "a50c367c95"
sidebar_label: RX Prescription Collection
sidebar_position: 2
author: Wooju(Landa)
created: "2026-04-27"
countries: [us]
---

# 📍 RX Prescription Collection

> This guide explains how to collect and save the information required for an RX order, and how to register an outbound from the store to the Lab.
>
> Path : <span className="path-badge">POS > RX Operation</span>

## 1. Save Required Information

To proceed with an RX order, you must collect and save the 4 required items below.

### 1-1. Membership Information

Required to map the customer's membership to the order and to load the prescription information registered on the .com My Page.

**How to search**

| Condition | Description |
|---|---|
| **Country** (required) | Select the customer's country |
| **Email or phone number** | Search by email (ID@) or mobile number (8 or more digits) |
| **Membership QR scan** | Scan the membership QR from the .com My Page for an exact search |

:::info Personal information masking
- **When searching by email / phone number** : Fields that are not the search condition are masked. (e.g. search by email → phone number is masked)
- **When scanning the membership QR** : All information is shown without masking. **Use this method as much as possible in operation.**
- For non-members, set **Non-Member** to manage the order as a non-member order.
:::

**Load prescription information**

Once membership is set, the list of prescriptions pre-registered on the .com My Page is loaded automatically.

| Item | Description |
|---|---|
| Select a prescription | **Select 1** from the list (up to 3 images per prescription) |
| Expiry check | Prescriptions with an expiry date (EXP Date) of today or earlier are not shown |
| Auto-fill | The selected prescription is filled in Prescription Information automatically and **cannot be edited** |

> Prescriptions registered before the 2026.05 launch may not have an expiry date.

---

### 1-2. Prescription

If you collect the information directly instead of through membership, enter the items below.

| Item | Description | Input range | Notes |
|---|---|---|---|
| **Sphere (SPH)** * | Base power to correct nearsightedness / farsightedness | -10.00 ~ +5.00 | |
| **Cylinder (CYL)** * | Astigmatism power | -6.00 ~ +3.00 | 0.25 steps, 2 decimal places |
| **Axis** * | Astigmatism correction angle | 0 ~ 180 | Integers only |
| **PD** * | Distance between the centers of the two pupils | 1 ~ 100 | Up to 2 decimal places |
| **OC** | Pupil center position | 0 ~ 40 | Integers only |

> Items marked `*` are required.

---

### 1-3. Basic Customer Information

Enter the name, email, phone number, shipping type, and address.

- If you used the prescription from membership, the customer information is filled in as well and **can be edited**.

:::caution Caution
Depending on how the membership was searched, masked information may be filled in, and in that case **saving may fail.** Edit the masked fields directly before saving.
:::

---

### 1-4. Consent to Use of Personal Information and Collection of Medical Information

You must obtain the customer's consent to the use of their prescription and personal information.

| Step | Description |
|:---:|---|
| **a** | Explain the policies, such as HIPAA and consent to use for RX orders, to the customer |
| **b** | Collect the customer's <strong>signature</strong> |

---

## 2. Status Change After Saving

Once all required information is saved, the order status is updated from `Unready` → `Request`.

- In `Request` status, the order appears in the review list in <span className="path-badge">BO > RX Prescription Review</span>.
- **Stores with an optician** : Can process `Confirm` directly in that menu.
- **Stores without an optician** : The Lab reviews and processes the order.

---

## 3. Register Store → Lab Outbound and Print Labels

Register an outbound and print the label to send `Confirm`ed RX orders to the Lab.

| Step | Description |
|:---:|---|
| **a** | Select orders in `Confirm` status with the checkbox, then click **Register Outbound** |
| | ⭐️ **Only confirmed orders** that have been judged workable are eligible for outbound |
| **b** | Once the outbound is registered, go to the <span className="path-badge">POS > Outbound Label Print</span> menu |
| | Check the list of included orders in the outbound detail, and print the label once the print button is enabled |
| **c** | After the outbound is completed, you can check the outbound list and status in <span className="path-badge">Inventory > Outbound Order List</span> |
| **d** | When delivery is completed, an inbound list is created automatically and the Lab processes the inbound |

:::tip Operational note
In the store, confirmed orders are grouped into one outbound, the label is printed, and outbound preparation is completed.
If a carrier (Fedex) pickup is needed, **request it separately by phone**. (Provide the date/time and location)
:::

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
