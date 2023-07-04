import Fastify, { FastifyInstance } from 'fastify';
// TODO: FIXME: imports...
import {
  Users,
  makeInsertUser,
} from 'packages/kysely-api/kysely-definitions/src';
import { app } from './app';
import { db } from './database';

describe('GET /', () => {
  let server: FastifyInstance;

  beforeEach(() => {
    server = Fastify();
    server.register(app);
  });

  describe('GET /', () => {
    it('should respond with a message', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/',
      });

      expect(response.json()).toEqual({ message: 'Hello API' });
    });
  });

  describe('GET /users', () => {
    it('should respond with an array of users', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/users',
      });

      const data = response.json();

      expect(data.users).toBeInstanceOf(Array);
    });
  });

  describe('GET /users/{id}', () => {
    it('should respond with a 404', async () => {
      const testId = '1234';
      const response = await server.inject({
        method: 'GET',
        url: `/users/${testId}`,
      });

      expect(response.statusCode).toBe(404);
    });

    describe('generate and degenerate user', () => {
      let testUser: Users;

      beforeAll(async () => {
        testUser = await db
          .insertInto('users')
          .values(makeInsertUser())
          .returningAll()
          .executeTakeFirstOrThrow();
      });

      afterAll(async () => {
        await db
          .deleteFrom('users')
          .where('id', '=', Number(testUser.id))
          .execute();
      });

      it('should find a user', async () => {
        const response = await server.inject({
          method: 'GET',
          url: `/users/${testUser.id}`,
        });

        const data = response.json();

        expect(typeof data.user.id).toBe('number');
        expect(data.user.id).toBe(testUser.id);
      });

      it('should update users name', async () => {
        const testUsername = 'awww shoot';
        const response = await server.inject({
          method: 'PATCH',
          url: `/users/${testUser.id}`,
          body: {
            name: testUsername,
          },
        });

        const data = response.json();

        expect(typeof data.user.id).toBe('number');
        expect(data.user.id).toBe(testUser.id);
        expect(data.user.name).toBe(testUsername);
      });

      it('should delete the user', async () => {
        const response = await server.inject({
          method: 'DELETE',
          url: `/users/${testUser.id}`,
        });

        const data = response.json();

        expect(data.changes).toBe(1);
      });
    });
  });
});
