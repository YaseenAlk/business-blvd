import { NextFunction, Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

export class Auth {
  static async enforceSignedIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    const session = req.session;
    if (session.userID === undefined || !(await UserRepository.verifyId(session.userID))) {
      res.status(401).json({ message: 'You must be signed in to perform this action' }).end();
      return;
    }
    next();
  }

  static enforceSignedOut(req: Request, res: Response, next: NextFunction): void {
    const session = req.session;
    if (session.userID !== undefined) {
      res.status(403).json({ message: 'You must be signed out to perform this action' }).end();
      return;
    }
    next();
  }
}
