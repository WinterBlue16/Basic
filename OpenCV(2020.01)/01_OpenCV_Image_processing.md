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

[이미지]

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



## 2. 컬러스페이스 

> - RGB(row, column, channel)