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