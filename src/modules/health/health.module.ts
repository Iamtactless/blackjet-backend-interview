import { Module } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module.js';

import { GetHealthUseCase } from './application/use-cases/get-health/get-health.use-case.js';
import { HealthController } from './presentation/controllers/health.controller.js';

@Module({
  imports: [SharedModule],
  controllers: [HealthController],
  providers: [GetHealthUseCase],
})
export class HealthModule {}

