import { Users, insertUserSchema, selectUserSchema } from '../lib/users';
import { generateMock } from '@anatine/zod-mock';

export const makeInsertUser = (userInfo: Omit<Partial<Users>, 'id'> = {}) => {
  const fakedUser = generateMock(insertUserSchema);
  const userValues: Omit<Users, 'id'> = {
    cityId: userInfo.cityId ?? fakedUser.cityId,
    name: userInfo.name ?? fakedUser.name,
    email: userInfo.email ?? fakedUser.email,
  };

  return userValues;
};

export const makeSelectUser = (userInfo: Partial<Users> = {}) => {
  const fakedUser = generateMock(selectUserSchema);

  const userValues: Users = {
    id: userInfo.id ?? fakedUser.id,
    cityId: userInfo.cityId ?? fakedUser.cityId,
    name: userInfo.name ?? fakedUser.name,
    email: userInfo.email ?? fakedUser.email,
  };

  return userValues;
};
