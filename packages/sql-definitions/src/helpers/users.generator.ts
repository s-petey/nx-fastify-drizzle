import { Users } from '../lib/users';

export const makeUser = (userInfo: Omit<Partial<Users>, 'id'> = {}) => {
  const userValues: Omit<Users, 'id'> = {
    cityId: userInfo.cityId ?? null,
    name: userInfo.name ?? 'Test User',
    email: userInfo.email ?? 'test@example.com',
  };

  return userValues;
};
