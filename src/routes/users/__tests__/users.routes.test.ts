import { FastifyInstance } from 'fastify';

import { build } from '../../../app';

describe('test get me', () => {
  let app: FastifyInstance;

  // TODO: Should we split this into a jest environment global instance?
  beforeAll(async () => {
    app = await build({ logger: true });
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return hello world', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${app.config.BASE_URL}/v1/users/me`,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Hello World!');
  });
});
