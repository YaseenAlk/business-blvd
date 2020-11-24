import path from 'path';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
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
// Hook up the express app instance w/middleware.
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'BusinessBlvd',
    resave: true,
    saveUninitialized: true,
  }),
);
// Connect with the client
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

// make server app handle any route starting with '/api'

// To check if the server is up.
app.get('/heartbeat', (req: Request, res: Response) => {
  res.status(200).send();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// make server app handle any error
app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  if (err !== undefined) {
    res.status(err.statusCode || 500).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  } else {
    next();
  }
});
class Server {
  public app = app;

  public router = MasterRouter;
}

// initialize server app
const server = new Server();
app.use('/api', server.router);

app.get('/*', (req, res) => {
  res.redirect('/');
});

let serverInstance: http.Server;
// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  // eslint-disable-next-line no-console
  serverInstance = server.app.listen(port, () => console.log(`Listening on port ${port} 💻`));
})();

export = serverInstance;
