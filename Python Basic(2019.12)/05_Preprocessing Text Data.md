# 07_Preprocessing Text Data

> `Text` 데이터 전처리를 위한 실습으로 `nltk library`(Nature Language Toolkit)를 사용해 본다.



## 1. 영어 문장 tokenize

> `nltk`는 영문 대상으로 많이 사용되고 있다. 한글 대상 `library`는 현재도 열심히 개발중이라고 한다.

```python
# nltk package 설치하기
!pip install nltk==3.4
nltk.download() 
# 패키지 다운로더(Corpora=>stopwords, wordnet, models=>averaged_perceptron_tagger, maxnet_treebank_pos_tagger, punkt)
```

> 위 명령어를 통해 패키지를 다운로드 받은 후 설치 경로를 반드시 확인해야 한다.
>
> **경로 예시 : "C:\Users{컴퓨터 이름}\AppData\Roaming\nltk_data"**
>
> nltk_data 폴더 안에 corpora, taggers, tokenizers 폴더가 바로 위치하도록 복사.

```python
# 문장 tokenize 예시

import nltk

sentence = 'The scientist does not study nature because it is useful, he studies it because he delights in it, and he delights in it because it is beautiful. If nature were not beautiful, it would not be worth knowing, and if nature were not worth knowing, life would not be worth living.'
nltk.word_tokenize(sentence)
```

![tokenize](https://user-images.githubusercontent.com/58945760/72315835-92623680-36d7-11ea-8cf9-8eb095e90dfc.PNG)



## 2. 영어 문장 품사 태깅(POS tagging)

> - 토큰화한 문장에 각각 품사를 태깅해 준다. `nltk`에서 명명하는 각 품사와 태그는 다음과 같다.

![postag2](https://user-images.githubusercontent.com/58945760/72316416-6d6ec300-36d9-11ea-84de-548b7683c6d4.png)

![postag1](https://user-images.githubusercontent.com/58945760/72316420-6fd11d00-36d9-11ea-9565-5755b88c1ea3.png)

```python
# 각 문장 tokenize => 품사 태깅해 결과를 출력
tokens = nltk.word_tokenize(sentence) # tokenize한 문장
nltk.pos_tag(tokens) # 품사 태깅
```

![postagging](https://user-images.githubusercontent.com/58945760/72316172-9e022d00-36d8-11ea-81a4-36643ff83b57.PNG)



## 3. Stopwords 제거

> - `stopWords`를 통해 쓸모없는 부호나 단어를 제거해 준다. 

```python
# nltk 모듈에서 Stopwords 불러오기
from nltk.corpus import stopwords

# 영어의 stopwords를 불러와 변수에 저장(stopwords에 속하는 '단어' list)
stopWords = stopwords.words('english')
print(len(stopWords)) # 영어 stopwords 전체 갯수
print() 
print(stopWords) # 전체 stopwords 출력
```

![stopwords](https://user-images.githubusercontent.com/58945760/72319490-9ba4d080-36e2-11ea-8a69-d1f3f37372f8.PNG)

```python
# sentence에서 stopwords를 제거
result = [] # 빈 리스트 만들어주기

for token in tokens:
    if token.lower() not in stopWords: # 소문자로 변환한 token이 stopWords에 포함되지 않으면
        result.append(token) # 그 단어를 result에 추가한다.
       
print(result)
```

![notstopwords](https://user-images.githubusercontent.com/58945760/72319759-6482ef00-36e3-11ea-9483-c69777e2ca3b.PNG)

```python
# stopWords에 쉼표(,), 마침표(.) 추가해 적용하기

stop_words = stopwords.words("english")
stop_words.append(',')
stop_words.append('.')

result = []

for token in tokens:
    if token.lower() not in stop_words:
        result.append(tokens)
        
print(result)
```

![notstopwords2](https://user-images.githubusercontent.com/58945760/72320178-7c0ea780-36e4-11ea-82ec-d53ba33061e1.PNG)



## 4. 영화 리뷰 데이터로 전처리하기(Lemmatizing)

> - `Lemmatization` : 단어의 형태소적, 사전적 분석을 통해 파생적인 의미를 제거하고, 어근에 기반하여 **기본 사전형인 lemma**를 찾아내는 것
> - `WordNetLemmatize`는 보다 정확한 분석을 위해 품사 정보를 추가로 입력받을 수 있다.(ex> `n` : 명사, ` v` : 동사 etc)
> - `default` == `n`(명사). 다른 품사에 속하는 단어일 경우 `pos='품사'`를 입력해 주어야 한다.

```python
# WordNetLemmatize 객체 만들기
lemmatizer = nltk.wordnet.WordNetLemmatizer()

# lemmatizer 예시(noun)
print(lemmatizer.lemmatize("cats")) # cat
print(lemmatizer.lemmatize("geese")) # goose

# lemmatizer 예시(others)
print(lemmatizer.lemmatize("worst", pos='a')) # bad
print(lemmatizer.lemmatize("bought", pos='v')) # buy
```

```python
# Stopwords 설정
stop_words = stopwords.words("english")
stop_words.append(',')
stop_words.append('.')

with open('moviereview.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines() # readlines: 텍스트 파일 내용을 읽어 list로 저장 
    
sentence = line[1]
tokens = nltk.word_tokenize(sentence)

lemmas = [] # lemmatize한 결과를 담기 위한 list 생성
for token in tokens:
    if token.lower() not in stop_words:
        lemmas.append(lemmatizer.lemmatize(token)) # lemmatize한 결과를 list에 첨부
        
print('Lemmas of :', + sentence) # 원래 review 텍스트 출력
print(lemmas) # lemmatize한 결과 출력
```

![lemmas](https://user-images.githubusercontent.com/58945760/72321623-baf22c80-36e7-11ea-8044-699925bfd03e.PNG)

![lemmas2](https://user-images.githubusercontent.com/58945760/72321625-bcbbf000-36e7-11ea-84b3-9d4caa366ee4.PNG)