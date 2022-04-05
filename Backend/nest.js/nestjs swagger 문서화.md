## nestjs swagger 문서화

> nestjs 프로젝트에서 swagger를 사용할 때 문서화를 진행하는 방법에 대해 설명합니다.

- swagger 문서화란, 해당 swagger를 처음 보는 개발자도 어떤 API가 어떤 기능을 하는지 쉽게 이해할 수 있도록 swagger에 이런저런 부연설명을 덧붙이는 것입니다.

### 필요성

> swagger 문서화를 하는 이유에 대해 설명합니다.

- 개발을 하는 데 있어 협업은 필수적입니다. 익숙한 사람과만 협업을 하게 되리란 보장도 없을 뿐더러, 새로운 사람과 갑작스레 함께 작업을 해야 할 때도 있을 것입니다. 그럴 때 개발한 API 문서화를 잘 해놓는다면, 소통의 효율을 높일 수 있음은 물론 개발 속도 향상에도 도움을 줄 것입니다. 

### swagger docs description

**main.ts**

```javascript
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



### API description

**service.controller.ts**

```javascript
import { ApiOperation } from '@nestjs/swagger';

...
@ApiOperation({
    tags: ['API에 붙일 태그'],
    summary: 'API 한 줄 요약 설명',
})
...
```



### parameter/query description

**service.controller.ts**

```javascript
import { ApiQuery, ApiParam } from '@nestjs/swagger';

...
@ApiQuery({
   name: '쿼리가 될 value 명',
   enum: '(enum일 경우)enum 명',
   description: 'value에 대한 설명',
})

@ApiParam({
    name: '파라미터가 될 value 명',
    description: 'value에 대한 설명'
})
...
```



### response example

```
```

