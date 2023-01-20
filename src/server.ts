import { build } from './app';

// Fire up the server
void (async () => {
  const app = await build({ logger: true });

  try {
    await app.listen({
      port: app.config.PORT,
    });

    console.log(app.printRoutes());
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
})();
