# MySQL utf-8 설정하기

## 1. my.ini 경로 확인

실행창에서 services.msc를 입력->MySQL80 찾아 마우스 오른쪽 클릭, [속성] -> 주소창의 경로 확인

## 2. C:/ProgramData 열기

실행창에 %programData%를 입력-> MySQL 폴더 -> MySQL Server 8.0 폴더-> my.ini 

## 3. my.ini 수정하기

아래 코드를 복사해 my.ini에 붙여넣기. 띄어쓰기나 공백, 줄바꿈은 상관없다.

```
[client] 
default-character-set=utf8 

[mysqld] 
character-set-client-handshake = FALSE 
init_connect="SET collation_connection = utf8_general_ci" 
init_connect="SET NAMES utf8" 
character-set-server = utf8 

[mysql] default-character-set=utf8 

[mysqldump] default-character-set = utf8
```

수정 권한이 없다는 메시지가 나올 경우 my.ini 파일을 복사해 바탕화면이나 다른 경로에 놓은 후 수정, 그 후 다시 MySQL Server 8.0 안에 붙여넣기하여 원래 파일을 덮어쓴다. 

수정 작업이 끝났으면 MySQL을 종료했다가 다시 시작한다. 

## 4. MySQL workbench에서 설정 확인하기

좌측 상단 MANAGEMENT 아래 Status and System Variables 클릭 -> System Variables 탭 -> 검색창에 character 검색-> Value 속성값이 utf8/utf8mb4인지 확인.

위의 값이 잘 바뀌었다면 설정 완료.



### 참고 자료

- http://www.koreaoug.org/dbms/8354
- https://nroses-taek.tistory.com/241
- http://june1977family.blogspot.com/2017/02/workbench-63-utf-8.html

