## 로컬에서 django project 도커 이미지로 빌드하기

> 이미 생성된 djanog project를 로컬에서 docker 이미지로 빌드해 compose하는 과정을 담은 문서입니다. 

도커는 배포에 필요한 환경 구축을 모두 담아 패키지 박스처럼 만들어 줍니다. 이전의 환경 구축이 readme를 보고 하나하나 봐가면서 처음부터 환경 구축을 시작해야 하는 번거로움이 있었다면, 도커는 이러한 환경을 패키지화시킴으로써 개발자들에게 간편함을 선물해 주었습니다. 앞에서 말했던 환경 구축 패키지 상자를 도커에서는 '이미지'라고 합니다. 도커는 이 이미지를 만들어 보다 쉬운 배포를 할 수 있게 해줍니다. 

직접적인 배포를 하기에 앞서, 먼저 로컬에서 도커 이미지를 한번 빌드(만들어)해 봅시다.  우선 도커 이미지를 빌드하고 프로젝트를 진행하는 사례도 많지만, 여기서는 이미 만들어놓은 django 서비스를 대상으로 이미지를 빌드하겠습니다. 



### 0. 준비 과정

로컬 환경에서 도커 이미지를 빌드하기 위해서는 아래와 같은 몇 가지 준비물이 필요합니다. 

- docker 설치
- 프로젝트 폴더 준비
- 프로젝트 폴더 안에 dockerfile 생성
- 같은 위치에 docker-compose.yml 파일 생성



### 1. dockerfile 작성

```dockerfile
FROM python:3.9 # project에서 사용한 python 버전에 맞게 선택

ENV PYTHONBUFFERED 1

COPY . /mydjangoproject # 프로젝트 폴더 안의 모든 내용을 /myproject라는 폴더 내에 복사
WORKDIR /mydjangoproject # myproject 폴더를 작업 폴더로 지정
COPY requirements.txt /mydjangoproject # requirements.txt를 작업 폴더로 복사
RUN pip install -r requirements.txt # requirements.txt install
WORKDIR /mydjangoproject/mydjangoproject # 하위 폴더를 작업 폴더로 재지정 # manage.py의 위치로 이동 

CMD python manage.py migrate && python manage.py runserver 0.0.0.0:8000 # docker image 빌드 후 실행 명령어 
```

- 앞에서 지정된 작업 폴더보다 더 하위 폴더의 파일을 찾아 명령어를 실행하기 위해서는 `WORKDIR`로 다시 작업 폴더를 재지정해야 합니다. `RUN cd [하위폴더명]`과 같은 명령어는 `No such file or directory` 에러를 발생시킵니다. 
- localhost, port 8080의 경우는 정상적으로 실행이 되지 않았습니다. 



### 2. docker-compose.yml 작성

> docker-compose 파일은 여러 개의 컨테이너를 한번에 생성하고 관리하는 데 유용합니다. django 프로젝트의 경우 MySQL, postgresql 등 데이터베이스와 연동되는 경우가 많으므로 알아두면 유용하게 쓸 수 있습니다. 

```
```



### 3. docker image 빌드

> docker-compose 사용 시

```bash
docker-compose up # 도커 이미지 빌드, 컨테이너 자동 실행
```



### 4. 로컬 테스트

> 성공 메시지