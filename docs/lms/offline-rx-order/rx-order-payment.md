---
sidebar_label: RX 주문 생성 및 조회
sidebar_position: 1
author: Wooju
created: "2026-04-27"
countries: [us]
---

# 📍 RX 주문 생성 및 조회

> 스토어에서 Offline RX 주문이 생성되는 방식과, 생성된 주문을 BO에서 조회하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">BO > Order List</span> / <span className="path-badge">POS > RX Operation</span>

---

## 1. 결제 POS 연동을 통한 주문 생성

Shopify(US / CA 기준)에서 결제가 이루어진 경우, **Unfulfill 상태의 주문**으로 자동 생성됩니다.

| Step | 내용 |
|:---:|---|
| **a** | Shopify POS에서 RX 상품을 결제합니다 |
| | *고객 인도 시점에 '매출(Sales)'로 처리되어야 하므로, 미완성 주문의 개념으로 생성됩니다* |
| **b** | 생성된 주문 정보는 IIC BO 내 아래 메뉴에서 확인할 수 있습니다 |
| | ⅰ. <span className="path-badge">BO > Order List</span> — 최초 상태 : `Pending` |
| | ⅱ. <span className="path-badge">POS > RX Operation</span> — 최초 상태 : `Unready` |
| **c** | Netsuite 내에도 SO(Sales Order)가 함께 생성됩니다 |

:::tip 재고 흐름 프로세스
주문 생성 시 **Store Sales 1 → Store RX HLD** 로케이션으로 재고 이동(Movement)이 발생합니다.
:::

---

## 2. POS 자체 생성

POS에서 직접 주문을 생성하는 경우입니다. 업데이트 일자 기준은 고려되지 않습니다.
