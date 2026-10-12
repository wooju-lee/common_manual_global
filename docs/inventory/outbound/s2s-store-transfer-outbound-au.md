---
sidebar_label: S2S Store Transfer Outbound (S2S 스토어 간 이동 출고)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

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

**Outbound Registration / Request** 버튼 → **General Outbound** 탭에서 4단계로 등록합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-register-01.png').default}
  alt="Outbound List에서 Outbound Registration / Request 클릭 → General Outbound 탭"
  boxes={[
    {x: 80.0, y: 50.9, w: 12.3, h: 1.9},
    {x: 11.9, y: 33.2, w: 11.1, h: 2.3},
    {x: 10.9, y: 44.7, w: 65.9, h: 3.9},
    {x: 12.1, y: 55.0, w: 63.4, h: 2.4},
  ]}
/>

| Step | 화면 | 입력 내용 |
|:---:|---|---|
| **1** | Select Outbound Store | 처리 방식 선택 후 출고할 스토어·로케이션 선택<br/>• **Outbound Registration**(등록) : 등록 즉시 출고 완료<br/>• **Request Outbound**(요청) : 승인 후 출고 처리 |
| **2** | Select Inbound Store | 입고할 스토어·로케이션 선택. 출고 유형(`S2S`)이 자동 표시됩니다 |
| **3** | Select Outbound Product | 출고할 제품 선택 (출고 로케이션에 재고가 있는 제품만 조회) |
| **4** | Enter Outbound Information | 제품별 출고 수량 입력 후 **Register** |

### Step 1. 출고 스토어 선택

- 처리 방식(**Outbound Registration** / **Request Outbound**)을 선택하고, 출고할 스토어 · 로케이션을 선택합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-register-02.png').default}
  alt="Step 1. Register Outbound 선택 후 출고 스토어·로케이션 선택"
  boxes={[
    {x: 5.5, y: 42.9, w: 44.1, h: 7.7},
    {x: 7.1, y: 63.1, w: 85.6, h: 4.5},
    {x: 86.3, y: 84.3, w: 8.1, h: 3.6},
  ]}
/>

### Step 2 ~ 3. 입고 스토어 · 출고 제품 선택

- 입고할 스토어 · 로케이션을 선택하면 출고 유형(`S2S`)이 자동 표시됩니다.
- 출고 로케이션에 재고가 있는 제품만 조회되며, 출고할 제품을 체크합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-register-03.png').default}
  alt="Step 3. 출고 제품 선택 (입고 스토어·출고 유형 S2S 확인)"
  boxes={[
    {x: 5.6, y: 51.8, w: 89.8, h: 7.2},
    {x: 85.6, y: 33.3, w: 8.2, h: 2.6},
    {x: 7.3, y: 63.1, w: 3.4, h: 18.7},
  ]}
/>

### Step 4. 출고 수량 입력

- 제품별 출고 수량을 입력한 뒤 **Register**를 클릭합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-register-04.png').default}
  alt="Step 4. 제품별 출고 수량 입력 후 Register"
  boxes={[
    {x: 45.3, y: 77.6, w: 10.3, h: 7.7},
    {x: 87.2, y: 87.8, w: 8.2, h: 3.1},
  ]}
/>

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

<div className="blockquote-gray">

> 출고 요청(**Request Outbound**)에서는 스토어 목록이 계정에 설정된 **스토어 권한**이 아니라, <mark>**계정에 설정된 법인 권한 기준으로 해당 법인의 스토어 전체**</mark>가 표시됩니다.

</div>

> **출고 요청 등록** → **요청 건 조회** → **승인 / 반려** → **출고 등록 생성**

| 상태 | 설명 |
|---|---|
| **Request Pending** | 승인 대기 |
| **Approved (Registered)** | 승인 완료 → 출고 등록 및 완료 처리 |
| **Rejected** | 반려 → 요청 기록만 유지 |

### Step 1. 출고 요청 등록

