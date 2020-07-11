# Github repository(저장소) 로컬 컴퓨터로 복사하기

> Github의 핵심은 `repository`(저장소) 생성 및 관리라고 할 수 있다. Github  회원가입 후 `repository`를 만들 수 있는데, 보통 용도나 프로젝트별로 `repository`를 생성해 관련 파일들을 보관한다. 이 때 파일을 추가/수정/삭제하는 방법은 여러 가지가 있다. 그 중 가장 보편적인 방법인, 로컬 컴퓨터와 연동해 관리하는 법을 알아본다. 



## 0. 준비 사항

<img src="https://miro.medium.com/max/325/1*Je4yF-xdHEluVvmS0qw8JQ.png" style="zoom:50%;" />



<img src="https://user-images.githubusercontent.com/58945760/87168571-ac3ca900-c309-11ea-8f6d-dc9ed53c9cea.png" alt="git-960x540" style="zoom:50%;" />

Github 사이트에서 직접 파일을 추가하는 것이 아닌 이상 `git bash`와 같은 CLI를 설치하거나 Github Desktop 같은 프로그램을 설치하여야 한다. 

- Github Desktop의 경우 명령어를 직접 입력할 필요가 없고, 사용법이 간편한 편이다. 하지만 직접 명령어를 입력하는 CLI을 사용하는 것보다 섬세한 작업을 하기는 힘들다.  
-  `git bash`는 일일이 명령어를 입력해야 하는 번거로움이 있지만, 그런 명령어들을 통해 파일 제어나 설정을 디테일하게 만질 수 있다는 장점이 있다. 때문에 이하에서는 `git bash`를 이용하는 방법으로 설명한다. 



## 1. `repository` clone(복사) 하기

> Github에 만든 저장소를 로컬 컴퓨터로 복사한다. 이는 로컬 컴퓨터에서 편하게 `repository`를 관리할 수 있도록 하기 위함이다.  
>
> 실제 예시를 통해 저장소를 로컬 컴퓨터로 복사하는 과정을 알아보자. 

### 1.1 저장소 주소 `copy`

![저장소 예시](https://user-images.githubusercontent.com/58945760/87218537-a63cdb80-c38e-11ea-8951-4f6d77b3322f.PNG)



![저장소 clone](https://user-images.githubusercontent.com/58945760/87218538-a89f3580-c38e-11ea-8873-2f5dea59f7dd.PNG)

위의 그림과 같이 주소 옆의 작은 버튼을 클릭하면 해당 `repository`의 주소가 복사된다. 다음은 `git bash`를 열 차례다. 

### 1.2 `git bash`에서 저장소 복사 완료하기 

