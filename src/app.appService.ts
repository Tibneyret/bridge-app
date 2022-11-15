import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class appService {
  constructor(private readonly httpService: HttpService) {}

  getUserAccount(): string {
    return 'Hello World!';
  }

  getRefreshToken(params): string {
    return this.httpService.post<typeof params>('http://localhost:3000/login');
  }
}
