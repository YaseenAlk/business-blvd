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