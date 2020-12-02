import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';

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
    // todo: validation middleware
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getBothRatingsAndAverages(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET USER RATINGS
    ****************/
    // todo: validation middleware
    this._router.put('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { safetyRating, serviceRating } = req.body;
        const { userId } = req.session;
        const result = await this._controller.setRatings(businessId, userId, safetyRating, serviceRating);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    GET RATINGS BY USER
    ****************/
    // todo: validation middleware
    this._router.get('/:userId', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId, userId } = req.params;
        const result = await this._controller.getBothRatingsByUser(businessId, userId);
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

export = new RatingsRouter().router;
