---
sidebar_label: Inventory List (실시간 재고 조회)
sidebar_position: 6
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory List (실시간 재고 조회)

> 법인(BP) > 스토어 > 로케이션별로 제품의 실시간 재고 수량을 확인하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory List</span>

## 👉 언제 사용하나요?

- **특정 제품의 재고 보유 여부**를 빠르게 확인할 때
- 스토어 내 **로케이션별 재고 현황**을 파악할 때
- 출고·조정 진행 중인 제품의 **실제 운용 가능 수량**을 확인할 때

## 1. 리스트 검색

<div className="img-placeholder">📷 [Image] Inventory List 검색 조건 및 목록</div>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **Brand / BP** | 브랜드, BP 선택 | <mark>**브랜드를 먼저 선택**</mark>해야 선택 가능 |
| **Store** | 스토어 선택 (복수 선택 가능) | <mark>**BP를 먼저 선택**</mark>해야 선택 가능 |
| **Location** | 스토어 내 로케이션 선택 (복수 선택 가능) | <mark>**Store를 먼저 선택**</mark>해야 선택 가능 |
| **Product Category 1 / 2** | 제품 카테고리 | |
| **검색어** | BP·스토어·제품 코드/명, 바코드 | 2자 이상 입력 |

## 2. 재고 수량 항목

| 항목 | 의미 |
|---|---|
| **On-hand Qty**<br/><span className="label-sub">실재고</span> | 제품별 실재고 (전체 재고) |
| **Outbound Pending Qty**<br/><span className="label-sub">출고 대기</span> | 출고 완료 전 상태로 걸려 있는 수량 |
| **Adjustment Pending Qty**<br/><span className="label-sub">조정 대기</span> | 조정이 등록만 되고, 승인(**Confirm**) 또는 반려(**Rejected**) 처리가 안 되어 걸려 있는 수량 |
| **Available Qty**<br/><span className="label-sub">가용 재고</span> | 실재고에서 출고 대기 · 조정 대기를 제외한, 실제 사용 가능한 수량 |
| **Pending Inbound**<br/><span className="label-sub">입고 예정</span> | 스토어로 입고될 수량 (입고 확정 전 수량) |

- <mark>**가용 재고(Available Qty) = 실재고(On-hand Qty) − 출고 대기 − 조정 대기**</mark>
- <mark>실제 사용 가능한 재고는 **Available Qty** 기준으로 확인해 주세요.</mark>
- **Excel Export**로 현재 조건의 목록을 다운로드할 수 있으며, 조회 범위가 너무 크면 범위를 줄여 다시 시도하라는 안내가 표시됩니다.

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
