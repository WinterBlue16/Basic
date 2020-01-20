# 08_Text Data Exploration & Visualization

> - `nltk`를 활용하여 글에서 가장 많이 등장하는 단어들과 그 빈도를 추출, 시각화하는 법을 학습한다. 



## 1. 가장 등장 빈도가 높은 단어 추출

> - 이전에 추출해 놓은 영화 Dark Knight의 리뷰에서 가장 많이 등장하는 명사를 추출해 본다. 

```python
# 라이브러리 불러오기
import nltk
from nltk.corpus import stopwords
from collection import Counter # 숫자를 세고 정렬하는 데 사용한다.

# 제외할 Stopwords에 포함시킬 것들 추가
stop_words = stopwords.words("english")
stop_words.append(',')
stop_words.append('.')
stop_words.append('’')
stop_words.append('”')
stop_words.append('-')

# Text data 준비하기
with open('moviereviews.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines() # readlines 함수로 텍스트 파일의 내용을 읽어 list로 저장
    
# Tokenizing
tokens = []
for line in lines: # 리뷰 1개가 line 1개
    tokenized = nltk.word_tokenize(line) # 각 리뷰를 tokenize
    for token.lower() not in stop_words: # 형태소 1개 = token 1개
        tokens.append(token) # stopwords에 포함되지 않으면 tokens에 저장
        
# Tokenize 확인
tokens
```

![캡처1](https://user-images.githubusercontent.com/58945760/72714557-42411380-3bb2-11ea-9344-f31539221e2e.PNG)

```python
# 품사 태깅하기
tags = nltk.pos_tag(tokens)
tags
```

![캡처2](https://user-images.githubusercontent.com/58945760/72715003-09ee0500-3bb3-11ea-8440-5b8df4de5073.PNG)

```python
# 명사들만 모으기
word_list = []
for word, tag in tags:
    if tag in ['NN', 'NNS', 'NNP', 'NNPS']:
        word_list.append(word.lower()) # 해당 태그의 단어들을 소문자로 변환해 저장
        
# 각 명사가 몇 번씩 언급되었는지 출력, 변수에 저장
counts = Counter(word_list)
print(counts)

# 가장 많이 언급된 10개 명사를 출력
print(counts.most_common(10))
```

- 각 명사의 언급 빈도

![](https://user-images.githubusercontent.com/58945760/72715574-12930b00-3bb4-11ea-9fd1-f7fe51115657.PNG)



- 상위 10개 명사

![캡처4](https://user-images.githubusercontent.com/58945760/72715830-8c2af900-3bb4-11ea-909b-26f019830c3e.PNG)

- 형용사('JJ', 'JJR', 'JS'), 동사('VB', 'VBD', 'VBN', 'VBP', 'VBZ')도 같은 코드로 추출, 정렬할 수 있다.  품사 코드들은 [이전 문서](https://github.com/WinterBlue16/TIL/blob/master/Python%20Basic(2019.12)/07_Preprocessing%20Text%20Data.md#2-%EC%98%81%EC%96%B4-%EB%AC%B8%EC%9E%A5-%ED%92%88%EC%82%AC-%ED%83%9C%EA%B9%85pos-tagging)를 참고



## 2. 리뷰에서 언급되는 토큰 개수 확인하기

> - `set`에 대한 설명은 [이전 문서](https://github.com/WinterBlue16/TIL/blob/master/Python%20Basic(2019.12)/03_Python_basic.md#1-7-%EC%A7%91%ED%95%A9set)를 참고

```python
# 전체 토큰 출력
corpus = nltk.Text(tokens)
print(corpus.tokens)

# 토큰 개수 출력
print(len(corpus.tokens)) # 전체 토큰 개수 출력
print(len(set(corpus.tokens))) # 중복 제거하고 토큰 출력
```

![캡처5](https://user-images.githubusercontent.com/58945760/72716633-e6788980-3bb5-11ea-9be0-623eac660f41.PNG)



## 3. 각 토큰의 언급 빈도 시각화

> - `matplotlib`과 `re`(정규표현식, Regular Expression)을 활용하여 각 `token`이 리뷰에서 언급된 횟수를 출력한다.
>
> - 정규표현식 예시
>   - `^[a-zA-Z]`: 텍스트 중에 소문자(a~z), 대문자(A~Z) 중 충족하는 게 하나라도 존재(마케팅 데이터 분석에도 활용 가능)
>   - `^`: 시작을 의미
>   - `-`: 무엇이든 하나 이상 충족
>   - `+`: 1 or more
>   - `*`: 0 or more

```python
# 라이브러리 불러오기
import matplotlib.pyplot as plt
import re # 정규표현식 
# 주어진 패턴과 텍스트가 존재할 때, 주어진 패턴을 충족하는 부분이 있을 경우 그 부분과 위치를 알려줌.

stop_words = stopwords.words("english")
stop_words.append('else')

with open('darkknight.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()
tokens = []
for line in lines: # 리뷰 하나씩 읽어오기
    tokenized = nltk.word_tokenize(line) # 토큰화 
    for token in tokenized:
        if token.lower() not in stop_words: # 토큰 소문자로 변환, stopwords에 포함되지 않으며
            if re.match('^[a-zA-Z]', token): # 대문자, 소문자가 하나라도 있을 경우 
                tokens.append(token) # tokens에 추가

# 상위 20개 토큰 시각화
corpus = nltk.Text(tokens)
plt.figure(figsize=(10,3))
plt.title('Top 20 Words', fontsize=30)

corpus.plot(20) # 상위 20개까지 확인해 출력
```

![캡처6](https://user-images.githubusercontent.com/58945760/72719546-681ee600-3bbb-11ea-9f43-ec7399662c3b.PNG)



## 4. 문맥상 유사한 단어 출력해보기

```python
# corpus를 이용해 비슷한 의미의 단어들 출력
print('Similar words :')
corpus.similar('Joker')
```

![캡처7](https://user-images.githubusercontent.com/58945760/72719862-0a3ece00-3bbc-11ea-9937-47c6391d8307.PNG)



## 5. 연어(collocation, 두 개 이상이 붙어 나타나는 단어) 출력

```python
print('Collocations : ')
corpus.collocations()
```

![캡처8](https://user-images.githubusercontent.com/58945760/72720129-a10b8a80-3bbc-11ea-9941-8ac301dafe85.PNG)