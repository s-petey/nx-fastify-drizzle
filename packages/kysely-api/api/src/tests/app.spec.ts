import Fastify, { FastifyInstance } from 'fastify';
import { app } from '../app';

let server: FastifyInstance;

beforeEach(async () => {
  server = Fastify();
  await server.register(app);
});

afterAll(async () => {
  await server.close();
});

describe('root', () => {
  it('GET / should respond with a message', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.json()).toEqual({ message: 'Hello API' });
  });
});
