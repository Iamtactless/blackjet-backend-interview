import type { UserRecord } from '../../../../shared/infrastructure/database/schema/index.js';

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly createdAt: Date,
  ) {}

  static fromDb(row: UserRecord): User {
    return new User(
      row.id,
      row.email,
      row.firstName,
      row.lastName,
      new Date(row.createdAt),
    );
  }
}

