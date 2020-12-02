import { NextFunction, Request, Response, Router } from 'express';
import { Validation } from '../../middleware/Validation';
import { Auth } from '../../middleware/Auth';
import BusinessController from '../../controllers/business/BusinessController';
import PositionRouter from './subrouters/PositionRouter';
import RatingsRouter from './subrouters/RatingsRouter';
import HoursRouter from './subrouters/HoursRouter';
import SocialsRouter from './subrouters/SocialsRouter';
import FollowersRouter from './subrouters/FollowersRouter';
import TagsRouter from './subrouters/TagsRouter';

class BusinessRouter {
  private _router = Router({ mergeParams: true });

  private _controller = BusinessController;

  private _subrouterPosition = PositionRouter;
  private _subrouterRatings = RatingsRouter;
  private _subrouterHours = HoursRouter;
  private _subrouterSocialMedia = SocialsRouter;
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
    EXTERNAL BUSINESS ROUTES
    ****************/
    this._router.use('/position', this._subrouterPosition);
    this._router.use('/ratings', this._subrouterRatings);
    this._router.use('/hours', this._subrouterHours);
    this._router.use('/social-media', this._subrouterSocialMedia);
    this._router.use('/followers', this._subrouterFollowers);
    this._router.use('/tags', this._subrouterTags);

    /***************
    GET BUSINESS ROUTE
    ****************/
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getBusiness(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET/GET NAME ROUTES
    ****************/
    this._router.get('/name', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getName(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    this._router.put('/name', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { name } = req.body;
        const result = await this._controller.setName(businessId, name);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET/GET DESCRIPTION ROUTES
    ****************/
    this._router.get('/description', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getDescription(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    this._router.put('/description', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { description } = req.body;
        const result = await this._controller.setDescription(businessId, description);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET/GET OWNER ROUTES
    ****************/
    this._router.get('/owner', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getOwner(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    this._router.put('/owner', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { ownerId } = req.body;
        const result = await this._controller.setOwner(businessId, ownerId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET/GET URL ROUTES
    ****************/
    this._router.get('/url', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getExternalURL(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    this._router.put('/url', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { url } = req.body;
        const result = await this._controller.setExternalURL(businessId, url);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    SET/GET PHONE ROUTES
    ****************/
    this._router.get('/phone', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getPhoneNumber(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    this._router.put('/phone', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { phone } = req.body;
        const result = await this._controller.setPhoneNumber(businessId, phone);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    /***************
    CLAIM BUSINESS ROUTES
    ****************/
    this._router.post(
      '/claim',
      Auth.enforceSignedIn,
      Validation.claimBusinessMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { businessId } = req.params;
          const userId = req.session.userID;
          const result = await this._controller.claimBusiness(businessId, userId);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    this._router.delete(
      '/claim',
      Auth.enforceSignedIn,
      Validation.unclaimBusinessMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { businessId } = req.params;
          const userId = req.session.userID;
          const result = await this._controller.unclaimBusiness(businessId, userId);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );
  }
}

export = new BusinessRouter().router;
