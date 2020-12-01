import { Days, Time } from '../../models/business/Hours';
import { BusinessTags } from '../../models/business/TagsList';
import UserRepository from '../../repositories/UserRepository';

import { ReturnObj } from '../Common';

import BusinessRepository from '../../repositories/business/BusinessRepository';
import PositionRepository from '../../repositories/business/PositionRepository';
import HoursRepository from '../../repositories/business/HoursRepository';
import RatingsRepository from '../../repositories/business/RatingsRepository';
import SocialsRepository from '../../repositories/business/SocialsRepository';
import TagsRepository from '../../repositories/business/TagsRepository';

class BusinessController {
  /***************
  BUSINESSES METHODS
  ****************/

  getBusiness(businessId: string): ReturnObj {
    if (businessId == 'all') {
      return {
        status: 200,
        data: /* await */ BusinessRepository.getAllBusinesses().map((business) => {
          return business.toJSON();
        }),
      };
    } else {
      const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const position = /* await */ PositionRepository.findOneById(businessId);
    if (position) {
      return {
        status: 200,
        data: {
          address: position?.address,
          lat: position?.lat,
          lng: position?.lng,
        },
      };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setPosition(businessId: string, address: string, lat: number, lng: number): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      /* await */ PositionRepository.update(businessId, address, lat, lng);
      return { status: 200, data: `Updated address successfully` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  HOURS METHODS
  ****************/
  getHours(businessId: string): ReturnObj {
    const hours = /* await */ HoursRepository.findHoursById(businessId);
    if (hours) {
      return { status: 200, data: hours };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setHours(businessId: string, day: Days, openTime: Time, closeTime: Time): ReturnObj {
    const hours = /* await */ HoursRepository.findHoursById(businessId);
    if (hours) {
      const updatedHours = /* await */ HoursRepository.updateSingleEntry(businessId, day, openTime, closeTime);
      return { status: 201, data: updatedHours };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  RATINGS METHODS
  ****************/
  getBothRatingsAndAverages(businessId: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const safetyRating = /* await */ RatingsRepository.getSingleSafetyRating(businessId, userId);
    const serviceRating = /* await */ RatingsRepository.getSingleServiceRating(businessId, userId);
    if (safetyRating && serviceRating) {
      return {
        status: 200,
        data: {
          safety: safetyRating,
          service: serviceRating,
        },
      };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setRatings(businessId: string, userId: string, safetyRating: number, serviceRating: number): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      if (safetyRating) {
        RatingsRepository.updateSafetyRating(businessId, userId, safetyRating);
      }
      if (serviceRating) {
        RatingsRepository.updateServiceRating(businessId, userId, serviceRating);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      const businessSocialMedia = /* await */ SocialsRepository.findSocialsById(businessId);
      return { status: 201, data: businessSocialMedia };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setSocialMedia(businessId: string, twitter?: string, facebook?: string, instagram?: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      if (twitter) {
        /* await */ SocialsRepository.updateTwitter(businessId, twitter);
      }
      if (facebook) {
        /* await */ SocialsRepository.updateFacebook(businessId, facebook);
      }
      if (instagram) {
        /* await */ SocialsRepository.updateInstagram(businessId, instagram);
      }
      return { status: 200, data: 'Updated social media!' };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  claimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    const business = /* await */ BusinessRepository.findOneById(businessId);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    business!.ownerId = userId;
    return UserRepository.addBusinessOwned(userId, businessId).then(() => {
      return { status: 200, message: 'Business successfully claimed!' };
    });
  }

  unclaimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.getFollowers() };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  isFollowedBy(businessId: string, userId: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.isFollowedBy(userId) };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  unfollow(businessId: string, userId: string): Promise<ReturnObj> {
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      const tags = TagsRepository.findTagsById(businessId);
      return { status: 200, data: tags };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  hasTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      const hasTag = /* await */ TagsRepository.hasTag(businessId, tagId);
      return { status: 200, data: hasTag };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  addTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      /* await */ TagsRepository.addTagsToId(businessId, tagId);
      return { status: 200, message: `Succesfully added tag ${tagId}` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  removeTag(businessId: string, tagId: BusinessTags): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      /* await */ TagsRepository.removeTagsFromId(businessId, tagId);
      return { status: 200, data: `Successfully removed tag ${tagId}` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  NAME METHODS
  ****************/
  getName(businessId: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.name };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setName(businessId: string, name: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.description };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setDescription(businessId: string, description: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.ownerId };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setOwner(businessId: string, ownerId: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.externalURL };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setExternalURL(businessId: string, url: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
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
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      return { status: 200, data: business.phone };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  setPhoneNumber(businessId: string, phone: string): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      business.phone = phone;
      return { status: 200, data: `Changed business external url.` };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }
}

export = new BusinessController();
