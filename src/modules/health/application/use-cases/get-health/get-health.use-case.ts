import { Inject, Injectable } from "@nestjs/common";
import { sql } from "drizzle-orm";

import { DatabaseService } from "../../../../../shared/infrastructure/database/database.service.js";

import { HealthResponseDto } from "../../../presentation/dtos/health.dto.js";

@Injectable()
export class GetHealthUseCase {
  constructor(
    @Inject("DatabaseService")
    private readonly databaseService: DatabaseService,
  ) {}

  async execute(): Promise<HealthResponseDto> {
    await this.databaseService.db.execute(sql`select 1`);

    return {
      ok: true,
      database: "connected!",
    };
  }
}
