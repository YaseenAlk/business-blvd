// we may want to split this into multiple repositories. let's see how big this gets
import { v4 as uuidv4 } from 'uuid';

import { TSMap } from 'typescript-map';
import Business, { BusinessJSON } from '../../models/business/Business';

import BusinessPosition from '../../models/business/BusinessPosition';
import { BusinessTags } from '../../models/business/BusinessTags';
import BusinessRatings from '../../models/business/BusinessRatings';
import BusinessSocialMedia from '../../models/business/BusinessSocialMedia';
import { Days, BusinessHours } from '../../models/business/BusinessHours';

class BusinessRepository {
  data: TSMap<string, Business> = new TSMap();
  constructor() {
    const b1: Business = this.generateExample();
    const b2: Business = this.generateExample();

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

  private generateExample(): Business {
    const businessId = uuidv4();

    const businessJSON: BusinessJSON = {
      name: "Poppa's Workshop",
      position: new BusinessPosition(businessId, '123 Seasame Street', 42.362541, -71.09845),
      description: 'Where the elbow grease is used.',
      businessId: businessId,
      ratings: new BusinessRatings(),
      hours: new BusinessHours(),
      socialMedia: new BusinessSocialMedia(
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.instagram.com',
      ),
      tags: [BusinessTags.DELIVERY],
      // inquiries: [uuidv4(), uuidv4(), uuidv4()],
      ownerId: undefined,
      followers: ['33', '13'],
      internalURL: 'business/' + businessId,
      externalURL: 'https://www.poppasworkshop.com',
      phone: '867-5309',
    };

    const exampleBusiness = new Business(businessJSON);

    // extra augmentations
    exampleBusiness.hours.setHours(Days.SUNDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' });
    exampleBusiness.hours.setHours(Days.MONDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.TUESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.WEDNESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.FRIDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.SATURDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' });

    exampleBusiness.ratings.updateSafetyRating('22', 4);
    exampleBusiness.ratings.updateSafetyRating('13', 4);
    exampleBusiness.ratings.updateServiceRating('22', 5);
    exampleBusiness.ratings.updateServiceRating('12', 5);

    return exampleBusiness;
  }
}

export = new BusinessRepository();
