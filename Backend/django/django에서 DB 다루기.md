## django에서 DB 다루기

> django에서 생성한 db를 ORM으로 다루는 방법에 대한 문서입니다. 

### 1. get

> 조건에 해당하는 한 개의 object만 가져올 수 있다. 조건에 해당되는 object가 2개 이상일 경우 MultipleObjectsReturned 에러가 발생하게 된다. 

```python
'DB 명'.objects.get(column_1='조건 1', column_2='조건 2')
```



### 2. filter

> 조건에 해당하는 여러 개의 object를 queryset으로 가져올 수 있다. 

```python
'DB 명'.objects.filter(column_1='조건 1', column_2='조건 2')
```

