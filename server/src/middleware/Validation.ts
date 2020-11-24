import { NextFunction, Request, Response } from 'express';
import UserRepository from '@/repositories/UserRepository';
import BusinessController from '@/controllers/business/BusinessController'; // hopefully we transition this to a repository
import InquiryRepository from '@/repositories/InquiryRepository';
import BusinessJSON from '@/models/business/Business';

export class Validation {
  // auth
  static usernameDefined(req: Request, res: Response, next: NextFunction): void {
    const username = req.params.username || req.body.username;
    if (username === undefined) {
      res.status(400).json({ message: 'Must specify a username' }).end();
      return;
    }
    next();
  }

  static passwordDefined(req: Request, res: Response, next: NextFunction): void {
    const password = req.body.password;
    if (password === undefined) {
      res.status(400).json({ message: 'Must specify a password' }).end();
      return;
    }
    next();
  }

  static emailDefined(req: Request, res: Response, next: NextFunction): void {
    const email = req.body.email;
    if (email === undefined) {
      res.status(400).json({ message: 'Must specify an email' }).end();
      return;
    }
    next();
  }

  static businessIdDefined(req: Request, res: Response, next: NextFunction): void {
    const businessId = req.params.businessId || req.body.businessId;
    if (businessId === undefined) {
      res.status(400).json({ message: 'Must specify a business id' }).end();
      return;
    }
    next();
  }

  static inquiryIdDefined(req: Request, res: Response, next: NextFunction): void {
    const inquiryId = req.params.inquiryId || req.body.inquiryId;
    if (inquiryId === undefined) {
      res.status(400).json({ message: 'Must specify an inquiry id' }).end();
      return;
    }
    next();
  }

  static questionDefined(req: Request, res: Response, next: NextFunction): void {
    const question = req.params.question || req.body.question;
    if (question === undefined) {
      res.status(400).json({ message: 'Must specify a question' }).end();
      return;
    }
    next();
  }

  static answerDefined(req: Request, res: Response, next: NextFunction): void {
    const answer = req.params.answer || req.body.answer;
    if (answer === undefined) {
      res.status(400).json({ message: 'Must specify an answer' }).end();
      return;
    }
    next();
  }

  static usernameValid(req: Request, res: Response, next: NextFunction): void {
    const username = req.params.username || req.body.username;
    // for now, shouldn't be empty. can be expanded to have specific length and stuff later
    // its OK to get undefined inputs as long as usernameDefined is also inserted as middleware
    if (username !== undefined && username.length === 0) {
      res.status(400).json({ message: 'Must specify a username' }).end();
      return;
    }
    next();
  }

  static passwordValid(req: Request, res: Response, next: NextFunction): void {
    // could be expanded to check for password safety (e.g. repeated characters, too simple, etc)
    const password = req.body.password;
    // for now, shouldn't be empty. can be expanded to have specific length and stuff later
    // its OK to get undefined inputs as long as passwordDefined is also inserted as middleware
    if (password !== undefined && password.length === 0) {
      res.status(400).json({ message: 'Must specify a password' }).end();
      return;
    }
    next();
  }

