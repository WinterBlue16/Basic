## Postgres DB django 연결하기

> postgres DB와 django를 연동하는 방법에 대해 서술한 문서입니다. 



### 0. postgresql이란?



### 1. postgresql 설치

```
```



### 2.  postgresql database 생성

```
```



### 3. django 설정

```
```



### 4. 연동 확인

> 가장 확실하게 확인해볼 수 있는 방법은 아래와 같다.

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

