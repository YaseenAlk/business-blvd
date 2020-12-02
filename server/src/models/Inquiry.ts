import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

export enum Publicity {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

@Entity()
export class Inquiry extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  authorId: string;

  @Column('uuid')
  businessId: string;

  @Column()
  question: string;

  @Column()
  publicity: Publicity;

  @Column({ nullable: true, type: 'enum', enum: Publicity, default: Publicity.PRIVATE })
  answer?: string;

  constructor(authorId?: string, businessId?: string, question?: string, publicity?: Publicity, answer?: string) {
    super();
    this.id = uuidv4();
    this.authorId = authorId || uuidv4();
    this.businessId = businessId || uuidv4();
    this.question = question || '';
    this.publicity = publicity || Publicity.PRIVATE;
    if (answer) this.answer = answer;
  }
}
