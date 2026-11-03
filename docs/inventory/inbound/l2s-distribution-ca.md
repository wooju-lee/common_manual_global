---
sidebar_label: L2S Distribution Inbound (스토어 분배)
sidebar_position: 5
author: Wooju(Landa)
created: "2026-10-29"
countries: [ca]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 L2S Distribution Inbound (스토어 분배)

> 물류(창고) 로케이션에서 스토어로 제품을 분배하는 이동을 <strong>L2S(Logistics To Store)</strong>로 정의합니다.<br/>
> 물류에서 출고한 제품을 스토어에서 받아 입고를 확정하는 과정을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inbound List</span>

<div className="blockquote-mint">

> <mark>**CA는 L2S 출고 · 입고가 NetSuite ERP의 Transfer Order(TO)로 연동되며, WMS 연동은 없습니다.**</mark><br/>
> 출고 등록 후 NetSuite에 TO가 생성되어야 출고가 완료되고, 입고 스토어에 입고 예정 건이 생성됩니다.

</div>

## 👉 L2S 입고 순서

> **물류 출고 등록** → **NetSuite TO 생성 · 출고 완료** → **입고 정보 생성** → **실물 입고 · 재고 카운트** → **입고 확정**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 물류(창고) 로케이션에서 스토어 로케이션으로 L2S 출고 등록 (`Outbound Planned`) | 👤 물류 담당자 |
| **2** | NetSuite에 TO 생성 → 출고 완료 (`Outbound Completed`), 물류 로케이션 재고 차감 | ⚙️ 자동 (NetSuite 연동) |
| **3** | 출고 완료에 따라 입고 스토어의 입고 정보 생성 (`Pending Inbound`) | ⚙️ 자동 |
| **4** | 실물 입고 도착 → 재고 카운트 | 👤 입고 스토어 |
| **5** | 입고 확정 → 입고 스토어 기준 재고 가산 (`Inbound Confirmed`), NetSuite TO 입고(Item Receipt) 반영 | 👤 입고 스토어 (승인 권한 계정)<br/>⚙️ 자동 (NetSuite 반영) |

<div className="blockquote-gray">

> L2S는 출고 로케이션이 **물류(창고) 유형**, 입고 로케이션이 **스토어 유형**일 때 자동으로 구분되며, 같은 법인 안에서만 등록할 수 있습니다.<br/>
> 출고 등록 시 **Outbound Tag**를 반드시 선택해야 합니다.

</div>

## 1. 입고 예정 확인

**Inbound List**에서 입고 예정 건을 확인합니다.<br/>
L2S 입고는 Type `L2S`, Channel `TO_INBOUND`(출고 등록으로 생성된 입고)로 표시됩니다.

<AnnotatedImage
  src={require('./img/inbound-list-01.png').default}
  alt="Inbound List — 입고 예정 건"
  boxes={[
    {x: 12, y: 29.1, w: 40.2, h: 3.3},
    {x: 2.1, y: 82.2, w: 96.8, h: 10.7},
  ]}
/>

- 입고 건의 Reference 번호는 <mark>**NetSuite TO 번호**</mark>로 표시됩니다.
- 출고 완료 시점부터 입고 확정 전까지 해당 수량은 입고 스토어의 `Pending Inbound`(입고 예정)로 표시되며, 입고 확정 전에는 재고에 반영되지 않습니다. 👉 **[Inventory List 바로가기](/docs/inventory/inventory-list-ca)**

## 2. 입고 확정

실물 수량이 `Expected Inbound Qty`와 같은지 확인한 뒤, **Inbound Confirmed** → **Confirm**을 클릭합니다.<br/>
확정하면 입고 스토어 기준으로 재고가 가산되고, 상태가 `Inbound Confirmed`로 바뀝니다.

- 입고 확정 시 <mark>**재고 원장에 오더 넘버 기준으로 입고 이력**</mark>(`Inbound (Manual)`)이 남습니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-ca)**
- 입고 확정 후 NetSuite TO의 입고(Item Receipt)가 자동으로 반영됩니다.
- 여러 건은 목록에서 체크박스로 선택한 뒤 하단 **Inbound Confirmed**로 한 번에 확정할 수 있습니다.

<div className="blockquote-warning">

> <mark>**L2S 입고는 수량을 수정할 수 없으며, 출고 수량 그대로 확정됩니다.**</mark><br/>
> <mark>**입고 확정은 취소할 수 없습니다.**</mark> 실물 수량이 다르면 물류 담당자와 확인 후 **추가 출고** 또는 **재고 조정**으로 처리해 주세요. 👉 **[Adjustment 바로가기](/docs/inventory/adjustment-ca)**

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 출고 등록을 했는데 입고 목록에 보이지 않아요.**
>
> A. NetSuite에 TO가 생성되어 <u>출고가 완료된 후</u>에 입고 예정 건이 생성됩니다.
>
> 출고 상태가 `Registration Failed`(TO 생성 실패)이면 입고 건이 생성되지 않으니, 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-29 | CA 최초 작성 (코드 기준 초안) | Wooju(Landa) |
