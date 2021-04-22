import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable @typescript-eslint/ban-types */
@Injectable()
export class TracingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    req.headers['traceId'] = uuidv4();
    next();
  }
}
