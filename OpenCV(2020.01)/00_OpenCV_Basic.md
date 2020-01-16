# 00_OpenCV_Basic

> 이하의 내용은 '파이썬으로 만드는 OpenCV 프로젝트'(저자 이세우)를 기반으로 한 것임을 밝힌다. 사용할 이미지 파일들은 작업파일이 있는 장소에 폴더로 저장해두는 것이 편리하다.
>
> - OpenCV 개요
>   - 영상처리와 컴퓨터 비전 처리를 위한 오픈소스 라이브러리
>   - `C`, ` C++`,  `Python` 에서 사용 가능
>   - `python`에서 `Numpy` 모듈을 이용하기 위해서는 `3.4`이상의 버전이 요구됨 
>   - `openCV`는  해당 `img`의 화소(`pixel`) 데이터를 출력
>   - 기본값은 `RGB`(Red, Green, Blue)가 아닌 `BGR` (Blue, Green, Red) 

```python
# openCV 설치 
!pip install opencv-python
!pip install opencv-contrib-python # extra 모듈 포함
```



## 1. 기본적인 입, 출력

### 1.1 `image` 입출력

```python
# openCV 불러오기
import cv2

# 새 창에 이미지 띄우기
img_file = 'img/motorbike.jpg' # 이미지 경로 입력
img = cv2.imread(img_file) # 파일로부터 이미지 읽어오기

cv2.imshow('IMG', img) # 특정 이미지를 IMG라는 이름의 윈도우 창에 출력
cv2.waitKey() # 지정 키를 누르고 창이 꺼지기까지의 대기시간 지정 
cv2.destroyAllWindows() # 화면의 모든 윈도우 창을 종료시킴

# 그레이스케일로 읽기
img_file = 'img/motorbike.jpg'
img = cv2.imread(img_file, cv2.IMREAD_GRAYSCALE)

cv2.imshow('IMG', img) 
cv2.waitKey()
cv2.destroyAllWindows()
```

