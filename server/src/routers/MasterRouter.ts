import { NextFunction, Request, Response, Router } from 'express';

import InquiryRouter from './inquiries/InquiryRouter';
import ReviewRouter from './reviews/ReviewRouter';
import BusinessRouter from './business/BusinessRouter';
import UserRouter from './users/UserRouter';

import { Validation } from '../middleware/Validation';
import BusinessController from '../controllers/business/BusinessController';
import UpdatesRouter from './updates/UpdatesRouter';

class MasterRouter {
  private _router = Router();

  private _subrouterInquiries = InquiryRouter;
  private _subrouterReviews = ReviewRouter;
  private _subrouterUpdates = UpdatesRouter;

  private _subrouterBusiness = BusinessRouter;
  private _subrouterUsers = UserRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    // special case for get all businesses
    this._router.get('/business/all', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await BusinessController.getBusiness('all');
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });

    // question mark means that businessId is optional, but then the middleware will make sure it's defined
    // this is for the case where a user provides a length-0 business ID
    this._router.use('/business/:businessId?', Validation.businessRouteMiddleware, this._subrouterBusiness);
    this._router.use('/users', this._subrouterUsers);
    this._router.use('/inquiries', this._subrouterInquiries);
    this._router.use('/reviews', this._subrouterReviews);
    this._router.use('/updates', this._subrouterUpdates);
  }
}

export = new MasterRouter().router;
