---
sidebar_label: Inventory Snapshot (재고 스냅샷 조회)
sidebar_position: 9
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Snapshot (재고 스냅샷 조회)

> 특정 날짜 기준의 재고 현황을 조회하는 방법을 안내합니다. 스냅샷은 **스토어 현지 시간 기준 매일 23:00**에 자동 저장됩니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory Snapshot</span>

## 👉 스냅샷이란?

| 항목 | 내용 |
|---|---|
| **저장 시점** | 스토어 현지 시간 기준 매일 23:00 |
| **저장 대상** | 전 스토어 / 로케이션의 재고 리스트 |
| **용도** | 과거 특정일의 재고 확인, 마감 재고 확인 |
| **SAP 전송** | 스냅샷 저장 시점에 스토어-로케이션 기준 전체 재고를 한국 법인(SAP)으로 전송 |

<div className="blockquote-gray">

> 스냅샷은 저장 시점의 재고를 "사진 찍듯" 기록한 것이므로, 이후의 판매·입출고·조정은 반영되지 않습니다. 현재 재고는 실시간 재고 조회를 이용해 주세요. 👉 **[Inventory List 바로가기](/docs/inventory/inventory-list-au)**

</div>

## 1. 리스트 검색

<div className="img-placeholder">📷 [Image] Inventory Snapshot 검색 조건</div>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **Brand / BP** | 브랜드, BP 선택 | • 필수<br/>• <mark>**브랜드를 먼저 선택**</mark>해야 선택 가능 |
| **Store** | 스토어 선택 (복수 선택 가능) | • 필수<br/>• <mark>**BP를 먼저 선택**</mark>해야 선택 가능 |
| **Location** | 스토어 내 로케이션 선택 (복수 선택 가능) | <mark>**Store를 먼저 선택**</mark>해야 선택 가능 |
| **Save Date** | 조회할 스냅샷 일자 (하루 단위) | 필수 |
| **검색어** | 제품 코드/명, 바코드 | 2자 이상 입력 |

## 2. 리스트 컬럼 및 조회 방법

<div className="img-placeholder">📷 [Image] Inventory Snapshot 목록</div>

| 컬럼 | 설명 |
|---|---|
| **Save Date**<br/><span className="label-sub">저장일</span> | 스냅샷 저장일 |
| **BP Information**<br/><span className="label-sub">법인</span> | 법인 코드 / 명 |
| **Store Information**<br/><span className="label-sub">스토어</span> | 스토어 코드 / 명 |
| **Location Information**<br/><span className="label-sub">로케이션</span> | 로케이션 코드 / 명 |
| **Product Info**<br/><span className="label-sub">제품</span> | 제품 코드 / 명 / 바코드 |
| **Product Category 1**<br/><span className="label-sub">제품 카테고리 1</span> | HQ SAP 마스터 정보 |
| **Product Category 2**<br/><span className="label-sub">제품 카테고리 2</span> | HQ SAP 마스터 정보 |
| **Collection**<br/><span className="label-sub">제품 컬렉션</span> | HQ SAP 마스터 정보 (없으면 `-`) |
| **On-hand Qty**<br/><span className="label-sub">실재고</span> | 저장 시점의 실재고 |
| **Available Qty**<br/><span className="label-sub">가용 재고</span> | 저장 시점의 가용 재고 (실재고 − 출고 대기 − 조정 대기) |
| **Outbound Pending Qty**<br/><span className="label-sub">출고 대기</span> | 저장 시점의 출고 대기 수량 |
| **Adjustment Pending Qty**<br/><span className="label-sub">조정 대기</span> | 저장 시점의 조정 대기 수량 |
| **Pending Inbound**<br/><span className="label-sub">입고 예정</span> | 저장 시점의 입고 예정 수량 |

- 재고 수량 5개 컬럼은 화면에서 **IIC BO** 그룹 아래에 표시됩니다.
- 실재고(On-hand Qty)가 `0` 이하인 제품은 목록에 표시되지 않습니다.
- 스냅샷은 기본 조회 화면이 없으며, <mark>**브랜드 > 법인 > 스토어를 선택하면 일자(Save Date) 기준으로 조회**</mark>할 수 있습니다.
  - 선택 전에는 `Please select a period and location to view the snapshot list.` 안내가 표시됩니다.
- 조회 결과가 있으면 **Excel Export**로 다운로드할 수 있습니다.

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