![IMG](https://user-images.githubusercontent.com/58945760/72335263-09acc000-3702-11ea-8424-9ad76d314d8b.PNG)

![IMG2](https://user-images.githubusercontent.com/58945760/72335723-d0288480-3702-11ea-9b01-4657b897d747.PNG)

```python
# jupyter notebook에 바로 이미지 출력
import matplotlib.pyplot as plt
import cv2

img = cv2.imread('img/motorbike.jpg')

plt.axis('off') # x, y축의 숫자눈금을 표시하지 않음. default는 on
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.show()
```

```python
# 이미지 저장하기
import cv2

img_file = 'img/motorbike.jpg'
img = cv2.imread(img_file, cv2.IMREAD_GRAYSCALE)
cv2.imwrite('img/motorbike_gray.jpg', img)
```

```python
# 예제) 이미지를 흑백 새창으로 열고, 저장한 후 창 닫기
img_file = 'img/street.jpg'
img = cv2.imread(img_file, cv2.IMREAD_GRAYSCALE) # 그레이스케일로 열기
cv2.imshow('IMG_GRAYSCALE', img) # 새창 열기 

cv2.imwrite('img/street_grayscale.jpg', img) # street_grayscale로 다른 이름 저장
cv2.waitKey()
cv2.destroyAllWindows() # 아무 키나 누르면 창 종료
```



## 1.2 동영상 파일 읽기

> 동영상은 이미지 프레임의 모음이며 계속적인 재생이 필요하다는 점을 기억한다.
>
> - 기본적인 단어, 용어 설명
>   - `file_path`: 동영상 파일 경로
>   - `index`: 카메라 장치 번호(0부터 차례로 증가함)
>   - `cap`: `VideoCapture` 객체
>   - `ret`: 1. 초기화 여부=> `True` /`False `(isOpened)
>     2. 프레임 읽기 성공 혹은 실패 여부 => `True` /`False`(read)
>   - `img`: 프레임 이미지 => `numpy` 배열/`None`

```python
# 라이브러리 불러오기
import cv2

# 동영상 파일 불러오기 
video_file = 'img/big_buck/avi'
cap = cv2.VideoCapture(video_file)

if cap.isOpened():# 객체 초기화 
    while True: # 이미지 프레임을 계속해서 읽어올 수 있도록 함
        ret,img = cap.read()
        if ret:
            cv2.imshow(video_file, img)
            cv2.waitKey(25) # 얼마 후 다음 이미지 프레임을 재생할 것인지 지정(영상 재생속도 조절)
        else:
            break
else:
    print('동영상을 열 수 없습니다.')
    
cap.release()
cv2.destroyAllWindows()
```



### 1.3 그림그리기

> - 직선, 사각형, 원까지 원하는 도형을 화면에 그려본다. 

#### 1.3.1 직선그리기

> - `cv2.line(img, start, end, color, thickness, lineType)` 
>   - `img`: 그림을 그릴 이미지(`Numpy`배열)
>   - `start`: 선이 시작되는 지점의 좌표(x, y)
>   - `end`: 선이 끝나는 지점의 좌표(x, y)
>   - `color`: 선의 색깔(`BGR` 형식, 0~255)
>   - `thickness` : 선의 두께(`default` = 1)
>   - `lineType`: 선 타입

```python
# 라이브러리 불러오기
import cv2
import matplotlib.pyplot as plt
import numpy as np

# 그림 그릴 도화지 만들기
image = np.full((512, 512, 3), 255, np.uint8) # 배경 및 크기 설정 => 가로, 세로, 세 개의 채널, 색깔 넣기)
image = cv2.line(image, (0, 0), (255, 255), (0, 255, 0), 30, cv2.LINE_AA)

plt.imshow(image)
plt.show()
```

![graph](https://user-images.githubusercontent.com/58945760/72436650-45b85180-37e4-11ea-8330-7bce98e6e3d7.PNG)

#### 1.3.2 사각형 그리기

> - `cv2.rectangle(img, start, end, color, thickness, lineType)`
>   - `start`: 사각형 좌측 상단 꼭짓점(x, y)
>   - `end`: 사각형의 우측 하단 꼭짓점(x, y)
>   - `thickness`: 선 두께
>     - `-1`: 채우기

```python
# 예시 1
# 라이브러리 불러오기
import cv2
import matplotlib.pyplot as plt
import numpy as np

# 사각형 그릴 도화지 만들기
image = np.full((512, 512, 3), 255, np.uint8)
image = cv2.rectangle(image, (20, 20), (255, 255), (0, 0, 255), 10)

plt.imshow(image)
plt.show()

# 예시 2
img = cv2.imread('img/blank_500.jpg') # 흰 바탕 이미지 파일 불러오기
cv2.rectangle(img, (50, 50), (150, 150), (255, 0, 0), -1) # -1을 주면 사각형 안이 색으로 채워짐.

cv2.imshow('ractangle', img) # 'ractangle' 새 창으로 열기
cv2.waitKey()
cv2.destroyAllWindows()
```

![graph2](https://user-images.githubusercontent.com/58945760/72437095-5917ec80-37e5-11ea-8fe4-d32152894576.PNG)



#### 1.3.3 다각형 그리기

> - `cv2.polylines(img, isClosed, color, thickness, lineType)`
>   - `points`: 꼭짓점 좌표, `Numpy`배열 리스트
>   - `isClosed`: 닫힌 도형 여부(`True`/`False`)

```python
# 예시 1
# 라이브러리 불러오기
import cv2
import matplotlib.pyplot as plt
import numpy as 

image = np.full((512, 512, 3), 255, np.uint8) # 새 도화지 만들기
points = np.array([[5, 5], [128, 258], [483, 444], [400, 150]]) # 꼭짓점 좌표 지정
image = cv2.polylines(image, [points], True, (255, 0, 0), 4)

plt.imshow(image)
plt.show()


# 예시 2
img = cv2.imread('img/blank_500.jpg')

# 번개 모양 선 좌표
pts1 = np.array([[50, 50], [150, 150], [100, 140], [200, 240]], dtype=np.int32)
# 삼각형 모양 좌표 
pts2 = np.array([[350, 50], [250, 200], [450, 200]], dtype=np.int32)
# 오각형 모양 좌표
pts3 = np.array([[350, 250], [450, 350], [400, 450], [300, 450], [250, 350]], dtype=np.int32)

```

![graph3](https://user-images.githubusercontent.com/58945760/72437755-cbd59780-37e6-11ea-8ecf-9a9c4d4ed832.PNG)