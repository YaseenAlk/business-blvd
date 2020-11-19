export default class BusinessRatings {
  private _serviceRatingsMap: Map<string, number> = new Map();
  private _safetyRatingsMap: Map<string, number> = new Map();

  //   constructor() {}

  static fromData(serviceRatingsMap: Map<string, number>, safetyRatingsMap: Map<string, number>): BusinessRatings {
    const ratings = new BusinessRatings();
    ratings._serviceRatingsMap = new Map(serviceRatingsMap);
    ratings._safetyRatingsMap = new Map(safetyRatingsMap);
    return ratings;
  }

  public updateServiceRating(customerId: string, rating: number): void {
    this._serviceRatingsMap.set(customerId, rating);
  }
  public getServiceRating(customerId: string): number | undefined {
    return this._serviceRatingsMap.get(customerId);
  }

  public updateSafetyRating(customerId: string, rating: number): void {
    this._safetyRatingsMap.set(customerId, rating);
  }
  public getSafetyRating(customerId: string): number | undefined {
    return this._safetyRatingsMap.get(customerId);
  }
}
