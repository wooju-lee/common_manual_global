---
source_hash: "a50c367c95"
sidebar_label: RX Prescription Collection
sidebar_position: 2
author: Wooju(Landa)
created: "2026-04-27"
countries: [us]
---

# 📍 RX Prescription Collection

> This guide explains how to collect and save the information required for an RX order, and how to register the outbound from the store to the Lab.
>
> Path : <span className="path-badge">POS > RX Operation</span>

## 1. Save Required Information

To proceed with an RX order, you must collect and save the following 4 required items.

### 1-1. Membership information

Required to map the customer's membership to the order and to load the prescription registered on the .com My Page.

**How to search**

| Condition | Description |
|---|---|
| **Country** (required) | Select the customer's country. |
| **Email or phone number** | Search by email (ID@) or mobile number (8 digits or more). |
| **Membership QR scan** | Scan the membership QR from the .com My Page for an exact match. |

:::info Personal information masking
- **Search by email / phone number** : fields other than the search condition are masked. (e.g., search by email → phone number is masked)
- **Membership QR scan** : all information is shown without masking. **We recommend using this as much as possible in operation.**
- For non-members, set **Non-Member** to manage the order as a non-member order.
:::

**Load prescription information**

Once the membership is set, the list of prescriptions pre-registered on the .com My Page is loaded automatically.

| Item | Description |
|---|---|
| Select prescription | **Select 1** from the list (up to 3 images per prescription) |
| Expiry check | Prescriptions whose expiry date (EXP Date) is today or in the past are not shown |
| Auto-fill | The selected prescription is filled in Prescription Information automatically and **cannot be edited** |

> Prescriptions registered before the 2026.05 launch may not have an expiry date.

---

### 1-2. Prescription

If you collect the prescription directly instead of through the membership, enter the fields below.

| Field | Description | Input range | Notes |
|---|---|---|---|
| **Sphere (SPH)** * | Base power for myopia / hyperopia correction | -10.00 ~ +5.00 | |
| **Cylinder (CYL)** * | Astigmatism power | -6.00 ~ +3.00 | 0.25 steps, 2 decimal places |
| **Axis** * | Astigmatism correction angle | 0 ~ 180 | Integers only |
| **PD** * | Distance between the centers of the pupils | 1 ~ 100 | Up to 2 decimal places |
| **OC** | Pupil center position | 0 ~ 40 | Integers only |

> Fields marked `*` are required.

---

### 1-3. Basic customer information

Enter the name, email, phone number, shipping type, and address.

- If you used the membership prescription, the customer information is filled in as well and **can be edited**.

:::caution Caution
Depending on how the membership was searched, masked information may be filled in, in which case **saving may fail.** Correct the masked fields manually before saving.
:::

---

### 1-4. Consent to use of personal and medical information

You must obtain the customer's consent to the use of prescription and personal information.

| Step | Description |
|:---:|---|
| **a** | Explain the policies to the customer, such as HIPAA and consent to RX order use. |
| **b** | Collect the customer's <strong>signature</strong>. |

---

## 2. Status Change After Saving

Once all required information is saved, the order status updates from `Unready` → `Request`.

- In `Request` status, the order appears in the review list in <span className="path-badge">BO > RX Prescription Review</span>.
- **Stores with an optician** : can `Confirm` the order directly in that menu.
- **Stores without an optician** : the Lab reviews and processes the order.

---

## 3. Register Store → Lab Outbound and Print Labels

Register an outbound and print the label to send `Confirm`ed RX orders to the Lab.

| Step | Description |
|:---:|---|
| **a** | Select orders in `Confirm` status using the checkboxes, then click **Register Outbound**. |
| | ⭐️ Only **confirmed orders** that are judged ready for work can be shipped. |
| **b** | Once the outbound is registered, go to the <span className="path-badge">POS > Outbound Label Print</span> menu. |
| | Check the orders included in the outbound detail, and print once the label print button is enabled. |
| **c** | After shipping, check the outbound list and status in <span className="path-badge">Inventory > Outbound Order List</span>. |
| **d** | When delivery is complete, an inbound list is created automatically and the Lab processes the inbound. |

:::tip Operation note
The store groups confirmed orders into one outbound, prints the label, and completes outbound preparation.
If a carrier (FedEx) pickup is needed, **request it separately by phone**. (Provide the date/time and location.)
:::

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-04-27 | Initial version | Wooju(Landa) |
