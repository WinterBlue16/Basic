# Extra_Start Project using Github

> - 프로젝트 시 Github의 협업 시스템을 활용하여 효율을 높일 수 있다.
> - Github으로 협업하는 데는 여러가지 방법이 있지만,  여기서는 Git 초심자를 대상으로 `Collaborator`와 `branch`를 활용한 가장 간단한 협업 시스템에 대해 설명한다.
> - `master branch` 혹은 원격 저장소의 관리자가 아닌 프로젝트  `collaborator`(협력자)의 관점에서 서술한다.  

## 0. Project를 위한 원격 저장소 생성



## 1. 환경 세팅 

- 

- 뜻을 그대로 해석하면 기부자와 협력자. `Contributor`는 프로젝트의 관리자는 아니지만 한 프로젝트에
**커밋하고 있는 모든 사람**을 지칭
- `Contributor`이라면, 
`Push` 권한은 프로젝트 관리자와 `Collaborator`만이 가지고 있으므로, `Fork`하여 프로젝트를 통째로 복사해온다.
- `Fork`해온 프로젝트에서 `Push`하고 관리한다음, 원래 오리지날 저장소로 `Push`한 내용들 보낼 수 있는데,` Pull request` 통해서 한다.
- `Collaborator`는 프로젝트의 공동 책임자이다. 즉, GitHub의 **push, pull 권한을 모두 가지고 있는 사람**을 뜻한다. 
`Contributor`는 `Pull Request`를 통해 누구나 시도할 수 있지만,`Collaborator`는 프로젝트 관리자가 직접 추가해줘야 얻을 수 있는 권한이다.



## Github Project with Collaborator

#### (1) 프로젝트 관리자가 프로젝트를 생성(repository) 

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_00.JPG?raw=true" style="zoom:80%;" />

#### (2) 프로젝트 관리자가 Settings로 들어가서 Collaborators를 선택

<img src="https://t1.daumcdn.net/cfile/tistory/9944DB4B5BD988A40A" alt="https://hyoje420.tistory.com/41" style="zoom:80%;" />

#### (3) 가운데 검색창에  추가할 Collaborator의 GitHub 아이디를 입력

- 검색창으로 검색 혹은 아이디 입력하고 `[Add collaborator]`버튼을 클릭해서 추가한다.

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_04.JPG?raw=true" alt="04" style="zoom:80%;" />

#### (4) Github 아이디와 연동된 이메일로 초대장 전송

- 버튼을 클릭하면 초대장을 보낼 수 있고, 그 초대장은 각자 계정과 연동된 이메일로 발송 된다.

 <img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_02.jpg?raw=true" style="zoom:80%;" />

#### (5) 초대된 사람은 클릭하거나, 관리자가 보낸 주소로 직접 들어와서 수락

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_05.JPG?raw=true" alt="05" style="zoom: 80%;" />

#### (6) 다음은 레포지토리의 메인화면, master branch의 깃허브 주소를 각자 Clone

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_01.JPG?raw=true" alt="01" style="zoom:80%;" />

#### (7) `git bash` 에서 내 컴퓨터로 master branch를 Clone

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_06.JPG?raw=true" alt="06" style="zoom:80%;" />

#### (8) 내 컴퓨터에 Cloning이 되면서 master branch 생성
<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_07.JPG?raw=true" alt="07" style="zoom:80%;" />

#### (9) 아래와 같은 명령어로  master에서 내가 생성한 임의 branch 명인 [brchB] 로 변경

```shell
$ git checkout -b [branch name]

# 위의 명령어는 아래의 두 명령어를 합한 것
$ git branch [branch name]
$ git checkout [branch name]
```

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_08.jpg?raw=true" alt="08" style="zoom:80%;" />

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_09.jpg?raw=true" alt="09" style="zoom:80%;" />

> - 반드시  다른 원격저장소와 연동된 폴더 안에 
> - 명령어를 사용해서 나만의 브랜치를 만들면, 오른쪽과 같이 `[brchB]`로 변경된 것을 확인할 수 있다.
>   `git checkout`으로 `master`와 나의 `branch`를 이동할 수 있다.

#### (10) 다음과 같이 master branch 아래에 각자의 branch가 생성된 것을 확인

<img src="https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Github_Project_10.jpg?raw=true" alt="10" style="zoom:80%;" />

#### (11) 작업을 하고나서 다음 명령어를 통해서 Commit

> - `git push origin master`를 입력하면 `master`브랜치에 커밋되므로 주의한다. 

```shell
git push origin [내가 만든 브랜치명]
```



## 참고한 자료

- 개인 홈페이지
  - https://hyoje420.tistory.com/41
  - https://victorydntmd.tistory.com/91