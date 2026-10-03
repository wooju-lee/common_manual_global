---
sidebar_label: Inventory Snapshot (재고 스냅샷 조회)
sidebar_position: 9
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Snapshot (재고 스냅샷 조회)

> 특정 날짜 기준의 재고 현황을 조회하는 방법을 안내합니다. 스냅샷은 **AU 현지 시간 기준 매일 23:00**에 자동 저장됩니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory Snapshot</span>

## 👉 스냅샷이란?

| 항목 | 내용 |
|---|---|
| **저장 시점** | AU 현지 시간 기준 매일 23:00 |
| **저장 대상** | 전 스토어 / 로케이션의 재고 리스트 |
| **용도** | 과거 특정일의 재고 확인, 마감 재고 확인 |
| **SAP 전송** | 스냅샷 저장 시점에 스토어-로케이션 기준 전체 재고를 한국 법인(SAP)으로 전송 |

<div className="blockquote-gray">

> 스냅샷은 저장 시점의 재고를 "사진 찍듯" 기록한 것이므로, 이후의 판매·입출고·조정은 반영되지 않습니다. 현재 재고는 실시간 재고 조회를 이용해 주세요. 👉 **[Inventory List 바로가기](/docs/inventory/inventory-list-au)**

</div>

## 1. 조회 방법

<div className="img-placeholder">📷 [Image] Inventory Snapshot 검색 조건 및 목록</div>

| 검색 조건 | 필수 | 설명 |
|---|:---:|---|
| **Brand / BP** | ✔ | 브랜드, BP 선택 |
| **Store** | ✔ | 스토어 선택 (복수 선택 가능) |
| **Location** | | 로케이션 선택 (복수 선택 가능) |
| **Save Date** | ✔ | 스냅샷 기준 날짜 (기본: 오늘) |
| **검색어** | | 제품 코드/명, 바코드 |

- 필수 조건을 선택하기 전에는 `Please select a period and location to view the snapshot list.` 안내가 표시됩니다.
- 조회 결과가 있으면 **Excel Export**로 다운로드할 수 있습니다.

## 2. 조회 항목

| 항목 | 설명 |
|---|---|
| **Save Date** | 스냅샷 저장일 |
| **BP / Store / Location / Product Info** | 대상 정보 |
| **IIC BO** — On-hand / Available / Outbound Pending / Adjustment Pending / Pending Inbound | 저장 시점의 BO 재고 수량 |

<div className="blockquote-gray">

> US·CA에서 표시되는 ERP / WMS 수량 및 차이 컬럼은 연동이 없는 AU에서는 표시되지 않습니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
