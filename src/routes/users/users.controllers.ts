import { RouteHandlerMethod } from 'fastify';

export const getMe: RouteHandlerMethod = (_, reply) => {
  return reply.send('Hello World!');
};
