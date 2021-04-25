# MySQL django 연결

> django로 서비스를 개발할 때, git flow로 작업하는 다른 개발자와 MySQL DB를 연결, 연동하는 방법에 대한 문서이다. 

## 1. MySQL에서 테이블 만들기

테이블을 생성하고 아이디와 비밀번호를 입력한 후 권한을 부여한다.

```sql
CREATE DATABASE DB 이름 default CHARACTER SET UTF8;
create user 'USER ID'@'localhost' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES on DB 이름.* TO 'USER ID'@'localhost'; 
FLUSH PRIVILEGES;
```



## 2. .env, .env.local 파일 만들고 secret key, database 정보 삽입

manage.py와 같은 경로에 .env, .env.local 파일을 생성한다. 그 안에는 database 정보와 secret key 등을 입력한다. 

```python
SECRET_KEY="시크릿 키"

DATABASE_USER="USER ID"
DATABASE_PASSWORD="PASSWORD"
```

