import { Days, Time } from '../../models/business/BusinessHours';
import { BusinessTags } from '../../models/business/BusinessTags';
import UserRepository from '../../repositories/UserRepository';

import { ReturnObj } from '../Common';

import BusinessRepository from '../../repositories/BusinessRepository';

class BusinessController {
  /***************
  BUSINESSES METHODS
  ****************/

  getBusiness(businessId: string): ReturnObj {
    if (businessId == 'all') {
      return {
        status: 200,
        data: BusinessRepository.getAllBusinesses().map((business) => {
          return business.toJSON();
        }),
      };
    } else {
      const business = BusinessRepository.findOneById(businessId);
      if (business) {
        return { status: 200, data: business.toJSON() };
      } else {
        return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
      }
    }
  }

  /***************
  POSITION METHODS
  ****************/
  getPosition(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      const position = business.position;
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
    const business = BusinessRepository.findOneById(businessId);
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
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.hours.getHours() };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setHours(businessId: string, day: Days, openTime: Time, closeTime: Time): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 201, data: business.hours.setHours(day, openTime, closeTime) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  RATINGS METHODS
  ****************/
  getBothRatingsAndAverages(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return {
        status: 200,
        data: {
          safety: business.ratings.getSafetyRatings(),
          service: business.ratings.getServiceRatings(),
        },
      };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  getBothRatingsByUser(businessId: string, userId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      const businessRatings = business.ratings;
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
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      const rating = business.ratings;
      if (safetyRating) {
        rating.updateSafetyRating(userId, safetyRating);
      }
      if (serviceRating) {
        rating.updateServiceRating(userId, serviceRating);
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
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      const businessSocialMedia = business.socialMedia.getSocialUrls();
      return { status: 201, data: businessSocialMedia };
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
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      const socials = business.socialMedia;
      if (twitter) {
        socials.twitter = twitter;
      }
      if (facebook) {
        socials.facebook = facebook;
      }
      if (instagram) {
        socials.instagram = instagram;
      }
      return { status: 200, data: 'Updated social media!' };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  claimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    const business = BusinessRepository.findOneById(businessId);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    business!.ownerId = userId;
    return UserRepository.addBusinessOwned(userId, businessId).then(() => {
      return { status: 200, message: 'Business successfully claimed!' };
    });
  }

  unclaimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    const business = BusinessRepository.findOneById(businessId);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    business!.ownerId = undefined;
    return UserRepository.removeBusinessOwned(userId, businessId).then(() => {
      return { status: 200, message: 'Business successfully unclaimed!' };
    });
  }

  /***************
  FOLLOWERS METHODS
  ****************/
  getFollowers(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.getFollowers() };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  isFollowedBy(businessId: string, userId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.isFollowedBy(userId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  unfollow(businessId: string, userId: string): Promise<ReturnObj> {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.removeFollower(userId);
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
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.addFollower(userId);
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
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.tags };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  hasTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.hasTag(tagId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  addTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.addTag(tagId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  removeTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.removeTag(tagId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  NAME METHODS
  ****************/
  getName(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.name };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setName(businessId: string, name: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.name = name;
      return { status: 200, data: `Changed business name.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  DESCRIPTION METHODS
  ****************/
  getDescription(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.description };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setDescription(businessId: string, description: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.description = description;
      return { status: 200, data: `Changed business description.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  OWNER METHODS
  ****************/
  getOwner(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.ownerId };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setOwner(businessId: string, ownerId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.ownerId = ownerId;
      return { status: 200, data: `Changed business ownerId.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  URL METHODS
  ****************/
  getExternalURL(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.externalURL };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setExternalURL(businessId: string, url: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.externalURL = url;
      return { status: 200, data: `Changed business external url.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  PHONE METHODS
  ****************/
  getPhoneNumber(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.phone };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setPhoneNumber(businessId: string, phone: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.phone = phone;
      return { status: 200, data: `Changed business phone number.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }
}

export = new BusinessController();
