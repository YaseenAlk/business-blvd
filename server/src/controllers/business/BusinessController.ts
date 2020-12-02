import Hours, { Day, Time } from '../../models/business/Hours';
import { BusinessTags } from '../../models/business/TagsList';
import UserRepository from '../../repositories/UserRepository';

import { ReturnObj } from '../Common';

import BusinessRepository from '../../repositories/business/BusinessRepository';
import PositionRepository from '../../repositories/business/PositionRepository';
import HoursRepository from '../../repositories/business/HoursRepository';
import RatingsRepository from '../../repositories/business/RatingsRepository';
import SocialsRepository from '../../repositories/business/SocialsRepository';
import TagsRepository from '../../repositories/business/TagsRepository';
import Business from '../../models/business/Business';
import { Platforms } from '../../models/business/Socials';

class BusinessController {
  /***************
  BUSINESSES METHODS
  ****************/

  getBusiness(
    businessId: string,
  ): Promise<ReturnObj & ({ data: Business[] } | { data: Business } | { message: string })> {
    if (businessId == 'all')
      return BusinessRepository.getAllBusinesses().then((businesses) => {
        return { status: 200, data: businesses };
      });
    else
      return BusinessRepository.findOneById(businessId).then((business) => {
        if (business) {
          return { status: 200, data: business };
        } else {
          return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
        }
      });
  }

