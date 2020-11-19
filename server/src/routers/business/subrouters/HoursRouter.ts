import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/BusinessController';

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
    // GET HOURS
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const businessExists = this._controller.businessExists(id);
        if (businessExists) {
          const result = this._controller.getHours(id);
          res.status(200).json(result);
        } else {
          res.status(404).json(`No business found with id ${id}`);
        }
      } catch (error) {
        next(error);
      }
    });

    // POST HOURS (set them)
    // Probably an entire object required? {sun: {close, open}, ...}
  }
}

export = new HoursRouter().router;
