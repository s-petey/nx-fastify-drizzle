import { Cities, insertCitiesSchema, selectCitiesSchema } from '../lib/cities';
import { generateMock } from '@anatine/zod-mock';

export const makeInsertCity = (cityInfo: Omit<Partial<Cities>, 'id'> = {}) => {
  const fakedCity = generateMock(insertCitiesSchema);
  const cityValues: Omit<Cities, 'id'> = {
    name: cityInfo.name ?? fakedCity.name,
  };

  return cityValues;
};

export const makeSelectCity = (cityInfo: Partial<Cities> = {}) => {
  const fakedCity = generateMock(selectCitiesSchema);

  const cityValues: Cities = {
    id: cityInfo.id ?? fakedCity.id,
    name: cityInfo.name ?? fakedCity.name,
  };

  return cityValues;
};
