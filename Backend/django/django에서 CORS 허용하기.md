## django에서 CORS 허용하기

> django에서 CORS를 허용하는 방법에 대해 설명합니다. 



### 1. CORS란?

> CORS란 무엇일까요?

CORS란 Cross-Origin Resource Sharing의 줄임말입니다. 



### 2. django 설정 추가하기

#### 2.1. django-cors-headers 설치

```
pip install django-cors-headers 
```



#### 2.2. settings.py 

```python
INSTALLED_ALLS = [
...
'corsheaders',
...
]
...
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    ...
]
...

CORS_ORIGIN_WHITELIST = ["접속 허용할 host"] # 다수 입력 가능
CORS_ALLOW_CREDENTIALS = True

```

- 모든 호스트가 접속할 수 있도록 하기 위해서는 아래와 같이 settings.py에 추가하면 됩니다. 

```python
CORS_ORIGIN_ALLOW_ALL = True
```

