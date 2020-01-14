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