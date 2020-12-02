import { TSMap } from 'typescript-map';

import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

type InputEntries = {
  asMap?: TSMap<string, number>;
  asList?: [string, number][];
};

@Entity()
export default class Ratings extends BaseEntity {
  @PrimaryColumn('uuid')
  businessId: string;

  @Column('jsonb')
  serviceRatings: Record<string, number>;

  @Column('jsonb')
  safetyRatings: Record<string, number>;

  constructor(businessId?: string, serviceRatings?: InputEntries, safetyRatings?: InputEntries) {
    super();
    this.businessId = businessId || uuidv4();
    this.serviceRatings = {};
    this.safetyRatings = {};

    serviceRatings?.asMap?.forEach((value, key) => {
      if (key) this.serviceRatings[key] = value;
    });
    serviceRatings?.asList?.forEach((entry) => {
      this.serviceRatings[entry[0]] = entry[1];
    });

    safetyRatings?.asMap?.forEach((value, key) => {
      if (key) this.safetyRatings[key] = value;
    });
    safetyRatings?.asList?.forEach(([id, rating]) => {
      this.safetyRatings[id] = rating;
    });
  }

  private getAverage(values: number[]) {
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length || 0;
    return avg;
  }

  public getSafetyRatings(): { average: number; ratings: Array<number> } {
    const vals: number[] = Object.values(this.safetyRatings);
    return {
      average: this.getAverage(vals),
      ratings: vals,
    };
  }
  public getServiceRatings(): { average: number; ratings: Array<number> } {
    const vals: number[] = Object.values(this.serviceRatings);
    return {
      average: this.getAverage(vals),
      ratings: vals,
    };
  }
}
