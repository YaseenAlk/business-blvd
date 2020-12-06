import { TSMap } from 'typescript-map';

import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

export enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export function parseDay(dayAsString: string): Day {
  return Day[dayAsString.toUpperCase() as keyof typeof Day];
}

export type Time = {
  hour: string;
  minute: string;
};

type InputEntries = {
  asMap?: TSMap<Day, TimeBlock>;
  asList?: [Day, TimeBlock][];
  asListFlat?: [Day, Time, Time][];
};

export type TimeBlock = {
  open: Time;
  close: Time;
};

@Entity()
export default class Hours extends BaseEntity {
  @PrimaryColumn('uuid')
  businessId: string;

  @Column('jsonb')
  entries: TSMap<Day, TimeBlock>;

  // allows input entries to be an existing TSMap or a list of tuples
  constructor(businessId?: string, inputEntries?: InputEntries) {
    super();
    this.businessId = businessId || '';
    this.entries = new TSMap();
    inputEntries?.asMap?.forEach((value, key) => {
      if (key) this.entries.set(key, value);
    });
    inputEntries?.asList?.forEach((entry) => this.entries.set(entry[0], entry[1]));
    inputEntries?.asListFlat?.forEach((entry) => this.entries.set(entry[0], { open: entry[1], close: entry[2] }));
  }
}
