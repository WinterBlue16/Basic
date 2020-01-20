# Start Project using Github 02

> Github의 협업 시스템을 활용해서 효율적으로 프로젝트를 진행할 수 있다. 이 파일은 프로젝트 과정 중에서도 ['Work Flow'] 에 대한 정리 내용이다.



***Atlassian.com [‘Getting Git Right’ Tutorial - Comparing Workflows]*** :

아틀라시안이라는 회사는 호주 시드니에 기반을 둔 소프트웨어와 협업 도구를 개발하는 기업이다.

그 중에서도 ['Getting Git Right'] 이라는 내용에 기반하여 프로젝트를 진행했다.



상황에 적합한 워크플로우를 선택하기 위한 **일종의 가이드**이며, **4가지 방식**이 정리되어 있다.

1. **Centralized Workflow**
2. **Feature Branch Workflow**
3. **Gitflow Workflow**
4. **Forking Workflow**



## Centralized Workflow

> 말 그대로 하나의 저장소에 집중 된 업무 방식이며, 하나의 중앙 저장소(Master branch)를 사용하고, 모든 변경 내용을 이 저장소에 Commit 한다.



### 작동 원리 :

1. 팀 구성원은 중앙 저장소(Master branch)를 복제(Clone) 하여, 각 컴퓨터의 로컬 저장소를 생성한다.
2. 각자 기능 개발을 완료하면  Master branch에 Commit 한다.
3. 원하는 때 언제든 중앙 저장소와 동기화 할 수 있다.



### 충돌 처리 :

- 항상 **중앙 저장소의 커밋이 기준**이며, 로컬 저장소의 변경 내용을 중앙 저장소에 푸시 할때, 
  커밋 이력과 중앙 저장소 커밋 **충돌 한다면**, Git은 푸시를 받지 않고 **거부**한다.(중앙저장소의 커밋 보호를 위해)

  <img src="https://wac-cdn.atlassian.com/dam/jcr:52e2347e-b8e0-49ab-9530-5d1e9129198e/09.svg?cdnVersion=485" alt="미애의 리베이스 과정" style="zoom:67%;" />

  ```shell
  # error: failed to push some refs to '/path/to/repo.git'
  # hint: Updates were rejected because the tip of your current branch is behind
  # hint: its remote counterpart. Merge the remote changes (e.g. 'git pull')
  # hint: before pushing again.
  # hint: See the 'Note about fast-forwards' in 'git push --help' for details.
  ```

  > 다음과 같이 에러 메시지가 뜬다.



