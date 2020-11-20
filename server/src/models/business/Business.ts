import { v4 as uuidv4 } from 'uuid';

import BusinessLocation from './BusinessLocation';
import { BusinessTags } from './BusinessTags';
import BusinessRatings from './BusinessRatings';
import BusinessSocialMedia from './BusinessSocialMedia';
import { Days, BusinessHours } from './BusinessHours';

interface BusinessEntry {
  name: string;
  location: BusinessLocation;
  description: string;
  businessId: string;
  ratings: BusinessRatings;
  hours: BusinessHours;
  socialMedia: BusinessSocialMedia;
  tags: Set<BusinessTags>;
  // faq: BusinessFAQ,
  ownerId: string;
  url: string;
  phone: string;
}

export default class Business {
  private _name: string;
  private _location: BusinessLocation;
  private _description: string;
  private _businessId: string;
  private _ratings: BusinessRatings;
  private _hours: BusinessHours;
  private _socialMedia: BusinessSocialMedia;
  private _followers: Set<string> = new Set();
  private _tags: Set<BusinessTags>;
  // private faq: BusinessFAQ;
  private _ownerId: string;
  private _url: string;
  private _phone: string;
  constructor(entry: BusinessEntry) {
    this._name = entry.name;
    this._location = entry.location;
    this._description = entry.description;
    this._businessId = entry.businessId;
    this._ratings = entry.ratings;
    this._hours = entry.hours;
    this._socialMedia = entry.socialMedia;
    this._tags = entry.tags;
    // faq: BusinessFAQ;
    this._ownerId = entry.ownerId;
    this._url = entry.url;
    this._phone = entry.phone;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get location(): BusinessLocation {
    return this._location;
  }

  get description(): string {
    return this._description;
  }
  set description(description: string) {
    this._description = this.description;
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
  public getFollowers(): Set<string> {
    return new Set(this._followers);
  }
  public isFollowedBy(userId: string): boolean {
    return this._followers.has(userId);
  }

  get tags(): Set<BusinessTags> {
    return new Set(this._tags);
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

  get ownerId(): string {
    return this._ownerId;
  }
  set ownerId(userId: string) {
    this._ownerId = userId;
  }
  public hasOwner(): boolean {
    if (this._ownerId) {
      return true;
    } else {
      return false;
    }
  }
  public isOwner(ownerId: string): boolean {
    return this._ownerId == ownerId;
  }

  get url(): string {
    return this._url;
  }
  set url(newUrl: string) {
    this._url = newUrl;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(newPhone: string) {
    this._phone = newPhone;
  }

  static generateExample(): Business {
    const BusinessEntry: BusinessEntry = {
      name: "Poppa's Workshop",
      location: new BusinessLocation('123 Seasame Street', 42.3736, 71.1097),
      description: 'Where the elbow grease is used.',
      businessId: uuidv4(),
      ratings: new BusinessRatings(),
      hours: new BusinessHours(),
      socialMedia: new BusinessSocialMedia('www.facebook.com', 'www.twitter.com'),
      tags: new Set([BusinessTags.DELIVERY]),
      // faq: BusinessFAQ;
      ownerId: uuidv4(),
      url: 'www.poppasworkshop.com',
      phone: '867-5309',
    };

    const exampleBusiness = new Business(BusinessEntry);

    // extra augmentations
    exampleBusiness.hours.setHours(Days.SATURDAY, 4, 4);
    exampleBusiness.addFollower('44');
    exampleBusiness.ratings.updateSafetyRating('22', 4);

    return exampleBusiness;
  }
}
