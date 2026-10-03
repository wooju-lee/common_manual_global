---
sidebar_label: Adjustment (조정)
sidebar_position: 5
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Adjustment (조정)

> 스토어 로케이션의 전산 재고를 증감 조정하는 방법을 안내합니다. 조정은 **등록 → 권한 계정 승인(Confirm)** 후 재고에 반영됩니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory Adjustment</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 재고 조정 순서

> **스토어 / 로케이션 선택** → **제품 선택** → **수량 / 사유 입력 후 등록** → **승인(Confirm) 또는 반려(Rejected)**

| Step | 처리 내용 | 상태 | 처리 주체 |
|:---:|---|---|---|
| **1** | 대상 스토어 / 로케이션 선택 | — | 👤 스토어 |
| **2** | 조정 대상 제품 선택 | — | 👤 스토어 |
| **3** | 조정 수량 / 사유 입력 후 등록 | `Pending` | 👤 스토어 |
| **4** | 조정 승인(**Confirm**) 또는 반려(**Rejected**) | `Confirmed` / `Rejected` | 👤 승인 권한 계정 |
| **5** | 승인 시 조정 수량을 재고에 반영 | — | ⚙️ 자동 |

<div className="blockquote-gray">

</div>

## 1. 조정 목록 조회

<div className="img-placeholder">📷 [Image] Inventory Adjustment 목록 화면</div>

| 탭 | 설명 |
|---|---|
| **All** | 전체 조정 내역 |
| **Standard Adjustment** | 직접 등록한 일반 조정 |
| **Stocktaking Adjustment** | 재고 실사 확정으로 생성된 조정 |

| 검색 조건 | 설명 |
|---|---|
| **Brand / BP / Store** | 브랜드 → BP → 스토어 순서로 선택 (스토어 복수 선택 가능) |
| **Adjustment Reason** | 조정 사유 (복수 선택 가능) |
| **Status** | `All` / `Pending` / `Rejected` / `Confirmed` |
| **Search Period** | `Registration Date` 또는 `Confirm Date` 기준 (기본: 최근 30일) |
| **검색어** | BP·스토어·제품 코드/명, 바코드 (2자 이상) |

- 반려된 건은 목록에서 빨간색으로 표시됩니다.
- **Excel Export**로 현재 조건의 목록을 다운로드할 수 있습니다.

## 2. 조정 등록 — Single Registration

**Adjustment Registration** 버튼 → `Single Registration` 탭에서 3단계로 등록합니다.

<div className="img-placeholder">📷 [Image] Inventory Adjustment Registration — Single Registration 3단계</div>

| Step | 화면 | 입력 내용 |
|:---:|---|---|
| **1** | Select Adjustment Store / Location | `BP`, `Store`, `Location` 선택 |
| **2** | Select Adjustment Product | 브랜드·카테고리·제품 코드/명으로 검색 후 조정할 제품 선택 (`Inventory Qty` 확인) |
| **3** | Enter Adjustment Information | 제품별 조정 정보 입력 후 **Register** |

**Step 3 입력 항목**

| 항목 | 필수 여부 | 설명 |
|---|:---:|---|
| **Adjustment Reason Code** | **필수** | 조정 사유 선택 |
| **Adjustment Qty** | **필수** | 조정 수량. 사유 코드에 따라 증가/감소 방향이 정해지며, 양방향 사유는 `-` 입력 가능 |
| **Accounting Code** | 선택 | 회계 코드 |
| **Billing Store / Location** | 선택 | 비용 귀속 스토어 / 로케이션 |
| **Remarks** | 선택 | 비고 |

- 등록이 완료되면 `Pending` 상태로 목록에 표시됩니다.

<div className="blockquote-gray">

> 화면 Step 1·2의 박스 제목이 `Select Inbound Store` / `Select Inbound Product`로 표시될 수 있으나, 조정 대상 스토어·제품을 선택하는 단계입니다.

</div>

## 3. 조정 등록 — Bulk Registration

조정 제품이 많은 경우 엑셀 파일로 일괄 등록합니다.

<div className="img-placeholder">📷 [Image] Bulk Registration 탭 — 템플릿 다운로드 및 파일 업로드</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | **Download Upload Template** 클릭 → 템플릿(`Adjustment_upload_form.xlsx`) 다운로드 |
| **2** | 템플릿 양식에 맞춰 조정 내용 작성 |
| **3** | 작성한 파일(.xlsx / .xls / .csv, 최대 5MB)을 끌어다 놓거나 선택 |
| **4** | **Adjustment Registration** 클릭 |

### 📝 양식 작성 방법

<div className="img-placeholder">📷 [Image] Adjustment_upload_form.xlsx — 첫 번째 탭(입력 양식) / 두 번째 탭(조정 사유 코드)</div>

