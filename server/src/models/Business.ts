import { v4 as uuidv4 } from 'uuid';

class Location {
    private _address: string;
    private _coordinates: number[] | undefined;

    constructor(address: string, coordinates?: number[]) {
        this._address = address;
        this._coordinates = coordinates || undefined;
    }

    public getAddress(): string {
        return this._address;
    } 
    public setAddress(address: string) {
        this._address = address;
    } 

    public setCoordinates(coordinates: number[]) {
        this._coordinates = coordinates;
    }
    public getCoordinates(): number[] | undefined {
        return this._coordinates;
    }
}

enum BusinessTags {
    DELIVERY,
    PICKUP
  }

class BusinessRatings {
    private _serviceRatingsMap: Map<string, number>;
    private _safetyRatingsMap: Map<string, number>;

    constructor(serviceRatingsMap: Map<string, number>, safetyRatingsMap: Map<string, number>) {
        this._serviceRatingsMap = serviceRatingsMap;
        this._safetyRatingsMap = safetyRatingsMap;
    }

    public updateServiceRating(customerId: string, rating: number) {
        this._serviceRatingsMap.set(customerId, rating);
    }
    public getCustomerServiceRating(customerId: string): number | undefined {
        return this._serviceRatingsMap.get(customerId);
    }

    public updateSafetyeRating(customerId: string, rating: number) {
        this._safetyRatingsMap.set(customerId, rating);
    }
    public getSafetyServiceRating(customerId: string): number | undefined {
        return this._safetyRatingsMap.get(customerId);
    }
}

class BusinessSocialMedia {
    private _facebook: string | undefined;
    private _twitter: string | undefined;
    private _instagram: string |undefined;

    constructor(facebook?: string, twitter?: string, instagram?: string) {
        this._facebook = facebook;
        this._twitter = twitter;
        this._instagram = instagram;
    }

    public getSocialUrls(): object {
        return {
            "facebook": this._facebook,
            "twitter": this._twitter,
            "instagram": this._instagram
        }
    }

    public updateTwitter(twitter: string) {
        this._twitter = twitter;
    }

    public updateFacebook(facebook: string) {
        this._facebook = facebook;
    }

    public updateInstagram(instagram: string) {
        this._instagram = instagram;
    }
}

class Question {
    private _customerId: string;
    private _questionId: string;
    private _questionText: string;
    private _answered: boolean;
    private _answerText: string | undefined;

    constructor(customerId: string, questionText: string, answered: boolean, answerText?: string, questionId?: string) {
        this._customerId = customerId;
        this._questionId = questionId || uuidv4();
        this._questionText = questionText;
        this._answered = answered;
        this._answerText = answerText;
    }
    
    public getQuestion(): object {
        return {
            customerId: this._customerId,
            questionId: this._questionId,
            questionText: this._questionText,
            answered: this._answered,
            answerText: this._answerText
        }
    }

    public answerQuestion(answer: string) {
        this._answerText = answer;
        this._answered = true;
    }
}

class BusinessFAQ {
    private _privateFAQMap: Map<string, Question>;
    private _publicFAQMap: Map<string, Question>;

    constructor( privateFAQMap: Map<string, Question>, publicFAQMap: Map<string, Question>) {
        this._privateFAQMap = privateFAQMap;
        this._publicFAQMap = publicFAQMap;
    }

    public getPrivateFAQ() {
        return this._privateFAQMap;
    }

    public getPublicFAQ() {
        return this._publicFAQMap;
    }

    public setQuestionPublic(questionId: string) {
        if (this._privateFAQMap.has(questionId)) {
            const questionEntry = this._privateFAQMap.get(questionId)!;
            this._privateFAQMap.delete(questionId);
            this._publicFAQMap.set(questionId, questionEntry);
        }
        else {
            throw new Error('Question ID is not in the list of private questions');
        }
    }

    public setQuestionPrivate(questionId: string) {
        if (this._publicFAQMap.has(questionId)) {
            const questionEntry = this._publicFAQMap.get(questionId)!;
            this._publicFAQMap.delete(questionId);
            this._privateFAQMap.set(questionId, questionEntry);
        }
        else {
            throw new Error('Question ID is not in the list of public questions');
        }
    }
}

enum Days {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
  }

class BusinessHours {
    private _businessHours: Map<Days, Object>;

    constructor(businessHours: Map<Days, Object>) {
        this._businessHours = businessHours;
    }

    public setHours(day: Days, openTime: number, closeTime: number) {
        this._businessHours.set(day, {"open": openTime, "close": closeTime});
    }

    public getHours() {
        return this._businessHours;
    }
}

class Business {
    _name: string;
    _address: string;
    _description: string;
    _businessId: string;
    _ratings: BusinessRatings;
    _hours: BusinessHours;
    _socialMedia: BusinessSocialMedia;
    _tags: BusinessTags[];
    _faq: BusinessFAQ;
    _ownerId: string | undefined;
    _url: string | undefined;
    _phone: string | undefined;

    constructor(name: string,
        address: string,
        description: string,
        businessId?: string,
        ratings?: BusinessRatings,
        hours?: BusinessHours,
        socialMedia?: BusinessSocialMedia,
        tags?: BusinessTags[],
        faq?: BusinessFAQ,
        ownerId?: string | undefined,
        url?: string | undefined,
        phone?: string | undefined
        ) {


        // Will never be assigned null
            // mandatory parameters
        this._name = name;
        this._address = address;
            // optional parameters
        this._description = description || "";
        this._businessId = businessId || uuidv4();
        this._ratings = ratings || new BusinessRatings(new Map(), new Map());
        this._hours = hours || new BusinessHours(new Map());
        this._socialMedia = socialMedia || new BusinessSocialMedia();
        this._ratings = ratings || new BusinessRatings(new Map(), new Map());
        this._tags = tags || [];
        this._faq = faq || new BusinessFAQ(new Map(), new Map());

        // Can be assigned null
            // optional parameters
        this._ownerId = ownerId;
        this._url = url;
        this._phone = phone;
    }
}