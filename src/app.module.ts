import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApiConfigController } from './apiConfig/apiConfig.controller';
import { ApiConfigService } from './apiConfig/apiConfig.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { HealthController } from './health/health.controller';
import { AppLogger } from './middleware/logger/app.logger';
import { CustomerMiddleware } from './middleware/customer/customer.middleware';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './interceptor/timeout.interceptor';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TracingMiddleware } from './middleware/tracing/tracing.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [
    ApiConfigController,
    HealthController,
  ],
  providers: [
    ApiConfigService,
    AppLogger,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TracingMiddleware)
      .forRoutes('*')
      .apply(LoggerMiddleware)
      .forRoutes('*')
      .apply(CustomerMiddleware)
      .forRoutes('/api/customer/*');
  }
}
