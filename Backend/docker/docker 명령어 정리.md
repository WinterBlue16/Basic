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

- docker container 실행하기

```bash
docker ps
docker container start [컨테이너 ID]
```

- docker container 끄기

```bash
docker container stop [컨테이너 ID]
```

- docker 컨테이너 이미지로 만들기

```bash
docker commit [컨테이너 이름] 이미지명:태그명
# ex. docker commit test repository:latest
docker images # 이미지 생성 확인
```

- aws 로그인하기

```bash
aws ecr get-login-password --region [aws 리전] | docker login --username AWS --password-stdin [account ID].dkr.ecr.[aws 리전].amazonaws.com
```

- docker 이미지에 태그 지정하기

```bash
docker tag [이미지 ID] [account ID].dkr.ecr.[aws 리전].amazonaws.com/[ecr repository 이름]:[태그명]
```

- docker ecr에 push

```bash
docker push [account ID].dkr.ecr.[aws 리전].amazonaws.com/[ecr repository 이름]:[태그명]
```

## 기타

위의 명령어가 실행되지 않을 경우(linux alpine 등), 아래의 명령어를 사용하여 설치를 진행합니다.

- curl 설치

```bash
apk --no-cache update
apk --no-cache add curl
```

- aws cli 설치

```bash
pip3 --no-cache-dir install aws cli
```
