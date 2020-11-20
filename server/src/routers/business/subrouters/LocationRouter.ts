import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';

class LocationRouter {
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
    GET LOCATION ROUTE
    ****************/
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const { status, data } = this._controller.getLocation(id);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET LOCATION ROUTE
    ****************/
    this._router.put('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const { address, lat, lng } = req.body;
        const { status, data } = this._controller.setLocation(id, address, lat, lng);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new LocationRouter().router;
