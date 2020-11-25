import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../..//controllers/business/BusinessController';

class RatingsRouter {
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
    GET ALL RATINGS
    ****************/
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, data } = this._controller.getBothRatings(businessId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET USER RATINGS
    ****************/
    this._router.put('/:userId', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId, userId } = req.params;
        const { safetyRating, serviceRating } = req.body;
        const { status, data } = this._controller.setRatings(businessId, userId, safetyRating, serviceRating);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    GET RATINGS BY USER
    ****************/
    this._router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId, userId } = req.params;
        const { status, data } = this._controller.getBothRatingsByUser(businessId, userId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new RatingsRouter().router;
