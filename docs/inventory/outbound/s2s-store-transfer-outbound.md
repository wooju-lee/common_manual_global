---
sidebar_label: S2S Store Transfer Outbound (S2S 스토어 간 출고)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-09-15"
countries: [us]
---

# 📍 S2S Store Transfer Outbound (S2S 스토어 간 출고)

> S2S : Store To Store로, 같은 법인 안의 스토어 간 재고를 이동하는 출고 유형을 의미합니다. 👉 **[출고 유형 비교 바로가기](/docs/inventory/outbound/c2c-outbound#출고-유형)**
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## 주요 제약 사항

| 항목 | 내용 |
|---|---|
| **같은 법인만 가능** | 출고 스토어와 입고 스토어가 <mark>**같은 법인**</mark>이어야 합니다. |
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
| 2026-11-03 | 메뉴명 변경(스토어 간 이동 출고 → 스토어 간 출고), 제약 사항 추가 (Transfer Order 문서 이관) | Wooju(Landa) |
