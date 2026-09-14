---
sidebar_label: RX Prescription 조회 및 승인 / 반려
sidebar_position: 1
author: Wooju
created: "2026-04-27"
countries: [us]
---

# 📍 RX Prescription 조회 및 승인 / 반려

> 스토어 또는 온라인에서 접수된 RX 처방 정보를 검토하고, 작업 가능 여부에 따라 승인 또는 반려 처리하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">BO > RX Prescription Review</span>

---

## 1. 조회 조건

이 메뉴에는 **RX Approval Status가 `Request`인 주문만** 노출됩니다.

| 채널 | `Request` 전환 시점 |
|---|---|
| **Offline** | 스토어에서 필수 정보 저장이 완료된 시점 |
| **Online** | `Shipment` 정보가 수신된 시점 |

---

## 2. 승인 (Confirm)

처방 정보를 확인한 후, 작업이 가능하다고 판단되면 **Confirm** 처리합니다.

| 항목 | 내용 |
|---|---|
| **승인 후 상태** | <span className="path-badge">RX Work Management</span>에서 `Pending`(작업 대기) 상태로 확인 가능 |
| **Offline** | 설정된 멤버십 기준으로 주문 정보를 Admin에 전송합니다 `→ ADM` |
| **Online** | OMS로 승인 결과를 전송합니다 `→ OMS` |

---

## 3. 반려 (Reject)

작업이 불가하다고 판단되면 **Reject** 처리합니다. 반려 시 해당 RX 주문은 **즉시 취소(환불)** 처리됩니다.

| 항목 | 내용 |
|---|---|
| **Offline** | Shopify Refund 처리 요청을 전송합니다 `→ Shopify` |
| **Online** | OMS로 환불 요청을 전송합니다 `→ OMS` |

:::tip 운영 참고
- **Optician이 있는 스토어** : 스토어에서 직접 Confirm 처리가 가능합니다.
- **Optician이 없는 스토어** : US 법인 Lab에서 검토 및 처리합니다.
:::
