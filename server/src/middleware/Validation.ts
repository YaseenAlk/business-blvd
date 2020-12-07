import { NextFunction, Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import InquiryRepository from '../repositories/InquiryRepository';
import Business from '../models/business/Business';
import BusinessRepository from '../repositories/business/BusinessRepository';
import { Inquiry } from '../models/Inquiry';
import Review from '../models/Review';
import { User } from '../models/User';
import { parseTag } from '../models/business/TagsList';
import { parseDay } from '../models/business/Hours';
import ReviewRepository from '../repositories/ReviewRepository';
import { MAX_SAFETY_RATING, MAX_SERVICE_RATING, MIN_SAFETY_RATING, MIN_SERVICE_RATING } from '../Constants';

export class Validation {
  // auth
  static async usernameDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const username = req.params.username || req.body.username;
    if (username === undefined) {
      res.status(400).json({ message: 'Must specify a username' }).end();
      return;
    }
    next();
  }

  static async passwordDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const password = req.body.password;
    if (password === undefined) {
      res.status(400).json({ message: 'Must specify a password' }).end();
      return;
    }
    next();
  }

  static async emailDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const email = req.body.email;
    if (email === undefined) {
      res.status(400).json({ message: 'Must specify an email' }).end();
      return;
    }
    next();
  }

  static async anyAccountInfoDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const username = req.params.username || req.body.username;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const email = req.body.email;
    if (
      (username === undefined && newPassword === undefined && oldPassword === undefined && email === undefined) ||
      (newPassword !== undefined && oldPassword === undefined) ||
      (newPassword === undefined && oldPassword !== undefined)
    ) {
      res
        .status(400)
        .json({ message: 'Must specify an account property to update (email, username, or oldPassword/newPassword) ' })
        .end();
      return;
    }
    next();
  }

  static async businessIdDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const businessId = req.params.businessId || req.body.businessId;
    if (businessId === undefined) {
      res.status(400).json({ message: 'Must specify a business id' }).end();
      return;
    }
    next();
  }

  static async inquiryIdDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const inquiryId = req.params.inquiryId || req.body.inquiryId;
    if (inquiryId === undefined) {
      res.status(400).json({ message: 'Must specify an inquiry id' }).end();
      return;
    }
    next();
  }

  static async questionDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const question = req.params.question || req.body.question;
    if (question === undefined) {
      res.status(400).json({ message: 'Must specify a question' }).end();
      return;
    }
    next();
  }

  static async answerDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const answer = req.params.answer || req.body.answer;
    if (answer === undefined) {
      res.status(400).json({ message: 'Must specify an answer' }).end();
      return;
    }
    next();
  }

  static async nameDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const name = req.params.name || req.body.name;
    if (name === undefined) {
      res.status(400).json({ message: 'Must specify a business name' }).end();
      return;
    }
    next();
  }

  static async descriptionDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const description = req.params.description || req.body.description;
    if (description === undefined) {
      res.status(400).json({ message: 'Must specify a business description' }).end();
      return;
    }
    next();
  }

  static async urlDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const url = req.params.url || req.body.url;
    if (url === undefined) {
      res.status(400).json({ message: 'Must specify a business url' }).end();
      return;
    }
    next();
  }

  static async phoneDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const phone = req.params.phone || req.body.phone;
    if (phone === undefined) {
      res.status(400).json({ message: 'Must specify a business phone number' }).end();
      return;
    }
    next();
  }

  static async dayDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const day = req.params.day || req.body.day;
    if (day === undefined) {
      res.status(400).json({ message: 'Must specify a day for the schedule entry' }).end();
      return;
    }
    next();
  }

  static async openTimeDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const openTime = req.params.openTime || req.body.openTime;
    if (openTime === undefined) {
      res.status(400).json({ message: 'Must specify a openTime for the schedule entry' }).end();
      return;
    }
    next();
  }

  static async closeTimeDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const closeTime = req.params.closeTime || req.body.closeTime;
    if (closeTime === undefined) {
      res.status(400).json({ message: 'Must specify a closeTime for the schedule entry' }).end();
      return;
    }
    next();
  }

  static async addressDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const address = req.params.address || req.body.address;
    if (address === undefined) {
      res.status(400).json({ message: 'Must specify address for business position' }).end();
      return;
    }
    next();
  }

  static async latDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const lat = req.params.lat || req.body.lat;
    if (lat === undefined) {
      res.status(400).json({ message: 'Must specify lat for business position' }).end();
      return;
    }
    next();
  }

  static async lngDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const lng = req.params.lng || req.body.lng;
    if (lng === undefined) {
      res.status(400).json({ message: 'Must specify lng for business position' }).end();
      return;
    }
    next();
  }

  static async anySocialDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const twitter = req.params.twitter || req.body.twitter;
    const facebook = req.params.facebook || req.body.facebook;
    const instagram = req.params.instagram || req.body.instagram;
    if (twitter === undefined && facebook === undefined && instagram === undefined) {
      res.status(400).json({ message: 'Must specify some social media url' }).end();
      return;
    }
    next();
  }

  static async twitterDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const twitter = req.params.twitter || req.body.twitter;
    if (twitter === undefined) {
      res.status(400).json({ message: 'Must specify a twitter url' }).end();
      return;
    }
    next();
  }

  static async instagramDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const instagram = req.params.instagram || req.body.instagram;
    if (instagram === undefined) {
      res.status(400).json({ message: 'Must specify a instagram url' }).end();
      return;
    }
    next();
  }

  static async facebookDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const facebook = req.params.facebook || req.body.facebook;
    if (facebook === undefined) {
      res.status(400).json({ message: 'Must specify a facebook url' }).end();
      return;
    }
    next();
  }

  static async anyRatingDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const safetyRating = req.params.safetyRating || req.body.safetyRating;
    const serviceRating = req.params.serviceRating || req.body.serviceRating;

    if (safetyRating === undefined && serviceRating === undefined) {
      res.status(400).json({ message: 'Must specify some business rating' }).end();
      return;
    }
    next();
  }

  static async safetyRatingDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const safetyRating = req.params.safetyRating || req.body.safetyRating;
    if (safetyRating === undefined) {
      res.status(400).json({ message: 'Must specify a business safety rating' }).end();
      return;
    }
    next();
  }

  static async serviceRatingDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const serviceRating = req.params.serviceRating || req.body.serviceRating;
    if (serviceRating === undefined) {
      res.status(400).json({ message: 'Must specify a business service rating' }).end();
      return;
    }
    next();
  }

  static async tagIdDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const tagId = req.params.tagId || req.body.tagId;
    if (tagId === undefined) {
      res.status(400).json({ message: 'Must specify a business tag' }).end();
      return;
    }
    next();
  }

  static async usernameValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const username = req.params.username || req.body.username;
    // for now, shouldn't be empty. can be expanded to have specific length and stuff later
    // its OK to get undefined inputs as long as usernameDefined is also inserted as middleware
    if (username !== undefined && username.length === 0) {
      res.status(400).json({ message: 'Must specify a username' }).end();
      return;
    }
    next();
  }

  static async passwordValid(req: Request, res: Response, next: NextFunction): Promise<void> {
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

  static async passwordsValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    if (
      (oldPassword !== undefined && oldPassword.length === 0) ||
      (newPassword !== undefined && newPassword.length === 0)
    ) {
      res.status(400).json({ message: 'Must specify old and new passwords' }).end();
      return;
    }
    next();
  }

  static async emailValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const email = req.body.email;

    // allows anything of the form anystring@anystring.anystring
    const validatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== undefined && (email.length === 0 || !validatorRegex.test(email))) {
      res.status(400).json({ message: 'Must specify a valid email' }).end();
      return;
    }
    next();
  }

  static async businessIdValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const businessId = req.params.businessId || req.body.businessId;

    // uuid validator
    const validatorRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (businessId !== undefined && (businessId.length === 0 || !validatorRegex.test(businessId))) {
      res.status(400).json({ message: 'Must specify a valid business id' }).end();
      return;
    }
    next();
  }

  static async claimCodeValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const businessId = req.params.businessId || req.body.businessId;
    const claimCode = req.body.claimCode || req.body.claimCode;

    const business: Business | undefined = await BusinessRepository.findOneById(businessId);
    if (business?.claimCode !== claimCode) {
      res
        .status(401)
        .json({ message: 'Business claim code incorrect. Please verify code was correctly entered.' })
        .end();
      return;
    }

    next();
  }

  static async inquiryIdValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const inquiryId = req.params.inquiryId || req.body.inquiryId;

    // uuid validator
    const validatorRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (inquiryId !== undefined && (inquiryId.length === 0 || !validatorRegex.test(inquiryId))) {
      res.status(400).json({ message: 'Must specify a valid inquiry id' }).end();
      return;
    }
    next();
  }

  static async questionValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const question = req.params.question || req.body.question;

    if (question !== undefined && question.length === 0) {
      res.status(400).json({ message: 'Must specify a valid question' }).end();
      return;
    }
    next();
  }

  static async answerValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const answer = req.params.answer || req.body.answer;

    if (answer !== undefined && answer.length === 0) {
      res.status(400).json({ message: 'Must specify a valid answer' }).end();
      return;
    }
    next();
  }

  static async nameValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const name = req.params.name || req.body.name;

    if (name !== undefined && name.length === 0) {
      res.status(400).json({ message: 'Must specify a valid name' }).end();
      return;
    }
    next();
  }

  static async descriptionValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const description = req.params.description || req.body.description;

    if (description !== undefined && description.length === 0) {
      res.status(400).json({ message: 'Must specify a valid description' }).end();
      return;
    }
    next();
  }

  static async urlValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const url = req.params.url || req.body.url;
    if (url !== undefined) {
      try {
        new URL(url);
      } catch (_) {
        res.status(400).json({ message: 'Must specify a valid URL' }).end();
        return;
      }
    }
    next();
  }

  static async phoneValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const phone = req.params.phone || req.body.phone;

    if (phone !== undefined && phone.length === 0) {
      res.status(400).json({ message: 'Must specify a valid phone' }).end();
      return;
    }
    next();
  }

  static async dayValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const day = req.params.day || req.body.day;

    if (day !== undefined && day.length === 0) {
      res.status(400).json({ message: 'Must specify a valid day' }).end();
      return;
    }
    next();
  }

  static async openTimeValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const openTime = req.params.openTime || req.body.openTime;

    if (
      openTime.hour === undefined ||
      openTime.minute === undefined ||
      typeof openTime.hour !== typeof String ||
      typeof openTime.minute !== typeof String
    ) {
      res.status(400).json({ message: 'Must specify a valid opening time with hour and minute' }).end();
      return;
    }
    next();
  }

  static async closeTimeValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const closeTime = req.params.closeTime || req.body.closeTime;

    if (
      closeTime.hour === undefined ||
      closeTime.minute === undefined ||
      typeof closeTime.hour !== typeof String ||
      typeof closeTime.minute !== typeof String
    ) {
      res.status(400).json({ message: 'Must specify a valid closing time with hour and minute' }).end();
      return;
    }
    next();
  }

  static async addressValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const address = req.params.address || req.body.address;

    if (address !== undefined && address.length === 0) {
      res.status(400).json({ message: 'Must specify a valid address' }).end();
      return;
    }
    next();
  }

  static async latValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const lat = req.params.lat || req.body.lat;

    if (lat !== undefined && (lat.length === 0 || isNaN(lat) || isNaN(parseFloat(lat)))) {
      res.status(400).json({ message: 'Must specify a valid latitude' }).end();
      return;
    }
    next();
  }

  static async lngValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const lng = req.params.lng || req.body.lng;

    if (lng !== undefined && (lng.length === 0 || isNaN(lng) || isNaN(parseFloat(lng)))) {
      res.status(400).json({ message: 'Must specify a valid longitude' }).end();
      return;
    }
    next();
  }

  static async twitterValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const twitter = req.params.twitter || req.body.twitter;
    if (twitter !== undefined) {
      try {
        new URL(twitter);
      } catch (_) {
        res.status(400).json({ message: 'Must specify a valid twitter url' }).end();
        return;
      }
    }
    next();
  }

  static async facebookValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const facebook = req.params.facebook || req.body.facebook;
    if (facebook !== undefined) {
      try {
        new URL(facebook);
      } catch (_) {
        res.status(400).json({ message: 'Must specify a valid facebook url' }).end();
        return;
      }
    }
    next();
  }

  static async instagramValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const instagram = req.params.instagram || req.body.instagram;
    if (instagram !== undefined) {
      try {
        new URL(instagram);
      } catch (_) {
        res.status(400).json({ message: 'Must specify a valid instagram url' }).end();
        return;
      }
    }
    next();
  }

  static async safetyRatingValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const safetyRating = req.params.safetyRating || req.body.safetyRating;

    if (
      safetyRating !== undefined &&
      (safetyRating.length === 0 ||
        isNaN(safetyRating) ||
        isNaN(parseFloat(safetyRating)) ||
        safetyRating < MIN_SAFETY_RATING ||
        safetyRating > MAX_SAFETY_RATING)
    ) {
      res.status(400).json({ message: 'Must specify a valid safety rating (number 0 to 5)' }).end();
      return;
    }
    next();
  }

  static async serviceRatingValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const serviceRating = req.params.serviceRating || req.body.serviceRating;

    if (
      serviceRating !== undefined &&
      (serviceRating.length === 0 ||
        isNaN(serviceRating) ||
        isNaN(parseFloat(serviceRating)) ||
        serviceRating < MIN_SERVICE_RATING ||
        serviceRating > MAX_SERVICE_RATING)
    ) {
      res.status(400).json({ message: 'Must specify a valid service rating (number 0 to 5)' }).end();
      return;
    }
    next();
  }

  static async tagIdValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const tagId = req.params.tagId || req.body.tagId;

    if (tagId !== undefined && tagId.length === 0) {
      res.status(400).json({ message: 'Must specify a valid tag as a string' }).end();
      return;
    }
    next();
  }

  static async tagExists(req: Request, res: Response, next: NextFunction): Promise<void> {
    const tagId = req.params.tagId || req.body.tagId;

    if (tagId !== undefined && parseTag(tagId) === undefined) {
      res.status(400).json({ message: 'Must specify a valid tag' }).end();
      return;
    }
    next();
  }

  static async dayExists(req: Request, res: Response, next: NextFunction): Promise<void> {
    const day = req.params.day || req.body.day;

    if (day !== undefined && parseDay(day) === undefined) {
      res.status(400).json({ message: 'Must specify a valid day' }).end();
      return;
    }
    next();
  }

  // db-dependent auth middleware (TODO for future iterations: make more efficient by only making one DB call?)
  static async usernameExists(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user: User | undefined = await UserRepository.findOneByUsername(req.params.username || req.body.username);
    if (user === undefined) {
      res.status(404).json({ message: 'Username not found' }).end();
      return;
    }
    next();
  }

  static async businessIdExists(req: Request, res: Response, next: NextFunction): Promise<void> {
    const exists: boolean | undefined = await BusinessRepository.businessExists(
      req.params.businessId || req.body.businessId,
    );
    if (!exists) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    next();
  }

  static async passwordCorrect(req: Request, res: Response, next: NextFunction): Promise<void> {
    const username = req.body.username;
    const password = req.body.password;
    const account: User | undefined = await UserRepository.findOneByUsername(username);
    if (password !== account?.password) {
      // we keep it intentionally vague for security reasons
      res.status(401).json({ message: 'Incorrect username/password combination' }).end();
      return;
    }

    next();
  }

  static async oldPasswordCorrect(req: Request, res: Response, next: NextFunction): Promise<void> {
    const password = req.body.oldPassword;
    if (password !== undefined) {
      const account: User | undefined = await UserRepository.findOneByID(req.session.userID);
      if (password !== account?.password) {
        // we keep it intentionally vague for security reasons
        res.status(401).json({ message: 'Incorrect password' }).end();
        return;
      }
    }
    next();
  }

  static async usernameNotTaken(req: Request, res: Response, next: NextFunction): Promise<void> {
    const username: string | undefined = req.params.username || req.body.username;
    // as long as the usernameDefined middleware is used before this, it's OK
    // keeping username optional here so that this middleware can be used for the Edit account route,
    // where username is optional
    if (username !== undefined) {
      const user: User | undefined = await UserRepository.findOneByUsername(username);
      if (user !== undefined) {
        res.status(409).json({ message: 'Username already in use' }).end();
        return;
      }
    }
    next();
  }

  static async emailNotTaken(req: Request, res: Response, next: NextFunction): Promise<void> {
    const email: string | undefined = req.params.email || req.body.email;
    // as long as the emailDefined middleware is used before this, it's OK
    // keeping email optional here so that this middleware can be used for the Edit account route,
    // where email is optional
    if (email !== undefined) {
      const user: User | undefined = await UserRepository.findOneByEmail(email);
      if (user !== undefined) {
        res.status(409).json({ message: 'Email already in use' }).end();
        return;
      }
    }
    next();
  }

  static async ownsBusinessInquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
    const inquiry: Inquiry | undefined = await InquiryRepository.findOneById(req.params.inquiryId);
    const businessId = inquiry?.businessId;
    if (!businessId) {
      res.status(404).json({ message: 'Inquiry does not exist' }).end();
      return;
    }
    const business: Business | undefined = await BusinessRepository.findOneById(businessId);
    const user = req.session.userID;
    if (!business) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    if (!business.isOwner(user)) {
      res.status(403).json({ message: 'Not authorized to manage this business inquiry' }).end();
      return;
    }
    next();
  }

  static async ownsBusiness(req: Request, res: Response, next: NextFunction): Promise<void> {
    const business: Business | undefined = await BusinessRepository.findOneById(
      req.params.businessId || req.body.businessId,
    );
    const user = req.session.userID;
    if (!business) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    if (!business.isOwner(user)) {
      res.status(403).json({ message: 'Not authorized to manage this business inquiry' }).end();
      return;
    }
    next();
  }

  static async businessIdUnclaimed(req: Request, res: Response, next: NextFunction): Promise<void> {
    // we will need to change this once BusinessRepository exists
    const business: Business | undefined = await BusinessRepository.findOneById(
      req.params.businessId || req.body.businessId,
    );
    if (business?.hasOwner()) {
      res.status(409).json({ message: 'Business already claimed' }).end();
      return;
    }
    next();
  }

  static async inquiryIdExists(req: Request, res: Response, next: NextFunction): Promise<void> {
    const inquiry: Inquiry | undefined = await InquiryRepository.findOneById(
      req.params.inquiryId || req.body.inquiryId,
    );

    if (inquiry === undefined) {
      res.status(404).json({ message: 'Inquiry does not exist' }).end();
      return;
    }
    next();
  }

  static async notFollowingBusiness(req: Request, res: Response, next: NextFunction): Promise<void> {
    const businessId: string = req.params.businessId || req.body.businessId;
    const userId: string = req.session.userID;
    const beingFollowed: boolean | undefined = await BusinessRepository.followedBy(businessId, userId);
    if (beingFollowed === undefined) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    if (beingFollowed) {
      res.status(409).json({ message: 'Already following business' }).end();
      return;
    }
    next();
  }

  static async reviewDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const review = req.params.review || req.body.review;
    if (review === undefined) {
      res.status(400).json({ message: 'Must specify a review' }).end();
      return;
    }
    next();
  }

  static async responseDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const response = req.params.response || req.body.response;
    if (response === undefined) {
      res.status(400).json({ message: 'Must specify a response' }).end();
      return;
    }
    next();
  }

  static async reviewValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const review = req.params.review || req.body.review;

    if (review !== undefined && review.length === 0) {
      res.status(400).json({ message: 'Must specify a valid review' }).end();
      return;
    }
    next();
  }

  static async responseValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const response = req.params.response || req.body.response;

    if (response !== undefined && response.length === 0) {
      res.status(400).json({ message: 'Must specify a valid response' }).end();
      return;
    }
    next();
  }

  static async followingBusiness(req: Request, res: Response, next: NextFunction): Promise<void> {
    const businessId: string = req.params.businessId || req.body.businessId;
    const userId: string = req.session.userID;
    const beingFollowed: boolean | undefined = await BusinessRepository.followedBy(businessId, userId);
    if (beingFollowed === undefined) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    if (!beingFollowed) {
      res.status(409).json({ message: 'Not following business' }).end();
      return;
    }
    next();
  }

  static async reviewIdDefined(req: Request, res: Response, next: NextFunction): Promise<void> {
    const reviewId = req.params.reviewId || req.body.reviewId;
    if (reviewId === undefined) {
      res.status(400).json({ message: 'Must specify a review id' }).end();
      return;
    }
    next();
  }

  static async reviewIdValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const reviewId = req.params.reviewId || req.body.reviewId;

    if (reviewId !== undefined && reviewId.length === 0) {
      res.status(400).json({ message: 'Must specify a valid review id' }).end();
      return;
    }
    next();
  }

  static async reviewIdExists(req: Request, res: Response, next: NextFunction): Promise<void> {
    const review: Review | undefined = await ReviewRepository.findOneById(req.params.reviewId || req.body.reviewId);

    if (review === undefined) {
      res.status(404).json({ message: 'Review does not exist' }).end();
      return;
    }
    next();
  }

  static async ownsBusinessReview(req: Request, res: Response, next: NextFunction): Promise<void> {
    const review: Review | undefined = await ReviewRepository.findOneById(req.params.reviewId || req.body.reviewId);
    const businessId = review?.businessId;
    if (!businessId) {
      res.status(404).json({ message: 'Review does not exist' }).end();
      return;
    }
    const business: Business | undefined = await BusinessRepository.findOneById(businessId);
    const user = req.session.userID;
    if (!business) {
      res.status(404).json({ message: 'Business does not exist' }).end();
      return;
    }
    if (!business.isOwner(user)) {
      res.status(403).json({ message: 'Not authorized to manage this business review' }).end();
      return;
    }
    next();
  }

  static async singleReviewPerPersonPerBusiness(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userId = req.session.userID;
    const businessId = req.body.businessId;

    const review: Review | undefined = await ReviewRepository.findOneByAuthor(businessId, userId);

    if (review !== undefined) {
      res.status(409).json({ message: 'Can only review a business once per user!' }).end();
      return;
    }
    next();
  }

  static exportList(
    middlewares: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[],
  ): ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] {
    return middlewares.map(
      (f: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (
        rq: Request,
        rs: Response,
        nxt: NextFunction,
      ) =>
        Promise.resolve(
          f(rq, rs, nxt)
            .then((rz) => rz)
            .catch(nxt), // wraps every middleware function with a .catch so that error handler middleware is called
        ),
    );
  }

  static signinMiddleware = Validation.exportList([
    Validation.usernameDefined,
    Validation.passwordDefined,
    Validation.usernameValid,
    Validation.passwordValid,
    Validation.usernameExists,
    Validation.passwordValid,
    Validation.passwordCorrect,
  ]);

  static createAccountMiddleware = Validation.exportList([
    Validation.usernameDefined,
    Validation.passwordDefined,
    Validation.emailDefined,
    Validation.usernameValid,
    Validation.emailValid,
    Validation.passwordValid,
    Validation.usernameNotTaken,
    Validation.emailNotTaken,
  ]);

  static getInquiriesMiddleware = Validation.exportList([
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.businessIdExists,
  ]);

  static postInquiryMiddleware = Validation.exportList([
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.questionDefined,
    Validation.questionValid,
    Validation.businessIdExists,
  ]);

  static postAnswerMiddleware = Validation.exportList([
    Validation.inquiryIdDefined,
    Validation.inquiryIdValid,
    Validation.answerDefined,
    Validation.answerValid,
    Validation.inquiryIdExists,
    Validation.ownsBusinessInquiry,
  ]);

  static publicityToggleMiddleware = Validation.exportList([
    Validation.inquiryIdDefined,
    Validation.inquiryIdValid,
    Validation.inquiryIdExists,
    Validation.ownsBusinessInquiry,
  ]);

  // business route validations below!

  // this will get executed by MasterRouter on any route that starts with /business/:businessId
  // so any subroutes of business don't need to re-use these middleware
  static businessRouteMiddleware = Validation.exportList([
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.businessIdExists,
  ]);

  static updateNameMiddleware = Validation.exportList([
    Validation.nameDefined,
    Validation.nameValid,
    // Validation.nameNotTaken maybe? or can we have 2 businesses with the same name?
  ]);

  static updateDescriptionMiddleware = Validation.exportList([
    Validation.descriptionDefined,
    Validation.descriptionValid,
  ]);

  static updateURLMiddleware = Validation.exportList([Validation.urlDefined, Validation.urlValid]);

  static updatePhoneMiddleware = Validation.exportList([Validation.phoneDefined, Validation.phoneValid]);

  static updateHoursMiddleware = Validation.exportList([
    Validation.dayDefined,
    Validation.openTimeDefined,
    Validation.closeTimeDefined,
    Validation.dayValid,
    Validation.openTimeValid,
    Validation.closeTimeValid,
    Validation.dayExists, // enum check
  ]);

  static updatePositionMiddleware = Validation.exportList([
    Validation.addressDefined,
    Validation.latDefined,
    Validation.lngDefined,
    Validation.addressValid,
    Validation.latValid,
    Validation.lngValid,
  ]);

  static updateSocialsMiddleware = Validation.exportList([
    // this middleware means you don't have to specify ALL socials when you PUT, but you do need to specify at least one
    Validation.anySocialDefined,

    // uncommenting these would require you to have all
    // Validation.twitterDefined,
    // Validation.facebookDefined,
    // Validation.instagramDefined,

    Validation.twitterValid,
    Validation.facebookValid,
    Validation.instagramValid,
  ]);

  static updateRatingsMiddleware = Validation.exportList([
    // this middleware means you don't have to specify BOTH ratings when you PUT, but you do need to specify at least one
    Validation.anyRatingDefined,

    // uncommenting these would require you to have both
    //Validation.safetyRatingDefined,
    //Validation.serviceRatingDefined,
    Validation.safetyRatingValid,
    Validation.serviceRatingValid,
  ]);

  static addTagMiddleware = Validation.exportList([
    Validation.tagIdDefined,
    Validation.tagIdValid,
    Validation.tagExists, // enum check
    // repository ignores repetitive tags so no need to check for that
  ]);

  static deleteTagMiddleware = Validation.exportList([
    Validation.tagIdDefined,
    Validation.tagIdValid,
    Validation.tagExists, // enum check
    // repository doesn't care if the taglist doesnt have this tag
  ]);

  static addFollowerMiddleware = Validation.exportList([Validation.notFollowingBusiness]);

  static unfollowMiddleware = Validation.exportList([Validation.followingBusiness]);

  static claimBusinessMiddleware = Validation.exportList([Validation.businessIdUnclaimed]);

  static unclaimBusinessMiddleware = Validation.exportList([Validation.ownsBusiness]);

  static getReviewsMiddleware = Validation.exportList([
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.businessIdExists,
  ]);

  static postReviewMiddleware = Validation.exportList([
    Validation.businessIdDefined,
    Validation.businessIdValid,
    Validation.reviewDefined,
    Validation.reviewValid,
    Validation.businessIdExists,
    Validation.singleReviewPerPersonPerBusiness,
  ]);

  static postResponseMiddleware = Validation.exportList([
    Validation.reviewIdDefined,
    Validation.reviewIdValid,
    Validation.responseDefined,
    Validation.responseValid,
    Validation.reviewIdExists,
    Validation.ownsBusinessReview,
  ]);

  static updateAccountMiddleware = Validation.exportList([
    // this allows just one of (email, username, password) to be defined
    Validation.anyAccountInfoDefined,

    // uncommenting these would require you to have all 3 specified
    // Validation.usernameDefined,
    // Validation.emailDefined,
    // Validation.passwordDefined,

    Validation.usernameValid,
    Validation.passwordsValid,
    Validation.emailValid,

    Validation.usernameNotTaken,
    Validation.emailNotTaken,
    Validation.oldPasswordCorrect,
  ]);
}
