import { Module } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module.js';

import { UserRepository } from './infrastructure/repositories/user.repository.js';

@Module({
  imports: [SharedModule],
  providers: [
    UserRepository,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
  exports: [UserRepository, 'IUserRepository'],
})
export class UserModule {}

