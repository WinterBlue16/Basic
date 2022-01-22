## 초간단 Nest.js 프로젝트 생성하기

> Nest.js 프로젝트를 생성하고 기본 세팅하는 법을 정리한 문서입니다. 



### 1. Nest.js 설치

> Nest.js 및 기타 필요한 구성요소들을 설치합니다.

### 2. Nest.js 프로젝트 생성하기

> Nest.js 프로젝트를 생성하고 기초적인 구성을 시작합니다. 

### 3. DB 연결하기

> 여기서는 typeORM을 사용하여 DB와 연결합니다. 

#### 3.1. postgres 

### 4. DB 생성 후 migration 하기

> 생성한 entity를 로컬 DB 혹은 기타 DB에 migration합니다. 

```bash
$ yarn typeorm migration:generate -n [migration 파일 이름] # DB 변경사항 migration 파일로 생성
$ yarn typeorm migration:run # migration 파일을 읽어 프로젝트에 연결된 DB에 반영 
$ yarn typeorm migration:revert # 이전에 실행된 migration 되돌리기
```

