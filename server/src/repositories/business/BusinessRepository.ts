// we may want to split this into multiple repositories. let's see how big this gets
import { v4 as uuidv4 } from 'uuid';

import { TSMap } from 'typescript-map';
import Business, { BusinessJSON } from '../../models/business/Business';

import Position from '../../models/business/Position';
import TagsList, { BusinessTags } from '../../models/business/TagsList';
import Ratings from '../../models/business/Ratings';
import Socials from '../../models/business/Socials';
import { Day, Hours, Time } from '../../models/business/Hours';

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

    const exampleHours: [Day, Time, Time][] = [
      [Day.SUNDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' }],
      [Day.MONDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.TUESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.WEDNESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.FRIDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' }],
      [Day.SATURDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' }],
    ];

    const exampleSafetyRatings: [string, number][] = [
      ['22', 4],
      ['13', 4],
    ];
    const exampleServiceRatings: [string, number][] = [
      ['22', 5],
      ['12', 5],
    ];

    const businessJSON: BusinessJSON = {
      name: "Poppa's Workshop",
      position: new Position(businessId, '123 Seasame Street', 42.362541, -71.09845),
      description: 'Where the elbow grease is used.',
      businessId: businessId,
      ratings: new Ratings(businessId, { asList: exampleServiceRatings }, { asList: exampleSafetyRatings }),
      hours: new Hours(businessId, { asListFlat: exampleHours }),
      socialMedia: new Socials(businessId, {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        instagram: 'https://www.instagram.com',
      }),
      tags: new TagsList(businessId, [BusinessTags.DELIVERY]).tags,
      // inquiries: [uuidv4(), uuidv4(), uuidv4()],
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
