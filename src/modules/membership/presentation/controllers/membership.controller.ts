import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { DowngradeMembershipUseCase } from '../../application/use-cases/downgrade-membership/downgrade-membership.use-case.js';
import { DowngradeMembershipResponseDto } from '../dtos/downgrade-membership.dto.js';

@Controller('memberships')
export class MembershipController {
  constructor(
    private readonly downgradeMembershipUseCase: DowngradeMembershipUseCase,
  ) {}

  @Post(':userId/downgrade')
  @HttpCode(HttpStatus.OK)
  async downgradeMembership(
    @Param('userId') userId: string,
  ): Promise<DowngradeMembershipResponseDto> {
    return this.downgradeMembershipUseCase.execute(userId);
  }
}

