import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

export enum BusinessTags {
  DELIVERY,
  PICKUP,
  HAND_SANITIZER,
}

export function parseTag(tagAsString: string): BusinessTags {
  return BusinessTags[tagAsString.toUpperCase() as keyof typeof BusinessTags];
}

@Entity()
export default class TagsList extends BaseEntity {
  @PrimaryColumn('uuid')
  businessId: string;

  @Column({ type: 'enum', enum: BusinessTags, default: [], array: true })
  tags: BusinessTags[];

  constructor(businessId?: string, tags?: BusinessTags[]) {
    super();
    this.businessId = businessId || uuidv4();
    this.tags = Array.from(tags || []);
  }
}
