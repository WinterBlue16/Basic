# Keras library를 활용한 Classification

> `hidden layer`가 1개, `hidden layer`가 2개일 경우의 코드를 함께 서술한다.

```python
# 라이브러리 불러오기

import tensorflow as tf
from tensorflow.keras import datasets, utils
from tensorflow.keras import models, layers, activations, initializers, losses, optimizers, metrics


# warning 메시지 제거

import os
tf.logging.set_verbosity(tf.logging.ERROR)
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
```



## 1. 데이터 준비(MNIST)

### 1.1 데이터 나누기 

```python
# train, test 데이터 나누기

(train_data, train_label), (test_data, test_label) = datasets.mnist.load_data()

print(train_data.shape) # 데이터 형태(차원)
print(test_data.shape)
print(train_data.dtype) # 데이터 타입
print(train_data.max()) # 최댓값
```

### 1.2 Normalization

```python
# 수월한 모델 설정을 위해 인자들을 255로 나누어 최댓값을 1로 만든다.

train_data = train_data.reshape(60000, 784).astype('float32')/255.0
test_data = test_data.reshape(10000, 784).astype('float32')/ 255.0
```

### 1.3 One-hot encoding

```python
train_label = utils.to_categorical(train_label)
test_label = utils.to_categorical(test_label)
```



## 2. 모델 만들기

### 2.1 Hidden Layer 1

```python
model = models.Sequential()

# Layer 설정

model.add(layers.Dense(input_dim=28*28,# 데이터 크기
						units=512, # 퍼셉트론 수
						activation='relu', kernel_initializer='he_uniform')) # 활성화 함수
						
model.add(layers.Dropout(0.2)) # dropout할 데이터 비중 지정
model.add(layers.Dense(units=10, activation='softmax')) 

model.compile(optimizer='adam',
		      loss=losses.categorical_crossentropy,
		      metrics=['accuracy'])
```



### 2.2 Hidden Layer 2

```python
model = models.Sequential()

# hidden layer 1

model.add(layers.Dense(input_dim=28*28,
					   units=256,
					   activation=None,
					   kernel_initializer=initializers.he_uniform()))
					   
model.add(layers.BatchNormalization())
model.add(layers.Activation('relu'))
model.add(layers.Dropout(rate=0.2))

# hidden layer 2

model.add(layers.Dense(units=256,
					   activation=None,
					   kernel_initializer=initializers.he_uniform()))
model.add(layers.BatchNormalization())
model.add(layers.Activation('relu'))
model.add(layers.Dropout(rate=0.2))

model.add(layers.Dense(units=10, activation='softmax'))

model.compile(optimizer='adam',
		      loss=losses.categorical_crossentropy,
		      metrics=['accuracy'])
```



## 3. 모델 적용하기

### 3.1 Hidden Layer 1

```python
model.fit(train_data, train_label, batch_size=100, epochs=10)
```

### 3.2 Hidden Layer 2

```python
history = model.fit(train_data, train_label, batch_size=100, epoch=15, validation_split=0.2) # validation 비중 설정
```



## 4. 모델 테스트

```python
result = model.evaluate(test_data, test_label, batch_size=100)

print('loss(cross-entropy):', result[0])
print('test accuracy :', result[1])
```



## 5. 결과 시각화(Hidden Layer 2)

```python
history.history.keys()

val_acc = history.history['val_categorical_accuracy']
acc = history.history['categorical_accuracy']

import numpy as np
import matplotlib.pyplot as plt

x_len = np.arange(len(acc))
plt.plot(x_len, acc, marker='.', c='blue', label="Train-set Acc.")
plt.plot(x_len, val_acc, marker='.', c='red', label="Validation-set Acc")

plt.legend()
plt.grid()
plt.xlabel('epoch')
plt.ylabel('Accuracy')
plt.show()
```



## 6. 모델 저장 & 불러오기

> `model`의 모든 `weight`(`Parameter Theta`)는 물론  `optimizer`도 저장되며 `load`하면 바로 학습을 재개할 수 있다.  

```python
# 모델 저장하기

model.save('mnist_2layer_bn.h5')

# 저장한 모델 불러오기

model = models.load_model('mnist_2layer_bn.h5')
```

