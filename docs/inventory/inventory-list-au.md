---
sidebar_label: Inventory List (실시간 재고 조회)
sidebar_position: 6
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory List (실시간 재고 조회)

> 현재 시점의 전산 재고를 스토어, 로케이션, 제품별로 실시간 확인하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory List</span>

## 👉 언제 사용하나요?

- 고객 응대 시 **특정 제품의 재고 보유 여부**를 빠르게 확인할 때
- 매장 내 **로케이션별 재고 현황**을 파악할 때
- 출고·조정 진행 중인 제품의 **실제 운용 가능 수량**을 확인할 때

## 1. 재고 조회

<div className="img-placeholder">📷 [Image] Inventory List 검색 조건 및 목록</div>

| 검색 조건 | 설명 |
|---|---|
| **Brand / BP** | 브랜드, BP 선택 |
| **Store** | 스토어 선택 (복수 선택 가능) |
| **Location** | 스토어 내 로케이션 선택 (복수 선택 가능) |
| **Product Category 1 / 2** | 제품 카테고리 |
| **검색어** | BP·스토어·제품 코드/명, 바코드 |

## 2. 재고 수량 항목

| 항목 | 의미 |
|---|---|
| **On-hand Qty** | 해당 로케이션의 전체 보유 수량 |
| **Outbound Pending Qty** | 출고 요청 등으로 예약되어 운용할 수 없는 수량 |
| **Adjustment Pending Qty** | 승인 대기 중인 재고 조정으로 보류된 수량 |
| **Available Qty** | 실제 판매·이동에 활용할 수 있는 수량 |
| **Pending Inbound** | 입고 예정 수량 (입고 확정 전) |

- <mark>고객에게 재고를 안내할 때는 **Available Qty** 기준으로 확인해 주세요.</mark>
- **Excel Export**로 현재 조건의 목록을 다운로드할 수 있습니다. 조회 범위가 너무 크면 범위를 줄여 다시 시도하라는 안내가 표시됩니다.

<div className="qna-section">

## ❓ FAQ

> **Q. On-hand Qty와 Available Qty가 다른 이유가 뭔가요?**
>
> A. 출고 대기 또는 조정 대기 중인 수량은 <u>Available Qty</u>에서 제외됩니다.

> **Q. 다른 매장에서 출고한 제품이 아직 재고에 없어요.**
>
> A. S2S로 출고된 제품은 입고 매장에서 <u>입고 확정</u>을 해야 재고에 반영됩니다. 확정 전에는 `Pending Inbound`에 표시됩니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
