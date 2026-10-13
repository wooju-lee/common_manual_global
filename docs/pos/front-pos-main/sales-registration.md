---
sidebar_label: Sales Registration & Inquiry (매출(판매) 등록 및 조회)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Sales Registration & Inquiry (매출(판매) 등록 및 조회)

> 외부 POS(유통사 POS 또는 Bluebell POS)에서 결제를 완료한 뒤, IIC BO POS에서 **매출(판매)을 생성**하고 AC 카드를 출력하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > FRONT POS (MAIN)</span>

## 👉 매출(판매) 생성 순서

> **영수증 번호 입력** → **제품 담기** → **캐셔 / 셀러 확인** → **멤버십 설정** → **고객 객층 정보 선택** → **Confirm Sales** → **AC 카드 출력**

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/sales-registration-01.png').default}
  alt="Front POS Main 기본 화면 (SALES 모드)"
  boxes={[
    {n: 1, x: 0.8, y: 9.9, w: 29.1, h: 3.6},
    {n: 2, x: 35.1, y: 9.9, w: 38.0, h: 3.6},
    {n: 3, x: 75.6, y: 6.6, w: 23.6, h: 5.0},
    {n: 4, x: 75.6, y: 14.6, w: 23.6, h: 9.5},
    {n: 5, x: 75.6, y: 27.4, w: 23.6, h: 19.3},
    {n: 6, x: 75.7, y: 49.6, w: 23.4, h: 3.4},
  ]}
/>

제품, 멤버십, 고객 객층 정보가 모두 설정되어야 매출을 생성할 수 있습니다.

## 1. 영수증 번호 입력

`Invoice No.` 왼쪽에서 <mark>**Register**</mark>를 선택한 뒤, 외부 POS에서 결제 후 발행된 **영수증 번호**를 입력란에 스캔하거나 입력합니다.<br/>
BO 매출은 이 번호와 **동일한 번호로 생성**됩니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/sales-registration-04.png').default}
  alt="Invoice No. — Register 모드에서 영수증 번호 입력"
  boxes={[
    {x: 5.5, y: 22.5, w: 34.4, h: 14.0},
  ]}
/>

| 모드 | 용도 |
|---|---|
| **Register** | 신규 매출 등록 — 입력한 번호로 매출이 생성됩니다 |
| **Lookup** | 기존 매출 조회 — 반품, AC 카드 재출력 시 사용합니다 |

- 모드를 바꾸면 입력한 번호가 지워집니다.
- 기본 모드는 **GM_Melbourne_MALL_Chadstone**만 `Lookup`이고, 나머지 매장은 `Register`입니다.
  - Chadstone 매장은 매출 등록 전 <mark>**Register로 변경**</mark>해 주세요.

**입력 규칙**

- <mark>**영문 · 숫자 · 하이픈(`-`)만 입력**</mark>할 수 있습니다.
  - 공백이나 `_`, `/` 등 특수문자가 들어간 번호는 이후 영수증 번호로 조회 · 반품할 수 없습니다.
- 최대 25자까지 입력할 수 있습니다.
- 같은 스토어에서 이미 사용한 번호는 입력할 수 없습니다.

<div className="blockquote-warning">

> **신규 매출은 반드시 Register 모드에서 입력하세요.** Lookup 모드에서 Enter를 누르면 매출 조회가 실행되면서 담아둔 제품 목록이 초기화됩니다.
>
> 입력란을 비워두면 BO가 번호를 자동 생성하므로, <mark>**외부 POS와 매출을 맞추기 위해 반드시 영수증 번호를 입력해 주세요.**</mark>

</div>

## 2. 제품 담기

**Product Barcode** 입력란에 커서를 두고 제품 정보(코드, 제품명, 바코드)를 입력하거나, 실물 바코드를 스캔해 제품을 담습니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/sales-registration-05.png').default}
  alt="Product Barcode 검색 — 제품 코드 / 제품명 / 바코드로 검색 후 선택"
  boxes={[
    {x: 47.2, y: 9.1, w: 51.4, h: 5.0},
    {x: 1.0, y: 23.5, w: 45.8, h: 10.7},
  ]}
