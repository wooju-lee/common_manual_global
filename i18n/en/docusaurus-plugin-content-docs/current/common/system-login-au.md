---
source_hash: "396d120e88"
sidebar_label: System Login
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 System Login

> This guide explains how to log in to the IIC BO (Offline Unified Back Office) system.
>
> Path : <span className="path-badge">IIC BO</span>

## 1. Create an Account (ID)

If you need an account, request one using one of the methods below.

| Request method | Description |
|---|---|
| **Slack** | Request directly through the System Operation channel |
| **Store manager** | If you do not have a personal Slack account, request through your store manager |

> **Initial password:** `Iic_bo_2025!`

- The system **records activity per account**, so always **use your own account** and **change the initial password immediately**.

## 2. Log In to IIC BO

![IIC BO login screen](/img/common/system-login.png)

- **URL:** [https://bo.systemiic.com/en/signin](https://bo.systemiic.com/en/signin)
- Enter your ID and Password, then click **Sign In**.

<div className="blockquote-warning">

> **Account deactivated after 5 failed password attempts**  
> If you enter the wrong password **5 times in a row**, your account is deactivated and you cannot log in.  
> In this case, ask the IT team to reactivate the account through the **System Operation channel (Slack)** or your **store manager**.

</div>

## 3. Reset Your Password

![Password reset screen](/img/common/password-reset.png)

Use the **Password Reset** link at the bottom of the login screen to reset your password.

### Reset process

> 1. Click **Password Reset**.
> 2. Enter your ID → a **verification email is sent** to the email address registered to the account.
> 3. Enter the **6-digit verification code** you received.
> 4. Set a new password.

<div className="blockquote-warning">

> The verification code is valid for **3 minutes**. If it expires, start the reset process again to get a new code.

</div>

### Password rules

| Rule | Description |
|---|---|
| **Combination** | Use **at least 2** of: uppercase letters, lowercase letters, numbers, special characters |
| **Minimum length** | 8 characters or more |
| **Allowed special characters** | `!` `@` `#` `$` `%` `-` `_`, etc. |
| **Change conditions** | Cannot be the same as the previous password |
| | Cannot be the same as the ID |

<div className="qna-section">

## ❓ FAQ

> **Q. How do I get an account?**
>
> A. Request one through the System Operation channel (Slack) or your store manager.

> **Q. I forgot my password.**
>
> A. Click the <u>Password Reset</u> button at the bottom of the login screen and follow the reset process.
>
> After you enter your ID, a verification code is sent to the registered email address.

> **Q. My account is locked after 5 failed password attempts.**
>
> A. Ask the IT team to reactivate the account through the System Operation channel (Slack) or your store manager.

</div>

## 📋 Revision history

| Date | Changes | Editor |
|---|---|---|
| 2026-10-03 | Initial AU version | Wooju(Landa) |
