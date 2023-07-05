import { InferModel } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';
import { cities } from './cities';

export const users = sqliteTable('users', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  cityId: int('city_id').references(() => cities.id),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export type UsersSelect = z.infer<typeof selectUserSchema>;
export type UsersInsert = z.infer<typeof insertUserSchema>;

export type Users = InferModel<typeof users>;
// export type InsertUser = InferModel<typeof users, 'insert'>; // insert type
// export type ReturningUser = ReturnTypeOrValue<typeof users>; // insert type
