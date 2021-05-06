## RESTful API 설계, 구현하기

> 다음 문서는 디프만 9기에서 백엔드를 담당하며 API를 설계 구현하는 과정에 대해 정리한 문서이다. 

### 0. API와 RESTful API란? 

- API(Application Programming Interface)

  ![API, 쉽게 알아보기](http://blog.wishket.com/wp-content/uploads/2019/10/API-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0.png)

  **단순하게 설명하면, 애플리케이션을 만드는 데 도움을 주는, 일종의 키보드와 같은 도구라고 할 수 있다.**  거의 모든 애플리케이션에는 그 애플리케이션을 개발하며 여러 기능을 테스트하는 개발자와, 그 애플리케이션을 서비스로서 이용하고 요청을 보내는 사용자, 그리고 이러한 요청들을 만족시키기 위한 데이터를 담고 있는 데이터베이스가 존재한다. API는 이러한 상황에서 사용자 혹은 개발자가 원활히 데이터를 주고받을 수 있도록 일종의 표준 양식을 제공하고, 그에 맞는 형식으로 필요한 데이터를 제공한다. 이 덕분에 모든 접속이 표준화되고, 기계/운영체제와 상관없이 누구나 동일한 정보를 얻는 것이 가능하다. 

  그 외에도 API는 서버와 데이터베이스의 수문장 역할을 하며 허용된 사람들에게만 접근할 수 있는 권한을 부여한다. API의 유형은 크게 3가지로 나뉘며 아래와 같다. 

  

  1. private API 

     회사 외부에 공개되지 않는 API로, 회사의 개발자가 자체 제품, 서비스를 개선하기 위해 내부적으로 설계한 것이다. 회사 내부에서 관련자들에게만 공유되며, 제 3자의 노출을 철저히 막는다.

  2. public API

     Open API라고도 불리며, 모두에게 공개되는 API. 누구나 제한 없이 API를 사용할 수 있다는 것이 특징이다.

  3. partner API

     private API와 public API의 중간에 있다고 할 수 있는 API다. 기업이 데이터 공유에 동의하는 특정인들만 사용할 수 있게 한 API로, 비즈니스 관계에서 사용되며 파트너 회사 간 소프트웨어를 통합할 때 사용되곤 한다.

   

- REST(REpresentational State Transfer)

  

- RESTful API

  

- django REST framework



![Django REST Framework](https://www.django-rest-framework.org/img/logo.png) 





 ### ※ 참고 자료

- https://jamanbbo.tistory.com/43