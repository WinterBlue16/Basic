## linux ubuntu 기본 환경 구축

> 처음 우분투를 통해 개발 환경을 구축하는 사람을 위한 문서이다. Ubuntu 20.04를 기반으로 작성되었다. 

### 1. 인터페이스, 화면에 익숙해지기

(우분투 화면 캡처)

뭐든 처음 사용하거나 해 보는 것은 멘붕을 선사하기 쉽다. 윈도우에 익숙한 사람은 우분투의 화면만 봐도 머리가 까맣게 되어버리기 십상이다. 그럴 수록 이것저것 눌러보고 클릭해보면서 인터페이스에 익숙해져야 한다. 이게 뭐지? 싶으면 일단 눌러본다. 아니다 싶으면 꺼버리면 된다. 영어라서 멘붕이 온다면 익숙해질 때까지만 한글 모드로 바꿔보자.  중요한 건 익숙해지는 것이다. 탐험한다는 생각으로 이것저것 해보는 것이다. 

 (우분투 터미널 캡처)

익숙해져야 할 것들 중 가장 중요한 것은 우분투 터미널(terminal)이다. 윈도우의 cmd를 생각해보면 된다. 하지만 그것보다 훨씬 깔끔하고, 훨씬 편리하다. 왜 주변 개발자들이 그렇게 우분투가 편하다고 하는지 단번에 이해할 수 있다. 이 참에 명령어까지 정리해두면 두 배로 편해진다. 아래는 기본 명령어이다. 

```shell
$ passwd # 계정 패스워드 변경
$ ls # 현재 디렉토리 내 파일 목록
$ cd .. # 상위 디렉토리로 이동
$ cd [이동하려는 하위 디렉토리명] # 하위 디렉토리로 이동
$ cd ~ # 기본 디렉토리로 이동
```

그리고 앞으로 매우 많이 사용하게 될 명령어이다

```shell
$ sudo apt-get update
$ sudo apt-get upgrade
```



### 2. 네트워크 설정

USB를 통한 설치가 필요하다. 설치는 terminal을 통해 진행한다. 



### 3. 언어 설정(한/영 변환)

문제가 발생할 때 검색은 기본이다. 하지만 영어만으로는 검색에 한계가 있으므로 한/영 변환은 꼭 필요한 요소다. 하지만 우분투에서는 설정을 제대로 해두지 않으면 한/영 키(ALT-R)가 아예 먹히지 않는 상황이 생긴다. 이 때는 설정 탭을 통해 한/영 변환 시 사용할 수 있는 키를 추가해야 한다. 



### 4. Anaconda(miniconda) 설치

```shell
$ sudo wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.9.2-Linux-x86_64.sh
$ bash Miniconda3-py39_4.9.2-Linux-x86_64.sh

yes
```

가상환경도 생성해둔다. 

```shell
$ conda create --name [가상환경 이름] python # 여기서 파이썬을 써주지 않으면 가상환경에 파이썬이 설치되지 않는다! 버전별로 가상환경 생성 가능
$ conda activate [가상환경 이름] # 맨 뒤에 이름을 붙이지 않을 경우 base가 활성화
$ conda deactivate [가상환경 이름] # 가상환경 비활성화
```



### 5. vscode 설치

```shell
$ sudo apt-get install curl
$ sudo sh -c 'curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg'
$ sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
$ sudo apt update
$ sudo apt install code 
$ code
```



### 6. docker 설치

```shell

```



### 7. NVIDIA 드라이버

```Shell
$ sudo apt-get install nvidia-
```

