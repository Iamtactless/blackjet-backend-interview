import { eq } from 'drizzle-orm';
import { Inject, Injectable } from '@nestjs/common';

import { DatabaseService } from '../../../../shared/infrastructure/database/database.service.js';
import { users } from '../../../../shared/infrastructure/database/schema/index.js';
import { User } from '../../domain/entities/user.entity.js';
import { IUserRepository } from '../../domain/repositories/user.repository.interface.js';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('DatabaseService')
    private readonly databaseService: DatabaseService,
  ) {}

  async findById(userId: string): Promise<User | null> {
    const [row] = await this.databaseService.db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    return row ? User.fromDb(row) : null;
  }
}
