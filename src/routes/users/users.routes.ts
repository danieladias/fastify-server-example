import { FastifyPluginCallback } from 'fastify';

import * as controllers from './users.controllers';
import * as schemas from './users.schemas';

const usersRouter: FastifyPluginCallback = (app, _, done): void => {
  app.route({
    method: 'GET',
    url: '/me',
    schema: schemas.getMeSchema,
    handler: controllers.getMe,
  });

  done();
};

export default usersRouter;
