import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppLogger } from './app.logger';

/* eslint-disable @typescript-eslint/ban-types */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly appLogger: AppLogger) {
  }

  use(req: Request, res: Response, next: Function) {
    const date = new Date();
    this.appLogger.log(`${req.method} ${req.originalUrl} ${date.toUTCString()}`);
    next();
  }
}
