import 'module-alias/register';
import 'reflect-metadata';
import path from 'path';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import MasterRouter from './routers/MasterRouter';
import ErrorHandler from './models/ErrorHandler';
// Database connection
import { getConnectionManager, ConnectionOptions } from 'typeorm';
import { User } from './models/User';

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
export class Server {
  public app = app;

  public router = MasterRouter;

  public onClose: () => void = () => ({});
}

// initialize server app
const server = new Server();
app.use('/api', server.router);

app.get('/*', (req, res) => {
  res.redirect('/');
});

const config: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DB_URL || 'postgres://username:password@host:port/database',
  synchronize: process.env.DB_SYNCHRONIZE ? process.env.DB_SYNCHRONIZE.toLowerCase() === 'true' : true,
  logging: process.env.DB_LOGGING ? process.env.DB_LOGGING.toLowerCase() === 'true' : false,
  entities: [User],
  ssl: true,
  extra: {
    ssl: {
      // unsafe to turn this off for production, but it's the only way to connect to the DB locally
      rejectUnauthorized: process.env.PRODUCTION || false,
    },
  },
};

export default (): Promise<Server> => {
  // eslint-disable-next-line no-console
  console.log('Connecting to DB...');
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create(config);
  return connection
    .connect()
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('DB Connection established');
      server.onClose = async () => {
        await connection.close();
      };
      return server;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(`Error connecting to DB: ${e}`);
      return server;
    });
};
