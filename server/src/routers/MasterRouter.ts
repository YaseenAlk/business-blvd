import { Router } from 'express';
import FooRouter from './foo/FooRouter';
import BarRouter from './bar/BarRouter';
import InquiryRouter from "./inquiries/InquiryRouter";

class MasterRouter {
  private _router = Router();

  private _subrouterFoo = FooRouter;

  private _subrouterBar = BarRouter;

  private _subrouterInquiries = InquiryRouter;

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
    this._router.use('/foo', this._subrouterFoo);
    this._router.use('/bar', this._subrouterBar);
    this._router.use('/inquiries', this._subrouterInquiries);
  }
}

export = new MasterRouter().router;
