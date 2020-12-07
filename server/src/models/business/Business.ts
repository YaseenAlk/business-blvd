import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export interface BusinessJSON {
  name: string;
  description: string;
  businessId: string;
  followers: string[];
  ownerId: string | null;
  internalURL: string;
  externalURL: string;
  phone: string;
}

@Entity()
export default class Business extends BaseEntity {
  @PrimaryColumn('uuid')
  businessId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'text', array: true })
  followers: string[];

  @Column({ nullable: true, type: 'uuid' })
  ownerId: string | null;

  @Column()
  internalURL: string;

  @Column()
  externalURL: string;

  @Column()
  phone: string;

  @Column()
  claimCode: string;

  constructor(entry?: BusinessJSON) {
    super();
    this.name = entry?.name || '';
    this.description = entry?.description || '';
    this.businessId = entry?.businessId || uuidv4();
    this.followers = Array.from(entry?.followers || []);
    this.ownerId = entry?.ownerId || null;
    this.internalURL = entry?.internalURL || '';
    this.externalURL = entry?.externalURL || '';
    this.phone = entry?.phone || '';
    this.claimCode = '123456';
  }

  public addFollower(id: string): void {
    this.followers.push(id);
  }
  public removeFollower(id: string): void {
    this.followers = this.followers.filter((follower) => follower !== id);
  }
  public getFollowers(): string[] {
    return Array.from(this.followers);
  }
  public isFollowedBy(userId: string): boolean {
    return this.followers.includes(userId);
  }

  public hasOwner(): boolean {
    return this.ownerId !== null;
  }
  public isOwner(ownerId: string): boolean {
    return this.ownerId !== null && this.ownerId === ownerId;
  }
}
