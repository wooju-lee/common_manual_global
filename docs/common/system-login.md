---
sidebar_label: 🔐 로그인
sidebar_position: 1
author: Wooju
created: "2026-04-21"
countries: [us]
---

# 📍 시스템 로그인

> IIC BO(Offline Unified Back Office) 시스템에 접속하기 위한 로그인 안내입니다.
>
> 경로 : <span className="path-badge">IIC BO</span>

---

## 1. 계정(ID) 생성 방법

계정이 필요한 경우, 아래 방법으로 요청할 수 있습니다.

| 요청 방법 | 설명 |
|---|---|
| **Slack** | 시스템 Operation 채널을 통해 직접 요청 |
| **스토어 매니저** | 개인 Slack 계정이 없는 경우, 스토어 매니저를 통해 요청 |

> **초기 비밀번호:** `Iic_bo_2025!`

- 본 시스템은 **계정별 처리 내역을 기록**하고 있으므로, 반드시 **본인 계정을 사용**하고 초기 비밀번호는 **즉시 변경**하여 사용해 주세요.

## 2. IIC BO 로그인

![IIC BO 로그인 화면](/img/common/system-login.png)

- **접속 URL:** [https://bo.systemiic.com/en/signin](https://bo.systemiic.com/en/signin)
- ID와 Password를 입력한 후 **Sign In** 버튼을 클릭하면 로그인됩니다.

<div className="blockquote-warning">

> **비밀번호 5회 오류 시 계정 비활성화**  
> 비밀번호를 **5회 연속 잘못 입력**하면 계정이 비활성화되어 로그인이 불가합니다.  
> 이 경우 **시스템 Operation 채널(Slack)** 또는 **스토어 매니저**를 통해 IT팀에 계정 상태 전환을 요청해야 합니다.

</div>

## 3. 비밀번호 재설정

![비밀번호 재설정 화면](/img/common/password-reset.png)

로그인 화면 하단의 **Password Reset** 링크를 통해 비밀번호를 재설정할 수 있습니다.

### 재설정 절차

> 1. **Password Reset** 클릭
> 2. ID 입력 → 계정에 등록된 이메일로 **인증 메일 발송**
> 3. 수신된 **인증코드(6자리)** 입력
> 4. 새 비밀번호 설정 완료

<div className="blockquote-warning">

> 인증코드의 유효시간은 **3분**이며, 시간 초과 시 재설정 프로세스를 다시 진행하여 인증코드를 재발급 받아야 합니다.

</div>

### 비밀번호 생성 규칙

| 규칙 | 내용 |
|---|---|
| **조합 조건** | 대문자, 소문자, 숫자, 특수문자 중 **2개 이상 조합** |
| **최소 길이** | 8자 이상 |
| **허용 특수문자** | `!` `@` `#` `$` `%` `-` `_` 등 |
| **변경 조건** | 이전 비밀번호와 동일하게 사용 불가 |
| | ID와 동일한 비밀번호 사용 불가 |

---

<div className="qna-section">

## ❓ FAQ

> **Q. 계정을 어떻게 발급받나요?**
>
> A. 시스템 Operation 채널(Slack)을 통해 요청하거나, 스토어 매니저를 통해 요청할 수 있습니다.

> **Q. 비밀번호를 잊어버렸어요.**
>
> A. 로그인 화면 하단의 <u>Password Reset</u> 버튼 선택 시 진행되는 프로세스를 통해 재설정할 수 있습니다.
>
> ID 입력 후 등록된 이메일로 인증코드가 발송됩니다.

> **Q. 비밀번호 5회 오류로 계정이 잠겼어요.**
>
> A. 시스템 Operation 채널(Slack) 또는 스토어 매니저를 통해 IT팀에 계정 상태 전환을 요청해 주세요.

</div>
