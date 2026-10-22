---
sidebar_label: Daily Report Register (데일리 리포트 등록)
sidebar_position: 1
author: Wooju(Landa)
created: "2026-10-22"
updated: "2026-10-22"
countries: [us]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# 📍 Daily Report Register (데일리 리포트 등록)

> 스토어의 하루 운영 결과(방문객 수, 매출 지표, 특이사항, 고객 피드백 등)를 데일리 리포트로 등록하는 방법을 안내합니다.
>
> 경로 : <span className="path-badge">IIC BO > Global Report > Daily Report Register</span>

## 👉 데일리 리포트 등록 순서

> **기본 정보 입력** → **일일 지표 확인** → **특이사항 입력** → **추가 정보 입력 (선택)** → **Save 또는 Submit** → **승인**

| Step | 처리 내용 | 상태 | 처리 주체 |
|:---:|---|---|---|
| **1** | 기록 일자, 법인, 스토어, 방문객 수 입력 | — | 👤 스토어 |
| **2** | 일일 지표(매출 수량 · 금액 · 건수 등) 자동 집계 | — | ⚙️ 자동 |
| **3** | 특이사항 입력, 필요 시 파일 첨부 | — | 👤 스토어 |
| **4** | 제품 피드백 · 매출 손실 · 셀럽 · 기타 이슈 입력 (선택) | — | 👤 스토어 |
| **5** | **Save**(임시 저장) 또는 **Submit**(저장) | `Save` / `Save Completed` | 👤 스토어 |
| **6** | 리포트 승인 | 승인 여부 `Y` | 👤 승인 권한 계정 |

<div className="blockquote-warning">

> <mark>**스토어 1곳당 기록 일자 하루에 리포트 1건만 등록할 수 있습니다.**</mark><br/>
> 이미 등록된 일자로 저장하면 `Report already exists for the date` 오류가 표시됩니다. 이 경우 Report Board에서 기존 리포트를 찾아 수정해 주세요.

</div>

## 1. 기본 정보 입력

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-report-register-01.png').default}
  alt="Report Basic Information — Record Date, Corporation, Store, Visitor Count"
  boxes={[
    {x: 5.0, y: 34.6, w: 37.0, h: 7.2},
    {x: 5.0, y: 47.8, w: 72.4, h: 8.0},
  ]}
/>

| 항목 | 설명 | 입력 방식 | 비고 |
|---|---|---|---|
| **Record Date**<br/><span className="label-sub">기록 일자</span> | 리포트를 기록할 일자 | 필드 선택 시 캘린더가 표시되며, 일자 1개 선택 | • 필수<br/>• 기본: 오늘<br/>• <mark>**같은 일자 · 스토어에 리포트가 이미 있으면 저장 불가**</mark> (일자 · 스토어당 리포트 1건) |
| **Account**<br/><span className="label-sub">계정</span> | 리포트를 등록하는 계정 | 로그인한 계정이 자동 표시되며, 수정 불가 | 자동 |
| **Corporation**<br/><span className="label-sub">법인</span> | 리포트를 등록할 법인 | 드롭다운에서 1개 선택 (계정에 권한이 있는 법인만 표시) | 필수 |
| **Store**<br/><span className="label-sub">스토어</span> | 리포트를 등록할 스토어 | 드롭다운에서 1개 선택 (선택한 법인의 스토어만 표시) | • 필수<br/>• <mark>**법인을 먼저 선택**</mark>해야 선택 가능<br/>• 법인을 바꾸면 초기화 |
| **Visitor Count**<br/><span className="label-sub">방문객 수</span> | 해당 일자의 방문객 수 | 숫자 직접 입력 (기본 `0`, 천 단위 콤마 자동 표시) | • 필수<br/>• 0 이상 정수 |

## 2. 일일 지표 확인 (자동)

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-report-register-01.png').default}
  alt="Daily Metrics (Auto) — Visitor Count 입력 후 자동 집계"
  boxes={[
    {x: 54.8, y: 48.0, w: 22.6, h: 7.6},
    {x: 1.8, y: 67.6, w: 98.2, h: 29.0},
  ]}
/>

스토어와 기록 일자를 선택하면 <mark>**BO에 저장된 매출 기준으로 일일 지표가 자동 집계**</mark>되며, 직접 수정할 수 없습니다.

| 항목 | 설명 |
|---|---|
| **Total Sales Items Qty**<br/><span className="label-sub">총 판매 제품 수량</span> | 해당 일자 판매 제품 수량 |
| **Total Sales Amount**<br/><span className="label-sub">총 판매 금액</span> | 해당 일자 판매 금액 |
| **Number of Transactions**<br/><span className="label-sub">매출 건 수</span> | 해당 일자 매출 건 수 (판매 · 반품 포함) |
| **Sales Conversion Rate (%)**<br/><span className="label-sub">판매 전환율</span> | 매출 건 수 ÷ 방문객 수 × 100 |
| **Average Transaction Value**<br/><span className="label-sub">객단가</span> | 총 판매 금액 ÷ 매출 건 수 |
| **Week-over-Week Growth (%)**<br/><span className="label-sub">전주 대비 증감율</span> | 이번 주(월요일 ~ 기록 일자) 매출과 지난주 매출 비교 |

