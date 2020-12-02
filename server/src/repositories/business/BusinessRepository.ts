// we may want to split this into multiple repositories. let's see how big this gets
import { v4 as uuidv4 } from 'uuid';

import Business, { BusinessJSON } from '../../models/business/Business';

class BusinessRepository {
  private exampleIds: [string, string];
  constructor() {
    const b1: Business = this.generateExample();
    const b2: Business = this.generateExample();
    this.exampleIds = [b1.businessId, b2.businessId];
  }

  generateExamples(): Promise<Business> {
    const b1: Business = this.generateExample();
    const b2: Business = this.generateExample();
    return b1.save().then(() => {
      return b2.save();
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
  claimBusiness(businessId: string, userId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business) business.ownerId = userId;
      return business?.save();
    });
  }

  unclaimBusiness(businessId: string, userId: string): Promise<Business | undefined> {
    return Business.findOne({ businessId }).then((business) => {
      if (business && userId === business.ownerId) business.ownerId = undefined;
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
