## sqlalchemy로 python script와 postgres연결하기

> sqlalchemy ORM을 활용하여 python 문서 내에서 외부 DB와 연결하는 방법, 데이터를 생성하여 적재하는 방법을 알아봅니다.



### 1. READ

**simple**

```python
import sqlalchemy
import pandas as pd

def connect(user, password, db, host, port):
    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(user, password, host, port, db)
    engine = sqlalchemy.create_engine(url, client_encoding='utf8')
    dataframe = pd.read_sql('SQL 구문', engine)
    print(dataframe) # 쿼리 결과가 dataframe으로 나온다.
```



### 2. CREATE

```python
url = 'postgresql://{}:{}@{}:{}/{}'
url = url.format(user, password, host, port, db)
engine = sqlalchemy.create_engine(url, client_encoding='utf8')
Base = declarative_base()

class MyTable(Base):
    
    __tablename__ = 'MyTable'
   
	id = Column('id', Integer, primary_key=True)
    createdAt = Column('createdAt', TIMESTAMP, server_default=func.now)
```



