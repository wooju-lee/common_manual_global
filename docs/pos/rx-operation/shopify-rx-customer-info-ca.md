---
sidebar_label: Shopify Sales Inquiry & Customer Info (Shopify 매출 조회 및 고객 정보 등록)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-28"
countries: [ca]
---

# 📍 Shopify Sales Inquiry & Customer Info (Shopify 매출 조회 및 고객 정보 등록)

> Shopify에서 발생한 RX 매출 주문을 조회하고, 처방 · 고객 정보를 등록하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > POS > RX Operation View</span>

## 👉 RX 주문 전체 흐름

> **Unready** → **Request** → **Confirm** → **출고 등록** → **배송 라벨 출력**

| 단계 | 상태 | 처리 주체 | 설명 |
|:---:|---|---|---|
| 1 | **Unready** | Shopify | RX 주문 생성 (필수 정보 미등록) |
| 2 | **Request** | 스토어 | 처방 정보 등록 완료 → Lab에 요청 |
| 3 | **Confirm / Reject** | Lab 작업자 | 정보 확인 후 가능 여부 판단 |
| 4 | **Confirm** | 스토어 | 승인된 주문 → 출고 등록 가능 |
| 5 | **출고 완료** | 스토어 | 출고 등록 + 배송 라벨 출력 |

## 1. RX 주문 확인

![RX Operation List](../img/rx-operation-list.png)

Shopify에서 일반 매출과 달리 **RX 매출**이 발생되면, POS > RX Operation View 목록에서 **Unready** 상태로 확인할 수 있습니다.

<div className="blockquote-warning">

> RX 주문은 반드시 Shopify에서 **Unfulfill** 처리가 반영된 주문으로 생성해야 합니다.

</div>

| 상태 | 설명 |
|---|---|
| **Unready** | 주문만 생성된 상태로, 필수 정보가 아직 반영되지 않은 **미준비 주문** |

## 2. 처방 & 고객 정보 등록

![처방 & 고객 정보 등록](../img/스크린샷%202026-04-21%2018.40.11.png)

> **Step 1.** 스토어 옵티션 담당자는 주문 상세 내 처방전 필수 정보를 선택/기재해 저장합니다.

<div className="blockquote-gray">

> 고객이 .com 온라인 마이페이지에 '미리' 처방전을 저장해둔 경우, 멤버십을 조회하여 사전 등록된 처방 정보를 선택할 수 있습니다.
>
> 1. 멤버십 조회 방식과 동일하게 **멤버십을 조회**합니다.
> 2. 해당 ID에 사전 등록된 **처방전 목록**이 조회됩니다.
> 3. 처방전 1개를 선택한 후, **View** 버튼을 통해 저장된 처방전 이미지를 확인할 수 있습니다.
> 4. 처방전을 선택하면, 하단의 **Prescription** 정보가 자동으로 반영됩니다.
>
> - 만료 기간이 지난 처방전은 목록에서 **자동 제외**되어 표시되지 않습니다.
> - <mark>멤버십 정보에 포함된 처방전을 선택하면 Prescription 정보가 자동 반영되므로, 별도 입력이 필요 없습니다.</mark>

</div>

> **Step 2.** 처방 정보 등록이 완료되면 주문 상태가 **Request**로 변경되며, Lab 작업자에게 요청이 전달됩니다.
>
> 스토어 옵티션의 경우 `IIC BO > RX > Prescription Review` 에서 직접 **Confirm** 처리를 진행합니다.

> 👉 Confirm 이후 출고 등록은 **[Store → Lab(랩실) 출고 등록 바로가기](/docs/pos/rx-operation/store-to-lab-outbound-ca)**

<div className="qna-section">

## ❓ FAQ

> **Q. RX Operation View에서 주문이 보이지 않아요.**
>
> A. Shopify에서 해당 주문이 <u>Unfulfill</u> 상태로 생성되었는지 확인해 주세요.
>
> Unfulfill 처리가 되지 않은 주문은 RX Operation View에 표시되지 않습니다.

> **Q. 고객의 처방전이 조회되지 않아요.**
>
> A. 만료 기간이 지난 처방전은 <u>자동 제외</u>되어 표시되지 않습니다.
>
> 고객에게 유효한 처방전을 온라인 마이페이지에 재등록하도록 안내해 주세요.

> **Q. 처방전 이미지를 확인하고 싶어요.**
>
> A. 처방전 목록에서 1개를 선택한 후 <u>View</u> 버튼을 통해 저장된 처방전 이미지를 조회할 수 있습니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-28 | CA 최초 작성 (기존 Store > Lab 출고 생성 1~2장 분리) | Wooju(Landa) |
