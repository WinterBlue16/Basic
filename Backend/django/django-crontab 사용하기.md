## django-crontab 사용하기

> 비동기 처리를 가능하게 해주는 django-crontab을 프로젝트에서 활용하는 방법에 대해 서술한 문서입니다.

- 아래의 내용은 Mac을 기반으로 하고 있습니다. 



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

- CRONJOBS에는 프로젝트와는 별개로 background에서 수행할 작업들을 입력합니다. 
- '*/1 * * * *'는 1분에 한 번 해당 작업을 수행한다는 뜻입니다.
- log를 지정한 곳에서 확인하고 싶을 경우, 아래와 같이 할 수 있습니다.

```python
...
CRONJOBS = [
    ('*/1 * * * *', 'myapp.cron.scheduled_task', '> log/myproject_cron.log') # 앱 이름.cron.실행할 함수
]
...
```

- 위와 같이 입력할 경우, 실행 폴더(django project의 가장 상위 폴더) 하위로 log라는 디렉토리가 생성되고, 그 안에 log 파일이 생성됩니다. 
- 이 log 파일의 내용은 실행되면서 계속 삭제되었다가 다시 생성됩니다. 
- log 파일에서는 에러 로그를 확인할 수 없습니다. 에러 로그를 확인하기 위해서는 var/mail/의 [사용자 계정 이름] 파일을 more이나 tail 명령어로 확인해야 합니다. 

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

- 환경변수를 사용하는 방법은 기존의 .bashrc, .bash_profile에 적은 모든 환경변수(django secret key 등)를 crontab으로 복사, 붙여넣기하면 됩니다. 

- 위의 방법이 아니라 shell 명령어로 crontab에 추가하려고 한다면 아래와 같이 사용할 수 있습니다.

  ```bash
  (crontab -l ; echo "crontab에 입력할 내용")| crontab - 
  # ex. (crontab -l ; echo "#!bin/sh")| crontab - 
  ```

  

### 6. crontab log 확인

> crontab 작업이 제대로 진행되는지 로그를 확인합니다. 

```bash
cat /var/mail/[계정 이름]
```

- crontab의 프로세스를 확인하고 싶다면 아래와 같은 명령어를 사용할 수 있습니다.

```bash
ps -ef|grep -i cron
```



### 7. docker 이미지 만들기

> crontab을 docker 이미지로 실행시킵니다.



### 8. 발생 이슈 정리

> crontab 적용 중 발생한 이슈를 정리합니다. 

#### 7.1. ERROR: unable to rename file: [Errno 2]No such file or directory

> local에서 적용 중 발생한 이슈입니다.

#### 7.2. ERROR: unable to create directory:[Errno 30]Read-only file system

> local에서 적용 중 발생한 이슈입니다. 



### 8. 기타

- 코드가 수정 및 변경될 경우 crontab에 실시간으로 반영된다. 

- 외부 프로그램이 필요할 경우 crontab에서 다시 설치해줘야 한다. (ffmpeg etc)

- 현재 docker image 빌드 후 실행 진행 중

- kubernetes에서 EKS로 배포했을 때에는 crontab이 제대로 실행되지 않았다. 하지만 EC2의 경우 crontab이 잘 실행되었다. 

  



