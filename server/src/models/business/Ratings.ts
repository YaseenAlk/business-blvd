import { TSMap } from 'typescript-map';

type InputEntries = {
  asMap?: TSMap<string, number>;
  asList?: [string, number][];
};

// @Entity()
export default class BusinessRatings {
  // @PrimaryColumn("uuid")
  businessId: string;

  // @Column("jsonb")
  serviceRatings: TSMap<string, number>;

  // @Column("jsonb")
  safetyRatings: TSMap<string, number>;

  constructor(businessId: string, serviceRatings: InputEntries, safetyRatings: InputEntries) {
    this.businessId = businessId;
    this.serviceRatings = new TSMap();
    this.safetyRatings = new TSMap();

    serviceRatings.asMap?.forEach((value, key) => {
      if (key) this.serviceRatings.set(key, value);
    });
    serviceRatings.asList?.forEach((entry) => this.serviceRatings.set(entry[0], entry[1]));

    safetyRatings.asMap?.forEach((value, key) => {
      if (key) this.safetyRatings.set(key, value);
    });
    safetyRatings.asList?.forEach((entry) => this.safetyRatings.set(entry[0], entry[1]));
  }

  private getAverage(map: TSMap<string, number>) {
    const values = map.values();
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length || 0;
    return avg;
  }

  public getSafetyRatings(): { average: number; ratings: Array<number> } {
    return {
      average: this.getAverage(this.safetyRatings),
      ratings: this.safetyRatings.values(),
    };
  }
  public getServiceRatings(): { average: number; ratings: Array<number> } {
    return {
      average: this.getAverage(this.serviceRatings),
      ratings: this.serviceRatings.values(),
    };
  }
}
