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

>  `String`은 글자가 줄처럼 늘어서 있다는 의미로, `type()`에 적용하면 `str`라고 출력된다 . 때문에 `String` 자료형은 **단어**가 아니라 **글자 하나 하나가 합쳐진 그룹**으로 인식한다. 예를 들어 `'hello'`라는 `String`일 경우,  길이를 출력하는 함수 `len()`를 사용하면 5가 출력된다.

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

```python
# list item 삭제 
# 1) 데이터 순서/자리를 활용해 삭제할 때 : del === index를 활용(추천)
# 2) 데이터 값 자체를 활용하여 삭제할 때 : remove == value를 활용
# 3) 삭제 후 삭제한 값을 리턴받아 활용해야 할 때 : pop == index를 활용

x.pop() # '순서대로', list의 마지막 요소만 남기고 반환한다. 
#index 기반으로 n번째 아이템을 삭제할 수도 있다. 잘 사용하지는 않음.

del x[1] 
x # [1, 3, 4, 5, '순서대로'], []안의 index 번호를 가진 item를 삭제함.

x.remove(1)
x # [3, 4, 5, '순서대로'], ()안의 값을 찾아 지워줌! #지정한 값이 다수일 경우 가장 앞의 하나만 지워주니 주의!
```

```python
# list 합치기 
x = [1, 3, 6]
y = [3, 4, 5]
z = x + y
z # [1, 3, 6, 3, 4, 5]

# list 정렬하기
z.sort()
z #[1, 3, 3, 4, 5, 6]

z.sort(reverse = True) 
z #[6, 5, 4, 3, 3, 1] # 역으로 정렬. 위의 코드에는 reverse = False가 생략된 상태.
```



### 1.5  딕셔너리(dict)

> 기본적으로 `{}` 대괄호로 둘러싸여 있으며, 값 하나가 `key` : `value`의 짝을 이루는 형태를 하고 있다. `[]`를 통해 `key`를 지정함으로써 `value`를 꺼낼 수 있다. 

 ```python
cage = {'불': '활활', '물':'콸콸', '바람':'휘이잉'} # dict의 기본적인 형태
cage # {'불': '활활', '물':'콸콸', '바람':'휘이잉'}

cage['물'] # '콸콸' # key값으로 value값 추출하기 
 ```

```python
cage.get('비') # 해당 dict 내에 존재하지 않으므로 error 발생
cage.get('비', '없음') 
# '없음', 해당 dict 안에 존재하지 않는 key가 들어올 경우 '없음'을 꺼낸다.
```

```python
# key 추출하여 list로 만들기

list(cage.keys()) 
# ['불', '물', '바람'] # key만을 추출하여 list 자료형으로 만든다. 
```

```python
print('불' in cage) # True, dict 안에 있을 경우 True
print('비' in cage) # False, dict 안에 없을 경우 False
```

```python
# 새로운 key:value 만들기

cage['비'] = '주룩주룩'
cage # {'불': '활활', '물':'콸콸', '바람':'휘이잉', '비':'주룩주룩'}
```

```python
# 기존의 key:value 삭제하기

del cage['비']
cage # {'불': '활활', '물':'콸콸', '바람':'휘이잉'}
```

```python
# key, value만 꺼내기 

cage.keys() # dict_keys(['불', '물', '바람'])
cage.values() # dict_values(['활활', '콸콸', '휘이잉'])

# item 꺼내기

cage.items() # dict_items([('불': '활활'), ('물':'콸콸'), ('바람':'휘이잉')])
```



### 1. 6 튜플(tuple)

> `(x, y)`  한 쌍의 형태를 형태를 가지며 값과 크기가 변하지 않는다.

```python
t = (4, 7) # tuple의 형태

type(t) # tuple
t[-1] # 7 # tuple에서 값 꺼내기
```

```python
# tuple 사용 예시

def return_tuple(x, y): 
	return x, y # x, y를 대입하면 tuple 형태로 돌려준다. 
	
what = return_tuple(9, 2) # (9, 2) 형태의 tuple 생성
what[0] # 9  
```



### 1. 7 집합(set)

> 형식은 `list`와 비슷하지만 `[]` 가 아닌 `{}`를 사용한다.  `list`와 다른 점은 값들의 중복을 허용하지 않는다는 점이다.  

```python
s = {1, 2, 3, 3, 4, 4, 5}
s # {1, 2, 3, 4, 5} # 중복되는 수는 제거된다!
```

```python
# list s에서 중복을 제거하고, 다시 list로 만들기

what = list(set(s))
s # [1, 2, 3, 4, 5]
```



### 1.8 조건문과 반복문

> 조건문과 반복문에는 `if`, `for`, `while` 이 있다. 

#### (1) if 

