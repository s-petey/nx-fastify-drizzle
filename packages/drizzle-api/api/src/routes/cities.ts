import { eq } from 'drizzle-orm';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { db } from '../database';
// TODO: FIXME IMPORTS
// import { Cities, cities } from 'packages/drizzle-api/drizzle-definitions/src';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  Cities,
  cities,
  insertCitiesSchema,
} from '../../../drizzle-definitions/src'; //' drizzle-definitions/src';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/cities',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const foundCities = await db.select().from(cities).all();
      return { cities: foundCities };
    }
  );

  fastify.post(
    '/cities',
    async function (
      request: FastifyRequest<{
        Body: Omit<Partial<Cities>, 'id'>;
      }>,
      reply: FastifyReply
    ) {
      const parsedParams = insertCitiesSchema.parse(request.body);

      const createdCity = db
        .insert(cities)
        // @ts-expect-error Drizzles typings are seemingly wrong here...
        .values(parsedParams)
        .returning()
        .get();

      return { city: createdCity };
    }
  );

  fastify.get(
    '/cities/:cityId',
    async function (
      request: FastifyRequest<{ Params: { cityId: string } }>,
      reply: FastifyReply
    ) {
      const foundCity = await db
        .select()
        .from(cities)
        .where(eq(cities.id, Number(request.params.cityId)))
        .get();

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
        Body: Omit<Partial<Cities>, 'id'>;
        Params: { cityId: string };
      }>,
      reply: FastifyReply
    ) {
      if (typeof request.params.cityId !== 'string')
        throw new Error('Invalid params, missing cityId');

      const { body, params } = request;
      const setValues: Partial<Cities> = {};
      if (body.name) setValues.name = body.name;

      const updatedCity = db
        .update(cities)
        .set(setValues)
        .where(eq(cities.id, Number(params.cityId)))
        .returning()
        .get();

      return { city: updatedCity };
    }
  );

  fastify.delete(
    '/cities/:cityId',
    async function (
      request: FastifyRequest<{ Params: { cityId: string } }>,
      reply: FastifyReply
    ) {
      return await db
        .delete(cities)
        .where(eq(cities.id, Number(request.params.cityId)))
        .run();
    }
  );
}
