---
sidebar_label: Inventory Snapshot (WH) (재고 스냅샷 · WH)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-03"
countries: [us]
---

# 📍 Inventory Snapshot (WH) (재고 스냅샷 · WH)

> 물류 창고(Warehouse) 기준 재고 스냅샷을 조회하는 기능입니다.
>
> 경로 : `Inventory > Snapshot`

## 👉 WH 스냅샷이란?

물류 창고(WH) 재고를 **IIC BO · ERP(NetSuite) · WMS(LXP)** 세 시스템 기준으로 나란히 비교하는 화면입니다.

| 기준 | 저장 시점 |
|---|---|
| **IIC BO** | 스토어 현지 시간 기준 매일 23:00 자동 저장 |
| **ERP (NetSuite)** | ERP에서 스냅샷을 보내온 시점에 저장 |
| **WMS (LXP)** | WMS에서 스냅샷을 보내온 시점에 저장 |

<div className="blockquote-gray">

> 스냅샷은 저장 시점의 재고를 "사진 찍듯" 기록한 것이므로, 이후의 판매 · 입출고 · 이동 · 조정은 반영되지 않습니다.<br/>
> 현재 재고는 실시간 재고 조회를 이용해 주세요. 👉 **[Inventory List 바로가기](/docs/inventory/inventory-list)**

</div>

## 1. 리스트 검색

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **Brand / BP** | 브랜드, BP 선택 | |
| **Store** | WH 스토어 선택 (1개만 선택) | 필수 |
| **조회 날짜** | 조회할 스냅샷 일자 (하루 단위) | 필수 |
| **검색어** | 제품 코드 / 제품명 / 바코드 | 2자 이상 입력 |
| **차이 건만 보기** | BO-ERP 또는 BO-WMS 수량 차이가 있는 제품만 조회 | 선택 |

## 2. 비교 로케이션

한 행에 제품 1개씩, 로케이션별 수량과 시스템 간 차이(BO − ERP / BO − WMS)가 표시됩니다.

| 기준 | 비교 로케이션 |
|---|---|
| **IIC BO · ERP** | • Available(1110)<br/>• Online(온라인 스토어 1000)<br/>• Online Damage(온라인 스토어 1020)<br/>• Damage(1120)<br/>• Holding(1130)<br/>• Lost(1140)<br/>• Discontinued(1170)<br/>• PS Available(PS 스토어 1110)<br/>• TikTok(1150) |
| **WMS** | • Available(1110)<br/>• Damage(1120)<br/>• Holding(1130)<br/>• Lost(1140) |

- WMS는 Discontinued(1170) · TikTok(1150)을 따로 관리하지 않아 해당 컬럼이 없습니다. Discontinued 재고는 Available 차이에 포함됩니다.

<div className="qna-section">

## ❓ FAQ

> **Q. 스냅샷이 없는 날짜를 조회하면 어떻게 되나요?**
>
> A. 해당 날짜에 스냅샷이 저장되지 않았다면 조회 결과가 비어 있습니다. 스냅샷은 매일 자동 저장되지만, 시스템 점검 등의 사유로 누락될 수 있습니다.

> **Q. 실시간 재고와 수량이 다른 이유는 무엇인가요?**
>
> A. 스냅샷은 저장 시점의 재고이므로, 그 이후의 입출고 · 이동 · 조정이 반영되지 않습니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-09-15 | 최초 작성 | Wooju(Landa) |
| 2026-11-03 | 재고 스냅샷 조회(Overview) 문서 내용 이관 (코드 기준 검증) | Wooju(Landa) |
