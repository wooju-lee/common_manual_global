---
sidebar_label: To Customer (B2C 고객 배송)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-21"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';
import ProcessFlow from '@site/src/components/ProcessFlow';

# 📍 To Customer (B2C 고객 배송)

> 승인된 온라인 RX 주문의 렌즈 작업, 출고 검수, 배송 라벨 등록, 라벨·AC 카드 출력까지의 흐름을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > RX (Lens) > Rx Work Management > To Customer</span>

## 👉 AU Online RX Work 프로세스

<ProcessFlow
  perRow={3}
  steps={[
    {no: '1', title: '출고 생성', desc: '승인한 주문 건마다 출고 자동 생성 (ONLINE → AU_RX_LAB)', statuses: [
      {k: 'BO : Outbound', v: ['Create', '(Auto) Outbound Completed']},
    ]},
    {no: '2', title: '입고 생성', desc: '자동 출고 완료에 따라 랩 입고 생성 (AU_RX_LAB)', statuses: [
      {k: 'BO : Inbound', v: 'Pending Inbound'},
    ]},
    {no: '3', title: '입고 확정 (수동)', link: '작업처 (OWNDAYS 작업 완료 시)', focus: '📍 운영자가 작업처(OWNDAYS)에 제품 · 처방전 직접 전달', desc: '작업처 전달 완료 시점에 맞춰 입고 확정 (Inbound List)', statuses: [
      {k: 'BO : Inbound', v: ['Pending Inbound', 'Inbound Confirmed']},
    ]},
    {no: '4', title: '작업 상태 변경', desc: '작업 완료에 따라 RX 작업 상태 변경 (출고 준비)', statuses: [
      {k: 'BO : Rx Work Management', v: 'Outbound Inspection'},
    ]},
    {no: '5', title: '라벨 등록 / 출력', desc: ['고객 배송 라벨 등록 / 출력', '• Outbound Inspection 상태에서만 라벨 등록 가능', '• 라벨 등록 완료 시, Completed 자동 변경'], statuses: [
      {k: 'BO : Rx Work Management', v: ['Outbound Inspection', 'Completed']},
    ]},
    {no: '6', title: '종결', desc: ['배송사 픽업 완료', '• Completed → Finalized 업데이트 (자동)', '• ONLINE RX Sales 생성 및 AU_RX_LAB 출고대기 수량 차감 완료 (자동)'], statuses: [
      {k: 'BO : Rx Work Management', v: ['Completed', 'Finalized']},
    ]},
  ]}
/>

