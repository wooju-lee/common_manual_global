---
sidebar_label: Inventory Movement (로케이션 이동)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Movement (로케이션 이동)

> 하나의 스토어 안에서 로케이션 간 재고를 이동하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory Movement</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 로케이션 이동 순서

> **Movement Registration** → **스토어 · 출발/도착 로케이션 선택** → **제품 선택** → **수량 입력 후 Register**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 이동 등록 (출발 / 도착 로케이션 선택) | 👤 스토어 |
| **2** | 등록 즉시 출발 로케이션 차감 + 도착 로케이션 가산 | ⚙️ 자동 |

- 같은 스토어 안에서의 이동이므로 <mark>**입고 확정이나 승인 단계 없이 등록과 동시에 처리**</mark>됩니다.
- 처리 내역은 재고 이동 목록과 재고 원장에 기록됩니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-au)**

## 1. 이동 등록

<div className="img-placeholder">📷 [Image] Movement Registration — Location Inventory Movement 탭</div>

**Movement Registration** 버튼 → **Location Inventory Movement** 탭에서 3단계로 등록합니다.

| Step | 화면 | 입력 내용 |
|:---:|---|---|
| **1** | Set Before / After Movement Location | 스토어 선택 후 출발 로케이션(`Location (Before Movement)`)과 도착 로케이션(`Location (After Movement)`) 선택 |
| **2** | Processed Inventory Search | 이동할 제품 검색 · 선택 (`Inventory Qty` 확인) |
| **3** | Enter Movement Information | 제품별 이동 수량 입력, 필요 시 `Remarks` 선택 후 **Register** |

- 이동 수량은 <mark>**출발 로케이션의 가용 재고 기준**</mark>으로 입력하며, 가용 재고를 초과하면 등록할 수 없습니다.
- `Remarks` 선택값
  - `DP Setup Due to Theft` (도난으로 인한 DP 세팅)
  - `Initial DP Setup` (초기 DP 세팅)
  - `Damage` (손상)
  - `Inventory Allocation` (재고 분배)
  - `Temporary Hold` (일시 Holding)
  - `Etc.` (ETC)

<div className="blockquote-warning">

> <mark>**이동은 등록 즉시 반영되며 취소할 수 없습니다.**</mark><br/>
> 잘못 이동한 경우 반대 방향으로 다시 이동 등록해 주세요.

</div>

<div className="blockquote-gray">

> 매장의 SALES → DP 이동은 POS에서 더 간단히 처리할 수 있습니다. 👉 **[Inventory Transfer SALES → DP 바로가기](/docs/pos/front-pos-main/store-inventory-transfer-au)**

</div>

## 2. 엑셀 일괄 등록

<div className="img-placeholder">📷 [Image] Movement Registration — Inventory Bulk Upload 탭</div>

**Movement Registration** 버튼 → **Inventory Bulk Upload** 탭에서 **Download Upload Template**으로 양식(`Inventory_movement_upload_form_V2.xlsx`)을 받아 작성한 뒤 업로드합니다.

| 컬럼 | 필수 여부 | 입력 방법 |
|---|:---:|---|
| **Store Code (From)**<br/><span className="label-sub">출발 스토어 코드</span> | **필수** | 마스터 스토어 코드 |
| **Location Code (From)**<br/><span className="label-sub">출발 로케이션 코드</span> | **필수** | 마스터 로케이션 코드 |
| **Store Code (To)**<br/><span className="label-sub">도착 스토어 코드</span> | 선택 | 마스터 스토어 코드 (스토어 내 이동은 출발 스토어와 동일) |
| **Location Code (After)**<br/><span className="label-sub">도착 로케이션 코드</span> | **필수** | 마스터 로케이션 코드 |
| **Product Code**<br/><span className="label-sub">제품 코드</span> | **필수** | 마스터 SAP 제품 코드 |
| **Movement Qty**<br/><span className="label-sub">이동 수량</span> | **필수** | 출발 로케이션의 **가용 재고 기준**으로 입력하며, 초과 시 등록 불가 |
| **Remark**<br/><span className="label-sub">비고</span> | **필수** | 드롭다운에서 선택<br/>`DP Setup Due to Theft`(도난으로 인한 DP 세팅)<br/>`Initial DP Setup`(초기 DP 세팅)<br/>`Damage`(손상)<br/>`Inventory Allocation`(재고 분배)<br/>`Temporary Hold`(일시 Holding)<br/>`Etc.`(ETC) |

<div className="blockquote-gray">

> <mark>**한 파일에는 출발 스토어 · 출발 로케이션 · 도착 스토어가 모든 행에서 같아야 합니다.**</mark><br/>
> 도착 로케이션만 행마다 다르게 작성할 수 있으며, 같은 도착 로케이션 안에서 같은 제품 코드를 중복으로 작성할 수 없습니다.<br/>
> 스토어 내 이동은 출발 로케이션과 도착 로케이션이 달라야 합니다.

</div>

| 업로드 제한 | 기준 |
|---|---|
| 파일 | 엑셀 파일(.xlsx / .xls), 최대 5MB |
| 행 수 | 1회 최대 300행 |
| 도착 로케이션 수 | 1회 최대 20곳<br/>도착 로케이션별로 이동 건이 묶여 생성됩니다 |

- <mark>**한 행이라도 오류가 있으면 파일 전체가 등록되지 않습니다.**</mark> 오류 목록에서 해당 행을 수정한 뒤 다시 업로드해 주세요.

<div className="qna-section">

## ❓ FAQ

> **Q. 이동 등록이 되지 않아요.**
>
> A. 출발 또는 도착 로케이션이 <u>재고 실사 중</u>이거나, 이동 수량이 출발 로케이션의 <u>가용 재고</u>를 초과하는지 확인해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 · 엑셀 업로드 기준 추가, 매뉴얼 형식 정리 | Wooju(Landa) |
