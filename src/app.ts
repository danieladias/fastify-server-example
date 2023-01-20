import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyEnv from '@fastify/env';

import usersRouter from './routes/users/users.routes';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
    }
  },
};

const ENV_OPTIONS = {
  confKey: 'config',
  dotenv: true,
  data: process.env,
  schema,
};

export const build = async (
  opts: FastifyServerOptions = {}
): Promise<FastifyInstance> => {
  const app = await fastify(opts);

  await app.register(fastifyEnv, ENV_OPTIONS);

  // Register routes
  await app.register(usersRouter, {
    prefix: 'api/v1/users',
  });

  return app;
};
