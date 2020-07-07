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

> 위에서 git bash를 설치한 후, `commit`을 하고 싶은 `repository`로 이동했다. 그 다음부터는 명령어를 입력하여 과정을 진행한다. 

```shell
$ git lfs install
```

성공적으로 설치가 진행되었다면 

```shell
Updated pre-push hook.
Git LFS initialized.
```

다음과 같은 메시지가 뜰 것이다. 



### 2.2 git LFS에 파일 추가해 조각내기

> `repository`에 git LFS가 설치되었다면 이제는 LFS로 조각낼 대용량 파일들을 지정해 주어야 한다. 한 두 개 정도라면 그냥 치면 되겠지만, 그렇지 않을 경우 파일명을 통일하거나 찾기 쉽도록 아예 한 폴더에 담을 것을 추천한다. 
>
> 파일을 지정하는 코드는 다음과 같다.

```shell
$ git lfs track "대용량 파일명.확장자"
```

예시를 들자면 이렇다. 

```shell
$ git lfs track "model_CNN.h5"
$ git lfs track "train_data.json"
```

보다시피 파일 하나당 한 줄의 명령어를 입력해야 하므로 추사할 파일 수가 많을 수록 번거로워진다. 

```shell
Tracking model_CNN.h5
Tracking train_data.json
```

파일이 성공적으로 추가되었을 경우 위와 같은 메시지가 출력되며, `repository` 내에 `.gitattributes`라는 파일이 생성된다. 

![깃 어트리뷰트](https://user-images.githubusercontent.com/58945760/86796998-20791180-c0aa-11ea-8038-e02e847bf1d3.PNG)



### 2.3 `.gitattributes` `add`하기

> 이제 거의 다 됐다! 커다란 파일들도 다 조각냈고, 얼른 add해서 commit하고, 마지막으로 push만 하면 된다. 하지만 그 전에 먼저 앞에서 생성된 `.gitattributes`를 먼저 push 해야 한다. 

```shell
$ git add .gitattributes
$ git commit -m "create .gitattributes"
$ git push origin master
```



### 2.4 전체 파일 `commit`, `push` 하기

> 이제 정말 마지막이다. 전체 소스 코드를 통째로 add하고, commit 후 push한다.

```shell
$ git add .
$ git commit -m "upload source code"
$ git push origin master
```

통상 웹 서비스 소스 코드는 전체 용량이 기가바이트를 넘어서는 일이 많으므로 시간이 오래 걸릴 수 있다. 그렇다고 해서 에러가 나는 것은 아니니 차분히 기다리며 다른 작업을 해보도록 한다. 

또, `commit`이나 `push`를 할 때 갑자기 멈추는 경우도 종종 있는데 이 때는 한 번 더 같은 명령어를 입력했을 때 문제없이 해결되기도 한다. 



### 2.5 `error` 발생 시 `commit` 덮어쓰기

> commit 하려는 repository에 이미 파일이 존재하고 있을 경우(README.md etc), error가 발생할 수도 있다. 그럴 때는 가장 단순한 방법으로 아래의 명령어를 사용해 commit을 덮어쓴다.

```shell
$ git push -f origin master
```



 