  static emailValid(req: Request, res: Response, next: NextFunction): void {
    const email = req.body.email;

    // allows anything of the form anystring@anystring.anystring
    const validatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== undefined && (email.length === 0 || !validatorRegex.test(email))) {
      res.status(400).json({ message: 'Must specify a valid email' }).end();
      return;
    }
    next();
  }

  static businessIdValid(req: Request, res: Response, next: NextFunction): void {
    const businessId = req.params.businessId || req.body.businessId;

    if (businessId !== undefined && businessId.length === 0) {
      res.status(400).json({ message: 'Must specify a valid business id' }).end();
      return;
    }
    next();
  }

  static inquiryIdValid(req: Request, res: Response, next: NextFunction): void {
    const inquiryId = req.params.inquiryId || req.body.inquiryId;

    if (inquiryId !== undefined && inquiryId.length === 0) {
      res.status(400).json({ message: 'Must specify a valid inquiry id' }).end();
      return;
    }
    next();
  }

  static questionValid(req: Request, res: Response, next: NextFunction): void {
    const question = req.params.question || req.body.question;

    if (question !== undefined && question.length === 0) {
      res.status(400).json({ message: 'Must specify a valid question' }).end();
      return;
    }
    next();
  }

  static answerValid(req: Request, res: Response, next: NextFunction): void {
    const answer = req.params.answer || req.body.answer;

    if (answer !== undefined && answer.length === 0) {
      res.status(400).json({ message: 'Must specify a valid answer' }).end();
      return;
    }
    next();
  }

  // db-dependent auth middleware (TODO for future iterations: make more efficient by only making one DB call?)
  static usernameExists(req: Request, res: Response, next: NextFunction): void {
    const user = UserRepository.findOneByUsername(req.params.username || req.body.username);
    if (user === undefined) {
      res.status(404).json({ message: 'Username not found' }).end();
      return;
    }
    next();
  }

  static businessIdExists(req: Request, res: Response, next: NextFunction): void {
    const exists = BusinessController.businessExists(req.params.businessId || req.body.businessId);
    if (!exists) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    next();
  }

  static passwordCorrect(req: Request, res: Response, next: NextFunction): void {
    const username = req.body.username;
    const password = req.body.password;
    const account = UserRepository.findOneByUsername(username);
    if (password !== account.password) {
      // we keep it intentionally vague for security reasons
      res.status(401).json({ message: 'Incorrect username/password combination' }).end();
      return;
    }

    next();
  }

  static usernameNotTaken(req: Request, res: Response, next: NextFunction): void {
    const user = UserRepository.findOneByUsername(req.params.username || req.body.username);
    if (user !== undefined) {
      res.status(409).json({ message: 'Username already in use' }).end();
      return;
    }
    next();
  }

  static emailNotTaken(req: Request, res: Response, next: NextFunction): void {
    const user = UserRepository.findOneByEmail(req.params.email || req.body.email);
    if (user !== undefined) {
      res.status(409).json({ message: 'Email already in use' }).end();
      return;
    }
    next();
  }

  static ownsBusiness(req: Request, res: Response, next: NextFunction): void {
    // we will need to change this once BusinessRepository exists
    const business: BusinessJSON = BusinessController.getBusiness(req.params.businessId || req.body.businessId).data;
    const user = req.session.userID;
    if (business?.ownerId !== user) {
      res.status(409).json({ message: 'Not authorized to manage this business inquiry' }).end();
      return;
    }
    next();
  }

  static inquiryIdExists(req: Request, res: Response, next: NextFunction): void {
    const inquiry = InquiryRepository.findOneById(req.params.inquiryId || req.body.inquiryId);
    if (inquiry === undefined) {
      res.status(404).json({ message: 'Inquiry does not exist' }).end();
      return;
    }
    next();
  }

  static signinMiddleware = [
    Validation.usernameDefined,
    Validation.passwordDefined,
    Validation.usernameValid,
    Validation.passwordValid,
    Validation.usernameExists,
    Validation.passwordValid,
    Validation.passwordCorrect,
  ];

  static createAccountMiddleware = [
    Validation.usernameDefined,
    Validation.passwordDefined,
    Validation.emailDefined,
    Validation.usernameValid,
    Validation.emailValid,
    Validation.passwordValid,
    Validation.usernameNotTaken,
    Validation.emailNotTaken,
  ];

  static getInquiriesMiddleware = [
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.businessIdExists,
  ];

  static postInquiryMiddleware = [
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.questionDefined,
    Validation.questionValid,
    Validation.businessIdExists,
  ];

  static postAnswerMiddleware = [
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.answerDefined,
    Validation.answerValid,
    Validation.inquiryIdExists,
    Validation.ownsBusiness,
  ];

  static publicityToggleMiddleware = [
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.inquiryIdExists,
    Validation.ownsBusiness,
  ];
}
