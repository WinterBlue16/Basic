## Postgres DB django 사용하기

> postgres DB와 django를 연동, 사용하는 방법에 대해 서술한 문서입니다. 



### 0. postgresql이란?

![post-thumbnail](https://media.vlpt.us/images/doohyunlm/post/120b753b-fe30-42f9-840a-6833fa89d1ed/3.png)

postgresql, 혹은 postgres DB는 데이터베이스 관리 시스템(DBMS) 중 하나로 무료로 제공되고 있습니다. RDBMS 오라클(Oracle)의 개발자들이 개발에 많이 참여하였기 때문에 오라클과 비슷한 부분이 있습니다.  한국에서 많이 사용되진 않지만 전세계적으로 DB 점유율이 꾸준히 증가하는 DB입니다. 

무료임에도 부지런한 업데이트로 지속적인 기능 추가가 이루어지고 있습니다. 또한 라이선스에 대한 비용 문제가 발생하지 않고, 오랫동안 사용된 오픈소스인만큼 안정적이고, 신뢰도가 높은 편입니다. 



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
\l # database 목록 조회
\c "선택할 database 명" # database 선택 
\dt # 선택한 database 내 table 조회
```



### 5. 기타 명령어 및 주의사항

#### JSONfield 사용하기

> django에서 json 형식의 데이터를 담을 수 있는 jsonfield를 사용할 수 있습니다.

```python
from django.contrib.postgres.fields import JSONfield

class sample(models.Model):
    sample_info = JSONfield()
```

- json field에는 json은 물론 json 데이터들이 담긴 리스트도 들어갈 수 있습니다. 리스트를 삽입하기 위해서는 아래와 같이 default를 지정해주면 됩니다. 

```python
sample_info = JSONfield(default=list)
```



#### 명령어 모음

>  postgres db 사용 시 유용하게 쓰일 수 있는 명령어입니다.

```sql
\l # 현재 생성된 모든 데이터베이스 조회

\c "데이터베이스명" # 특정 데이터베이스 선택

\dt # 선택한 데이터베이스의 모든 table 조회

\d + "table 이름" # 해당 테이블의 모든 column 정보를 조회

select*from "table 이름"; # 특정 table 전체 데이터 조회

alter table "table 이름" add "column 이름" "데이터 형";
# alter table novel add author varchar(30);

alter table "table 이름" drop "column 이름"ㅣ;
# alter table novel drop author;

update "table 이름" set "값을 수정할 column 이름"="바꿀 값" where "위치 조건";
# update novel set author='Jane Austin' where id=3;

alter table "table 이름" rename column "기존의 column 이름" to "새로 바꿀 column 이름";
# alter table novel rename published_date to published;

truncate table "table 이름"; # 해당 테이블의 모든 데이터 삭제(롤백 불가) # 
truncate table "table 이름" continue identity; # 테이블의 모든 데이터 삭제 & 시퀀스 유지 
truncate table "table 이름" restart identity; # 테이블의 모든 데이터 삭제 & 시퀀스 초기화
truncate table "table 이름" cascade # 테이블과 연결된 데이터까지 모두 삭제(foreginkey가 존재할 경우)
truncate table "table 이름" restrict # 테이블과 연결된 데이터가 1개라도 존재할 경우 해당 데이터는 삭제되지 않음

# column 추가
alter table "table 이름" add "추가하고 싶은 column 명";

# column 삭제
alter table "table 이름" drop "삭제하고 싶은 column 명";

# 특정 조건에 맞는 값들만 삭제하기
delete from "table 이름" where [삭제 조건];

# 특정 column의 값들을 그대로 다른 column으로 옮기기
update "table 이름" set "값을 채울 column 명"="값을 옮길 column 명"  ;

# column 오름차순 정렬
select*from "table 이름" order by "기준으로 할 column 명" asc; # asc 생략가능
select "확인하고 싶은 column 명" from "table 이름" order by "기준으로 할 column 명" asc;

# column 내림차순 정렬
select*from "table 이름" order by "기준으로 할 column 명" desc;
select "확인하고 싶은 column 명" from "table 이름" order by "기준으로 할 column 명" desc;

# null이 아닌 column들만 가져오기
select distinct column_name, table_name 
from information_schema.columns where column_name is not null;

# 특정 column의 값별로 현황 확인하기
select "column 명" from "table 이름" group by "column 명";
select distinct "column 명" from "table 이름";

# table 정보 확인하기
select table_name from information_schema.tables where table_schema='public';

# column data type(자료형과 길이 제한 명시됨) 변경하기
alter table "table 이름" alter column "column 명" type "변경할 data type";
# ex. alter table contents alter column content_url type varchar(300); 
```

#### 주의사항

- postgres는 기본적으로 모든 이름을 소문자(lowercase)로 인식합니다. 만약 column명에 대문자가 포함되어 있다면 아래와 같이 쌍따옴표("")로 묶어주어야 합니다. 

  - 예시

    ```sql
    # my_table이라는 이름의 테이블에 columnName이라는 column이 있다고 가정하겠습니다.
    select columnName from my_table; # 실제로는 select columnname from my_table;로 인식됩니다.
    select "columnName" from my_table; # 바르게 인식 # 작은 따옴표도 묶으면 안 됩니다!
    ```
    
    

### 6. 참고 

[DB-PostgreSQL이란?](https://velog.io/@doohyunlm/SQL-PostgreSQL-%EC%86%8C%EA%B0%9C)

