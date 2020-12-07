// we may want to split this into multiple repositories. let's see how big this gets
import { v4 as uuidv4 } from 'uuid';

import Business, { BusinessJSON } from '../../models/business/Business';

class BusinessRepository {
  private exampleIds: [string, string];
  private b1: Business;
  private b2: Business;

  constructor() {
    this.b1 = this.generateExample(true);
    this.b2 = this.generateExample(false);
    this.exampleIds = [this.b1.businessId, this.b2.businessId];
  }

  generateExamples(): Promise<Business> {
    return Business.findOne({ businessId: this.b1.businessId }).then((business) => {
      if (!business)
        return this.b1.save().then(() => {
          return this.b2.save();
        });
      else return business;
    });
  }

  // getters

  getExampleBusinessIDs(): [string, string] {
    return this.exampleIds;
  }

  getAllBusinessIDs(): Promise<string[]> {
    return Business.find().then((businessList) => businessList.map((business) => business.businessId));
  }

  businessExists(businessId: string): Promise<boolean> {
    return Business.findOne({ businessId }).then((business) => business !== undefined);
  }

  getAllBusinesses(): Promise<Business[]> {
    return Business.find().then((businesses) => businesses);
  }

  findOneById(businessId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId });
  }

  getFollowersById(businessId: string): Promise<string[] | undefined> {
    return Business.findOne({ businessId }).then((business) => business?.getFollowers());
  }

  followedBy(businessId: string, userId: string): Promise<boolean | undefined> {
    return Business.findOne({ businessId }).then((business) => business?.isFollowedBy(userId));
  }

  // updaters

  clearAllClaimed(): Promise<void> {
    return Business.find().then((businesses) => {
      businesses.forEach(async (business) => {
        business.ownerId = null;
        await business.save();
      });
    });
  }

  claimBusiness(businessId: string, userId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.ownerId = userId;
      return business?.save();
    });
  }

  unclaimBusiness(businessId: string, userId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business && userId === business.ownerId) business.ownerId = null;
      return business?.save();
    });
  }

  removeFollower(businessId: string, userId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      business?.removeFollower(userId);
      return business?.save();
    });
  }

  addFollower(businessId: string, userId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      business?.addFollower(userId);
      return business?.save();
    });
  }

  updateNameById(businessId: string, name: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.name = name;
      return business?.save();
    });
  }

  updateDescriptionById(businessId: string, description: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.description = description;
      return business?.save();
    });
  }

  updateOwnerById(businessId: string, ownerId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.ownerId = ownerId;
      return business?.save();
    });
  }

  updateExternalURLById(businessId: string, externalURL: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.externalURL = externalURL;
      return business?.save();
    });
  }

  updatePhoneNumberById(businessId: string, phone: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.phone = phone;
      return business?.save();
    });
  }

  private generateExample(a: boolean): Business {
    const businessId = a ? 'bb0cdddf-fb80-42c8-9be2-1560e96adeb5' : '2bd3cc40-937d-4c1a-87f5-0e9568132ed5';

    const businessJSON: BusinessJSON = {
      name: "Poppa's Workshop",
      description: 'Where the elbow grease is used.',
      businessId: businessId,
      ownerId: null,
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
