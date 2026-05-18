import { User } from '../entities/user.entity.js';

export interface IUserRepository {
  findById(userId: string): Promise<User | null>;
}

