---
sidebar_label: Rx Prescription Review (처방 조회 및 승인 / 반려)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# Rx Prescription Review (처방 조회 및 승인 / 반려)

> 온라인 RX 주문의 처방 정보를 검토하고 <strong>승인(Confirm) 또는 반려(Reject)</strong>하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > RX (Lens) > Rx Prescription Review</span>

## 👉 AU RX 운영 방식

- AU의 RX 비즈니스는 **온라인 주문만** 운영합니다.
- 렌즈 작업은 오피스 인근의 외부 랩 **OWNDAYS**에서 진행하며, 온라인 담당자가 제품과 처방전을 직접 전달·수거합니다.

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 온라인 결제 완료 → OMS를 거쳐 BO LMS로 주문 수신 (`Request`) | 온라인 스토어 → IIC BO (자동) |
| **2** | 처방 정보 검토 후 **Confirm** 또는 **Reject** | 온라인 담당자 |
| **3-A** | Confirm → 렌즈 작업 진행 👉 **[To Customer 바로가기](/docs/lms/rx-order-management/to-customer-au)** | 온라인 담당자 |
| **3-B** | Reject → OMS로 결과 전송 → 환불 처리 | OMS / 어드민 |

## 1. 처방 검토 목록 조회

<div className="img-placeholder">📷 [Image] Rx Prescription Review 목록 및 상태 카드</div>

| 검색 조건 | 설명 |
|---|---|
| **BP / Store** | BP 선택 후 스토어 선택 (복수 선택 가능) |
| **Channel** | `ALL` / `ONLINE` / `OFFLINE` (AU는 `ONLINE`) |
| **Review status** | `Request` / `Confirm` / `Reject` / `Canceled` |
| **Search Period** | `Order Date` 또는 `Approval Date` 기준 (기본: 최근 30일) |
| **검색어** | 주문번호, 스토어 코드/명, 고객명, 전화번호, 이메일 (2자 이상) |

| 상태 | 의미 |
|---|---|
| **Request** | 처방 검토 대기 — 승인/반려 가능 |
| **Confirm** | 승인 완료 — 렌즈 작업 진행 |
| **Reject** | 반려 — 주문 취소(환불) 진행 |
| **Canceled** | 주문 취소 |

목록의 행을 클릭하면 상세 화면으로 이동합니다.

## 2. 처방 정보 확인

<div className="img-placeholder">📷 [Image] Rx Prescription Review 상세 — 우측 Index 패널</div>

상세 화면 우측 **Index** 패널에서 항목별 입력 완료 여부(초록색 체크)를 확인할 수 있습니다.

| 섹션 | 확인 내용 |
|---|---|
| **Customer Info** | 고객 멤버십 정보 |
| **Order Info** | 주문 일자, 주문 제품. 렌즈 수량만큼 **렌즈 제품 매핑** 필요 (`In This Order` 또는 `Product Search`) |
| **Prescription Values** | `PD`(Single / Dual), 좌안 `OS (Left Eye)` / 우안 `OD (Right Eye)`의 `Sphere`, `Cylinder`, `Axis`, `PD`, `OC` |
| **Documents** | 처방전 파일(JPG / PNG / PDF, 최대 10MB)과 `EXP Date`(유효기간) |
| **Delivery** | 고객 이름·전화번호·이메일, 배송 주소 (`Address`, `CITY`, `STATE`, `ZIP`) |
| **Comment** | 내부 메모 |

- 수정한 내용은 **Save**로 저장할 수 있습니다.

## 3. 승인 (Confirm)

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

## 4. 반려 (Reject)

1. **Reject**를 클릭합니다.
2. `Please select a reason for Reject.` 팝업에서 반려 사유를 선택합니다.
3. **Reject**를 클릭하면 반려 결과가 OMS로 전송되고, 주문은 환불 처리됩니다.

| 반려 사유 | 세부 사유 (필수) |
|---|---|
| Frame is Out of stock | — |
| Do Not Process | Invalid Prescription Types / Out of recommended range / Add power |
| Prescription Information Needs Verification | Unable to verify the image / Missing prescription information / International prescription |
| Incompatible Lens-Frame | — |
| Do Not Accept P.O box shipping | — |
| Payment Method Change / Purchase a Different Product / Change of Mind | — |
| System Error / Policy Violation / Other | — |

<div className="blockquote-gray">

> 반려는 되돌릴 수 없으며, 환불은 OMS에서 처리됩니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
