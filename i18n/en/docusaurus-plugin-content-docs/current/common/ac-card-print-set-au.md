---
source_hash: "b12dfdf292"
sidebar_label: AC Card Printer Setup
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 AC Card Printer Setup

> This guide explains how to install the printer driver for printing AC Cards.
>
> All AU stores use the same printer model, **Smart-51S**.

## 1. Install the Printer Driver

| Step | Description |
|:---:|---|
| **a** | Connect the printer to the PC and **check that the printer is powered on**. |
| **b** | Download and install the driver that matches the printer model and PC OS. |
| | ⅰ. `DDInstall` |
| | ⅱ. Local USB Port |
| **c** | Driver download: https://www.idp-corp.com/index_kor/bbs/board.php?bo_table=s4_1 |
| **d** | **Restart the PC** after installation. |

## 2. Install QZ Tray

> **Step a.** Go to https://qz.io/download/ and click **Direct Download**.

![QZ Tray download page](@site/docs/common/img/1.png)

---

> **Step b.** When the setup wizard opens, click **Next >**.

![QZ Tray Setup - Welcome](@site/docs/common/img/2.png)

---

> **Step c.** Check the install location, then click **Install**.

![QZ Tray Setup - Install Location](@site/docs/common/img/3.png)

---

> **Step d.** When installation is complete, click **Close**.

![QZ Tray Setup - Complete](@site/docs/common/img/4.png)

## 3. Set Up the QZ Tray .pem File

This step registers the `qz-certificate.pem` file in the QZ Tray Site Manager.

> 📎 <a href="/qz-certificate.pem" download>Download qz-certificate.pem</a>

---

> **Step a.** Check that the **QZ Tray icon** is running in the bottom-right corner of the taskbar.

![Check the QZ Tray icon in the system tray](@site/docs/common/img/5.png)

---

> **Step b.** Right-click the QZ Tray icon and select **Advanced → Site Manager...**.

![Advanced > Site Manager menu](@site/docs/common/img/6-1.png)

---

> **Step c.** In the Site Manager window, click the **`+` icon**.

![Site Manager - click the + icon](@site/docs/common/img/7.png)

---

> **Step d.** Click **Browse...**.

![Click the Browse button](@site/docs/common/img/8.png)

---

> **Step e.** Select the `qz-certificate.pem` file in your Downloads folder, then click **Open**.

![Select the pem file and click Open](@site/docs/common/img/9.png)

---

> **Step f.** Check that the `iic (iic-bo)` certificate is registered on the **Allowed** tab, then click **Close**.

![Confirm certificate registration](@site/docs/common/img/10.png)

---

> **Step g.** **Restart the PC** to apply the settings.

---

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version | Wooju(Landa) |
