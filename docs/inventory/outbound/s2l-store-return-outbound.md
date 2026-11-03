---
sidebar_label: S2L Store Return Outbound (S2L 스토어 반품 출고)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-09-15"
countries: [us]
---

# 📍 S2L Store Return Outbound (S2L 스토어 반품 출고)

> S2L : Store To Logistics로, 스토어에서 물류센터로 반품하는 출고 유형을 의미합니다. 👉 **[출고 유형 비교 바로가기](/docs/inventory/outbound/c2c-outbound#출고-유형)**
>
> 경로 : <span className="path-badge">IIC BO > Inventory > Outbound List</span>

## 1. 출고 등록

출고 등록 버튼 선택 시 모달이 표시되며, 아래 3가지 탭으로 구성되어 있습니다.

| 탭 | 설명 |
|:---:|---|
| **일반 출고** | 출고·입고 스토어 및 로케이션을 각각 지정한 뒤, 제품을 개별 선택하고 수량을 입력하여 출고 처리 |
| **법인 출고** | 출고 스토어만 선택하여 본사로 반품 처리하는 방식. 본사 대상이므로 별도 입고 스토어 설정 없이 출고만 반영 |
| **일괄 출고 등록** | 일반 출고 또는 법인 출고 건의 제품이 대량인 경우, 엑셀 파일로 작성하여 일괄 업로드로 처리 |

<details>
<summary>출고·입고 스토어 선택</summary>

출고 등록 시, 아래 순서로 출발지와 도착지를 선택합니다.

1. **출고** : 법인 → 스토어 → 로케이션
2. **입고** : 법인 → 스토어 → 로케이션

<div className="blockquote-gray">

> 각 드롭다운(법인 / 스토어 / 로케이션)에 조회되는 마스터 정보는 **계정에 설정된 권한**에 따라 다르게 표시됩니다.

</div>

</details>

### 바로 등록 vs 출고 요청

| 처리 방식 | 설명 |
|---|---|
| **Outbound Registration**<br/><span className="label-sub">등록</span> | 등록 즉시 출고가 생성되고 ERP · WMS 연동이 시작됩니다. |
| **Request Outbound**<br/><span className="label-sub">요청</span> | 승인자가 승인한 뒤 출고가 생성됩니다. <mark>**승인 전까지 출고되지 않고, 재고는 출고대기수량으로 잡혀 있습니다.**</mark> |

- 요청 건은 **Outbound Request List** 탭에서 확인하며, <mark>**출고 스토어 기준 승인 권한이 있는 계정만**</mark> 승인(Confirm) / 반려(Reject)할 수 있습니다.
- 요청 상태 : `Request Pending`(승인 대기) → `Approved (Registered)`(승인 · 출고 등록) / `Rejected`(반려, 출고대기수량 해제)

## 2. 출고 상태

ERP(NetSuite) · WMS(LXP)와 연동되는 출고로, 처리 단계에 따라 상태가 바뀝니다.

`Outbound Planned` → `Pending Registration` → `Outbound Registered` → `Outbound Completed`

| 상태 | 의미 |
|---|---|
| **Outbound Planned**<br/><span className="label-sub">출고 예정</span> | 출고 등록 완료. ERP · WMS 연동 전 |
| **Pending Registration**<br/><span className="label-sub">출고 등록 대기</span> | ERP · WMS로 출고 요청을 보낸 상태 |
| **Outbound Registered**<br/><span className="label-sub">등록 완료</span> | WMS가 요청을 접수한 상태 |
| **Outbound Completed**<br/><span className="label-sub">출고 완료</span> | 물류 창고(WMS · LXP)에서 입고를 확정한 시점. 출고 스토어 재고가 차감됩니다. |
| **Registration Failed**<br/><span className="label-sub">등록 실패</span> | ERP · WMS 등록에 실패한 상태 |
| **Outbound Canceled**<br/><span className="label-sub">출고 취소</span> | WMS에서 취소된 상태 |

<div className="blockquote-gray">

> 상태는 WMS에서 결과를 받으면 자동으로 바뀌며, 직접 변경할 수 없습니다.<br/>
> `Registration Failed`이면 시스템 Operation 채널(Slack)을 통해 IT팀에 문의해 주세요.

</div>

## 3. 주요 제약 사항

| 항목 | 내용 |
|---|---|
| **같은 법인만 가능** | 출고 스토어와 입고 스토어가 <mark>**같은 법인**</mark>이어야 합니다. |
| **재고 실사 중 출고 불가** | 출고 스토어 · 로케이션에서 재고 실사가 진행 중이면 출고할 수 없습니다. |
| **최대 300 SKU** | 출고 1건에 담을 수 있는 제품은 최대 300개(SKU)입니다. |
| **같은 제품 중복 불가** | 출고 1건 안에 같은 제품 코드를 두 번 넣을 수 없습니다. 수량을 합쳐 한 줄로 입력합니다. |

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-09-15 | 최초 작성 | Wooju(Landa) |
| 2026-11-03 | 출고 유형 표를 C2C 문서로 이관, 출고 요청 · 출고 상태 · 제약 사항 추가 (Transfer Order 문서 이관) | Wooju(Landa) |
