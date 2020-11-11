import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import MasterRouter from './routers/MasterRouter';
import ErrorHandler from './models/ErrorHandler';

// load the environment variables from the .env file
dotenv.config({
  path: '.env',
});

/**
 * Express server application class.
 */
class Server {
  public app = express();

  public router = MasterRouter;
}

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.use('/api', server.router);

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message,
  });
});

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  // eslint-disable-next-line no-console
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