/>

- 젠틀몬스터 제품은 **패키지와 매핑**되어 있어, 제품을 담으면 패키지가 함께 목록에 표시됩니다.
- 목록에서 **판매 금액**(Customer Price, Discount Price, Total)과 **Stock (SALES)**(매장 Sales 로케이션의 가용 재고)를 확인할 수 있습니다.
- 수량은 `-` / `+` 버튼으로 조정하고, 잘못 담은 제품은 행 우측 **X** 버튼으로 삭제합니다. 처음부터 다시 하려면 **All Clear**를 누릅니다.

## 3. 캐셔 / 셀러 확인

<AnnotatedImage
  maxWidth="420px"
  src={require('./img/sales-registration-06.png').default}
  alt="Cashier / Seller 선택 드롭다운"
  boxes={[
    {x: 5.3, y: 30.6, w: 42.0, h: 18.8},
    {x: 51.0, y: 30.6, w: 43.8, h: 43.1},
  ]}
/>

| 항목 | 설명 |
|---|---|
| **Cashier** (필수) | POS에 로그인한 계정이 기본으로 설정되며, 변경할 수 있습니다 |
| **Seller** (선택) | 계산한 직원과 안내한 직원이 다를 경우, 안내한 직원을 Seller로 설정합니다 |

## 4. 멤버십 설정 (필수)

매출을 생성하려면 **멤버십 설정이 필수**입니다. 아래 방법 중 하나로 설정합니다.

<AnnotatedImage
  maxWidth="640px"
  src={require('./img/sales-registration-02.png').default}
  alt="Customer Member Search 영역"
  boxes={[
    {x: 6.6, y: 46.3, w: 88.9, h: 17.6},
    {x: 6.6, y: 73.3, w: 69.0, h: 17.6},
    {x: 79.0, y: 73.3, w: 16.6, h: 17.6},
  ]}
/>

| 방법 | 설명 |
|---|---|
| **이메일 / 전화번호 검색** | 국가는 POS 스토어 기준으로 기본 설정됩니다.<br/>`Search by Email OR Phone`에 이메일(`ID@` 형식) 또는 전화번호(최소 8자리)를 입력해 검색합니다 |
| **멤버십 QR 스캔** | 고객이 자사몰 회원가입 시 제공되는 멤버십 QR을 보여주면, `Scan Customer QR`에 스캔해 바로 조회합니다 |
| **Non-Member** | 회원가입을 하지 않는 고객은 **Non-Member**를 선택합니다. 다시 누르면 해제됩니다 |

## 5. 고객 객층 정보 선택 (필수)

Customer Member Search 아래 **CUSTOMER INFO** 항목을 **모두 선택**해야 합니다.

<AnnotatedImage
  maxWidth="420px"
  src={require('./img/sales-registration-07.png').default}
  alt="CUSTOMER INFO — 고객 객층 정보 입력 영역"
  boxes={[
    {x: 3.9, y: 56.1, w: 90.2, h: 6.1},
    {x: 3.9, y: 67.4, w: 90.2, h: 6.2},
    {x: 3.9, y: 78.9, w: 90.2, h: 5.9},
    {x: 3.9, y: 90.0, w: 90.2, h: 5.9},
  ]}
/>

| 항목 | 선택값 |
|---|---|
| **Country** | 고객 국가 |
| **Continent** | 대륙. Country를 선택하면 자동으로 설정되며, 수정할 수 있습니다 |
| **Customer Type** | `LOCAL` / `FOREIGN` |
| **Gender** | `N/A` / `MALE` / `FEMALE` |
| **Usage Type** | `N/A` / `Normal` / `Gift` |

## 6. Confirm Sales (매출 생성)

