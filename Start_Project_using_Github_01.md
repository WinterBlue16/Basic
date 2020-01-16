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

> - `master brench`에는 영향을 미치지 않는 작업용 `brench`를 따로 생성한다.

```shell
# 작업용 brench 생성하기
$ git brench [브랜치 이름]

# 작업용 brench로 이동하기
$ git checkout [브랜치 이름]

# 위의 두 코드를 병합(작업용 brench 생성 후 이동)
$ git checkout -b [브랜치 이름]
```

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_08.jpg?raw=true" alt="08" style="zoom:80%;" />

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_09.jpg?raw=true" alt="09" style="zoom:80%;" />

> - 위와 같이  작업 위치가`[brchB]`로 변경된 것을 확인할 수 있다.
>   `git checkout`명령어로 `master`와 나의 `branch`를 자유롭게 이동할 수 있다.



### 1.3 작업용 brench 생성 확인

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_10.jpg?raw=true" alt="10" style="zoom:80%;" />

> - 프로젝트 협업을 진행할 준비 완료
> - 작업 후 `git push origin [브랜치 이름]`을 Git Bash에 입력하여 커밋한다. 
> - `git push origin master`를 입력하면 `master`브랜치에 커밋되므로 주의한다. 



## 참고 자료

- 개인 홈페이지
  - https://hyoje420.tistory.com/41
  - https://victorydntmd.tistory.com/91