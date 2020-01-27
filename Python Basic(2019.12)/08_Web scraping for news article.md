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
url = "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=" + 코로나바이러스
```

![zhfh](https://user-images.githubusercontent.com/58945760/73122460-8c6a3080-3fc8-11ea-85a4-562fdc7b8e63.PNG)

> - `HTTP`: Hyper Text Transfer Protocol의 약어. 
>   - `HTTP Request & Respond`: 요청 & 답변에 대한 약속이라고 이해한다.
>   - `HTTP Request`: `Get`(요청), `Post`(업데이트), `Put`(수정), `Delete`(삭제) 등이 있다.
> - 웹페이지의 `HTML`구조를 `parsing`하는 이유는 [이전 문서](https://github.com/WinterBlue16/TIL/blob/master/Python%20Basic(2019.12)/04_Web%20Scraping%20Basic.md#1--%EB%8B%A4%EC%9D%8C-%EC%96%B4%ED%95%99%EC%82%AC%EC%A0%84--scraping%ED%95%98%EA%B8%B0)의 **Scraping에서의 Parsing** 항목을 참조.

```python
# 라이브러리 불러오기
from urllib.request import urlopen 

web = requests.get(url).content
source = BeautifulSoup(web, 'html.parser') # web 페이지의 HTML 구조를 parsing
# source를 그대로 출력할 경우, 담고 있는 텍스트가 많아 버벅거리게 될 수 있다.

# 기사의 모든 제목 scraping 하기 
news_subjects = source.find_all('a', {'class' : '_sp_each_title'})
```

![캡처](https://user-images.githubusercontent.com/58945760/73122950-bd992f80-3fcd-11ea-8403-da8a7b579eb2.PNG)

```python
# 뉴스 제목만 뽑아 list로 저장
news_subjects = source.find_all('a', {'class' : '_sp_each_title'})

subject_list = []
for subject in news_subjects:
    subject_list.append(subject.get_text())
```

![캡처1](https://user-images.githubusercontent.com/58945760/73123018-60ea4480-3fce-11ea-9026-812ea57c0e43.PNG)

```python
# 첫 번째 기사 url, 제목 뽑아내기
urls = news_subjects
first_article = urls[0]
first_article.attrs['href']
first_article.get_text()

# 각 기사 url들 순서대로 뽑아내기 
for urls in source.find_all('a', {'class':'_sp_each_title'}):
    print(urls.attrs['href'])
    # print(urls['href']) # 이 코드도 사용 가능
```

![3](https://user-images.githubusercontent.com/58945760/73136680-a7ee3d80-4093-11ea-88dc-c9022cc9674e.PNG)

```python
# naver 플랫폼에 올라간 기사들 url만 추려내기
url_list = []

for urls in source.find_all('a', {'class':'_sp_each_url'}):
    if urls.attrs['href'].startswith("https://news.naver.com"):# 해당 주소로 시작되는 url이면 l
        url_list.append(urls['href'])# list에 추가
        
url_list
```

![e](https://user-images.githubusercontent.com/58945760/73136763-9c4f4680-4094-11ea-95b5-dc308df5cf56.PNG)



## 2. 단일 뉴스 페이지 분석하기

> - 뉴스 하나의 url을 분석하여 각 구성 요소들을 추려내는 방법을 배운다. 

```python
# 기사 전체 구조 파악하기
web_news = requests.get(urls_list[0]).content
source_news = BeautifulSoup(web_news, 'html.parser')
source_news
```

![캡처](https://user-images.githubusercontent.com/58945760/73164945-416e2b80-4136-11ea-97cb-cd742767347b.PNG)

### 2.1 기사 내용 & 발행 날짜 뽑아내기

![캡처2](https://user-images.githubusercontent.com/58945760/73165127-8d20d500-4136-11ea-99c3-2fd61ae64858.PNG)

```python
# 제목 뽑아내기 
title = source_news.find('h3', {'id' : 'articleTitle'}).get_text()
print(title)

# 날짜 뽑아내기 
date = source_news.find('span', {'class':'t11'}).get_text()

date = date.replace(" ", "")# 여백 없애주기
date1 = date[:11]
date2 = date[13:]
date3 = (lambda x : 'am' if x == '오전' else 'pm')(date[11:13])
date4 = date1 + date2 + date3

date = pd.Timestamp(date4)
print(date)
```

### 2.2 기사 본문

![캡처3](https://user-images.githubusercontent.com/58945760/73165898-17b60400-4138-11ea-90d9-bbb8951610df.PNG)

```python
# 본문 뽑아내기
article = source_news.find('div', {'id' : 'articleBodyContents'}).get_text()
article
```

![캡처4](https://user-images.githubusercontent.com/58945760/73166136-96ab3c80-4138-11ea-9451-080be1e8e0ee.PNG)

```python
# 필요없는 부호, 문장 제외하기
article = article.replace('\n', '') # '\n'를 ''로 교체함
article = article.replace('// flash 오류를 우회하기 위한 함수 추가\nfunction _flash_removeCallback() {}') # 필요없는 문장을 ''로 교체함
article = article.strip()# 공백을 제거하는 함수
article
```

![캡처5](https://user-images.githubusercontent.com/58945760/73166588-7b8cfc80-4139-11ea-88c9-828cc268cdd2.PNG)

```python
# 기타 기자 이메일 등 주소와 불필요한 기호 제외하기
news_contents = article
pattern = re.compile(r'[\s\Wa-zA-Z0-9]+@')
email_address = pattern.search(article)

# '\'기호 제외하기
pattern = re.compile(r'\'')
news_contents = pattern.sub('', news_contents)

# 기자 이메일 주소부터 그 이후 전체 삭제하기
pattern = re.compile(r'[\s\Wa-zA-Z0-9]*@')
email_address = pattern.search(news_contents)
news_contents = news_contents[:email_address.start()]
```

