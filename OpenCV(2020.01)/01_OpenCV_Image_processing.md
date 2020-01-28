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
plt.imshow(cv2.cvtColor(bgra[:,:,3], cv2.COLOR_BGR2RGB))
plt.show()
```

[image]

### 2.1 BGR에서 HSV로 변환하기

```python
# 라이브러리 불러오기
import cv2
import numpy as np

# BGR 색상
```

