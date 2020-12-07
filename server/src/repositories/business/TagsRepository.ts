import TagsList, { BusinessTags } from '../../models/business/TagsList';

class TagsRepository {
  generateExamples(businessId: string) {
    const allEnumsList = [
      BusinessTags.DELIVERY,
      BusinessTags.PICKUP,
      BusinessTags.HAND_SANITIZER,
      BusinessTags.NO_TOUCH_DOORS,
      BusinessTags.CASHLESS,
      BusinessTags.OUTDOOR_SEATING,
      BusinessTags.STAFF_REGULARLY_TESTED,
      BusinessTags.PLEXIGLASS_SHIELDS,
    ];
    const totalEnumsQuantity = allEnumsList.length;
    const desiredEnumsQuantity = Math.floor(Math.random() * (totalEnumsQuantity + 1));

    const randomEnumList = this.getRandomEnumsList(allEnumsList, desiredEnumsQuantity);

    const tags = new TagsList(businessId, randomEnumList);
    return tags.save();
  }

  getRandomEnumsList(allEnumsList: BusinessTags[], desiredEnumsQuantity: number): BusinessTags[] {
    const bucket: BusinessTags[] = [];

    for (let i = 0; i <= desiredEnumsQuantity; i++) {
      bucket.push(this.getRandomFromBucket(allEnumsList));
    }
    return bucket;
  }

  getRandomFromBucket(bucket: BusinessTags[]) {
    const randomIndex = Math.floor(Math.random() * bucket.length);
    return bucket.splice(randomIndex, 1)[0];
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
