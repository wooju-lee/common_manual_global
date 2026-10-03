---
sidebar_label: Inventory Ledger (재고 원장 조회)
sidebar_position: 8
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Ledger (재고 원장 조회)

> 판매, 반품, 입출고, 이동, 조정, 실사 등 **모든 재고 변동 이력**을 조회하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory Ledger</span>

## 👉 언제 사용하나요?

- 특정 제품의 재고가 **언제, 왜 변동되었는지** 추적할 때
- 실사 차이 발생 시 **변동 원인**을 확인할 때

## 1. 원장 조회

<div className="img-placeholder">📷 [Image] Inventory Ledger 검색 조건 및 목록</div>

| 검색 조건 | 설명 |
|---|---|
| **BP / Store / Location** | 조회 대상 |
| **Inventory Transaction Type** | 재고 변동 유형 (복수 선택 가능) |
| **Search Period** | 조회 기간 (기본: 최근 7일) |
| **검색어** | Invoice No., 제품 코드/명, 바코드 |

| 항목 | 설명 |
|---|---|
| **Transaction Date Time** | 재고 변동 일시 |
| **Inventory Transaction Type** | 변동 유형 |
| **Before Qty / Transaction Qty / After Qty** | 변동 전 수량 / 변동 수량 / 변동 후 수량 |

- **Exclude Reversal History** 체크 시 취소(Reversal) 이력을 제외하고 조회합니다.
- **Excel Export**로 다운로드할 수 있습니다.

## 2. 주요 재고 변동 유형 (AU)

| 유형 | 발생 시점 |
|---|---|
| **Sales** / **Refund** | POS 판매 / 반품 등록 |
| **Outbound** | C2C·S2S 출고 등록 (등록 즉시 출고 완료) |
| **Inbound (Manual)** | 입고 확정 |
| **Movement** | 로케이션 이동, POS 재고 이동 (SALES → DP) |
| **Inventory Adjustment** | 재고 조정 승인 |
| **Stocktaking Adjustment** | 재고 실사 확정 |
| **RX Sale (In Progress / Completed)** | 온라인 RX 주문 처리 |
| **Movement (RX)** | RX 주문 관련 재고 이동 |
| **○○ Reversal** | 해당 변동의 취소 |

<div className="blockquote-gray">

> 이 외에도 여러 유형이 표시될 수 있습니다. `Inbound (SAP)` 등 ERP·WMS 연동 관련 유형은 연동이 없는 AU에서는 발생하지 않습니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
