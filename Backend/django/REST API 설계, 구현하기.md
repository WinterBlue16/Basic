## RESTful API 설계, 구현하기

> 다음 문서는 디프만 9기에서 백엔드를 담당하며 API를 설계 구현하는 과정에 대해 정리한 문서이다.

### 0. API와 RESTful API란?

- API(Application Programming Interface)

  ![API, 쉽게 알아보기](http://blog.wishket.com/wp-content/uploads/2019/10/API-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0.png)

  **단순하게 설명하면, 애플리케이션을 만드는 데 도움을 주는, 일종의 키보드와 같은 도구라고 할 수 있다.** 거의 모든 애플리케이션에는 그 애플리케이션을 개발하며 여러 기능을 테스트하는 개발자와, 그 애플리케이션을 서비스로서 이용하고 요청을 보내는 사용자, 그리고 이러한 요청들을 만족시키기 위한 데이터를 담고 있는 데이터베이스가 존재한다. API는 이러한 상황에서 사용자 혹은 개발자가 원활히 데이터를 주고받을 수 있도록 일종의 표준 양식을 제공하고, 그에 맞는 형식으로 필요한 데이터를 제공한다. 이 덕분에 모든 접속이 표준화되고, 기계/운영체제와 상관없이 누구나 동일한 정보를 얻는 것이 가능하다.

  그 외에도 API는 서버와 데이터베이스의 수문장 역할을 하며 허용된 사람들에게만 접근할 수 있는 권한을 부여한다. API의 유형은 크게 3가지로 나뉘며 아래와 같다.

  1. private API

     회사 외부에 공개되지 않는 API로, 회사의 개발자가 자체 제품, 서비스를 개선하기 위해 내부적으로 설계한 것이다. 회사 내부에서 관련자들에게만 공유되며, 제 3자의 노출을 철저히 막는다.

  2. public API

     Open API라고도 불리며, 모두에게 공개되는 API. 누구나 제한 없이 API를 사용할 수 있다는 것이 특징이다.

  3. partner API

     private API와 public API의 중간에 있다고 할 수 있는 API다. 기업이 데이터 공유에 동의하는 특정인들만 사용할 수 있게 한 API로, 비즈니스 관계에서 사용되며 파트너 회사 간 소프트웨어를 통합할 때 사용되곤 한다.

- REST(REpresentational State Transfer)

  웹에 존재하는 **모든 자원(이미지, 동영상 등등)에 고유한 일종의 코드(URI, 이름이라고 부르기에는 애매하다)를 부여하여 사용자 혹은 개발자가 그를 활용할 수 있는 환경을 만들어주는 규칙**, 혹은 방법론이다. 세세하게 나눠서 보면 자원을 정의하는 법, 각 자원을 구별할 수 있는 주소를 지정하는 법 등을 포함한다. REST의 구성은 아래의 세 가지로 나뉜다.

  - 자원(Resource) : URI를 통해 식별되는 자원
  - 행위(Verb) : HTTP 메소드(GET, POST, PUT, PATCH 등)
  - 표현(Representations)

  RESTful API는 바로 이 REST의 특징을 지키며 자원을 제공하는 API를 말한다. 더 구체적으로 풀어서 설명하면 HTTP를 통해 CRUD를 실행하는 API를 말하며, URL을 통해 자원을 특정하고, HTTP 메소드를 통해 자원으로 할 행위를 정하고, 그에 따라 JSON 혹은 XML 파일로 데이터를 주고받는 API이다.

  이러한 REST 개념이 최근 들어 각광받게 된 이유로는 **뛰어난 범용성**에 있다. 과거에는 사용 기기가 컴퓨터로 한정되었기 때문에 컴퓨터의 웹 브라우저만 지원하면 큰 문제가 없었다. 하지만 최근 들어 스마트폰, 아이패드, 노트북 등 멀티 디바이스들이 발달하면서 개발자들은 각각의 기기에서도 어플리케이션이 실행될 수 있도록 해야 했고, 수많은 변수와 마주하게 되었다. 기기별 최적의 서비스를 제공하기 위해서는 각각의 서버를 새로 만들어야 했다. 하지만 RESTful API의 경우 이러한 수고를 줄요주는 범용적인 사용성을 보장하고 있어 주목받게 되었다.

- django REST framework

![Django REST Framework](https://www.django-rest-framework.org/img/logo.png)

### 1. 데이터베이스 설계(개념적/논리적 데이터 모델링)

데이터들을 저장할 데이터베이스의 구조를 설계한다. 여기서 데이터들을 잘게 쪼개어 테이블, 테이블 안의 column으로 만든다.

#### 1.1. ERD 그리기

테이블 간의 연관성을 고려하여 전체 데이터베이스의 구조도를 그린다. 프로젝트의 진행 방향과 MVP 등에 따라 위의 설계나 ERD는 바뀔 수 있다. 다만 변동성을 줄이기 위해서는 팀원들과 많은 이야기를 해보고 서비스를 구체화해보는 시도가 필요하다. 와이어프레임이 나왔을 경우 훨씬 수월해진다.

### 2. 데이터베이스 모델링(물리적 데이터 모델링)

#### 2.1 기능에 따른 테이블 클러스터링

각각의 테이블을 구성하는 모델을 커다란 기능에 따라 묶는다. 예를 들어, 사용자 정보 생성/수정/삭제 기능은 로그인 기능과 함께 'User(사용자) 관련 기능'으로 묶일 수 있다. 그럴 경우 이러한 모델들을 프로젝트 폴더 안 하나의 앱 안에 넣어

### 3. API 인터페이스 설계

#### 3.1 URL 설계

url의 경우 리소스(자원)을 중심으로 이름을 짓는다. 예를 들어 책에 대한 정보를 보여주는 url을 설계한다고 하면, 다음과 같은 url을 생각해볼 수 있다.

'/book/1/', '/book/2/', '/book/3/'....

### 4. API 테스트

#### 4.1. 로컬 테스트

`django`에서는 `swagger`를 통해 테스트해볼 수 있다. 또 `postman`을 활용해 테스트를 시도할 수 있다. 로컬에서만 테스트할 경우 한계점이 존재하므로, 가능한 빨리 서버를 올려 테스트를 진행해보는 것이 도움이 된다.

#### 4.2. 서버 테스트

서비스 서버와 데이터베이스 서버가 올라간 서버에서 테스트해볼 수 있다. 서버를 배포하는 과정이 생각보다 까다롭기 때문에 충분히 고려하여 일정을 잡는 것이 좋다.

### 번외\_Signed URL

#### Signed URL이란?

**클라우드를 통해 서버를 배포할 때, 배포되는 파일의 사용, 접근 등을 제한하는 기능**이다. 예를 들어 특정 날짜가 지나면 파일을 받지 못하게 하고 싶을 때, 특정 날짜 이후에만 파일을 받게 하고 싶을 때, 정해진 IP에서만 파일을 받을 수 있도록 허용하고 싶을 때 등 여러가지 제한을 두고 싶을 때 사용한다.

#### S3 버킷 만들기

AWS 콘솔에서 생성할 수 있다. AWS의 API 중에는 s3 버킷이 없는 경우 사용할 수 없는 것도 있다. 버킷 생성 시 버킷 명칭은 관련 서비스에 맞추어 정하는 게 좋다. 또한 로컬 혹은 웹 환경에서 버킷으로 파일을 업로드하거나 다운로드하고 싶을 경우, **퍼블릭**으로 설정해야 한다.

#### 사용자 생성

IAM에서 사용자를 생성하고, S3에 대한 권한을 부여해야 한다.

#### S3 버킷 EC2와 연동하기

> 버킷에 데이터를 업로드하고 다운로드하려면 url을 통한 접근이 가능해야 한다. 그러한 부분을 설정해주는 것이 바로 정책 설정이다.

```json
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::버킷 이름/*"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::계정 번호:user/서버 이름"
      },
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::버킷 이름", "arn:aws:s3:::버킷 이름/*"]
    }
  ]
}
```

위의 정책을 설정함으로써 signed url을 통해 버킷에 있는 파일을 다운로드할 수 있게 됨은 물론, 불특정 다수의 사람들이 url을 통해 파일을 업로드할 수 있게 된다.

#### S3 django와 연동하기

**media, static을 사용할 경우**

```python
#local_settings.py
AWS_ACCESS_KEY_ID = ''
AWS_SECRET_ACCESS_KEY = ''
```

```python
# setting.py
AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY

AWS_REGION = '리전 지역'
AWS_STORAGE_BUCKET_NAME = '버킷명'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.%s.amazonaws.com' % (
    AWS_STORAGE_BUCKET_NAME, AWS_REGION
)
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl' : 'max-age=86400',
}
AWS_DEFAULT_ACL = 'public-read'
AWS_LOCATION = 'static'
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]

# 프로젝트 파일/static 폴더 생성
# python manage.py collectstatic
```

```python
# settings.py
INSTALLED_APPS = [
...
    # s3 storage
    'storages'
]

DEFAULT_FILE_STORAGE = 'config.asset_storage.MediaStorage'
```

```python
# asset_storage.py

from storages.backends.s3boto3 import S3Boto3Storage

class MediaStorage(S3Boto3Storage):
    location = 'media'
    file_overwrite = False
```

#### Signed URL 설정하기

**파일을 S3 bucket에 업로드**

제한된 시간만 사용자에게 이미지나 파일을 업로드 할 수 있게 서버에서 url을 제공한다.

```python
# settings.py
...
# AWS
AWS_SIGNATURE_VERSION = 's3v4'
AWS_REGION = '본인 AWS 계정의 지역(리전)' # ex. us-east-2
AWS_STORAGE_BUCKET_NAME = '미리 생성해둔 s3 버킷 이름' # ex. my-first-bucket
```

```python
# s3_storage.py
import boto3
from django.conf import settings
from botocore.client import Config

# client에서 요청이 온 수만큼 signed url을 생성
def sign_upload(counts, user_id):
    s3 = boto3.client('s3', config=Config(signature_version=settings.AWS_SIGNATURE_VERSION, region_name=settings.AWS_REGION))
    result = []

    for i in range(counts):# signed url은 오직 하나의 객체와만 대응됨
        key = 'users/' + str(user_id) + '/' +  # s3 버킷 내 저장 위치, 파일명 지정
        signed_url = s3.generate_presigned_url(
            'put_object',
            Params={'Bucket': settings.AWS_STORAGE_BUCKET_NAME, 'Key': key},
            ExpiresIn=3600,
            HttpMethod='PUT',
        )
        result.append({
            'signed_url': signed_url,
            'public_url': 'https://%s.s3.amazonaws.com/%s' % (settings.AWS_STORAGE_BUCKET_NAME, key)
        })
    return result
```

**S3에 업로드된 파일을 다운로드**

```python
'''
일정 시간만 유효한 임시 url을 생성하여
한정된 시간 안에만 파일 다운로드가 가능하게 한다.

bucket_name = 파일이 저장되어 있는 버킷 이름
object_name = 파일이 저장된 경로(파일명 포함)

'''

import logging
import boto3
from botocore.exceptions import ClientError

def create_presigned_url(bucket_name, object_name, expiration=3600):
    s3_client = boto3.client('s3')
    try:
        response=s3_client.generate_presigned_url('get_object',
                                                 Params={'Bucket': bucket_name,
                                                        'Key': object_name},
                                                 ExpiresIn=expiration)

    except ClientError as e:
        logging.error(e)
        return None

    return response
```

- **NoSuchKey(해당 경로에 리소스(파일)이 존재하지 않는 경우) 주의!**
  - create_presigned_url에서 직접적으로 signed_url을 생성하는 generate_presigned_url의 경우, input된 key가 유효 여부와는 상관없이 signed_url을 생성한다. **이게 무슨 말이냐 하면, input한 key(경로)에 실제로 파일이 존재하지 않더라도 마치 그 경로에 파일이 있는 것처럼 signed_url을 생성한다는 것이다.** 사용자는 반환된 url을 클릭하고, 화면에 뜬 'NoSuchKey' 메시지를 보고 나서야 뭔가 잘못됐다는 것을 깨닫는다.
  - **signed_url은 generate_presigned_url에서 생성되므로 try~except문으로 이 에러를 잡거나 제어할 수 없다**. 따라서 애초에 create_presigned_url에 유효한 key만이 들어갈 수 있도록 꼼꼼히 확인, 점검하는 사전 작업이 필요하다. s3 bucket 내에 정말해당 파일이 존재하는지를 체크할 수 있는 함수를 생성하고, 그 함수를 다시 검증할 수 있는 함수가 있다면 에러가 나는 상황을 피할 수 있다.

**Signed URL 테스트하기**

> cmd와 postman을 사용하여 테스트해볼 수 있다. Windows cmd, Postman Web를 기준으로 한다.

```shell
# django project가 있는 폴더 내로 이동
python manage.py shell
>> from [signed url 생성 함수가 위치한 디렉토리] import [signed url 생성 함수]
# from apps.core.utils.signedUrl import create_signed_url
>> signed url 생성 함수 실행
# create_signed_url(args)
```

위의 코드를 통해 signed url을 받아내면, 이 url을 postman에 넣어 s3 스토리지에 파일이 업로드되는지 테스트해 볼 수 있다. 이 때 들어가는 Http method는 `PUT`이다.

단, 여기서 주의할 점이 있다. 한 번 shell을 실행 중일 때 코드를 변경했다면, exit()으로 다시 shell을 종료한 후 다시 python manage.py shell을 실행해야 변경한 코드가 반영된다. 코드를 변경해도 결과가 달라지지 않는다고 안심했다가 중요한 코드를 날려먹을 수도 있으므로 주의한다.

**query parameter 가져오기**

django에서는 request.GET, request.POST를 통해서 쿼리로 보낸 값을 가져오는 것이 가능하다.

```python
request.GET['쿼리 딕셔너리의 key 값']
# 위의 key값은 request에서 json 데이터를 보낼 때 설정해둔 key를 말함
```

### ※ 참고 자료

- https://jamanbbo.tistory.com/43
- [Signed URL 설명 참조](http://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter12/04)
- [AWS EC2와 S3 연동](https://aws.amazon.com/ko/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/)
- [AWS CLI 설치 및 기본설정](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-configure-files.html)
- **[S3 Storage와 django 연동](https://velog.io/@hwang-eunji/aws-s3-%EB%AF%B8%EB%94%94%EC%96%B4-%EC%84%9C%EB%B2%84-%EC%84%A4%EC%A0%95-django-%EC%84%A4%EC%A0%95)**
- [S3 버킷 권한에 대하여](https://zamezzz.tistory.com/299?category=847391)
- [S3 버킷 정책 관련2](https://blog.myungseokang.dev/posts/django-use-s3/)

- [AWS CLI에서 presigned url 생성](https://medium.com/@labcloud/s3-pre-signed-url-%EB%AF%B8%EB%A6%AC-%EC%84%9C%EB%AA%85%EB%90%9C-url-%EB%A7%8C%EB%93%A4%EA%B8%B0-596aff8bdc45)
