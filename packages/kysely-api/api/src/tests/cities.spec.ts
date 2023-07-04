import Fastify, { FastifyInstance } from 'fastify';
// TODO: FIXME: imports...
import {
  Cities,
  makeInsertCity,
} from 'packages/kysely-api/kysely-definitions/src';
import { app } from '../app';
import { db } from '../database';

let server: FastifyInstance;

beforeEach(async () => {
  server = Fastify();
  await server.register(app);
});

afterAll(async () => {
  await server.close();
});

describe('cities', () => {
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

    describe('generate and degenerate city', () => {
      let testCity: Cities;

      beforeAll(async () => {
        testCity = await db
          .insertInto('cities')
          .values(makeInsertCity())
          .returningAll()
          .executeTakeFirstOrThrow();
      });

      afterAll(async () => {
        await db
          .deleteFrom('cities')
          .where('id', '=', Number(testCity.id))
          .execute();
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
        const testUsername = 'awww shoot';
        const response = await server.inject({
          method: 'PATCH',
          url: `/cities/${testCity.id}`,
          body: {
            name: testUsername,
          },
        });

        const data = response.json();

        expect(typeof data.city.id).toBe('number');
        expect(data.city.id).toBe(testCity.id);
        expect(data.city.name).toBe(testUsername);
      });

      it('should delete the city', async () => {
        const response = await server.inject({
          method: 'DELETE',
          url: `/cities/${testCity.id}`,
        });

        const data = response.json();

        expect(data.changes).toBe(1);
      });
    });
  });
});
