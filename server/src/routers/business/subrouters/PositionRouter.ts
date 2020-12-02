import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';
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
    // TODO: add validation middleware
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, message } = await this._controller.getPosition(businessId);
        res.status(status).json(message);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET POSITION ROUTE
    ****************/
    // TODO: add validation middleware
    this._router.put('/', Validation.ownsBusiness, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { address, lat, lng } = req.body;
        const { status, message } = await this._controller.setPosition(businessId, address, lat, lng);
        res.status(status).json(message);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new PositionRouter().router;
