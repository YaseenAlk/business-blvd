import Update from '../models/Update';
import UpdateRepository from '../repositories/UpdateRepository';
import UserRepository from '../repositories/UserRepository';
import { ReturnObj } from './Common';

class UpdateController {
  getUpdatesForUser(userId: string): Promise<ReturnObj & ({ data: Update[] } | { message: string })> {
    return UserRepository.getFollowing(userId).then((following) => {
      if (!following) return { status: 404, message: 'User account not found in our records' };

      return Promise.all(following.map((businessId) => UpdateRepository.getUpdatesFromBusiness(businessId))).then(
        (nestedList) => {
          return { status: 200, data: nestedList.flat() };
        },
      );
    });
  }

  getUpdatesFromBusiness(businessId: string): Promise<ReturnObj & ({ data: Update[] } | { message: string })> {
    return UpdateRepository.getUpdatesFromBusiness(businessId).then((updates) => {
      return { status: 200, data: updates };
    });
  }

  postUpdate(businessId: string, authorId: string, content: string): Promise<ReturnObj> {
    return UpdateRepository.createOne(businessId, authorId, content).then(() => {
      return { status: 200, message: 'Update posted successfully!' };
    });
  }
}

export = new UpdateController();
