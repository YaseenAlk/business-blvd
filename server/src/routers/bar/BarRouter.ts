import { NextFunction, Request, Response, Router } from 'express';
import BarController from '../../controllers/BarController';

class BarRouter {
  private _router = Router();

  private _controller = BarController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {}
}

export = new BarRouter().router;
