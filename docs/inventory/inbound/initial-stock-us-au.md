---
sidebar_label: C2C Corporate Inbound (C2C 법인 입고)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 C2C Corporate Inbound (C2C 법인 입고)

> 한국 본사(SAP)에서 호주 법인으로 들어오는 **C2C(Corporation To Corporation)** 입고를 확인하고 확정하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Inbound List</span>

<div className="blockquote-mint">

> <mark>**AU는 재고 트랜잭션(입고 · 출고 · 이동 · 조정 · 실사)이 ERP로 연동되지 않습니다.**</mark><br/>
> 모든 처리 결과는 IIC BO 재고에만 반영됩니다.

</div>

## 👉 C2C 입고 순서

> **입고 예정 확인** → **실물 입고 · 재고 카운트** → **입고 확정**

| Step | 처리 내용 | 처리 주체 |
|:---:|---|---|
| **1** | 한국 본사 SAP에서 입고 전표(ASN) 발행 → BO 입고 목록에 실시간 생성 (`Pending Inbound`) | 한국 본사 → IIC BO (자동) |
| **2** | 실물 입고 도착 → 재고 카운트 | 입고 스토어 |
| **3** | 입고 확정 → 입고 스토어 기준 재고 반영 (`Inbound Confirmed`) | 입고 스토어 (승인 권한 계정) |

<div className="blockquote-gray">

> 법인 초기 재고 입고 등 C2C 입고는 출고로 생성되지 않고, <mark>**한국 본사 SAP의 입고 예정 정보(ASN)로만**</mark> BO에 생성됩니다.<br/>
> AU는 자가물류 국가로, **패키지는 WH 입고 목록**, **제품은 스토어 입고 목록**으로 각각 생성됩니다.

</div>

## 1. 입고 예정 확인

<div className="img-placeholder">📷 [Image] Inbound List — C2C / SAP 입고 예정 건</div>

**Inbound List**에서 입고 예정 건을 확인합니다.<br/>
C2C 입고는 Type `C2C`, Channel `SAP`으로 표시되며, 상태는 `Pending Inbound`입니다.

- 목록의 행을 클릭하면 입고 상세 화면으로 이동합니다.
- 목록 상단의 **Inbound Registration**(수기 입고 등록)은 AU에서 사용하지 않습니다.

## 2. 입고 확정

<div className="img-placeholder">📷 [Image] 입고 상세 — Actual Inbound Qty 입력 및 Inbound Confirmed 버튼</div>

실물을 카운트한 뒤, 입고 상세 화면에서 **Inbound Confirmed** → **Confirm**을 클릭합니다.<br/>
확정하면 입고 스토어 기준으로 재고가 반영되고, 상태가 `Inbound Confirmed`로 바뀝니다.

- 입고 확정 시 재고가 가산되고, <mark>**재고 원장에 오더 넘버 기준으로 입고 이력**</mark>(`Inbound (Manual)`)이 남습니다. 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-au)**
- 실물이 예정 수량보다 적으면 `Actual Inbound Qty`에 실제 입고 수량을 입력합니다. 비워두면 예정 수량으로 확정됩니다.
- 예정 수량보다 적게 확정하면, <mark>**차이 수량은 재고 조정으로 자동 기록**</mark>됩니다.
- 여러 건은 목록에서 체크박스로 선택한 뒤 하단 **Inbound Confirmed**로 한 번에 확정할 수 있습니다. 이 경우 <mark>**예정 수량 그대로** 확정</mark>됩니다.

<div className="blockquote-warning">

> <mark>**입고 확정은 취소할 수 없습니다.**</mark> 실물 카운트를 마친 뒤 수량을 확인하고 확정해 주세요.<br/>
> 입고 확정과 수량 입력은 **승인 권한**이 있는 입고 스토어 계정만 가능합니다.

</div>

<div className="qna-section">

## ❓ FAQ

> **Q. 실물이 예정 수량보다 많이 들어왔어요.**
>
> A. 예정 수량을 초과하여 확정할 수 없습니다. 예정 수량으로 확정한 뒤, 초과 수량은 운영팀과 협의해 주세요.

> **Q. 재고 실사 중에도 입고 확정이 가능한가요?**
>
> A. 네. 실사 중에도 입고는 가능합니다.

> **Q. 불량 등으로 한국 본사에 반품해야 해요.**
>
> A. 입고 확정 후 C2C 법인 출고로 처리합니다. 👉 **[C2C Corporate Outbound 바로가기](/docs/inventory/outbound/c2c-outbound-au)**

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-04 | 순서 요약 추가, 매뉴얼 형식 정리 | Wooju(Landa) |
