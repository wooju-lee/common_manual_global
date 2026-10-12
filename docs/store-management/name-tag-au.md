---
sidebar_label: Offline Name Tag (오프라인 네임택)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-07"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Offline Name Tag (오프라인 네임택)

> 스토어 진열용 네임택(모델명 · 판매가 · QR)을 등록하고, A4 용지로 출력하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Store Management > Offline Name Tag</span>

<div className="blockquote-mint">

> <mark>**네임택은 젠틀몬스터(Gentle Monster) 브랜드만 출력할 수 있습니다.**</mark>

</div>

## 👉 네임택 출력 순서

> **Register NameTAG** → **상품 선택** → **추가 메모 · 수량 입력** → **미리보기** → **Print & Save**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | **Register NameTAG** 클릭 → 개별 출력 또는 업로드 출력 선택 | 👤 스토어 |
| **2** | 브랜드 → 법인 → 스토어 선택 후 출력할 모델 선택 | 👤 스토어 |
| **3** | 모델별 추가 메모, 렌즈 가능 여부, 출력 수량 입력 | 👤 스토어 |
| **4** | 미리보기 확인 후 **Print & Save** → 등록 내역 저장 + 인쇄 | 👤 스토어 |

## 1. 네임택 구성

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-01.png').default}
  alt="출력된 네임택 예시 — 모델명 / 추가 메모, 판매가, QR"
  boxes={[
    {x: 32.6, y: 35.4, w: 4.8, h: 7.4},
    {x: 40, y: 36, w: 7.2, h: 6.8},
  ]}
/>

| 항목 | 내용 |
|---|---|
| **모델명** | 모델의 대표 제품명 (길면 글자 크기가 줄어들고, 그래도 길면 `…`로 표시) |
| **추가 메모** | 입력한 메모 (선택, 한 줄) |
| **판매가** | 스토어 판매가. AU는 <mark>**`AUD 450`**</mark> 형식으로 표시 |
| **Prescription Available** | 렌즈 가능 여부를 체크한 모델에만 표시 |
| **QR 코드** | **Include product QR**을 체크하면 표시 (젠틀몬스터 공식몰 제품 검색 링크) |

- 출력 용지는 **A4**이며, 65 × 13mm 네임택이 2열로 배치됩니다. (페이지당 약 26개)
- 인쇄 창에서 배율은 **100%**로 출력해 주세요.

## 2. 리스트 검색

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-08.png').default}
  alt="Offline Name Tag 검색 조건 — Registration Date, 검색어"
  boxes={[
    {x: 1.6, y: 28.2, w: 24.2, h: 7.4},
    {x: 1.6, y: 39.8, w: 64.2, h: 3.2},
  ]}
/>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **Brand** | 브랜드 선택 | |
| **Registration Date** | 네임택 등록 기간 | • 기본: 최근 30일<br/>• `Today` / `1 Week` / `1 Month` / `3 Months` 빠른 선택 |
| **검색어** | 모델 코드, 모델명, 등록 계정 | 2자 이상 입력 |

## 3. 리스트 컬럼

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-08.png').default}
  alt="Offline Name Tag 목록 — ID, Total Model, Register NameTAG"
  boxes={[
    {x: 1.6, y: 67.0, w: 9.5, h: 21.8},
    {x: 44.8, y: 67.0, w: 6.0, h: 21.8},
    {x: 91.4, y: 56.8, w: 7.4, h: 3.0},
  ]}
/>

| 컬럼 | 설명 |
|---|---|
| **ID** | 네임택 등록 번호 (`NT` + 번호) |
| **Registration Date**<br/><span className="label-sub">등록일</span> | 네임택 등록 일시 |
| **Brand**<br/><span className="label-sub">브랜드</span> | 브랜드 코드 / 명 |
| **Store Information**<br/><span className="label-sub">스토어</span> | 스토어 코드 / 명 |
| **Total Model**<br/><span className="label-sub">총 모델 수</span> | 등록한 모델 수 |
| **Registered By**<br/><span className="label-sub">등록 계정</span> | 등록한 계정 |

