---
sidebar_label: Daily Record View (데일리 매출 조회)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Daily Record View (데일리 매출 조회)

> 일자를 기준으로 각 스토어에서 발생한 매출을 **영수증(건) 단위**로 조회하는 메뉴입니다. 판매·반품 건별 기본 정보와 고객 객층 정보를 확인할 수 있습니다.
>
> 경로 : <span className="path-badge">IIC BO > Sales > Daily Record View</span>

## 👉 언제 사용하나요?

- 특정 일자에 스토어에서 발생한 **판매·반품 건을 영수증 하나씩** 확인할 때
- 영수증별 **구매 제품과 고객 객층 정보**를 확인할 때

## 1. 매출 조회

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-record-view-01.png').default}
  alt="Daily Record View 목록 — Receipt No. / Original Receipt No., Sales Type"
  boxes={[
    {x: 26.4, y: 52.0, w: 9.4, h: 45.0},
    {x: 38.0, y: 52.0, w: 4.2, h: 45.0},
  ]}
/>

조회할 기간과 스토어를 선택한 뒤 **Search**를 클릭합니다.

<div className="blockquote-gray">

> - **Store**는 BP를 먼저 선택해야 선택할 수 있습니다.
> - 상단 <strong>Total Sum(합계)</strong>은 **Currency**를 선택해야 표시됩니다.

</div>

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-record-view-02.png').default}
  alt="Currency 선택 시 Total Sum 표시"
  boxes={[
    {x: 26.0, y: 25.6, w: 6.8, h: 5.2},
    {x: 1.2, y: 62.4, w: 97.8, h: 33.0},
  ]}
/>

## 2. 목록에서 확인할 수 있는 것

- **반품 건**은 Sales Type이 `REFUND`로 표시되고, 수량·금액이 <strong>음수(-)</strong>로 나옵니다. 영수증 번호 아래에는 **원 판매 영수증 번호**가 함께 표시됩니다.
- **고객 객층 정보**(Country, Continent, Customer Type, Gender, Usage Type)는 판매 영수증에만 기록되므로, 반품 건은 `-`로 표시됩니다.
- **Total Sum**의 `Total`은 판매(`Sales`)와 반품(`Refund`)을 합한 금액입니다.
- **Excel Export**로 조회된 목록을 다운로드할 수 있습니다.

## 3. 영수증 상세 보기

목록의 <strong>Receipt No.</strong>를 클릭하면 영수증 상세 팝업이 열려, 판매 정보·고객 정보·구매 제품을 한 번에 확인할 수 있습니다.

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-record-view-03.png').default}
  alt="판매 영수증 상세 팝업"
  boxes={[
    {x: 60.6, y: 25.4, w: 6.2, h: 6.4},
    {x: 7.5, y: 46.6, w: 80.8, h: 36.2},
  ]}
/>

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-record-view-04.png').default}
  alt="반품 영수증 상세 팝업 — 수량·금액 음수"
  boxes={[
    {x: 63.6, y: 25.2, w: 6.0, h: 7.0},
    {x: 59.2, y: 59.6, w: 32.0, h: 20.6},
  ]}
/>

반품 영수증에는 **Original Receipt No.**(원 판매 영수증 번호)가 표시되고, 고객 정보 대신 `Customer information is recorded on sales receipts only.` 안내가 표시됩니다.

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 메뉴 생성, 조회 방법 작성 | Wooju(Landa) |
| 2026-10-12 | 화면 이미지 추가 | Wooju(Landa) |
