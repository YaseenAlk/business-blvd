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
    this._router.use('/location', this._subrouterLocation);
    this._router.use('/ratings', this._subrouterRatings);
    this._router.use('/hours', this._subrouterHours);
    this._router.use('/social-media', this._subrouterSocialMedia);
    this._router.use('/followers', this._subrouterFollowers);
    this._router.use('/tags', this._subrouterTags);
    // /name: SET and GET
    // description: SET and GET
    // /businessId: GET
    // /ownerId: SET and GET
    // /url: SET and GET
    // /phone: SET and GET

    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        if (id == 'all') {
          const result = this._controller.getAllBusinesses();
          res.status(200).json(result);
        } else {
          const businessExists = this._controller.businessExists(id);
          if (businessExists) {
            const result = this._controller.getBusiness(id);
            res.status(200).json(result);
          } else {
            res.status(404).json(`No business found with id ${id}`);
          }
        }
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new BusinessRouter().router;
