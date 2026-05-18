import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';

import { ConfigService } from '../../config/config.service.js';
import * as schema from './schema/index.js';
import { createPostgresClient } from './postgres.js';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DatabaseService.name);

  public pool!: Pool;
  public db!: ReturnType<typeof createPostgresClient>['db'];
  public readonly schema = schema;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const client = createPostgresClient(this.configService.getDatabaseUrl());
    this.pool = client.pool;
    this.db = client.db;

    await this.pool.query('select 1');
    this.logger.log('Connected to Postgres database');
  }

  async onModuleDestroy() {
    await this.pool.end();
    this.logger.log('Postgres database connection closed');
  }
}
