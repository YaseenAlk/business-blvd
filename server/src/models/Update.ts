import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export default class Update extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  authorId: string;

  @Column('uuid')
  businessId: string;

  @Column()
  content: string;

  // probably won't have time to implement, but this could be helpful for keeping track of who has viewed the update
  @Column('uuid', { array: true })
  seenBy: string[];

  // this could also be stored when the update is created, which would allow the repository to send back updates in order of timestamp
  @Column('timestamp')
  dateCreated: Date;

  constructor(authorId?: string, businessId?: string, content?: string, creationTime?: Date) {
    super();
    this.id = uuidv4();
    this.authorId = authorId || uuidv4();
    this.businessId = businessId || uuidv4();
    this.content = content || '';
    this.seenBy = [];
    this.dateCreated = creationTime || new Date();
  }
}
