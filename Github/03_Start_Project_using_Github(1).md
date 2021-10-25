# Extra_Start Project using Github

> - 프로젝트 시 Github의 협업 시스템을 활용하여 효율을 높일 수 있다.
> - Github으로 협업하는 데는 여러가지 방법이 있지만,  여기서는 Git 초심자를 대상으로 `Collaborator`와 `branch`를 활용한 가장 간단한 협업 시스템에 대해 설명한다.
> - `master branch` 혹은 원격 저장소의 관리자가 아닌 프로젝트  `collaborator`(협력자)의 관점에서 서술한다.  



## 0. Project를 위한 원격 저장소 생성

> - 팀원 중 한 사람이 자신의  Github 페이지에 프로젝트를 위한 새로운 원격저장소를 생성한다.

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_00.JPG?raw=true" style="zoom:80%;" />



![tempsnip](https://user-images.githubusercontent.com/58945760/72486275-be072d00-384d-11ea-9357-2fae44f1c160.png)

> - 프로젝트 관리자가 생성된 원격저장소의 setting 메뉴로 들어가 Collaborators를 추가
>   1. 가운데 검색창에 추가할 Collaborator의 Github ID를 입력, `Add collaborator` 클릭
>   2. Collaborator의 이메일로 초대장이 발송되고, 수락하면 Collaborator 등록 완료

<img src="https://t1.daumcdn.net/cfile/tistory/9944DB4B5BD988A40A" alt="https://hyoje420.tistory.com/41" style="zoom:80%;" />

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_04.JPG?raw=true" alt="04" style="zoom:80%;" />

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_02.jpg?raw=true" style="zoom:80%;" />



## 1. 환경 세팅 

### 1.1 원격 저장소 주소 복사

> - 우선 `Git Bash`를 실행
> - 원격 저장소의 메인 화면에서 `Clone or download` 클릭, 주소를 복사

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_01.JPG?raw=true" alt="01" style="zoom:80%;" />

> - Git Bash에서 `git clone`을 치고 그 뒤에 복사한 원격 저장소의 주소를 붙여넣기 
> - `master brench` 생성 완료

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_06.JPG?raw=true" alt="06" style="zoom:80%;" />

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_07.JPG?raw=true" alt="07" style="zoom:80%;" />

### 1.2 작업용 brench 생성

> - `master brench`에는 영향을 미치지 않는 작업용 `brench`를 따로 생성한다. 대체로 gitflow를 사용할 경우에는 `master` 외에 개발 전용으로 사용되는 `develop` 브랜치를 생성하고, 그 브랜치에서 기능별로 또다른 브랜치를 만들어 각 팀원이 개발을 진행한다. 

```shell
# 작업용 brench 생성하기
$ git branch [브랜치 이름] 

# 작업용 brench로 이동하기 
$ git checkout [브랜치 이름] # git clone [원격 저장소 url] 후 원격 브랜치와 동일한 브랜치명을 입력할 경우, 해당 브랜치의 로컬 브랜치가 생성됨

# 위의 두 코드를 병합(작업용 brench 생성 후 이동)
$ git checkout -b [생성할 브랜치 이름] [원격 저장소의 해당 브랜치 이름] 

# master 외 다른 브랜치를 clone해 오고 싶을 경우 # 원격 저장소와 브랜치 이름 동일
$ git checkout -t [원격 저장소의 해당 브랜치 이름]

# master 외 다른 특정 브랜치 clone하고 싶을 때 
$ git clone -b [브랜치 이름] --single-branch [저장소 url]
```

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_08.jpg?raw=true" alt="08" style="zoom:80%;" />

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_09.jpg?raw=true" alt="09" style="zoom:80%;" />

> - 위와 같이  작업 위치가`[brchB]`로 변경된 것을 확인할 수 있다.
>   `git checkout`명령어로 `master`와 나의 `branch`를 자유롭게 이동할 수 있다.



### 1.3 작업용 brench 생성 확인

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_10.jpg?raw=true" alt="10" style="zoom:80%;" />

```shell
# 로컬 저장소에 브랜치를 만들었다고 해서 원격 저장소에 반영되지는 않는다! 꼭 push를 해주어야 한다. 
$ git push origin [브랜치 이름]

# 현재 로컬 저장소 내 모든 브랜치 조회
$ git branch -a

# 현재 사용하는 브랜치 확인
$ git branch -v

# 필요 없거나 잘못 만든 브랜치 삭제(로컬 브랜치 한정) # 원격 저장소의 브랜치는 홈페이지에서 직접 삭제
$ git branch -d [브랜치 이름]

# 원격 저장소의 브랜치 삭제
$ git push origin --delete [브랜치 이름]
```



> - 프로젝트 협업을 진행할 준비 완료
> - 작업 후 `git push origin [브랜치 이름]`을 Git Bash에 입력하여 커밋한다. 
> - `git push origin master`를 입력해 `error`를 발생시키지 않도록 주의한다. 



### 1.4 `master brench`에 특정 파일만 커밋하기

> - 프로젝트 진행 중 개별 `brench`에서 작업하던 특정 파일을 `master brench`로 보내고 싶을 때 사용할 수 있다. 
>
>   - 1. `cd [브랜치가 있는 파일]`  
>
>     2. `git checkout master`로 `brench` 상태를 `master`로 전환한다.
>
>     3. `git checkout [해당 파일이 있는 브랜치명] -- [Github의 해당 파일 경로]`
>
>        ※ 파일 경로는 Github의 해당 브랜치의 해당 파일을 클릭한 후, 우측 상단의 `Copy path`버튼으로 복사할 수 있다. 
>
>     4. `git status`로 해당 파일이 `New file`로 떠 있는지 확인한다.
>
>     5. `git restore [해당 파일명]`
>
>     6. `git commit -m "커밋명"`
>
>     7. `git push origin master`

![KakaoTalk_20200120_142534563](https://user-images.githubusercontent.com/58945760/72899248-eec4f600-3d68-11ea-9d8a-62214c6bc9d0.png)



<<<<<<< HEAD
=======
```
```



>>>>>>> 9e269783500832116beecc3c32ee3ce7451c113f


## 참고 자료

- 개인 홈페이지
  - https://hyoje420.tistory.com/41
  - https://victorydntmd.tistory.com/91
  - https://gmlwjd9405.github.io/2018/05/12/how-to-collaborate-on-GitHub-3.html
  - https://blog.outsider.ne.kr/641

