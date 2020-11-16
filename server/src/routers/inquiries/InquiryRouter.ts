import { NextFunction, Request, Response, Router } from 'express';
import InquiryController from '../../controllers/InquiryController';

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
      this.questionOperations();
      this.answerOperations();
      this.publicityOperations();
    }
  
    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
      this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
        try {
          const result = this._controller.defaultMethod();
          res.status(200).json(result);
        } catch (error) {
          next(error);
        }
      });
    }

    private getters() {
        // get inquiries for a particular business
        // GET /api/inquiries/business/:id
        this._router.get('/business/:id', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.getInquiriesFromBusiness(id)
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
        
        // get all inquiries for a particular business (including private ones)
        // GET /api/inquiries/business/:id/all
        // (if private, must be signed in)
        this._router.get('/business/:id/all', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.getAllInquiriesFromBusiness(id)
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        // get specific question and answer:
        // GET /api/inquiries/:id
        // (if private, must be signed in)
        this._router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.getInquiry(id)
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
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
       this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
            try {
                const businessId: number = req.body.id;
                const question: string = req.body.question;
                const result = undefined; // this._controller.createInquiry(businessId, question);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        // edit a question (must be signed in):
        /*
        PUT /api/inquiries/:id
        {
            question: String
        }
        */
       this._router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const newQuestion: string = req.body.question;
                const result = undefined; // this._controller.updateInquiry(id, newQuestion);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        // delete a question (must be signed in):
        /*
        DELETE /api/inquiries/:id
        */
       this._router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.deleteInquiry(id);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
    }

    private answerOperations() {
        // post an answer (must be signed in):
        /*
        POST /api/inquiries/:id/answer
        {
            answer: String
        }
        */
       this._router.post('/:id/answer', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const answer: string = req.body.answer;
                const result = undefined; // this._controller.postAnswer(id, answer);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        // edit an answer (must be signed in):
        /*
        PUT /api/inquiries/:id/answer
        {
            answer: String
        }
        */
       this._router.put('/:id/answer', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const newAnswer: string = req.body.answer;
                const result = undefined; // this._controller.updateAnswer(id, newAnswer);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        // delete an answer (must be signed in):
        /*
        DELETE /api/inquiries/:id/answer
        */
       this._router.delete('/:id/answer', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.deleteAnswer(id);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
    }

    private publicityOperations() {
        // make inquiry public (must be signed in)
        /*
        POST /api/inquiries/:id/publicity
        */
       this._router.post('/:id/publicity', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.makePublic(id);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });

        // make inquiry private (must be signed in)
        /*
        DELETE /api/inquiries/:id/publicity
        */
       this._router.delete('/:id/publicity', (req: Request, res: Response, next: NextFunction) => {
            try {
                const id: number = req.params.id;
                const result = undefined; // this._controller.makePrivate(id);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
    }
}

export = new InquiryRouter().router;