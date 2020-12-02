import Position from './Position';
import { BusinessTags } from './TagsList';
import Ratings from './Ratings';
import Socials from './Socials';
import { Hours } from './Hours';

export interface BusinessJSON {
  name: string;
  position: Position;
  description: string;
  businessId: string;
  ratings: Ratings;
  hours: Hours;
  socialMedia: Socials;
  followers: string[];
  tags: BusinessTags[];
  // inquiries: string[];
  ownerId: string | undefined;
  internalURL: string;
  externalURL: string;
  phone: string;
}

// @Entity()
export default class Business {
  // @PrimaryColumn("uuid")
  _businessId: string;

  // @Column()
  _name: string;

  // @Column()
  _position: Position;

  // @Column()
  _description: string;

  // @Column()
  _ratings: Ratings;

  // @Column()
  _hours: Hours;

  // @Column()
  _socialMedia: Socials;

  // @Column()
  _followers: Set<string> = new Set();

  // @Column()
  _tags: Set<BusinessTags>;

  //  _inquiries: string[];

  // @Column({nullable: true})
  _ownerId: string | undefined;

  // @Column()
  _internalURL: string;

  // @Column()
  _externalURL: string;

  // @Column()
  _phone: string;

  constructor(entry: BusinessJSON) {
    this._name = entry.name;
    this._position = entry.position;
    this._description = entry.description;
    this._businessId = entry.businessId;
    this._ratings = entry.ratings;
    this._hours = entry.hours;
    this._socialMedia = entry.socialMedia;
    this._followers = new Set(entry.followers);
    this._tags = new Set(entry.tags);
    // this._inquiries = Array.from(entry.inquiries);
    this._ownerId = entry.ownerId;
    this._internalURL = entry.internalURL;
    this._externalURL = entry.externalURL;
    this._phone = entry.phone;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  // get inquiries(): string[] {
  //   return Array.from(this._inquiries);
  // }

  get position(): Position {
    return this._position;
  }

  get description(): string {
    return this._description;
  }
  set description(description: string) {
    this._description = description;
  }

  get businessId(): string {
    return this._businessId;
  }

  get ratings(): Ratings {
    return this._ratings;
  }

  get hours(): Hours {
    return this._hours;
  }

  get socialMedia(): Socials {
    return this._socialMedia;
  }

  public addFollower(id: string): void {
    this._followers.add(id);
  }
  public removeFollower(id: string): void {
    this._followers.delete(id);
  }
  public getFollowers(): string[] {
    return Array.from(this._followers);
  }
  public isFollowedBy(userId: string): boolean {
    return this._followers.has(userId);
  }

  get ownerId(): string | undefined {
    return this._ownerId;
  }
  set ownerId(userId: string | undefined) {
    this._ownerId = userId;
  }
  public hasOwner(): boolean {
    return this._ownerId !== undefined;
  }
  public isOwner(ownerId: string): boolean {
    return this._ownerId !== undefined && this._ownerId === ownerId;
  }

  get externalURL(): string {
    return this._externalURL;
  }
  set externalURL(newUrl: string) {
    this._externalURL = newUrl;
  }

  get internalURL(): string {
    return this._internalURL;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(newPhone: string) {
    this._phone = newPhone;
  }

  public toJSON(): BusinessJSON {
    return {
      name: this._name,
      position: this._position,
      description: this._description,
      businessId: this._businessId,
      ratings: this._ratings,
      hours: this._hours,
      socialMedia: this._socialMedia,
      followers: Array.from(this._followers),
      tags: Array.from(this._tags),
      // inquiries: Array.from(this._inquiries),
      ownerId: this._ownerId,
      internalURL: this._internalURL,
      externalURL: this._externalURL,
      phone: this._phone,
    };
  }
}
