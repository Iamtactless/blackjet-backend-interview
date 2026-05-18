import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import type { IUserRepository } from '../../../../user/domain/repositories/user.repository.interface.js';

import { DowngradeMembershipResponseDto } from '../../../presentation/dtos/downgrade-membership.dto.js';

@Injectable()
export class DowngradeMembershipUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<DowngradeMembershipResponseDto> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    throw new Error(
      [
        'Not implemented.',
        'Design the membership, booking, downgrade request, and durable job model.',
        'Then implement the downgrade rules using apps/sec-api as the product reference.',
      ].join(' '),
    );
  }
}

