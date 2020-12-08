import Update from '../models/Update';

class UpdateRepository {
  findOneById(id: string): Promise<Update | undefined> {
    return Update.findOne({ id });
  }

  findAllByAuthor(userId: string): Promise<Update[]> {
    return Update.find({ authorId: userId });
  }

  // note that these will return empty lists if the business doesn't exist
  findAllByAuthorForBusiness(businessId: string, userId: string): Promise<Update[]> {
    return Update.find({ businessId, authorId: userId });
  }

  // note that these will return empty lists if the business doesn't exist
  getUpdatesFromBusiness(businessId: string): Promise<Update[]> {
    return Update.find({ businessId });
  }

  createOne(businessId: string, userId: string, content: string): Promise<Update> {
    const newUpdate = new Update(userId, businessId, content);
    return newUpdate.save();
  }

  viewUpdate(id: string, userId: string): Promise<Update | undefined> {
    return Update.findOne({ id }).then((update) => {
      if (!update?.seenBy.includes(userId)) update?.seenBy.push(userId);
      return update?.save();
    });
  }
}

export = new UpdateRepository();
