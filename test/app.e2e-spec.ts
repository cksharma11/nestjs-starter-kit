import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ApiConfigService } from '../src/apiConfig/apiConfig.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const apiConfigService = {
    getApiConfig: () => ({ id: 'id', name: 'name' }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(ApiConfigService)
      .useValue(apiConfigService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/api/config (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/config')
      .expect(200)
      .expect({ data: { id: 'id', name: 'name' }, statusCode: 200 });
  });
});