필수값(제품, 멤버십, 고객 객층 정보)을 모두 설정하면 **Confirm Sales** 버튼이 활성화됩니다. 버튼을 클릭하면 매출이 생성됩니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/sales-registration-03.png').default}
  alt="필수 정보(제품 / 멤버십 / 고객 객층 정보) 설정 후 Confirm Sales 활성화 화면"
  boxes={[
    {x: 0.9, y: 17.6, w: 72.0, h: 6.1},
    {x: 75.7, y: 17.2, w: 23.0, h: 6.3},
    {x: 75.7, y: 26.7, w: 23.0, h: 18.3},
    {x: 75.7, y: 48.4, w: 23.0, h: 3.1},
  ]}
/>

<div className="blockquote-gray">

> 매출 생성 후 화면이 초기화되면서 **Cashier도 초기화**됩니다.<br/>
> 같은 캐셔를 계속 유지하려면, Confirm Sales 바로 아래 **Save cashier information**을 체크한 뒤 Confirm Sales를 클릭하세요.

</div>

## 7. AC 카드 출력

매출이 생성되면 **AC 카드가 출력**되면서 매출(판매) 등록이 완료됩니다.

<div className="blockquote-warning">

> AC 카드를 출력하려면 PC에 **QZ Tray**가 실행 중이고 AC 카드 프린터(Smart-51S)가 연결되어 있어야 합니다. 👉 **[AC Card Printer Setup 바로가기](/docs/common/ac-card-print-set-au)**
>
> 프린터 연결 문제로 출력되지 않아도 완료 메시지는 표시되므로, AC 카드가 실제로 출력되었는지 반드시 확인해 주세요.

</div>

## 8. 매출 조회 및 AC 카드 재출력

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/return-registration-01.png').default}
  alt="Lookup 모드에서 Invoice No.로 조회한 구매 제품 이력 — AC Card RE Print"
  boxes={[
    {x: 4.3, y: 10.0, w: 25.4, h: 2.9},
    {x: 0.9, y: 18.3, w: 72.8, h: 6.3},
    {x: 87.5, y: 61.4, w: 11.3, h: 2.7},
  ]}
/>

`Invoice No.` 왼쪽에서 **Lookup**을 선택하고, 생성된 매출의 **Invoice No.**(외부 POS 영수증 번호)를 입력한 뒤 Enter를 누르면 구매한 제품 이력이 불러와집니다.

- 조회 중에는 Confirm Sales와 멤버십 · 고객 객층 정보 입력이 비활성화됩니다.

- AC 카드를 다시 출력해야 하는 경우 **AC Card RE Print**를 클릭합니다.

## 📌 참고 — 인보이스 번호 생성

- 판매 인보이스 번호는 `Invoice No.`에 입력한 번호(**외부 POS 영수증 번호**)로 생성됩니다.
- 입력하지 않으면 `SL + 스토어 코드 + 일시(yyMMdd HHmmss) + 랜덤 5자리` 형식으로 자동 생성됩니다.
  - e.g. `SLAU1002260928113256C2W36`
- 같은 스토어에 이미 있는 번호를 입력하면 `InvoiceNo already exists` 오류가 표시됩니다.

<div className="qna-section">

## ❓ FAQ

> **Q. Confirm Sales 버튼이 활성화되지 않아요.**
>
> A. 제품이 담겼는지, <u>멤버십(또는 Non-Member)</u>이 설정되었는지, <u>고객 객층 정보 5개 항목</u>이 모두 선택되었는지 확인해 주세요.

> **Q. 다른 매장에서 구매한 제품도 처리할 수 있나요?**
>
> A. 매장마다 운영 환경(POS)이 달라 <u>매장 간 교환·반품은 지원하지 않습니다.</u> 구매 매장에서 처리해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-03 | 화면 기준 매출(판매) 생성 순서로 재작성 | Wooju(Landa) |
| 2026-10-13 | POS 메인 UI 변경 — 화면 이미지 교체, Invoice No. Lookup / Register 모드 반영 | Wooju(Landa) |
