import { NextFunction, Request, Response, Router } from 'express';
import ReviewController from '../../controllers/ReviewController';
import { Validation } from '../../middleware/Validation';
import { Auth } from '../../middleware/Auth';

class ReviewRouter {
  private _router = Router();

  private _controller = ReviewController;

  get router() {
    return this._router;
  }

  get controller() {
    return this._controller;
  }

  constructor() {
    this.getters();
    // mus be signed in to use any routes below
    this._router.use(Auth.enforceSignedIn);
    this.reviewOperations();
    this.responseOperations();
  }

  private getters() {
    // get reviews for a particular business
    // GET /api/reviews/business/:id
    this._router.get(
      '/business/:businessId',
      Validation.getReviewsMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const businessId: string = req.params.businessId;

          const result = await this._controller.getReviewsFromBusiness(businessId);

          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    this._router.get('*', async (req: Request, res: Response) => {
      res.status(404).json({ message: 'Invalid route.' });
    });
  }

  private reviewOperations() {
    // post a review (must be signed in):
    /*
        POST /api/reviews

        {
            businessId: num,
            review: String
        }
        */
    this._router.post('/', Validation.postReviewMiddleware, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { businessId, review } = req.body;
        const userId: string = req.session.userID;
        const result = await this._controller.createReview(businessId, review, userId);
        res
          .status(result.status)
          .json(result.message || result.data)
          .end();
      } catch (error) {
        next(error);
      }
    });
  }

  private responseOperations() {
    // post a response (must be signed in):
    /*
        POST /api/reviews/:id/response
        {
            response: String
        }
        */
    this._router.post(
      '/:reviewId/response',
      Validation.postResponseMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const reviewId: string = req.params.reviewId;
          const response: string = req.body.response;
          const result = await this._controller.postResponse(reviewId, response);
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

export = new ReviewRouter().router;