  /***************
  POSITION METHODS
  ****************/
  getPosition(
    businessId: string,
  ): Promise<ReturnObj & ({ data: { address: string; lat: number; lng: number } } | { message: string })> {
    return PositionRepository.findOneById(businessId).then((position) => {
      if (position) {
        return {
          status: 200,
          data: {
            address: position.address,
            lat: position.lat,
            lng: position.lng,
          },
        };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setPosition(businessId: string, address: string, lat: number, lng: number): Promise<ReturnObj> {
    return PositionRepository.update(businessId, address, lat, lng).then((position) => {
      if (position) return { status: 200, message: `Updated address successfully` };
      else return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
    });
  }

  /***************
  HOURS METHODS
  ****************/
  getHours(businessId: string): Promise<ReturnObj & ({ data: Hours } | { message: string })> {
    return HoursRepository.findHoursById(businessId).then((hours) => {
      if (hours) {
        return { status: 200, data: hours };
      } else {
        return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setHours(
    businessId: string,
    day: Day,
    openTime: Time,
    closeTime: Time,
  ): Promise<ReturnObj & ({ data: Hours } | { message: string })> {
    return HoursRepository.updateSingleEntry(businessId, day, openTime, closeTime).then((updatedHours) => {
      if (updatedHours) {
        return { status: 201, data: updatedHours };
      } else {
        return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  RATINGS METHODS
  ****************/
  getBothRatingsAndAverages(businessId: string): ReturnObj {
    const avgSafetyRating = /* await */ RatingsRepository.findAverageSafetyRatingsById(businessId);
    const avgServiceRating = /* await */ RatingsRepository.findAverageServiceRatingsById(businessId);

    if (avgSafetyRating !== undefined && avgServiceRating !== undefined) {
      return {
        status: 200,
        data: {
          safety: avgSafetyRating,
          service: avgServiceRating,
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

  setRatings(businessId: string, userId: string, safetyRating?: number, serviceRating?: number): ReturnObj {
    const business = /* await */ BusinessRepository.findOneById(businessId);
    if (business) {
      if (safetyRating) {
        /* await */ RatingsRepository.updateSafetyRating(businessId, userId, safetyRating);
      }
      if (serviceRating) {
        /* await */ RatingsRepository.updateServiceRating(businessId, userId, serviceRating);
      }
      return { status: 200, data: 'Updated ratings!' };
    } else {
      return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
    }
  }

  /***************
  SOCIAL METHODS
  ****************/

  getSocialMedia(businessId: string): Promise<ReturnObj & ({ data: Platforms } | { message: string })> {
    return SocialsRepository.findSocialsById(businessId).then((platforms) => {
      if (platforms) {
        return { status: 201, data: platforms };
      } else {
        return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setSocialMedia(businessId: string, twitter?: string, facebook?: string, instagram?: string): Promise<ReturnObj> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        const promises: Promise<Platforms | undefined>[] = [];
        if (twitter) promises.push(SocialsRepository.updateTwitter(businessId, twitter));
        if (facebook) promises.push(SocialsRepository.updateFacebook(businessId, facebook));
        if (instagram) promises.push(SocialsRepository.updateInstagram(businessId, instagram));
        return Promise.all(promises).then(() => {
          return { status: 200, message: 'Updated social media!' };
        });
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  CLAIM METHODS
  ****************/

  claimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return BusinessRepository.claimBusiness(businessId, userId).then(() => {
          return UserRepository.addBusinessOwned(userId, businessId).then(() => {
            return { status: 200, message: 'Business successfully claimed!' };
          });
        });
      } else {
        return Promise.resolve({ status: 404, message: 'Business not found' });
      }
    });
  }

  unclaimBusiness(businessId: string, userId: string): Promise<ReturnObj> {
    // errors and validation are already handled by middleware at the router level
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return BusinessRepository.unclaimBusiness(businessId, userId).then(() => {
          return UserRepository.removeBusinessOwned(userId, businessId).then(() => {
            return { status: 200, message: 'Business successfully unclaimed!' };
          });
        });
      } else {
        return Promise.resolve({ status: 404, message: 'Business not found' });
      }
    });
  }

  /***************
  FOLLOWERS METHODS
  ****************/
  getFollowers(businessId: string): Promise<ReturnObj & ({ data: string[] } | { message: string })> {
    return BusinessRepository.getFollowersById(businessId).then((followers) => {
      if (!followers) return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      else return { status: 200, data: followers };
    });
  }

  isFollowedBy(businessId: string, userId: string): Promise<ReturnObj & ({ data: boolean } | { message: string })> {
    return BusinessRepository.followedBy(businessId, userId).then((isFollowed) => {
      if (isFollowed === undefined)
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      else return { status: 200, data: isFollowed };
    });
  }

  unfollow(businessId: string, userId: string): Promise<ReturnObj> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return BusinessRepository.removeFollower(businessId, userId).then(() => {
          return UserRepository.unfollowBusiness(businessId, userId).then(() => {
            return {
              status: 200,
              message: `Unfollow successful!`,
            };
          });
        });
      } else {
        return Promise.resolve({ status: 404, message: `Whoops! Unable to find that business in our datastore.` });
      }
    });
  }

  follow(businessId: string, userId: string): Promise<ReturnObj> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return BusinessRepository.addFollower(businessId, userId).then(() => {
          return UserRepository.followBusiness(userId, businessId).then(() => {
            return {
              status: 200,
              message: `Follow successful!`,
            };
          });
        });
      } else {
        return Promise.resolve({ status: 404, message: `Whoops! Unable to find that business in our datastore.` });
      }
    });
  }

  /***************
  TAG METHODS
  ****************/
  getTags(businessId: string): Promise<ReturnObj & ({ data: BusinessTags[] } | { message: string })> {
    return TagsRepository.findTagsById(businessId).then((tags) => {
      if (tags) {
        return { status: 200, data: tags };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  hasTag(businessId: string, tagId: BusinessTags): Promise<ReturnObj & ({ data: boolean } | { message: string })> {
    return TagsRepository.hasTag(businessId, tagId).then((hasTag) => {
      if (hasTag !== undefined) {
        return { status: 200, data: hasTag };
      } else {
        return { status: 404, data: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  addTag(businessId: string, tagId: BusinessTags): Promise<ReturnObj> {
    return TagsRepository.addTagsToId(businessId, tagId).then((tags) => {
      if (tags) {
        return { status: 200, message: `Succesfully added tag ${tagId}` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  removeTag(businessId: string, tagId: BusinessTags): Promise<ReturnObj> {
    return TagsRepository.removeTagsFromId(businessId, tagId).then((tags) => {
      if (tags) {
        return { status: 200, message: `Successfully removed tag ${tagId}` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  NAME METHODS
  ****************/
  getName(businessId: string): Promise<ReturnObj & ({ data: string } | { message: string })> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return { status: 200, data: business.name };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setName(businessId: string, name: string): Promise<ReturnObj> {
    return BusinessRepository.updateNameById(businessId, name).then((business) => {
      if (business) {
        return { status: 200, message: `Changed business name.` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  DESCRIPTION METHODS
  ****************/
  getDescription(businessId: string): Promise<ReturnObj & ({ data: string } | { message: string })> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return { status: 200, data: business.description };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setDescription(businessId: string, description: string): Promise<ReturnObj> {
    return BusinessRepository.updateDescriptionById(businessId, description).then((business) => {
      if (business) {
        return { status: 200, message: `Changed business description.` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  OWNER METHODS
  ****************/
  getOwner(businessId: string): Promise<ReturnObj & ({ data: string } | { message: string })> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        if (business.ownerId) return { status: 200, data: business.ownerId };
        else return { status: 404, message: 'Business not currently claimed' };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setOwner(businessId: string, ownerId: string): Promise<ReturnObj> {
    return BusinessRepository.updateOwnerById(businessId, ownerId).then((business) => {
      // do we need to also update User Repository? not sure if this route is even needed if we already have another route
      if (business) {
        return { status: 200, message: `Changed business ownerId.` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  URL METHODS
  ****************/
  getExternalURL(businessId: string): Promise<ReturnObj & ({ data: string } | { message: string })> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return { status: 200, data: business.externalURL };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setExternalURL(businessId: string, url: string): Promise<ReturnObj> {
    return BusinessRepository.updateExternalURLById(businessId, url).then((business) => {
      if (business) {
        return { status: 200, message: `Changed business external url.` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  /***************
  PHONE METHODS
  ****************/
  getPhoneNumber(businessId: string): Promise<ReturnObj & ({ data: string } | { message: string })> {
    return BusinessRepository.findOneById(businessId).then((business) => {
      if (business) {
        return { status: 200, data: business.phone };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }

  setPhoneNumber(businessId: string, phone: string): Promise<ReturnObj> {
    return BusinessRepository.updatePhoneNumberById(businessId, phone).then((business) => {
      if (business) {
        return { status: 200, message: `Changed business phone number.` };
      } else {
        return { status: 404, message: `Whoops! Unable to find that business in our datastore.` };
      }
    });
  }
}

export = new BusinessController();
