---
sidebar_label: S2S Store Transfer Inbound (S2S 스토어 간 입고)
sidebar_position: 4
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# S2S Store Transfer Inbound (S2S 스토어 간 입고)

> 호주는 마스터 정보가 모두 스토어로 이뤄져 있으며, 스토어 간 이동을 <strong>S2S(Store To Store)</strong>로 정의합니다.<br/>
> 다른 스토어에서 출고한 제품을 받아 입고를 확정하는 과정을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inbound List</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 S2S 입고 순서

> **출고 스토어 출고 등록** → **출고 완료에 따라 입고 정보 생성** → **실물 입고 · 재고 카운트** → **입고 확정**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 출고 스토어에서 S2S 출고 등록 → 즉시 출고 완료 상태 업데이트 | 👤 출고 스토어 (출고 등록)<br/>⚙️ 자동 (출고 완료) |
| **2** | 출고 완료에 따라 입고 스토어의 입고 정보 생성 (`Pending Inbound`) | ⚙️ 자동 |
| **3** | 실물 입고 도착 → 재고 카운트 | 👤 입고 스토어 |
| **4** | 입고 확정 → 입고 스토어 기준 재고 가산 (`Inbound Confirmed`) | 👤 입고 스토어 (승인 권한 계정) |

<div className="blockquote-gray">

> 출고 등록 시점부터 입고 확정 전까지 해당 수량은 입고 스토어의 `Pending Inbound`(입고 예정)로 표시되며, <mark>**입고 확정 전에는 재고에 반영되지 않습니다.**</mark> 👉 **[Inventory List 바로가기](/docs/inventory/inventory-list-au)**

</div>

## 1. 입고 예정 확인

<div className="img-placeholder">📷 [Image] Inbound List — S2S / TO_INBOUND 입고 예정 건</div>

**Inbound List**에서 입고 예정 건을 확인합니다.<br/>
S2S 입고는 Type `S2S`, Channel `TO_INBOUND`(출고 등록으로 생성된 입고)로 표시됩니다.

- 입고 상세 화면에서 출고 스토어가 입력한 출고 정보(`Outbound Method`, `Carrier / Tracking No.`)를 함께 확인할 수 있습니다.

## 2. 입고 확정

<div className="img-placeholder">📷 [Image] 입고 상세 — Inbound Confirmed 버튼 및 확인 팝업</div>

실물 수량이 `Expected Inbound Qty`와 같은지 확인한 뒤, **Inbound Confirmed** → **Confirm**을 클릭합니다.<br/>
확정하면 입고 스토어 기준으로 재고가 가산되고, 상태가 `Inbound Confirmed`로 바뀝니다.

- 입고 확정 시 재고가 가산되고, <mark>**재고 원장에 오더 넘버 기준으로 입고 이력**</mark>(`Inbound (Manual)`)이 남습니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-au)**
- 여러 건은 목록에서 체크박스로 선택한 뒤 하단 **Inbound Confirmed**로 한 번에 확정할 수 있습니다.

<div className="blockquote-warning">

> <mark>**S2S 입고는 수량을 수정할 수 없으며, 출고 수량 그대로 확정됩니다.**</mark><br/>
> 실물 수량이 다르면 아래와 같이 처리해 주세요.

</div>

| 경우 | 처리 방법 |
|---|---|
| **실물이 적게 온 경우** | 출고 스토어·입고 스토어 운영자 간 확인 후, **추가 발송** 또는 **재고 조정**으로 처리 👉 **[Adjustment 바로가기](/docs/inventory/adjustment-au)** |
| **실물이 많이 온 경우** | 출고 스토어에서 **추가 출고를 생성**하면, 입고 목록에 추가된 건으로 입고 처리 👉 **[S2S Store Transfer Outbound 바로가기](/docs/inventory/outbound/s2s-store-transfer-outbound-au)** |

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 추가, 매뉴얼 형식 정리 | Wooju(Landa) |
