### django에서 multithread 적용하기

> django project에서 멀티스레딩을 적용하는 방법에 대해서 정리한 문서입니다. 

api를 생성할 때, 바로바로 응답을 받을 수 있다면 베스트지만 시간이 필요한 task도 존재합니다. 그런 task가 완료될 때까지 기다렸다가 응답을 보내면, 사용자 입장에서는 서비스의 질에 대한 의심을 하게 되고, 차후 그 서비스를 이용하려 하지 않게 됩니다. 따라서 이런 경우, 먼저 응답을 보낸 후 background에서 task가 계속 실행되도록 해야 합니다. 

이렇게 할 수 있는 방법은 여러 가지가 있지만 여기서는 그 방법 중 하나인 multithread에 대해 말하겠습니다.  

- views.py

```python
from threading import Thread

...
task = Thread(target='함수', args=('함수 인자'))
task.start()
...

"""
ex. 
task = Thread(target=my_function, args=(val1, val2))
task.start()
"""
```

- tasks.py

```python
"""
아래는 예시입니다. 
"""
def my_function(a, b):
    return a+b
```

