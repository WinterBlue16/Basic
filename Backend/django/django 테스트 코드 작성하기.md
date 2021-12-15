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

```
```



#### 3.2. test models

- model이 설계대로 데이터를 잘 저장하는지, validation check는 제대로 진행되는지 테스트합니다. 

```
```



#### 3.3. test views

- api가 제대로 작동하는지를 테스트합니다.

```
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

```
```

