// we may want to split this into multiple repositories. let's see how big this gets
import { v4 as uuidv4 } from 'uuid';

import { TSMap } from 'typescript-map';
import Business, { BusinessJSON } from '../../models/business/Business';

class BusinessRepository {
  private data: TSMap<string, Business> = new TSMap();
  private exampleIds: [string, string];
  constructor() {
    const b1: Business = this.generateExample();
    const b2: Business = this.generateExample();

    this.data.set(b1.businessId, b1);
    this.data.set(b2.businessId, b2);
    this.exampleIds = [b1.businessId, b2.businessId];
  }

  getExampleBusinessIDs(): [string, string] {
    return this.exampleIds;
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

  private generateExample(): Business {
    const businessId = uuidv4();

    const businessJSON: BusinessJSON = {
      name: "Poppa's Workshop",
      description: 'Where the elbow grease is used.',
      businessId: businessId,
      ownerId: undefined,
      followers: ['33', '13'],
      internalURL: 'business/' + businessId,
      externalURL: 'https://www.poppasworkshop.com',
      phone: '867-5309',
    };

    const exampleBusiness = new Business(businessJSON);

    return exampleBusiness;
  }
}

export = new BusinessRepository();
