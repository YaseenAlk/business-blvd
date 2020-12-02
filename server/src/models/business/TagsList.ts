import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

export enum BusinessTags {
  DELIVERY,
  PICKUP,
  HANDSANITIZER,
}

@Entity()
export default class TagsList extends BaseEntity {
  @PrimaryColumn('uuid')
  businessId: string;

  @Column({ type: 'enum', enum: BusinessTags, default: [], array: true })
  tags: BusinessTags[];

  constructor(businessId: string, tags?: BusinessTags[]) {
    super();
    this.businessId = businessId;
    this.tags = Array.from(tags || []);
  }
}
