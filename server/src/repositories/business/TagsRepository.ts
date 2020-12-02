import TagsList, { BusinessTags } from '../../models/business/TagsList';
import BusinessRepository from './BusinessRepository';

class TagsRepository {
  generateExamples(): Promise<TagsList> {
    const exampleList = [BusinessTags.DELIVERY, BusinessTags.HANDSANITIZER];
    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    const t1 = new TagsList(b1, exampleList);
    const t2 = new TagsList(b2, exampleList);
    return t1.save().then(() => {
      return t2.save();
    });
  }

  // getters
  findTagsById(businessId: string): Promise<BusinessTags[] | undefined> {
    return TagsList.findOne({ businessId }).then((tagsList) => tagsList?.tags);
  }

  hasTag(businessId: string, tag: BusinessTags): Promise<boolean | undefined> {
    return TagsList.findOne({ businessId }).then((tagsList) => tagsList?.tags.includes(tag));
  }

  // updaters
  addTagsToId(businessId: string, ...newTags: BusinessTags[]): Promise<BusinessTags[] | undefined> {
    return TagsList.findOne({ businessId }).then((tagsList) => {
      tagsList?.tags.push(...newTags.filter((tag) => !tagsList.tags.includes(tag)));
      return tagsList?.save().then((tagsList) => tagsList.tags);
    });
  }

  removeTagsFromId(businessId: string, ...tagsToRemove: BusinessTags[]): Promise<BusinessTags[] | undefined> {
    return TagsList.findOne({ businessId }).then((tagsList) => {
      if (tagsList) tagsList.tags = tagsList.tags.filter((tag) => !tagsToRemove.includes(tag));
      return tagsList?.save().then((tagsList) => tagsList.tags);
    });
  }
}

export = new TagsRepository();
