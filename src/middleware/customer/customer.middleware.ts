import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/* eslint-disable @typescript-eslint/ban-types */
@Injectable()
export class CustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    //TODO: Will right isCustomer check here, may check in header or so else return 403
    Logger.log('checking isCustomer');
    next();
  }
}
