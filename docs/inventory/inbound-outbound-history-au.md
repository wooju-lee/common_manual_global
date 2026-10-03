---
sidebar_label: Inventory In/Out History (입/출고 내역)
sidebar_position: 10
author: Wooju(Landa)
created: "2026-10-04"
countries: [au]
---

# 📍 Inventory In/Out History (입/출고 내역)

> 스토어 간 재고 이동 건의 **출고 요청 → 출고 → 입고 확정** 진행 현황을 제품별로 한 화면에서 확인하는 메뉴입니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory In/Out History</span>

## 👉 언제 사용하나요?

- S2S(스토어 간) 이동 건이 **입고 확정까지 완료되었는지** 확인할 때
- 이동 건의 **출고 요청 · 출고 · 입고 확정 일시와 처리 계정**을 확인할 때

## 1. 리스트 검색

<div className="img-placeholder">📷 [Image] Inventory In/Out History 검색 조건</div>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **From Store Location** | 출발 Brand / BP / Store / Location 선택 | <mark>**상위 항목을 먼저 선택**</mark>해야 하위 항목 선택 가능 |
| **To Store Location** | 도착 Brand / BP / Store / Location 선택 | <mark>**상위 항목을 먼저 선택**</mark>해야 하위 항목 선택 가능 |
| **Type** | 이동 유형 (`S2S` / `L2S` / `S2L`) | |
| **Search Period** | 기간 기준 선택 후 조회 기간 입력 | • 기준: `Request Date`(출고 요청일) / `Confirmed Inbound Date`(입고 확정일) / `Registration Date`(등록일)<br/>• 기본: `Registration Date`, 최근 30일 |
| **검색어** | 제품 코드/명, 바코드, 등록자(Created By), 입고 확정자(Approved By) | 2자 이상 입력 |

- `Request Date` 기준으로 검색하면, 출고 요청 없이 바로 등록한 출고 건은 조회되지 않습니다.

<div className="blockquote-gray">

> AU는 스토어 간 이동(**S2S**)만 사용합니다. L2S / S2L 유형은 해당되지 않습니다.

</div>

## 2. 리스트 컬럼

<div className="img-placeholder">📷 [Image] Inventory In/Out History 목록</div>

| 컬럼 | 설명 |
|---|---|
| **Request Date**<br/><span className="label-sub">출고 요청일</span> | 출고 요청 등록 일시. 요청 없이 바로 출고 등록한 건은 `-` |
| **Confirmed Inbound Date**<br/><span className="label-sub">입고 확정일</span> | 입고 확정 일시. 확정 전에는 `-` |
| **Registration Date**<br/><span className="label-sub">등록일</span> | 출고 등록 일시 |
| **In/Outbound Type**<br/><span className="label-sub">이동 유형</span> | `S2S` / `L2S` / `S2L` |
| **Brand**<br/><span className="label-sub">브랜드</span> | 브랜드명 |
| **From Store Location**<br/><span className="label-sub">출발 스토어</span> | 출발 스토어 코드 / 명 |
| **From Location Information**<br/><span className="label-sub">출발 로케이션</span> | 출발 로케이션 코드 / 명 |
| **To Store Location**<br/><span className="label-sub">도착 스토어</span> | 도착 스토어 코드 / 명 |
| **To Location Information**<br/><span className="label-sub">도착 로케이션</span> | 도착 로케이션 코드 / 명 |
| **Product Info**<br/><span className="label-sub">제품</span> | 제품 코드 / 명 / 바코드 |
| **Product Category 1**<br/><span className="label-sub">제품 카테고리 1</span> | HQ SAP 마스터 정보 |
| **Product Category 2**<br/><span className="label-sub">제품 카테고리 2</span> | HQ SAP 마스터 정보 |
| **Outbound Request Qty**<br/><span className="label-sub">출고 요청 수량</span> | 승인된 출고 요청 수량. 요청 없이 바로 출고 등록한 건은 `-` |
| **Outbound Qty**<br/><span className="label-sub">출고 수량</span> | 출고 수량 |
| **Confirmed Inbound Qty**<br/><span className="label-sub">입고 확정 수량</span> | 입고 확정 수량. 확정 전에는 `-` |
| **Created By**<br/><span className="label-sub">등록자</span> | 출고를 등록한 계정 (출고 요청 건은 요청을 승인한 계정) |
| **Approved By**<br/><span className="label-sub">입고 확정자</span> | 입고를 확정한 계정 |

- 출고가 등록되면 목록에 표시되며, 승인 전인 출고 요청 건은 표시되지 않습니다.
- <mark>**Confirmed Inbound Date / Qty가 `-`이면 아직 입고 확정 전**</mark>인 건입니다.
- **Excel Export**로 현재 조건의 목록을 다운로드할 수 있습니다.

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-04 | AU 메뉴 생성 | Wooju(Landa) |
