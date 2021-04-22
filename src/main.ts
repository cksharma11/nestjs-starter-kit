import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => new BadRequestException(
      errors.map(err => ({
        [err.property]: Object.values(err.constraints)[0],
      })),
    ),
  }));

  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('RAC APIs')
    .setDescription('RAC Service apis')
    .build());

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}

bootstrap();
