## django 테스트 코드 작성하기

> django project 진행 시 테스트 코드를 작성하는 방법에 대해 설명하는 문서입니다. 

### 1. 기본 명령어

```python
# django project test 시작 명령어 # 모든 test를 진행합니다.
python manage.py test [app 이름]
# python manage.py test my_app

# test_urls
python manage.py test [app 이름].tests.test_urls

# test_models
python manage.py test [app 이름].tests.test_models

# test_views
python manage.py test [app 이름].tests.test_views
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
        # try something....
     
```

기본 코드는 위와 같고 url_name의 여부와 request 시 query의 존재 여부에 따라 다른 함수를 사용합니다.  

- query가 필요하지 않을 경우

```python
def test_query_is_not_existed_url(self):
    self.assertEquals(resolve(url).func.cls, views.viewset_one)
```

- query가 필요할 경우(url에 query parameter가 포함)

```python
def test_query_is_existed_url(self):
    url = reverse(url, args=['something'])
    self.assertEquals(resolve(url).func.cls, views.viewset_two)
```



#### 3.2. test models

- model이 설계대로 데이터를 잘 저장하는지, validation check는 제대로 진행되는지 테스트합니다. 

```python
from django.test import TestCase
from my_app.models import MyModel1, MyModel2

class TestModels(TestCase):
    def test_my_model_in_creation(self):
        """
        설계대로 데이터 object가 잘 생성되는지 확인합니다.
        """
        my_object1 = MyModel1.objects.create(
            col1 = ...,
            col2 = ...,
            ...
        )
        my_object2 = MyModel2.objects.create(
            col1 = ...,
            col2 = ...,
            ...
        )
        self.assertEquals(my_object1.col1, 'something')
        self.assertEquals(my_object2.col2, 'something')
```

- 모델을 테스트할 때는 각 column에 설정해놓은 제약이나 값 조건들이 데이터 생성 시 제대로 적용되는지를 확인합니다. 

  - default 값이 제대로 들어가는지, unique 값을 True로 주었을 경우 중복 데이터를 제대로 걸러내는지 등

  - choice를 준 값의 경우 test에서는 choice가 핸들링되지 않는 경우가 있습니다. 

#### 3.3. test views

- api가 제대로 작동하는지를 테스트합니다.

```python
def setUp(self):
    """
    테스트에 필요한 변하지 않는 값들을 설정한다
    """
    self.client = Client()
    # try something..
    
@classmethod
def setUpTestData(cls):
    """
    테스트에 사용할 데이터를 생성
    """
    ...
```

**setUpTestData를 제외한 데이터들은 테스트 데이터베이스에 저장되지 않으며, 다른 함수에서 사용할 수도 없습니다.** 이게 무슨 말이냐면, 만약 POST api를 테스트해 데이터가 생성되는 것을 확인했다고 해도 이 새로 생성된 데이터를 다른 api를 테스트하는 함수에서 활용할 수는 없다는 뜻입니다.  

test_urls과 같이 url_name의 여부, request 시 query의 존재 여부에 따라 다른 형식의 함수를 사용합니다. 

- url_name이 존재할 경우

```python
def test_my_api_has_url_name_GET(self):
    """
    api를 테스트하는 함수를 만들 때는 이름만 봐도 해당 함수가 어떤 api를 테스트하는 것인지 명확히 알 수 있도록 한다. 
    """
    response = self.client.get(reverse('url_name'))
    self.assertEquals(response.status_code, 200)
```



- url_name이 존재하지 않을 경우/존재할 경우

```python
def test_my_api_without_url_name_GET(self):
    response = self.client.get('url') # url name이 존재할 경우 self.client.get(reverse(url name))
    self.assertEquals(response.status_code, 200)
```



- request data(query 포함)가 필요할 경우

```python
def test_my_api_need_query_GET(self): # path
    response=self.client.get('url', {"request data": "request data", 
                                    ...})
    self.assertEquals(response.status_code, 200)
    
def test_my_api_without_query_GET(self): # query
    response=self.client.get(reverse('url name', args=['query 1', 'query 2']))
    self.assertEquals(response.status_code, 200)
    
def test_my_api_without_path_GET(self): # query + path
    response=self.client.get(reverse('url name', args=['query 1', 'query 2']), 
                                     {"request data": "request data", 
                                    ...})
    self.assertEquals(response.status_code, 200)
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

