---
sidebar_label: S2L Store Return Inbound (스토어 반품)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-29"
countries: [ca]
---

# 📍 S2L Store Return Inbound (스토어 반품)

> 스토어에서 물류(창고) 로케이션으로 제품을 반품하는 이동을 <strong>S2L(Store To Logistics)</strong>로 정의합니다.<br/>
> 스토어 반품 출고 후 물류에 입고가 반영되는 과정을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inbound List</span>

<div className="blockquote-mint">

> <mark>**CA는 S2L 출고 · 입고가 NetSuite ERP의 Transfer Order(TO)로 연동되며, WMS 연동은 없습니다.**</mark><br/>
> <mark>**S2L 입고는 출고 완료 시 자동으로 입고 확정되므로, 물류에서 별도로 입고 확정할 필요가 없습니다.**</mark>

</div>

## 👉 S2L 입고 순서

> **스토어 반품 출고 등록** → **NetSuite TO 생성 · 출고 완료** → **물류 입고 자동 확정**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 스토어 로케이션에서 물류(창고) 로케이션으로 S2L 출고 등록 (`Outbound Planned`) | 👤 출고 스토어 |
| **2** | NetSuite에 TO 생성 → 출고 완료 (`Outbound Completed`), 스토어 재고 차감 | ⚙️ 자동 (NetSuite 연동) |
| **3** | 출고 완료와 동시에 물류 입고 정보 생성 및 입고 확정 (`Inbound Confirmed`), 물류 로케이션 재고 가산 | ⚙️ 자동 |
| **4** | NetSuite TO 출고(Item Fulfillment) · 입고(Item Receipt) 반영 | ⚙️ 자동 (NetSuite 반영) |

<div className="blockquote-gray">

> S2L은 출고 로케이션이 **스토어 유형**, 입고 로케이션이 **물류(창고) 유형**일 때 자동으로 구분되며, 같은 법인 안에서만 등록할 수 있습니다.<br/>
> 물류 도착 즉시 확정되는 것으로 처리하기 때문에, <mark>**입고 예정(`Pending Inbound`) 상태를 거치지 않습니다.**</mark>

</div>

## 1. 입고 내역 확인

**Inbound List**에서 S2L 입고 내역을 확인합니다.<br/>
S2L 입고는 Type `S2L`, Channel `TO_INBOUND`(출고 등록으로 생성된 입고)로 표시되며, 생성 시점부터 상태는 `Inbound Confirmed`입니다.

<div className="img-placeholder">📷 [Image] Inbound List — S2L 입고 건 (Inbound Confirmed)</div>

- 입고 건의 Reference 번호는 <mark>**NetSuite TO 번호**</mark>로 표시됩니다.
- 입고 확정자는 `SYSTEM`으로 기록됩니다.
- 재고 원장에는 물류 로케이션 기준 입고 이력(`Inbound (Manual)`)이 남습니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-ca)**

<div className="blockquote-warning">

> <mark>**S2L 입고는 수량 수정 · 취소가 불가합니다.**</mark> 출고 수량 그대로 물류 재고에 반영됩니다.<br/>
> 실물 수량이 다르면 스토어와 물류 담당자 간 확인 후 **재고 조정**으로 처리해 주세요. 👉 **[Adjustment 바로가기](/docs/inventory/adjustment-ca)**

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 반품 출고를 등록했는데 물류 재고에 반영되지 않았어요.**
>
> A. NetSuite에 TO가 생성되어 <u>출고가 완료된 후</u>에 물류 입고가 자동 확정됩니다.
>
> 출고 상태가 `Registration Failed`(TO 생성 실패)이면 입고가 반영되지 않으니, 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-29 | CA 최초 작성 (코드 기준 초안) | Wooju(Landa) |
