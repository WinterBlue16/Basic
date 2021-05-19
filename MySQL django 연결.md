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

이렇게 정보를 다 삽입한 후, django에 적용시켜준다. 

```shell
$ python manage.py makemigrations
$ python manage.py migrate
```



## 3. python runserver로 확인

```shell
$ python manage.py runserver
```

에러 없이 실행이 잘 된다면 DB 연결이 잘 된 것이다.



## 4. db 구조 변경 시 초기화

데이터베이스를 구성하는 모델에 변화가 생겼을 경우, 오류가 많이 발생할 수 있다. 이럴 경우 초기화를 해 다시 연동하는 것이 좋다. 

그러기 위해서는 일단 데이터베이스를 삭제하는 방법이 있다. 우선 MySQL Commend Line Client을 통해 현재 생성된 데이터베이스를 확인하고, django와 연동된 데이터베이스를 삭제한다.

```sql
show databases;
drop database '데이터베이스 이름';
flush privileges;
```

하지만 이렇게 할 경우 다시 데이터베이스를 생성하려고 할 때 `ERROR 1396 (HY000): Operation CREATE USER failed ~ ` 에러가 발생한다. 원래는 유저를 먼저 생성하거나(create), 권한을 부여하는(grant) 방법으로 데이터베이스를 관리해야 하는데, 이 경우 데이터베이스에 직접 손을 댔기 때문에 일종의 규칙 위반같은 것을 범한 셈이라고. 이 에러를 다룬 포스팅들에서는 **'일관성을 깼다'**는 표현을 썼다.  

때문에 이 에러를 해결하기 위해서는 사용자도 삭제한 후 다시 생성해야 한다.

```sql
drop user 사용자명@localhost;
flush privileges;
```

사용자 삭제 후 다시 1의 코드를 치면, 성공적으로 db를 생성할 수 있다. makemigrations와 migrate를 잊지 말자!

