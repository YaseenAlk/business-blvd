import { NextFunction, Request, Response, Router } from 'express';
import { Validation } from '../../middleware/Validation';
import { Auth } from '../../middleware/Auth';
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
    this._router.get('/businesses', Auth.enforceSignedIn, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const resp = await UserController.getClaimedBusinesses(req.session.userID);
        res.status(resp.status).json(resp.data).end();
      } catch (error) {
        next(error);
      }
    });
  }

  private _account() {
    // create account
    // POST /api/users
    // {
    //     email: "email@email.com",
    //     username: "username",
    //     password: "password"
    // }
    this._router.post(
      '/',
      Auth.enforceSignedOut,
      Validation.createAccountMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { email, username, password } = req.body;
          const resp = await this._controller.createAccount(email, username, password);
          req.session.userID = resp.userId;
          res.status(200).json(resp).end();
        } catch (error) {
          next(error);
        }
      },
    );

    // edit username or password (probably just email/password...)
    // we chose PUT over PATCH because you can technically use this to replace the whole resource from the user perspective.
    // Also, PATCH requires giving instructions which doesn't quite match this.
    // PUT is also idempotent, as is this function

    // PUT /api/users
    // {
    //     (optional) username: "username",
    //     (optional) email: "email@email.com"
    //     (optional) oldPassword: "oldPassword",
    //     (optional, except if oldPassword is specified) newPassword: "newPassword",
    // }
    this._router.put(
      '/',
      Auth.enforceSignedIn,
      Validation.updateAccountMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { email, username, oldPassword, newPassword } = req.body;
          const { userID } = req.session;
          const result = await this._controller.updateAccount(userID, username, email, newPassword);
          res
            .status(result.status)
            .json({ message: result.message, userId: result.userId, username: result.username })
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    // delete account
    // DELETE /api/users/:id
    //this._router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {});
  }

  private _authentication() {
    // sign in
    // POST /api/users/signin
    // {
    //     username: "username",
    //     password: "password"
    // }
    this._router.post(
      '/signin',
      Auth.enforceSignedOut,
      Validation.signinMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const resp = await this._controller.signIn(req.body.username);
          req.session.userID = resp.userId;
          res.status(200).json(resp).end();
        } catch (error) {
          next(error);
        }
      },
    );

    // sign out
    // POST /api/users/signout
    this._router.post('/signout', Auth.enforceSignedIn, (req: Request, res: Response, next: NextFunction) => {
      try {
        const resp = this._controller.signOut();
        req.session.userID = undefined;
        res.status(200).json(resp).end();
      } catch (error) {
        next(error);
      }
    });

    this._router.get('/loginStatus', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const resp = await this._controller.getLoginStatus(req.session.userID);
        res.status(200).json(resp).end();
      } catch (error) {
        next(error);
      }
    });

    this._router.delete('/', Auth.enforceSignedIn, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const resp = await this._controller.deleteAccount(req.session.userID);
        req.session.userID = undefined;
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

export = new UserRouter().router;
