import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';
import { Auth } from '../../../middleware/Auth';
import { Validation } from '../../../middleware/Validation';

class PositionRouter {
  private _router = Router({ mergeParams: true });

  private _controller = BusinessController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    /***************
    GET POSITION ROUTE
    ****************/
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getPosition(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET POSITION ROUTE
    ****************/
    this._router.put(
      '/',
      Auth.enforceSignedIn,
      Validation.updatePositionMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { businessId } = req.params;
          const { address, lat, lng } = req.body;
          const result = await this._controller.setPosition(businessId, address, lat, lng);
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

export = new PositionRouter().router;
