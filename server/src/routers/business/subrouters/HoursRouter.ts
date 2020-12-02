import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';

class HoursRouter {
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
    GET HOURS ROUTE
    ****************/
    // todo: add validation middleware
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getHours(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET HOURS ROUTE
    ****************/
    // todo: add validation middleware
    this._router.put('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { day, openTime, closeTime } = req.body;
        const result = await this._controller.setHours(businessId, day, openTime, closeTime);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new HoursRouter().router;
