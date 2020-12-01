type Socials = { facebook?: string; twitter?: string; instagram?: string };
// @Entity()
export default class BusinessSocialMedia {
  // @PrimaryColumn("uuid")
  businessId: string;

  // @Column({nullable: true})
  facebook?: string;

  // @Column({nullable: true})
  twitter?: string;

  // @Column({nullable: true})
  instagram?: string;

  constructor(businessId: string, socials: Socials) {
    this.businessId = businessId;
    this.facebook = socials.facebook;
    this.twitter = socials.twitter;
    this.instagram = socials.instagram;
  }

  public getSocialUrls(): Socials {
    return {
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram,
    };
  }
}
