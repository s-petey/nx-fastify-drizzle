import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../database';
import { UsersUpdate } from 'packages/kysely-api/kysely-definitions/src';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/users',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const foundUsers = await db.selectFrom('users').selectAll().execute();

      return { users: foundUsers };
    }
  );

  fastify.post(
    '/users',
    async function (
      request: FastifyRequest<{
        Body: Omit<Partial<UsersUpdate>, 'id'>;
      }>,
      reply: FastifyReply
    ) {
      const { body } = request;
      const email = body?.email;
      const name = body?.name;
      if (typeof email !== 'string')
        throw new Error('Invalid params, missing email');
      if (typeof name !== 'string')
        throw new Error('Invalid params, missing name');

      const setValues: Partial<UsersUpdate> = {};
      if (body.city_id) setValues.city_id = body.city_id;
      setValues.email = email;
      setValues.name = name;

      const createdUser = await db
        .insertInto('users')
        .values(setValues)
        .returningAll()
        .executeTakeFirstOrThrow();

      return { user: createdUser };
    }
  );

  fastify.get(
    '/users/:userId',
    async function (
      request: FastifyRequest<{ Params: { userId: string } }>,
      reply: FastifyReply
    ) {
      const foundUser = await db
        .selectFrom('users')
        .where('id', '=', Number(request.params.userId))
        .selectAll()
        .executeTakeFirst();

      if (typeof foundUser === 'undefined') {
        reply.callNotFound();
        return;
      }

      return { user: foundUser };
    }
  );

  fastify.patch(
    '/users/:userId',
    async function (
      request: FastifyRequest<{
        Body: Omit<Partial<UsersUpdate>, 'id'>;
        Params: { userId: string };
      }>,
      reply: FastifyReply
    ) {
      if (typeof request.params.userId !== 'string')
        throw new Error('Invalid params, missing userId');

      const { body, params } = request;
      const setValues: Partial<UsersUpdate> = {};
      if (body.city_id) setValues.city_id = body.city_id;
      if (body.email) setValues.email = body.email;
      if (body.name) setValues.name = body.name;

      const updatedUser = await db
        .updateTable('users')
        .set(setValues)
        .where('id', '=', Number(params.userId))
        .returningAll()
        .executeTakeFirstOrThrow();

      return { user: updatedUser };
    }
  );

  fastify.delete(
    '/users/:userId',
    async function (
      request: FastifyRequest<{ Params: { userId: string } }>,
      reply: FastifyReply
    ) {
      const result = await db
        .deleteFrom('users')
        .where('id', '=', Number(request.params.userId))
        .executeTakeFirstOrThrow();

      return { changes: Number(result.numDeletedRows) };
    }
  );
}
