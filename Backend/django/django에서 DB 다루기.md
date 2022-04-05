## django에서 DB 다루기

> django에서 생성한 db를 ORM으로 다루는 방법에 대한 문서입니다. 

### 1. get

> 조건에 해당하는 한 개의 object만 가져올 수 있다. 조건에 해당되는 object가 2개 이상일 경우 MultipleObjectsReturned 에러가 발생하게 된다. 

```python
'DB table명'.objects.get(column_1='조건 1', column_2='조건 2')
```



### 2. filter

> 조건에 해당하는 여러 개의 object를 queryset으로 가져올 수 있다. 

```python
'DB table명'.objects.filter(column_1='조건 1', column_2='조건 2')
```

- get의 경우 조건에 맞는 object가 없을 경우 ObjectDoesNotExist 에러가 발생하지만, filter의 경우 조건에 맞는 object가 없으면 그냥 빈 queryset을 반환합니다. 그렇기 때문에 이런 경우를 에러로 구분하고 핸들링하기 위해서는 if len(queryset)==0과 같은 조건을 주어 분기를 나눠야 합니다.
- filter를 여러 번 적용하는 것도 가능합니다. 아래는 그 예시입니다.

```python
'DB table명'.objects.filter(column_1='조건 1', column_2='조건 2').filter(column_3='조건 3')
```

#### 2.1. first

> filter해 가져온 queryset에서 가장 첫 번째 object를 가져옵니다.

```python
'DB table명'.objects.filter(column_1='조건 1', column_2='조건 2').first()
```



#### 2.2. latest

> filter해 가져온 queryset에서 특정 column 기준 가장 최근에 생성된 object를 가져옵니다.

```python
'DB table명'.objects.filter(column_1='조건 1', column_2='조건 2').latest('기준이 될 column 명')

# 또다른 방법
'DB table명'.objects.filter(column_1='조건 1', column_2='조건 2').order_by('-id')[0]

# 또다른 방법 2
'DB table명'.objects.filter(column_1='조건 1', column_2='조건 2').last('기준이 될 column 명')
```

조건을 따로 주지 않을 경우, 전체 queryset에서 특정 column 기준 가장 최근에 생성된 object를 가져옵니다. 

```python
'DB table명'.objects.latest('기준이 될 column 명')
```



### 3. all

> 전체 queryset을 가져옵니다. 

```python
'DB table명'.objects.all()
```



### 4. order_by

> 데이터를 특정 기준에 맞춰 정렬합니다.

#### 4.1. 기본

```python
# 조건을 주고 데이터를 필터링할 때
"DB table명".objects.filter().order_by('기준 column명')
# ex. SampleTable.objects.filter().order_by('created_at')

# 필터 없이 모든 데이터를 출력할 때
"DB table명".objects.all().order_by('기준 column명')
# ex. SampleTable.objects.all().order_by('created_at')
```

#### 4.2. 역순으로

> 기준 column명 앞에 '-'가 추가됩니다.

```python
# 조건을 주고 데이터를 필터링할 때
"DB table명".objects.filter().order_by('-기준 column명')
# ex. SampleTable.objects.filter().order_by('-created_at')

# 필터 없이 모든 데이터를 출력할 때
"DB table명".objects.all().order_by('-기준 column명')
# ex. SampleTable.objects.all().order_by('-created_at')
```



### 5. get last n values

> 데이터 중 일부만을 잘라 보여줍니다. 

```python
# id 순으로 오름차순 정렬한 데이터를 상위 n개 보여줍니다.
'DB table명'.objects.all().order_by('id')[:n]
```



### 6. 데이터 한꺼번에 생성, 저장하기

> 여러 개의 데이터 오브젝트를 한번에 생성합니다.

```python
# object list 생성
object_list = ["table 명"("column명"=value, "column명"=value....) for i in range(n)]

# db에 반영
"table 명".objects.bulk_create(object_list)
```

- save()를 사용하지 않고도 한꺼번에 데이터 생성 및 저장이 가능하고, 값이 조금만 다른 비슷한 데이터 여러 개를 한번에 생성할 수 있습니다.



### 7. values_list

> 특정 column의 데이터만 모두 가져와 활용할 수 있습니다.

```python
# Users라는 모델(table)의 name이라는 column의 데이터만 모두 가져오기
Users.objects.values_list('name') 
```

위의 코드로 가져온 데이터는 queryset 형태이며, 각 데이터는 tuple((value, ))로 되어있습니다. 

이를 리스트로 바꾸어 활용하기 위해서는 아래와 같이 진행하면 됩니다.

```python
# queryset에서 list로 변경
user_name_queryset = Users.object.values_list('name')
user_name_list = list(map(lambda x : ''.join(x), user_name_queryset)
```



### 8. 특정 문자열이 포함된 value만 가져오기

> 특정 문자열이 포함된 값들만 쿼리하여 가져올 수 있습니다. 

```python
user.objects.get('[컬럼명]__contains'='특정 문자열')
user.objects.get('name__contains'='Lee')
```

