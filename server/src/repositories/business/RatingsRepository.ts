import { TSMap } from 'typescript-map';
import Ratings from '../../models/business/Ratings';

class RatingsRepository {
  private data: Ratings[] = [];

  findSafetyRatingsMapById(businessId: string): TSMap<string, number> | undefined {
    return this.data.filter((ratings) => ratings.businessId === businessId)[0]?.safetyRatings;
  }

  findServiceRatingsMapById(businessId: string): TSMap<string, number> | undefined {
    return this.data.filter((ratings) => ratings.businessId === businessId)[0]?.serviceRatings;
  }

  findAverageSafetyRatingsById(businessId: string): { average: number; ratings: Array<number> } | undefined {
    return this.data.filter((ratings) => ratings.businessId === businessId)[0]?.getSafetyRatings();
  }

  findAverageServiceRatingsById(businessId: string): { average: number; ratings: Array<number> } | undefined {
    return this.data.filter((ratings) => ratings.businessId === businessId)[0]?.getServiceRatings();
  }

  getSingleServiceRating(businessId: string, userId: string): number | undefined {
    const ratings = this.data.filter((ratings) => ratings.businessId === businessId)[0];
    return ratings?.serviceRatings.get(userId);
  }

  getSingleSafetyRating(businessId: string, userId: string): number | undefined {
    const ratings = this.data.filter((ratings) => ratings.businessId === businessId)[0];
    return ratings?.safetyRatings.get(userId);
  }

  updateServiceRating(businessId: string, userId: string, rating: number): void {
    const ratings = this.data.filter((ratings) => ratings.businessId === businessId)[0];
    ratings?.serviceRatings.set(userId, rating);
  }

  updateSafetyRating(businessId: string, userId: string, rating: number): void {
    const ratings = this.data.filter((ratings) => ratings.businessId === businessId)[0];
    ratings?.safetyRatings.set(userId, rating);
  }
}
export = new RatingsRepository();
