---
sidebar_label: Store → Lab Outbound (Store → Lab(랩실) 출고 등록)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-04-21"
updated: "2026-10-28"
countries: [ca]
---

# 📍 Store → Lab Outbound (Store → Lab(랩실) 출고 등록)

> 처방 정보 검토 결과(승인 / 반려)를 확인하고, 승인된 RX 주문을 Lab(랩실)으로 출고 등록하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > POS > RX Operation View</span>

👉 RX 주문 조회 · 처방 정보 등록은 **[Shopify 매출 조회 및 고객 정보 등록 바로가기](/docs/pos/rx-operation/shopify-rx-customer-info-ca)**

## 1. 처방정보 검토를 통해 승인 / 반려 (From Lab Optician)

![Lab 확인 및 승인](../img/스크린샷%202026-04-21%2018.41.07.png)

Lab 작업자(렌즈 작업자)는 등록된 정보를 확인해, 가능 여부를 판단하여 **Confirm** 또는 **Reject** 처리를 진행합니다.

| 결과 | 설명 |
|---|---|
| **Confirm** | 작업 가능 → 스토어에서 출고 등록 진행 |
| **Reject** | 작업 불가 → 사유 확인 후 재등록 필요 |

스토어의 경우 옵티션이 존재할 경우, 처방 필수 정보를 모두 등록하고 **Confirm**까지 처리합니다.

## 2. 컨펌된 주문에 한하여, 출고 생성 (Outbound Registration)

![출고 생성](../img/스크린샷%202026-04-21%2018.46.51.png)

컨펌된 여러 RX 주문을 Lab 실로 일괄적으로 보내기 위해, 보낼 주문을 선택하여 출고를 등록합니다.

> **Step 1.** <mark>**Approval Status가 Confirm**</mark>인 주문을 선택하여 출고를 생성합니다.
>
> Lab 작업자가 작업 가능하다고 승인한 주문만 출고 대상입니다.

> **Step 2.** 생성된 출고는 <span className="path-badge">Front POS > Outbound Label Print</span> 에서 **1개의 출고 목록**으로 확인할 수 있습니다. → [Outbound Label Print](/docs/pos/outbound-label-print-ca)

> **Step 3.** 여러 주문을 모아 1개의 출고로 생성했기 때문에, **송장 1개**를 출력합니다.

:::danger 배송사 컨택 필요
송장 출력과 배송사의 물품 픽업은 **별개**입니다. 배송사 컨택은 **별도로 진행**해야 합니다.
:::

<div className="qna-section">

## ❓ FAQ

> **Q. 여러 주문을 하나의 출고로 묶을 수 있나요?**
>
> A. RX Operation View에서 <u>Confirm</u> 상태인 주문들을 모아 1건의 출고로 등록할 수 있으며, <u>B2B 송장 1개</u>로 출력됩니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-04-21 | 최초 작성 | Wooju(Landa) |
| 2026-10-03 | RX Operation / Outbound Label Print 문서 분리 | Wooju(Landa) |
| 2026-10-28 | CA RX Operation 메뉴 재구성 — 주문 조회 · 고객 정보 등록 문서 분리 | Wooju(Landa) |
