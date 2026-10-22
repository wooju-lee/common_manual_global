---
sidebar_label: Product Sales View (제품별 매출 조회)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
updated: "2026-10-12"
countries: [au]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Product Sales View (제품별 매출 조회)

> 일자별 · 스토어별로 **제품 단위**의 판매·반품 합계를 조회하는 메뉴입니다.
>
> 경로 : <span className="path-badge">IIC BO > Sales > Product Sales View</span>

## 👉 언제 사용하나요?

- 특정 제품이 **스토어별로 얼마나 판매·반품되었는지** 확인할 때
- 일자별 **제품 판매 실적**을 비교할 때

## 1. 매출 조회

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/product-sales-view-01.png').default}
  alt="Product Sales View — Keyword 검색, Sales Type"
  boxes={[
    {x: 1.4, y: 36.2, w: 64.2, h: 4.4},
    {x: 70.8, y: 64.6, w: 5.0, h: 35.0},
  ]}
/>

조회할 기간과 스토어를 선택하고, 특정 제품만 보려면 **Keyword**에 제품 코드나 제품명을 입력한 뒤 **Search**를 클릭합니다.

<div className="blockquote-gray">

> **Store**는 BP를 먼저 선택해야 선택할 수 있습니다.

</div>

## 2. 목록에서 확인할 수 있는 것

- 한 행은 **일자 · 스토어 · 제품**별 합계입니다. 같은 날 같은 제품에 반품이 있으면 `Sales`(판매)와 `Refund`(반품)가 별도 행으로 표시됩니다.
- **Product Category 1 / 2**로 제품 분류(예: `OPTICAL` / `OPTICAL COMBI`)를 함께 확인할 수 있습니다.
- **Total**은 VAT 포함 금액, **Net**은 VAT 제외 금액입니다.
- 다른 매출 조회 메뉴와 달리 **Total Sum(합계) 영역이 없습니다.** 합계가 필요하면 **Excel Export**로 다운로드해 활용해 주세요.

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 메뉴 생성, 조회 방법 작성 | Wooju(Landa) |
| 2026-10-12 | 화면 이미지 추가 | Wooju(Landa) |
