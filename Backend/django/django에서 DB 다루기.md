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

- get의 경우 조건에 맞는 object가 없을 경우 ObjectDoesNotExist 에러가 발생하지만, filter의 경우 조건에 맞는 object가 없으면 그냥 빈 queryset을 반환합니다. 그렇기 때문에 이런 경우를 에러로 구분하고 핸들링하기 위해서는 if len(queryset)==0과 같은 조건을 주어 분기를 나눠야 합니다.

#### 2.1. first

> filter해 가져온 queryset에서 가장 첫 번째 object를 가져옵니다.

```python
'DB 명'.objects.filter(column_1='조건 1', column_2='조건 2').first()
```



#### 2.2. latest

> filter해 가져온 queryset에서 특정 column 기준 가장 최근에 생성된 object를 가져옵니다.

```python
'DB 명'.objects.filter(column_1='조건 1', column_2='조건 2').latest('기준이 될 column 명')

# 또다른 방법
'DB 명'.objects.filter(column_1='조건 1', column_2='조건 2').order_by('-id')[0]

# 또다른 방법 2
'DB 명'.objects.filter(column_1='조건 1', column_2='조건 2').last('기준이 될 column 명')
```

조건을 따로 주지 않을 경우, 전체 queryset에서 특정 column 기준 가장 최근에 생성된 object를 가져옵니다. 

```python
'DB 명'.objects.latest('기준이 될 column 명')
```



### 3. all

> 전체 queryset을 가져옵니다. 

```python
'DB 명'.objects.all()
```

