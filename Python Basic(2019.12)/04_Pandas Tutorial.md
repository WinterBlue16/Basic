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

```python
# 행 꺼내기

df.loc[3] # 대괄호 속 index 명(index 번호가 아님)이 배정된 행 꺼냄 # 자료형 Series

df.loc[[3]] # Series가 아닌 DataFrame 자료형으로 행 꺼냄.

df.loc[[4, 6, 9]] # 여러 개의 행을 꺼냄. 

df.loc[3:6, 'name':'feathers'] # 행과 열 구간을 지정해 데이터 일부를 꺼냄


# 데이터 bool 

df['name'].str.contains("ar") # name 열, 'ar'을 포함한 str 자료형이 있는지를 bool함

# 특정 데이터 합치기

sum(df["name"].str.contains("ar")) # 'ar'를 포함한 자료형의 수를 합산한다!(True=1, False=0)

# 전체 데이터에서 특정 데이터 행만 뽑아내기 

df.loc[df["name"].str.contains('ar'), :]

# 숫자로 일부 데이터 뽑아내기

df.iloc[3:7, 2:4]

# 데이터 대소문자로 바꾸기

df["name"].str.upper
df["name"].str.lower

```



## 4. DataFrame에서 일부 [열] 꺼내기

```python
df['name'].head() # 열 하나 5행까지 출력

df[['name', 'hair', 'feathers']].head() # 여러 개의 열 5행까지 출력 # 자료형 DataFrame

df[['name', 'hair', 'feathers']].describe() # 열당 최댓값, 최솟값 등 수치 보여줌
```



## 5. DataFrame 활용하기

```python
# 기존 데이터(df)에서 일부만 떼내 새로운 데이터(df_new) 만들기

df_new = df[['name', 'hair', 'feathers', 'eggs', 'milk', 'type']]


# 데이터에 함수 적용한(apply) 새로운 열('new_hair') 만들어 붙이기

df_new['new_hair'] = df_new['hair'].apply(lambda x : x+1)


# Type을 index열로 하는 새로운 데이터(pivot_df) 만들기 

pivot_df = pd.pivot_table(df_new, index='type', aggfunc=np.sum) 
# type이 같은 값들을 모두 더해준다.


# 열 삭제

del pivot_df['new_hair']


# 행 삭제

pivot_df = pivot_df.drop([4]) # []안에 들어간 index 이름을 가진 행 삭제


# 열(column) 이름 한번에 바꾸기 사례

pivot_df.columns = list('ABCD')
pivot_df.columns = ['1', '2', '3', '4']


# 열 이름 바꾸기 사례 

pivot_df.rename(colunms = {'eggs' : '산란', 'feathers': '깃털'}, inplace=True)


# 열의 value 기준으로 내림차순, 오름차순 정렬(inplace 값 확인)

pivot_df.sort_values(by='산란', inplace=True) # 내림차순
pivot_df.sort_values(by='산란', ascending=False, inplace=True) # 오름차순


# 얕은 복사 & 깊은 복사

pivot_df_2 = pivot_df # 얕은 복사 # 원래 데이터에 영향을 받음
pivot_df_3 = pivot_df # 깊은 복사 # 원래 데이터에 영향을 받지 않음

```

