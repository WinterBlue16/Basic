# 01_OpenCV_Image processing

> - 관심영역 지정과  기본적인 이미지 정제 방법을 배운다. 



## 1. 좌표로 관심영역 지정하기

> - `roi`: 관심 영역(Region Of Interest, ROI)

### 1.1 관심영역 지정 

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt

img = cv2.imread('img/sunset.jpg')

x=320; y=150; w=50; h=50
roi = img[y:y+h, w:x+w]

print(roi.shape)
cv2.rectangle(roi, (0, 0), (h-1, w-1), (0, 255, 0))
cv2.imshow('img', img)

cv2.waitKey(0)
cv2.destroyAllWindows()

# copy 함수를 활용해 관심영역 복제하고 새 창 띄우기
img = cv2.imread('img/sunset.jpg')

x=320; y=150; w=50; h=50
roi = img[y:y+h, w:x+w]
img2 = roi.copy()

img[y:y+h, x+w:x+w+w] = roi
cv2.rectangle(img, (x,y), (x+w+w, y+h), (0, 255, 0))

cv2.imshow('img', img)
cv2.imshow('roi', img2)

cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 관심영역 지정

![창](https://user-images.githubusercontent.com/58945760/73249650-a1c5a180-41f8-11ea-80eb-4ef1d526e2d2.PNG)

- 관심영역 복제

![창2](https://user-images.githubusercontent.com/58945760/73249798-eb15f100-41f8-11ea-9c79-7c431605fdf2.PNG)

### 1.2 마우스 이벤트 코드 없이 간단한 ROI 지정

> - `ret` = `cv2.selectROI`(`win_name`, `img`, `showCrossHair`=`True`, `fromCenter`=`False` )
>   - `win_name`: 새 창 이름
>   - `img`: ROI 선택할 이미지, `Numpy ndarray`
>   - `showCrossHair`: ROI 중심에 십자 모양 표시 여부
>   - `fromCenter`: 마우스 시작 
>   - `ret`:  영역 좌표(x, y, w, h) 선택을 취소한 경우 모두 0으로 함
>     - `c`키를 누르면 선택 취소함 

```python
import cv2, numpy as np

img = cv2.imread('img/sunset.jpg')

x, y, w, h = cv2.selectROI('img', img, False)
if w and h:
    roi = img[y:y+h, x:x+w]
    cv2.imshow('cropped', roi)
    cv2.movewindow('cropped', 0, 0)
    cv2.imwrite('cropped2.jpg', roi)
    
cv2.imshow('img', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![3](https://user-images.githubusercontent.com/58945760/73250738-c6bb1400-41fa-11ea-9c1e-9a967b1f446e.PNG)



## 2. 컬러스페이스 

> - 다른 색상값에 대한 보다 자세한 설명은 [링크1](https://aboooks.tistory.com/279)과 [링크2](https://myyac.tistory.com/133)를 참조한다. 여기서는 OpenCV에서 기본적으로 이해하고 넘어가야 할 BGR와 BGRA, HSV에 대해 설명한다. 
>
> - **BGR(Blue, Green, Red)** :
>
>   ![RGB_1](https://user-images.githubusercontent.com/58945760/73253570-1cde8600-4200-11ea-802f-106f539513dd.png)
>
>   - **Blue(파랑)**: 0~255 사이의 값 => (255, 0, 0)
>   - **Green(초록)**: 0~255 사이의 값 => (0, 255, 0)
>   - **Red(빨강)**: 0~255 사이의 값 => (0, 0, 255)
>   - **Black(검정)**: (0, 0, 0)
>   - **White(하양)**: (255, 255, 255)
>
> 
>
> - **BGRA(Blue, Green, Red, Alpha)** : 
>
>   ![bgracontrols](https://user-images.githubusercontent.com/58945760/73254472-d1c57280-4201-11ea-988f-d9194750607f.png)
>
>   - Alpha(투명도) : 0.0(완전 투명) ~ 1.0(완전 불투명) 
>
>   
>
> - **HSV(Hue: 색상, Saturation: 채도, Value: 명도)** 
>
>   ![다운로드](https://user-images.githubusercontent.com/58945760/73254343-93c84e80-4201-11ea-942e-bf69e3bf4834.png)
>
>   - BGR 색상에 부합하는 H값
>
>     - 빨강 : 165 ~ 180, 0 ~ 15
>     - 초록 : 45 ~ 75
>     - 파랑 : 90 ~ 120
>
>     
>
> - `img` = `cv2`. `imread`(`file_name`, `mode_flag`):  파일로부터 이미지 불러오기
>   - `file_name`: 이미지경로
>   - `mode_flag`: 색상을 어떻게 읽어올 것인지 지정할 수 있음. 
>     - `cv2`.`IMREAD_COLOR`: BGR로 읽기. 기본값
>     - `cv2`.`IMREAD_UNCHANGED`: (Alpha 채널이 존재할 경우)BGRA로 읽기. **마스크 채널**이라고도 함
> - `out_img`: `cv2`.`cvtColor`(`img`, `flag`)
>   - `img`: `Numpy`배열 이미지
>   - `flag`: 적용할 색상 조건(총 274개)
>     - `cv2`.`COLOR_BGR2GRAY`: BGR 이미지를 그레이스케일 이미지로
>     - `cv2`. `COLOR_GRAY2BGR`: 그레이스케일 이미지를 BGR 이미지로
>     - `cv2`. `COLOR_BGR2HSV`: BGR 이미지를 HSV 이미지로

```python
# 라이브러리 불러오기
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 기본값 옵션 설정하기
img = cv2.imread('img/opencv_logo.png') 
bgr = cv2.imread('img/opencv_logo.png', cv2.IMREAD_COLOR) 
# IMREAD_UNCHANGED 옵션 
bgra = cv2.imread('img/opencv_logo.png', cv2.IMREAD_UNCHANGED) 

# 각 옵션에 따른 이미지 출력 확인
print('default', img.shape, 'color', bgr.shape, 'unchanged', bgra.shape)

plt.imshow(cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB))
plt.show()
plt.imshow(cv2.cvtColor(bgra, cv2.COLOR_BGR2RGB))
plt.show()
plt.imshow(cv2.cvtColor(bgra[:,:,3], cv2.COLOR_BGR2RGB)) # error()
plt.show()
```

[image]

### 2.1 BGR에서 HSV로 변환하기

```python
# 라이브러리 불러오기
import cv2
import numpy as np

# BGR 색상으로 픽셀 생성
red_bgr = np.array([[[0,0,255]]], dtype=np.uint8) # 빨강
green_bgr = np.array([[[0,255,0]]], dtype=np.uint8) # 초록
blue_bgr = np.array([[[255,0,0]]], dtype=np.uint8) # 파랑
yellow_bgr = np.array([[[0,255,255]]], dtype=np.uint8) # 노랑

# HSV 색상으로 변환 
red_hsv = cv2.cvtColor(red_bgr, cv2.COLOR_BGR2HSV)
green_hsv = cv2.cvtColor(green_bgr, cv2.COLOR_BGR2HSV)
blue_hsv = cv2.cvtColor(blue_bgr, cv2.COLOR_BGR2HSV)
yellow_hsv = cv2.cvtColor(yellow_bgr, cv2.COLOR_BGR2HSV)

# 출력(np.array 자료형)
print("Red:", red_hsv)
print("Green:", green_hsv)
print("Blue:", blue_hsv)
print("Yellow:", yellow_hsv)
```

![color](https://user-images.githubusercontent.com/58945760/73343633-48c33f80-42c4-11ea-9724-581fe7ed043f.PNG)



## 3. 이미지 스레시홀딩

### 3.1 스레시홀딩(thresholding)

> - 스레시홀딩이란 바이너리 이미지를 만드는 가장 대표적인 방법 중 하나이다. 우선 바이너리 이미지가 무엇인가부터 알아보자.  
>
> 1. 바이너리(`binary`) 이미지 :
>
>    - **이진화 이미지**라고도 한다.
>
>    - 검은색과 흰색만으로 이미지를 표현
>    - 0 or 1, 0 or 255 사용
>    - **이미지 예시 1**
>
>    ![binary](https://user-images.githubusercontent.com/58945760/73344792-524da700-42c6-11ea-8bc8-c0828a3e7b82.png)
>
>    
>
>    - **이미지 예시 2**
>
>    ![binary2](https://user-images.githubusercontent.com/58945760/73344804-54176a80-42c6-11ea-995f-2feb5a84359d.png)
>
> 
>
> 2. 그레이스케일(`grayscale`) 이미지 :
>
>    - 흔히 흑백 이미지라고 부름
>    - 0~255 사이의 값으로 이미지를 표현
>
>    - **이미지 예시 1**
>
>    ![grayscale](https://user-images.githubusercontent.com/58945760/73344774-4e218980-42c6-11ea-9e60-093562039e37.png)
>
>    
>
>    - **이미지 예시 2**
>
>    ![grayscale2](https://user-images.githubusercontent.com/58945760/73344784-4feb4d00-42c6-11ea-82cf-ed9a5b596f68.png)
>
>    - 스레시홀딩이란 특정한 경계값을 기준으로 모든 픽셀을 검은색(=0), 흰색(=255) 두 가지로 분류하는 것을 말한다. 따라서 결과물은 자연스레 바이너리 이미지가 된다.  
>      - 스레시홀딩 함수 :  ret, out = cv2.threshold(img, threshold, value, type_flag)
>        - `ret` : 스레시홀딩에 사용할 경계값
>        - `out `: 함수 적용 결과로 나오는 바이너리 이미지
>        - `img` : 변환할 이미지(np.array 자료형)
>        - `threshold` : 스레시홀딩에 사용할 경계값
>        - `value` : 경계값 기준을 충족할 경우 적용할 값
>        - `type_flag` : 스레시홀딩 적용 방법
>          - cv2.THRESH_BINARY
>          - cv2.THRESH_BINARY_INV 
>          - cv2.THRESH_TRUNC
>          - cv2.THRESH_TOZERO 
>          - cv2.THRESH_TOZERO_INV 

```python
# 이미지 스레시홀딩 예시
# 1. 라이브러리 불러오기
import cv2
import matplotlib.pyplot as plt

# 2. 이미지 불러오기(그레이스케일)
img = cv2.imread('img/man_face.jpg', cv2.IMREAD_GRAYSCALE)

# 3. 이미지에 스레시홀딩 함수들 적용
imgs = []
ret, t_bin = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY) # 경계값 127 # value값 255(=흰색)
ret, t_bininv = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)
ret, t_truc = cv2.threshold(img, 127, 255, cv2.THRESH_TRUNC)
ret, t_2zr = cv2.threshold(img, 127, 255, cv2.THRESH_TOZERO)
ret, t_2zrinv = cv2.threshold(img, 127, 255, cv2.THRESH_TOZERO_INV)

