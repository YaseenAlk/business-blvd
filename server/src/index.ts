import http from 'http';
import server from './server';
import dotenv from 'dotenv';

// load the environment variables from the .env file
dotenv.config({
  path: '.env',
});

let serverInstance: http.Server;
// // make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  // eslint-disable-next-line no-console
  serverInstance = server.listen(port, () => console.log(`Listening on port ${port} 💻`));
})();

export = serverInstance;
