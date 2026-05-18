import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

type AppConfiguration = {
  app: {
    port: number;
  };
  database: {
    url: string;
  };
};

@Injectable()
export class ConfigService {
  constructor(private readonly nestConfigService: NestConfigService) {}

  get<T = unknown>(key: string): T {
    return this.nestConfigService.get<T>(key, { infer: true }) as T;
  }

  getDatabaseUrl(): string {
    const url = this.get<AppConfiguration['database']['url']>('database.url');
    return url;
  }
}