| 컬럼 | 필수 여부 | 입력 내용 |
|---|:---:|---|
| **Store Code** | **필수** | 조정할 스토어 코드 |
| **Location Code** | **필수** | 조정할 로케이션 코드 (예: `1000`) |
| **Product Code** | **필수** | 조정할 제품 코드 |
| **Adjustment Qty** | **필수** | 조정 수량 |
| **Adjustment Reason** | **필수** | 조정 사유 코드 (예: `ADJ003`) |
| **Account Code** | 선택 | 회계 코드 |
| **Billing Location (Store Code)** | 선택 | 비용 귀속 스토어 코드 |
| **Billing Location (Location Code)** | 선택 | 비용 귀속 로케이션 코드 |
| **Remarks** | 선택 | 비고 (최대 200자) |

- 조정 사유 코드는 양식의 <mark>**두 번째 탭에서 `Code Key`를 확인**</mark>해 입력합니다.

<details>
<summary>조정 사유 코드 목록 (전체 국가 공통)</summary>

| Code Key | Code Contents |
|---|---|
| `ADJ001` | CrossSelling |
| `ADJ002` | SaleOmission |
| `ADJ003` | Loss |
| `ADJ004` | CustomerGiveaway |
| `ADJ005` | Disposal |
| `ADJ006` | SampleUsage |
| `ADJ007` | Other |
| `ADJ008` | InitialStock |
| `ADJ009` | Seeding |
| `ADJ010` | Welfare |
| `ADJ011` | Return_HQ |
| `ADJ012` | Free_of_charge |
| `ADJ013` | Initial Stock |
| `ADJ014` | Initial Stock (-) |
| `ADJ015` | Online Refund Inbound |
| `ADJ123` | Inbound Adjustment |
| `ADJ998` | PS |

</details>

- 조정 수량은 사유 코드에 따라 입력합니다.
  - 감소 사유도 <mark>**양수로 입력**</mark>하면 자동으로 차감됩니다.
  - 양방향 사유만 `-`를 입력할 수 있습니다.
- Billing Location은 Store Code와 Location Code를 함께 입력해야 하며, 조정 스토어와 같은 법인의 스토어만 입력할 수 있습니다.
- 같은 스토어 · 로케이션 · 제품을 여러 행으로 나눠 입력할 수 없습니다. 한 행으로 합쳐서 입력해 주세요.

<div className="blockquote-warning">

> <mark>**한 행이라도 오류가 있으면 파일 전체가 등록되지 않습니다.**</mark><br/>
> 오류 목록에서 해당 행을 확인해 수정한 뒤 다시 업로드해 주세요.

</div>

- 양식이 다르면 `The upload format is invalid.` 메시지가 표시됩니다. 반드시 다운로드한 템플릿을 사용하세요.
- 같은 제품에 승인 대기(`Pending`) 중인 조정이 있거나, 해당 로케이션이 실사 중이면 업로드할 수 없습니다.

## 4. 조정 승인 / 반려

**Approve** 권한이 있는 계정만 승인·반려할 수 있으며, `Pending` 상태의 건만 처리 가능합니다.

<div className="img-placeholder">📷 [Image] 목록 체크박스 선택 후 하단 Confirm / Rejected 바</div>

| 방법 | 처리 내용 |
|---|---|
| **목록에서 일괄 처리** | `Pending` 건 체크 → 하단 바에서 **Confirm** 또는 **Rejected** 클릭 |
| **상세에서 개별 처리** | `Product Info` 링크 클릭 → `Inventory Adjustment Detail`에서 내용 확인·수정 후 **Confirm** 또는 **Rejected / Canceled** 클릭 |

| 결과 | 재고 |
|---|---|
| **Confirmed** | 조정 수량이 재고에 반영 |
| **Rejected** | 재고 변동 없이 기록만 유지 |

<div className="blockquote-warning">

> 등록한 조정을 취소하는 별도 버튼은 없습니다. 잘못 등록한 경우 승인 권한 계정에 **Rejected / Canceled** 처리를 요청해 주세요.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 조정 등록 버튼이 보이지 않아요.**
>
> A. 계정에 재고 조정 <u>등록 권한</u>이 없는 경우입니다. 관리자에게 권한을 요청해 주세요.

> **Q. 재고 실사 중인 로케이션도 조정할 수 있나요?**
>
> A. 아니요. 재고 실사가 진행 중인 스토어 로케이션은 조정·이동·출고가 제한됩니다. 실사 완료 후 진행해 주세요.

> **Q. 조정 사유 코드는 어디서 관리하나요?**
>
> A. `System Setting > Inventory > Reason Code`에서 관리합니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
