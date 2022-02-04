## django runserver 시 한 번만 자동으로 함수 실행하기

> django project runserver 시 자동으로 특정 함수가 실행되도록 하는 방법에 대해 설명합니다.

프로젝트를 실행함과 동시에 함수가 자동으로 실행되었으면 좋겠다고 생각할 때가 있습니다. 

예를 들어, 어플리케이션 실행에 필요한 데이터가 있는데, 그 데이터를 외부 api를 통해 받아와야만 할 때가 있습니다. 한 번 서버가 실행되면서 해당 데이터를 가져오는 api를 호출하고, 이후에는 가져온 데이터를 저장해두고 계속 쓰는 것입니다. 

이럴 때 사용할 수 있는 것이 바로 AppConfig입니다. 

### 1. 함수 생성하기

- 먼저, 실행될 함수를 먼저 작성합니다. 
- 해당 함수가 복잡할 경우 따로 function.py 등으로 분리할 수 있습니다.  

```python
def get_data_from_api():
    """
    django project 서버 실행과 함께 실행될 함수
    """
```



### 2. apps.py 수정하기

```python
from django.apps import AddConfig

class MyAppConfig(AddConfig):
    name = "app 이름" # project가 아닌 app 이름입니다!
    def ready(self):
        get_data_from_api()
```



### 3. &#95;&#95;init&#95;&#95;.py 수정하기

```python
default_app_config = 'app 이름.apps.MyAppConfig'
```



