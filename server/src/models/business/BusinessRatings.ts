import { TSMap } from 'typescript-map';

export default class BusinessRatings {
  private _serviceRatingsMap: TSMap<string, number> = new TSMap();
  private _safetyRatingsMap: TSMap<string, number> = new TSMap();

  //   constructor() {}

  static fromData(serviceRatingsMap: TSMap<string, number>, safetyRatingsMap: TSMap<string, number>): BusinessRatings {
    const ratings = new BusinessRatings();
    ratings._serviceRatingsMap = serviceRatingsMap.clone();
    ratings._safetyRatingsMap = safetyRatingsMap.clone();
    return ratings;
  }

  get serviceRatingsMap(): TSMap<string, number> {
    return this._serviceRatingsMap.clone();
  }

  get safetyRatingsMap(): TSMap<string, number> {
    return this._safetyRatingsMap.clone();
  }

  public updateServiceRating(userId: string, rating: number): void {
    this._serviceRatingsMap.set(userId, rating);
  }
  public getServiceRating(userId: string): number | undefined {
    return this._serviceRatingsMap.get(userId);
  }

  public updateSafetyRating(userId: string, rating: number): void {
    this._safetyRatingsMap.set(userId, rating);
  }
  public getSafetyRating(userId: string): number | undefined {
    return this._safetyRatingsMap.get(userId);
  }
}
