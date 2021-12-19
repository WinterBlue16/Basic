## django 테스트 코드 작성하기

> django project 진행 시 테스트 코드를 작성하는 방법에 대해 설명하는 문서입니다. 

### 1. 기본 명령어

```python
# django project test 시작 명령어
python manage.py test [app 이름]
# python manage.py test my_app
```



### 2. 디렉토리 구조

> django project에서 테스트 파일들을 구성하는 방법에 대해 설명합니다.

```
# MLFYM
...
├── 📂 ..
└── 📂 tests
   ├── 📄 test_urls.py
   ├── 📄 test_models.py
   └── 📄 test_views.py

```

- 위와 같은 디렉토리를 구성해 놓으면, python manage.py test [app 이름] 명령어 실행 시 test가 포함된 모든 파일들의 테스트를 진행합니다. 

### 3. 테스트 코드 작성

> 각 model, views, url을 테스트합니다.

#### 3.1. test urls

- urls.py가 지정한 url과 views의 viewset을 잘 연결하고 있는지 테스트합니다.

```python
from django.test import SimpleTestCase
from django.urls import resolve, reverse
import my_api import views # views.py

class TestUrls(SimpleTestCase):
    def setUp(self):
        """
        url, url name, viewset setting 등
        테스트 실행 시 들어갈 고정값
        """
        ...
     
```

기본 코드는 위와 같고 url_name의 여부와 request 시 query의 존재 여부에 따라 다른 함수를 사용합니다.  

```python
def test_query_is_not_existed_url(self):
    self.assertEquals(resolve(url).func.cls, views.viewset_one)
```



```python
def test_query_is_existed_url(self):
    url = reverse(url, args=['something'])
    self.assertEquals(resolve(url).func.cls, views.viewset_two)
```





#### 3.2. test models

- model이 설계대로 데이터를 잘 저장하는지, validation check는 제대로 진행되는지 테스트합니다. 

```
```



#### 3.3. test views

- api가 제대로 작동하는지를 테스트합니다.

```python

...
def setUp(self):
    """
    테스트에 필요한 변하지 않는 값들을 설정한다
    """
    self.client = Client()
    ...
    
@classmethod
def setUpTestData(cls):
    """
    테스트에 사용할 데이터를 생성
    """
    ...
```



### 4. 테스트 진행

```bash
python manage.py test [app 이름]
# ex) python manage.py test myapp
```



### 5. 기존 데이터 활용

> fixture와 dumpdata를 통해 기존 데이터를 이용해 테스트를 진행할 수 있습니다.

- 기존 데이터 json 파일로 저장

```bash
python manage.py dumpdata [저장할 table 이름] --indent 2 > [저장할 파일 이름]
# ex) python manage.py dumpdata Users --indent 2 > Users_data.json
```

- text 시 fixture로 setting

```python
from django.test import TestCase, Client

...

class TestViews(TestCase):
    fixtures = [
        'dumpdata가 위치한 경로' # ../Documents/project/my_project/my_api/fixtures/data.json
    ]
...
```

