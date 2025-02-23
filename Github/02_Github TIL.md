# Github TIL

## 1. TIL?

> - TIL은 **T**oday **I** **L**earned의 줄임말로 개발자 사이에서 매일 자신이 학습한 내용을 commit(기록)하는 것
> - github, bitbucket, gitlab과 같은 원격 저장소에서 제공하는 1commit-1grass의 흥미 요소 제공

## 2. TIL 세팅

### (1) Git으로 프로젝트 관리 시작 : `git init`

- 자신이 앞으로 학습할 내용을 기록할 `TIL`폴더를 하나 생성한다. 이때 해당 폴더는 최상단에 생성한다.

- `git bash`에서 `TIL`폴더로 이동한 이후에 아래의 명령어로 `git`관리를 시작한다.

  ```shell
  $ git init # 폴더 내에 .git 파일을 만들어 파일 트래킹을 시작한다.
  $ echo "# [원격 저장소 이름]" >> README.md # README 생성
  $ $ git branch -M master
  ```

### (2) Commit을 위한 Staging : `git add`

- 현재 코드 상태의 스냅샷을 찍기 위한 파일 선택(==Staging Area에 파일 추가)

  ```shell
  $ git add [파일 이름] # .은 모든 변경 사항을 staging area로 올림
  $ git add [변경사항이 포함된 폴더 이름] # 폴더 내 모든 변경사항을 한 commit에 묶을 수 있다.
  ```

### (3) 버전 관리를 위한 스냅샷 저장 : `git commit`

- 현재 상태에 대한 스냅샷을 `commit`하여, 버전 관리를 진행한다.

  ```shell
  $ git commit -m "커밋 메시지"
  $ git commit -a -m "커밋 메시지" # 위의 add .와 commit을 한 번에 할 수 있는 코드
  ```

### (4) 새로운 저장소에 폴더 연결하기 : `git clone`

- Github 계정을 만들고 처음으로 원격 저장소를 생성한 후, 작업이나 프로젝트에 따라 다른 원격 저장소도 자연스레 만들게 된다. 새로운 저장소와 연동되는 `master`폴더를 만들어 준다.

```shell
$ git clone [연동시키고 싶은 저장소 경로]
```

