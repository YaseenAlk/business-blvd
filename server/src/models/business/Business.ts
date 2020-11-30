import { v4 as uuidv4 } from 'uuid';

import BusinessPosition from './BusinessPosition';
import { BusinessTags } from './BusinessTags';
import BusinessRatings from './BusinessRatings';
import BusinessSocialMedia from './BusinessSocialMedia';
import { Days, BusinessHours } from './BusinessHours';
import { Inquiry } from '../Inquiry';

interface BusinessJSON {
  name: string;
  position: BusinessPosition;
  description: string;
  businessId: string;
  ratings: BusinessRatings;
  hours: BusinessHours;
  socialMedia: BusinessSocialMedia;
  followers: string[];
  tags: BusinessTags[];
  inquiries: Inquiry[];
  ownerId: string;
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
  private _inquiries: Inquiry[];
  private _ownerId: string;
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
    this._inquiries = Array.from(entry.inquiries);
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

  get inquiries(): Inquiry[] {
    return Array.from(this._inquiries);
  }

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
      inquiries: Array.from(this._inquiries),
      ownerId: this._ownerId,
      internalURL: this._internalURL,
      externalURL: this._externalURL,
      phone: this._phone,
    };
  }

  static generateExample(): Business {
    const businessId = uuidv4();
    const inquiry = new Inquiry(
      uuidv4(),
      uuidv4(),
      businessId,
      'Are you open?',
      'public',
      'Yes we are. Buy something please.',
    );

    const businessJSON: BusinessJSON = {
      name: "Poppa's Workshop",
      position: new BusinessPosition('123 Seasame Street', 42.362541, -71.09845),
      description: 'Where the elbow grease is used.',
      businessId: businessId,
      ratings: new BusinessRatings(),
      hours: new BusinessHours(),
      socialMedia: new BusinessSocialMedia(
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.instagram.com',
      ),
      tags: [BusinessTags.DELIVERY],
      inquiries: [inquiry, inquiry, inquiry],
      ownerId: uuidv4(),
      followers: ['33', '13'],
      internalURL: 'business/' + businessId,
      externalURL: 'https://www.poppasworkshop.com',
      phone: '867-5309',
    };

    const exampleBusiness = new Business(businessJSON);

    // extra augmentations
    exampleBusiness.hours.setHours(Days.SUNDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' });
    exampleBusiness.hours.setHours(Days.MONDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.TUESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.WEDNESDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.FRIDAY, { hour: '08', minute: '30' }, { hour: '20', minute: '00' });
    exampleBusiness.hours.setHours(Days.SATURDAY, { hour: '12', minute: '00' }, { hour: '18', minute: '00' });

    exampleBusiness.ratings.updateSafetyRating('22', 4);
    exampleBusiness.ratings.updateSafetyRating('13', 4);
    exampleBusiness.ratings.updateServiceRating('22', 5);
    exampleBusiness.ratings.updateServiceRating('12', 5);

    return exampleBusiness;
  }
}
