export interface BusinessJSON {
  name: string;
  description: string;
  businessId: string;
  followers: string[];
  ownerId: string | undefined;
  internalURL: string;
  externalURL: string;
  phone: string;
}

// @Entity()
export default class Business {
  // @PrimaryColumn("uuid")
  businessId: string;

  // @Column()
  name: string;

  // @Column()
  description: string;

  // @Column()
  followers: string[];

  // @Column({nullable: true, type: 'uuid'})
  ownerId: string | undefined;

  // @Column()
  internalURL: string;

  // @Column()
  externalURL: string;

  // @Column()
  phone: string;

  constructor(entry: BusinessJSON) {
    this.name = entry.name;
    this.description = entry.description;
    this.businessId = entry.businessId;
    this.followers = Array.from(entry.followers);
    this.ownerId = entry.ownerId;
    this.internalURL = entry.internalURL;
    this.externalURL = entry.externalURL;
    this.phone = entry.phone;
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
    return this.ownerId !== undefined;
  }
  public isOwner(ownerId: string): boolean {
    return this.ownerId !== undefined && this.ownerId === ownerId;
  }

  // this might not really be necessary anymore
  // we'll probably axe this
  public toJSON(): BusinessJSON {
    return {
      name: this.name,
      description: this.description,
      businessId: this.businessId,
      followers: Array.from(this.followers),
      ownerId: this.ownerId,
      internalURL: this.internalURL,
      externalURL: this.externalURL,
      phone: this.phone,
    };
  }
}
