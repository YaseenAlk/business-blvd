import { NextFunction, Request, Response } from 'express';

export class Auth {
  static enforceSignedIn(req: Request, res: Response, next: NextFunction): void {
    const session = req.session;
    if (session.userID === undefined) {
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
