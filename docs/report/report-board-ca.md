---
sidebar_label: Report Board (리포트 게시판)
sidebar_position: 2
author: Wooju(Landa)
created: "2026-10-22"
updated: "2026-10-22"
countries: [ca]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Report Board (리포트 게시판)

> 등록된 데일리 리포트를 조회 · 수정 · 승인하고, 엑셀로 다운로드하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Global Report > Report Board</span>

## 👉 언제 사용하나요?

- 등록한 데일리 리포트를 **확인하거나 수정**할 때
- 승인 권한 계정이 리포트를 **승인**할 때
- 스토어별 리포트를 **엑셀로 다운로드**할 때

## 1. 리스트 검색

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/report-board-01.png').default}
  alt="Report Board 검색 조건 — BP, Store, Approve Status, Search Period"
  boxes={[
    {x: 2, y: 27.2, w: 41.6, h: 5.2},
    {x: 45.8, y: 27.2, w: 18, h: 5.4},
    {x: 2, y: 37.6, w: 33.8, h: 5.2},
    {x: 78.2, y: 59.6, w: 6.4, h: 3.4},
  ]}
/>

| 검색 조건 | 설명 | 비고 |
|---|---|---|
| **BP** | 법인 선택 | |
| **Store** | 스토어 선택 | <mark>**BP를 먼저 선택**</mark>해야 선택 가능 |
| **Approve Status** | 승인 여부 (`All` / `Y` / `N`) | |
| **Search Period** | `Record Date`(기록일) 또는 `Approval Date`(승인일) 기준 기간 | • 필수<br/>• 기본: 최근 30일 |

- 목록 위 **View Draft Only**를 체크하면 임시 저장(`Save`) 상태의 리포트만 조회됩니다.

## 2. 리스트 컬럼

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/report-board-01.png').default}
  alt="Report Board 목록 — BP / Store Information, Image Attached, Approve Status"
  boxes={[
    {x: 24.0, y: 73.6, w: 24.6, h: 13.4},
    {x: 57.8, y: 73.6, w: 14.0, h: 13.4},
  ]}
/>

| 컬럼 | 설명 |
|---|---|
| **Record Date**<br/><span className="label-sub">기록일</span> | 리포트 기록 일자 |
| **Report Status**<br/><span className="label-sub">리포트 상태</span> | `Save`(임시 저장) / `Save Completed`(저장 완료) |
| **BP Information**<br/><span className="label-sub">법인</span> | 법인 코드 / 명 (클릭 시 상세 이동) |
| **Store Information**<br/><span className="label-sub">스토어</span> | 스토어 코드 / 명 (클릭 시 상세 이동) |
| **Created By**<br/><span className="label-sub">등록 계정</span> | 리포트를 등록한 계정 |
| **Image Attached**<br/><span className="label-sub">이미지 첨부 여부</span> | 첨부 파일 또는 특이사항 내 이미지가 있으면 `Y` |
| **Approve Status**<br/><span className="label-sub">승인 여부</span> | `Y` / `N` |
| **Approval Date**<br/><span className="label-sub">승인일</span> | 승인 일시 (스토어 현지 시간 기준) |
| **Approved By**<br/><span className="label-sub">승인 계정</span> | 승인한 계정 |
| **Visitor Count**<br/><span className="label-sub">방문객 수</span> | 입력한 방문객 수 |
| **Total Sales Items Qty**<br/><span className="label-sub">총 판매 제품 수량</span> | 해당 일자 판매 제품 수량 |
| **Number of Transactions**<br/><span className="label-sub">매출 건 수</span> | 해당 일자 매출 건 수 |
| **Sales Conversion Rate (%)**<br/><span className="label-sub">판매 전환율</span> | 매출 건 수 ÷ 방문객 수 × 100 (0이면 `-`) |

- <mark>**BP 또는 Store 정보를 클릭**</mark>하면 리포트 상세 화면으로 이동합니다. 행을 클릭해서는 이동하지 않습니다.

## 3. 리포트 수정

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/report-board-03.png').default}
  alt="리포트 상세 — 리포트 상태, 첨부 파일 다운로드 / 삭제"
  boxes={[
    {x: 0.3, y: 3.2, w: 25.2, h: 2.2},
    {x: 1.9, y: 59.6, w: 95.4, h: 7.1},
    {x: 84.2, y: 97.1, w: 14.5, h: 2.4},
  ]}
/>

상세 화면에서 내용을 확인하고, 수정 권한이 있으면 바로 수정할 수 있습니다.

| 리포트 상태 | 수정 가능 계정 |
|---|---|
| `Save` (임시 저장) | 등록 권한 계정 — 기록 일자 · 스토어를 포함한 모든 항목 |
| `Save Completed` (승인 전) | 승인 권한 계정 |
| 승인 완료 | 수정 불가 |

- `Save Completed` 상태는 다시 임시 저장(`Save`)으로 되돌릴 수 없습니다.
- 첨부 파일은 상세 화면에서 다운로드하거나 삭제(✕)할 수 있으며, 삭제는 저장 시 반영됩니다.

## 4. 리포트 승인

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/report-board-02.png').default}
  alt="승인 대상 체크 후 APPROVAL 클릭"
  boxes={[
    {x: 1.8, y: 64.5, w: 2.7, h: 11.0},
    {x: 85.2, y: 56.6, w: 6.3, h: 3.6},
    {x: 2.4, y: 87.6, w: 5.4, h: 2.8},
  ]}
/>

**승인 권한 계정**이 목록에서 승인 여부 `N`인 리포트를 체크한 뒤 **Approval**을 클릭합니다. 여러 건을 한 번에 승인할 수 있습니다.

<div className="blockquote-warning">

> <mark>**승인한 리포트는 승인 취소 · 반려 · 삭제할 수 없으며, 이후 수정도 불가합니다.**</mark><br/>
> 내용을 확인한 뒤 승인해 주세요.

</div>

## 5. 엑셀 다운로드

**Excel Export**를 클릭하고, 다운로드할 정보를 선택한 뒤 **Download**를 클릭합니다.

| 정보 | 내용 |
|---|---|
| **List** | 목록 정보 (기본) |
| **Report Basic Information** | 기본 정보 + 일일 지표 + 특이사항 |
| **Product Feedback** | 제품 피드백 |
| **Sales Loss** | 매출 손실 |
| **Celebrity** | 셀럽 요청 |
| **Other Issues** | 기타 이슈 |

- 마지막으로 검색한 조건 기준으로 다운로드되며, 최대 10,000건까지 가능합니다.

<div className="qna-section">

## ❓ FAQ

> **Q. 리포트를 삭제하고 싶어요.**
>
> A. 리포트 삭제 기능은 없습니다. 승인 전이면 상세 화면에서 내용을 수정해 주세요.

> **Q. 승인 체크박스가 보이지 않아요.**
>
> A. 계정에 <u>승인 권한</u>이 없거나, 이미 승인된(`Y`) 리포트입니다.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-22 | CA 최초 작성 (AU와 동일 내용 반영) | Wooju(Landa) |
