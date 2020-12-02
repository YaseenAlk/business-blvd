export enum BusinessTags {
  DELIVERY,
  PICKUP,
  HAND_SANITIZER,
}

// accepting suggestions for a better name for this class lol
// @Entity()
export default class TagsList {
  // @PrimaryColumn("uuid")
  businessId: string;

  // @Column({ type: "enum", enum: BusinessTags, default: [], array: true })
  tags: BusinessTags[];

  constructor(businessId: string, tags?: BusinessTags[]) {
    this.businessId = businessId;
    this.tags = Array.from(tags || []);
  }
}
