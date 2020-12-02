import TagsList, { BusinessTags } from '../../models/business/TagsList';

class TagsRepository {
  private data: TagsList[] = [];

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
