import { Module } from '@nestjs/common';

import { ConfigService } from './config/config.service.js';
import { DatabaseService } from './infrastructure/database/database.service.js';

@Module({
  providers: [
    ConfigService,
    DatabaseService,
    {
      provide: 'ConfigService',
      useExisting: ConfigService,
    },
    {
      provide: 'DatabaseService',
      useExisting: DatabaseService,
    },
  ],
  exports: [ConfigService, DatabaseService, 'ConfigService', 'DatabaseService'],
})
export class SharedModule {}

