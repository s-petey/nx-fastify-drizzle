import Fastify, { FastifyInstance } from 'fastify';
// TODO: FIXME IMPORTS
import {
  UsersInsert,
  makeInsertUser,
  users,
} from 'packages/drizzle-api/drizzle-definitions/src';
import { app } from './app';
import { db } from './database';
import { eq } from 'drizzle-orm';

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
    let testUser: UsersInsert;

    beforeAll(async () => {
      testUser = await db
        .insert(users)
        .values(makeInsertUser())
        .returning()
        .get();
    });

    afterAll(async () => {
      await db.delete(users).where(eq(users.id, testUser.id)).run();
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
      expect(data.lastInsertRowid).toBe(testUser.id);
    });
  });
});
