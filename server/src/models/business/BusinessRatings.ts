export default class BusinessRatings {
  private serviceRatingsMap: Map<string, number> = new Map();
  private safetyRatingsMap: Map<string, number> = new Map();

  //   constructor() {}

  static fromData(serviceRatingsMap: Map<string, number>, safetyRatingsMap: Map<string, number>): BusinessRatings {
    const ratings = new BusinessRatings();
    ratings.serviceRatingsMap = new Map(serviceRatingsMap);
    ratings.safetyRatingsMap = new Map(safetyRatingsMap);
    return ratings;
  }

  public updateServiceRating(customerId: string, rating: number): void {
    this.serviceRatingsMap.set(customerId, rating);
  }
  public getCustomerServiceRating(customerId: string): number | undefined {
    return this.serviceRatingsMap.get(customerId);
  }

  public updateSafetyRating(customerId: string, rating: number): void {
    this.safetyRatingsMap.set(customerId, rating);
  }
  public getSafetyServiceRating(customerId: string): number | undefined {
    return this.safetyRatingsMap.get(customerId);
  }
}
