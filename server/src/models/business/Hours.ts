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

type InputEntries = {
  asMap?: TSMap<Days, TimeBlock>;
  asList?: [Days, TimeBlock][];
  asListFlat?: [Days, Time, Time][];
};

export type TimeBlock = {
  open: Time;
  close: Time;
};

// @Entity()
export class BusinessHours {
  // @PrimaryColumn("uuid")
  businessId: string;

  // @Column("jsonb")
  entries: TSMap<Days, TimeBlock>;

  // allows input entries to be an existing TSMap or a list of tuples
  constructor(businessId: string, inputEntries: InputEntries) {
    this.businessId = businessId;
    this.entries = new TSMap();
    inputEntries.asMap?.forEach((value, key) => {
      if (key) this.entries.set(key, value);
    });
    inputEntries.asList?.forEach((entry) => this.entries.set(entry[0], entry[1]));
    inputEntries.asListFlat?.forEach((entry) => this.entries.set(entry[0], { open: entry[1], close: entry[2] }));
  }
}
