import BusinessExamples from '../BusinessExamples';
import Business from '../../models/business/Business';

class BusinessRepository {
  initializeDBIfEmpty(): Promise<void> {
    return this.getAllBusinessIDs().then((businesses) => {
      if (businesses.length === 0) {
        BusinessExamples.loadCSV();
      }
    });
  }

  // getters
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
}

export = new BusinessRepository();
