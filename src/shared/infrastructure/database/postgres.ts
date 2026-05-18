import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export function createPostgresClient(connectionString: string) {
  const pool = new Pool({
    connectionString,
  });
  const db = drizzle(pool);

  return { pool, db };
}

