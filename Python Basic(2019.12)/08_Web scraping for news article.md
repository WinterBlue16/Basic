# 08_Web scraping for news article

> - 네이버, 다음 포털의 뉴스 기사 크롤링으로 기본적인 웹 스크래핑을 학습한다. 

```python
# 라이브러리 불러오기
import requests
from bs4 import BeautifulSoup

import pandas as pd
from datetime import datetime
import time
import re
```



## 1. 뉴스 검색 결과에서 네이버 뉴스만 추려내기

> - 우선 URL 주소에서 `query`를 지워보거나 다른 곳을 클릭해보며 분석해, 네이버 뉴스 플랫폼에만 올라와 있는 뉴스 기사 주소들의 공통 분모를 찾는다. 
> - 일반적으로 언론사별 홈페이지 기사보다는 대형 플랫폼 기사들에 댓글이 달리는 경우가 많으므로 댓글 크롤링 시에도 반드시 거쳐야 할 과정이다.
> - `query`가 한글일 경우 주소 맨 앞에 커서를 놓고 `spacebar`를 눌러 한칸 띈 후 주소를 복사해야 한글이 깨지지 않는다.

```python
# 뉴스기사 URL 분석
https://search.naver.com/search.naver? # 네이버 검색
    where=news& # 뉴스 탭
    sm=tab_jum& 
    query=코로나바이러스 # 검색어

query = '코로나바이러스'
url = https://search.naver.com/search.naver?where=news&sm=tab_jum&query=코로나바이러스
```

![zhfh](https://user-images.githubusercontent.com/58945760/73122460-8c6a3080-3fc8-11ea-85a4-562fdc7b8e63.PNG)

> - `HTTP`: Hyper Text Transfer Protocol의 약어. 
>   - `HTTP Request & Respond`: 요청 & 답변에 대한 약속이라고 이해한다.
>   - `HTTP Request`: `Get`(요청), `Post`(업데이트), `Put`(수정), `Delete`(삭제) 등이 있다.
> - 웹페이지의 `HTML`구조를 `parsing`하는 이유는 [이전 문서](https://github.com/WinterBlue16/TIL/blob/master/Python%20Basic(2019.12)/04_Web%20Scraping%20Basic.md#1--%EB%8B%A4%EC%9D%8C-%EC%96%B4%ED%95%99%EC%82%AC%EC%A0%84--scraping%ED%95%98%EA%B8%B0)의 **Scraping에서의 Parsing** 항목을 참조.

```python
# 라이브러리 불러오기
from urlib.request import urlopen 

web = request.get(url).content
source = BeautifulSoup(web, 'html.parser') # BeautifulSoup으로 web 페이지의 HTML 구조를 parsing
# source를 그대로 출력할 경우, 담고 있는 텍스트가 많아 버벅거리게 될 수 있다.

# 기사의 모든 제목 scraping 하기 
news_subjects = source.find_all('a', {'class' : '_sp_each_title'})


```

