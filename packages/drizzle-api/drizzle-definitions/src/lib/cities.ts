import { InferModel } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const cities = sqliteTable('cities', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
});

export const insertCitiesSchema = createInsertSchema(cities);
export const selectCitiesSchema = createSelectSchema(cities);

export type CitiesInsert = z.infer<typeof insertCitiesSchema>;
export type CitiesSelect = z.infer<typeof selectCitiesSchema>;

export type Cities = InferModel<typeof cities>;
// export type InsertCity = InferModel<typeof cities, 'insert'>; // insert type
// export type ReturningCity = ReturnTypeOrValue<typeof cities>; // insert type
