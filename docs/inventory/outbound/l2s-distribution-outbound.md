---
sidebar_label: L2S Distribution Outbound (L2S 분배 출고)
sidebar_position: 4
author: Wooju(Landa)
created: "2026-09-15"
countries: [us]
---

# 📍 L2S Distribution Outbound (L2S 분배 출고)

> L2S : Logistics To Store로, 물류 창고 재고를 스토어로 분배하는 출고 유형을 의미합니다. 👉 **[출고 유형 비교 바로가기](/docs/inventory/outbound/c2c-outbound#출고-유형)**
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## 출고 상태

ERP(NetSuite) · WMS(LXP)와 연동되는 출고로, 처리 단계에 따라 상태가 바뀝니다.

`Outbound Planned` → `Pending Registration` → `Outbound Registered` → `Outbound Completed`

| 상태 | 의미 |
|---|---|
| **Outbound Planned**<br/><span className="label-sub">출고 예정</span> | 출고 등록 완료. ERP · WMS 연동 전 |
| **Pending Registration**<br/><span className="label-sub">출고 등록 대기</span> | ERP · WMS로 출고 요청을 보낸 상태 |
| **Outbound Registered**<br/><span className="label-sub">등록 완료</span> | WMS가 요청을 접수한 상태 |
| **Outbound Completed**<br/><span className="label-sub">출고 완료</span> | WMS(LXP)가 출고를 완료한 시점. 출고 스토어 재고가 차감됩니다. |
| **Registration Failed**<br/><span className="label-sub">등록 실패</span> | ERP · WMS 등록에 실패한 상태 |
| **Outbound Canceled**<br/><span className="label-sub">출고 취소</span> | WMS에서 취소된 상태 |

<div className="blockquote-gray">

> 상태는 WMS에서 결과를 받으면 자동으로 바뀌며, 직접 변경할 수 없습니다.<br/>
> `Registration Failed`이면 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

</div>

## 주요 제약 사항

| 항목 | 내용 |
|---|---|
| **같은 법인만 가능** | 출고 스토어와 입고 스토어가 <mark>**같은 법인**</mark>이어야 합니다. |
| **재고 실사 중 출고 불가** | 출고 스토어 · 로케이션에서 재고 실사가 진행 중이면 출고할 수 없습니다. |
| **최대 300 SKU** | 출고 1건에 담을 수 있는 제품은 최대 300개(SKU)입니다. |
| **같은 제품 중복 불가** | 출고 1건 안에 같은 제품 코드를 두 번 넣을 수 없습니다. 수량을 합쳐 한 줄로 입력합니다. |
| **입고 스토어 주소 필수** | WMS(LXP)는 <mark>**입고 스토어의 마스터 주소**</mark>로 배송합니다. 주소가 없거나 잘못되면 출고 등록이 되지 않습니다. |

<div className="blockquote-gray">

> 등록 화면 · 절차 안내는 준비 중입니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-09-15 | 최초 작성 | Wooju(Landa) |
| 2026-11-03 | 출고 상태 · 제약 사항 추가 (Transfer Order 문서 이관) | Wooju(Landa) |
