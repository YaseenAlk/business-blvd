import { TSMap } from 'typescript-map';
import { BusinessHours, Days, Time, TimeBlock } from '../../models/business/Hours';

class HoursRepository {
  private data: BusinessHours[] = [];

  findHoursById(businessId: string): BusinessHours | undefined {
    return this.data.filter((hours) => hours.businessId === businessId)[0];
  }

  getHoursOnDay(businessId: string, day: Days): TimeBlock | undefined {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    return businessHours?.entries.get(day);
  }

  clearEntries(businessId: string) {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    businessHours.entries = new TSMap<Days, TimeBlock>();
    // await businessHours.save();
  }

  updateSingleEntry(businessId: string, day: Days, openingTime: Time, closingTime: Time): BusinessHours | undefined {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    businessHours.entries.set(day, { open: openingTime, close: closingTime });
    // await businessHours.save();
    return businessHours;
  }

  updateMultipleEntries(businessId: string, incoming: TSMap<Days, TimeBlock>) {
    const businessHours = this.data.filter((hours) => hours.businessId === businessId)[0];
    incoming.forEach((value, key) => {
      if (key) businessHours.entries.set(key, value);
    });
    // await businessHours.save();
  }
}
export = new HoursRepository();
