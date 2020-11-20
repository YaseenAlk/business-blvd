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

export type Time = {
  hour: string;
  minute: string;
};

export class BusinessHours {
  private _businessHours: TSMap<Days, { open: Time; close: Time }> = new TSMap();

  //   constructor() {}

  static fromData(businessHours: TSMap<Days, { open: Time; close: Time }>): BusinessHours {
    const hours = new BusinessHours();
    hours._businessHours = businessHours.clone();
    return hours;
  }

  public setHours(day: Days, openTime: Time, closeTime: Time): void {
    this._businessHours.set(day, { open: openTime, close: closeTime });
  }

  public getHours(): TSMap<Days, { open: Time; close: Time }> {
    return this._businessHours.clone();
  }
}
