---
sidebar_label: S2S Store Transfer Outbound (S2S 스토어 간 이동 출고)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 S2S Store Transfer Outbound (S2S 스토어 간 이동 출고)

> 호주는 마스터 정보가 모두 스토어로 이뤄져 있으며, 스토어 간 이동을 <strong>S2S(Store To Store)</strong>로 정의합니다.<br/>
> S2S 출고를 등록하고 출고가 완료되는 과정을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 S2S 출고 순서

> **General Outbound 탭 선택** → **출고 스토어 선택** → **입고 스토어 선택** → **제품 선택** → **수량 입력 후 Register**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 출고 스토어 / 입고 스토어 지정 후 출고 등록 | 👤 출고 스토어 |
| **2** | 등록 즉시 출고 완료 (`Outbound Completed`) + 출고 스토어 재고 차감 | ⚙️ 자동 |
| **3** | 출고 완료에 따라 입고 스토어의 입고 정보 생성 | ⚙️ 자동 |
| **4** | 입고 스토어에서 실물 확인 후 입고 확정 → 재고 가산 | 👤 입고 스토어 |

<div className="blockquote-gray">

> S2S 출고는 **같은 법인(호주) 내 스토어 간**에만 가능합니다.<br/>
> 입고 스토어의 처리 방법은 S2S 스토어 간 입고를 참고해 주세요. 👉 **[S2S Store Transfer Inbound 바로가기](/docs/inventory/inbound/s2s-store-transfer-au)**

</div>

## 1. 출고 등록

<div className="img-placeholder">📷 [Image] Outbound Registration / Request — General Outbound 탭</div>

**Outbound Registration / Request** 버튼 → **General Outbound** 탭에서 4단계로 등록합니다.

| Step | 화면 | 입력 내용 |
|:---:|---|---|
| **1** | Select Outbound Store | 처리 방식 선택 후 출고할 스토어·로케이션 선택<br/>• **Outbound Registration**(등록) : 등록 즉시 출고 완료<br/>• **Request Outbound**(요청) : 승인 후 출고 처리 |
| **2** | Select Inbound Store | 입고할 스토어·로케이션 선택. 출고 유형(`S2S`)이 자동 표시됩니다 |
| **3** | Select Outbound Product | 출고할 제품 선택 (출고 로케이션에 재고가 있는 제품만 조회) |
| **4** | Enter Outbound Information | 제품별 출고 수량 입력 후 **Register** |

- 출고 수량은 **1 이상**, **가용 재고 부족 시 등록이 불가**합니다.
- 출고 스토어와 입고 스토어는 같을 수 없습니다.
- 출고 제품이 많은 경우 엑셀 템플릿으로 일괄 등록할 수 있습니다. 👉 **[Outbound Bulk Upload 바로가기](/docs/inventory/outbound/outbound-bulk-upload-au)**

<div className="blockquote-warning">

> <mark>**출고 등록은 즉시 완료되며 취소할 수 없습니다.**</mark><br/>
> 입고 스토어·제품·수량을 반드시 확인한 뒤 등록해 주세요.

</div>

## 2. 출고 요청 승인 (Request Outbound)

Step 1에서 **Request Outbound**를 선택하면, 승인자가 확정한 뒤 출고가 처리됩니다.<br/>
<mark>**승인 전까지 출고되지 않고, 재고는 출고대기수량으로 잡혀 있습니다.**</mark>

<div className="img-placeholder">📷 [Image] Outbound Request List 및 요청 상세</div>

- **Outbound Request List** 탭에서 요청 건을 확인하며, <mark>**출고 스토어 기준 승인 권한이 있는 계정만**</mark> 승인(Confirm) / 반려(Reject)할 수 있습니다.
- 요청 상세에서 **Edit Qty**로 확정 수량을 수정한 뒤 **Request Confirm** → **Approve**로 승인하고, 반려는 **Rejected**를 클릭합니다.

| 상태 | 설명 |
|---|---|
| **Request Pending** | 승인 대기 |
| **Approved (Registered)** | 승인 완료 → 출고 등록 및 완료 처리 |
| **Rejected** | 반려 → 요청 기록만 유지 |

## 3. 출고 내역 확인

**Outbound List** 탭에서 Type `S2S`로 조회하고, 행을 클릭하면 출고 상세를 확인할 수 있습니다.<br/>
상세 화면의 **Outbound Information**에서 출고 방법과 배송사·송장번호를 입력하고 **Save**하면, 입고 스토어의 입고 상세에서도 확인할 수 있습니다.

<div className="qna-section">

## ❓ FAQ

> **Q. 출고 등록이 되지 않아요.**
>
> A. 출고 로케이션이 <u>재고 실사 중</u>이거나, 출고 수량이 <u>가용 재고</u>를 초과하는지 확인해 주세요.

> **Q. 같은 스토어 안에서 로케이션만 옮기고 싶어요.**
>
> A. 같은 스토어 내 이동은 출고가 아닌 로케이션 이동으로 처리합니다. 👉 **[Inventory Movement 바로가기](/docs/inventory/movement/transfer-au)**

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 추가, 매뉴얼 형식 정리 | Wooju(Landa) |
