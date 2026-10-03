---
sidebar_label: Stocktaking (실사)
sidebar_position: 4
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Stocktaking (실사)

> 스토어 로케이션의 실물 재고를 카운트해 전산 재고와 비교하고, 차이를 재고에 반영하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inventory Stocktaking</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 재고 실사 순서

> **실사 시작** → **실사 수량 입력 / 업로드** → **Save** → **확정(Confirm) 또는 반려(Rejected)**

| Step | 처리 내용 | 상태 | 처리 주체 |
|:---:|---|---|---|
| **1** | 실사 시작 (대상 스토어 선택) | `In Progress` | 👤 스토어 |
| **2** | 실사 수량 입력 또는 업로드 → **Save** | `Saved` | 👤 스토어 |
| **3** | 실사 확정(**Confirm**) 또는 반려(**Rejected**) | `Completed` | 👤 승인 권한 계정 |
| **4** | 확정 시 실사 수량으로 재고 업데이트 + 차이 수량만큼 실사 조정 내역 생성 | — | ⚙️ 자동 |

<div className="blockquote-warning">

> <mark>**실사 중에는 해당 스토어 로케이션의 재고 조정 · 이동 · 출고가 제한되며, 입고는 가능합니다.**</mark><br/>
> 승인 대기 중인 재고 조정이나 진행 중인 다른 실사가 있으면 실사를 시작할 수 없습니다.

</div>

## 1. 실사 시작

<div className="img-placeholder">📷 [Image] Start Stocktaking 팝업</div>

**Start Stocktaking** 버튼을 클릭하고, 대상 스토어를 선택한 뒤 **Start Stocktaking**을 클릭합니다.<br/>
로케이션은 <mark>**스토어의 `1000 / SALES` 또는 `1110 / AVAILABLE` 로케이션 중 등록된 로케이션으로 자동 적용**</mark>되며, 실사 대상 제품 목록이 생성됩니다.

<div className="blockquote-warning">

> <mark>**전산 재고는 실사를 시작한 시점의 수량으로 고정됩니다.**</mark><br/>
> 시작 후 입고된 제품까지 카운트하면 차이가 중복 반영되므로, 실사 시작 직후 카운트하고 시작 후 입고분은 카운트에서 제외해 주세요.

</div>

## 2. 실사 수량 입력

<div className="img-placeholder">📷 [Image] Stocktaking Detail — 실사 수량 입력 목록</div>

목록에서 실사 건을 클릭해 상세 화면으로 이동한 뒤, 아래 두 방법 중 하나로 실사 수량을 입력합니다.

| 방법 | 처리 내용 |
|---|---|
| **화면에서 직접 입력** | 제품별 **Stocktaking Qty**(실제 카운트 수량)를 화면에 바로 입력 |
| **엑셀 업로드** | 해당 실사 건의 양식을 받아 수량을 작성한 뒤 업로드 (👉 3. 실사 수량 엑셀 업로드 참고) |

- 실사 목록에 없는 제품을 발견한 경우, <mark>**화면에서는 추가할 수 없고 엑셀 업로드로만 추가**</mark>할 수 있습니다.

### ⚖️ 재고 차이 발생 시

| 경우 (전산 재고 `100` 기준) | 실사 수량 | 조정 수량 | 실사 조정 사유 |
|---|:---:|:---:|---|
| **실물이 적은 경우** | `99` | `-1` (파란색) | `STK002` 자동 설정 |
| **실물이 많은 경우** | `101` | `+1` (빨간색) | `STK002` 자동 설정 |
| **같은 경우** | `100` | `0` | 설정 없음 |

- 전산 재고와 실사 수량에 차이가 있으면, <mark>**조정 수량(Adjustment Qty)이 자동 계산되고, 실사 조정 사유(Stocktaking Reason)가 자동 설정**</mark>됩니다.
  - 자동 설정된 사유는 필요 시 드롭다운에서 변경할 수 있습니다.
  - 모든 제품 수량/사유 반영 시 저장을 할 수 있으며, 저장 후 상태가 `Saved`로 업데이트됩니다.

## 3. 실사 수량 엑셀 업로드

<div className="img-placeholder">📷 [Image] Stocktaking Upload 팝업 — Download Upload Template / 파일 업로드</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | 실사 상세 화면에서 **Stocktaking Upload** 클릭 |
| **2** | **Download Upload Template** 클릭 → 해당 실사 건의 양식(`stocktaking_upload_template_form.xlsx`) 다운로드 |
| **3** | 실제 카운트 수량과 다른 제품의 **Stocktaking Qty** 수정 |
| **4** | 작성한 파일(.xlsx / .xls, 최대 5MB)을 끌어다 놓거나 선택한 뒤 **Register** 클릭 |

### 📝 양식 작성 방법

