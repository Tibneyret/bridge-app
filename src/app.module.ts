import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { appService } from './app.appService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [appService],
})
export class AppModule {}
