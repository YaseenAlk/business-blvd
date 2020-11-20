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
    GET BOTH RATINGS
    ****************/
    // this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
    //   try {
    //     const { id } = req.params;
    //     const { status, data } = this._controller.getBothRatings(id);
    //     res.status(status).json(data);
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    /***************
    GET USER RATINGS
    ****************/
    // /:id
    /***************
    SET USER RATINGS
    ****************/
    // /:id
    // {safety?: null | number , service?: null | number }
  }
}

export = new RatingsRouter().router;
