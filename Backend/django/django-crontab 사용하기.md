## django-crontab 사용하기

> 비동기 처리를 가능하게 해주는 django-crontab을 프로젝트에서 활용하는 방법에 대해 서술한 문서입니다.



### 1. install

> django-crontab을 설치합니다. 

### 2. settings.py

> crontab 기본 설정을 해줍니다.

### 3. cron.py

> 정기적으로 돌아갈 작업을 함수로 만들어 정의합니다.

### 4. Security & Privacy

> cron, bash를 모두 포함시킵니다.

### 5. set environment variables

> 환경변수를 설정합니다. 

- crontab은 별도의 shell을 사용하므로 동일한 환경변수를 사용하려면 따로 설정이 필요합니다. 

```bash
crontab -e # crontab 설정 수정 # 모든 환경변수를 복사, 붙여넣기한다.
```



