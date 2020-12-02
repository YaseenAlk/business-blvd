import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';

class SocialMediaRouter {
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
    GET SOCIAL ROUTE
    ****************/
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, data } = this._controller.getSocialMedia(businessId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET SOCIAL ROUTE
    ****************/
    this._router.put('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { twitter, facebook, instagram } = req.body;
        const { status, data } = this._controller.setSocialMedia(businessId, twitter, facebook, instagram);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new SocialMediaRouter().router;
