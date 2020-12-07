import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity()
export default class Review extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  authorId: string;

  @Column('uuid')
  businessId: string;

  @Column()
  review: string;

  @Column({ nullable: true })
  response?: string;

  constructor(authorId?: string, businessId?: string, review?: string, response?: string) {
    super();
    this.id = uuidv4();
    this.authorId = authorId || uuidv4();
    this.businessId = businessId || uuidv4();
    this.review = review || '';
    if (response) this.response = response;
  }
}
