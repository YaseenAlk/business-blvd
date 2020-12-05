import { Router } from 'express';

import InquiryRouter from './inquiries/InquiryRouter';
import BusinessRouter from './business/BusinessRouter';
import UserRouter from './users/UserRouter';

import { Validation } from '../middleware/Validation';

class MasterRouter {
  private _router = Router();

  private _subrouterInquiries = InquiryRouter;

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
    this._router.use('/business/:businessId', Validation.businessRouteMiddleware, this._subrouterBusiness);
    this._router.use('/users', this._subrouterUsers);
    this._router.use('/inquiries', this._subrouterInquiries);
  }
}

export = new MasterRouter().router;
