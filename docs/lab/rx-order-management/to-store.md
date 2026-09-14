---
sidebar_label: 스토어 배송 (B2B)
sidebar_position: 2
author: Wooju
created: "2026-04-27"
countries: [us]
---

# 📍 To Store (B2B)

> 승인(Confirm)된 RX 주문을 Lab에서 작업한 후, 스토어로 배송하여 고객에게 인도하는 B2B 프로세스를 안내합니다.
>
> 경로 : <span className="path-badge">BO > RX Work Management > To Store</span>

---

## 1. B2B 작업 프로세스

| Step | 내용 |
|:---:|---|
| **1** | **작업 지시서 출력** — 리스트에서 일괄 또는 상세에서 단건으로 출력합니다 |
| **2** | **작업 진행** — 작업 지시서와 실물을 트레이에 맞게 정리한 후 작업합니다 (Inhouse / Outsource) |
| **3** | **상태 업데이트** — 작업 상황에 따라 Work Status를 변경합니다 |
| **4** | **출고 등록** — `Outbound Inspection` 상태의 주문에 대해 **Outbound Registration**을 실행합니다 |
| | BO에서 스토어로 재고를 일괄 이동하기 위한 Outbound(TO)가 생성됩니다 |
| **5** | **상태 자동 전환** — 출고 등록이 완료되면 `Outbound Inspection` → `Completed`로 자동 전환됩니다 |

---

## 2. 스토어 입고 및 고객 인도

출고가 완료된 이후, 스토어에서 진행하는 후속 프로세스입니다.

| Step | 내용 | 경로 |
|:---:|---|---|
| **6** | 스토어에 제품이 도착하면 재고를 확인하고 **입고 확정** 처리를 합니다 | <span className="path-badge">Inventory > Inbound</span> |
| **7** | 입고가 완료된 주문에 대해 고객에게 **입고 완료 및 방문 요청 메일**을 발송합니다 | <span className="path-badge">POS > RX Operation</span> |
| **8** | 고객이 방문하여 제품을 수령하면 **Shopify Order Fulfillment** 처리를 완료합니다 | |
| | Fulfillment 완료 시점에 작업 상태가 `Finalized`로 자동 전환됩니다 | |

:::tip 라벨 출력
생성된 출고(TO)의 라벨은 <span className="path-badge">Inventory > Outbound Order List</span>에서 출력할 수 있습니다.
:::
