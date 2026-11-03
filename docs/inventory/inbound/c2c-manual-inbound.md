---
sidebar_label: C2C Manual Inbound (C2C 법인 입고 (수기 등록))
sidebar_position: 1
author: Wooju(Landa)
created: "2026-11-03"
countries: [us]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 C2C Manual Inbound (C2C 법인 입고 (수기 등록))

> 한국 본사 SAP의 입고 예정 정보(ASN) 없이, IIC BO에서 직접 **C2C 법인 입고 예정 건을 등록**하는 방법을 안내합니다.<br/>
> 등록 방식은 엑셀로 여러 건을 한 번에 올리는 <strong>일괄 등록(Bulk)</strong>과, 화면에서 제품을 골라 등록하는 **개별 등록(상품 단건)** 두 가지입니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inbound List > Inbound Registration</span>

<div className="blockquote-mint">

> <mark>**수기 등록은 입고 예정 건만 만들며, 재고는 입고 확정 시점에 반영됩니다.**</mark><br/>
> 수기 등록한 입고는 NetSuite ERP(Purchase Order · Item Receipt)와 WMS(LXP)로 전송되지 않고, IIC BO 재고에만 반영됩니다.

</div>

<div className="blockquote-gray">

> 수기 등록한 입고는 목록에서 Type `C2C`, Channel `MANUAL`로 표시되어 SAP로 들어온 입고(Channel `SAP`)와 구분됩니다.<br/>
> 등록 시점에는 입고 스토어의 `Pending Inbound`(입고 예정) 수량만 늘어나고, <mark>**실재고(On-hand)는 입고 확정 후에 늘어납니다.**</mark>

</div>

## 👉 등록 방식 선택

**Inbound List** 상단의 **Inbound Registration**(입고 등록)을 클릭하면 등록 창이 열립니다. 상단 탭에서 등록 방식을 선택합니다.

<AnnotatedImage
  src={require('./img/c2c-manual-inbound-01.png').default}
  alt="Inbound Registration — 등록 방식 탭"
  boxes={[
    {x: 85.6, y: 45.6, w: 8.6, h: 3.6},
    {x: 20.6, y: 38.8, w: 58.8, h: 6.2},
  ]}
/>

| 탭 | 언제 사용하나요 | 방법 |
|---|---|---|
| **Bulk Registration** (일괄 등록) | 여러 스토어 · 여러 입고 건을 한 번에 등록할 때 | 업로드 양식(엑셀)에 작성 후 업로드 |
| **Single Registration** (개별 등록 · 상품 단건) | 한 스토어 · 로케이션에 입고 1건을 등록할 때 | 화면에서 스토어 → 제품 → 입고 정보 순서로 입력 |

- **Inbound Registration** 버튼은 Inbound List 메뉴의 **Write 권한**이 있는 계정에만 표시됩니다.
- 등록 창을 열면 **Bulk Registration** 탭이 기본으로 선택되어 있습니다.

<div className="blockquote-warning">

> <mark className="mark-red">**등록한 입고는 삭제 · 취소할 수 없습니다.** 등록 전 B/L No. · I/V No. · 수량 · 입고 로케이션을 꼭 확인해 주세요.</mark>

</div>

## 1. 일괄 등록 (Bulk Registration)

엑셀 양식에 입고 정보를 작성해 한 번에 업로드합니다.

<AnnotatedImage
  src={require('./img/c2c-manual-inbound-02.png').default}
  alt="Bulk Registration — 양식 다운로드 · 파일 업로드 · 입고 등록"
  boxes={[
    {x: 72, y: 50, w: 8.2, h: 3.4},
    {x: 43.4, y: 53.2, w: 13.6, h: 4.4},
    {x: 45.4, y: 59, w: 9.6, h: 3.8},
  ]}
/>

1. **Download Upload Template**(업로드 양식 다운로드)를 클릭해 `Inbound_upload_form.xlsx`를 내려받습니다.
2. 양식에 입고 정보를 작성합니다. (아래 **양식 작성 방법** 참고)
3. 파일을 업로드 영역에 끌어다 놓거나 클릭해서 선택합니다.
4. 하단 **Inbound Registration**(입고 등록)을 클릭합니다.
5. 오류가 없으면 "저장이 완료되었습니다." 안내와 함께 창이 닫히고, 입고 목록에 `Pending Inbound` 상태로 생성됩니다.

### 양식 작성 방법

<AnnotatedImage
  src={require('./img/c2c-manual-inbound-03.png').default}
  alt="업로드 양식 작성 예시"
