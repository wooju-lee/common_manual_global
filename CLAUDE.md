# CLAUDE.md — common_manual_global

## 문서 작업 규칙

- **sidebar_label 변경 시 H1 제목도 반드시 동일하게 맞출 것** (이모지 제외)
- sidebar_label, H1, _category_.json 변경 시 해당 `-ca.md`, `-au.md` stub 파일도 함께 수정
- 문서 삭제 시 원본 + `-ca.md`, `-au.md` stub 파일 모두 삭제
- 대량 파일 수정은 Node.js 스크립트로 일괄 처리 (Edit 반복 금지)

## 국가별 문서 구조

- `docs/` 원본 = US 버전 (`countries: [us]`)
- `-ca.md` = CA stub (`countries: [ca]`)
- `-au.md` = AU stub (`countries: [au]`)
- stub 기본 내용: `> 이 문서는 준비 중입니다.`

## i18n 구조

- 기본 locale: `ko` (한국어) — `docs/` 및 config 라벨이 한국어
- 영문 전환: `i18n/en/` — navbar, category, docs 영문 번역
- navbar 라벨 변경 시 `i18n/en/docusaurus-theme-classic/navbar.json`도 업데이트
