export default class BusinessPosition {
  private address: string;
  private lat: number;
  private lng: number;

  constructor(address: string, lat: number, lng: number) {
    this.address = address;
    this.lat = lat;
    this.lng = lng;
  }

  getAddress(): string {
    return this.address;
  }
  setAddress(address: string) {
    this.address = address;
  }

  setLng(lng: number) {
    this.lng = lng;
  }
  getLng(): number {
    return this.lng;
  }

  setLat(lat: number) {
    this.lat = lat;
  }
  getLat(): number {
    return this.lat;
  }
}
