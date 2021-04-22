import { HttpException } from '@nestjs/common';

export const throwHttpException = (message, code) => {
  throw new HttpException({
    message: message,
  }, code);
};