import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { appService } from './app.appService';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [appService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getUserAccount()).toBe('Hello World!');
    });
  });
});
