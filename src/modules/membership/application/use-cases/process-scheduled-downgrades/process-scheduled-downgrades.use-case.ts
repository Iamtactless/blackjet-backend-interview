import { Injectable } from '@nestjs/common';

@Injectable()
export class ProcessScheduledDowngradesUseCase {
  async execute(): Promise<void> {
    throw new Error(
      [
        'Not implemented.',
        'Design a durable async job model and implement scheduled downgrade processing here.',
      ].join(' '),
    );
  }
}

