import { TSMap } from 'typescript-map';

export enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export class BusinessHours {
  private _businessHours: TSMap<Days, { open: number; close: number }> = new TSMap();

  //   constructor() {}

  static fromData(businessHours: TSMap<Days, { open: number; close: number }>): BusinessHours {
    const hours = new BusinessHours();
    hours._businessHours = businessHours.clone();
    return hours;
  }

  public setHours(day: Days, openTime: number, closeTime: number): void {
    this._businessHours.set(day, { open: openTime, close: closeTime });
  }

  public getHours(): TSMap<Days, { open: number; close: number }> {
    return this._businessHours.clone();
  }
}
