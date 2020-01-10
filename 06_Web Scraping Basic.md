# 06_Web Scraping Basic

## 1.1 다음 어학사전  `scraping`하기 

> - 다음 사전을 낱말 뜻과 설명을 스크래핑하여, 웹 스크래핑의 기초에 해당하는 코드와 라이브러리를 학습한다.
> - 다음 사전에서 `achieve`을 검색했을 때 출력되는 화면에서 단어 뜻과 그 의미를 출력해 본다.  

```python
# 필요한 라이브러리 설치
!pip install beautifulsoup4==4.7.1

# 라이브러리 불러오기
from bs4 import BeautifulSoup
from urllib.request import urlopen # 서버로부터 모든 것을 받아올 수 있다.

# URL 분석하기
https://dic.daum.net/search.do # 다음 어학사전에서 검색, search.do는 python 함수같은 개념
    ?
    q=achieve # 검색어
```

```python
# 검색하고 싶은 단어 입력하기
word = 'achieve'

# 불러오려는 url 입력하기
# default url에 string 타입의 word 변수를 합쳐 url 변수를 생성
url = 'https://alldic.daum.net/search.do' + word

# urlopen 함수로 web 변수 생성
web = urlopen(url)
# urlopen(url).read().decode('utf-8') => 페이지가 가지고 있는 텍스트를 모조리 다 긁어온다.

# BeautifulSoup으로 web 페이지의 HTML 구조를 parsing
web_page = BeautifulSoup(web, 'html.parser')

print(web_page)
```

![](C:\Users\student\Desktop\캡처.PNG)

> - **Scarping에서의 Parsing**
>
>   - HTML이나 XML, JavaScript 등으로 쓰여진 소스들을 각 요소별로 나누는 작업.
>   - 이러한 작업을 진행해주는 것을 parser라 부른다. 
>
>   
>
> - **브라우저 소스 코드 확인**
>
>   - `F12` , `Ctrl` +`Shift`+`i`
>   - 좌측 상단의 화살표 모양을 눌러 특정한 좌표의 `element`를 확인할 수 있다. 
>
>   ![](C:\Users\student\Desktop\캡처2.PNG)

```python
# 태그에 해당하는 것만 
```

