import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';
import { Auth } from '../../../middleware/Auth';
import { Validation } from '../../../middleware/Validation';

class TagsRouter {
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
    GET TAGS ROUTE
    ****************/
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const result = await this._controller.getTags(businessId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });
    this._router.get('*', async (req: Request, res: Response) => {
      res.status(404).json({ message: 'Invalid route.' });
    });
    /***************
    ADD TAG ROUTE
    ****************/
    // next 2 routes require sign in
    this._router.use(Auth.enforceSignedIn);

    this._router.put('/', Validation.addTagMiddleware, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { tagId } = req.body;
        const result = await this._controller.addTag(businessId, tagId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });
    /***************
    REMOVE TAG ROUTE
    ****************/
    this._router.delete(
      '/',
      Validation.deleteTagMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { businessId } = req.params;
          const { tagId } = req.body;
          const result = await this._controller.removeTag(businessId, tagId);
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

export = new TagsRouter().router;