/>

| 컬럼 | 필수 | 입력 내용 | 비고 |
|---|:---:|---|---|
| **No.** | ✅ | 행 번호 | 오류 표에서 몇 번째 행인지 확인할 때 사용 |
| **B/L No.** | ✅ | 선하증권 번호 | 최대 50자 |
| **I/V No.** | ✅ | 인보이스 번호 | 최대 50자, 입고 목록의 Reference 번호로 표시<br/>ERP PO No.로 관리하면 용이합니다. |
| **BP Code** | ✅ | 입고 법인 코드 | |
| **Store Code** | ✅ | 입고 스토어 코드 | |
| **Location Code** | ✅ | 입고 로케이션 코드 | 해당 스토어에서 사용 중인 로케이션이어야 함 |
| **Product Code** | ✅ | 제품 코드 | |
| **Expected Inbound Qty** | ✅ | 입고 예정 수량 | 1 이상의 정수 |
| **Expected Inbound Date** | ✅ | 입고 예정일 | `yyyy-mm-dd` 형식 (예: 2026-11-03) |

<mark>**B/L No. + I/V No.가 같은 행은 입고 1건으로 묶입니다.**</mark>

- 제품이 여러 개면 **제품마다 한 행씩** 작성하고, B/L No. · I/V No.를 똑같이 입력합니다.
- 묶이는 행끼리는 **Store Code · Location Code · Expected Inbound Date**도 똑같이 입력합니다. (다르면 첫 번째 행 값으로 등록)

| No. | B/L No. | I/V No. | Product Code | 등록 결과 |
|---|---|---|---|---|
| 1 | BL001 | IV001 | 제품 A | 입고 ① |
| 2 | BL001 | IV001 | 제품 B | 입고 ① (1번 행과 묶임) |
| 3 | BL001 | IV002 | 제품 A | 입고 ② (I/V No.가 달라 별도 입고) |

<div className="blockquote-warning">

> **[ 업로드 시 유의할 점 ]**
>
> 1. <mark>**양식 2행의 안내 문구(입고 예정 수량 / 입고 예정 일자)는 지우고 업로드해 주세요.**</mark><br/>남겨두면 데이터로 인식되어 오류가 납니다.
> 2. 엑셀 파일(.xls · .xlsx)만 업로드할 수 있습니다. **CSV 파일은 업로드되지 않습니다.**<br/>파일은 1개, 최대 5MB까지 가능합니다.
> 3. B/L No. · I/V No.는 셀 서식을 **텍스트**로 지정해 주세요.<br/>숫자 서식이면 값이 바뀌어 등록될 수 있습니다.
> 4. 수량에 소수를 입력하면 소수점 아래는 버려집니다. (예: 1.7 → 1)

</div>

### 업로드 오류 확인

<mark>**한 행이라도 오류가 있으면 파일 전체가 등록되지 않습니다.**</mark> 오류가 있는 행만 표로 표시되며, 문제가 있는 칸에 빨간 오류 문구가 나타납니다.<br/>
오류를 수정한 뒤 파일 전체를 다시 업로드해 주세요.

| 오류 문구 | 원인 | 조치 |
|---|---|---|
| **[Error] 등록한 데이터를 다시 확인해 주세요.** | 빈 칸이 있거나, 수량 · 날짜 형식이 맞지 않음 | 빈 칸을 채우고 수량은 1 이상, 날짜는 `yyyy-mm-dd`로 입력 |
| **[Error] 마스터 정보를 다시 확인해 주세요.** | BP · Store · Location · Product 코드가 없거나, 제품의 공급가가 등록되어 있지 않음 | 코드를 확인하고, 공급가 미등록 시 운영팀에 공급가 등록 요청 |
| **[Error] 중복 데이터가 존재합니다.** | 같은 B/L No. + I/V No. 조합의 입고가 이미 있음 | B/L No. · I/V No.를 확인 |
| **업로드 양식이 올바르지 않습니다.** | 양식의 컬럼 이름 · 순서가 바뀜 | **Download Upload Template**로 양식을 다시 내려받아 작성 |

- 내 계정의 권한 범위(Brand · BP · Store) 밖의 스토어가 포함되어 있으면 파일 전체가 등록되지 않습니다.

## 2. 개별 등록 (Single Registration · 상품 단건)

화면에서 입고 스토어와 제품을 직접 선택해 입고 1건을 등록합니다. **3단계**로 진행됩니다.

