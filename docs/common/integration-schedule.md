---
sidebar_label: Integration Schedule (연동 스케줄)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-11-03"
countries: [us]
---

# 📍 Integration Schedule (연동 스케줄)

> 외부 시스템과 **언제, 어디서 어디로** 데이터를 주고받는지 정리한 표입니다.<br/>
> 시간은 모두 <mark>**스토어 현지 시간**</mark> 기준입니다.

## 정해진 시간에 주고받는 데이터

| 데이터 | 어디서 → 어디로 | 언제 | 횟수 |
|---|---|---|---|
| **재고 스냅샷 저장** | IIC BO 내부 저장 (NetSuite 재고 스냅샷도 함께 저장) | 매일 23:00 | 하루 1회 |
| **재고 스냅샷** (전일 23:00 기준) | IIC BO → SAP | 매일 01:00 | 하루 1회 |
| **온라인 마감 재고** (온라인 스토어 US1004 판매 로케이션) | NetSuite → OMS | 매일 01:00 | 하루 1회 |
| **WMS 창고 재고 스냅샷** (US1006 가용 · 불량 · 보류) | WMS(LXP) → IIC BO | WMS 측 일정 | WMS 측 일정 |
| **매출** | SAP가 IIC BO에서 가져감 | SAP 측 일정 | — |
| **공급가** | SAP → IIC BO | 매일 01:30 | 하루 1회 |
| **판매가** | SAP → IIC BO | 매일 한국 시간 05:10 (미국 동부 전날 15:10 · 서부 전날 12:10, 서머타임 기간은 +1시간) | 하루 1회 |
| **SAP 입고 예정** (→ 입고 생성 · NetSuite PO · WMS 입고 오더) | SAP → IIC BO | `확인 중` | — |
| **상품 마스터** | IIC BO → WMS(LXP) | `확인 중` | — |
| **온라인 RX 랩 출고 생성** (컨펌된 주문) | IIC BO → NetSuite · WMS | `확인 중` | 하루 1회 |
| **스토어 픽업 만료 건 자동 취소** | IIC BO → OMS | 매일 00:00 | 하루 1회 |
| **일일 리포트** (확정된 리포트) | IIC BO → SAP | `확인 중` | — |
| **스토어 마스터** | SAP → IIC BO | `확인 중` | — |

## 바로 주고받는 데이터 (실시간)

| 데이터 | 어디서 → 어디로 | 언제 |
|---|---|---|
| **온라인 주문 · 반품** | OMS → IIC BO | 즉시 |
| **매출 · 반품** | IIC BO → NetSuite | 즉시 |
| **Shopify POS 매출** | Shopify → IIC BO | 즉시 |
| **온라인 재고 변동** | IIC BO → OMS | 즉시 |
| **WMS 입고 · 출고 결과** | WMS(LXP) → IIC BO | 즉시 |
| **오프라인 RX 주문 · 멤버십** | IIC BO → 자사몰(GM Admin) | RX Confirm 시 |

<div className="blockquote-gray">

> `확인 중`인 항목은 실행 시각을 확인한 뒤 업데이트됩니다.<br/>
> 정해진 시간이 지나도 데이터가 넘어오지 않으면 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-11-03 | 최초 작성 (코드 기준) | Wooju(Landa) |
