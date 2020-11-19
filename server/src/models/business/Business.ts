import { v4 as uuidv4 } from 'uuid';

import Location from './Location';
import { BusinessTags } from './BusinessTags';
import BusinessRatings from './BusinessRatings';
import BusinessSocialMedia from './BusinessSocialMedia';
import { Days, BusinessHours } from './BusinessHours';

export default class Business {
  private _name: string;
  private _location: Location;
  description: string;
  businessId: string;
  ratings: BusinessRatings;
  hours: BusinessHours;
  socialMedia: BusinessSocialMedia;
  private followers: Set<string> = new Set();
  tags: BusinessTags[];
  // faq: BusinessFAQ;
  ownerId: string;
  url: string;
  phone: string;
  constructor(entry: {
    name: string;
    location: Location;
    description: string;
    businessId: string;
    ratings: BusinessRatings;
    hours: BusinessHours;
    socialMedia: BusinessSocialMedia;
    tags: BusinessTags[];
    // faq: BusinessFAQ,
    ownerId: string;
    url: string;
    phone: string;
  }) {
    this._name = entry.name;
    this._location = entry.location;
    this.description = entry.description;
    this.businessId = entry.businessId;
    this.ratings = entry.ratings;
    this.hours = entry.hours;
    this.socialMedia = entry.socialMedia;
    this.tags = entry.tags;
    // faq: BusinessFAQ;
    this.ownerId = entry.ownerId;
    this.url = entry.url;
    this.phone = entry.phone;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get location(): Location {
    return this._location;
  }

  public addFollower(id: string): void {
    this.followers.add(id);
  }

  public removeFollower(id: string): void {
    this.followers.delete(id);
  }

  getFollowers(): Set<string> {
    return new Set(this.followers);
  }

  static generateExample(): Business {
    const businessProps = {
      name: "Poppa's Workshop",
      location: new Location('123 Seasame Street', 42.3736, 71.1097),
      description: 'Where the elbow grease is used.',
      businessId: uuidv4(),
      ratings: new BusinessRatings(),
      hours: new BusinessHours(),
      socialMedia: new BusinessSocialMedia('www.facebook.com', 'www.twitter.com'),
      tags: [BusinessTags.DELIVERY],
      // faq: BusinessFAQ;
      ownerId: uuidv4(),
      url: 'www.poppasworkshop.com',
      phone: '867-5309',
    };

    const exampleBusiness = new Business(businessProps);

    // extra additions
    exampleBusiness.hours.setHours(Days.SATURDAY, 4, 4);
    exampleBusiness.addFollower('44');
    exampleBusiness.ratings.updateSafetyRating('22', 4);

    return exampleBusiness;
  }
}
