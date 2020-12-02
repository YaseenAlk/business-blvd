import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export default class Position extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  businessId: string;

  @Column()
  address: string;

  @Column('decimal')
  lat: number;

  @Column('decimal')
  lng: number;

  constructor(businessId?: string, address?: string, lat?: number, lng?: number) {
    super();
    this.businessId = businessId || uuidv4();
    this.address = address || '';
    this.lat = lat || 0;
    this.lng = lng || 0;
  }
}
