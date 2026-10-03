---
sidebar_label: Outbound Bulk Upload (출고 일괄 등록)
sidebar_position: 5
author: Wooju(Landa)
created: "2026-10-04"
countries: [au]
---

# Outbound Bulk Upload (출고 일괄 등록)

> 출고 제품이 많을 때 엑셀 템플릿으로 C2C · S2S 출고를 한 번에 등록하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List > Outbound Registration / Request > Bulk Upload (BULK)</span>

## 👉 일괄 등록 순서

> **템플릿 다운로드** → **템플릿 작성** → **파일 업로드** → **Register**

## 1. 템플릿 다운로드

<div className="img-placeholder">📷 [Image] Outbound Registration / Request — Bulk Upload (BULK) 탭</div>

**Outbound Registration / Request** 버튼 → **Bulk Upload (BULK)** 탭에서 **Download Upload Template**을 클릭합니다.<br/>
반드시 다운로드한 템플릿(`Outbound_upload_form_V3.xlsx`)으로 작성해 주세요.

## 2. 템플릿 작성

<div className="img-placeholder">📷 [Image] 출고 업로드 템플릿 (엑셀)</div>

| 컬럼 | 필수 여부 | 입력 방법 | 선택값 / 비고 |
|---|:---:|---|---|
| **No.**<br/><span className="label-sub">순번</span> | 선택 | 순번 | 오류 행을 찾기 쉽도록 넘버링 권장 |
| **Outbound Type**<br/><span className="label-sub">출고 유형</span> | **필수** | 드롭다운에서 선택 | • `CORP` : C2C 법인 출고 등록<br/>• `NORM` : 일반 출고 등록 (S2S 스토어 간 출고) |
| **Outbound Order Type**<br/><span className="label-sub">출고 오더 태그</span> | — | 드롭다운에서 선택 | 🚫 <mark>**미사용으로 빈값으로 처리**</mark> |
| **Outbound Store Code / Location Code**<br/><span className="label-sub">출고 스토어 / 로케이션 코드</span> | **필수** | 마스터 스토어 / 로케이션 코드 | — |
| **Inbound Store Info / Location Info**<br/><span className="label-sub">입고 스토어 / 로케이션</span> | 조건부 | 마스터 스토어 / 로케이션 코드 | • `NORM` : 필수<br/>• `CORP` : 비워둠 (한국 본사로 자동 지정) |
| **Outbound Product Code**<br/><span className="label-sub">출고 제품 코드</span> | **필수** | 마스터 **SAP 제품 코드** | — |
| **Outbound Qty**<br/><span className="label-sub">출고 수량</span> | **필수** | — | **가용 재고 기준**으로 입력하며, 초과 시 등록 불가 |
| **Requested Outbound Date**<br/><span className="label-sub">출고 요청일</span> | 선택 | `yyyy-mm-dd` 형식으로 입력 | 빈값으로 처리<br/>(시스템 상 '오늘'로 처리) |
| **Outbound Request Status**<br/><span className="label-sub">출고 요청 여부</span> | 선택 | 드롭다운에서 선택 | • `Y` : 요청 (승인 후 출고)<br/>• `N` : 바로 등록 (즉시 출고 완료)<br/>&emsp;• 비우면 `N`(바로 등록)으로 처리<br/>&emsp;• `CORP`는 `Y`(요청)이 불가 |

<div className="blockquote-warning">

> <mark>**출고 · 입고 스토어와 로케이션 코드를 정확히 입력해 주세요.**</mark><br/>
> 코드가 잘못되면 다른 스토어로 출고되거나 등록 오류가 발생합니다.

</div>

<div className="blockquote-gray">

> 출고 유형 · 출고 스토어/로케이션 · 입고 스토어/로케이션 · 출고 요청일 · 요청 여부가 **모두 같은 행은 하나의 출고 건으로 묶여** 생성됩니다.<br/>
> 하나의 출고 건 안에 같은 제품 코드를 중복으로 작성할 수 없습니다.

</div>

| 업로드 제한 | 기준 |
|---|---|
| 파일 | 엑셀 파일(.xlsx / .xls), 최대 5MB |
| 행 수 | 1회 최대 3,000행 |
| 생성되는 출고 건수 | 1회 최대 50건<br/>행 수가 아니라, **같은 조건끼리 묶여 만들어지는 출고 건** 기준입니다 |
| 출고 1건당 제품 수 | 최대 300 SKU<br/>하나로 묶인 출고 건 안에 담을 수 있는 제품 수입니다 |

<div className="blockquote-gray">

> **예시** — AU1002에서 AU1004로 제품 200개를 같은 날짜로 올리면 → 출고 **1건** (제품 200개)<br/>
> AU1002에서 서로 다른 스토어 60곳으로 올리면 → 출고 **60건**이 되어 50건 제한을 넘으므로 업로드 불가<br/>
> 제한을 넘으면 파일 전체가 등록되지 않으니, 파일을 나눠서 업로드해 주세요.

</div>

## 3. 파일 업로드 및 등록

<div className="img-placeholder">📷 [Image] 파일 업로드 후 Register / 오류 목록</div>

작성한 파일을 끌어다 놓거나 선택한 뒤 **Register**를 클릭합니다.<br/>
등록이 완료되면 C2C · S2S 출고는 <mark>**즉시 출고 완료**</mark>되고, 요청으로 올린 건은 **Outbound Request List**에서 승인을 기다립니다.

- 템플릿 양식이 다르면 `The upload format is invalid.` 메시지가 표시됩니다.
- 입력값에 오류가 있으면 오류 목록이 표시됩니다. 해당 행을 수정한 뒤 다시 업로드해 주세요.

| 자주 발생하는 오류 | 확인할 내용 |
|---|---|
| `Store(...) is not found.` / `Location(...) is not found.` | 스토어 · 로케이션 코드가 맞는지 |
| `The outbound store and inbound store cannot be the same.` | 출고 스토어와 입고 스토어가 같지 않은지 |
| `To store code is required for NORM type` | `NORM` 행에 입고 스토어 · 로케이션을 입력했는지 |
| `CORP type outbound requests are not allowed` | `CORP` 행을 요청으로 올리지 않았는지 |
| `Insufficient available stock` | 출고 로케이션의 가용 재고가 충분한지 |

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-04 | AU 메뉴 생성 | Wooju(Landa) |
