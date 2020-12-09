import Ratings from '../../models/business/Ratings';

import { v4 as uuidv4 } from 'uuid';

class RatingsRepository {
  generateExample(businessId: string) {
    const userId1 = uuidv4();
    const userId2 = uuidv4();

    // 1 - 5 inclusive
    const randNum1_1 = Math.floor(Math.random() * 3) + 3;
    const randNum1_2 = Math.floor(Math.random() * 3) + 3;
    const randNum2_1 = Math.floor(Math.random() * 3) + 3;
    const randNum2_2 = Math.floor(Math.random() * 3) + 3;

    const exampleSafetyRatings: [string, number][] = [
      [userId1, randNum1_1],
      [userId2, randNum2_1],
    ];
    const exampleServiceRatings: [string, number][] = [
      [userId1, randNum1_2],
      [userId2, randNum2_2],
    ];

    const ratings = new Ratings(businessId, { asList: exampleServiceRatings }, { asList: exampleSafetyRatings });
    return ratings.save();
  }

  findSafetyRatingsMapById(businessId: string): Promise<Record<string, number> | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.safetyRatings);
  }

  findServiceRatingsMapById(businessId: string): Promise<Record<string, number> | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.serviceRatings);
  }

  findAverageSafetyRatingsById(businessId: string): Promise<{ average: number; ratings: Array<number> } | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.getSafetyRatings());
  }

  findAverageServiceRatingsById(businessId: string): Promise<{ average: number; ratings: Array<number> } | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.getServiceRatings());
  }

  getSingleServiceRating(businessId: string, userId: string): Promise<number | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.serviceRatings[userId]);
  }

  getSingleSafetyRating(businessId: string, userId: string): Promise<number | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.safetyRatings[userId]);
  }

  updateServiceRating(businessId: string, userId: string, rating: number): Promise<Ratings | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => {
      if (ratings) ratings.serviceRatings[userId] = rating;
      return ratings?.save();
    });
  }

  updateSafetyRating(businessId: string, userId: string, rating: number): Promise<Ratings | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => {
      if (ratings) ratings.safetyRatings[userId] = rating;
      return ratings?.save();
    });
  }
}
export = new RatingsRepository();
