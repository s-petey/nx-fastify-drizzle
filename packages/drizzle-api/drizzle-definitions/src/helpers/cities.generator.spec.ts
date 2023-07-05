import { insertCitiesSchema, selectCitiesSchema } from '../lib/cities';
import { makeInsertCity, makeSelectCity } from './cities.generator';

describe('cities.generator', () => {
  describe('makeCity', () => {
    it('generates an insert city', () => {
      const fakeCity = makeInsertCity();

      expect(insertCitiesSchema.safeParse(fakeCity).success).toBeTruthy();
    });

    it('should not generate an id', () => {
      const fakeCity = makeInsertCity();

      // @ts-expect-error accessing non describe attribute
      expect(fakeCity.id).toBeUndefined();
    });
  });

  describe('makeSelectCity', () => {
    it('generates an existing city', () => {
      const fakeCity = makeSelectCity();

      expect(selectCitiesSchema.safeParse(fakeCity).success).toBeTruthy();
    });

    it('should generate an id', () => {
      const fakeCity = makeSelectCity();

      expect(typeof fakeCity.id).toBe('number');
    });
  });
});
