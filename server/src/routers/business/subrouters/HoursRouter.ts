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
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const { status, data } = this._controller.getHours(id);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET HOURS ROUTE
    ****************/
    this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const { day, openTime, closeTime } = req.body;
        const { status, data } = this._controller.setHours(id, day, openTime, closeTime);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new HoursRouter().router;