- 행을 클릭하면 출력 내역 상세(**Print Record Detail**)로 이동하며, 재출력할 수 있습니다. 👉 **[6. 재출력](#6-재출력)**

## 4. 네임택 등록 — 개별 출력

**Register NameTAG** 버튼 → **Individual Print** 탭에서 등록합니다.

### Step 1. 상품 선택

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-02.png').default}
  alt="Register NameTAG — Individual Print 탭, Brand / BP / Store"
  boxes={[
    {x: 16.4, y: 47.0, w: 19.8, h: 3.2},
    {x: 15.3, y: 59.8, w: 81.0, h: 5.2},
  ]}
/>

- **Brand → BP → Store** 순서로 모두 선택해야 상품 목록이 표시됩니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-03.png').default}
  alt="상품 목록 — 같은 모델도 판매가별로 별도 행"
  boxes={[
    {x: 3.3, y: 18.6, w: 91.4, h: 4.2},
    {x: 4.8, y: 51.1, w: 88.4, h: 6.3},
    {x: 4.8, y: 69.9, w: 88.4, h: 6.3},
  ]}
/>

- 모델 코드 또는 모델명으로 검색(2자 이상)한 뒤, 출력할 모델을 체크합니다.
  - <mark>**최대 50개 모델**</mark>까지 선택할 수 있으며, 페이지를 넘겨도 선택이 유지됩니다.
  - 같은 모델이라도 판매가가 다르면 가격별로 여러 행에 표시되니, 맞는 가격을 선택해 주세요.
- **Next →**를 클릭합니다.

<div className="blockquote-gray">

> 스토어를 바꿔도 이전에 선택한 상품은 초기화되지 않습니다. 스토어를 바꿨다면 선택한 상품을 다시 확인해 주세요.

</div>

### Step 2. 추가 메모 · 수량 입력

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-04.png').default}
  alt="Step 2 — Additional Note, Prescription, Print Qty"
  boxes={[
    {x: 48.6, y: 63.8, w: 14.1, h: 20.2},
    {x: 64.9, y: 63.8, w: 6.7, h: 20.2},
    {x: 73.8, y: 63.8, w: 8, h: 20.2},
  ]}
/>

| 항목 | 설명 | 비고 |
|---|---|---|
| **Additional Note**<br/><span className="label-sub">추가 메모</span> | 모델명 아래에 표시할 메모 | 선택 |
| **Prescription**<br/><span className="label-sub">렌즈 가능 여부</span> | 체크 시 `Prescription Available` 표시 | 선택 |
| **Print Qty**<br/><span className="label-sub">출력 수량</span> | 모델별 네임택 출력 개수 | 1 ~ 10개 |

- 여러 모델을 체크해 **일괄 수정**할 수 있습니다.
  - Prescription **On** / **Off**는 클릭 즉시 적용됩니다.
  - Print Qty는 수량 입력 후 **Apply**를 클릭해야 적용됩니다.
- 상단 **Total**에는 네임택 총 출력 수량(sheets)과 모델 수(items)가 표시됩니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-05.png').default}
  alt="모델 체크 후 Bulk edit"
  boxes={[
    {x: 4.6, y: 47.2, w: 90.6, h: 6.2},
    {x: 5.6, y: 63.0, w: 2.2, h: 11.6},
  ]}
/>

### Step 3. 미리보기 및 출력

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-06.png').default}
  alt="A4 Print Preview — Include product QR 해제 시"
  boxes={[
    {x: 67.6, y: 1.8, w: 12.4, h: 5.4},
    {x: 89.8, y: 1.0, w: 9.2, h: 6.8},
  ]}
/>

- **Include product QR**(기본 체크)로 QR 코드 포함 여부를 선택합니다.
- **Preview**로 A4 출력 화면을 확인한 뒤, **Print & Save**를 클릭하면 브라우저 인쇄 창이 열립니다.
- 저장되면 `name tag print saved successfully` 메시지가 표시됩니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/name-tag-07.png').default}
  alt="Print & Save 저장 완료 메시지"
  boxes={[
    {x: 80.6, y: 1.8, w: 18.6, h: 11.6},
  ]}
/>

<div className="blockquote-warning">

> <mark>**Print & Save를 클릭하면 등록 내역이 먼저 저장됩니다.**</mark><br/>
> 인쇄 창에서 인쇄를 취소해도 등록 내역은 남으며, 목록에서 재출력할 수 있습니다.

</div>

## 5. 네임택 등록 — 업로드 출력

출력할 모델이 많은 경우 엑셀 파일로 한 번에 등록합니다.

<div className="img-placeholder">📷 [Image] Bulk Upload 탭 — 템플릿 다운로드 및 파일 업로드</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | **Register NameTAG** → **Bulk Upload** 탭에서 **Download Upload Template** 클릭 → 양식(`NameTag_upload_form.xlsx`) 다운로드 |
| **2** | 양식에 맞춰 작성 |
| **3** | 작성한 파일(.xlsx / .xls, 최대 5MB)을 끌어다 놓거나 선택한 뒤 **Register** 클릭 |
| **4** | 등록 완료 후 열리는 미리보기에서 출력 |

### 📝 양식 작성 방법

| 컬럼 | 필수 여부 | 입력 내용 |
|---|:---:|---|
| **Brand Code** | **필수** | 브랜드 코드 (젠틀몬스터 `1100`) |
| **Store Code** | **필수** | 스토어 코드 |
| **Product Code** | **필수** | <mark>**제품 코드(SKU)**</mark> — 모델 코드가 아님 |
| **Additional Note** | 선택 | 추가 메모 |
| **Prescription** | **필수** | 렌즈 가능 여부 `Y` / `N` |
| **Qty** | **필수** | 출력 수량 (1 ~ 10) |

- 한 파일에는 **스토어 1개**만 입력할 수 있습니다.
- 출력 수량은 1 ~ 10개만 입력할 수 있으며, 10개를 넘으면 오류가 발생합니다.
- 파일 전체 출력 수량은 500개 이하여야 합니다.

<div className="blockquote-warning">

> <mark>**한 행이라도 오류가 있으면 파일 전체가 등록되지 않습니다.**</mark><br/>
> 오류 목록에서 해당 행을 확인해 수정한 뒤 다시 업로드해 주세요.

</div>

## 6. 재출력

<div className="img-placeholder">📷 [Image] Print Record Detail — 재출력할 모델 선택</div>

| Step | 처리 내용 |
|:---:|---|
| **1** | 목록에서 재출력할 등록 내역 행 클릭 → **Print Record Detail** 이동 |
| **2** | 필요하면 추가 메모, 렌즈 가능 여부, 출력 수량 수정 |
| **3** | 재출력할 모델 체크 → **Reprint** → 미리보기에서 **Print & Save** |

<div className="blockquote-warning">

> <mark>**재출력은 등록 당시의 판매가로 출력됩니다.**</mark><br/>
> 판매가가 바뀐 경우에는 재출력하지 말고 네임택을 새로 등록해 주세요. 재출력 시 수정한 메모 · 수량은 기존 등록 내역에 덮어써집니다.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 출력할 제품이 목록에 없어요.**
>
> A. 오늘 기준 <u>유효한 판매가</u>가 없는 제품은 표시되지 않습니다. 패키지와 렌즈도 목록에서 제외됩니다.

> **Q. 저장 시 `Name tag printing is allowed only for the Gentle Monster brand.` 오류가 나와요.**
>
> A. 네임택은 <u>젠틀몬스터 브랜드</u>만 출력할 수 있습니다. 브랜드 선택을 확인해 주세요.

> **Q. 저장 시 `Invalid name tag print price` 오류가 나와요.**
>
> A. 선택한 제품의 판매가가 바뀌었거나, 해당 스토어에서 판매하지 않는 제품입니다. 상품을 다시 선택해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-07 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-12 | 화면 이미지 추가 | Wooju(Landa) |
