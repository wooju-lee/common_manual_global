---
sidebar_label: Outbound Order List (출고별 주문 리스트)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-09-15"
updated: "2026-11-12"
countries: [us]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Outbound Order List (출고별 주문 리스트)

> RX, 프리오더처럼 **주문을 모아 출고를 생성하는 유형**에 대해, 출고 건과 연결된 주문을 **연계해서 확인**하는 메뉴입니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound Order List</span>

## 👉 언제 사용하나요?

- RX · 프리오더 출고 건에 **어떤 주문이 묶여 있는지** 확인할 때
- 프리오더 스토어 픽업 주문을 모아 **출고를 생성**할 때
- 출고가 NetSuite · WMS(LXP)까지 **정상 등록되었는지, 출고 완료되었는지** 확인할 때

<div className="blockquote-gray">

> 이 메뉴에는 **주문과 연결된 출고만** 표시됩니다. 일반 재고 이동 출고(C2C · S2S · L2S · S2L)는 `Outbound List`에서 확인합니다.

</div>

| 출고 태그 | 출고 생성 방식 |
|---|---|
| **RX** | <mark>**하루 1회 자동 생성**</mark> — 이 메뉴에서는 조회만 |
| **Pre-Order** | <mark>**작업자가 직접 생성**</mark> 👉 아래 **3. 출고 생성** 참고 |

## 1. 리스트 검색

<AnnotatedImage
  maxWidth="900px"
  src={require('./img/outbound-order-list-01.png').default}
  alt="Outbound Order List — 검색 영역"
  boxes={[
    {n: 1, x: 10, y: 16, w: 59.5, h: 18.5},
  ]}
/>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **BP** | 법인 선택 | 기본값 `All` |
| **Store** | 출발 · 도착 스토어 선택 (복수 선택 가능) | BP를 바꾸면 선택이 초기화됨 |
| **Outbound Status** | 출고 상태 (복수 선택 가능) 👉 아래 **5. 출고 상태** 참고 | |
| **Outbound Tag** | `All` / `RX` / `Pre-Order` | |
| **Type** | 출고 유형 (복수 선택 가능)<br/>• `C2C` 법인 간<br/>• `S2S` 스토어 → 스토어<br/>• `L2S` 물류 → 스토어<br/>• `S2L` 스토어 → 물류 | |
| **Registration Date** | 출고 등록일 기간 (`Today` / `1 Week` / `1 Month` / `3 Months` 빠른 선택) | **필수**, 기본 최근 30일<br/>출발 스토어 시간 기준 |
| **검색어** | • 출발 · 도착 스토어 코드 / 스토어명<br/>• I/V No<br/>• Tracking No<br/>• 주문 번호 | 2자 이상 입력 |

- **Excel Export**로 현재 검색 조건의 목록을 다운로드할 수 있습니다. (최대 10,000건)

## 2. 리스트 컬럼

<AnnotatedImage
  maxWidth="900px"
  src={require('./img/outbound-order-list-02.png').default}
  alt="Outbound Order List — 프리오더 출고 건"
  boxes={[
    {n: 1, x: 20.5, y: 84, w: 28.5, h: 15.5},
  ]}
/>

| 컬럼 | 설명 |
|---|---|
| **Registration Date**<br/><span className="label-sub">등록일시</span> | 출고 등록 일시 (스토어 타임존 표기), 기본 최신순 |
| **Outbound Status**<br/><span className="label-sub">출고 상태</span> | 현재 출고 상태 👉 아래 **5. 출고 상태** 참고 |
| **Outbound Tag**<br/><span className="label-sub">출고 태그</span> | 출고를 만든 주문 유형 (`RX` / `PREORDER`) |
| **Type**<br/><span className="label-sub">출고 유형</span> | `S2S` · `L2S` 등 출고 유형 코드 |
| **I/V No.**<br/><span className="label-sub">출고 번호</span> | NetSuite TO 번호<br/>TO가 아직 없으면 BO 출고 번호(`STM…`) |
| **Order**<br/><span className="label-sub">주문 수</span> | 이 출고에 연결된 주문 수 |
| **From Store / From Location**<br/><span className="label-sub">출발 스토어 / 로케이션</span> | 출고하는 스토어와 로케이션 (코드 / 이름) |
| **To Store / To Location**<br/><span className="label-sub">도착 스토어 / 로케이션</span> | 받는 스토어와 로케이션 (코드 / 이름)<br/>프리오더는 픽업 스토어의 `1050 / OMNI` |
| **Created By**<br/><span className="label-sub">등록자</span> | 출고를 등록한 계정 |

