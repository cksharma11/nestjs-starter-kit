import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiConfigService } from './apiConfig.service';

import { ApiResponse } from '@nestjs/swagger';
import { API_DOCS } from '../constants/api.docs';

@Controller('/api')
export class ApiConfigController {
  constructor(private readonly apiConfigService: ApiConfigService) {
  }

  @Get('/config')
  @ApiResponse({ status: HttpStatus.OK, description: API_DOCS.API_CONFIG_RESPONSE })
  async getApiConfig()  {
    return await this.apiConfigService.getApiConfig();
  }
}
