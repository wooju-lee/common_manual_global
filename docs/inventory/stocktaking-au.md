---
sidebar_label: Stocktaking (재고 실사)
sidebar_position: 4
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Stocktaking (재고 실사)

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
| **4** | 확정 시 차이 수량을 재고에 반영 + 실사 조정 내역 생성 | — | ⚙️ 자동 |

<div className="blockquote-warning">

> <mark>**실사 중에는 해당 스토어 로케이션의 재고 조정 · 이동 · 출고가 제한되며, 입고는 가능합니다.**</mark><br/>
> 승인 대기 중인 재고 조정이나 진행 중인 다른 실사가 있으면 실사를 시작할 수 없습니다.

</div>

## 1. 실사 시작

<div className="img-placeholder">📷 [Image] Start Stocktaking 팝업</div>

**Start Stocktaking** 버튼을 클릭하고, 대상 스토어를 선택한 뒤 **Start Stocktaking**을 클릭합니다.<br/>
로케이션은 <mark>**스토어의 `1000 / SALES` 로케이션으로 자동 적용**</mark>되며, 실사 대상 제품 목록이 생성됩니다.

## 2. 실사 수량 입력

<div className="img-placeholder">📷 [Image] Stocktaking Detail — 실사 수량 입력 목록</div>

목록에서 실사 건을 클릭해 상세 화면으로 이동한 뒤, 아래 두 방법 중 하나로 실사 수량을 입력합니다.

| 방법 | 처리 내용 |
|---|---|
| **화면에서 직접 입력** | 제품별 **Stocktaking Qty**(실제 카운트 수량)를 화면에 바로 입력 |
| **엑셀 업로드** | **Stocktaking Upload** → **Download Upload Template**으로 해당 실사 건의 양식을 받아 수량을 작성한 뒤 **Register**로 업로드 |


- 전산 재고와 실사 수량에 차이가 있으면, <mark>**조정 수량(Adjustment Qty)이 자동 생성되고 실사 조정 사유(Stocktaking Reason)가 자동 설정**</mark>됩니다.

| 경우 (전산 재고 `100` 기준) | 실사 수량 | 조정 수량 | 실사 조정 사유 |
|---|:---:|:---:|---|
| **실물이 적은 경우** | `99` | `-1` (파란색) | `STK002` 자동 설정 |
| **실물이 많은 경우** | `101` | `+1` (빨간색) | `STK002` 자동 설정 |
| **같은 경우** | `100` | `0` | 설정 없음 |

- 자동 설정된 사유는 필요 시 드롭다운에서 변경할 수 있습니다.

모든 제품의 수량과 사유를 입력한 뒤 **Save**를 클릭합니다.<br/>
저장 후 상태는 `Saved`가 되며, <mark>**확정 전까지는 다시 수정 · 저장할 수 있습니다.**</mark>

## 3. 실사 확정 / 반려

<div className="img-placeholder">📷 [Image] Confirm / Rejected 버튼 및 확인 팝업</div>

**승인 권한**이 있는 계정이 `Saved` 상태의 실사 건을 확정하거나 반려합니다.

| 버튼 | 결과 |
|---|---|
| **Confirm** | <mark>**차이 수량이 재고에 반영**</mark>되고, Adjustment의 `Stocktaking Adjustment` 탭에 조정 내역이 생성됩니다 |
| **Rejected** | 재고 반영 없이 결과만 기록으로 남습니다 |

- 처리 내역은 재고 원장에 기록됩니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-au)**

## 4. 실사 취소

`In Progress` 상태에서만 **Cancel Stocktaking**으로 취소할 수 있습니다.<br/>
<mark>**취소하면 입력한 모든 데이터가 삭제됩니다.**</mark>

<div className="qna-section">

## ❓ FAQ

> **Q. 실사 시작 시 오류가 발생해요.**
>
> A. `An adjustment or ongoing stocktaking exists.` 메시지가 표시되면, 해당 스토어에 <u>승인 대기 중인 재고 조정</u> 또는 <u>진행 중인 실사</u>가 있는 것입니다. 먼저 완료한 뒤 다시 시작해 주세요.

> **Q. Save를 눌렀는데 저장되지 않아요.**
>
> A. 모든 제품에 <u>실사 수량</u>이 입력되었는지 확인해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 추가, 매뉴얼 형식 정리 | Wooju(Landa) |
