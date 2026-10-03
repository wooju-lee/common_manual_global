---
sidebar_label: Return Registration & Inquiry (매출(반품) 등록 및 조회)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# Return Registration & Inquiry (매출(반품) 등록 및 조회)

> 외부 POS(유통사 POS 또는 Bluebell POS)에서 환불을 완료한 뒤, IIC BO POS에서 **반품(매출 반품)을 등록**하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > FRONT POS (MAIN)</span>

## 👉 AU 오프라인 반품 흐름

| Step | 처리 내용 | 처리 위치 |
|:---:|---|---|
| **1** | 고객 결제 환불 완료 | 외부 POS (유통사 POS / Bluebell POS) |
| **2** | 원 매출 조회 후 매출(반품) 등록 **또는** 신규 반품 생성 | IIC BO POS |
| **3** | 매출(반품) 생성 + 매장 **Sales** 로케이션 재고 반영 | IIC BO (자동) |

<div className="blockquote-warning">

> **외부 POS 환불을 먼저 완료한 뒤** BO에서 반품을 등록해 주세요.<br/>
> 매장마다 운영 환경(POS)이 달라 **매장 간 교환·반품은 지원하지 않습니다.**

</div>

## 반품 방법 선택

| 상황 | 반품 방법 | 비고 |
|---|---|---|
| BO에 원 매출이 있음<br/>(영수증 ID로 조회됨) | **[1. 원 매출 조회 후 반품 (Confirm Refund)](#refund-with-origin)** | — |
| BO에 원 매출이 없음<br/>(조회되지 않음) | **[2. 원 매출 없이 반품 (Manual Refund)](#refund-without-origin)** | 예외적인 경우에만 사용<br/>**원인 확인 후 처리** |

## 1. 원 매출 조회 후 반품 (Confirm Refund) {#refund-with-origin}

### Step 1. 원 매출 조회

<div className="img-placeholder">📷 [Image] Invoice No.로 원 매출 조회 — 조회 모드 화면</div>

`Invoice No.` 입력란에 원 매출의 **영수증 ID**를 스캔하거나 입력한 뒤 Enter를 누릅니다.<br/>
원 매출 내역이 표시되며, `Qty`에는 반품 가능한 수량이 표시됩니다.

### Step 2. 반품할 제품 선택

<div className="img-placeholder">📷 [Image] ▼ 버튼으로 반품 목록에 제품 이동</div>

- 반품할 제품 행의 **▼** 버튼을 누르면 **1개씩** 아래 반품 목록으로 이동합니다. (부분 반품 가능)
- 패키지가 연결된 제품은 패키지와 함께 이동합니다.
- 잘못 이동한 경우 반품 목록의 **▲** 버튼으로 되돌립니다.

### Step 3. Confirm Refund

1. **Confirm Refund** 버튼을 클릭합니다.
2. `Would you like to create a New Return?` 팝업에서 <strong>Yes.</strong>를 클릭합니다.
3. `Return has been successfully created.` 메시지가 표시되면 완료입니다.<br/>
   반품 내역은 새로운 Invoice로 생성됩니다.

<div className="blockquote-warning">

> <mark>**반품 매출은 POS에서 조회되지 않습니다.**</mark><br/>
> 생성된 반품 내역은 IIC BO의 Sales > Daily Record View 또는 Order > Refund List에서 확인해 주세요. 👉 **[Daily Record View 바로가기](/docs/sales/daily-record-view-au)** 👉 **[Refund List 바로가기](/docs/order/refund-list-au)**

</div>

## 2. 원 매출 없이 반품 (Manual Refund) {#refund-without-origin}

BO에 원 매출이 없는 경우, 반품할 제품을 직접 등록하여 신규 반품을 생성합니다.

<div className="blockquote-warning">

> Manual Refund는 **정말 예외적인 경우에만** 사용합니다.<br/>
> 먼저 **원 매출이 BO에 없는 원인을 확인**한 뒤 처리해 주세요.

</div>

AU에서 원 매출이 없을 경우는 다음과 같습니다.

| 경우 | 설명 |
|---|---|
| **BO 매출 생성 누락** | 외부 POS와 BO는 연동되지 않으므로, 외부 POS 결제 후 BO에서 매출(판매) 등록을 하지 않은 경우 |
| **BO 도입 이전 매출** | BO 사용 이전 시스템의 매출은 BO로 이전(마이그레이션)하지 않으므로, 과거 매출에 대한 반품인 경우 |

<div className="img-placeholder">📷 [Image] Manual Refund 버튼</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | `Invoice No.`는 비워두고, `Product Barcode`에서 반품할 제품을 스캔·검색하여 등록 |
| **2** | 수량 확인 후 빨간색 **Manual Refund** 버튼 클릭 |
| **3** | `Would you like to create a New Return?` 팝업에서 **Yes.** 클릭 |
| **4** | `Return has been successfully created.` 메시지 확인 |

<div className="blockquote-gray">

> Manual Refund는 멤버십·Customer Information 입력 없이 진행됩니다. **Cashier**만 선택되어 있으면 됩니다.

</div>

## 반품 버튼이 비활성화된 경우

| 확인 항목 | 설명 |
|---|---|
| **Cashier** | Cashier가 선택되어 있어야 합니다 |
| **반품 제품** | 반품 목록(또는 Manual Refund 시 판매 목록)에 제품이 1개 이상 있어야 합니다 |
| **렌즈 제품** | **LENS** 제품이 포함된 경우 POS에서 반품할 수 없습니다 |
| **반품 가능 여부** | 원 매출이 반품 불가 상태이거나 반품 가능 수량이 0이면 ▼ 버튼이 비활성화됩니다 |

## 📌 참고 — 사용 POS별 반품 정보 처리

매장 직원의 BO 작업은 동일하며, 등록 이후 Bluebell ERP로 전달되는 방식만 다릅니다.

| 사용 POS | BO 매출(반품) 등록 이후 |
|---|---|
| **유통사 POS** | BO가 반품 정보를 Bluebell ERP로 실시간 전송 (상품 라인 단위) |
| **Bluebell POS** | Bluebell POS가 ERP로 이미 전송하므로, BO에는 내부 매출(반품)로만 저장 |

## 📌 참고 — 인보이스 번호 생성

- <mark>**BO에서 매출을 생성할 때 판매 / 반품 인보이스 번호는 각각 별도의 생성 조건이 있어, 조건에 맞춰 번호가 생성됩니다.**</mark>
- 반품 인보이스 번호는 입력값과 관계없이 항상 `RF + 스토어 코드 + 일시(yyMMdd HHmmss) + 랜덤 5자리` 형식으로 **새로 생성**됩니다.
  - e.g. `RFAU1003261001091530INQ0L`
- 반품 인보이스는 반품을 처리한 건 기준으로 생성됩니다.
  - 전체 반품 : 반품 인보이스 **1개** 생성
  - 부분 반품을 여러 번 나눠 처리 : **반품할 때마다** 반품 인보이스가 각각 생성
- SALES 메뉴에서는 신규 반품 인보이스로 조회되지만, **원 주문번호(Original Receipt No.) 기준으로도 조회**할 수 있습니다. 👉 **[Daily Record View 바로가기](/docs/sales/daily-record-view-au)**

<div className="qna-section">

## ❓ FAQ

> **Q. 반품한 제품의 재고는 어디로 들어가나요?**
>
> A. 반품을 등록한 매장의 <u>Sales 로케이션</u> 재고로 반영됩니다.

> **Q. 일부 수량만 반품할 수 있나요?**
>
> A. 네. ▼ 버튼을 반품할 수량만큼 눌러 <u>부분 반품</u>할 수 있습니다.

> **Q. 다른 매장에서 구매한 제품을 반품하러 왔어요.**
>
> A. 매장 간 교환·반품은 지원하지 않습니다. 구매 매장에서 처리하도록 안내해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
