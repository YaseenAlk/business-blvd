import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';

class FollowersRouter {
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
    GET FOLLOWERS ROUTE
    ****************/
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, data } = this._controller.getFollowers(businessId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    IS FOLLOWER ROUTE
    ****************/
    this._router.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId, userId } = req.params;
        const { status, data } = this._controller.isFollowedBy(businessId, userId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    REMOVE FOLLOWER ROUTE
    ****************/
    this._router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { userId } = req.session;
        const { status, data } = await this._controller.unfollow(businessId, userId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    ADD FOLLOWER ROUTE
    ****************/
    this._router.put('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { userId } = req.session;
        const { status, data } = await this._controller.follow(businessId, userId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new FollowersRouter().router;
