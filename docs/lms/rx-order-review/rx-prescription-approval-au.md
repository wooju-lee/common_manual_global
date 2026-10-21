---
sidebar_label: Rx Prescription Review (처방 조회 및 승인 / 반려)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';
import ProcessFlow from '@site/src/components/ProcessFlow';

# 📍 Rx Prescription Review (처방 조회 및 승인 / 반려)

> 온라인 RX 주문의 처방 정보를 검토하고 <strong>승인(Confirm) 또는 반려(Reject)</strong>하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > RX (Lens) > Rx Prescription Review</span>

## 👉 AU Online RX 프로세스

- AU의 RX 비즈니스는 **온라인 주문만** 운영합니다.
- 렌즈 작업은 오피스 인근의 외부 랩 **OWNDAYS**에서 진행하며, 온라인 담당자가 제품과 처방전을 직접 전달·수거합니다.

<ProcessFlow
  steps={[
    {no: '1', title: '결제 완료', sub: 'GM 어드민', desc: '고객 온라인 결제 → 주문 생성'},
    {no: '2', title: '주문 수신', sub: 'OMS → BO', statuses: [
      {k: 'OMS', v: 'Pending'},
      {k: 'BO : Order', v: 'Pending'},
    ]},
    {no: '3', title: '재고 할당', sub: '결제 후 1시간', focus: '📍 Rx Prescription Review에서 조회 가능', statuses: [
      {k: 'OMS', v: 'Shipment Requested'},
      {k: 'BO : Order', v: 'Confirm'},
      {k: 'BO : Rx Prescription Review', v: 'Request'},
    ]},
    {no: '4', title: '처방 검토', sub: 'BO : Rx Prescription Review', desc: '처방 확인 후 승인 또는 반려'},
  ]}
  branches={[
    {no: '5-A', title: '승인', tone: 'ok', desc: ['1. 승인 이벤트 OMS 전송', '2. 렌즈 작업 리스트 목록 생성'], statuses: [
      {k: 'BO : Rx Prescription Review', v: 'Confirm'},
      {k: 'BO : Rx Work Management', v: 'Pending'},
    ]},
    {no: '5-B', title: '반려', tone: 'ng', desc: ['1. OMS 주문 취소 전송 → GM 어드민 환불'], statuses: [
      {k: 'BO : Rx Prescription Review', v: 'Reject'},
      {k: 'OMS', v: 'Canceled'},
      {k: 'GM ADM', v: 'Canceled'},
    ]},
  ]}
/>

<div className="table-stretch">

| Step | 처리 내용 |
|:---:|---|
| **1** | 고객이 온라인 결제를 완료하면 **GM 어드민**에 주문이 생성됩니다. |
| **2** | 생성된 주문은 OMS를 거쳐 BO로 수신됩니다. 재고 할당 전까지는 **Order List**에서만 `Pending`으로 조회됩니다. 👉 **[Order List 바로가기](/docs/order/order-list-au)** |
| **3** | 결제 후 **1시간**이 지나 OMS에서 재고 할당이 완료되면(`Shipment Requested`), <mark>**Rx Prescription Review에서 조회 가능**</mark>합니다. |
| **4** | 처방 정보를 확인하고 **승인(Confirm)** 또는 **반려(Reject)** 합니다. 처리 결과는 OMS로 전달됩니다. |
| **5-A** | **승인**: 승인 이벤트를 OMS로 전달하면 처방 검토가 끝나고, 렌즈 작업 단계로 넘어갑니다. 👉 **[To Customer 바로가기](/docs/lms/rx-order-management/to-customer-au)** |
| **5-B** | **반려**: OMS에 **주문 취소**로 전달되어, 자사몰(GM 어드민)에서 고객 **환불까지 처리**됩니다. |

</div>

## 1. 처방 검토 목록 조회

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/rx-prescription-review-01.png').default}
  alt="Rx Prescription Review 목록 — 검색 조건, 상태 카드, Review status"
  boxes={[
    {x: 1.0, y: 13.0, w: 65.6, h: 18.6},
    {x: 1.0, y: 34.0, w: 98.6, h: 10.4},
    {x: 41.6, y: 53.4, w: 6.2, h: 41.4},
  ]}
/>

- 목록의 행을 클릭하면 상세 화면으로 이동할 수 있습니다.

### 검색 조건

목록 상단의 필터로 조회할 처방 검토 건에 대해 검색을 통해 조회할 수 있습니다.

<div className="table-stretch">

