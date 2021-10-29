## django-crontab 사용하기

> 비동기 처리를 가능하게 해주는 django-crontab을 프로젝트에서 활용하는 방법에 대해 서술한 문서입니다.



### 1. install

> django-crontab을 설치합니다. 

```bash
pip install django-crontab
```



### 2. settings.py

> crontab 기본 설정을 해줍니다.

```python
...
INSTALL_APPS = [
    ...
    ...
    'django_crontab',
    ...
]
...
CRONJOBS = [
    ('*/1 * * * *', 'myapp.cron.scheduled_task') # 앱 이름.cron.실행할 함수
]
...
```



### 3. cron.py

> 정기적으로 돌아갈 작업을 함수로 만들어 정의합니다.

```python
def scheduled_task():
    ....
```



### 4. Security & Privacy

> cron, bash를 모두 포함시킵니다.

- command + space bar -> [보안 및 개인 정보 보호] -> 전체 디스크 접근 권한 -> bash, cron 추가

### 5. set environment variables

> 환경변수를 설정합니다. 

- crontab은 별도의 shell을 사용하므로 동일한 환경변수를 사용하려면 따로 설정이 필요합니다. 

```bash
crontab -e # crontab 설정 수정 # 모든 환경변수를 복사, 붙여넣기한다.
```



### 6. 기타

- 코드가 수정 및 변경될 경우 crontab에 실시간으로 반영된다. 
- 외부 프로그램이 필요할 경우 crontab에서 다시 설치해줘야 한다. (ffmpeg etc)
- 저장 경로 이슈 발생



