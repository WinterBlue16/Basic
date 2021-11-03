# FastAPI 시작하기

> fast API 실습 진행에 대한 문서입니다.

 

## 1. 설치하기

### 1.1. FastAPI 설치

```bash
pip install fastapi # fast api 설치
```



### 1.2. uvicorn/hypercorn 설치

```bash
pip install uvicorn[standard] # uvicorn 설치
```



## 2. 기본 예제

### 2.1. 기본 예제

#### main.py

```python
from fastapi import FastAPI

app = FastAPI()

@app.get('/myapi')
def read_root():
    return {'Hello':'World!'}
```

**서버 실행**

```bash
uvicorn main:app --reload
```