| 검색 조건 | 설명 |
|---|---|
| **BP / Store** | BP 선택 후 스토어 선택 (복수 선택 가능) |
| **Channel** | `ALL` / `ONLINE` / `OFFLINE` <mark>**(AU는 `ONLINE`만 사용)**</mark> |
| **Review status** | `Request` / `Confirm` / `Reject` / `Canceled` |
| **Search Period** | `Order Date` 또는 `Approval Date` 기준 (기본: 최근 30일) |
| **검색어** | 주문번호, 스토어 코드/명, 고객명, 전화번호, 이메일 (2자 이상) |

</div>

### 검토 상태 (Review status)

발생한 RX 주문들에 대한 검토 상태를 의미합니다.

<div className="table-stretch">

| 상태 | 의미 |
|---|---|
| **Request** | 검토 대기 (승인 / 반려 처리 가능) |
| **Confirm** | 승인 완료 — 렌즈 작업 진행 |
| **Reject** | 반려 — 주문 취소(환불) 진행 |
| **Canceled** | 취소 완료 |

</div>

## 2. RX 주문 상세 확인 (Index)

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/rx-prescription-review-02.png').default}
  alt="Rx Prescription Review 상세 — Index 패널, 렌즈 제품 매핑, 처방전 업로드, REJECT / CONFIRM / SAVE"
  boxes={[
    {x: 85.0, y: 5.4, w: 13.8, h: 22.8},
    {x: 39.8, y: 44.0, w: 24.6, h: 5.0},
    {x: 2.2, y: 62.0, w: 81.2, h: 9.0},
    {x: 73.6, y: 95.8, w: 26.0, h: 4.0},
  ]}
/>

상세 화면 우측 **Index** 패널에서 항목별 입력 완료 여부(초록색 체크)를 확인할 수 있습니다.

<div className="table-stretch">

| 섹션 | 확인 내용 | 수정 가능 |
|---|---|:---:|
| **Customer Info**<br/><span className="label-sub">고객 멤버십 정보</span> | 온라인 주문은 멤버십 ID가 저장되어 있어, 회원 정보를 확인할 수 있습니다. |  |
| **Order Info**<br/><span className="label-sub">주문 정보</span> | • 주문 일자<br/>• 주문 제품 정보 (프레임 / 패키지 / 렌즈)<br/>• 렌즈 기준으로 작업할 프레임 정보 (`Mapped Product`) — 렌즈 수량만큼 매핑 필요<br/>• 구매 수량 및 금액<br/><mark>**`C.O.F` 열은 렌즈만 구매한 경우 표시되며, AU는 해당되지 않습니다.**</mark> |  |
| **Prescription**<br/><span className="label-sub">처방 정보</span> | 환자 · 처방자 · 처방전 일자 · 처방 값 👉 아래 **처방 상세 정보** 참고 | ✅ |
| **Documents**<br/><span className="label-sub">처방전 파일</span> | 처방전 파일(JPG / PNG / PDF, 최대 10MB)과 `EXP Date`(유효기간) |  |
| **Delivery**<br/><span className="label-sub">배송 정보</span> | 고객 이름·전화번호·이메일, 배송 주소 (`Address`, `CITY`, `STATE`, `ZIP`) | ✅ |
| **Comment**<br/><span className="label-sub">코멘트</span> | 내부 메모 | ✅ |

</div>

## 3. 처방 상세 정보

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/rx-prescription-review-03.png').default}
  alt="Prescription Values — 환자 · 처방자 · 처방전 일자, 좌안 / 우안 처방 값"
  boxes={[
    {x: 2.6, y: 5.0, w: 81.0, h: 36.6},
    {x: 2.6, y: 44.0, w: 81.0, h: 17.8},
  ]}
/>

처방 상세 정보는 모두 <mark>**온라인 주문의 처방전 정보로 수신**</mark>되는 값입니다.

<div className="table-stretch">

| 구분 | 항목 | 비고 |
|---|---|---|
| **Patient**<br/><span className="label-sub">환자</span> | `Name` (이름)<br/>`Date of Birth` (생년월일) | 온라인 처방전에서 수신 |
| **Prescriber**<br/><span className="label-sub">처방자</span> | `Prescriber` (처방자)<br/>`License No.` (라이선스 번호)<br/>`Signature` (서명 여부, `Y` / `N`)<br/>`Address` (처방자 주소)<br/>`Phone` / `Fax` (전화 또는 팩스) | 온라인 처방전에서 수신 |
| **Date**<br/><span className="label-sub">처방전 일자</span> | `Issue Date` (발급일)<br/>`Expiry Date` (만료일) | 온라인 처방전에서 수신 |
| **Prescription Values**<br/><span className="label-sub">처방 값</span> | 우안 `OD (Right Eye)` / 좌안 `OS (Left Eye)`별<br/>`Sphere`, `Cylinder`, `Axis`, `PD`(Single / Dual), `OC` | 온라인 처방전에서 수신 |

