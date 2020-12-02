import Socials from '../../models/business/Socials';
import BusinessRepository from './BusinessRepository';

class SocialsRepository {
  private data: Socials[] = [];

  constructor() {
    const exampleSocials = {
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
      instagram: 'https://www.instagram.com',
    };

    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    this.data.push(new Socials(b1, exampleSocials));
    this.data.push(new Socials(b2, exampleSocials));
  }

  findSocialsById(businessId: string): { facebook?: string; twitter?: string; instagram?: string } | undefined {
    return this.data.filter((socials) => socials.businessId === businessId)[0]?.getSocialURLs();
  }

  updateFacebook(businessId: string, facebookURL: string): void {
    const socials = this.data.filter((socials) => socials.businessId === businessId)[0];
    if (socials) socials.facebook = facebookURL;
    // await socials.save();
  }

  updateTwitter(businessId: string, twitterURL: string): void {
    const socials = this.data.filter((socials) => socials.businessId === businessId)[0];
    if (socials) socials.twitter = twitterURL;
    // await socials.save();
  }

  updateInstagram(businessId: string, instagramURL: string): void {
    const socials = this.data.filter((socials) => socials.businessId === businessId)[0];
    if (socials) socials.instagram = instagramURL;
    // await socials.save();
  }
}

export = new SocialsRepository();
