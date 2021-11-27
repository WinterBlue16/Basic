## django pagination 적용하기

> django에서 pagination을 적용하는 방법에 대해 다룬 문서입니다.

api를 만들 때, 가져와야 할 데이터가 너무 많아 response가 돌아올 때까지 로딩이 지나치게 길어지는 경우가 있습니다. 특히 데이터 전체를 가져와야 하는 GET api의 경우가 그렇습니다. 그럴 때 django의 pagination 기능을 사용할 수 있습니다. 

pagination이란 말 그대로 책장의 페이지를 넘기는 것처럼, 요청을 보낼 때 페이지 번호라는 값을 함께 입력하여 그 부분에 해당하는 일부 데이터만을 불러오는 것을 말합니다.

아래의 내용은 이미 django의 문법과 디렉토리 구조에 대해 이미 알고 있다는 것을 전제로 서술되었습니다.

### 0. 주의사항

-  views.py에서 viewsets을 사용해 api를 구현했을 경우, viewsets 마다 pagination_class 값을 주어 pagination을 적용해야 합니다.
- 그렇게 했는데도 pagination이 적용되지 않을 경우, def list()에 별도의 로직이 존재하지 않는지 확인할 필요가 있습니다.  GET api를 정의하는 list() 함수는 pagination 설정보다 우선으로 적용됩니다. 
- django pagination은 django filter와 함께 사용할 수 있습니다.  

### 1. settings.py 설정

```python
...
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 3,
}
...
```

#### 1.1. PageNumberPagination

#### 1.2. LimitOffsetPagination



### 2. pagination custom

