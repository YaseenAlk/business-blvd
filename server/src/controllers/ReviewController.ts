import ReviewRepository from '../repositories/ReviewRepository';
import BusinessRepository from '../repositories/business/BusinessRepository';
import Review from '../models/Review';
import { ReturnObj } from './Common';

class ReviewController {
  getReviewsFromBusiness(businessId: string): Promise<ReturnObj & ({ data: Review[] } | { message: string })> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (!business) return { status: 404, message: 'Business not found' };
      else
        return ReviewRepository.getReviewsFromBusiness(businessId).then((reviews) => {
          return { status: 200, data: reviews };
        });
    });
  }

  createReview(businessId: string, review: string, userId: string): Promise<ReturnObj> {
    return ReviewRepository.createOne(businessId, userId, review).then(() => {
      return { status: 200, message: 'Successfully created review!' };
    });
  }

  postResponse(id: string, response: string): Promise<ReturnObj> {
    return ReviewRepository.postResponse(id, response).then(() => {
      return { status: 200, message: 'Successfully posted response!' };
    });
  }
}

export = new ReviewController();
