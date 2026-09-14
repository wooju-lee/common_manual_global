---
sidebar_label: To Customer (B2C)
sidebar_position: 1
author: Wooju
created: "2026-04-27"
countries: [us]
---

# 📍 To Customer (B2C)

> 승인(Confirm)된 RX 주문을 Lab에서 작업한 후, 고객에게 직접 배송하는 B2C 프로세스를 안내합니다.
>
> 경로 : <span className="path-badge">BO > RX Work Management > To Customer</span>

---

## 1. RX Work Management 개요

승인된 RX 주문은 배송 방법에 따라 두 개의 탭으로 나뉘어 관리됩니다.

| 탭 | 배송 흐름 | 대상 |
|---|---|---|
| **To Customer** | Lab → 고객 | 온라인 주문, 오프라인 주문(고객 선택 시) |
| **To Store** | Lab → 스토어 → 고객 | 오프라인 주문 |

승인 직후 최초 작업 상태는 `Pending`(작업 대기)이며, 아래 항목을 설정 · 수정할 수 있습니다.

### 설정 가능 항목

| 항목 | 설명 |
|---|---|
| **Worker** | 작업자 권한 그룹 내 계정 중 담당자를 선택합니다 |
| **Work Status** | `Pending` · `Inbound Inspection` · `In Progress` · `Re Do` · `Outbound Inspection` : 자유롭게 변경 가능 |
| | `Completed` : 라벨 수신 시 **자동 전환** (송장 출력 가능 상태) |
| | `Finalized` : 배송 완료 시 **자동 전환** (최종 종결 상태) |
| **Work Type** | 인하우스(Inhouse) / 아웃소싱(Outsource) 구분 |
| **Processing Period** | 예상 소요 시간 그룹 설정 |
| **Work ETA** | 컨펌 일자 + Processing Period 기준으로 자동 계산되며, 이후 수정 가능 |

---

## 2. B2C 작업 프로세스

| Step | 내용 |
|:---:|---|
| **1** | **작업 지시서 출력** — 리스트에서 일괄 또는 상세에서 단건으로 출력합니다 |
| **2** | **작업 진행** — 작업 지시서와 실물을 트레이에 맞게 정리한 후 작업합니다 (Inhouse / Outsource) |
| **3** | **상태 업데이트** — 작업 상황에 따라 Work Status를 변경합니다 |
| **4** | **라벨 등록** — `Outbound Inspection` 상태의 주문에 대해 **Label Registration**을 실행합니다 |
| | BO ↔ TMS(Shipstation) 연동을 통해 배송 라벨이 생성 · 수신됩니다 |
| **5** | **라벨 수신** — 라벨이 수신되면 `Outbound Inspection` → `Completed`로 자동 전환됩니다 |
| **6** | **라벨 출력** — `Completed` 상태에서 라벨을 일괄 출력합니다 |
| **7** | **배송 완료** — 배송사가 픽업 후 출고를 완료하면 `Finalized`로 자동 전환됩니다 |

:::caution 라벨 등록 시 참고
일괄 라벨 등록은 **최대 30건**까지 처리 가능하며, 라벨 수신까지 **최대 약 5분**이 소요될 수 있습니다.
:::

:::info 배송 타입 변경
B2C 유형은 온라인 · 오프라인 주문 모두 해당될 수 있습니다.
- **온라인 주문** : 배송 타입 변경 불가
- **오프라인 주문** : 출고 라벨 등록 전까지 배송 타입 변경 가능
:::

---

## 3. 예외 처리

### 작업 중 RX 주문 취소

재고가 이동 중인 상태, 즉 **입고 처리까지 완료되지 않은 출고가 있는 경우**에는 취소가 불가합니다.

### RX 반품

`Finalized` 상태로 종결된 주문이 CS를 통해 반품 요청이 들어온 경우 아래와 같이 처리합니다.

| 채널 | 처리 방식 |
|---|---|
| **Online** | OMS로 환불 요청 전송 |
| **Offline** | Shopify로 환불 요청 전송 + Lab 재고 입고 처리 |