- 행을 클릭하면 **출고 상세** 화면으로 이동합니다.

## 3. 출고 생성 (Pre-Order)

<div className="blockquote-gray">

> **RX 출고**는 하루 1회 자동 생성되어, 이 메뉴에서는 조회만 합니다.<br/>
> 이 메뉴에서 직접 생성하는 출고는 **프리오더**뿐입니다.

</div>

프리오더는 **일반 주문이면서 스토어 픽업**인 주문입니다.<br/>
**Outbound Registration** 버튼을 누르면 `PRE-ORDER` 탭에서 출고할 주문 목록을 확인할 수 있습니다.

<div className="blockquote-warning">

> 스토어 픽업 프리오더는 <mark>**고객이 인도받기 전까지 취소할 수 있습니다.**</mark><br/>
> 출고를 생성하기 전에 취소된 주문은 목록에서 사라집니다.

</div>

### Step 1. 주문 검색

<AnnotatedImage
  maxWidth="640px"
  src={require('./img/outbound-order-list-03.png').default}
  alt="Outbound Registration — Pre-Order 검색 조건과 안내 문구"
  boxes={[
    {n: 1, x: 6.5, y: 18, w: 33, h: 6.5},
    {n: 2, x: 5, y: 39.4, w: 90, h: 6.2},
  ]}
/>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **BP** | 법인 선택 | |
| **Store** | 픽업 스토어 선택 | <mark>**BP를 먼저 선택**</mark>해야 선택 가능 |
| **Date Type** | 기간 기준<br/>• `Order Date` 주문일 (기본)<br/>• `Launch Date` 출시일<br/>• `Ship Date` 출고 예정일<br/>• `Pickup Date` 픽업 예정일 | |
| **Registration Date** | 기간 + 시간 (기본 최근 30일) | 시간은 `Order Date` 기준일 때만 적용 |
| **검색어** | 주문 번호, 스토어 코드 / 스토어명 | 2자 이상 입력 |

목록에는 아래 조건을 모두 만족하는 주문만 나옵니다.
- 프리오더 + 스토어 픽업 주문
  - 취소되지 않은 주문
  - 아직 출고가 생성되지 않은 주문

### Step 2. 주문 선택 후 등록

<AnnotatedImage
  maxWidth="640px"
  src={require('./img/outbound-order-list-04.png').default}
  alt="Outbound Registration — 주문 선택 후 Register"
  boxes={[
    {n: 1, x: 4, y: 73.5, w: 4.2, h: 10.5},
    {n: 2, x: 85.8, y: 91.4, w: 11, h: 3.6},
  ]}
/>

출고할 주문을 체크하고 **Register**를 클릭합니다.

| 규칙 | 설명 |
|---|---|
| **같은 BP만** | 같은 BP의 주문만 함께 등록할 수 있습니다. |
| **스토어별로 생성** | 여러 픽업 스토어의 주문을 함께 선택해도, 출고는 <mark>**픽업 스토어별로 나뉘어**</mark> 생성됩니다. |
| **도착 로케이션** | 픽업 스토어의 `1050 / OMNI` 로케이션으로 자동 지정됩니다. |

아래 경우에는 등록되지 않고 에러가 표시됩니다.
- 출발 로케이션의 실재고가 부족한 경우 (렌즈 · 패키지 제외)
- 출발 스토어가 재고 실사 중인 경우
- 픽업 스토어 주소가 등록되어 있지 않은 경우