| 컬럼 | 필수 여부 | 입력 내용 |
|---|:---:|---|
| **Store Code** | **필수** | 실사 건의 스토어 코드 (수정 불가) |
| **Location Code** | **필수** | 실사 건의 로케이션 코드 (수정 불가) |
| **Product Code** | **필수** | 실사 대상 제품 리스트의 제품 코드가 그대로 표시됨 (수정 불가) |
| **Stock Qty** | **필수** | 실사 시작 시점의 실재고 (수정 불가) |
| **Stocktaking Qty** | **필수** | • 실제 실사한 수량<br/>• <mark>**전산 재고와 같은 값으로 표시**</mark>되어 있어, 차이가 있는 제품만 수정 |
| **Adjustment Reason** | 선택 | • 빈값으로 업로드 시, 차이가 있는 제품에 `STK002` 자동 설정<br/>• 차이가 없는 제품은 <mark>**반드시 빈값으로 처리**</mark> |
| **Remarks** | 선택 | 비고 |

- 양식에 표시된 <mark>**기존 제품 행은 삭제(제외)하지 않아야 하며**</mark>, 한 행이라도 빠지면 업로드되지 않습니다.
- 실사 목록에 없는 제품은 행을 추가하며, 이때 **Stock Qty**는 `0`으로 입력합니다.
- 같은 제품 코드를 여러 행에 입력할 수 없습니다.

<div className="blockquote-warning">

> <mark>**업로드하면 화면에서 저장하지 않은 입력값은 사라지고, 업로드한 값으로 덮어씁니다.**</mark><br/>
> `In Progress` 상태에서는 업로드 후 **Save**를 클릭해야 `Saved`가 되며, `Saved` 상태에서 업로드하면 업로드한 값이 바로 확정 대상이 됩니다.

</div>

<div className="blockquote-gray">

> 오류가 있으면 파일 전체가 등록되지 않고 오류 메시지가 표시됩니다. 메시지를 확인해 수정한 뒤 다시 업로드해 주세요.<br/>
> 상세 화면에서 다운로드한 엑셀은 업로드에 사용할 수 없습니다. 반드시 **Download Upload Template** 양식을 사용해 주세요.

</div>

## 4. 실사 확정 / 반려

<div className="img-placeholder">📷 [Image] Confirm / Rejected 버튼 및 확인 팝업</div>

**승인 권한**이 있는 계정이 `Saved` 상태의 실사 건을 확정하거나 반려합니다.

| 버튼 | 결과 |
|---|---|
| **Confirm** | <mark>**실사 수량으로 재고가 업데이트**</mark>되고, 차이 수량만큼 Adjustment의 `Stocktaking Adjustment` 탭에 조정 내역이 생성됩니다 |
| **Rejected** | 재고 반영 없이 결과만 기록으로 남습니다 |

- 처리 내역은 재고 원장에 기록됩니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-au)**

## 5. 실사 취소

<div className="img-placeholder">📷 [Image] Cancel Stocktaking 버튼 및 확인 팝업</div>

`In Progress` 상태에서만 **Cancel Stocktaking**으로 취소할 수 있습니다.<br/>
취소하면 <mark>**재고에 반영되지 않고 `Canceled` 상태로 종료**</mark>되며, 입력한 내용은 목록에서 조회만 가능합니다.

<div className="blockquote-gray">

> <mark>**`Saved` 상태에서는 취소할 수 없습니다.**</mark><br/>
> 저장한 실사를 종료하려면 승인 권한 계정에 반려(**Rejected**)를 요청해 주세요.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 실사 시작 시 오류가 발생해요.**
>
> A. `An adjustment or ongoing stocktaking exists.` 메시지가 표시되면, 해당 스토어에 <u>승인 대기 중인 재고 조정</u> 또는 <u>진행 중인 실사</u>가 있는 것입니다. 먼저 완료한 뒤 다시 시작해 주세요.

> **Q. Save를 눌렀는데 저장되지 않아요.**
>
> A. 모든 제품에 <u>실사 수량</u>이 입력되었는지 확인해 주세요.

> **Q. 엑셀 업로드 시 오류가 발생해요.**
>
> A. 표시된 메시지에 따라 아래 내용을 확인해 주세요.
>
> | 메시지 | 확인할 내용 |
> |---|---|
> | `Excel file is missing existing product codes` | 양식의 기존 제품 행이 삭제됨 |
> | `Stock quantity mismatch for product` | **Stock Qty** 값이 수정됨 |
> | `Excel file contains duplicate product codes` | 같은 제품 코드가 여러 행에 입력됨 |
> | `Excel file contains product codes that do not exist` | 존재하지 않는 제품 코드가 입력됨 |
> | `Adjustment reason must be null for product` | 차이가 없는 제품에 사유가 입력됨 |
> | `Excel file is missing stocktaking quantities for products` | **Stocktaking Qty**가 비어 있거나 정수가 아님 |
> | `Only Excel files can be uploaded.` | .xlsx / .xls 파일이 아님 |

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 추가, 매뉴얼 형식 정리, 엑셀 업로드 방법 · 운영 주의사항 추가, 실사 취소 기준 수정 | Wooju(Landa) |
