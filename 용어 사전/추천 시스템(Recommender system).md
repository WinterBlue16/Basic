# 추천 시스템(Recommender system)

> 추천 시스템에 대해 정리한 문서이다. 

추천 시스템이란 **유저의 과거 행동 및 선호도에 기반하여 유저가 선호할 만한 관심사를 제공하는 시스템**을 말한다. 가장 대표적인 예로 유튜브의 추천 알고리즘을 들 수 있다. 유튜브가 나를 여기로 이끌었다는 말은 다들 한 번쯤 들어봤을 것이다. 이 외에도 쇼핑몰, 뉴스, 검색 등 다양한 분야에 사용되고 있는 시스템이며, 개인 맞춤형 마케팅이 늘어나고 있는 지금 계속해서 발전하고 있는 기술이기도 하다. 

![img](https://miro.medium.com/max/1064/1*mz9tzP1LjPBhmiWXeHyQkQ.png)

![img](https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTlfMTQ4/MDAxNTg0NTgxMzA4NTg2.7C_yokw7-3zpstuF_4rGEKos8qjWup4aRUzeGC-5u-4g.5AQ-RSGXSTro5jQwjothmZNSJ_Tvt-0_da9YVWn59lcg.PNG.with_msip/2.PNG?type=w800)

추천 시스템은 크게 위의 두 그림에서처럼 컨텐츠 기반 필터링(Content based Filtering), 협업 필터링(Collaborative Filtering)으로 나뉘며, 세부적으로 들어가면 아래 그림과 같다.

![img](https://media.vlpt.us/images/vvakki_/post/7d716962-e163-4f4e-b057-7376235130e0/image.png)

## 목차

1. 컨텐츠 기반 필터링(Content based Filtering)
2. 협업 필터링(Collaborative Filtering)
   1. Memory based
   2. Model based
3. 참고 자료



## 1. 컨텐츠 기반 필터링(Content based Filtering)

![img](https://t1.daumcdn.net/cfile/tistory/992787445E9D2A7B32)

**사용자가 관심 있어하는 아이템의 속성을 분석해 그와 비슷한 속성을 가진 새로운 아이템을 추천**해준다. 위의 예에서처럼 만약 사용자가 좋아하는 음악의 속성 중 하나인 '장르'가 '힙합'이라면, 똑같이 '힙합'이라는 속성을 가진 음악을 추천해주는 것이다. 

이 방법의 특징은 **아이템에 대한 데이터인 메타 데이터(Item's meta data)**가 반드시 존재해야 한다는 점이다. 아이템에 대한 분석을 할 수 없다면 이 방법은 쓸 수 없기 때문이다. 

또, 오직 아이템 정보만으로만 추천을 진행하기 때문에 사용자의 선호도라든가, 다른 사용자의 데이터 등 다른 정보가 따로 필요하지 않다는 장점이 있다. 다만 사용자의 만족도를 높이기 위해서는 속성(feature)을 잘 추출해야 하며, 유사도 기준을 어떻게 세우느냐도 매우 중요하다. 속성 추출에는 TF-IDF(Term Frequency - Inverse Document Frequency)이나 Word2Vec과 같은 Feature Extraction이 쓰인다.

가장 일반적이고 보편적인 추천 방식이라 할 수 있다.  



## 2. 협업 필터링(Collaborative Filtering)

![img](https://media.vlpt.us/images/vvakki_/post/6963c9ea-03ce-41c6-83bf-95f17e15c6fa/Collaborative%20Filtering.png)

![img](https://t3.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/16yJ/image/WrbNMmiPKnNFj0_dMxaeQ4-MOBs.png)

**사용자-아이템의 관계(User-Item interaction)과 사용자-사용자간의 관계에 기반하여 새로운 아이템을 추천하는 방법**이다. 위의 예에서처럼, 추천받은 사용자와 선호하는 아이템들이 비슷한 다른 사용자를 찾고, 그 사용자가 선택했던 아이템을 추천해주는 것이다. 선택한 아이템들이 비슷하기 때문에 성향도 비슷하리라는 전제가 깔려 있다.  

이 방법은 세부적으로 Memory-based Filtering과 Model-based Filtering으로 나뉘며, 콘텐츠 기반 필터링과 달리 아이템에 대한 정보 없이도 추천이 가능하다는 게 장점이다. 

하지만 단점도 적지 않은데, 첫 번째는 **신규 유저나 신규 아이템이 있을 경우 추천이 어렵다는 점**이다. 신규 유저는 쌓인 정보가 없기 때문에 비슷한 성향을 가진 사용자를 찾기가 어렵다. 신규 아이템 같은 경우, 그 아이템을 선택한 사용자가 없으므로 아예 추천에서 제외되는 문제가 발생한다. 이런 문제를 'Cold start'라고 한다.

두 번째 단점도 위와 조금 연결되는 부분인데, **사용자들에게 선택되지 않은 아이템이 선택된 아이템보다 훨씬 많아 추천의 범위가 한정된다는 점**이다. 당장 머릿속에 기억나는 아무 쇼핑몰이나 떠올려보자. 엄청난 수의 상품(아이템) 목록이 웹 페이지를 꽉 채우고 있을 것이다. 아무리 인터넷 쇼핑을 자주 이용하는 사람이라도 그 상품들 중 절반의 절반도 선택해보지 못했을 것이다. 

세 번째, 사용자와 아이템의 수가 많아질수록 데이터의 크기가 급속도로 늘어난다는 점이다. 이 단점은 두 번째, 첫 번째 단점과 합쳐져 추천 시스템의 질을 떨어뜨릴 수 있는 위험이 있다. 

이러한 단점들 때문에 **협업 필터링과 콘텐츠 기반 필터링을 함께 활용하는 방법**도 쓰이는데, 이를 **하이브리드 필터링(Hybrid Filtering)**이라고 한다.



### 2.1. Memory based

사용자-아이템의 관계를 나타내는 User-Item Matrix로부터 도출되는 유사도 기반으로 아이템을 추천하는 방법이다. 

User-based와 Item-based 두 가지로 나뉘는데, User-based는 사용자들의 아이템에 대한 선호도, 점수를 기준으로 비교하여 추천하는 방법이다. 반면 Item-based는 아이템을 기준으로 한다. 위의 표를 예로 들어보자. 라면을 선택한 유저는 A, B, C, D이다. 그리고 유저 A, B, C는 같은 삼각김밥을 선택했다. 그럼 D에게도 그 메뉴를 추천하는 것이다.   



### 2.2. Model based

사용자-아이템 간의 관계를 머신러닝, 딥러닝과 같은 모델을 활용해 학습시켜 추천하는 것이다.  

장바구니 분석(Association Rule)처럼 아이템 간의 관계를 학습할 수도 있고, Clustering을 활용해 유사한 아이템들, 사용자들의 그룹을 만들 수도 있다. 모델이 다양한 만큼 Matrix Factorization, Bayesian Network, Decision Tree 등 많은 방법이 있다.





### ※ 참고 자료

[추천 시스템 개요](https://velog.io/@vvakki_/%EC%B6%94%EC%B2%9C-%EC%8B%9C%EC%8A%A4%ED%85%9CRecommendation-System-%EA%B0%9C%EC%9A%94)