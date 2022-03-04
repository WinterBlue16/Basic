## 초간단 Nest.js 프로젝트 생성하기

> Nest.js 프로젝트를 생성하고 기본 세팅하는 법을 정리한 문서입니다. 



### 1. Nest.js 설치

> Nest.js 및 기타 필요한 구성요소들을 설치합니다.

```bash
$ npm i -g @nestjs/cli
```



### 2. Nest.js 프로젝트 생성하기

> Nest.js 프로젝트를 생성하고 기초적인 구성을 시작합니다. 

```bash
$ nest new [프로젝트명]
```



### 3. 새로운 controller, service 생성

```bash
$ nest g co # controller
$ nest g s # service
```



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
main.tsJS

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

