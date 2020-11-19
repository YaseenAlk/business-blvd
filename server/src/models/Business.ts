import { v4 as uuidv4 } from 'uuid';

class Location {
  private _address: string;
  private _lat?: number;
  private _lng?: number;

  constructor(address: string, lat?: number, lng?: number) {
    this._address = address;
    this._lat = lat;
    this._lng = lng;
  }

  public getAddress(): string {
    return this._address;
  }
  public setAddress(address: string) {
    this._address = address;
  }

  public setLng(lng: number) {
    this._lng = lng;
  }
  public getLng(): number | undefined {
    return this._lng;
  }

  public setLat(lat: number) {
    this._lat = lat;
  }
  public getLat(): number | undefined {
    return this._lat;
  }
}

enum BusinessTags {
  DELIVERY,
  PICKUP,
}

class BusinessRatings {
  private _serviceRatingsMap: Map<string, number> = new Map();
  private _safetyRatingsMap: Map<string, number> = new Map();

  //   constructor() {}

  static fromData(serviceRatingsMap: Map<string, number>, safetyRatingsMap: Map<string, number>) {
    const ratings = new BusinessRatings();
    ratings._serviceRatingsMap = new Map(serviceRatingsMap);
    ratings._safetyRatingsMap = new Map(safetyRatingsMap);
    return ratings;
  }

  public updateServiceRating(customerId: string, rating: number): void {
    this._serviceRatingsMap.set(customerId, rating);
  }
  public getCustomerServiceRating(customerId: string): number | undefined {
    return this._serviceRatingsMap.get(customerId);
  }

  public updateSafetyRating(customerId: string, rating: number): void {
    this._safetyRatingsMap.set(customerId, rating);
  }
  public getSafetyServiceRating(customerId: string): number | undefined {
    return this._safetyRatingsMap.get(customerId);
  }
}

class BusinessSocialMedia {
  private _facebook?: string;
  private _twitter?: string;
  private _instagram?: string;

  constructor(facebook?: string, twitter?: string, instagram?: string) {
    this._facebook = facebook;
    this._twitter = twitter;
    this._instagram = instagram;
  }

  public getSocialUrls(): { facebook: string | undefined; twitter: string | undefined; instagram: string | undefined } {
    return {
      facebook: this._facebook,
      twitter: this._twitter,
      instagram: this._instagram,
    };
  }

  set twitter(twitter: string) {
    this._twitter = twitter;
  }

  set facebook(facebook: string) {
    this._facebook = facebook;
  }

  set instagram(instagram: string) {
    this._instagram = instagram;
  }
}

// class Question {
//     private _customerId: string;
//     private _questionId: string;
//     private _questionText: string;
//     private _answered: boolean;
//     private _answerText: string | undefined;

//     constructor(customerId: string, questionText: string, answered: boolean, answerText?: string, questionId?: string) {
//         this._customerId = customerId;
//         this._questionId = questionId || uuidv4();
//         this._questionText = questionText;
//         this._answered = answered;
//         this._answerText = answerText;
//     }

//     public getQuestion(): object {
//         return {
//             customerId: this._customerId,
//             questionId: this._questionId,
//             questionText: this._questionText,
//             answered: this._answered,
//             answerText: this._answerText
//         }
//     }

//     public answerQuestion(answer: string) {
//         this._answerText = answer;
//         this._answered = true;
//     }
// }

// class BusinessFAQ {
//     private _privateFAQMap: Map<string, Question>;
//     private _publicFAQMap: Map<string, Question>;

//     constructor( privateFAQMap: Map<string, Question>, publicFAQMap: Map<string, Question>) {
//         this._privateFAQMap = privateFAQMap;
//         this._publicFAQMap = publicFAQMap;
//     }

//     public getPrivateFAQ() {
//         return this._privateFAQMap;
//     }

//     public getPublicFAQ() {
//         return this._publicFAQMap;
//     }

