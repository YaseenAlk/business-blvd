import Socials, { Platforms } from '../../models/business/Socials';
import BusinessRepository from './BusinessRepository';

class SocialsRepository {
  generateExamples(): Promise<Socials> {
    const exampleSocials: Platforms = {
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
      instagram: 'https://www.instagram.com',
    };

    const [b1, b2] = BusinessRepository.getExampleBusinessIDs();
    const s1 = new Socials(b1, exampleSocials);
    const s2 = new Socials(b2, exampleSocials);

    return Socials.findOne({ businessId: b1 }).then((socials) => {
      if (!socials)
        return s1.save().then(() => {
          return s2.save();
        });
      else return socials;
    });
  }

  // getters
  findSocialsById(businessId: string): Promise<Platforms | undefined> {
    return Socials.findOne({ businessId }).then((socials) => {
      return socials?.getSocialURLs();
    });
  }

  // setters
  updateFacebook(businessId: string, facebookURL: string): Promise<Platforms | undefined> {
    return Socials.findOne({ businessId }).then((socials) => {
      if (socials) socials.facebook = facebookURL;
      return socials?.save().then((socials) => socials.getSocialURLs());
    });
  }

  updateTwitter(businessId: string, twitterURL: string): Promise<Platforms | undefined> {
    return Socials.findOne({ businessId }).then((socials) => {
      if (socials) socials.twitter = twitterURL;
      return socials?.save().then((socials) => socials.getSocialURLs());
    });
  }

  updateInstagram(businessId: string, instagramURL: string): Promise<Platforms | undefined> {
    return Socials.findOne({ businessId }).then((socials) => {
      if (socials) socials.instagram = instagramURL;
      return socials?.save().then((socials) => socials.getSocialURLs());
    });
  }
}

export = new SocialsRepository();
