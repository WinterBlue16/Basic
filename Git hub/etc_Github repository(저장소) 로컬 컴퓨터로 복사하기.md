# Github repository(저장소) 로컬 컴퓨터로 복사, 이용하기

> Github의 핵심은 `repository`(저장소) 생성 및 관리라고 할 수 있다. Github  회원가입 후 `repository`를 만들 수 있는데, 보통 용도나 프로젝트별로 `repository`를 생성해 관련 파일들을 보관한다. 이 때 파일을 추가/수정/삭제하는 방법은 여러 가지가 있다. 그 중 가장 보편적인 방법인, 로컬 컴퓨터와 연동해 관리하는 법을 알아본다. 



## 0. 준비 사항

<img src="https://miro.medium.com/max/325/1*Je4yF-xdHEluVvmS0qw8JQ.png" style="zoom:50%;" />



<img src="https://user-images.githubusercontent.com/58945760/87168571-ac3ca900-c309-11ea-8f6d-dc9ed53c9cea.png" alt="git-960x540" style="zoom:50%;" />

Github 사이트에서 직접 파일을 추가하는 것이 아닌 이상 `git bash`와 같은 CLI를 설치하거나 Github Desktop 같은 프로그램을 설치하여야 한다. 

- Github Desktop의 경우 명령어를 직접 입력할 필요가 없고, 사용법이 간편한 편이다. 하지만 직접 명령어를 입력하는 CLI을 사용하는 것보다 섬세한 작업을 하기는 힘들다.  
-  `git bash`는 일일이 명령어를 입력해야 하는 번거로움이 있지만, 그런 명령어들을 통해 파일 제어나 설정을 디테일하게 만질 수 있다는 장점이 있다. 때문에 이하에서는 `git bash`를 이용하는 방법으로 설명한다. 



## 1. clone한 `repository`  로컬에서 이용하기

> Github에 만든 저장소를 로컬 컴퓨터로 복사한다. 이는 로컬 컴퓨터에서 편하게 `repository`를 관리할 수 있도록 하기 위함이다.  
>
> 실제 예시를 통해 저장소를 로컬 컴퓨터로 복사하는 과정을 알아보자. 

### 1.1 `repository` 주소 `copy`

![저장소 예시](https://user-images.githubusercontent.com/58945760/87218537-a63cdb80-c38e-11ea-8951-4f6d77b3322f.PNG)



![저장소 clone](https://user-images.githubusercontent.com/58945760/87218538-a89f3580-c38e-11ea-8873-2f5dea59f7dd.PNG)

위의 그림과 같이 주소 옆의 작은 버튼을 클릭하면 해당 `repository`의 주소가 복사된다. 다음은 `git bash`를 열 차례다. 

### 1.2 `git bash`에서 `repository` 복사 완료하기 

> 이제 `git bash`를 열고 `repository`를 복사하고 싶은 경로로 이동한다. 

```shell

$ cd /  # 어느 경로에 있든 C드라이브로 이동시켜준다 
$ cd [repository를 복사하고 싶은 경로]
$ git clone [github에서 복사한 repository 주소]
```

예시는 아래와 같다. 

![1](https://user-images.githubusercontent.com/58945760/87225232-64c82280-c3c6-11ea-9ea4-ed37e40c3e42.PNG)

경고 메시지는 해당 `repository`가 비어 있을 때 뜨는 것이고 무시해도 상관없다. 이후 복사한 경로로 가서 확인해보면 

![tempsnip](https://user-images.githubusercontent.com/58945760/87219435-08e5a580-c396-11ea-93f2-3a8490497bb0.png)

해당 `repository` 가 성공적으로 복사된 것을 확인할 수 있다. `cd` 명령어를 통해 해당 폴더로 이동해보자. 



### 1.3 로컬 `repository`에 파일 추가하기

```shell
$ git status # repository의 변동 상황을 알려준다
```

예시는 다음과 같다.

![3](https://user-images.githubusercontent.com/58945760/87219297-ddae8680-c394-11ea-8360-1683efce9b26.PNG)

나는 `repository`를 복사한 후 다섯 개의 파일을 넣어두었다.  새로운 파일들이 `repository`에 추가되었음을 붉은 글씨로 알려주는 것을 볼 수 있다. 

```shell
$ git add [추가할 파일명(확장자 포함)] # repository 파일 추가(1개만)
$ git add . # repository 파일 추가(변경 사항 전체 반영)

$ git commit -m "커밋 메시지" # 변경 사항을 원래 repository에 반영하라는 commit(확정) 명령
```

아래 예시를 보자.

![4](https://user-images.githubusercontent.com/58945760/87219300-e1420d80-c394-11ea-8abe-3f6c7ee429e5.PNG)

`add` 명령어는 단순히 `repository`에 새 파일을 추가하는 것뿐만이 아니라, 원래 존재하던 파일이 수정되었거나 삭제되었을 때도 쓴다. **해당 `repository`의 변동사항**을 `add`(추가)한다고 생각하면 쉽다. 

`add` 뒤에 파일명을 붙일 경우 그 해당 파일의 변경/변동사항밖에 추가할 수 없다.  `add`해야 하는 변동사항이 많을 경우 `add` 뒤에 한 칸 띄고 `.`을 붙여주면 변동 사항 전체를 한 번에 반영할 수 있다.  

repository의 변동사항을 모두 `add` 했다면 그 다음은 인터넷 상에 존재하는 원 `repository`에 반영되도록 요청을 해야 한다. 이 과정에서 필요한 것이 `commit` 명령어이다. `git commit`명령어를 통해 `repository`의 변경사항을 **확정**한다고 이해하는 것이 좀 더 쉽지 않을까 쉽다. 

음, 이를 테면 이런 것이다.  친구들과 함께 고기가 맛있다고 소문난 식당에 갔다고 치자. 길지도 않은 메뉴판을 약 5번 정도 읽으며 고민하다가 겨우 겨우 먹을 것을 정했다. 하지만 아무리 머릿속으로 결정을 내려봤자 아직 메뉴판을 보며 고민하고 있는 친구들은 물론 내 주문을 받아가야 하는 식당 종업원도 내가 어떤 메뉴를 골랐는지 모른다. 나는 친구들과 종업원에게 삼겹살을 먹겠다는 의사를 전하려 한다. 이미 머릿속 저장소에는 '삼겹살'이 `add`된 상태다. 머릿속에는 '나 삼겹살 먹을래' 라는 말이 떠올라 있을 것이고, 친구들이 다 들을 수 있도록 말할 것이다. 이 말을 내놓은 순간 내가 삼겹살을 주문할 것이라는 사실은 `commit`(확정)된다. 

확정된 후에는 어떻게 해야 하나? 바쁜 와중에도 pos기 앞에서 톡 확인하는 종업원을 불러 삼겹살 3인분을 달라는 요청을 보내야 한다. 이것이 `push` 명령이다.   

```shell
$ git push origin master # github의 원 repository에 변경사항 반영 요청
```

 

아래는 예시이다.

![5](https://user-images.githubusercontent.com/58945760/87219302-e3a46780-c394-11ea-8a44-d7cfd2f48820.PNG)

위와 같은 메시지가 뜨면 변동사항이 성공적으로 반영된 것이다. 내 `Github`로 들어가 해당 `repository`를 확인해 보면 새로운 파일들이 추가된 것을 볼 수 있다. 