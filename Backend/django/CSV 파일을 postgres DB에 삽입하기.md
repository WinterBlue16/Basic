## CSV 파일을 postgres DB에 삽입하기

> 로컬에서 작성한 CSV 파일 데이터를 한꺼번에 postgres DB에 적재하는 방법을 담은 문서입니다. 

### 1. 로컬에서 CSV 파일 작성

> DB에 적재할 데이터를 생성합니다. 

로컬에서 엑셀 파일을 열어 직접 작성할 수도 있고, 웹에 저장해두었던 파일을 다운로드할 수도 있습니다. 

### 2. 데이터를 삽입할 TABLE 생성

> CSV 데이터가 들어갈 TABLE을 생성합니다.

옷장이 있어야 옷을 보관할 수 있는 것처럼, 데이터를 적재할 때도 그 데이터를 적재할 TABLE이 있어야 합니다. TABLE을 생성하는 방법은 여러 가지가 될 수 있습니다. 

#### 2.1. 터미널에서 직접 생성

> 터미널에서 TABLE을 직접 생성합니다.

```sql
create table sample_data(
 id SERIAL,
 name VARCHAR(50),
 price INTEGER,
 primary key(id)
);
```



#### 2.2. django의 models.py에서 생성

> django에서 데이터가 들어갈 TABLE을 생성합니다. 

django의 models.py에서 데이터가 들어갈 TABLE을 만들 수 있습니다. 간단한 예시는 아래와 같습니다. 

```python
# id는 자동 생성
class SampleData(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField()
```

주의할 점은, 삽입될 CSV 데이터의 column과 새로 생성할 TABLE column의 개수와 순서가 같아야 한다는 점입니다. 또한 사전에 CSV 데이터를 꼼꼼히 살펴보고, null값이 존재하는지, 문자열의 경우 가장 긴 문자열이 무엇인지 알아두어야 합니다. django에서 문자열 column을 생성할 때는 max_length 값이 필수적으로 들어가므로 꼭 확인합니다.



### 3. CSV 파일 IMPORT하기

> CSV 파일을 만들어둔 TABLE에 적재합니다.

```sql
\copy "TABLE 명" from "csv 파일 경로" delimiter ',' csv header;
```



