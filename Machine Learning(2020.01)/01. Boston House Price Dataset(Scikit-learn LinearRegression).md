# 01. Boston House Price Dataset(Scikit-learn LinearRegression)

> - `Python`에서 제공되는 `dataset` 중 가장 대표적인 보스턴 집값 데이터셋을 활용해 `Scikit-learn` 머신러닝 모델을 구현해본다. 
> - 해당 문제는 제공된 `data`(=X)와 `Target`(정답=Y)으로 새로운 예측값(Y')를 예측해내는 `regression` 문제이다.  여기서 X는 보스턴 소재 여러 집들 주변의 정보들, Y는 해당 집들의 실제 집값이다. 이 데이터로 모델을 훈련시켜 이 데이터 안에 존재하지 않는 보스턴 소재 집의 가격을 가능한 정확히 예측하는 것이 궁극적인 목적이다. 

## 1. 데이터 읽어들이기

```python
# 라이브러리 불러오기
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 데이터(x) 불러오기
df_data = pd.read_excel('boston_house_data.xlsx', index_col = 0, encoding='utf-8')
df_data.head()
```

![캡처7](https://user-images.githubusercontent.com/58945760/73168011-5483fa00-413c-11ea-93e6-bd8e888f27c9.PNG)

####  data 정보

- 0 : **범죄율**
- 1 : **25,000 평방피트를 초과하는 거주지역 비율**
- 2 : **비소매상업지역 면적 비율** 
- 3 : **찰스강의 경계에 위치한 경우는 1, 아니면 0**
- 4 : **일산화질소 농도**
- 5 : **주택당 방 수 (거실 외 subroom)**
- 6 : **1940년 이전에 건축된 주택의 비율**
- 7 : **직업센터의 거리**
- 8 : **방사형 고속도로까지의 거리**
- 9 : **재산세율**
- 10 : **학생/교사 비율**
- 11 : **인구 중 흑인 비율**
- 12 : **인구 중 하위 계층 비율**



## 2. Target 읽어들이기

```python
# 타겟(y) 불러오기
df_target = pd.read_excel('boston_house_target.xlsx', index_col=0, encoding='utf-8')
df_target
```

