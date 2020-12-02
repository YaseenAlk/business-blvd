import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class Position extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  businessId: string;

  @Column()
  address: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  constructor(businessId: string, address: string, lat: number, lng: number) {
    super();
    this.businessId = businessId;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
  }
}
