# 06_Web Scraping Basic

> - 다음 사전을 낱말 뜻과 설명을 스크래핑하는 것을 시작으로, 웹 스크래핑의 기초에 해당하는 코드와 라이브러리를 학습한다.
> - 다음 사전에서 `achieve`을 검색했을 때 출력되는 화면에서 단어 뜻과 그 의미를 출력해 본다.  

```python
# 필요한 라이브러리 설치

!pip install beautifulsoup4==4.7.1

# 라이브러리 불러오기

from bs4 import BeautifulSoup
from urllib.request import urlopen # 서버로부터 모든 것을 받아올 수 있다.
```

