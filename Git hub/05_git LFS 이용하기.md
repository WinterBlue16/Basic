# 05_git LFS 이용하기

> 웹 서비스를 구현하여 `git`으로 관리하려 하거나 해당 서비스를 소개하는 `repository`를 만들고자 할 때, 서비스를 개발하는 데 쓰인 전체 소스 코드를 업로드하게 된다. 그리고 높은 확률로 파일 용량이 커 `regository`에 업로드할 수 없다는 `error` 메시지를 보게 된다.  이는 `github`에서 `commit`을 할 단일 파일 하나당 100MB를 넘겨서는 안 된다는 제한을 걸어놓았기 때문이다. 
>
> 특히나 딥러닝 모델을 사용한 서비스라면 `h5`파일의 용량이 아무리 줄이려 해도 가볍게 이 제한을 넘기게 되므로 골치가 아파진다. 서비스에 사용한 모델이 CNN 혹은 그를 기반으로 한 모델이라면 더 이상의 자세한 설명은 생략한다. 
>
> 하지만 많은 사람들이 `github`로 서비스를 관리해 왔고, 현재도 관리하고 있다. 이 말인즉슨, 다행스럽게도 커다란 용량의 파일들을 `repository`에 업로드할 방법은 존재한다는 것이다. 이번에는 그 방법인 `git LFS`의 사용법에 대해 알아본다.    

※ 현재 사용하는 컴퓨터는 window(window 10)이기에 이하의 내용 모두 window를 기준으로 서술한다!



## 0. 준비사항

<img src="https://miro.medium.com/max/325/1*Je4yF-xdHEluVvmS0qw8JQ.png" style="zoom:50%;" />

git LFS 이용은 직접적인 명령어 입력이 필요하다. 따라서 `git bash`와 같은 **CLI**가 필요하다.

git LFS는 `repository`의 경로에 직접 들어가 설치를 진행해야 하므로  먼저 `git bash`를 설치하고, `cd` 명령어를 통해 `commit`을 진행할 경로로 이동해 두자. 

 

## 1. git LFS 설치하기

![git lfs](https://user-images.githubusercontent.com/58945760/86791672-bdd14700-c0a4-11ea-803d-06913ac07356.PNG)

- [공식 홈페이지](https://git-lfs.github.com/)에 접속한다. 

- Download 버튼을 눌러 git LFS를 다운로드한다. 

  > 다운로드 폴더(경로 변경 가능)에 들어가면 아래와 같은 파일이 다운로드되어 있는 것을 확인할 수 있다. 

  ![2](https://user-images.githubusercontent.com/58945760/86792329-5667c700-c0a5-11ea-9ef0-f1982dec6b3f.PNG)

- 파일을 열고 설치한다. 



## 2. git bash로 git LFS 사용하기

### 2.1 `repository`에 git LFS 설치하기

> 위에서 