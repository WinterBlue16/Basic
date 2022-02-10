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
import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import engine, Column, Integer, String, TIMESTAMP
from sqlalchemy.sql import func
from sqlalchemy.orm import sessionmaker, Session

url = 'postgresql://{}:{}@{}:{}/{}'
url = url.format(user, password, host, port, db)
engine = sqlalchemy.create_engine(url, client_encoding='utf8')
Base = declarative_base()

class MyTable(Base):
    """
    id와 createdAt은 자동 생성
    """
    
    __tablename__ = 'MyTable'
   
	id = Column('id', Integer, primary_key=True)
    name = Column('name', String)
    createdAt = Column('createdAt', TIMESTAMP, server_default=func.now())
    
def connect(engine):
    # create table
    Base.metadata.create_all(engine)
    
    Session = sessionmaker()
    Session.configure(bind=engine)
    
    test = MyTable(name='winterBlue')
    session.add(test)
    session.commit()
    
connect(engine)
```



