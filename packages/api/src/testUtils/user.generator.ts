import { eq } from 'drizzle-orm';
import { db } from '../database/database';
import { Users, users } from '../database/schema';

export const userGenerate = (userInfo: Omit<Partial<Users>, 'id'> = {}) => {
  const userValues: Omit<Users, 'id'> = {
    cityId: userInfo.cityId ?? null,
    name: userInfo.name ?? 'Test User',
    email: userInfo.email ?? 'test@example.com',
  };

  return db.insert(users).values(userValues).returning().get();
};

export const userDegenerate = (userInfo: Pick<Users, 'id'>) => {
  return db.delete(users).where(eq(users.id, userInfo.id)).run();
};
