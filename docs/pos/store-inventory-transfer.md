---
sidebar_label: 📦 매장 재고 이동
sidebar_position: 3
author: Wooju
created: "2026-04-21"
countries: [us]
---

# 📍 매장 재고 이동 (Sales > DP)

> POS에서 Sales 로케이션 재고를 DP 로케이션으로 이동 처리하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Front POS Main > Inventory 모드</span>

---

## 👉 재고 이동이란?

POS Main에서 매출 처리 외에도 **로케이션 간 재고 이동**을 처리할 수 있습니다.

| 구분 | 설명 |
|---|---|
| **기본 모드** | SALES (매출 처리) |
| **전환 모드** | Inventory (재고 이동) |
| **이동 방향** | Sales 로케이션 → DP 로케이션 |
| **ERP 연동** | Movement (Inventory Transfer) |

- POS Main 상단의 스위치(토글)를 **SALES → Inventory**로 변경하면 재고 이동 모드가 활성화됩니다.

## 1. 제품 검색

- 제품 마스터 코드, 제품명 또는 바코드를 통해 이동할 제품 목록을 반영합니다.

## 2. 이동 처리

- 활성화되는 이동 버튼을 선택하면, Sales 재고 1개가 DP 로케이션으로 이동됩니다.

## 3. 이력 확인

- 이동 이력은 <span className="path-badge">IIC BO > Inventory > Movement</span> 리스트에서 조회할 수 있습니다.
- 본 재고 로케이션 이동은 **ERP(Netsuite)와 연동**되어 있으며, IIC BO에서 처리 시 Netsuite Inventory Transfer 내역이 자동 생성됩니다.

## 4. 처리 직원 설정

- 재고 이동 시 **어떤 직원이 처리했는지 이력이 기록**됩니다.
- POS Main 상단의 **직원 드롭다운**을 실제 처리한 직원으로 정확히 설정한 후 진행해 주세요.

---

<div className="qna-section">

## ❓ FAQ

> **Q. 이동 처리 후 이력은 어디서 확인하나요?**
>
> A. <u>IIC BO > Inventory > Movement</u> 리스트에서 조회할 수 있습니다.

> **Q. 직원 설정을 잘못한 상태로 이동 처리했어요.**
>
> A. 이동 이력은 <u>수정이 불가</u>합니다.
>
> 해당 이력을 확인하는 담당자 간 소통을 통해 인지하는 방식으로 처리해 주세요.

> **Q. DP에서 Sales로 역방향 이동도 가능한가요?**
>
> A. POS에서의 재고 이동은 <u>Sales → DP</u> 방향만 가능합니다.
>
> 역방향 이동이 필요한 경우 <u>IIC BO > Inventory Movement</u> 메뉴에서 스토어 및 로케이션별 선택을 통해 처리할 수 있습니다.

</div>
