import { Injectable } from '@nestjs/common';
import { ApiConfigResponseDto } from './dto/apiConfigResponseDto';

@Injectable()
export class ApiConfigService {
  async getApiConfig() {
    const config = new ApiConfigResponseDto();
    config.id = 'random-id';
    config.name = 'random name';
    return config;
  }
}
