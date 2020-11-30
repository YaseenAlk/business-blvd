// we may want to split this into multiple repositories. let's see how big this gets
import { TSMap } from 'typescript-map';
import Business from '../models/business/Business';

class BusinessRepository {
  data: TSMap<string, Business> = new TSMap();
  constructor() {
    const b1: Business = Business.generateExample();
    const b2: Business = Business.generateExample();

    this.data.set(b1.businessId, b1);
    this.data.set(b2.businessId, b2);
  }

  businessExists(businessId: string): boolean {
    return this.data.has(businessId);
  }

  getAllBusinesses(): Business[] {
    return this.data.values();
  }

  findOneById(id: string): Business | undefined {
    return this.data.get(id);
  }
}

export = new BusinessRepository();