- 판매 전환율은 방문객 수를 입력해야 계산됩니다.

## 3. 특이사항 입력 (필수)

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-report-register-03.png').default}
  alt="Daily Report Register 전체 화면 — 특이사항 입력, File Upload"
  boxes={[
    {x: 0.3, y: 31.5, w: 95.6, h: 21.5},
    {x: 0.3, y: 55.3, w: 95.6, h: 9.1},
  ]}
/>

- 특이사항 내용을 작성한 뒤, 화면 하단의 <mark>**Save**(임시 저장) 또는 **Submit**(저장)</mark>으로 저장합니다.
  - 특이사항에 텍스트가 없으면 저장되지 않습니다. (이미지만 넣은 경우 포함)
- 최대 5,000자까지 입력할 수 있습니다.
- **File Upload**로 파일을 첨부할 수 있습니다.
  - 최대 3개, 파일당 10MB 이하
  - `.xlsx` / `.png` / `.jpg` / `.jpeg` / `.pdf`만 가능

## 4. 추가 정보 입력 (선택)

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-report-register-04.png').default}
  alt="Product Feedback / Sales Loss / Celebrity / Other Issues"
  boxes={[
    {x: 30.0, y: 30.5, w: 38.0, h: 3.5},
    {x: 78.4, y: 30.6, w: 15.2, h: 3.0},
    {x: 90.2, y: 46.2, w: 6.6, h: 2.4},
  ]}
/>

| 구분 | 입력 내용 |
|---|---|
| **Product Feedback**<br/><span className="label-sub">제품 피드백</span> | 유입 경로, 국적, 성별, 제품 / 비교 제품, 구매 요인, 구매 여부, 긍정 · 부정 피드백 |
| **Sales Loss**<br/><span className="label-sub">매출 손실</span> | 손실 제품, 비교 제품, 손실 수량, 구매 여부 |
| **Celebrity**<br/><span className="label-sub">셀럽</span> | 요청 제품, 요청 수량, 요청자 명, 구매 여부 |
| **Other Issues**<br/><span className="label-sub">기타 이슈</span> | 이슈 구분(`Store` / `Brand` / `Customer VOC` / `ETC`), 내용 (최대 300자) |

- 제품은 2자 이상 입력해 검색한 뒤, <mark>**목록에서 선택**</mark>해야 합니다. 직접 입력만 하면 저장 시 오류가 발생합니다.
- 구매 여부를 `Not Purchased`로 선택하면 미구매 사유를 반드시 선택해야 합니다.
- **+ Add**로 행을 추가할 수 있습니다.

## 5. Save / Submit

<AnnotatedImage
  maxWidth="720px"
  src={require('./img/daily-report-register-05.png').default}
  alt="Submit 확인 팝업 — SAVE 클릭 시 저장"
  boxes={[
    {x: 14.8, y: 29.4, w: 63.0, h: 21.6},
    {x: 73.8, y: 57.6, w: 16.0, h: 10.0},
  ]}
/>

| 버튼 | 결과 | 이후 수정 |
|---|---|---|
| **Save** | 임시 저장 (`Save` 상태) | 등록 권한 계정이 모든 항목 수정 가능 |
| **Submit** | 확인 팝업 후 저장 (`Save Completed` 상태) | 승인 전까지 승인 권한 계정만 수정 가능 |

- 저장이 완료되면 Report Board로 이동합니다. 👉 **[Report Board 바로가기](/docs/report/report-board)**
- `Save Completed` 상태는 다시 임시 저장(`Save`)으로 되돌릴 수 없습니다.
- 승인된 리포트는 수정할 수 없습니다.

<div className="qna-section">

## ❓ FAQ

> **Q. 저장하면 `Content is required` 오류가 나와요.**
>
> A. <u>특이사항</u>에 텍스트를 입력해 주세요. 이미지만 넣은 경우에도 같은 오류가 표시됩니다.

> **Q. `Report already exists for the date` 오류가 나와요.**
>
> A. 같은 스토어 · 같은 기록 일자에 이미 리포트가 있습니다. Report Board에서 기존 리포트를 찾아 수정해 주세요.

> **Q. 일일 지표가 모두 0으로 나와요.**
>
> A. 해당 일자에 BO에 저장된 매출이 없거나, <u>기록 일자</u>가 다르게 선택된 경우입니다. 기록 일자와 스토어를 확인해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-10-22 | US 최초 작성 (AU와 동일 내용 반영) | Wooju(Landa) |
