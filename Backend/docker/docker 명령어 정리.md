# docker image에 aws 설정하기

<aside>
💡 docker 명령어를 정리합니다.
## 들어가기 전에

- 아래 내용은 로컬에서 docker를 실행할 때를 기준으로 합니다.
- 사용한 이미지는 Ubuntu입니다.
- sudo가 설치되어 있지 않습니다.

## docker 준비

### 1. vim

```bash
# vim 설치
apt-get update
apt-get install nano
apt-get install vim
```

### 2. pip

```bash
apt-get install python3-pip
```

### 3. aws cli

- 공식 문서([링크](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html))를 참조해주세요.
- curl 설치

```bash
apt-get install -y curl
```

- unzip 설치

```bash
apt-get install unzip
```

- aws cli 설치

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
```

