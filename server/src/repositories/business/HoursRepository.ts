import { TSMap } from 'typescript-map';
import Hours, { Day, Time, TimeBlock } from '../../models/business/Hours';

import BusinessRepository from './BusinessRepository';

class HoursRepository {
  generateExamples(): Promise<Hours> {
    const exampleHours: [Day, Time, Time][] = [
      [Day.SUNDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' }],
      [Day.MONDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.TUESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.WEDNESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.FRIDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.SATURDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' }],
    ];

    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();

    const h1 = new Hours(b1, { asListFlat: exampleHours });
    const h2 = new Hours(b2, { asListFlat: exampleHours });
    return h1.save().then(() => {
      return h2.save();
    });
  }

  // getters
  findHoursById(businessId: string): Promise<Hours | undefined> {
    return Hours.findOne({ businessId });
  }

  getHoursOnDay(businessId: string, day: Day): Promise<TimeBlock | undefined> {
    return Hours.findOne({ businessId }).then((hours) => {
      return hours?.entries.get(day);
    });
  }

  clearEntries(businessId: string): Promise<Hours | undefined> {
    return Hours.findOne({ businessId }).then((hours) => {
      if (hours) hours.entries = new TSMap<Day, TimeBlock>();
      return hours?.save();
    });
  }

  updateSingleEntry(businessId: string, day: Day, openingTime: Time, closingTime: Time): Promise<Hours | undefined> {
    return Hours.findOne({ businessId }).then((hours) => {
      hours?.entries.set(day, { open: openingTime, close: closingTime });
      return hours?.save();
    });
  }

  updateMultipleEntries(businessId: string, incoming: TSMap<Day, TimeBlock>): Promise<Hours | undefined> {
    return Hours.findOne({ businessId }).then((hours) => {
      incoming.forEach((value, key) => {
        if (key) hours?.entries.set(key, value);
      });
      return hours?.save();
    });
  }
}
export = new HoursRepository();
