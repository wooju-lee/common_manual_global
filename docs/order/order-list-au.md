---
sidebar_label: Order List (주문 리스트)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Order List (주문 리스트)

> IIC BO에 수집된 주문을 조회하는 메뉴입니다.
>
> 경로 : <span className="path-badge">IIC BO > Order > Order List</span>

## 👉 언제 사용하나요?

- 온라인·오프라인 주문의 **진행 상태**(확정, 출고, 배송 완료 등)를 확인할 때
- 특정 주문번호로 **주문 내역**을 찾을 때

## 1. 주문 조회

<div className="img-placeholder">📷 [Image] Order List 검색 및 목록 화면</div>

조회할 기간과 스토어를 선택한 뒤 **Search**를 클릭합니다.<br/>
기간은 `TODAY` / `1 WEEK` / `1 MONTH` / `3 MONTHS` 버튼으로 빠르게 선택할 수 있습니다.

<div className="blockquote-gray">

> 특정 주문을 찾을 때는 **Order No., Store Code, Store Name** 입력란에 주문번호를 입력하는 것이 가장 빠릅니다. (2자 이상)

</div>

## 2. 주문 상태

> 🌐 온라인 주문 · 🏪 오프라인 주문

| Status | 의미 | 상세 |
|---|---|---|
| **PENDING** | 주문 생성 | 🌐 **온라인** (일반 / RX) : 고객 결제 완료 후 주문 생성<br/>🏪 **오프라인** 주문은 PENDING 상태가 없습니다 |
| **CONFIRMED** | 주문 확정 | 🌐 **온라인** 일반 : OMS로부터 출고 지시(Shipment `CREATE`) 수신 시점<br/>&emsp;• 확정 시점에 **출고대기수량**이 잡히며(재고 점유), 이후 고객 취소 불가 상태<br/>🌐 **온라인** RX : 온라인 일반과 동일하게 출고 지시(`CREATE`) 수신 시점<br/>&emsp;• 렌즈 작업 `Request` 시작 |
| **FULFILLED** | 출고 완료 | 🌐 **온라인** 일반 : OMS로부터 출고 완료(Shipment `SHIP`) 수신 시점<br/>&emsp;• 부분 출고 시에는 CONFIRMED 상태 유지, 모든 수량이 출고되어야 변경<br/>&emsp;• 이 시점에 **매출(판매) 생성(매출 인식)** 및 재고 차감<br/>🌐 **온라인** RX : 배송 라벨 등록 후 TMS 배송 출발(`IN_TRANSIT`) 수신 시점<br/>&emsp;• 컨펌된 렌즈 작업 건들은 CONFIRMED로 유지 |
| **COMPLETED** | 배송 완료 | 🌐 **온라인** 일반 : OMS로부터 배송 완료(`COMPLETE`) 수신 시 변경<br/>🌐 **온라인** RX : TMS 배송 완료(`DELIVERED`) 수신 시점<br/>🏪 **오프라인** 일반 주문(POS 매출)은 매장에서 바로 수령하므로 생성과 동시에 COMPLETED로 반영 |
| **CANCELED** | 주문 취소 | 🌐 **온라인** 일반 : OMS로부터 취소(`CANCEL` / `REJECT`) 수신 시 변경 |

## 3. 목록에서 확인할 수 있는 것

- **Order Date**는 각 스토어의 현지 시간대로 표시됩니다.
- **Order No.** 아래 괄호에는 원 주문번호가 함께 표시됩니다. 주문번호를 클릭하면 주문 상세를 확인할 수 있습니다.
- **Location Information**에서 주문 재고가 차감되는 로케이션(예: `1000 / SALES`)을 확인할 수 있습니다.
- **Excel Export**로 조회된 목록을 다운로드할 수 있습니다.

## 4. 주문 상세 보기

목록의 <strong>Order No.</strong>를 클릭하면 주문 상세 팝업이 열립니다. 팝업 상단에는 주문번호와 현재 **주문 상태**가 표시되며, 팝업 구성은 상태와 관계없이 동일합니다.

<div className="img-placeholder">📷 [Image] 주문 상세 팝업 — Order Information / Product List</div>

- **Order Information**에서 주문 일시, 스토어, 로케이션, 통화를 확인할 수 있습니다.
- **Product List**에서 주문 제품별 수량과 금액(Unit, Net, VAT, Total)을 확인할 수 있습니다.
  - **Cancel Qty**에는 주문 중 취소된 수량이 표시됩니다.
  - 제품에 포함된 **패키지**(예: `2025 PACKAGE SET`)는 금액 `0`으로 함께 표시되며, 하단 Total 수량에는 포함되지 않습니다.

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | 메뉴 생성, 조회 방법 작성 | Wooju(Landa) |
