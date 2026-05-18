import { Controller, Get } from '@nestjs/common';

import { GetHealthUseCase } from '../../application/use-cases/get-health/get-health.use-case.js';
import { HealthResponseDto } from '../dtos/health.dto.js';

@Controller('health')
export class HealthController {
  constructor(private readonly getHealthUseCase: GetHealthUseCase) {}

  @Get()
  async getHealth(): Promise<HealthResponseDto> {
    return this.getHealthUseCase.execute();
  }
}

