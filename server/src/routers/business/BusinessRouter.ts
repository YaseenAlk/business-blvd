import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../controllers/BusinessController';

class BusinessRouter {
  private _router = Router();

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
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = this._controller.defaultMethod();
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    });

    this._router.get('/hours/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const result = this._controller.getHours();
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new BusinessRouter().router;
