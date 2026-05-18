import { pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  createdAt: text('created_at').notNull(),
});

export type UserRecord = typeof users.$inferSelect;
export type NewUserRecord = typeof users.$inferInsert;