## 4. 출고 상세

<AnnotatedImage
  maxWidth="900px"
  src={require('./img/outbound-order-list-05.png').default}
  alt="출고 상세 — 출고 정보와 연결된 주문 목록"
  boxes={[
    {n: 1, x: 8.4, y: 6.5, w: 5.6, h: 5.5},
    {n: 2, x: 0.6, y: 47.8, w: 7.8, h: 5.5},
    {n: 3, x: 74.5, y: 53.5, w: 24.8, h: 7},
  ]}
/>

| 영역 | 설명 |
|---|---|
| **상단** | I/V No.(클릭 시 복사)와 출고 상태 |
| **Outbound Information**<br/><span className="label-sub">출고 정보</span> | 등록일시, 출발 · 도착 스토어 / 로케이션 |
| **Order List**<br/><span className="label-sub">주문 목록</span> | 연결된 주문 수(`N orders`)와 주문별 제품<br/>• `Order #` 주문 번호<br/>• `Product Info` 제품 코드 / 이름<br/>• `Product Category` / `Product Sub category` 제품 분류<br/>• `Outbound Qty (Registered)` 출고 등록 수량<br/>• `Outbound Qty (Completed)` 출고 완료 수량 |

- **Excel Export**로 출고 정보와 주문별 제품 목록을 다운로드할 수 있습니다.
- `Outbound Registered` 상태의 L2S · S2L 출고는 **Outbound Canceled** 버튼으로 취소할 수 있습니다.<br/>
취소하면 NetSuite TO와 WMS 출고 요청도 함께 취소되고, 주문은 다시 출고 생성 목록에 나옵니다.

## 5. 출고 상태

US는 출고를 생성하면 **NetSuite에 TO 생성을 요청**하고, TO 정보를 받은 뒤 **WMS(LXP)로 출고를 요청(B2B)**합니다.

<div className="blockquote-gray">

> 출고 생성 → NetSuite TO 생성 요청 → TO 정보 수신 → WMS(LXP) 출고 요청 (B2B) → WMS 출고 완료

</div>

| 상태 | 의미 | 바뀌는 시점 |
|---|---|---|
| **Outbound Planned**<br/><span className="label-sub">출고 예정</span> | 출고가 생성된 상태 | 출고 생성 직후 |
| **Pending Registration**<br/><span className="label-sub">등록 대기</span> | NetSuite TO 생성을 기다리는 상태 | NetSuite로 TO 생성 요청 시 |
| **Outbound Registered**<br/><span className="label-sub">등록 완료</span> | WMS(LXP)가 출고 요청을 접수한 상태 | WMS 접수 결과 수신 시 |
| **Registration Failed**<br/><span className="label-sub">등록 실패</span> | NetSuite 또는 WMS 등록에 실패한 상태 | 등록 실패 결과 수신 시 |
| **Outbound Completed**<br/><span className="label-sub">출고 완료</span> | WMS에서 출고가 끝난 상태 | WMS 출고 완료 결과 수신 시 |
| **Outbound Canceled**<br/><span className="label-sub">출고 취소</span> | 출고가 취소된 상태 | 상세 화면에서 취소하거나, WMS에서 취소 통보 시 |

- 상태는 사용자가 직접 바꾸지 않고, **NetSuite · WMS 결과에 따라 자동으로** 바뀝니다. (취소 제외)
- `Registration Failed`가 되면 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

`Outbound Completed`가 되면 재고가 아래처럼 반영됩니다.
- 출발 로케이션: 출고 대기 해제, **실재고 차감**
- 도착 스토어 `1050 / OMNI`: **입고 예정** 생성

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-11-12 | 메뉴 내용 작성 (조회 · 프리오더 출고 생성 · 상세 · 출고 상태, 코드 기준) | Wooju(Landa) |
| 2026-09-15 | 최초 작성 | Wooju(Landa) |
