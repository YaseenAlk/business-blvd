import { Router } from 'express';
import FooRouter from './foo/FooRouter';
import BarRouter from './bar/BarRouter';

class MasterRouter {
  private _router = Router();

  private _subrouterFoo = FooRouter;

  private _subrouterBar = BarRouter;

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
  }
}

export = new MasterRouter().router;
