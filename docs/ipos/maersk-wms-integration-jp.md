---
sidebar_label: Maersk WMS Integration (Maersk(WMS) 연동 프로세스)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-22"
updated: "2026-10-22"
countries: [jp]
---

import ProcessFlow from '@site/src/components/ProcessFlow';

# 📍 Maersk WMS Integration (Maersk(WMS) 연동 프로세스)

> JP 물류 창고(Maersk WMS)와 IPOS가 주고받는 데이터와 전송 시점을 안내합니다.
>
> 경로 : <span className="path-badge">IPOS > Logistics Management</span>

<div className="blockquote-mint">

> **JP 기준 안내** : JP 물류는 IIC BO가 아닌 **IPOS**에서 관리합니다.<br/>이 문서의 메뉴·화면은 모두 IPOS 기준입니다.

</div>

## 👉 연동 한눈에 보기

| 구분 | 방향 | 언제 전송되나요? | 처리 주체 |
|---|---|---|---|
| **제품 마스터** | IPOS → Maersk | 매일 01:00 (JST) | 자동 |
| **거래처 마스터** | IPOS → Maersk | 매일 01:00 (JST) | 자동 |
| **입고지시** | IPOS → Maersk | SAP에서 ASN(선적 정보) 수신 후 30분 간격 | 자동 |
| **출고지시** | IPOS → Maersk | 출고 등록 즉시 | 운영자 등록 → 자동 전송 |
| **반품입고지시** | IPOS → Maersk | 반품 등록 즉시 | 운영자 등록 → 자동 전송 |
| **재고 조정** | Maersk → IPOS | Maersk에서 폐기 등 조정 처리 시 | 자동 |

- Maersk → IPOS로 들어오는 데이터는 <mark>**재고 조정 1종**</mark>입니다. 나머지는 모두 IPOS가 Maersk로 보냅니다.

## 1. 마스터 전송 (제품 · 거래처)

- 매일 **01:00 (JST)** 에 IPOS의 마스터가 Maersk로 자동 전송됩니다.
  - 제품 마스터 : GM(1100), TB(1200)
  - 거래처 마스터 : JP 거래처
- 정해진 시간 전에 급히 전송해야 하면 개발팀에 수동 전송을 요청합니다.

## 2. 입고지시 (해외 → 물류 창고)

<ProcessFlow
  steps={[
    {no: '1', title: 'ASN 수신', desc: 'SAP에서 선적 정보(ASN)를 IPOS로 전송', statuses: [
      {k: '처리 주체', v: '자동'},
    ]},
    {no: '2', title: '입고 예정 생성', desc: ['30분 간격으로 ASN을 입고 예정으로 변환', '• JP 납품처(C1009, C2002) 건만 대상'], statuses: [
      {k: '처리 주체', v: '자동'},
    ]},
    {no: '3', title: 'Maersk 입고지시', desc: '입고 예정 정보를 Maersk로 전송', statuses: [
      {k: '처리 주체', v: '자동'},
    ]},
  ]}
/>

- 수신된 ASN은 <span className="path-badge">IPOS > Logistics Management > Incoming Inventory Management</span> (입고관리)에서 확인합니다.
- Maersk에 입고지시가 누락된 경우, **Invoice 번호 또는 B/L 번호**를 전달해 개발팀에 재전송을 요청합니다.

## 3. 출고지시 (물류 창고 → 스토어 · B2B · B2C)

아래 중 하나로 출고를 등록하면 즉시 Maersk로 출고지시가 전송됩니다.

| 등록 방법 | 설명 | 비고 |
|---|---|---|
| **재고 이동 등록** | 물류 창고 → 스토어 이동 등록 (화면 / 엑셀) | |
| **출고오더 엑셀 업로드** | <span className="path-badge">Order Management</span> (주문관리) → **Import** | • Doc Type `N` = B2B<br/>• Doc Type `E` = B2C |

- 엑셀 업로드로 등록할 때 <mark>**Maersk 전송이 실패하면 IPOS 등록 건도 저장되지 않습니다.**</mark> 오류 확인 후 다시 업로드합니다.

## 4. 반품입고지시 (스토어 → 물류 창고)

- 스토어 → 물류 창고 반품 이동을 등록하면 Maersk로 반품입고지시가 자동 전송됩니다.
  - 화면 등록 또는 <span className="path-badge">Return Management</span> (반품관리) → **Import** 엑셀 업로드
- 전송이 누락된 경우, **Invoice 번호**를 전달해 개발팀에 재전송을 요청합니다.

## 5. 재고 조정 (폐기 등)

<ProcessFlow
  steps={[
    {no: '1', title: 'Maersk 조정 처리', desc: 'Maersk에서 폐기 등 재고 조정 처리', statuses: [
      {k: '처리 주체', v: 'Maersk'},
    ]},
    {no: '2', title: 'IPOS 수신 · 반영', desc: ['조정 내역을 IPOS로 자동 전송', '• 수신 즉시 재고 반영 (승인 단계 없음)'], statuses: [
      {k: '처리 주체', v: '자동'},
    ]},
    {no: '3', title: '마이너스 보정', desc: ['조정 후 창고 재고가 마이너스인 경우', '• 부족 수량만큼 온라인 창고(1000) 재고 차감', '• 물류 창고 재고는 0으로 맞춤'], statuses: [
      {k: '처리 주체', v: '자동 (해당 시)'},
    ]},
    {no: '4', title: '내역 확인', desc: 'Inventory Modification Record (재고조정내역)에서 조회', statuses: [
      {k: '처리 주체', v: '운영자'},
    ]},
  ]}
/>

- IPOS에서 따로 입력할 필요 없이, Maersk에서 처리한 조정이 **자동으로 IPOS 재고에 반영**됩니다.
- 반영되는 창고는 Maersk의 재고 상태로 정해집니다.

| Maersk 재고 상태 | IPOS 창고(Sloc) |
|---|---|
| **A** (가용) | 1110 |
| **D** (불량) | 1120 |
| **Q** (품질검사) | 1130 |

- 재고 증감은 Maersk가 보내는 **조정 사유코드**로 정해집니다. 폐기처럼 차감 사유로 등록된 코드면 재고가 줄어듭니다.
- 반영 내역은 <span className="path-badge">IPOS > Logistics Management > Inventory Modification Record</span> (재고조정내역)에서 확인합니다.

<div className="blockquote-warning">

> **IPOS에 반영되지 않는 경우** : 아래 경우에는 Maersk에 실패로 응답하고 재고가 바뀌지 않습니다.<br/>• 이미 받은 조정 문서번호 (중복)<br/>• IPOS에 없는 상품코드<br/>• IPOS 사유 마스터에 없는 사유코드<br/>• A · D · Q 외의 재고 상태

</div>

<div className="blockquote-gray">

> **폐기 사유코드** : Maersk가 폐기 시 보내는 사유코드가 IPOS 사유 마스터에 **차감 사유**로 등록돼 있어야 재고가 정상 차감됩니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-22 | JP 최초 작성 (텍스트) | Wooju(Landa) |
