import BusinessSocialMedia from '../../models/business/Socials';

class SocialsRepository {
  private data: BusinessSocialMedia[] = [];

  findSocialsById(businessId: string): { facebook?: string; twitter?: string; instagram?: string } {
    return this.data.filter((socials) => socials.businessId === businessId)[0].getSocialUrls();
  }

  updateFacebook(businessId: string, facebookURL: string): void {
    const socials = this.data.filter((socials) => socials.businessId === businessId)[0];
    socials.facebook = facebookURL;
    // await socials.save();
  }

  updateTwitter(businessId: string, twitterURL: string): void {
    const socials = this.data.filter((socials) => socials.businessId === businessId)[0];
    socials.twitter = twitterURL;
    // await socials.save();
  }

  updateInstagram(businessId: string, instagramURL: string): void {
    const socials = this.data.filter((socials) => socials.businessId === businessId)[0];
    socials.instagram = instagramURL;
    // await socials.save();
  }
}

export = new SocialsRepository();
