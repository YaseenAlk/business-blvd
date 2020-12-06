import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

export enum BusinessTags {
  DELIVERY,
  PICKUP,
  HAND_SANITIZER,
  NO_TOUCH_DOORS,
  CASHLESS,
  OUTDOOR_SEATING,
  STAFF_REGULARLY_TESTED,
  PLEXIGLASS_SHIELDS,
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
