import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

export type Platforms = { facebook?: string; twitter?: string; instagram?: string };

@Entity()
export default class Socials extends BaseEntity {
  @PrimaryColumn('uuid')
  businessId: string;

  @Column({ nullable: true })
  facebook?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  instagram?: string;

  constructor(businessId: string, socials: Platforms) {
    super();
    this.businessId = businessId;
    this.facebook = socials.facebook;
    this.twitter = socials.twitter;
    this.instagram = socials.instagram;
  }

  public getSocialURLs(): Platforms {
    return {
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram,
    };
  }
}