- 출고 등록 Step 1에서 **Request Outbound**를 선택한 뒤, 입고 스토어 · 제품 · 수량을 출고 등록과 동일하게 입력합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-request-01.png').default}
  alt="Step 1에서 Request Outbound 선택"
  boxes={[
    {x: 50.9, y: 43.8, w: 43.4, h: 7.6},
    {x: 51.1, y: 63.6, w: 20.3, h: 26.0},
  ]}
/>


### Step 2. 요청 건 조회

- **Outbound Request List** 탭에서 `Request Pending` 상태의 요청 건을 확인합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-request-02.png').default}
  alt="Outbound Request List 탭 — Request Pending 요청 건 조회"
  boxes={[
    {x: 12.9, y: 15.3, w: 11.2, h: 3.4},
    {x: 51.0, y: 68.9, w: 6.0, h: 3.4},
    {x: 1.9, y: 94.0, w: 96.6, h: 4.6},
  ]}
/>


### Step 3. 승인 / 반려

- **Outbound Request List** 탭에서 요청 건을 확인하며, <mark>**출고 스토어 기준 승인 권한이 있는 계정만**</mark> 승인(Confirm) / 반려(Reject)할 수 있습니다.
- 요청 상세에서 **Edit Qty**로 확정 수량을 수정한 뒤 **Request Confirm** → **Approve**로 승인하고, 반려는 **Rejected**를 클릭합니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-request-03.png').default}
  alt="요청 건 선택 후 Approval / Rejected 처리"
  boxes={[
    {x: 2.0, y: 60.1, w: 96.1, h: 3.0},
    {x: 48.2, y: 94.8, w: 11.9, h: 2.2},
  ]}
/>


### Step 4. 출고 등록 생성 확인

- 승인되면 **Outbound List**에 출고 등록 건이 생성되며, 상태는 `Outbound Completed`로 표시됩니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/outbound-request-04.png').default}
  alt="승인 후 Outbound List에 출고 등록 건 생성 (Outbound Completed)"
  boxes={[
    {x: 1.5, y: 16.1, w: 11.4, h: 3.5},
    {x: 1.7, y: 94.9, w: 97.8, h: 4.6},
  ]}
/>


## 3. 출고 내역 확인

**Outbound List** 탭에서 Type `S2S`로 조회하고, 행을 클릭하면 출고 상세를 확인할 수 있습니다.<br/>
상세 화면의 **Outbound Information**에서 출고 방법과 배송사·송장번호를 입력하고 **Save**하면, 입고 스토어의 입고 상세에서도 확인할 수 있습니다.

<AnnotatedImage
  src={require('./img/outbound-list-01.png').default}
  alt="Outbound List 탭에서 Type S2S 조회 후 행 클릭"
  boxes={[
    {x: 13.8, y: 12.4, w: 9.9, h: 2.8},
    {x: 21.6, y: 31.7, w: 31.0, h: 2.2},
    {x: 57.1, y: 43.4, w: 5.3, h: 2.2},
    {x: 14.0, y: 58.9, w: 84.8, h: 3.0},
  ]}
/>

<AnnotatedImage
  src={require('./img/outbound-detail-01.png').default}
  alt="출고 상세 화면"
  boxes={[
    {x: 12.1, y: 6.2, w: 6.9, h: 2.3},
    {x: 0.7, y: 13.1, w: 99.2, h: 23.9},
    {x: 1.9, y: 76.7, w: 96.8, h: 14.9},
  ]}
/>

<AnnotatedImage
  src={require('./img/outbound-detail-02.png').default}
  alt="Outbound Information — 출고 방법 선택"
  boxes={[
    {x: 11.4, y: 67.7, w: 11.9, h: 23.6},
    {x: 92.9, y: 60.5, w: 6.0, h: 4.1},
  ]}
/>

<AnnotatedImage
  src={require('./img/outbound-detail-03.png').default}
  alt="출고 방법·배송사/송장번호 입력 후 Save"
  boxes={[
    {x: 11.3, y: 67.7, w: 11.9, h: 3.6},
    {x: 11.3, y: 77.3, w: 87.6, h: 3.8},
    {x: 93, y: 60.5, w: 5.9, h: 4.1},
  ]}
/>

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
