import { Express } from 'express';
import 'express-session';

declare module 'express' {
  export interface Request {
    session: Express.Session & {
      userID: string;
    };
  }
}
