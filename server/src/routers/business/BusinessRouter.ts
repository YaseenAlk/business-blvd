import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../controllers/business/BusinessController';

import LocationRouter from './subrouters/LocationRouter';
import RatingsRouter from './subrouters/RatingsRouter';
import HoursRouter from './subrouters/HoursRouter';
import SocialMediaRouter from './subrouters/SocialMediaRouter';
import FollowersRouter from './subrouters/FollowersRouter';
import TagsRouter from './subrouters/TagsRouter';

class BusinessRouter {
  private _router = Router({ mergeParams: true });

  private _controller = BusinessController;

  private _subrouterLocation = LocationRouter;
  private _subrouterRatings = RatingsRouter;
  private _subrouterHours = HoursRouter;
  private _subrouterSocialMedia = SocialMediaRouter;
  private _subrouterFollowers = FollowersRouter;
  private _subrouterTags = TagsRouter;

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
    EXTERNAL BUSINESS ROUTE
    ****************/
    this._router.use('/location', this._subrouterLocation);
    this._router.use('/ratings', this._subrouterRatings);
    this._router.use('/hours', this._subrouterHours);
    this._router.use('/social-media', this._subrouterSocialMedia);
    this._router.use('/followers', this._subrouterFollowers);
    this._router.use('/tags', this._subrouterTags);

    /***************
    GET BUSINESS ROUTE
    ****************/
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, data } = this._controller.getBusiness(businessId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET/GET BUSINESS NAME ROUTE
    ****************/
    // TODO

    /***************
    SET/GET BUSINESS DESCRIPTION ROUTE
    ****************/
    // TODO

    /***************
    GET BUSINESS DESCRIPTION ROUTE
    ****************/
    // TODO

    /***************
    GET BUSINESS OWNERID ROUTE
    ****************/
    // TODO

    /***************
    SET/GET BUSINESS URL ROUTE
    ****************/
    // TODO

    /***************
    SET/GET BUSINESS PHONE ROUTE
    ****************/
    // TODO
  }
}

export = new BusinessRouter().router;
