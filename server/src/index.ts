import 'reflect-metadata';
import buildServer from './server';
import dotenv from 'dotenv';

// Load the environment variables from the .env file
dotenv.config({
  path: '.env',
});
// // make server listen on some port
(async (port = process.env.APP_PORT || 5000) => {
  const server = await buildServer();

  // catch CTRL+C for server kill
  process.on('SIGINT', async function () {
    // eslint-disable-next-line no-console
    console.log('Server kill command detected. Closing DB Connection...');

    await server.onClose();
    process.exit();
  });

  // eslint-disable-next-line no-console
  server.app.listen(port, () => console.log(`Listening on port ${port} 💻`));
})();
