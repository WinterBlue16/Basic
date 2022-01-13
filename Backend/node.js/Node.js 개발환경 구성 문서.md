## :green_apple: Node.js 개발환경 구성 문서

> Mac OS에서 Node.js 개발환경을 구성하는 방법을 설명한 문서입니다. 

### 1. nvm 설치

> node의 버전 관리를 도와주는 nvm을 설치합니다. 공식 홈페이지를 참고하여 설치를 진행합니다.

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash # 설치
$ nvm --version # 버전 확인
```



### 2. node 설치

> 사용할 버전의 node를 설치합니다. 

```bash
$ nvm install "설치할 node 버전" # ex. nvm install 10.19.0
$ node -v # node 버전 확인
```



### 3. node 버전 변경 방법

> 여러 버전의 node를 필요에 따라 변경하여 사용할 수 있습니다. 

```bash
$ nvm install "설치할 node 버전" # 새로운 버전의 node 설치
$ nvm list # 현재 설치되어 있는 node 버전 확인
$ nvm use "사용할 node 버전" # node 버전 변경 # ex. nvm use 12.16.8
```