> **Select Inbound Store**(입고 스토어 선택) → **Select Inbound Product**(입고 제품 선택) → **Enter Inbound Information**(입고 정보 입력)

### Step 1. 입고 스토어 선택

<AnnotatedImage
  src={require('./img/c2c-manual-inbound-04.png').default}
  alt="Single Registration — Step 1 입고 스토어 선택"
  boxes={[
    {x: 9.2, y: 53, w: 33.6, h: 10},
    {x: 82.8, y: 72, w: 8.4, h: 5.4},
  ]}
/>

- **Brand → BP → Store → Location** 순서로 선택합니다. 상위 항목을 바꾸면 하위 항목은 초기화됩니다.
- 선택한 BP · Store · Location이 아래 요약 영역에 표시됩니다.
- BP · Store · Location을 모두 선택하면 **Next**(다음)가 활성화됩니다.

### Step 2. 입고 제품 선택

<AnnotatedImage
  src={require('./img/c2c-manual-inbound-05.png').default}
  alt="Single Registration — Step 2 제품 검색 · 선택"
  boxes={[
    {x: 8, y: 26.6, w: 26.4, h: 10.2},
    {x: 83.4, y: 28.8, w: 8.4, h: 3.4},
    {x: 9, y: 48, w: 3.2, h: 43.8},
  ]}
/>

- Step 1에서 선택한 Brand의 제품이 자동으로 조회됩니다.
- **Product Category 1 · 2**, **Product Info (Code / Name), Barcode**로 검색할 수 있습니다. 텍스트 검색은 **2자 이상** 입력해야 하며, 제품 코드 · 제품명 · 바코드의 일부만 입력해도 조회됩니다.
- 입고할 제품을 체크박스로 선택합니다. 여러 페이지에 걸쳐 여러 개를 선택할 수 있으며, 상단 전체 선택은 **현재 페이지의 제품만** 선택합니다.
- 제품을 1개 이상 선택하면 **Next**(다음)가 활성화됩니다.

### Step 3. 입고 정보 입력

<AnnotatedImage
  src={require('./img/c2c-manual-inbound-06.png').default}
  alt="Single Registration — Step 3 입고 정보 · 수량 입력"
  boxes={[
    {x: 6.6, y: 38.2, w: 75.2, h: 8.6},
    {x: 38.6, y: 62.6, w: 12.6, h: 19.8},
    {x: 85.6, y: 84.6, w: 8.8, h: 4.4},
  ]}
/>

| 항목 | 필수 | 입력 방법 |
|---|:---:|---|
| **B/L No.** | ✅ | 선하증권 번호, 2~30자 |
| **I/V No.** | ✅ | 인보이스 번호, 2~30자 (입고 목록의 Reference 번호로 표시) |
| **Expected Inbound Date** (입고 예정일) | ✅ | 달력에서 선택 |
| **Expected Inbound Qty** (입고 예정 수량) | ✅ | 제품별로 1 이상의 정수 입력 |

- 선택한 제품이 2개 이상이면 행의 **X** 버튼으로 제품을 뺄 수 있습니다.
- 입력을 마치고 **Register**(등록)를 클릭하면 "등록이 완료되었습니다." 안내와 함께 창이 닫히고, 입고 목록에 `Pending Inbound` 상태로 생성됩니다.

<div className="blockquote-warning">

> **Previous**(이전)를 누르면 현재 단계에서 입력한 값이 지워집니다.<br/>
> 같은 B/L No. + I/V No. 조합의 입고가 이미 있으면 등록되지 않습니다.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 파일을 올렸는데 아무것도 등록되지 않았어요.**
>
> A. 일괄 등록은 한 행이라도 오류가 있으면 전체가 등록되지 않습니다. 오류 표에 표시된 행을 수정한 뒤 파일 전체를 다시 업로드해 주세요.

> **Q. 코드는 맞는데 "마스터 정보를 다시 확인해 주세요." 오류가 나요.**
>
> A. 입고 예정일 기준으로 해당 법인에 제품의 공급가가 등록되어 있지 않은 경우입니다. 운영팀에 공급가 등록을 요청해 주세요.

> **Q. 수기 등록한 입고가 NetSuite에도 반영되나요?**
>
> A. 아니요. 수기 등록한 입고는 NetSuite ERP와 WMS로 전송되지 않고, IIC BO 재고에만 반영됩니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-11-03 | 최초 작성 (코드 기준, 일괄 · 개별 등록) | Wooju(Landa) |
