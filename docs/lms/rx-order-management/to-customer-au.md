---
sidebar_label: To Customer (B2C 고객 배송)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 To Customer (B2C 고객 배송)

> 승인된 온라인 RX 주문의 렌즈 작업, 출고 검수, 배송 라벨 등록, 라벨·AC 카드 출력까지의 흐름을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > RX (Lens) > Rx Work Management > To Customer</span>

## 👉 AU 온라인 RX 작업 흐름

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 처방 승인 시 온라인 스토어 → 랩(AU_RX_LAB)으로 **S2S 출고 자동 생성 및 완료** (온라인 재고 프레임 차감) | IIC BO (자동) |
| **2** | 랩 입고 확정 (수기) | 온라인 담당자 |
| **3** | 제품 + 처방전을 외부 랩 **OWNDAYS**에 직접 전달 → 렌즈 작업 | 온라인 담당자 / OWNDAYS |
| **4** | 작업 완료 제품 수거 → 작업 상태 업데이트 → `Outbound Inspection` | 온라인 담당자 |
| **5** | 배송사 지정 + 배송 라벨 등록 요청 (TMS) | 온라인 담당자 |
| **6** | 배송 라벨 + AC 카드 출력, 출고 | 온라인 담당자 |
| **7** | 배송 상태 수신 → 주문 상태 업데이트, RX 매출 저장 및 랩 재고(프레임·패키지·렌즈) 차감 | IIC BO (자동) |

<div className="blockquote-gray">

> **AU 출고 생성 방식** : 다른 국가는 승인된 주문을 모아 하루 1회 일괄로 출고를 생성하지만, AU는 **승인된 주문마다 즉시 출고가 생성**됩니다.

</div>

## 1. 작업 목록 조회

<div className="img-placeholder">📷 [Image] Rx Work Management — To Customer 탭 목록</div>

- 상단 탭에서 **To Customer**를 선택합니다. (AU 온라인 RX 주문은 모두 To Customer)
- `Work Status`, `Date Search`(Order Date / Approval Date / Complete Date) 등으로 조회합니다.
- 행을 클릭하면 상세 화면으로 이동합니다.

### 작업 상태 (Work Status)

| 상태 | 변경 방식 | 의미 |
|---|---|---|
| **Pending** | 자동 | 승인 직후 작업 대기 |
| **Inbound Inspection** | 수기 | 랩 입고 검수 |
| **In Progress** | 수기 | 렌즈 작업 중 |
| **Re Do** | 수기 | 재작업 |
| **Outbound Inspection** | 수기 | 출고 검수 — 라벨 등록 가능 |
| **Completed** | 자동 | 배송 라벨 등록 완료 |
| **Finalized** | 자동 | 배송 출발 (출고 확정) |

## 2. 랩 입고 확정

승인 시 자동 생성된 출고에 대해, 랩(AU_RX_LAB) 입고를 수기로 확정합니다.

<div className="img-placeholder">📷 [Image] Inbound List — To Store가 AU_RX_LAB인 S2S 입고 건</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | `Inventory > Inbound List`에서 To Store를 랩(AU_RX_LAB), Type `S2S`로 조회 |
| **2** | 해당 입고 건 상세에서 **Inbound Confirmed** → **Confirm** |

<div className="blockquote-warning">

> **랩 입고 확정을 하지 않으면 배송 라벨 등록이 되지 않습니다.** (`Frame inventory not arrived at Lab` 오류)

</div>

## 3. 작업 상태 관리

<div className="img-placeholder">📷 [Image] Rx Work Management 상세 — Work Status Management 패널</div>

상세 화면 우측 **Work Status Management**에서 `Worker`, `Work Status`, `Work Type`, `Processing Period`, `Work ETA`를 변경하고 **Save**합니다.

- OWNDAYS에 전달 후 `In Progress`, 작업 완료 제품 수거·검수 후 `Outbound Inspection`으로 변경합니다.
- 여러 건은 목록에서 체크 후 **Change Status**로 한 번에 변경할 수 있습니다.
- `Completed`, `Finalized`는 시스템이 자동으로 변경하며 수기로 선택할 수 없습니다.

## 4. 배송 라벨 등록

`Outbound Inspection` 상태의 주문에서 배송 라벨을 등록합니다.

<div className="img-placeholder">📷 [Image] Label Registration 팝업 — Carrier 선택</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | 상세 화면 상단 또는 목록에서 주문 선택 후 **Label Registration** 클릭 |
| **2** | `Carrier` 선택 |
| **3** | **Confirm** → TMS로 라벨 등록 요청 |
| **4** | 라벨 등록이 완료되면 상태가 `Completed`로 변경 |

- 목록에서 여러 건을 선택해 일괄 등록할 수 있으며, `Outbound Inspection` 상태인 건만 TMS로 전송됩니다.

## 5. 라벨 / AC 카드 출력

| 버튼 | 설명 |
|---|---|
| **Label Print** | `Completed` 상태에서 배송 라벨 출력 |
| **Serial Print** | AC 카드(시리얼 카드) 출력 |
| **Print Picking List** / **Invoice Print** | 피킹 리스트, 인보이스 출력 |

<div className="img-placeholder">📷 [Image] 상세 화면 상단 버튼 — Serial Print / Label Print</div>

라벨과 AC 카드를 출력해 제품과 함께 출고합니다. 이후 배송 상태는 TMS에서 자동으로 수신되어 `Finalized`로 변경되며, 배송 정보는 우측 **Delivery Tracking**에서 확인할 수 있습니다.

## 6. 작업 취소 / 환불

| 버튼 | 사용 가능 상태 |
|---|---|
| **Cancel Work** | `Pending` / `Inbound Inspection` / `In Progress` / `Outbound Inspection` |
| **Refund** | `Finalized` (반품 사유 선택 후 처리) |

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
