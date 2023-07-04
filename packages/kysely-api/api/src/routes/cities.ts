import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../database';
import { CitiesUpdate } from 'packages/kysely-api/kysely-definitions/src';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/cities',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const foundCities = await db.selectFrom('cities').selectAll().execute();
      return { cities: foundCities };
    }
  );

  fastify.get(
    '/cities/:cityId',
    async function (
      request: FastifyRequest<{ Params: { cityId: string } }>,
      reply: FastifyReply
    ) {
      const foundCity = await db
        .selectFrom('cities')
        .where('id', '=', Number(request.params.cityId))
        .selectAll()
        .executeTakeFirst();

      if (typeof foundCity === 'undefined') {
        reply.callNotFound();
        return;
      }

      return { city: foundCity };
    }
  );

  fastify.patch(
    '/cities/:cityId',
    async function (
      request: FastifyRequest<{
        Body: Omit<Partial<CitiesUpdate>, 'id'>;
        Params: { cityId: string };
      }>,
      reply: FastifyReply
    ) {
      if (typeof request.params.cityId !== 'string')
        throw new Error('Invalid params, missing cityId');

      const { body, params } = request;
      const setValues: Partial<CitiesUpdate> = {};
      if (body.name) setValues.name = body.name;

      const updatedCity = await db
        .updateTable('cities')
        .set(setValues)
        .where('id', '=', Number(params.cityId))
        .returningAll()
        .executeTakeFirstOrThrow();

      return { city: updatedCity };
    }
  );

  fastify.delete(
    '/cities/:cityId',
    async function (
      request: FastifyRequest<{ Params: { cityId: string } }>,
      reply: FastifyReply
    ) {
      const result = await db
        .deleteFrom('cities')
        .where('id', '=', Number(request.params.cityId))
        .executeTakeFirstOrThrow();

      return { changes: Number(result.numDeletedRows) };
    }
  );
}
