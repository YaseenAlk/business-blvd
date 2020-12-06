import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';
import { Auth } from '../../../middleware/Auth';
import { Validation } from '../../../middleware/Validation';

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
    this._router.put(
      '/',
      Auth.enforceSignedIn,
      Validation.updateRatingsMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
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
      },
    );

    /***************
    GET RATINGS BY USER
    ****************/
    // we're not using this route anywhere but should it have some validation?
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
