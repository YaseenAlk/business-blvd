import { Days, Time } from '../../models/business/BusinessHours';
import UserRepository from '../../repositories/UserRepository';

import { ReturnObj } from '../Common';

import BusinessRepository from '../../repositories/BusinessRepository';

class BusinessController {
  /***************
  GET BUSINESSES METHODS
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
        return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  setPosition(businessId: string, address: string, lat: number, lng: number): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      business.position.setAddress(address);
      business.position.setLat(lat);
      business.position.setLng(lng);
      return { status: 201, data: `Updated address successfully` };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  setHours(businessId: string, day: Days, openTime: Time, closeTime: Time): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 201, data: business.hours.setHours(day, openTime, closeTime) };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  /***************
  RATINGS METHODS
  ****************/
  // deprecated?
  getBothRatings(businessId: string): ReturnObj {
    const business = BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.ratings };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

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
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 201, data: 'Updated ratings!' };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 201, data: 'Updated social media!' };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  isFollowedBy(businessId: string, userId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId).isFollowedBy(userId) };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return Promise.resolve({ status: 404, data: `No business found with id ${businessId}` });
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
      return Promise.resolve({ status: 404, data: `No business found with id ${businessId}` });
    }
  }
}

export = new BusinessController();