![1](https://user-images.githubusercontent.com/58945760/72899827-21232300-3d6a-11ea-8188-e988c80527c6.PNG)

### (5) 원격 저장소 정보 추가 : `git remote`

- Github 원격(remote) 저장소(repository)를 생성하고 `TIL`폴더와 연결한다.

- 새로운 원격 저장소가 추가될 때만 입력한다.

- 저장소별로 새로운 폴더를 만들어 연결하는 것도 가능하다.

  ```shell
  $ git remote add origin [github 원격 저장소 주소]
  ```

### (6) 원격 저장소로 코드 `git push`

- 최종적으로 Github 원격 저장소에 push 한다.

```shell
$ git puch origin master
```

### (7) 그 외 명령어

- 현재 `git`의 상태를 조회 `git status`

  ```shell
  $ git status
  ```

- 버전 관리 이력을 조회

  ```shell
  $ git log
  ```

- `git` 설정(user.name & user.email) : **최초 1회 설정**

  ```shell
  $ git config --global user.name "John Kang"
  $ git config --global user.name "hphk.john@gmail.com"
  ```

- `.gitignore` 생성 : 갱신 이력에 포함할 필요 없는 파일을 지정한다.

  ```shell
  $ touch .gitignore
  ```

- 현재 위치 내 파일 조회

  ```shell
  $ ls -a
  ```

## 3. `README.md` 파일 생성

> 원격(remote) 저장소(repositiory)에 대한 정보를 기록하는 마크다운 문서. 일반적으로 해당 프로젝트를 사용하기 위한 방법 등을 기재한다.

### (1) `README.md` 파일 생성

- `README.md`파일을 `TIL`폴더(최상단)에 생성한다. 이름은 반드시 **README.md**로 설정한다.

  ```shell
  $ touch README.md
  ```

### (2) (자신만의) TIL 원칙에 대한 간단한 내용 추가

- 마크다운 작성법 pdf에서 배우고 실습한 내용을 토대로 `README.md`파일을 작성한다.
- 형식은 자유롭게 작성하되 마크다운 문법(의미론적)을 지켜서 작성한다.

### (3) 저장 후 버전관리 : `add`, `commit`, `push`

- 작성이 완료되면 아래의 명령어를 통해 commit 이력을 남기고 원격 저장소로 push한다.

  ```shell
  $ git add README.md
  $ git commit -m "add README.md"
  $ git push origin master
  ```

### (4) 원격 저장소 삭제

- 특정 위치에 있는 원격 저장소를 삭제하고 싶을 때 사용한다. 정확히는 삭제와 함께 git과의 연결을 끊는다고 생각하면 된다. 때문에 아래의 코드를 사용하여도 github의 저장소에는 아무 영향이 없다.

```shell
$ git remote rm origin
```

## 4. 추가 학습 내용

### (1) 추가 내용 관리

- `TIL` 폴더 내에서 학습을 원하는 내용의 폴더를 생성하고 파일들을 생성한 후 작업을 진행한다.

  ```shell
  $ mkdir python
  ```

### (2) 변경 사항을 저장하고, 원격저장소로 옮긴다.

- 업데이트가 완료되면 아래의 명령어를 통해 commit 이력을 남기고 원격 저장소로 push한다.

  ```shell
  $ git add .
  $ git commit -m "학습 내용 추가"
  $ git push origin master
  ```

### (3) Colab, VScode와 연동

<img src="https://user-images.githubusercontent.com/58945760/74128920-b145e100-4c21-11ea-8022-2a9a99bcdf54.png" alt="colab_cover" style="zoom:50%;" />

![visualstudio_code-card](https://user-images.githubusercontent.com/58945760/74128834-7774da80-4c21-11ea-9e07-6c94d685549c.png)

> `github`는 Colab, VScode와 연동이 가능하다.
>
> - colab은 작업 중 바로 `github`와 연동해 `bash`을 킬 필요 없이 바로 `commit`할 수 있다.
> - VScode 역시 저장소 안의 폴더를 작업 영역에 추가해두면 터미널을 활용해 바로바로 `commit`할 수 있다.

###

## 5. git 오류 및 기타 문제 해결 모음

> `git add`, `commit`, `push`를 하던 도중 파일 크기나 `commit` 순서가 꼬이는 문제 등으로 오류가 발생할 수 있다. 오류는 여러 가지 원인으로 발생할 수 있고, 같은 오류 메시지가 뜨더라도 상황이 다를 수 있으므로 오류 해결 코드와 더불어 상황도 기록하기로 한다.

### (1) git에 올릴 파일이 너무 큰 경우

> 오류 발생 화면

![오류 발생 메시지](https://user-images.githubusercontent.com/58945760/77646004-1160ce80-6fa7-11ea-8b92-a9dc3cb731c7.PNG)

- DACON 코드와 함께 2GB가 넘는 data(train, test, sample_submission)를 저장소에 `push`하려다 생긴 오류이다.
- 위의 메시지에도 표시되어 있듯이 일반적인 `Github`의 저장소 한도는 100MB이다. 통상적으로 `Markdown` 파일이나 `ipynb` , `py` 파일은 크기가 크지 않지만, 이미지나 대회용 data의 경우 용량이 큰 것들이 존재하므로 데이터를 `push`하기 전에 확인이 필요하다.
- 이미 `commit`이 되어버린 상태였지만 최근 `commit`을 취소한 후(해당 명령어는 해당 아래 참조), data 파일을 `master`폴더에서 지웠으면 간단히 해결할 수 있는 문제였다. 하지만 갑작스레 발생한 `error`에 당황한 나머지 파일부터 지우고 그대로 새로운 `commit`을 해버리는 바람에 문제가 더 꼬이고 말았다.

### (2) 앞의 commit이 제대로 push 되지 못해 commit 자체를 할 수 없는 경우

- 새롭게 `commit`을 한다고 해서 먼젓번의 `commit`(대용량 파일 때문에 제대로 `push`되지 못한 `commit`)이 취소되는 것은 아니다!
- 선택적으로 `push`를 하는 방법이 있을 수도 있겠지만 당시 내가 아는 방법은 모든 `commit`을 한번 `push`하는 방법(`git push origin master`)뿐이었다. 당연히 위의 `commit` 부분에서 계속 걸려 위와 동일한 에러가 반복적으로 발생했다.
- 나는 먼저 에러가 발생한 기존 `commit`을 취소하기로 했다. 다음은 가장 최근 `commit`을 취소하는 명령어이다.([참조 페이지](https://beagle-dev.tistory.com/192))

```shell
$ git reset HEAD^ # 가장 최근의 commit을 취소
```

- 그리고 다시 `push`를 시도했지만, `pull`을 먼저 하라는 메시지에 따라 `pull`을 했다. 하지만 다음과 같은 에러가 발생했다.

![오류 발생 메시지2](https://user-images.githubusercontent.com/58945760/77649022-6fdc7b80-6fac-11ea-9c44-19734d99c254.PNG)

- 추적되지 않는(`untracked`)이 파일이 존재하며, 이 파일들을 지우거나 이동하라는 메시지이다. 나는 [서치한 페이지](http://vezi95.blogspot.com/2016/05/git-pull.html)를 참고하여 해결했다.

```shell
$ git add -A # untracked 파일 모두 추가
$ git stash # add, commit된 사항들을 모두 저장, 워킹 디렉토리를 깨끗한 상태로 되돌린다
```

- 사실 이건 어찌어찌 오류가 나지 않도록 한 것이지 해결이라고 보기는 어렵다. `add` 명령어로 파일들을 추가한 것과 `stash`명령어로 워킹 디렉토리(`add`, `commit`한 파일들이 `push`되기 전 존재하는 작업 장소)를 깨끗이 한 것까지는 좋았는데 `stash`명령어의 쓰임을 잘 몰라 적용하지 못했다. 덕분에 나는 새로 추가할 파일들을 다른 폴더에 복사해 두었다가 다시 `add`, `commit`하는 반복작업을 해야 했다.
- 제대로 된 해결방법은 다음과 같다.

```shell
$ git add -A
$ git stash
$ git stash pop # stash에 저장했던 내용을 다시 워킹 디렉토리에 적용
$ git commit -m "커밋 메시지"
$ git push origin master
```

- 보다 더 간단한 방법도 있다. 다음 명령어는 위의 오류 메시지에서 나왔던 추적되지 않는(`untracked`) 파일들을 제거해 준다. ([참고 페이지](<[https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Stashing%EA%B3%BC-Cleaning](https://git-scm.com/book/ko/v2/Git-도구-Stashing과-Cleaning)>))

```shell
$ git clean -d -f -f
```

### (3) git pull and merge

> 발생 화면

![github 에러](https://user-images.githubusercontent.com/58945760/107847360-39128c80-6e2e-11eb-9ca6-578fb9db455f.PNG)

- git pull origin master를 할 때 종종 위와 같은 화면이 뜨는데, [검색 페이지](https://medium.com/javascript-in-plain-english/problem-with-git-merge-please-enter-a-commit-message-to-explain-why-this-merge-is-necessary-854757988c17)에 따르면 발생 원인은 다음과 같았다.

  - `github` 페이지에서 직접 git 저장소의 파일을 수정/삭제/생성했다. (`push` 완료됨)
  - 그런데 이 변경 사항을 로컬 저장소에 pull 하지 않은 상태로, 로컬 저장소에서 작업을 하던 내용을 `commit`하려고 시도했다.(`add`, `commit` 완료됨)

  결국 두 저장소 간에 변경 사항이 제대로 반영이 안되어 충돌이 일어난 게 문제. 이 화면은 일종의 편집기 같은 것으로 `merge`(충돌 제거를 위한 병합 처리) 메시지를 입력할 수 있는 공간이다. 이 화면에서 빠져나올 수 있는 방법은 다음과 같다.

  1. `merge` 메시지 입력하지 않을 시
     1. `Esc` 키+ ':', 'q' 차례로 입력 : 자동으로 메시지가 입력되면서 merge 가 진행된다.
  2. `merge` 메시지 입력 시
     1. 'i' 입력 : 메시지 입력 공간으로 이동
     2. merge 메시지 입력
     3. `Esc` 키 + ':', 'q' 차례로 입력
     4. `Enter` 누르기

### (4) git add/commit 취소

```shell
$ git reset HEAD # 모든 add 취소
$ git reset --hard HEAD^ # 가장 최근 commit 자체를 완전 삭제
```

### (5) git 파일 변경내용 원래대로 되돌리기

```bash
$ git reset --head # 변경사항 전체 되돌리기
$ git checkout --[변경내용을 되돌릴 파일명] # 일부 파일의 변경사항만 되돌리기
```

### (6) git branch 이름 변경 후 원격 저장소와 연결하기

```bash
$ git branch -m [새로운 로컬 브랜치 이름] # 로컬 브랜치 이름 변경
$ git push -u origin [브랜치 이름] # 로컬 브랜치와 원격 브랜치 이름을 모두 바꾼 후 적용
```

### (7) fork한 로컬 저장소 최신 상태로 유지하기

**fork란?**

- 원격 저장소를 사용자의 깃허브 계정에 복사합니다. 원격 저장소의 이름과 동일한 이름의 저장소(생성된 브랜치도 동일합니다!)가 내 저장소 목록에 생기게 됩니다.
- 여러 팀원이서 한 저장소에서 작업을 할 때 유용하게 쓰이며, 소스 코드 수정 후 원격 저장소로 pull request를 생성해 다른 팀원들이 수정한 내용을 확인할 수 있도록 합니다.

- fork한 원래 저장소에서 계속 다른 내용이 추가되고 변경될 수 있으므로, 내 저장소도 해당 수정 사항을 늘 반영하여 업데이트되도록 할 필요가 있습니다. 이럴 때 사용하는 것이 아래의 upstream 브랜치입니다.

```bash
$ git remote add upstream [fork한 원격 저장소 주소] # upstream branch 만들기
$ git fetch upstream # 원본 소스코드 변경 내용을 로컬에 내려받기
$ git merge upstream/[최신 상태를 유지하고 싶은 브랜치 명] # 변경내용 반영하기
$ git pull origin upstream [최신 상태를 유지하고 싶은 브랜치 명] # fetch + merge
$ git push origin [최신 상태를 유지하고 싶은 브랜치 명]

$ git pull upstream/[원격 저장소 브랜치 명] # 새로운 branch 생성 후 해당 브랜치 최신 상태로 만들기
$ git checkout upstream/[새로운 브랜치 명]
$ git checkout -b [새로운 브랜치 명]

$ git remote rm upstream # upstream 브랜치 삭제
```

### (8) commit 기록 확인

```bash
$ git log # commit 기록 확인 # 모든 브랜치의 commit 기록을 보여줌
$ git log -p # commit 기록 확인 # 파일별 상세 변경 내역 보여줌
$ git show [commit id] # 해당 commit의 파일별 상세 변경 내역 보여줌
$ git show HEAD # 가장 최근 commit의 파일 변경 내역 보여줌
```

### (9) 특정 commit만 다른 branch에 적용/merge 하기

- 해당 기능이 필요한 예시 상황은 아래와 같습니다.
  1. develop 브랜치에서 feature 브랜치를 따서 추가 기능 개발을 진행하고 있는데, 이전에 발견하지 못했던 버그를 발견해 수정
  2. 해당 버그가 develop 브랜치와 공통된 부분이라 해당 브랜치에도 적용해야 함
  3. 하지만 추가 기능 개발이 많이 진행된 상태라 코드가 많이 달라졌음
  4. 추가로 해당 기능이 개발 서버에 정식으로 추가가 될지 안 될지 아직 결정이 안 된 상태임(...)

```shell
$ git log # 적용하고 싶은 commit의 id를 확인 # commit message 참고
$ git checkout [특정 commit만 반영하고 싶은 브랜치] # commit 적용할 branch로 이동
$ git cherry-pick [반영하고 싶은 commit id] # commit 반영
$ git push origin [특정 commit만 반영하고 싶은 브랜치] # 원격 브랜치에 적용
```

### (10) git clone 주소 확인

- 본인이 clone한 저장소가 fork한 것인지, 원본 저장소인지 확인하고 싶을 때 사용할 수 있습니다.

```bash
$ git remote -v
```

### (11) 한 개의 브랜치만 clone 한 후 다른 브랜치 추가하기

```bash
$ git remote set-branches --add origin "추가하고 싶은 원격 브랜치 명"
$ git fetch origin "추가하고 싶은 원격 브랜치 명":"추가할 새로운 로컬 브랜치 명"
```

### (12) git add 전 파일 변경/수정 부분 확인하기

- 이 부분은 5번과 함께 보면 좋습니다.

```shell
$ git status # 변경된 파일 현황 확인
$ git diff [파일명] # 해당 파일의 변경 사항 확인
```

### (13) 변경사항 임시 저장하고 checkout하기

```shell
$ git stash # 변경 사항을 임시 저장
$ git checkout [브랜치명]
```

### (14) 임시 저장된 변경 사항 한번에 삭제하기

```shell
$ git stash clear # 임시 저장된 내역 모두 삭제
```

### (15) terminal에서 local branch끼리 merge하기

- 이 방법은 실수로 merge할 원격 브랜치를 삭제했을 경우 local에서 유용하게 사용할 수 있습니다.

```shell
$ git checkout [병합할 베이스 브랜치명]
$ git merge [병합하고 싶은 브랜치명]
```

### (16) 여러 commit 병합하기

- 가장 최신에 push한 commit들을 이전의 commit과 합칠 수 있습니다.
- 이전의 commit에 병합하는 것은 가능하나, 최신의 commit을 기준으로 병합하려고 하면 오류가 발생합니다.

```shell
$ git rebase -i HEAD~병합하고 싶은 커밋 개수
$ git rebase -i HEAD~2 # 최신 커밋부터 2개의 커밋 병합
```

- 위의 명령어를 입력한 후에는 vi 창이 뜹니다. 이곳에서 병합, 편집할 커밋을 설정할 수 있습니다. 각 커밋 앞에는 default로 pick이 쓰여있습니다.
- 병합할 커밋들의 경우 pick을 s로 바꾸어 주고, :wq으로 저장합니다.
- 저장 후에는 병합 커밋의 메시지도 수정 가능합니다. 위와 동일하게 커밋 메시지를 수정할 경우에는 :wq로 저장해줍니다.
- 모든 변경사항이 적용된 후, 아래 명령어로 브랜치에 push 해줍니다.

```shell
$ git push -f origin [push하고 싶은 브랜치명]
```
