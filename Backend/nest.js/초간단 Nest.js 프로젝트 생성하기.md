## 초간단 Nest.js 프로젝트 생성하기

> Nest.js 프로젝트를 생성하고 기본 세팅하는 법을 정리한 문서입니다. 



### 1. Nest.js 설치

> Nest.js 및 기타 필요한 구성요소들을 설치합니다.

```bash
$ npm i -g @nestjs/cli
```



### 2. Nest.js 프로젝트 생성하기

> Nest.js 프로젝트를 생성하고 기초적인 구성을 시작합니다.

#### 2.1. 새로운 프로젝트 생성 

```bash
$ nest new [프로젝트명]
```

- 새로운 프로젝트를 생성하면 package manager를 선택합니다. 
- 많이 활용되는 것은 yarn/npm인데, npm 선택을 권장합니다. 

#### 2.2. 전체 디렉토리 구조

프로젝트 생성 후 전체적인 디렉토리 구조는 아래와 같습니다.

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--qWbf42zr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/wyhqmlwtvj4hroxq73o3.png)



### 3. 새로운 controller, service 생성

- 프로젝트를 생성하면 src 이하에 appController와 appService, appModule이 생성됩니다. 
- 그냥 appController와 appService로 개발을 진행할 수도 있지만, 통상적으로 기능별로 새로운 디렉토리를 생성하고 그 디렉토리 내에 별도의 controller와 service를 생성합니다.

```bash
$ nest g co # controller # 입력한 이름으로 새로운 디렉토리가 생성
$ nest g s # service # 입력한 이름으로 생성된 디렉토리 하위에 service로 저장
```

- 새로운 controller는 자동으로 appModule에 추가됩니다.



### 4. DB 연결하기

> 여기서는 typeORM을 사용하여 DB와 연결합니다. 

#### 4.1. postgres 



### 5. DB 생성 후 migration 하기

> 생성한 entity를 로컬 DB 혹은 기타 DB에 migration합니다. 

```bash
$ yarn typeorm migration:generate -n [migration 파일 이름] # DB 변경사항 migration 파일로 생성
$ yarn typeorm migration:run # migration 파일을 읽어 프로젝트에 연결된 DB에 반영 
$ yarn typeorm migration:revert # 이전에 실행된 migration 되돌리기
```



### 6. swagger 적용하기

- 설치

```bash
$ npm install --save @nestjs/swagger swagger-ui-express
```

- main.js 변경

```js
main.ts

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example') // swagger 문서 제목 설정
    .setDescription('The cats API description') // swagger 문서 간단한 설명
    .setVersion('1.0') // swagger 버전
    .addTag('cats') // tag 설정
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```



### 7. 기타 tip

- service.ts 작성 중 함수가 반복된다면 따로 추출합니다. 통상적으로는 같은 파일(service.ts) 내 상단에 함수를 만들어놓고 this.함수명을 통해 불러옵니다.
