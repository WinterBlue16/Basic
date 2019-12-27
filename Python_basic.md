# Python 기초

> 12월 9일부터 진행한 Python 프로그래밍 기초와 기본 함수에 대해서 기술한다.
>
> 개발 환경은 jupyter notebook로 세팅되어있다. 



## 0. 기본 개념

### (1) Cell

- jupyter notebook에서 코드를 칠 수 있게 생성되는 다수의 공간을 각각 `Cell`이라 부른다. 

- `cell type`은 `code`와 `markdown`, `Raw NBConvert`으로 나뉘며,  코딩을 하던 도중 부가설명이나 기억할 사항 등을 덧붙이고 싶을 때 `markdown` 을 활용할 수 있다.

- `code` type에서도 `#`을 활용하여 주석을 달 수 있다. 

  ```python
  print('Hello world!') # 괄호 안의 문구를 출력하는 함수
  ```

- 기타 도움을 받고 싶을 때 아래와 같은 코드를 사용할 수 있다. 

  ```python
  help()
  ```



### (2) Function(함수) & index 

- 기본 코드 형태는 `function()` 형식이며, 소괄호`()` 앞에 있는 함수 `function`을 실행하겠다는 의미이다.  ex) `type()`, `len()`

- 반면 대괄호`[]`가 들어갔을 경우,  대괄호 앞의 데이터 자료형에서 `[]`에서 특정한 값을 추출하겠다는 의미이다.  

  ```python
  temp = 'Python'
  temp[0] # Python 이라는 여섯 개의 글자 모음에서, index 번호가 0인 글자를 추출 
  ```

- `index`는 자료형의 순서를 나타내는 숫자로, 왼쪽에서부터 셀 때는 `0`부터, 오른쪽에서부터 셀 때는 `-1`부터 시작된다.  따라서 위 코드에서 `temp[0]`의 출력은 `Python`의 첫 번째 글자인 `'P'`가 된다.

- `index` 를 갖고, `[]`를 통해 값을 추출할 수 있는 자료형은 다음과 같다. 

  - `str(string)`, `list`, `tuple`, `numpy.array`

- 한편, `index`가 아닌 `key`로 추출할 수 있는 자료형으로는 `dict`, `pandas.DataFrame` 등이 있다.



### (3) Arguement(인자) & Parameter(매개변수)

> 상수와 정해진 데이터값들을 제외하고,  함수 바깥에서 대입하는 수들을 `arguement`라고 한다. 또한 이러한 수들을 받아내는 임시 그릇들을 `parameter`라고 한다. 

```python
# print_num 함수 예시

def print_num(num1): # print_num이라는 함수 정의 # 'num1'이 바로 parameter이다!
    result = num1 # 결과(result)는 num 1을 의미
    return result # 결과(result=num1)를 출력으로 돌려주기(return)

x = 3
print(x) # 3 # 여기서의 'x'가 arguement이다!
```



### (4) 기본 단축키

- `shift` + `Enter` : `Cell`의 실행
- `shift` + `Tap` : 함수 & 변수의 `Docstring` 확인
- `Esc`: 명령모드 전환 
- `A` : 명령모드 시 위로 `Cell` 추가
- `B` : 명령모드 시 아래로 `Cell` 추가 
- `D` 버튼 연타 : 명령모드 시 `Cell` 삭제



## 1. 기초 데이터 타입

### 1.1 정수형(integer) & 실수형(float)

> 정수형은 `type()` 함수 적용 시 `int`라고 출력되는 데이터 타입이며, 실수형은 `float`라고 출력된다.  

```python
x = 9
type(x) # int

y = 3.8
type(y) # float
```

```python
print(x+n) # 더하기 연산 

x * n # 곱하기 연산
x ** n # n제곱 연산

x / n # 나누기 연산 # 몫 소수점까지 표시
x // n # 나누기 연산 # 정수까지만 표시

x % n # 나머지 출력
x *= n # x에 n을 곱하여 x에 덮어씌우기
x += n # x에 n을 더하여 x에 덮어씌우기
```

```python
int(y) # 실수 자료형을 정수 자료형으로 변환
float(x) # 정수 자료형을 실수 자료형으로 변환
```



### 1.2 문자열(string)