//     public setQuestionPublic(questionId: string) {
//         if (this._privateFAQMap.has(questionId)) {
//             const questionEntry = this._privateFAQMap.get(questionId)!;
//             this._privateFAQMap.delete(questionId);
//             this._publicFAQMap.set(questionId, questionEntry);
//         }
//         else {
//             throw new Error('Question ID is not in the list of private questions');
//         }
//     }

//     public setQuestionPrivate(questionId: string) {
//         if (this._publicFAQMap.has(questionId)) {
//             const questionEntry = this._publicFAQMap.get(questionId)!;
//             this._publicFAQMap.delete(questionId);
//             this._privateFAQMap.set(questionId, questionEntry);
//         }
//         else {
//             throw new Error('Question ID is not in the list of public questions');
//         }
//     }
// }

enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

class BusinessHours {
  private _businessHours: Map<Days, { open: number; close: number }> = new Map();

  //   constructor() {}

  static fromData(businessHours: Map<Days, { open: number; close: number }>): BusinessHours {
    const hours = new BusinessHours();
    hours._businessHours = businessHours;
    return hours;
  }

  public setHours(day: Days, openTime: number, closeTime: number): void {
    this._businessHours.set(day, { open: openTime, close: closeTime });
  }

  public getHours(): Map<Days, { open: number; close: number }> {
    return new Map(this._businessHours);
  }
}

// interface BusinessDBEntry {
//   name: string;
//   location: Location;
//   description: string;
//   businessId: string;
//   ratings: BusinessRatings;
//   hours: BusinessHours;
//   socialMedia: BusinessSocialMedia;
//   tags: BusinessTags[];
//   // _faq: BusinessFAQ;
//   ownerId: string;
//   url: string;
//   phone: string;
// }

// interface Business extends BusinessDBEntry { }

export default class Business {
  name: string;
  location: Location;
  description: string;
  businessId: string;
  ratings: BusinessRatings;
  hours: BusinessHours;
  socialMedia: BusinessSocialMedia;
  followers: Set<Object> = new Set();
  tags: BusinessTags[];
  // _faq: BusinessFAQ;
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
    // _faq: BusinessFAQ,
    ownerId: string;
    url: string;
    phone: string;
  }) {
    this.name = entry.name;
    this.location = entry.location;
    this.description = entry.description;
    this.businessId = entry.businessId;
    this.ratings = entry.ratings;
    this.hours = entry.hours;
    this.socialMedia = entry.socialMedia;
    this.tags = entry.tags;
    // _faq: BusinessFAQ;
    this.ownerId = entry.ownerId;
    this.url = entry.url;
    this.phone = entry.phone;
  }

  public addFollower(id: string) {
    this.followers.add(id);
  }

  public removeFollower(id: string) {
    this.followers.delete(id);
  }

  public getFollowers() {
    return new Set(this.followers);
  }

  static generateNew(): Business {
    const businessProps = {
      name: "Poppa's Workshop",
      location: new Location('123 Seasame Street'),
      description: 'Where the elbow grease is used.',
      businessId: uuidv4(),
      ratings: new BusinessRatings(),
      hours: new BusinessHours(),
      socialMedia: new BusinessSocialMedia(),
      tags: [], //helpful
      // _faq: BusinessFAQ;
      ownerId: uuidv4(),
      url: 'www.poppasworkshop.com',
      phone: '867-5309',
    };

    return new Business(businessProps);
  }
}

// const businessProps = {
//   name: "Poppa's Workshop",
//   location: new Location('123 Seasame Street'),
//   description: 'Where the elbow grease is used.',
//   businessId: uuidv4(),
//   ratings: new BusinessRatings(),
//   hours: new BusinessHours(),
//   socialMedia: new BusinessSocialMedia(),
//   tags: [], //helpful
//   // _faq: BusinessFAQ;
//   ownerId: uuidv4(),
//   url: 'www.poppasworkshop.com',
//   phone: '867-5309',
// };

// const business = new Business(businessProps);

// business.description = 'new description';
// business.hours.setHours(Days.FRIDAY, 11, 5);
// console.log(business);