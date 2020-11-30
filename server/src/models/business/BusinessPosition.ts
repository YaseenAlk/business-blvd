//import { Entity, PrimaryColumn, Column } from 'typeorm';

//@Entity()
export default class BusinessPosition {
  //@PrimaryColumn({ type: 'uuid' })
  businessId: string;

  //@Column()
  address: string;

  //@Column()
  lat: number;

  //@Column()
  lng: number;

  constructor(businessId: string, address: string, lat: number, lng: number) {
    this.businessId = businessId;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
  }
}