imgs.append(t_bin)# imgs 리스트에 추가
imgs.append(t_bininv)
imgs.append(t_truc)
imgs.append(t_2zr)
imgs.append(t_2zrinv)

# 4. 스레시홀딩한 이미지들 출력해 확인
for i in imgs:# 리스트에서 이미지를 하나씩 꺼내
    plt.imshow(cv2.cvtColor(i, cv2.COLOR_GRAY2RGB)) #출력하기
    plt.show()

```

- **cv2.THRESH_BINARY 적용**
  - 픽셀 값이 경계값을 넘을 경우 value값으로 변환, 아닐 경우 0(=검은색)으로 변환.

![바이너리](https://user-images.githubusercontent.com/58945760/73348666-1f5ae180-42cd-11ea-83fb-7eb48eadd9bb.PNG)

- **cv2.THRESH_BINARY_INV 적용**
  - 위와 반대. 경계값을 넘으면 0, 넘지 않을 경우 value값으로 변환.

![바이너리 반전](https://user-images.githubusercontent.com/58945760/73348671-2124a500-42cd-11ea-8272-bc59a2fa87a8.PNG)

- **cv2.THRESH_TRUNC 적용**
  -  픽셀 값이 경계값을 넘으면 value값으로 변환, 넘지 않으면 그대로 값 유지.

![트렁크](https://user-images.githubusercontent.com/58945760/73348672-2255d200-42cd-11ea-9f41-807bdf82474e.PNG)

- **cv2.THRESH_TOZERO 적용**
  - 픽셀 값이 경계값을 넘으면 값 유지, 아닐 경우 0으로 변환

![제로투](https://user-images.githubusercontent.com/58945760/73348676-241f9580-42cd-11ea-83b1-e71b02854a69.PNG)

- **cv2.THRESH_TOZERO_INV 적용**
  - 위와 반대. 픽셀 값이 경계값을 넘으면 0으로 변환, 아니면 값 유지

![제로투 반전](https://user-images.githubusercontent.com/58945760/73348682-2681ef80-42cd-11ea-9313-1a6f2e86448a.PNG)



### 3.2 적응형 스레시홀딩

> - method에 따라 임계값을 결정하는 방법으로, 전체 픽셀이 아닌 영역에 따라 다른 임계값을 사용한다.
> - 적용 코드
>   - `cv2`.`adaptive Threshold`(`img`, `value`, `method`, `type_flag`, `block_size`, `C`)
>     - img: 입력 영상
>     - value: 경계값을 만족하는 픽셀에 적용할 값

