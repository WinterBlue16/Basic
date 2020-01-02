# Pandas Tutorial

> 2019. 12. 11에 진행했던 `pandas`와 `DataFrame` 자료형, `numpy`에 대해 배운 내용들을 서술한다. 



## 1. 라이브러리 불러오기

```python
import numpy as np # 행렬 계산 # 머신러닝, 딥러닝은 numpy 자료형이 아니면 모델이 돌아가지 않는다!
import pandas as pd # 정형데이터 전처리 & 핸들링
import matplotlib.pyplot as plt # 데이터 시각화

import seaborn as sns # matplotlib의 자식 개념으로 plt에서 분화된 함수 
```

```python
# 데이터 불러오기

df = pd.read_excel('animals.xlsx', encoding='utf-8')
```



## 2. DataFrame 둘러보기

> 데이터 분석과 전처리에 필수적인 ` DataFrame` 자료형의 형태와 기본적인 함수에 대해 알아본다. `Pandas`에는 `DataFrame`과 `Series` 두 가지 자료형이 존재하며, `jupyter notebook` 에서 확인할 수 있는 가장 앞의 `index`열은 실제 엑셀 파일 내에 존재하지 않는다!

```python
type(df) # pandas.core.frame.DataFrame

#기본적인 함수들

df.head() # 데이터의 첫 5행만 보여준다. 데이터 형태와 수치를 간략하게 보는데 유리하다.
# ()안의 숫자 지정으로 더 많은 행을 볼 수 있다. ex> df.head(10)

df.tail() # 데이터의 마지막 5행을 볼 수 있다. 응용은 head()와 동일하다.
df.describe() # 각 column(열) 당 표준편차, 최댓값, 평균, 최솟값 등의 수치를 한눈에 보여준다.
df.info() # 전체 데이터의 정보를 보여준다. column별 결측치와 데이터 클래스까지 확인 가능.
```



## 3. DataFrame에서 일부 [행] 꺼내기 

