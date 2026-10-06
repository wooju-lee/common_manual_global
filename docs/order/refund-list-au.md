---
sidebar_label: Refund List (반품 리스트)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Refund List (반품 리스트)

> IIC BO에 수집된 반품 주문을 조회하는 메뉴입니다.
>
> 경로 : <span className="path-badge">IIC BO > Order > Refund List</span>

## 👉 언제 사용하나요?

- 온라인·오프라인에서 발생한 **반품(환불) 내역**을 확인할 때
- 반품 건의 **원 주문번호**를 확인할 때
- 반품으로 입고된 재고가 **어느 스토어 > 로케이션에 반영되었는지** 확인할 때

## 1. 반품 조회

<div className="img-placeholder">📷 [Image] Refund List 검색 및 목록 화면</div>

조회할 기간과 스토어를 선택한 뒤 **Search**를 클릭합니다.<br/>
기간은 `TODAY` / `1 WEEK` / `1 MONTH` / `3 MONTHS` 버튼으로 빠르게 선택할 수 있습니다.

<div className="blockquote-gray">

> 특정 반품을 찾을 때는 **Refund No., Original Order No., Store Code, Store Name** 입력란에 반품번호 또는 원 주문번호를 입력합니다. (2자 이상)

</div>

## 2. 반품 유형

> 🌐 온라인 반품 · 🏪 오프라인 반품

| Refund Type | 의미 | 상세 |
|---|---|---|
| **REFUND** | 일반 반품 | 🌐 **온라인** : OMS로부터 환불 확정 정보 수신 시점<br/>🏪 **오프라인** : POS에서 반품 생성 시점 (오프라인은 반품 확정만 발생) |
| **EXCHANGE** | 교환 | 🌐 **온라인**만 해당 : 동일 제품 교환만 수신<br/>&emsp;• 회수품 검수 완료(`COMPLETE_GRADE`) 시점에 0원 반품 생성 + 그레이딩 기준 재고 복원<br/>&emsp;• 교환 출고(`SHIP`) 시점에 0원 판매 생성 + 재고 차감 (Refund List가 아닌 판매로 반영) |
| **FORCE_REFUND** | 강제 환불 | 🌐 **온라인**만 해당 : OMS에서 환불 처리를 강제로 진행한 건으로, 일반 반품 확정과 같은 방식으로 반영<br/>&emsp;• AU는 사용하지 않을 예정 |

## 3. 목록에서 확인할 수 있는 것

- **Refund Date**는 각 스토어의 현지 시간대로 표시됩니다.
- **Refund No.** 아래 괄호에는 BO 반품번호가, 오른쪽 <strong>Original Order No.</strong>에는 반품의 원 주문번호가 표시됩니다.
- 하나의 원 주문에서 여러 번 반품하면, 반품 건마다 별도 행으로 표시됩니다.
- **Excel Export**로 조회된 목록을 다운로드할 수 있습니다.

## 4. 반품 상세 보기

목록의 <strong>Refund No.</strong>를 클릭하면 반품 상세 팝업이 열립니다. 팝업 상단에는 원 주문번호, BO 반품번호, **반품 유형**이 표시됩니다.

<div className="img-placeholder">📷 [Image] 반품 상세 팝업 — Refund Information / Refund Products</div>

- **Refund Information**에서 반품 일시, 스토어, 통화를 확인할 수 있습니다.
- **Refund Products**에서 반품 제품별 수량과 금액(Unit, Net, VAT, Total Price)을 확인할 수 있습니다.
  - 제품마다 **Store**와 **Location Information**이 함께 표시되어, 반품된 재고가 **어느 스토어의 어느 로케이션으로 입고되었는지** 확인할 수 있습니다.
  - 제품에 포함된 **패키지**는 금액 `0`으로 함께 표시되며, 하단 Total 수량에는 포함되지 않습니다.

| 구분 | 반품 재고 입고 위치 |
|---|---|
| 🏪 **오프라인** 반품 | 반품을 받은 스토어의 `1000 / SALES` 로케이션으로 바로 반영 |
| 🌐 **온라인** 반품 | OMS에서 전달되는 **그레이딩(Grading) 값**에 따라 반영<br/>&emsp;• A · B 등급 : `1000 / SALES`<br/>&emsp;• C 등급 : `1020 / DEFECT` |
| 🌐 **온라인** RX 취소 / 반품 (예외) | 운영상 불가하나, 예외적으로 Rx Work Management에서 취소 / 반품 처리 가능. **처리 시점에 재고가 있는 스토어 > 로케이션**으로 반영<br/>&emsp;• 랩 입고 확정 전 (온라인 → 랩 출고 완료 상태) : 온라인 스토어로 복귀<br/>&emsp;• 랩 입고 확정 후 : 랩(AU_RX_LAB) 기준으로 반영 |

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | 메뉴 생성, 조회 방법 작성 | Wooju(Landa) |
