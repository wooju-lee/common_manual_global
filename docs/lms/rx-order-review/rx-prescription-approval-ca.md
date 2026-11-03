---
sidebar_label: Rx Prescription Review (처방 조회 및 승인 / 반려)
sidebar_position: 1
countries: [ca]
---

# 📍 Rx Prescription Review (처방 조회 및 승인 / 반려)

> 처방 검토 화면 안내는 준비 중입니다.

## 1. 자사몰(GM Admin) 멤버십 전송 시점 (Offline)

오프라인 RX 주문은 <mark>**주문 생성(POS 결제) 시점이 아니라, 이 메뉴에서 Confirm한 시점에 처음**</mark> 자사몰(GM Admin)로 전송됩니다.<br/>
이후 시리얼 카드 출력 · 취소 · 반품 시점에 추가로 전송됩니다.

| 시점 | 전송 여부 | 전송 내용 |
|---|---|---|
| **주문 생성** (POS 결제) | 전송 안 함 | — |
| **Confirm** (처방 검토 승인) | **최초 전송** | 주문 정보 + 멤버십(고객 ID · 국적) + 처방 · 배송 정보 |
| **Reject** | 전송 안 함 | — |
| **시리얼 카드 출력** | 재전송 | Confirm 전송 내용 + 시리얼 번호 |
| **작업 중 취소** (Rx Work Management) | 전송 | 같은 주문을 환불로 전송 |
| **반품** | 전송 | 반품 매출 전송 |

<div className="blockquote-gray">

> 젠틀몬스터 브랜드 주문만 전송되며, 온라인 RX 주문은 대상이 아닙니다.<br/>
> 멤버십이 연결되지 않은 주문은 멤버십 정보(고객 ID · 국적) 없이 전송됩니다.<br/>
> 전송이 누락된 경우 시스템 Operation 채널(Slack)을 통해 IT팀에 재전송을 요청해 주세요.

</div>

## 📋 수정 이력

| 수정일자 | 내용 | 수정자 |
|---|---|---|
| 2026-11-03 | 자사몰(GM Admin) 멤버십 전송 시점 (Offline) 추가 | Wooju(Landa) |
