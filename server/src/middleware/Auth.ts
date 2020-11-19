import { NextFunction, Request, Response, Router } from 'express';

export class Auth {
    static enforceSignedIn(req: Request, res: Response, next: NextFunction) {
        if (req.session.userID === undefined) {
            res.status(401).json({message: "You must be signed in to perform this action"}).end();
            return;
        }
    
        next();
    }

    static enforceSignedOut(req: Request, res: Response, next: NextFunction) {
        if (req.session.userID !== undefined) {
            res.status(403).json({message: "You must be signed out to perform this action"}).end();
            return;
        }
    
        next();
    }
}