import { TSMap } from 'typescript-map';
import { Hours, Day, Time, TimeBlock } from '../../models/business/Hours';

import BusinessRepository from './BusinessRepository';

class HoursRepository {
  private data: Hours[] = [];

  constructor() {
    const exampleHours: [Day, Time, Time][] = [
      [Day.SUNDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' }],
      [Day.MONDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.TUESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.WEDNESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.FRIDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.SATURDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' }],
    ];

    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();

    this.data.push(new Hours(b1, { asListFlat: exampleHours }));
    this.data.push(new Hours(b2, { asListFlat: exampleHours }));
  }

  findHoursById(businessId: string): Hours | undefined {
    return this.data.filter((hours) => hours.businessId === businessId)[0];
  }

  getHoursOnDay(businessId: string, day: Day): TimeBlock | undefined {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    return businessHours?.entries.get(day);
  }

  clearEntries(businessId: string) {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    if (businessHours) businessHours.entries = new TSMap<Day, TimeBlock>();
    // await businessHours.save();
  }

  updateSingleEntry(businessId: string, day: Day, openingTime: Time, closingTime: Time): Hours | undefined {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    businessHours?.entries.set(day, { open: openingTime, close: closingTime });
    // await businessHours.save();
    return businessHours;
  }

  updateMultipleEntries(businessId: string, incoming: TSMap<Day, TimeBlock>) {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    incoming.forEach((value, key) => {
      if (key) businessHours?.entries.set(key, value);
    });
    // await businessHours.save();
  }
}
export = new HoursRepository();
