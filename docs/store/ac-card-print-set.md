---
sidebar_label: AC 카드 프린터 설정
sidebar_position: 2
author: Wooju
created: "2026-04-21"
countries: [us]
---

# 📍 시리얼 카드 출력 프린터 세팅

> AC Card 출력을 위한 프린터 드라이버 설치 가이드 입니다.

---

## 1. 프린터 Driver 설치

| Step | 내용 |
|:---:|---|
| **a** | PC와 프린터를 연결하고 **프린터 전원을 확인**합니다 |
| **b** | 프린터 기종 / PC OS에 맞는 드라이버를 다운로드 및 설치합니다 |
| | ⅰ. `DDInstall` |
| | ⅱ. Local USB Port |
| **c** | 드라이버 다운로드: https://www.idp-corp.com/index_kor/bbs/board.php?bo_table=s4_1 |
| **d** | 설치 후 **PC를 재시작**합니다 |

---

## 2. QZ Tray 설치

> **Step a.** https://qz.io/download/ 에 접속하여 **Direct Download** 버튼을 클릭합니다.

![QZ Tray 다운로드 페이지](./img/1.png)

---

> **Step b.** 설치 마법사가 실행되면 **Next >** 를 클릭합니다.

![QZ Tray Setup - Welcome](./img/2.png)

---

> **Step c.** 설치 경로를 확인한 후 **Install** 을 클릭합니다.

![QZ Tray Setup - Install Location](./img/3.png)

---

> **Step d.** 설치가 완료되면 **Close** 를 클릭합니다.

![QZ Tray Setup - Complete](./img/4.png)

---

## 3. QZ Tray .pem 파일 세팅

`qz-certificate.pem` 파일을 QZ Tray Site Manager에 등록하는 과정입니다.

> 📎 <a href="/qz-certificate.pem" download>qz-certificate.pem 다운로드</a>

---

> **Step a.** 작업표시줄 우측 하단에서 **QZ Tray 아이콘**이 실행 중인지 확인합니다.

![QZ Tray 트레이 아이콘 확인](./img/5.png)

---

> **Step b.** QZ Tray 아이콘을 우클릭한 뒤 **Advanced → Site Manager...** 를 선택합니다.

![Advanced > Site Manager 메뉴](./img/6-1.png)

---

> **Step c.** Site Manager 창에서 **`+` 아이콘**을 클릭합니다.

![Site Manager - + 아이콘 클릭](./img/7.png)

---

> **Step d.** **Browse...** 를 클릭합니다.

![Browse 버튼 클릭](./img/8.png)

---

> **Step e.** 다운로드 폴더에서 `qz-certificate.pem` 파일을 선택한 후 **열기(O)** 를 클릭합니다.

![pem 파일 선택 후 열기](./img/9.png)

---

> **Step f.** **Allowed** 탭에 `iic (iic-bo)` 인증서가 등록된 것을 확인한 후 **Close** 를 클릭합니다.

![인증서 등록 완료 확인](./img/10.png)

---

> **Step g.** 설정을 적용하기 위해 **PC를 재부팅**합니다.

---

