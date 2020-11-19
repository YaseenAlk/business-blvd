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
  private businessHours: Map<Days, { open: number; close: number }> = new Map();

  //   constructor() {}

  static fromData(businessHours: Map<Days, { open: number; close: number }>): BusinessHours {
    const hours = new BusinessHours();
    hours.businessHours = businessHours;
    return hours;
  }

  public setHours(day: Days, openTime: number, closeTime: number): void {
    this.businessHours.set(day, { open: openTime, close: closeTime });
  }

  public getHours(): Map<Days, { open: number; close: number }> {
    return new Map(this.businessHours);
  }
}
