import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import http from 'http';
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

// To check if the server is up.
server.app.get('/heartbeat', (req: Request, res: Response) => {
  res.status(200).send();
});

server.app.use(
  session({
    secret: process.env.SESSION_SECRET || 'BusinessBlvd',
    resave: true,
    saveUninitialized: true,
  }),
);

server.app.use(logger('dev'));
server.app.use(express.json());
server.app.use(express.urlencoded({ extended: true }));
server.app.use(cookieParser());

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  if (err !== undefined) {
    res.status(err.statusCode || 500).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  } else {
    next();
  }
});

let serverInstance: http.Server;
// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  // eslint-disable-next-line no-console
  serverInstance = server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

export = serverInstance;
