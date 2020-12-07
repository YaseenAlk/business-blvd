import { NextFunction, Request, Response, Router } from 'express';

import InquiryRouter from './inquiries/InquiryRouter';
import ReviewRouter from './reviews/ReviewRouter';
import BusinessRouter from './business/BusinessRouter';
import UserRouter from './users/UserRouter';

import BusinessController from '../controllers/business/BusinessController';

class MasterRouter {
  private _router = Router();

  private _subrouterInquiries = InquiryRouter;
  private _subrouterReviews = ReviewRouter;

  private _subrouterBusiness = BusinessRouter;
  private _subrouterUsers = UserRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._admin();
    this._configure();
  }

  private _admin() {
    this._router.get('/admin/unclaim-all', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await BusinessController.unclaimAll();
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/business/:businessId', this._subrouterBusiness);
    this._router.use('/users', this._subrouterUsers);
    this._router.use('/inquiries', this._subrouterInquiries);
    this._router.use('/reviews', this._subrouterReviews);
  }
}

export = new MasterRouter().router;
