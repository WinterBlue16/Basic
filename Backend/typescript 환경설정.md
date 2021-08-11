## typescript 환경설정

> vscode에서 typescript로 개발을 진행하기 위한 환경을 구축하는 과정을 기록했습니다.



### 1. 설치

```bash
$ npm i typescript -g
$ tsc --init
$ npm install -g typescript
```



### 2. 환경 변수 추가

- 제어판 -> 시스템 -> 고급 시스템 설정 -> 환경 변수 설정 -> 시스템 변수 목록에서 PATH 선택 -> 편집 -> 새로 만들기 -> 'C:\Program File\nodejs' 추가 -> 확인



### 3. vscode 설정

- 폴더 생성 후 워크 스페이스에 추가
- hello.ts 생성
- vscode 하단에서 새롭게 터미널 추가(`powershell`이 아니라 `bash`를 선택한다)

```bash
$ tsc hello.ts # 컴파일
$ node hello.js # 코드 실행
```



### 4. 더 알아보기

> 공부 중 배운 부분들, 알아볼 부분들에 대해 정리합니다.



