import { Module } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module.js';
import { UserModule } from '../user/user.module.js';

import { DowngradeMembershipUseCase } from './application/use-cases/downgrade-membership/downgrade-membership.use-case.js';
import { ProcessScheduledDowngradesUseCase } from './application/use-cases/process-scheduled-downgrades/process-scheduled-downgrades.use-case.js';
import { MembershipController } from './presentation/controllers/membership.controller.js';

@Module({
  imports: [SharedModule, UserModule],
  controllers: [MembershipController],
  providers: [DowngradeMembershipUseCase, ProcessScheduledDowngradesUseCase],
})
export class MembershipModule {}

