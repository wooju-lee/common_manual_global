---
sidebar_label: Inventory Ledger (재고 원장 조회)
sidebar_position: 8
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Ledger (재고 원장 조회)

> 시스템 내에서 발생하는 입고, 출고, 판매, 반품, 조정, 실사(조정), 이동에 대한 **재고 원장 이력을 모두 조회**하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Monitoring > Inventory Ledger</span>

## 👉 언제 사용하나요?

- 특정 제품의 재고가 **언제, 왜 변동되었는지** 추적할 때
- 실사 차이 발생 시 **변동 원인**을 확인할 때

## 1. 리스트 검색

<div className="img-placeholder">📷 [Image] Inventory Ledger 검색 조건</div>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **BP** | BP 선택 | |
| **Store** | 스토어 선택 (복수 선택 가능) | <mark>**BP를 먼저 선택**</mark>해야 선택 가능 |
| **Location** | 스토어 내 로케이션 선택 (복수 선택 가능) | <mark>**Store를 먼저 선택**</mark>해야 선택 가능 |
| **Inventory Transaction Type** | 재고 변동 유형 (복수 선택 가능) | |
| **Search Period** | 조회 기간 (기본: 최근 7일) | 필수 |
| **검색어** | Invoice No., 제품 코드/명, 바코드 | 2자 이상 입력 |

## 2. 리스트 컬럼

<div className="img-placeholder">📷 [Image] Inventory Ledger 목록 — Include Reversal History / Excel Export</div>

| 컬럼 | 설명 |
|---|---|
| **Transaction Date Time**<br/><span className="label-sub">트랜잭션 일시</span> | 재고 변동 일시 (스토어 현지 시간 기준, 예: `Australia/Sydney`) |
| **BP Information**<br/><span className="label-sub">법인</span> | 법인 코드 / 명 |
| **Store Information**<br/><span className="label-sub">스토어</span> | 스토어 코드 / 명 |
| **Location Information**<br/><span className="label-sub">로케이션</span> | 로케이션 코드 / 명 |
| **Product Info**<br/><span className="label-sub">제품</span> | 제품 코드 / 명 / 바코드 |
| **Inventory Transaction Type**<br/><span className="label-sub">재고 변동 유형</span> | 재고 변동 유형 (👉 3. 주요 재고 변동 유형 참고) |
| **Before Qty**<br/><span className="label-sub">처리 전 재고 수량</span> | 처리 전 실재고(On-hand Qty) |
| **Transaction Qty**<br/><span className="label-sub">처리 수량</span> | 처리로 증감된 수량 (감소는 `-`로 표시) |
| **After Qty**<br/><span className="label-sub">처리 후 재고 수량</span> | 처리 후 실재고(On-hand Qty) |
| **Invoice No.**<br/><span className="label-sub">트랜잭션 인보이스 번호</span> | 변동을 발생시킨 거래 번호 (판매 · 반품 · 주문 · 입고 · 출고 번호 등). 조정 · 이동 · 실사는 `-` |

- **Include Reversal History** 체크 시 시스템 원복(Reversal) 이력을 포함해 조회합니다. (기본: 미포함)
- **Excel Export**로 다운로드할 수 있습니다.

## 3. 주요 재고 변동 유형 (AU)

업무별로 아래 트랜잭션 유형이 원장에 기록되며, 수량은 Transaction Qty의 증감 기준으로 반영된 수량을 의미합니다.

| 업무 | 트랜잭션 유형 | 언제 기록되나요? | 수량 |
|---|---|---|:---:|
| **판매 / 반품** | `Sales` | 온/오프라인 판매 시 | `-` |
| | `Refund` | 온/오프라인 반품 시 | `+` |
| **입고** | `Inbound (Manual)` | 입고 확정 시 (C2C · S2S · L2S 등 모든 입고) | `+` |
| | `Inbound Adjustment` | C2C 입고를 예정 수량보다 적게 확정한 경우, 부족분 차감 | `-` |
| **출고** | `Outbound (Confirmed)` | 출고 완료 시 | `-` |
| **조정 / 실사** | `Adjustment` | 재고 조정 승인 시 | `+` / `-` |
| | `Stocktaking Adjustment` | 실사 확정 시 (차이가 있는 제품만) | `+` / `-` |
| **이동** | `Movement` | 로케이션 이동 시 (POS 재고 이동 SALES → DP 포함) | 출발 `-`<br/>도착 `+` |
| | `Movement (RX)` | 오프라인 RX 주문 등록 시 (SALES → RX Holding) | 출발 `-`<br/>도착 `+` |
| | `Movement Compensation (RX)` | RX 주문 취소 시 (RX Holding → SALES) | 출발 `-`<br/>도착 `+` |
| **원복** | `○○ Reversal` | 시스템 처리 실패로 자동 원복된 경우 (사용자 취소로는 발생하지 않음) | 원래 변동의 반대 |

- <mark>**실사 결과(`Stocktaking Adjustment`)와 입고 부족분(`Inbound Adjustment`)은 `Adjustment`로 검색**</mark>해야 조회됩니다.
- 이동(Movement)은 출발 로케이션(`-`)과 도착 로케이션(`+`)에 각각 1행씩 기록됩니다.
- 조정 등록, 출고 요청 등 수량이 확정되지 않은 단계는 원장에 기록되지 않습니다.

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
