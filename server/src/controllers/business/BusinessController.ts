import { TSMap } from 'typescript-map';

import Business from '../../models/business/Business';
import { Days, Time } from '../../models/business/BusinessHours';

type ReturnObj = {
  status: number;
  data: any;
};

const data: TSMap<string, Business> = new TSMap();

class BusinessController {
  constructor() {
    const b1: Business = Business.generateExample();
    const b2: Business = Business.generateExample();

    data.set(b1.businessId, b1);
    data.set(b2.businessId, b2);
  }

  /***************
  GET BUSINESSES METHODS
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
        return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  setPosition(businessId: string, address: string, lat: number, lng: number): ReturnObj {
    const business = data.get(businessId);
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
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId)?.hours.getHours() };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  setHours(businessId: string, day: Days, openTime: Time, closeTime: Time): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 201, data: data.get(businessId)?.hours.setHours(day, openTime, closeTime) };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  /***************
  RATINGS METHODS
  ****************/
  getBothRatings(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      return { status: 200, data: data.get(businessId)?.ratings };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 404, data: `No business found with id ${businessId}` };
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
      return { status: 201, data: 'Updated ratings!' };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }

  /***************
  SOCIAL METHODS
  ****************/

  getSocialMedia(businessId: string): ReturnObj {
    const businessExists = this.businessExists(businessId);
    if (businessExists) {
      const businessSocialMedia = data.get(businessId)?.socialMedia.getSocialUrls();
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
      return { status: 201, data: 'Updated social media!' };
    } else {
      return { status: 404, data: `No business found with id ${businessId}` };
    }
  }
}

export = new BusinessController();
