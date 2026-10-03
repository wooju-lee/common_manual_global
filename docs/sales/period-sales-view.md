---
sidebar_label: Period Sales View (기간별 매출 조회)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-03"
countries: [us]
---

# Period Sales View (기간별 매출 조회)

> 스토어에서 발생한 매출을 **시간대별 · 일별 · 월별**로 합산하여 조회하는 메뉴입니다.
>
> 경로 : <span className="path-badge">IIC BO > Sales > Period Sales View</span>

## 👉 언제 사용하나요?

- 스토어 매출을 **시간대별 · 일별 · 월별 합계**로 확인할 때
- 기간 동안의 **판매·반품 건수와 순매출**, **고객 객층 비율**을 한눈에 볼 때

---

## 1. 조회 단위 선택

화면 상단 탭에서 조회 단위를 선택합니다. 메뉴에 들어가면 **DAILY TOTAL** 탭이 기본으로 선택되어 바로 조회됩니다.

| 탭 | 보는 내용 | 예시 |
|---|---|---|
| **HOURLY TOTAL** | 1시간 단위 합계 | e.g. 매장 현지 시간 09:00 ~ 09:59 합계 |
| **DAILY TOTAL** | 하루 단위 합계 | e.g. 10월 3일 하루의 합계 |
| **MONTHLY TOTAL** | 한 달 단위 합계 | e.g. 10월 한 달의 합계 |

---

## 2. 매출 조회

<div className="img-placeholder">📷 [Image] Period Sales View — DAILY TOTAL 검색 및 목록 화면</div>

<div className="img-placeholder">📷 [Image] Period Sales View — HOURLY TOTAL 목록 화면</div>

<div className="img-placeholder">📷 [Image] Period Sales View — MONTHLY TOTAL 목록 화면</div>

다른 기간이나 스토어를 보려면 조건을 변경한 뒤 **Search**를 클릭합니다.

<div className="blockquote-gray">

> - **Store**는 BP를 먼저 선택해야 선택할 수 있습니다.
> - 상단 <strong>Total Sum(합계)</strong>은 **Currency**를 선택해야 표시됩니다.

</div>

---

## 3. 목록에서 확인할 수 있는 것

- 한 행은 **일자(또는 시간대·월) · 스토어 · 통화**별 합계입니다. 반품이 있으면 `NORMAL`(판매)과 `REFUND`(반품)가 두 줄로 나뉘어 표시됩니다.
- **HOURLY TOTAL**은 일자별로 `Time Slot`(예: `09:00 ~ 09:59`) 단위 합계가 표시됩니다.
- **MONTHLY TOTAL**은 조회 기간을 **월 단위**(예: 2026년 9월 ~ 10월)로 선택하며, `Sales Date`가 `2026-10`처럼 월로 표시됩니다.
- **Net Qty**는 판매 수량에서 반품 수량을 뺀 **순 판매 수량**, **Net Amount**는 판매 금액에서 반품 금액을 뺀 **순매출 금액**입니다.
- **Average Unit**은 제품 1개당 평균 금액(금액 ÷ 수량)입니다.
- **Customer Type / Continent**(고객 객층)는 판매 건수 기준 비율과 건수로 표시됩니다. 예) `37.5% (3)` = 8건 중 3건
- **Excel Export**로 조회된 목록을 다운로드할 수 있습니다.

---

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-03 | 메뉴 생성, 조회 방법 작성 | Wooju(Landa) |
