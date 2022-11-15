import { Controller, Get, Param, Post } from '@nestjs/common';
import { appService } from './app.appService';
import { credentials } from './datas/credentials';

@Controller()
export class AppController {
  constructor(private readonly appService: appService) {}

  @Get()
  async getUserAccount(): string {
    const refreshToken = await this.appService.getRefreshToken(credentials);
  }

  @Post()
  async getRefreshToken(@Param() params: string[]): Promise<string> {
    return;
  }
}
