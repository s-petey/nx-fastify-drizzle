import { InferModel } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const cities = sqliteTable('cities', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
});

export type Cities = InferModel<typeof cities>;
export type InsertCity = InferModel<typeof cities, 'insert'>; // insert type
// export type ReturningCity = ReturnTypeOrValue<typeof cities>; // insert type
