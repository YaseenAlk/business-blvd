import Review from '../models/Review';

class ReviewRepository {
  findOneById(id: string): Promise<Review | undefined> {
    return Review.findOne({ id });
  }

  findOneByAuthor(businessId: string, userId: string): Promise<Review | undefined> {
    return Review.findOne({ businessId, authorId: userId });
  }

  // note that these will return empty lists if the business doesn't exist
  getReviewsFromBusiness(businessId: string): Promise<Review[]> {
    return Review.find({ businessId });
  }

  createOne(businessId: string, userId: string, review: string): Promise<Review> {
    const newReview = new Review(userId, businessId, review);
    return newReview.save();
  }

  postResponse(id: string, response: string): Promise<Review | undefined> {
    return Review.findOne({ id }).then((review: Review | undefined) => {
      if (review) review.response = response;
      return review?.save();
    });
  }
}

export = new ReviewRepository();
