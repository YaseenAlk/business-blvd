export default class Location {
  private _address: string;
  private _lat: number;
  private _lng: number;

  constructor(address: string, lat: number, lng: number) {
    this._address = address;
    this._lat = lat;
    this._lng = lng;
  }

  get address(): string {
    return this._address;
  }
  set address(address: string) {
    this._address = address;
  }

  set lng(lng: number) {
    this._lng = lng;
  }
  get lng(): number {
    return this._lng;
  }

  set lat(lat: number) {
    this._lat = lat;
  }
  get lat(): number {
    return this._lat;
  }
}
