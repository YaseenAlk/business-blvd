import { NextFunction, Request, Response, Router } from 'express';

export class Validation {
    
    // auth
    static usernameDefined(req: Request, res: Response, next: NextFunction) {
        const username = req.params.username || req.body.username;
        if (username === undefined) {
            res.status(400).json({message: "Must specify a username"}).end();
            return;
        }
        next();
    }

    static passwordDefined(req: Request, res: Response, next: NextFunction) {
        const password = req.body.password;
        if (password === undefined) {
            res.status(400).json({message: "Must specify a password"}).end();
            return;
        }
        next();
    }

    static emailDefined(req: Request, res: Response, next: NextFunction) {
        const email = req.body.email;
        if (email === undefined) {
            res.status(400).json({message: "Must specify an email"}).end();
            return;
        }
        next();
    }

    static usernameValid(req: Request, res: Response, next: NextFunction) {
        const username = req.params.username || req.body.username;
        // for now, shouldn't be empty. can be expanded to have specific length and stuff later
        // its OK to get undefined inputs as long as usernameDefined is also inserted as middleware
        if (username !== undefined && username.length === 0) {
            res.status(400).json({message: "Must specify a username"}).end();
            return;
        }
        next();
    }

    static passwordValid(req: Request, res: Response, next: NextFunction) {
        // could be expanded to check for password safety (e.g. repeated characters, too simple, etc)
        const password = req.body.password;
        // for now, shouldn't be empty. can be expanded to have specific length and stuff later
        // its OK to get undefined inputs as long as passwordDefined is also inserted as middleware
        if (password !== undefined && password.length === 0) {
            res.status(400).json({message: "Must specify a password"}).end();
            return;
        }
        next();
    }

    static emailValid(req: Request, res: Response, next: NextFunction) {
        const email = req.body.email;

        // allows anything of the form anystring@anystring.anystring
        let validatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email !== undefined && (email.length === 0 || !validatorRegex.test(email))) {
            res.status(400).json({message: "Must specify a valid email"}).end();
            return;
        }
        next();
    }

    // db-dependent auth middleware (TODO for future iterations: make more efficient by only making one DB call?)
    static usernameExists(req: Request, res: Response, next: NextFunction) {
        const user = UserRepository.findOneByUsername(req.params.username || req.body.username);
        if (user === undefined) {
            res.status(404).json({message: "Username not found"}).end();
            return;
        }
        next();
    }

    static passwordCorrect(req: Request, res: Response, next: NextFunction) {
        const username = req.body.username;
        const password = req.body.password;
        const account = UserRepository.findOneByUsername(username);
        if (password !== account.password) {
            // we keep it intentionally vague for security reasons
            res.status(401).json({message: "Incorrect username/password combination"}).end();
            return;
        }

        next();
    }

    static signinMiddleware = [Validation.usernameDefined, Validation.passwordDefined, Validation.usernameValid, Validation.passwordValid, Validation.usernameExists, Validation.passwordValid, Validation.passwordCorrect];

}