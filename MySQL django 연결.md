# MySQL django 연결

> django로 서비스를 개발할 때, git flow로 작업하는 다른 개발자와 MySQL DB를 연결, 연동하는 방법에 대한 문서이다. 

git flow로 개발을 진행할 때면 팀원들이 같은 데이터베이스를 쓰고 수정하도록 연동하는 작업이 필요하다. 이 때 MySQL Commend Line Client와 Pycharm을 활용해 이를 수행할 수 있다.

이 문서에서는 원격 저장소의 develop 브랜치에 이미 기본 DB가 생성된 상태라고 가정한다. git bash를 통해 origin과 develop 브랜치를 clone한다. 

```shell
$ git clone [프로젝트 원격 저장소 repository URL] # 원격 origin 저장소 clone 
$ git checkout -b origin/develop # 원격 저장소의 develop 브랜치 clone
```

 

## 1. MySQL에서 테이블 만들기

우선은 MySQL Commend Line Client으로 로그인하여 테이블을 생성해야 한다. 그리고 아이디와 비밀번호를 입력한 후 권한을 부여한다.

```sql
CREATE DATABASE DB 이름 default CHARACTER SET UTF8;
create user 'USER ID'@'localhost' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES on DB 이름.* TO 'USER ID'@'localhost'; 
FLUSH PRIVILEGES;
```



## 2. .env, .env.local 파일 만들고 secret key, database 정보 삽입

manage.py와 같은 경로에 .env, .env.local 파일을 생성한다. .env 파일 같은 경우 기본적인 환경 변수를 담고 있고, .env.local 같은 경우 로컬 환경에서 적용되는 환경 변수를 설정한다. 그 안에는 database 정보와 secret key 등을 입력한다. 

```python
SECRET_KEY="시크릿 키"

DATABASE_USER="USER ID"
DATABASE_PASSWORD="PASSWORD"
```



## 3. python runserver로 확인

```shell
$ python manage.py runserver
```

에러 없이 실행이 잘 된다면 DB 연결이 잘 된 것이다.