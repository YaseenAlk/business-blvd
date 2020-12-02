import { NextFunction, Request, Response, Router } from 'express';
import InquiryController from '../../controllers/InquiryController';
import { Validation } from '../../middleware/Validation';
import { Auth } from '../../middleware/Auth';

class InquiryRouter {
  private _router = Router();

  private _controller = InquiryController;

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
    this.questionOperations();
    this.answerOperations();
    this.publicityOperations();
  }

  private getters() {
    // get inquiries for a particular business (public, and whatever private ones the user has permission for)
    // GET /api/inquiries/business/:id
    this._router.get(
      '/business/:businessId',
      Validation.getInquiriesMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;

          // sign in optional
          const userId: string | undefined = req.session.userID;
          const result = await this._controller.getInquiriesFromBusiness(id, userId);

          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    // get specific question and answer:
    // GET /api/inquiries/:id
    // (if private, must be signed in)
    // this._router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    //   try {
    //     const id: string = req.params.id;
    //     const result = undefined; // this._controller.getInquiry(id)
    //     res.status(200).json(result);
    //   } catch (error) {
    //     next(error);
    //   }
    // });
  }

  private questionOperations() {
    // post a question (must be signed in):
    /*
        POST /api/inquiries

        {
            businessId: num,
            question: String
        }
        */
    this._router.post(
      '/',
      Validation.postInquiryMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { businessId, question } = req.body;
          const userId: string = req.session.userID;
          const result = await this._controller.createInquiry(businessId, question, userId);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    // edit a question (must be signed in):
    /*
        PUT /api/inquiries/:id
        {
            question: String
        }
        */
    //this._router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    //  try {
    //    const id: string = req.params.id;
    //    const newQuestion: string = req.body.question;
    //    const result = undefined; // this._controller.updateInquiry(id, newQuestion);
    //    res.status(200).json(result);
    //  } catch (error) {
    //    next(error);
    //  }
    //});

    // delete a question (must be signed in):
    /*
        DELETE /api/inquiries/:id
        */
    // this._router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    //   try {
    //     const id: string = req.params.id;
    //     const result = undefined; // this._controller.deleteInquiry(id);
    //     res.status(200).json(result);
    //   } catch (error) {
    //     next(error);
    //   }
    // });
  }

  private answerOperations() {
    // post an answer (must be signed in):
    /*
        POST /api/inquiries/:id/answer
        {
            answer: String
        }
        */
    this._router.post(
      '/:id/answer',
      Validation.postAnswerMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;
          const answer: string = req.body.answer;
          const result = await this._controller.postAnswer(id, answer);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    // edit an answer (must be signed in):
    /*
        PUT /api/inquiries/:id/answer
        {
            answer: String
        }
        */
    // this._router.put('/:id/answer', (req: Request, res: Response, next: NextFunction) => {
    //   try {
    //     const id: string = req.params.id;
    //     const newAnswer: string = req.body.answer;
    //     const result = undefined; // this._controller.updateAnswer(id, newAnswer);
    //     res.status(200).json(result);
    //   } catch (error) {
    //     next(error);
    //   }
    // });

    // delete an answer (must be signed in):
    /*
        DELETE /api/inquiries/:id/answer
        */
    // this._router.delete('/:id/answer', (req: Request, res: Response, next: NextFunction) => {
    //   try {
    //     const id: string = req.params.id;
    //     const result = undefined; // this._controller.deleteAnswer(id);
    //     res.status(200).json(result);
    //   } catch (error) {
    //     next(error);
    //   }
    // });
  }

  private publicityOperations() {
    // make inquiry public (must be signed in)
    /*
        POST /api/inquiries/:id/publicity
        */
    this._router.post(
      '/:id/publicity',
      Validation.publicityToggleMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;
          const result = await this._controller.makePublic(id);
          res
            .status(result.status)
            .json(result.message || result.data)
            .end();
        } catch (error) {
          next(error);
        }
      },
    );

    // make inquiry private (must be signed in)
    /*
        DELETE /api/inquiries/:id/publicity
        */
    this._router.delete(
      '/:id/publicity',
      Validation.publicityToggleMiddleware,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;
          const result = await this._controller.makePrivate(id);
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

export = new InquiryRouter().router;