```python
# if 구문 예시
# if, else는 한 번씩만 사용 가능. elif는 여러 번 사용 가능하다!

def check_price(lunch_price):
    price_label = ''
    
    if (10000 < lunch_price) and (lunch_price < 100000):
        price_label = "프리미엄 도시락"
    elif lunch_price < 3000: 
        price_label = "저렴이 도시락"
    else:
        price_label = "무난무난 도시락"
        
    return price_label

check_price(7000) # '무난무난 도시락'
```

```python
# if 구문 예시 2(list)

cage = ['Tiger', 'Weale', 'Rabbit']

if 'Rabbit' in cage: # Rabbit이 list 안에 있을 경우
	print('토끼가 깡총깡총') # 토끼가 깡총깡총
	
# if 구문 예시 3(dict)

cage = {'Tiger':'어흥', 'Weale':'푸우푸우', 'Rabbit':'총총'}

if 'Weale' in cage.keys(): # 'Weale'이 dict 안의 key로 존재할 경우
	print('고래가 머리 위로 물을 뿜는다') # 고래가 머리 위로 물을 뿜는다 
```

#### (2) for

```python
# for 
# for sth in 그룹형 변수

nums = [1, 2, 3, 4, 5]

for number in nums:
	print(number)
	# 1
	  2
	  3
	  4
	  5
	  
for _ in nums:
	print('xxx')
	# xxx
	  xxx
	  xxx
	  xxx
	  xxx
```

```python
# for 구문으로 1과 4가 연속으로 나오는 숫자 찾기

list_of_nums = [121142131512315, 1241561717265467, 153462615114151231, 1634263414616123, 15236172821568]
for num in list_of_nums:
    if '14' in str(num):
        print(num) # 121142131512315 
        		   # 153462615114151231
                   # 1634263414616123
```

```python
# 범위를 나타내는 함수

range(5) # range(0, 5) 0부터 4까지 범위

for index in range(5):
    print(index)
    
list(range(5))
# 0
# 1
# 2
# 3
# 4
   
```

```python
class_1 = ['철수', '영희', '동수', '선이', '보라', '주아']

for student in class_1:
	print("얘 이름은 {}래요".format(student))
	# 얘 이름은 철수래요
	# 얘 이름은 영희래요
	# 얘 이름은 동수래요
	# 애 이름은 선이래요
	# 얘 이름은 보라래요
	# 얘 이름은 주아래요
	
	
for index, student in enumerate(class_1):

	if index > 4:
		break
		
	else: 
		print("얘 번호는 {}번이구요. 이름은 {}래요".format(index, student))
        # 얘 번호는 0번이구요. 이름은 철수래요
		# 얘 번호는 1번이구요. 이름은 영희래요
		# 얘 번호는 2번이구요. 이름은 동수래요
		# 얘 번호는 3번이구요. 이름은 선이래요
		# 얘 번호는 4번이구요. 이름은 보라래요
        # 얘 번호는 4번이구요. 이름은 주아래요
```

```python
# for문 활용예시(list에 item 추가)

empty_list = []
for student in class_1:
	empty_list.append('김'+student) # class_1에 속한 값들 앞에 '김' 성씨 추가

empty_list # 김철수 김영희 김동수 김선이 김보라 김주아
```

#### (3) while

> 조건을 지정하고 그 조건을 충족하는 동안(while) 실행되게 만드는 구문. 무한루프가 되지 않도록 주의한다.  `pass`를 적절한 상황에 사용하도록 할 것. 

```python
# while 활용 예시 

temp = 1
while temp <= 5: # temp가 5보다 작을 경우 실행, 아닌 경우 멈춘다. 
	print(temp) # temp를 출력한다.
	temp = temp + 1 # temp에 1을 더하고 첫 부분으로 돌아간다.
	
# pass 적용 예시

while true: # 참일 경우 
	pass # 그냥 지나가고 다음 바퀴로 넘어간다.
```

```python
# while 활용 예시 2(+break)

idx = 0 
while True: # 아래의 조건이 참일 동안만 진행한다.
	if idx >= 5: # 만약 idx가 5보다 클 경우  
		break # 진행을 멈춘다.
	else: # 그 외에는(5보다 작을 경우에는)
		print(idx) # idx를 출력한다.
		idx += 1 # idx에 1을 더하고 처음으로 돌아간다.
```



### 2. 파일 읽고 쓰기

#### 2.1 파일 쓰기 

> 컴퓨터는 저장 시 데이터를 이진수(ex. 010101110)로 바꿔 저장하며, 이 때 적용되는 규칙을 `encoding`이라 한다. 열 때도 같은 `encoding`을 쓰지 않으면 글자가 깨질 수 있으므로 주의한다. 한글이 포함된 데이터를 열 때 주로 사용하는 것으로는 `utf-8`, `cp949`, `euc-kr` 등이 있다. 

```
# 파일 열기 

file = open('cage.txt', 'w', encoding='utf-8')

```



