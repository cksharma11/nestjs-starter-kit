import { Logger } from '@nestjs/common';

export class AppLogger extends Logger {
  error(message: string, trace: string) {
    super.error(message, trace);
  }

  log(message: any, context?: string) {
    super.log(message, context);
  }

  warn(message: any, context?: string) {
    super.warn(message, context);
  }

  debug(message: any, context?: string) {
    super.debug(message, context);
  }
}