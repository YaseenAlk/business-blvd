import { TSMap } from 'typescript-map';

import Business from '../../models/business/Business';
import { Days, Time } from '../../models/business/BusinessHours';
import { BusinessTags } from '../../models/business/BusinessTags';
import UserRepository from '../../repositories/UserRepository';

import { ReturnObj } from '../Common';

const data: TSMap<string, Business> = new TSMap();

class BusinessController {
  constructor() {
    const b1: Business = Business.generateExample();
    const b2: Business = Business.generateExample();

    data.set(b1.businessId, b1);
    data.set(b2.businessId, b2);
  }

  /***************
  BUSINESSES METHODS
  ****************/
  businessExists(businessId: string): boolean {
    return data.has(businessId);
  }

  getBusiness(businessId: string): ReturnObj {
    if (businessId == 'all') {
      return {
        status: 200,
        data: data.values().map((business) => {
          return business.toJSON();
        }),
      };
    } else {
      const businessExists = this.businessExists(businessId);
      if (businessExists) {
        return { status: 200, data: data.get(businessId).toJSON() };
      } else {
        return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
      }
    }
  }

  /***************
  POSITION METHODS
  ****************/
  getPosition(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      const position = data.get(businessId)?.position;
      return {
        status: 200,
        data: {
          address: position?.getAddress(),
          lat: position?.getLat(),
          lng: position?.getLng(),
        },
      };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setPosition(businessId: string, address: string, lat: number, lng: number): ReturnObj {
    const business = data.get(businessId);
    if (business) {
      business.position.setAddress(address);
      business.position.setLat(lat);
      business.position.setLng(lng);
      return { status: 200, data: `Updated address successfully` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  HOURS METHODS
  ****************/
  getHours(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId)?.hours.getHours() };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setHours(businessId: string, day: Days, openTime: Time, closeTime: Time): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId)?.hours.setHours(day, openTime, closeTime) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  RATINGS METHODS
  ****************/
  getBothRatingsAndAverages(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return {
        status: 200,
        data: {
          safety: data.get(businessId)?.ratings.getSafetyRatings(),
          service: data.get(businessId)?.ratings.getServiceRatings(),
        },
      };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  getBothRatingsByUser(businessId: string, userId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      const businessRatings = data.get(businessId)?.ratings;
      return {
        status: 200,
        data: {
          safety: businessRatings.getSafetyRating(userId),
          service: businessRatings.getServiceRating(userId),
        },
      };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setRatings(businessId: string, userId: string, safetyRating: number, serviceRating: number): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      const business = data.get(businessId)?.ratings;
      if (safetyRating) {
        business.updateSafetyRating(userId, safetyRating);
      }
      if (serviceRating) {
        business.updateServiceRating(userId, serviceRating);
      }
      return { status: 200, data: 'Updated ratings!' };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  SOCIAL METHODS
  ****************/

  getSocialMedia(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      const businessSocialMedia = data.get(businessId)?.socialMedia.getSocialUrls();
      return { status: 200, data: businessSocialMedia };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setSocialMedia(
    businessId: string,
    twitter: string | undefined,
    facebook: string | undefined,
    instagram: string | undefined,
  ): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      const business = data.get(businessId)?.socialMedia;
      if (twitter) {
        business.twitter = twitter;
      }
      if (facebook) {
        business.facebook = facebook;
      }
      if (instagram) {
        business.instagram = instagram;
      }
      return { status: 200, data: 'Updated social media!' };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  claimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    const business = data.get(businessId);
    business.ownerId = userId;
    return UserRepository.addBusinessOwned(userId, businessId).then(() => {
      return { status: 200, message: 'Business successfully claimed!' };
    });
  }

  unclaimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    const business = data.get(businessId);
    business.ownerId = undefined;
    return UserRepository.removeBusinessOwned(userId, businessId).then(() => {
      return { status: 200, message: 'Business successfully unclaimed!' };
    });
  }

  /***************
  FOLLOWERS METHODS
  ****************/
  getFollowers(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).getFollowers() };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  isFollowedBy(businessId: string, userId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).isFollowedBy(userId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  unfollow(businessId: string, userId: string): Promise<ReturnObj> {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).removeFollower(userId);
      return UserRepository.findOneByID(userId).then((account) => {
        account?.unfollowBusiness(businessId);
        return {
          status: 200,
          message: `Unfollow successful!`,
        };
      });
    } else {
      return Promise.resolve({ status: 404, data: `Whoops! Unable to find that business in our datastore.` });
    }
  }

  follow(businessId: string, userId: string): Promise<ReturnObj> {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).addFollower(userId);
      return UserRepository.findOneByID(userId).then((account) => {
        account?.followBusiness(businessId);
        return {
          status: 200,
          message: `Follow successful!`,
        };
      });
    } else {
      return Promise.resolve({ status: 404, data: `Whoops! Unable to find that business in our datastore.` });
    }
  }

  /***************
  TAG METHODS
  ****************/
  getTags(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).tags };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  hasTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).hasTag(tagId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  addTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).addTag(tagId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  removeTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).removeTag(tagId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  NAME METHODS
  ****************/
  getName(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).name };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setName(businessId: string, name: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).name = name;
      return { status: 200, data: `Changed business name.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  DESCRIPTION METHODS
  ****************/
  getDescription(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).description };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setDescription(businessId: string, description: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).description = description;
      return { status: 200, data: `Changed business description.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  OWNER METHODS
  ****************/
  getOwner(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).ownerId };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setOwner(businessId: string, ownerId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).ownerId = ownerId;
      return { status: 200, data: `Changed business ownerId.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  URL METHODS
  ****************/
  getExternalURL(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).externalURL };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setExternalURL(businessId: string, url: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).externalURL = url;
      return { status: 200, data: `Changed business external url.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  PHONE METHODS
  ****************/
  getPhoneNumber(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).phone };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setPhoneNumber(businessId: string, phone: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      data.get(businessId).phone = phone;
      return { status: 200, data: `Changed business external url.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }
}

export = new BusinessController();