</div>

## 4. 주문자 / 처방자(수령인) 정보

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/rx-prescription-review-04.png').default}
  alt="Purchaser Info / Patient & Shipping Info — 주문자, 처방자(수령인), 배송 정보"
  boxes={[
    {x: 1.4, y: 0.6, w: 83.4, h: 16.0},
    {x: 1.4, y: 17.8, w: 83.4, h: 51.6},
  ]}
/>

주문한 고객(Purchaser)과 처방자이자 제품을 받을 수령인(Patient)의 정보, 배송 정보를 확인합니다.

<div className="table-stretch">

| 구분 | 항목 | 비고 |
|---|---|---|
| **Purchaser Info**<br/><span className="label-sub">주문자 정보</span> | `Name` (이름)<br/>`Phone` (전화번호)<br/>`Email` (이메일) | • 온라인 주문에서 수신<br/>• <mark>**수정 불가**</mark> |
| **Patient & Shipping Info**<br/><span className="label-sub">처방자(수령인) 정보</span> | `Patient Name` (처방자 이름)<br/>`Phone` (전화번호)<br/>`Email` (이메일) | • 온라인 주문에서 수신<br/>• <mark>**승인(Confirm) 전까지 수정 가능**</mark><br/>• 승인 후에는 **Rx Work Management**에서 출고 전까지 수정 가능<br/>• `Patient Name`은 처방전의 환자 이름으로 자동 입력 |
| **Shipping Type**<br/><span className="label-sub">배송 방식</span> | `Ship to Address` (주소지 배송)<br/>`Ship to Store` (매장 수령) | <mark>**AU는 `Ship to Address`만 사용**</mark> (`Ship to Store` 미사용) |
| **Shipping Address**<br/><span className="label-sub">배송 주소</span> | `Address` / `Address Line 2`<br/>`CITY`, `STATE`, `ZIP` | <mark>**출고 전까지 (라벨 등록 / 출력 전) 수정 가능**</mark> |

</div>

## 5. 승인 (Confirm)

1. 필수 정보가 모두 입력되었는지 확인합니다. (처방 값, EXP Date, PD, 처방전 파일 1개 이상, 연락처, 배송 주소, 렌즈 제품 매핑)
2. **Confirm**을 클릭합니다.
3. `Do you want to ‘ Confirm’ approval for this task?` 팝업에서 **Confirm**을 클릭합니다.
4. 승인된 주문은 `Rx Work Management`에서 작업을 관리합니다.

<div className="blockquote-warning">

> **Confirm / Reject 버튼이 비활성화된 경우**
> - 계정에 **승인 권한**이 있는지
> - 주문 상태가 `Request`인지
> - 필수 항목(Index 패널)이 모두 완료되었는지 확인해 주세요.

</div>

## 6. 반려 (Reject)

1. **Reject**를 클릭합니다.
2. `Please select a reason for Reject.` 팝업에서 반려 사유를 선택합니다.
3. **Reject**를 클릭하면 OMS에 주문 취소로 전달되고, 자사몰(GM 어드민)에서 환불까지 처리됩니다.

<div className="table-stretch">

| 반려 사유 | 세부 사유 (필수) |
|---|---|
| Frame is Out of stock | — |
| Do Not Process | Invalid Prescription Types / Out of recommended range / Add power |
| Prescription Information Needs Verification | Unable to verify the image / Missing prescription information / International prescription |
| Incompatible Lens-Frame | — |
| Do Not Accept P.O box shipping | — |
| Payment Method Change / Purchase a Different Product / Change of Mind | — |
| System Error / Policy Violation / Other | — |

</div>

<div className="blockquote-gray">

> 반려는 되돌릴 수 없으며, 환불은 자사몰(GM 어드민)에서 자동 처리됩니다.

</div>

## 📋 수정 이력

<div className="table-stretch">

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-21 | AU Online RX 프로세스 흐름도 추가 · 단계 세분화, 화면 이미지 추가, RX 주문 상세(Index) · 처방 상세 정보 · 주문자 / 처방자(수령인) 정보 섹션 정리 | Wooju(Landa) |

</div>
