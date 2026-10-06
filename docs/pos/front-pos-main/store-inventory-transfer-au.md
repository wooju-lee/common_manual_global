---
sidebar_label: Inventory Transfer SALES → DP (매장 재고 이동)
sidebar_position: 3
author: Wooju(Landa)
created: "2026-10-03"
countries: [au]
---

# 📍 Inventory Transfer SALES → DP (매장 재고 이동)

> 매장에서 **SALES(판매) 재고를 DP(전시) 재고로** 손쉽게 이동하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > FRONT POS (MAIN) > INVENTORY</span>

## 👉 재고 이동 순서

> **INVENTORY 모드 전환** → **제품 담기** → **(SALES → DP) 클릭**

이동 구간은 로그인한 계정의 매장 기준 <strong>SALES(1000) → DP(1010)</strong>으로 고정되어 있어, 별도로 로케이션을 선택하지 않습니다.

## 1. INVENTORY 모드 전환

<div className="img-placeholder">📷 [Image] Front POS Main — INVENTORY 모드 화면</div>

Front POS Main 상단의 토글을 **INVENTORY**로 전환하면, 화면이 재고 이동용으로 바뀝니다.<br/>
우측에 **(SALES → DP)** 버튼이 표시되며, <mark>**멤버십·고객 객층 정보 영역은 사용하지 않습니다.**</mark>

<div className="blockquote-gray">

> 모드를 전환하면 담아둔 제품 목록이 초기화됩니다.

</div>

## 2. 제품 담기

<div className="img-placeholder">📷 [Image] 이동할 제품을 담은 목록 및 활성화된 (SALES → DP) 버튼</div>

**Product Barcode**에서 제품을 스캔하거나, 드롭다운에서 검색·선택해 목록에 담습니다.<br/>
제품이 담기면 **(SALES → DP)** 버튼이 활성화됩니다.

- 수량은 `-` / `+` 버튼으로 조정하고, `Stock (SALES)`에서 이동 가능한 SALES 재고를 확인할 수 있습니다.

<div className="blockquote-warning">

> <mark>**이동할 제품의 SALES 가용 재고가 있어야 이동할 수 있습니다.**</mark><br/>
> 이동 수량이 `Stock (SALES)`의 가용 재고보다 많으면 처리되지 않습니다.

</div>

## 3. (SALES → DP) 클릭

**(SALES → DP)** 버튼을 클릭하면 등록 즉시 재고가 이동됩니다.

- 처리 내역은 재고 이동 목록과 재고 원장에 기록됩니다. 👉 **[Inventory Movement 바로가기](/docs/inventory/movement/transfer-au)** 👉 **[Inventory Ledger 바로가기](/docs/inventory/inventory-ledger-au)**
- **Cashier** 선택은 필수이며, 같은 캐셔를 계속 유지하려면 **Save cashier information**을 체크한 뒤 진행합니다.
- 재고 이동 목록의 처리자(`Process Account`)는 Cashier가 아닌 **POS에 로그인한 계정**으로 기록됩니다.

<div className="blockquote-warning">

> 완료 시 매출 등록과 같은 문구(`Sales information has been successfully registered.`)가 표시되지만, **매출은 생성되지 않고 재고 이동만 처리**됩니다.<br/>
> 재고 실사 중이거나 SALES 가용 재고가 부족하면 이동할 수 없습니다.

</div>

<div className="blockquote-gray">

> 다른 로케이션 간 이동이나 DP → SALES 이동은 로케이션 이동 메뉴에서 처리합니다. 👉 **[Inventory Movement 바로가기](/docs/inventory/movement/transfer-au)**

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | AU 최초 작성 (텍스트) | Wooju(Landa) |
| 2026-10-03 | 화면 기준 재고 이동 순서로 재작성 | Wooju(Landa) |
