# Classification(MINST, 2Layers baseline)

> 2019. 12. 30. 진행한 수업 정리 

```python
import tensorflow as tf # 텐서플로 불러오기
tf.logging.set_verbosity(tf.logging.ERROR)

import os # warning 메시지 제거
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
```



## 1. 데이터 준비

```python
from tensorflow.examples.tutorials.mnist import input_data 
mnist = input_data.read_data_sets("./mnist/data", one_hot=True) # MNIST 데이터 불러오기
```

```python
type(mnist.train.images) # numpy.ndarray 자료형
mnist.train.images.shape # (55000, 784) 
mnist.train.labels.shape # (55000, 10)  
```

```python
import pandas as pd

df = pd.DataFrame(mnist.train.labels)
df = pd.DataFrame(mnist.train.images)
```



## 2. 모델링

```python
# placeholder로 데이터가 흘러들어올 접시 만들기

X = tf.placeholder(tf.float32, [None, 784])
Y = tf.placeholder(tf.float32, [None, 10])

# Variable로 모든 Parameter Theta를 묶어 Gredient Descent를 적용할 때마다 값이 바뀌도록 설정

W1 = tf.Variable(tf.random_normal([784, 256], stddev=0.01)) #(열 갯수, 값을 전달할 퍼셉티콘 수)
L1 = tf.nn.relu(tf.matmul(X, W1)) #hidden layer 1 # Relu 활성화 함수 씌우기
W2 = tf.Variable(tf.random_normal([256, 256], stddev=0.01))
L1 = tf.nn.relu(tf.matmul(L1, W2)) #hidden layer 2 # Relu 활성화 함수 씌우기
W3 = tf.Variable(tf.random_normal([256, 10], stddev=0.01))

model = tf.matmul(L2, W3) # 행렬 곱까지만 진행
```



## 3. Cost function & Optimizer 선정

> 어떤 문제를 푸느냐에 따라 `cost function`이 달라지므로 주의해서 본다. 

```
# Regression 문제 
cost = tf.losses.mean_squared_error(Y, model)

# Classification 문제
cost = tf.losses.softmax_cross_entropy(Y, model) # softmax 다음으로 cross_entropy 적용

# Optimizer 설정
optimizer = tf.train.AdamOptimizer(0.001).minimize(cost) # Adam 권장
```



## 4. 모델 훈련시키기

```python
# Session 열기

init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)

# Batch size(Gradient Descent 적용 전까지 넣는 데이터 수) 설정

batch_size = 100
total_batch = int(mnist.train.num_examples/100)
print(total_batch) # 550

for i in range(total_batch):
    batch_xs, batch_ys = mnist.train.next_batch(batch_size)~~~
    
```

```python
# 셔플 참고 코드

def shuffle_batch(X, y, batch_size):
	rnd_idx = np.random.permutation(len(X))
	n_batches = len(X) // batch_size
	for batch_idx in np.array_split(rnd_idx, n_batches):
		X_batch, y_batch = X[batch_idx], y[batch_idx]
		yield X_batch, y_batch	
```

```python
!pip install tqdm==4.31.1

from tqdm import trange, tqdm_notebook # 학습이 완료되는 과정을 시각화로 보여줌
for epoch in tqdm_notebook(range(15)): # 전체 데이터를 한 번 학습하는 과정을 15번 반복

	total_cost = 0
	for i in range(total_batch):
		batch_xs, batch_ys = mnist.train.next_batch(100)
		
		_, cost_val = sess.run([optimizer, cost], feed_dict={X: batch_xs, Y: batch_ys})
		total_cost += cost_val
		
	test_cost = sess.run([cost], feed_dict={X: mnist.test.images, Y: mnist.test.labels})
	
    print('Epoch: {}'.format(epoch+1),
    '|| Avg.Training cost = {:.3f}'.format(total_cost/total_batch), 
    '|| Current Test cost = {:.3f}'.format(test_cost[0]))
    
print('Learning process is completed!')

```



## 5. 모델 테스트하기

```python
is_correct = tf.equal(tf.argmax(model, 1), tf.argmax(Y, 1)) # 예측값(model), 정답(Y) 
accuracy = tf.reduce_mean(tf.cast(is_correct, tf.float32))

# 정확도 출력

print('정확도 :', sess.run(accuracy, feed_dict={X: mnist.test.images,
											   Y: mnist.test.labels}))
```

```python
# 모델 예측값 

predicted_labels = sess.run(tf.argmax(model, 1), feed_dict={X: mnist.test.images, Y: mnist.test.labels})
print(predicted_labels)

# 정답

import numpy as np
print(np.argmax(mnist.test.labels, 1)[:10])

```