- **<이 때> 문제를 해결하고 싶다면 : **

  - 중앙 저장소의 변경 내용을 먼저 **로컬 저장소**로 가져온다. 자신의 변경 내용을 **재배열(rebase)** 해야한다.
    (다른 팀원이 이미 변경한 내용에 자신의 변경 내용을 덧 붙이는 것이다.)

    

  ![미애의 리베이스 과정](https://wac-cdn.atlassian.com/dam/jcr:25edd772-a30a-475a-a6ca-d1055ae61737/10.svg?cdnVersion=485)

  > 리베이스 하는 과정의 이미지 예시



***정리 하자면, 가장 최근에 저장된 Master branch의 내용을 내가 다시 받고, 내꺼랑 같이 올린다는 의미***



- `git pull` 명령으로 중앙저장소의 변경이력을 내려받고, 아래 명령은 중앙 저장소의 최신 이력을 내려받는 동작과 로컬 저장소의 이력과 **합치는 동작을 한번에** 해준다.

  ```shell
  $ git pull --rebase origin master
  ```

  

- **주의할 점 :** 이 과정은 각자가 다른 기능을 개발 했다면 충돌 나지 않지만, 같은 파일을 서로 수정하고 있었다면 충돌 발생할 수 있다는 문제점이 있다.



## Feature Branch Workflow

> 팀 구성원 간에 소통을 활성화하여 협업 성과를 이끌어 내기 위해 사용하기 좋은 Workflow 이다. 핵심은 각자의 브랜치를 만들어서 따로 작업한다는 것이다. 메인인 코드 저장소(Master Branch)를 중심으로 하위 Branch 들과 지속적 통합(Continuout Integration)을 구현할 수 있다.



### 작동 원리 :

1. 공식적인 변경 이력을 위해서 메인 중앙 저장소인 Master Branch를 사용한다.
2. 하지만 여기에 직접 Commit하지는 않고, 하위 Local Branch에 따로 Commit하면서 작업한다.

![](https://wac-cdn.atlassian.com/dam/jcr:09308632-38a3-4637-bba2-af2110629d56/07.svg?cdnVersion=485)

- **Local Branch를 만들고 Master Branch에 올릴 파일 검토 :**

  ```shell
  $ git checkout master
  $ git pull
  $ git pull origin brchB
  $ git push
  ```

  > 다음과 같이 그냥 merge 명령어를 사용할 수도 있지만, 항상 master branch의 최신 변경 내용을 로컬에 반영 하기위해 `git pull origin brchB` 사용할 수 있다.

  

- `Pull Request` : 

  기능 개발 다 했을 때, `master`에 바로 병합 하는 것이 아니라, `master`에 병합 요청하는 것이다.
  `Pull Request`방법을 통해 브랜치에 대한 팀 구성원들의 토론 참여를 이끌 수 있다.





## Gitflow workflow

>  nvie.com의 빈센트 드리센(Vincent Driessen)이 제안한 것으로, 코드 릴리스 중심으로 더 엄격한 브랜칭 모델을 제시하고 2번 flow 보다 복잡하지만 대형 프로젝트에도 적용할 수 있는 작업 절차이다.



### 작동 원리 :

- 플로우와 마찬가지로 로컬 브랜치에서 작업하고 중앙 저장소에 푸시 하지만, 다른점은 **브랜치의 구조가 다르다.** 
  <img src="https://wac-cdn.atlassian.com/dam/jcr:a9cea7b7-23c3-41a7-a4e0-affa053d9ea7/04%20(1).svg?cdnVersion=485" alt="릴리스 브랜치 이미지" style="zoom:67%;" />





- `Master Branch` : 릴리스 이력 관리 위해 사용한다.
  `Develop Branch` : 기능 개발을 위한 브랜치 병합에 사용한다.
  `Feature(기능) Branch` : 새로운 기능들 만들어 볼 때 사용(디벨롭 브랜치에서 내용을 따온다. 병합때도 디벨롭 브랜치에)
  `Release branch`: 디벨롭 브랜치가 릴리스 할 정도로 수준 높아지면 따로 릴리스 브랜치를 생성해 마스터와 결합한다.



## Forking workflow

>   이 워크플로우는 타 워크플로우와 근본적으로 다르다. 하나의 중앙 저장소가 아니라 개개인 마다 서로 다른 원격 저장소를 운영한다. 



![Forking00](https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Forking00.jpg?raw=true)

> 위 이미지는 @matiassingers의 Repository 중 README.md 파일을 제대로 작성하는 방법을 예시로 가이드 해주는 공간이다.



![Forking01](https://github.com/dannylee93/Images/blob/master/Image%20Analysis%20A.I/Forking01.jpg?raw=true)

> 내가 복제 해오고자 하는 곳에서 Fork 해오면 나의 Repository에 추가 된 것을 확인할 수 있다.



### 작동 원리 :

1. 공식 저장소에서 내 깃허브로 *개인 복제본 저장소(나의 Repository)*를 만든다. 
2. 다른 개발자는 나의 원격 저장소에 `Push` 할 수 있다. 
3. `복제본(Forked Repository)`을 만든 다음, `git clone` 명령으로 내 컴퓨터에 로컬 저장소를 만든다. 
4. 다른 워크플로우처럼 이 로컬 저장소에서 작업을 수행한다.
5. 본인이 복제 저장소에 `Commit` 올린 것을 `Pull Request`를 오리지널 저장소에 요청하면 의견을 주고 받는 형식이 된다.
6. 만약 **프로젝트 관리자(오리지널 중앙 저장소 가지고 있는 사람)**가 복제 저장소에서 풀 리퀘스트를 받은 것을 **반영 하고 싶다면**, 
7. **먼저 자신의 로컬 저장소에 내려 받고**, 공식 저장소의 마스터 브랜치에 반영한다.



## License

#### 원문의 라이센스

Except where otherwise noted, all content is licensed under a [Creative Commons Attribution 2.5 Australia License](https://creativecommons.org/licenses/by/2.5/au/).

#### 번역문의 라이센스

[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)