import BusinessPosition from './BusinessPosition';
import { BusinessTags } from './BusinessTags';
import BusinessRatings from './BusinessRatings';
import BusinessSocialMedia from './BusinessSocialMedia';
import { Days, BusinessHours } from './BusinessHours';

export interface BusinessJSON {
  name: string;
  position: BusinessPosition;
  description: string;
  businessId: string;
  ratings: BusinessRatings;
  hours: BusinessHours;
  socialMedia: BusinessSocialMedia;
  followers: string[];
  tags: BusinessTags[];
  // inquiries: string[];
  ownerId: string | undefined;
  internalURL: string;
  externalURL: string;
  phone: string;
}

export default class Business {
  private _name: string;
  private _position: BusinessPosition;
  private _description: string;
  private _businessId: string;
  private _ratings: BusinessRatings;
  private _hours: BusinessHours;
  private _socialMedia: BusinessSocialMedia;
  private _followers: Set<string> = new Set();
  private _tags: Set<BusinessTags>;
  // private _inquiries: string[];
  private _ownerId: string | undefined;
  private _internalURL: string;
  private _externalURL: string;
  private _phone: string;
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

  get position(): BusinessPosition {
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

  get ratings(): BusinessRatings {
    return this._ratings;
  }

  get hours(): BusinessHours {
    return this._hours;
  }

  get socialMedia(): BusinessSocialMedia {
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

  get tags(): BusinessTags[] {
    return Array.from(this._tags);
  }
  public addTag(tag: BusinessTags): void {
    this._tags.add(tag);
  }
  public removeTag(tag: BusinessTags): void {
    this._tags.delete(tag);
  }
  public hasTag(tag: BusinessTags): boolean {
    return this._tags.has(tag);
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
