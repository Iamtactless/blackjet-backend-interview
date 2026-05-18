import 'reflect-metadata';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { APP_CONSTANTS } from './shared/constants/app.constant.js';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APP_CONSTANTS.GLOBAL_PREFIX);

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  await app.listen(port);

  new Logger('Bootstrap').log(
    `Assignment starter listening on http://localhost:${port}/${APP_CONSTANTS.GLOBAL_PREFIX}`,
  );
}

void bootstrap();
