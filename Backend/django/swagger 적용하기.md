## django project에 swagger 적용하기

> django로 어플리케이션을 생성할 때 swagger를 적용, 활용하는 방법을 정리한 문서입니다.



### 0. 준비

먼저 `django`와 `django`를 설치할 가상환경을 구성해야 합니다.  가상환경은 `conda`, `virtualenv` 등 여러 개의 옵션을 선택할 수 있지만, 여기서는 python 3.4 이상에 기본적으로 제공되는 `pyenv`를 사용하겠습니다.



#### **가상환경 구성**

```bash
$ python -m venv env
```



#### **django 설치**

`django`의 버전은 어떤 버전을 선택하든 큰 상관은 없습니다. 본인의 기준이나 프로젝트에서 합의된 버전을 설치하면 됩니다. 

```bash
pip install django
```



#### django project 생성

`swagger`를 적용하기 위해서는 사전에 `swagger`를 적용할 프로젝트를 생성해야 합니다.  프로젝트를 생성하기 전 앞에서 구성해두었던 가상환경을 활성화시킵니다. 

```bash
source env/bin/activate # 가상환경 활성화
django-admin startproject "프로젝트 이름" # 프로젝트 생성
cd "프로젝트 이름" # 문서로 이동
django-admin startapp "app 이름" # 앱 생성
```



#### DB 만들기

그 다음은 프로젝트와 연동할 데이터베이스를 선택하고, 생성합니다. django에서는 기본적으로 sqlite3을 제공합니다. 하지만 본인의 필요에 따라 MySQL DB, postgres DB 등을 선택할 수 있습니다. 어떤 DB를 선택하느냐에 따라 연동하는 방법도 달라지기 때문에 여기서는 이 정도만 설명하겠습니다.



### 1.  swagger 적용

여기서는 drf-yasg를 사용해 swagger를 적용하겠습니다. 이하의 내용은 [공식 문서](https://drf-yasg.readthedocs.io/en/stable/readme.html)를 참고했습니다. 

#### drf-yasg install

```
pip install -U drf-yasg
```

#### settings.py 수정

```python
INSTALL_APPS=[
...
'django.contrib.staticfiles',
'drf_yasg'
...
]
```

#### urls.py 수정

```python
...
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

...

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
   url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   ...
]
```

- urlpatterns를 바꿔줌으로써 swagger의 URL을 변경할 수 있습니다.
- get_schema_view의 파라미터를 재설정하여 기본 swagger 문서의 내용을 변경할 수 있습니다. 문서에는 사용자가 views.py에서 생성해 놓은 api들이 나열됩니다. api에 대한 설명을 더 덧붙이고 싶거나 수정하고 싶다면 method_decorator를 활용해 커스텀할 수 있습니다. 



### 2. swagger custom 

> swagger 문서를 가독성 좋게 커스텀하는 과정을 알아봅니다. 

- django 프로젝트에서 swagger 문서를 커스텀하는 데 가장 기본적인 라이브러리는 method_decorator입니다.

```python
from django.utils.decorators import method_decorator # 라이브러리 불러오기
```



- method_decorator는 다음과 같이 사용할 수 있습니다.

```python
@method_decorator(name='list', # GET API
    decorator=swagger_auto_schema(
        tags=['API에 지정할 태그'],
        operation_description="API에 대한 간략한 설명을 넣습니다.",
        responses={
            200: mySerializer, # API serializer
            401: 'Authentication Failed(40100)', # 이하 error 처리
            403: 'Permission denied(403)',
            404: 'Not found(404)'
        }
    )
)

```



### 3. 배포 시 swagger 적용하기

> django project 개발 서버 배포 시 swagger를 적용할 수 있는 방법 및 이슈를 기록한 부분입니다.



#### 필요한 값들만 입력하도록 입력 parameter 수정하기

> POST 요청 시 꼭 필요한 값들이 있고, 그렇지 않은 값들도 있습니다. 하지만 초기에는 모든 값을 입력하도록 raw data가 swagger 문서에 떠 있는 것을 볼 수 있습니다. method_decorator를 활용하여 이 중 굳이 입력할 필요가 없는 값들을 지우고, 입력이 필요한 값들만 남깁니다.

```python
from django.utils.decorators import method_decorator

@method_decorator(name='create',
                 decorator=swagger_auto_schema(
                 request_body=openapi.Schema(
                 type=openapi.TYPE_OBJECT,
                 properties={
                     '필요한 입력값 1': openapi.Schema(type=openapi.TYPE_STRING, description='입력값에 대한 설명'),
                     '필요한 입력값 2': openapi.Schema(type=openapi.TYPE_STRING, description='입력값에 대한 설명'),
                     ...
                 })))
```



#### 특정한 조건으로 데이터 필터링하기, API 함수 만들기

>django_filters를 통해 기존의 데이터베이스에 있는 정보들 중 특정한 조건에 맞는 데이터만을 가져올 수 있도록 합니다. 

- django-filter 설치

```bash
$ pip install django-filter
```

- settings.py 수정

```python
...
INSTALLED_APPS=[
    'django.contrib.admin',
    'django.contrib.auth',
    ...
    'django_filters',
]
...
```

- views.py

```python
...
from django_filters.rest_framework import DjangoFilterBackend
...

class MyViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = '데이터를 가져올 table 이름'.objects.all()
    serializer_class = MySerializer
    permission_class = []
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('필터링하고 싶은 column명')
```





#### Uncaught syntaxerror unexpected token '<'

> swagger ui에 필요한 js 파일들이 모두 존재하는데도 배포 화면에는 흰 화면만 뜨는 에러

- 로컬에서와 같이 js, css 파일이 존재하고, 성공적으로 api 호출을 할 수 있는데도 정작 URL로 접속하면 Swagger ui를 볼 수 없는 아주 골치아픈 이슈입니다. 아직 해결 방법을 찾지는 못했지만 적어둡니다. 해결방법을 찾으면 여기에 기록하겠습니다.