| Step | 처리 내용 |
|:---:|---|
| **1** | 승인한 주문 건마다 출고(ONLINE → AU_RX_LAB)가 자동 생성되고, 바로 출고 완료(`Outbound Completed`) 처리됩니다. |
| **2** | 자동 출고 완료에 따라 AU_RX_LAB에 입고가 생성됩니다. (`Pending Inbound`) |
| **3** | <mark>**운영자가 작업처(OWNDAYS)에 제품 · 처방전을 직접 전달**</mark>한 뒤, **Inbound List**에서 입고 확정(`Inbound Confirmed`)을 진행합니다. 👉 **[랩 입고 확정 바로가기](#2-랩-입고-확정)** |
| **4** | 렌즈 작업이 완료되는 시점에 맞춰, **Rx Work Management**에서 작업 상태를 `Outbound Inspection`으로 변경합니다. |
| **5** | `Outbound Inspection` 상태에서 고객 배송 라벨을 등록 / 출력하며, 라벨 등록이 완료되면 `Completed`로 업데이트됩니다. |
| **6** | 배송사 픽업이 완료되면 `Completed` → `Finalized`로 자동 업데이트되고, ONLINE RX Sales 생성 및 AU_RX_LAB 출고대기 수량이 차감됩니다. |

<div className="blockquote-gray">

> **AU 출고 생성 방식** : **승인된 주문마다 즉시 출고가 생성**됩니다.

</div>

## 1. 작업 목록 조회

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-01.png').default}
  alt="Rx Work Management — Work Status, Date Search, To Customer 탭"
  boxes={[
    {x: 9.1, y: 18.3, w: 7.0, h: 2.3},
    {x: 1.4, y: 23.4, w: 30.1, h: 4.9},
    {x: 1.4, y: 52.8, w: 5.0, h: 2.0},
    {x: 36.0, y: 67.4, w: 8.0, h: 26.2},
  ]}
/>

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

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-02.png').default}
  alt="Work Status Management 패널"
  boxes={[
    {x: 66.2, y: 9.2, w: 31.8, h: 22.6},
  ]}
/>

상세 화면 우측 **Work Status Management**에서 `Worker`, `Work Status`, `Work Type`, `Processing Period`, `Work ETA`를 변경하고 **Save**합니다.

- OWNDAYS에 전달 후 `In Progress`, 작업 완료 제품 수거·검수 후 `Outbound Inspection`으로 변경합니다.
- 여러 건은 목록에서 체크 후 **Change Status**로 한 번에 변경할 수 있습니다.
- `Completed`, `Finalized`는 시스템이 자동으로 변경하며 수기로 선택할 수 없습니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-03.png').default}
  alt="Work Status 드롭다운 — Completed / Finalized 선택 불가"
  boxes={[
    {x: 66.2, y: 14.4, w: 31.6, h: 2.2},
    {x: 66.4, y: 25.0, w: 10.0, h: 3.0},
  ]}
/>

## 4. 배송 라벨 등록

`Outbound Inspection` 상태의 주문에서 배송 라벨을 등록합니다.

<div className="img-placeholder">📷 [Image] Label Registration 팝업 — Carrier · Service Type</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | 상세 화면 상단 또는 목록에서 주문 선택 후 **Label Registration** 클릭 |
| **2** | `Carrier` · `Service Type` 확인 (기본값: `Australia Post` · `Ground`) |
| **3** | **Confirm** → TMS로 라벨 등록 요청 |
| **4** | 라벨 등록이 완료되면 상태가 `Completed`로 변경 |

- 목록에서 여러 건을 선택해 일괄 등록할 수 있으며, `Outbound Inspection` 상태인 건만 TMS로 전송됩니다.

| 항목 | 기본값 | 설명 |
|---|---|---|
| **Carrier**<br/><span className="label-sub">배송사</span> | `Australia Post` | 호주 RX 고객 배송은 Australia Post를 사용합니다. |
| **Service Type**<br/><span className="label-sub">서비스 타입</span> | `Ground` | 기본은 `Ground`로 등록합니다.<br/><mark>**CS 요청이 있는 경우에만 `Express`로 변경**</mark>해 주세요. |

- 선택한 배송사 · 서비스 타입은 함께 선택한 주문 전체에 동일하게 적용됩니다. Express로 보낼 주문은 따로 선택해 등록해 주세요.

## 5. 라벨 / AC 카드 출력

| 버튼 | 설명 |
|---|---|
| **Label Print** | `Completed` 상태에서 배송 라벨 출력 |
| **Serial Print** | AC 카드(시리얼 카드) 출력 |
| **Print Picking List** / **Invoice Print** | 피킹 리스트, 인보이스 출력 |

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-02.png').default}
  alt="상세 화면 상단 버튼 — Serial Print / Label Print"
  boxes={[
    {x: 67.4, y: 4.7, w: 5.6, h: 1.6},
    {x: 93.3, y: 4.7, w: 5.6, h: 1.6},
  ]}
/>

라벨과 AC 카드를 출력해 제품과 함께 출고합니다. 이후 배송 상태는 TMS에서 자동으로 수신되어 `Finalized`로 변경되며, 배송 정보는 우측 **Delivery Tracking**에서 확인할 수 있습니다.

**Print Picking List**, **Invoice Print**를 클릭하면 미리보기 팝업이 열리며, 팝업 하단 버튼으로 출력합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-04.png').default}
  alt="Picking List Preview"
  boxes={[
    {x: 81.2, y: 87.5, w: 10.2, h: 2.4},
  ]}
/>

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-05.png').default}
  alt="Invoice Preview"
  boxes={[
    {x: 79.5, y: 86.2, w: 9.7, h: 2.2},
  ]}
/>

## 6. 작업 취소 / 환불

| 버튼 | 사용 가능 상태 |
|---|---|
| **Cancel Work** | `Pending` / `Inbound Inspection` / `In Progress` / `Outbound Inspection` |
| **Refund** | `Finalized` (반품 사유 선택 후 처리) |

**Cancel Work**를 클릭하면 사유 선택 팝업이 열립니다. 사유를 선택한 뒤 처리합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-06.png').default}
  alt="Cancel Work 사유 선택"
  boxes={[
    {x: 8.4, y: 32.0, w: 28.2, h: 5.6},
    {x: 9.0, y: 43.8, w: 16.0, h: 7.4},
  ]}
/>

`Do Not Process`, `Prescription Information Needs Verification`은 세부 사유(**Sub Reason**)까지 선택해야 합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/to-customer-07.png').default}
  alt="Sub Reason 선택"
  boxes={[
    {x: 4.5, y: 43.7, w: 29.2, h: 31.0},
  ]}
/>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-12 | 화면 이미지 추가 | Wooju(Landa) |
| 2026-10-21 | 배송 라벨 등록 — 배송사 Australia Post, 서비스 타입(Ground / Express) 반영<br/>AU Online RX Work 프로세스 흐름도 추가 및 단계 정리 | Wooju(Landa) |
