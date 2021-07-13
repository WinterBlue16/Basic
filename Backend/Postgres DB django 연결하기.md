## Postgres DB django 연결하기

> postgres DB와 django를 연동하는 방법에 대해 서술한 문서입니다. 



### 0. postgresql이란?

설명 적기



### 1. postgresql 설치

> 아래의 설치는 MAC os Catalina를 기준으로 하고 있습니다.

```
brew install postgresql
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
postgres -V
```



### 2.  postgresql database 생성

> django와 연동할 database를 생성합니다. 

```sql
create database django_test;
create user user_id with password 'password';
alter role user_id set client_encoding to 'utf8';
alter role user_id set default_transaction_isolation to 'read committed';
alter role user_id set time zone 'Asia/Seoul';
grant all previleges on database 'database name' to user_id;
\q
```



### 3. django 설정

> postgres와 연동하기 위한 밑작업입니다.

```bash
pip install psycopg2
```



#### settings.py

```python
DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.postresql',
		'NAME' : 'database name',
		'USER' : 'user_id',
		'PASSWORD' : 'password',
		'HOST' : 'localhost',
		'PORT' : '',
	}
}
```



### 4. 연동 확인

> 가장 확실하게 확인해볼 수 있는 방법은 아래와 같습니다. 

1. django에서 테이블을 삭제한다. 
2. python manage.py makemigrations -> python manage.py migrate를 진행한다. 
3. 다시 terminal을 통해 postgres에 접속하고, 해당 테이블이 존재하는지를 확인한다. 

```bash
# models.py 변경사항 반영
python manage.py makemigrations
python manage.py migrate

# postgres DB 접속
psql postgres
\l
\c '선택할 database 명'
\dt
```

