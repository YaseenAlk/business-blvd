import { TSMap } from 'typescript-map';
import Ratings from '../../models/business/Ratings';

import BusinessRepository from './BusinessRepository';

class RatingsRepository {
  generateExamples(): Promise<Ratings> {
    const exampleSafetyRatings: [string, number][] = [
      ['22', 4],
      ['13', 4],
    ];
    const exampleServiceRatings: [string, number][] = [
      ['22', 5],
      ['12', 5],
    ];

    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    const r1 = new Ratings(b1, { asList: exampleServiceRatings }, { asList: exampleSafetyRatings });
    const r2 = new Ratings(b2, { asList: exampleServiceRatings }, { asList: exampleSafetyRatings });
    return Ratings.findOne({ businessId: b1 }).then((ratings) => {
      if (!ratings)
        return r1.save().then(() => {
          return r2.save();
        });
      else return ratings;
    });
  }

  findSafetyRatingsMapById(businessId: string): Promise<TSMap<string, number> | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.safetyRatings);
  }

  findServiceRatingsMapById(businessId: string): Promise<TSMap<string, number> | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.serviceRatings);
  }

  findAverageSafetyRatingsById(businessId: string): Promise<{ average: number; ratings: Array<number> } | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.getSafetyRatings());
  }

  findAverageServiceRatingsById(businessId: string): Promise<{ average: number; ratings: Array<number> } | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.getServiceRatings());
  }

  getSingleServiceRating(businessId: string, userId: string): Promise<number | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.serviceRatings.get(userId));
  }

  getSingleSafetyRating(businessId: string, userId: string): Promise<number | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => ratings?.safetyRatings.get(userId));
  }

  updateServiceRating(businessId: string, userId: string, rating: number): Promise<Ratings | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => {
      ratings?.serviceRatings.set(userId, rating);
      return ratings?.save();
    });
  }

  updateSafetyRating(businessId: string, userId: string, rating: number): Promise<Ratings | undefined> {
    return Ratings.findOne({ businessId }).then((ratings) => {
      ratings?.safetyRatings.set(userId, rating);
      return ratings?.save();
    });
  }
}
export = new RatingsRepository();
