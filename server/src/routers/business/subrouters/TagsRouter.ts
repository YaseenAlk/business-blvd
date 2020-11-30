import { NextFunction, Request, Response, Router } from 'express';
import BusinessController from '../../../controllers/business/BusinessController';

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
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { status, data } = this._controller.getTags(businessId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
    /***************
    ADD TAG ROUTE
    ****************/
    this._router.put('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { tagId } = req.body;
        const { status, data } = this._controller.addTag(businessId, tagId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
    /***************
    REMOVE TAG ROUTE
    ****************/
    this._router.delete('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId } = req.params;
        const { tagId } = req.body;
        const { status, data } = this._controller.addTag(businessId, tagId);
        res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    });
  }
}

export = new TagsRouter().router;
