import { Users } from '../lib/users';

export const makeInsertUser = (userInfo: Omit<Partial<Users>, 'id'> = {}) => {
  const userValues: Omit<Users, 'id'> = {
    city_id: userInfo.city_id ?? 112234,
    name: userInfo.name ?? 'Some Name',
    email: userInfo.email ?? 'some_name@test.com',
  };

  return userValues;
};

export const makeSelectUser = (userInfo: Partial<Users> = {}) => {
  const userValues: Users = {
    id: userInfo.id ?? 112233,
    city_id: userInfo.city_id ?? 112234,
    name: userInfo.name ?? 'Some Name',
    email: userInfo.email ?? 'some_name@test.com',
  };

  return userValues;
};
