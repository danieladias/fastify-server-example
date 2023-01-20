import 'fastify';

declare module 'fastify' {
  export interface FastifyInstance {
    config: {
      PORT: number;
    };
  }
}
