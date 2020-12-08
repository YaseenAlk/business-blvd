import { NextFunction, Request, Response, Router } from 'express';
import UpdateController from '../../controllers/UpdateController';
import { Validation } from '../../middleware/Validation';
import { Auth } from '../../middleware/Auth';

class UpdateRouter {
  private _router = Router();

  private _controller = UpdateController;

  get router() {
    return this._router;
  }

  get controller() {
    return this._controller;
  }

  constructor() {
    // GET updates for a particular business
    // GET /api/updates/business/:businessId
    this._router.get(
      '/business/:businessId',
      Validation.getReviewsMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const businessId: string = req.params.businessId;
          const result = await this._controller.getUpdatesFromBusiness(businessId);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    // GET updates for the user currently signed in
    // GET /api/updates/mine
    this._router.get('/mine', Auth.enforceSignedIn, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const userId: string = req.session.userID;
        const result = await this._controller.getUpdatesForUser(userId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    // POST an update as a business owner
    // POST /api/updates
    // {
    //    businessId: "businessId",
    //    content: "update content here"
    // }
    this._router.post(
      '/',
      Auth.enforceSignedIn,
      Validation.postUpdateMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const userId: string = req.session.userID;
          const { businessId, content } = req.body;
          const result = await this._controller.postUpdate(businessId, userId, content);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );
  }
}

export = new UpdateRouter().router;
