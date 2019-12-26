# CLI

Command Line Interface(명령형 인터페이스)



## 기본 명령어

- `pwd` : 현재 내가 있는 위치를 출력(print working directory)
- `ls` : 현재 위치의 파일 및 폴더 목록을 출력해 보여줌(list)
- `cd [이동할 폴더명]` : 폴더를 변경(change directory)
- `cd ..` : 상위 폴더로 위치 이동
-  `mkdir [새로운 폴더명]` : 새로운 폴더를 생성(make directory)
- `rm [지울 파일명]` : 파일을 삭제(remove)
- `rm -r [지울 폴더명]` : 폴더를 삭제



## Git 관련 명령어

> Add - Commit - Push 플로우를 잘 기억할 것!



- `git --version` : git 버전 체크
- `git init` : 현재 위치한 폴더를 git 관리 대상으로 지정.
- `rm -r .git/` : git 관리 해제
- `git status` : 현재 폴더 상태 관리 현황을 보여줌
- `git add [추가할 파일]`  :  git이 관리하는 파일 추가
- `git config --global user.email "메일주소"` : git 메일 등록
- `git config --global user.name "이름"` : git 이름 등록
- `git log` : git 기록 확인
- `git commit -m "commit 이름"` : 새로운 commit 생성 
- `git log --online` : commit 내역 확인 
- `git checkout [commit 코드]` : 코드 당시로 워프, 과거 상태 확인
-  `git checkout master` : 윗줄 상태에서 현재 시점으로 다시 돌아옴
- `git remote [원격저장소 별명][원격저장소 주소]`: github 원격저장소 설정
- `git remote -v` : 자세한 원격저장소 정보
- `git push [원격저장소 별명] master` : 원격저장소에 git 관리 폴더, 파일 올리기

