### django API Login 해제하기

> django API 생성 시 Login을 거치지 않아도 swagger 문서로 접속할 수 있도록 설정합니다.

- settings.py

```
SWAGGER_SETTINGS = {
	'USE_SESSION_AUTH': False
}
```

