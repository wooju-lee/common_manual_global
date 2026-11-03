---
sidebar_label: C2C Corporate Outbound (C2C 법인 출고)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-09-15"
countries: [us]
---

# 📍 C2C Corporate Outbound (C2C 법인 출고)

> C2C : Corporation To Corporation으로, 법인 간의 거래를 통한 출고 유형을 의미합니다.<br/>
> 출고 유형은 출고 · 입고 스토어(로케이션)를 선택하면 자동으로 정해집니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## 출고 유형

| 유형 | 설명 | 출발지 → 도착지 | 운영 예시 |
|:---:|---|---|---|
| **C2C** | 법인 간 이동 | 법인 → 법인 | 법인 물류 입고 후, 본사 반품이 필요해 전산 상 '재고 차감(출고)'가 필요한 경우 |
| **S2L** | 스토어 → 물류 | 스토어 → 물류 창고 <span className="info-badge">같은 법인 내에서만 허용</span> | 스토어 재고를 물류로 회송이 필요한 경우 (e.g : 스토어 반품) |
| **S2S** | 스토어 간 이동 | 스토어 → 스토어 <span className="info-badge">같은 법인 내에서만 허용</span> | 전산 상 '스토어'로 설정된 구간에서 재고 이동이 필요한 경우 |
| **L2S** | 물류 → 스토어 | 물류 창고 → 스토어 <span className="info-badge">같은 법인 내에서만 허용</span> | 물류 재고를 스토어로 분배(출고)가 필요한 경우 |

## C2C 출고 처리

<mark>**C2C 출고는 등록 즉시 `Outbound Completed`(출고 완료)로 처리되며, 출고 스토어 재고가 바로 차감됩니다.**</mark><br/>
WMS(LXP) 출고 요청 없이 BO 재고에서만 차감됩니다.

## 주요 제약 사항

| 항목 | 내용 |
|---|---|
| **재고 실사 중 출고 불가** | 출고 스토어 · 로케이션에서 재고 실사가 진행 중이면 출고할 수 없습니다. |
| **최대 300 SKU** | 출고 1건에 담을 수 있는 제품은 최대 300개(SKU)입니다. |
| **같은 제품 중복 불가** | 출고 1건 안에 같은 제품 코드를 두 번 넣을 수 없습니다. 수량을 합쳐 한 줄로 입력합니다. |

<div className="blockquote-gray">

> 등록 화면 · 절차 안내는 준비 중입니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-09-15 | 최초 작성 | Wooju(Landa) |
| 2026-11-03 | 출고 유형 비교표 이관(S2L 문서 → C2C), C2C 처리 방식 · 제약 사항 추가 | Wooju(Landa) |
