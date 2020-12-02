import TagsList, { BusinessTags } from '../../models/business/TagsList';
import BusinessRepository from './BusinessRepository';

class TagsRepository {
  private data: TagsList[] = [];

  constructor() {
    const exampleList = [BusinessTags.DELIVERY, BusinessTags.HAND_SANITIZER];
    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    this.data.push(new TagsList(b1, exampleList));
    this.data.push(new TagsList(b2, exampleList));
  }

  findTagsById(businessId: string): BusinessTags[] | undefined {
    return this.data.filter((tagsList) => tagsList.businessId === businessId)[0]?.tags;
  }

  addTagsToId(businessId: string, ...newTags: BusinessTags[]): void {
    const tagsList = this.data.filter((tagsList) => tagsList.businessId === businessId)[0];
    tagsList?.tags.push(...newTags.filter((tag) => !tagsList.tags.includes(tag)));
    // await tagsList.save();
  }

  removeTagsFromId(businessId: string, ...tagsToRemove: BusinessTags[]): void {
    const tagsList = this.data.filter((tagsList) => tagsList.businessId === businessId)[0];
    if (tagsList) tagsList.tags = tagsList.tags.filter((tag) => !tagsToRemove.includes(tag));
    // await tagsList.save();
  }

  hasTag(businessId: string, tag: BusinessTags): boolean | undefined {
    return this.data.filter((tagsList) => tagsList.businessId === businessId)[0]?.tags.includes(tag);
  }
}

export = new TagsRepository();