>  `String`은 글자가 줄처럼 늘어서 있다는 의미로, `type()`에 적용하면 `str`라고 출력된다 . 때문에 `String` 자료형은 단어가 아니라 글자 하나 하나가 합쳐진 그룹으로 인식한다. 예를 들어 `'hello'`라는 `String`일 경우,  길이를 출력하는 함수 `len()`를 사용하면 5가 출력된다.

```python
s = 'Hello'
type(s) # str
len(s) # 5
s.upper(s) # 모든 글자를 대문자로 출력
s.lower(s) # 모든 글자를 소문자로 출력
```

```python
print("My name is {}".format("Winter")) # My name is Winter
print("My name is {}".format("vincent van gogh")) # My name is vincent van gogh

print("Hello" + " " + "world") # Hello world
# str 자료형도 +를 통해 문자열들을 붙일 수 있다!
```

```python
temp = 'Python'
temp[-1] # 'n'
temp[0:4] # 'Pyth' 
# x:y로 index 범위를 표현할 경우, index 번호가 x인 값부터 y-1인 값까지 꺼낸다.
# x는 꺼내는 값의 index 범위에 포함되지만, y는 포함되지 않는다.
temp[3:] # 'hon'
temp[:2] # 'Pyt'
```

```python
temp = 'Python is easy'
temp.split('s') # ['Python i', 'ea', 'y'] #'s'를 기준으로 자름 

temp = ['Python', 'is', 'easy']
'---'.join(temp) # 'Python___is___easy' #값들 사이에 '___'를 삽입

print('Python is/ easy') 
# Python is
# not easy 
# '/'는 결과값이 출력될 때 줄을 바꿔줌
```

```python
x = 100
str(x) # '100' # int 자료형을 str 자료형으로 변환
```



### 1.3 참/거짓(bool)

> 기본적으로 0은 `False`, 1은 `True`로 판단된다. 

```python
t = True
f = False

type(t) # bool=boolean
```

```python
print(t and f) # False 
# and는 양 쪽 모두 충족하지 않으면 False로 출력된다.

print(t or f) # True
# or은 어느 한쪽만 해당되도 True로 출력된다. 

print(not t) # False
```



### 1.4 함수(Function, Method) 정의하기

>  새로운 함수를 만들 때는 반드시 `def`를 앞에 써주고, 함수의 형태를 정의한 후 `:`을 꼭 붙여준다. 

```python
# 2개의 숫자를 외부로부터 받아 합산한 값을 돌려주는 함수 add_nums 

def add_nums(num1, num2): # add_nums라는 함수 정의
	result = num1 + num2 # 함수 결과(result)는 num1 값과 num2 값을 더한 값.
	return result # 결과 돌려(return)주기

add_nums(3, 5) # 8 
```

  ```python
# 성과 이름을 넣으면 이름 전체가 출력되는 함수 예시

def name_creator(last, first): # name_creator라는 함수 정의
	full_name = last +first # full_name은 last 값과 first 값을 더한 값. 
	return full_name # full_name을 결과로 돌려(return) 주기

name_creator('이', '순신') # '이순신'
  ```

```python
#원의 넓이를 구하는 함수 예시

def circle_area(num1):
	result num1 ** 2 * 3.14
	return result
	
circle_area(10) # 314.0 
```



### 1.4 리스트(list)

> `list`는 다른 변수들을 담을 수 있는 자료형인 `컨테이너` 중 하나로, 다른 `컨테이너`  소속 자료형으로는 `dict`, `tuple`, `set` 등이 있다. 이 중에서 가장 많이 쓰이는 자료형은 `list`와 `dict`이다.

```python
# 1.2 부분의 index 번호 부분 참고

x = [1, 2, 3, 4, 5] # list의 기본적인 형태. list 안에 포함된 값들을 item이라고 한다.

x[0] # 1,  x라는 list 안의 index가 0인 값을 꺼낸다. 
x[:3] # [1, 2, 3], x라는 list 안에서 index가 0인 item부터 2인 item까지 꺼낸다.  
x[3:] # [4, 5], x라는 list 안에서 index가 3인 item부터 끝 item까지 꺼낸다.
```

```python
x. append('순서대로') # x라는 list 안에 '순서대로'라는 str을 추가한다. 
x # [1, 2, 3, 4, 5, '순서대로'], x의 변화를 확인하려면 반드시 list 이름을 마지막에 입력하거나 print(x)를 입력한다.
```





