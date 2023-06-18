import { InferModel } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  cityId: int('city_id'),
});

export const cities = sqliteTable('cities', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
});

export type Users = InferModel<typeof users>;
export type InsertUser = InferModel<typeof users, 'insert'>; // insert type
// export type ReturningUser = ReturnTypeOrValue<typeof users>; // insert type
