import { ValidatorOptions } from '@nestjs/common/interfaces/external/validator-options.interface';
import { ValidationError } from 'class-validator';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}