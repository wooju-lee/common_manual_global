---
sidebar_label: C2C Corporate Outbound (C2C 법인 출고)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 C2C Corporate Outbound (C2C 법인 출고)

> 호주 법인에서 한국 본사로 반품하는 **C2C(Corporation To Corporation)** 출고를 등록하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 C2C 출고 순서

> **Corporate Outbound 탭 선택** → **출고 스토어 선택** → **제품 선택** → **수량 입력 후 Register**

- 법인 입고 시 **불량**이 발견되었거나, **한국 본사로 반품**이 필요해 전산 재고 출고(차감)가 필요할 때 사용합니다.
- 입고 스토어는 **한국 본사로 자동 지정**되므로 출고 스토어만 선택합니다.
- <mark>**등록과 동시에 출고 완료(`Outbound Completed`)되고, 출고 스토어 재고가 차감됩니다.**</mark>

<div className="blockquote-gray">

</div>

## 1. 출고 등록

<div className="img-placeholder">📷 [Image] Outbound Registration / Request — Corporate Outbound 탭</div>

**Outbound Registration / Request** 버튼 → **Corporate Outbound** 탭에서 3단계로 등록합니다.

| Step | 화면 | 입력 내용 |
|:---:|---|---|
| **1** | Select Outbound Store | 출고할 스토어·로케이션 선택. 입고 영역에 `It will be processed as an HQ return.`이 표시됩니다 |
| **2** | Select Outbound Product | 출고할 제품 선택 (출고 로케이션에 재고가 있는 제품만 조회) |
| **3** | Enter Outbound Information | 제품별 출고 수량 입력 후 **Register** |

- 출고 수량은 **1 이상**, **가용 재고 부족 시 등록이 불가**합니다.

<div className="blockquote-warning">

> <mark>**C2C 출고는 등록 즉시 완료되며 취소할 수 없습니다.**</mark><br/>
> 출고 스토어·제품·수량을 반드시 확인한 뒤 등록해 주세요. C2C 출고는 승인 요청(Request Outbound) 방식을 사용할 수 없습니다.

</div>

## 2. 일괄 등록

출고 제품이 많은 경우 엑셀 템플릿으로 일괄 등록할 수 있습니다. 👉 **[Outbound Bulk Upload 바로가기](/docs/inventory/outbound/outbound-bulk-upload-au)**

## 3. 출고 내역 확인

<div className="img-placeholder">📷 [Image] Outbound Detail — Outbound Information 입력</div>

**Outbound List** 탭에서 Type `C2C`로 조회하고, 행을 클릭하면 출고 상세를 확인할 수 있습니다.<br/>
상세 화면의 **Outbound Information**에서 출고 방법(`Package` / `Direct Delivery` / `Quick Delivery`)과 배송사·송장번호를 직접 입력하고 **Save**할 수 있습니다.

<div className="qna-section">

## ❓ FAQ

> **Q. 출고 등록이 되지 않아요.**
>
> A. 출고 로케이션이 <u>재고 실사 중</u>이거나, 출고 수량이 <u>가용 재고</u>를 초과하는지 확인해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 추가, 매뉴얼 형식 정리 | Wooju(Landa) |
