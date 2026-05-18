import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration.js';
import { HealthModule } from './modules/health/health.module.js';
import { MembershipModule } from './modules/membership/membership.module.js';
import { UserModule } from './modules/user/user.module.js';
import { SharedModule } from './shared/shared.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SharedModule,
    HealthModule,
    UserModule,
    MembershipModule,
  ],
})
export class AppModule {}
