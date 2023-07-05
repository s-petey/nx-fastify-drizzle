import Fastify, { FastifyInstance } from 'fastify';
import { app } from '../app';

let server: FastifyInstance;

beforeEach(() => {
  server = Fastify();
  server.register(app);
});

afterAll(async () => {
  await server.close();
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
