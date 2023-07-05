import Fastify, { FastifyInstance } from 'fastify';
// TODO: FIXME IMPORTS
import {
  CitiesInsert,
  makeInsertCity,
  cities,
} from 'packages/drizzle-api/drizzle-definitions/src';
import { app } from '../app';
import { db } from '../database';
import { eq } from 'drizzle-orm';

let server: FastifyInstance;

beforeEach(() => {
  server = Fastify();
  server.register(app);
});

describe('cities', () => {
  afterAll(async () => {
    await server.close();
  });

  it('GET /cities should respond with an array of cities', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/cities',
    });

    const data = response.json();

    expect(data.cities).toBeInstanceOf(Array);
  });

  describe('GET /cities/{id}', () => {
    it('should respond with a 404', async () => {
      const testId = '1234';
      const response = await server.inject({
        method: 'GET',
        url: `/cities/${testId}`,
      });

      expect(response.statusCode).toBe(404);
    });

    describe('create and delete', () => {
      let testCity: CitiesInsert;

      afterAll(async () => {
        await db.delete(cities).where(eq(cities.id, testCity.id)).run();
      });

      it('should create a city', async () => {
        const tempCity = makeInsertCity();
        const response = await server.inject({
          method: 'POST',
          url: `/cities`,
          body: {
            name: tempCity.name,
          },
        });

        const data = response.json();

        expect(typeof data.city).toBe('object');
        testCity = data.city;

        expect(typeof data.city.id).toBe('number');
      });
    });

    describe('generate and degenerate city', () => {
      let testCity: CitiesInsert;

      beforeAll(async () => {
        testCity = await db
          .insert(cities)
          .values(makeInsertCity())
          .returning()
          .get();
      });

      afterAll(async () => {
        await db.delete(cities).where(eq(cities.id, testCity.id)).run();
      });

      it('should find a city', async () => {
        const response = await server.inject({
          method: 'GET',
          url: `/cities/${testCity.id}`,
        });

        const data = response.json();

        expect(typeof data.city.id).toBe('number');
        expect(data.city.id).toBe(testCity.id);
      });

      it('should update cities name', async () => {
        const testCityname = 'awww shoot';
        const response = await server.inject({
          method: 'PATCH',
          url: `/cities/${testCity.id}`,
          body: {
            name: testCityname,
          },
        });

        const data = response.json();

        expect(typeof data.city.id).toBe('number');
        expect(data.city.id).toBe(testCity.id);
        expect(data.city.name).toBe(testCityname);
      });

      it('should delete the city', async () => {
        const response = await server.inject({
          method: 'DELETE',
          url: `/cities/${testCity.id}`,
        });

        const data = response.json();

        expect(data.changes).toBe(1);
        expect(data.lastInsertRowid).toBe(testCity.id);
      });
    });
  });
});
