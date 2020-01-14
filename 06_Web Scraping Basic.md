# 06_Web Scraping Basic

## 1.  다음 어학사전  `scraping`하기 

> - 다음 사전을 낱말 뜻과 설명을 스크래핑하여, 웹 스크래핑의 기초에 해당하는 코드와 라이브러리를 학습한다.
> - 다음 사전에서 `achieve`을 검색했을 때 출력되는 화면에서 단어 뜻과 그 의미를 출력해 본다.  

![캡처5](https://user-images.githubusercontent.com/58945760/72309452-61c3d200-36c2-11ea-8a21-6a0de1179808.PNG)

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

![capture](https://user-images.githubusercontent.com/58945760/72309424-4789f400-36c2-11ea-8046-2372609b40bf.PNG)

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
>   ![캡처2](https://user-images.githubusercontent.com/58945760/72309492-799b5600-36c2-11ea-922f-1862702bda6f.PNG)

```python
# 태그에 해당하는 것만 가져오기 - 예시
web_page.find('span', {'class':'txt_emph1'}) # span 클래스에서 특정 인자 뽑아오기
type(web_page.find('span', {'class':'txt_emph1'}) # type 확인(Tag)
type(web_page.find_all('a', {'class':'link_menu'})) # type 확인(ResultSet), list와 비슷한 자료형
     
web_page.find('span', {'class':'txt_emph1'}).get_text() # text만 추출(find_all에서는 적용할 수 없다!)
     
web_page.find_all('a', {'class':'link_menu'})[1].attrs['href'] # 링크 주소 추출     
     

# 찾는 단어 꺼내오기(하나일 때)
box1 = web_page.find('span', {'class':'txt_emph1'})
print(box1.get_text) # print(box1.get_) => 태그를 걷어내고 내부의 텍스트만 꺼낼 수 있는 code

# 단어 뜻 꺼내기(여러 개일 때)
box2 = web_page.find_all('span', {'class':'txt_search'}) # get_text() 사용 금지
for tag in box2:
     print(tag.get_text())
```

![캡처3](https://user-images.githubusercontent.com/58945760/72309524-8a4bcc00-36c2-11ea-9167-fdf6ec95d090.PNG)

```python
# 단어 & 단어 뜻 전부 출력하기

print(box1.get_text())
print()

for definition in web_page.find_all('span', {'class':'txt_search'}):
    print(definition.get_text().strip()) # strip():공백을 없애주는 함수, ex)' p '.strip()
```

![캡처4](https://user-images.githubusercontent.com/58945760/72309552-98015180-36c2-11ea-97fd-475a6ee5f0ca.PNG)



## 2. 영화 정보 출력하기

> IMDb 사이트에서 영화 The dark Knight의 제목(title)과 감독(director)을 출력해본다. 

![the dark knight](https://user-images.githubusercontent.com/58945760/72309570-a3ed1380-36c2-11ea-99ae-74b191703c6d.PNG)

```python
# 라이브러리 불러오기
from bs4 import BeautifulSoup
from urllib.request import urlopen

# 불러오려는 url 입력하기
url = 'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0'

# urlopen 함수를 통해 web 변수를 생성
web = urlopen(url)

# BeautifulSoup으로 web 페이지상의 HTML 구조 parsing
web_page = BeautifulSoup(web, 'html.parser')
```

```python
# 영화 제목 출력
title = web_page.find('h1')
print('Movie Title :')
print(title.get_text())
```

![movietitle](https://user-images.githubusercontent.com/58945760/72309601-bb2c0100-36c2-11ea-9cf2-3914ca260ca7.PNG)

```python
# 영화 줄거리 출력
summary = web_page.find('div', {'class':'summary_text'})
print('Movie Summary :')
print(summary.get_text().strip())
```

![moviesummary](https://user-images.githubusercontent.com/58945760/72309618-c8e18680-36c2-11ea-852a-5ce4fa6a2870.PNG)

```python
# 감독 이름을 출력(부모 tag 체크 => 그 안의 tag 추출)
directors = web_page.find('div', 'class':'credit_summary_item').find_all('a')

for director in directors:
    print(director.get_text())
```

![moviedirector](https://user-images.githubusercontent.com/58945760/72309645-e7e01880-36c2-11ea-9ff9-58df1b0c54a8.PNG)

## 3. 영화 리뷰 출력해 파일에 저장하기

> 영화 The Dark Knight의 리뷰 내용을 출력하고, `txt file`로 저장해 본다. 

![review](https://user-images.githubusercontent.com/58945760/72309676-fc241580-36c2-11ea-8544-c7e5999bdede.PNG)

```python
# 라이브러리 불러오기 생략
# 불러오려는 url 입력
url = 'https://www.imdb.com/title/tt0468569/reviews?ref_=tt_urv'

# urlopen 함수를 통해 web 변수 생성
web = urlopen(url)

# BeautifulSoup으로 web 페이지상의 HTML 구조 parsing
source = BeautifulSoup(web, 'html.parser')

# 리뷰 데이터 출력 => 파일로 저장
reviews = source.find_all()
```

```python
# 리뷰 데이터를 출력하고 파일로 저장
reviews = source.find_all('div', {'class':'content'})

with open('moviereview.txt', 'w', encoding='utf-8') as f:
    for review in reviews:
        print(review.get_text())
        f.write(review.get_text())
```

![moviereviews](https://user-images.githubusercontent.com/58945760/72309639-deef4700-36c2-11ea-84ae-b397ddd25757.PNG)



## 4. 신문 기사 출력해 저장하기

> -  The Washingtonpost의 웹 페이지에서 글을 불러와 파일로 저장한다.

```python
# 불러오려는 url 입력하기
url = 'https://www.washingtonpost.com/world/zelensky-calls-for-admission-of-guilt-justice-after-iran-admits-to-mistakenly-shooting-down-ukrainian-plane/2020/01/11/2c85cb08-33d8-11ea-971b-43bec3ff9860_story.html'

# urlopen 함수를 통해 web 변수 생성
web = urlopen(url)

# BeautifulSoup으로 페이지상의 HTML 구조 parsing
source = BeautifulSoup(web, 'html.parser')
```

![washingtonpost](https://user-images.githubusercontent.com/58945760/72309689-09410480-36c3-11ea-9656-5a6484a20f3b.PNG)

```python
# 기사 내용 불러오기
with open('washingtonpost.txt', 'w', encoding = 'utf-8') as f:
    post = source.find('div', {'class' : 'article-body'})
    article = post.find_all('p')
    
    for content in article:
        print(content.get_text())
        f.write(content.get_text()+ '\n')
```

![article](https://user-images.githubusercontent.com/58945760/72309316-fd087780-36c1-11ea-85ae-bae90274dc2f.PNG)



## 5. Postype 기사글 출력하고 저장하기

> - 포스타입에 올라온 포스팅을 불러와 파일로 저장해본다. 

```python
# 불러오려는 url 입력하기
url = 'https://mingyeolin.postype.com/post/5341737'

# urlopen 함수를 통해 web 변수를 생성한다.
web = urlopen(url)

# BeautifulSoup으로 web 페이지상의 HTML 구조 parsing
source = BeautifulSoup(web, 'html.parser')
```

![postype](https://user-images.githubusercontent.com/58945760/72309706-15c55d00-36c3-11ea-92ad-68936fd259ff.PNG)

```python
# postype에 있는 글을 불러온다 
with open('postype.txt', 'w', encoding = 'utf-8') as f:
    all_text = source.find('div', {'id': 'post-content'})
    article = all_text.find_all('p')
            
    for content in article:
        print(content.get_text())
        f.write(content.get_text() + '\n') 
```

![article2](https://user-images.githubusercontent.com/58945760/72309354-1d383680-36c2-11ea-8d01-3305ff1d8285.PNG)

```python
# 여러 글 페이지를 불러와 저장하기
# postype은 번호가 규칙적으로 적용되지 않으므로 brunch를 이용
# str에는 str만 더할 수 있다!

import time
error_urls=[]

for i in range(10): # 숫자가 너무 클 경우 ip가 차단되는 경우가 있으니 주의!
    try:
        url = 'https://brunch.co.kr/@imagineer/' + str(i)
        web = urlopen(url)
        source = BeautifulSoup(web, 'html.parser')
        
        with open('brunch_all.txt', 'a', encoding='utf-8') as f: 
            # 'w'로 쓸 경우 파일이 계속 덮어쓰기되므로 수정 모드 'a' 사용
            all_text.find('div', {'class' : 'wrap_body'})
            article = all_text.find_all('p')
            
            for content in article:
                print(content.get_text())
                f.write(content.get_text() + '\n')
                
     except:
        print('*** URL {} 게시글에서 에러가 발생하였습니다. ***'.format(url))
        error_urls.append(url)
        
     time.sleep(3) # 한 번 크롤링하고 3초 쉬고 다시 크롤링
    
 
error_url # 오류가 난 페이지들 주소 확인

```

![article3](https://user-images.githubusercontent.com/58945760/72309386-2de8ac80-36c2-11ea-8a1e-40f8f1bef1fa.PNG)