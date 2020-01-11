# 06_Web Scraping Basic

## 1.  다음 어학사전  `scraping`하기 

> - 다음 사전을 낱말 뜻과 설명을 스크래핑하여, 웹 스크래핑의 기초에 해당하는 코드와 라이브러리를 학습한다.
> - 다음 사전에서 `achieve`을 검색했을 때 출력되는 화면에서 단어 뜻과 그 의미를 출력해 본다.  

![](C:\Users\student\Desktop\캡처5.PNG)

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

![](C:\Users\student\Desktop\캡처3.PNG)

```python
# 단어 & 단어 뜻 전부 출력하기

print(box1.get_text())
print()

for definition in web_page.find_all('span', {'class':'txt_search'}):
    print(definition.get_text().strip()) # strip():공백을 없애주는 함수, ex)' p '.strip()
```

![](C:\Users\student\Desktop\캡처4.PNG)



## 2. 영화 정보 출력하기

> IMDb 사이트에서 영화 The dark Knight의 제목(title)과 감독(director)을 출력해본다. 

![](C:\Users\student\Desktop\the dark knight.PNG)

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

![](C:\Users\student\Desktop\movietitle.PNG)

```python
# 영화 줄거리 출력
summary = web_page.find('div', {'class':'summary_text'})
print('Movie Summary :')
print(summary.get_text().strip())
```

![](C:\Users\student\Desktop\moviesummary.PNG)

```python
# 감독 이름을 출력(부모 tag 체크 => 그 안의 tag 추출)
directors = web_page.find('div', 'class':'credit_summary_item').find_all('a')

for director in directors:
    print(director.get_text())
```

![](C:\Users\student\Desktop\moviedirector.PNG)

## 3. 영화 리뷰 출력해 파일에 저장하기

> 영화 The Dark Knight의 리뷰 내용을 출력하고, `txt file`로 저장해 본다. 

![](C:\Users\student\AppData\Roaming\Typora\typora-user-images\image-20200110160723794.png)

```python
![moviereview](C:\Users\User\Downloads\img_06\moviereview.PNG)# 라이브러리 불러오기 생략
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
reviews = source.find_all(div, {'class':'content'})

with open('moviereview.txt', 'w', encoding='utf-8') as f:
    for review in reviews:
        print(review.get_text())
        f.write(review.get_text())
```

![](C:\Users\User\Downloads\img_06\moviereview.PNG)



## 4. 신문 기사 출력해 저장하기

> Boston globe