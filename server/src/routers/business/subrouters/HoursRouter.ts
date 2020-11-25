import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../..//controllers/business/BusinessController';

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
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, data } = this._controller.getHours(businessId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET HOURS ROUTE
    ****************/
    this._router.put('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { day, openTime, closeTime } = req.body;
        const { status, data } = this._controller.setHours(businessId, day, openTime, closeTime);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new HoursRouter().router;
