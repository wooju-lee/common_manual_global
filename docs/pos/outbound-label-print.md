---
sidebar_label: Outbound Label Print
sidebar_position: 8
author: Wooju(Landa)
created: "2026-04-21"
countries: [us]
---

# Outbound Label Print

> RX 출고(Store > Lab)의 진행 상황을 확인하고 배송 라벨을 출력하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > FRONT POS > Outbound Label Print</span>

## 1. Outbound Label Print 목록

<span className="path-badge">Front POS > Outbound Label Print</span> 에서 출고 목록의 진행 사항을 확인합니다.

| 항목 | 설명 |
|---|---|
| **Create Date** | 출고 생성 일시 |
| **Outbound No.** | 출고 번호 |
| **Order No.** | 주문 번호 |
| **Product Info** | 제품 코드 / 바코드 |
| **Qty** | 수량 |
| **Tracking No.** | 배송사 송장 번호 |
| **Print** | 라벨 등록 요청 및 출력 버튼 |

## 2. 출력 절차

> 1. 출고 등록 완료 후, `Tracking No.`가 성공적으로 수신되면 출력 가능 상태로 전환됩니다.
> 2. **Print shipping labels** 버튼이 활성화됩니다.
> 3. 버튼 선택 시 프린터 시스템 팝업 노출 후, **B2B 송장 1개**가 라벨 프린터로 출력됩니다.

:::danger 처리 실패 시
버튼 선택 시 우측 상단에 시스템 **실패 얼럿**이 노출됩니다. 어떤 처리에서 에러가 발생했는지 확인 후, 시스템 Operation 채널(Slack)을 통해 **IT팀에 대응 요청**합니다.
:::

---

<div className="qna-section">

## ❓ FAQ

> **Q. 출고 등록 후 Tracking No.가 생성되지 않아요.**
>
> A. TMS 배송 요청이 정상 처리되었는지 확인해 주세요.
>
> 수신된 정보가 없는 경우 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

> **Q. 라벨 출력 버튼이 활성화되지 않아요.**
>
> A. <u>Tracking No.</u>가 정상 수신되어야 라벨 출력이 가능합니다.
>
> 배송 라벨 등록 단계에서 정보 수신이 완료되었는지 확인해 주세요.

</div>

---

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-04-21 | 최초 작성 | Wooju(Landa) |
| 2026-10-03 | RX Operation / Outbound Label Print 문서 분리 | Wooju(Landa) |
