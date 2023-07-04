import { Cities } from '../lib/cities';

export const makeInsertCity = (cityInfo: Omit<Partial<Cities>, 'id'> = {}) => {
  const cityValues: Omit<Cities, 'id'> = {
    name: cityInfo.name ?? 'Some Name',
  };

  return cityValues;
};

export const makeSelectCity = (cityInfo: Partial<Cities> = {}) => {
  const cityValues: Cities = {
    id: cityInfo.id ?? 112233,
    name: cityInfo.name ?? 'Some Name',
  };

  return cityValues;
};
