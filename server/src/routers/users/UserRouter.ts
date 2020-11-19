import { NextFunction, Request, Response, Router } from 'express';
import { Validation } from "../../middleware/Validation";
import { Auth } from "../../middleware/Auth";
import UserController from '../../controllers/UserController';

class UserRouter {
    private _router = Router();

    private _controller = UserController;

    get router() {
        return this._router;
      }
  
    get controller() {
        return this._controller;
    }

    constructor() {
        this._account();
        this._authentication();
    }

    private _account() {

        // Get user info
        // GET /api/users/:id
        this._router.get('/:id', (req: Request, res: Response, next: NextFunction) => {

        });

        // create account
        // POST /api/users
        // {
        //     email: "email@email.com",
        //     username: "username",
        //     password: "password"
        // }
        this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
            
        });

        // edit username or password (probably just email/password...)
        // PUT /api/users/:id
        // {
        //     (optional) username: "username",
        //     (optional) password: "password",
        //     (optional) email: "email@email.com"
        // }
        this._router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
            
        });

        // delete account
        // DELETE /api/users/:id
        this._router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
            
        });
    }

    private _authentication() {
        // sign in
        // POST /api/users/signin
        // {
        //     username: "username",
        //     password: "password"
        // }
        this._router.post('/signin', Auth.enforceSignedOut, Validation.signinMiddleware,
            (req: Request, res: Response, next: NextFunction) => {
                try {
                    const resp = this._controller.signIn(req.session, req.body.username);
                    res.status(200).json(resp).end();
                } catch (error) {
                    next(error);
                }
        });

        // sign out
        // POST /api/users/signout
        this._router.post('/signout', Auth.enforceSignedIn,
            (req: Request, res: Response, next: NextFunction) => {
                try {
                    const resp = this._controller.signOut(req.session);
                    res.status(200).json(resp).end();
                } catch (error) {
                    next(error);
                }
        });

        this._router.get('/loginStatus', (req: Request, res: Response, next: NextFunction) => {
            try {
                const resp = this._controller.getLoginStatus(req.session);
                res.status(200).json(resp).end();
            } catch (error) {
                next(error);
            }
        });
    }

    private _subscriptions() {
        /*
        // check following status
        GET /api/businesses/:id/isFollowing

        // follow a business (uses session)
        POST /api/businesses/:id/follow

        // unfollow a business (uses session)
        DELETE /api/businesses/:id/follow

        // get followed businesses (uses session)
        GET /api/businesses/following
        */
    }
}