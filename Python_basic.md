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



### (3) 기본 단축키

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
```

```python
temp = 'Python'
temp[-1] # 'n'
temp[0:4] # 'Pytho'
temp[3:] # 'hon'
temp[:2] # 'Pyt'
```





  

