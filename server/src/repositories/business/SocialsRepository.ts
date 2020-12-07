import Socials, { Platforms } from '../../models/business/Socials';

class SocialsRepository {
  generateExample(businessId: string, facebook: string, twitter: string, instagram: string) {
    const exampleSocials: Platforms = {
      facebook: facebook,
      twitter: twitter,
      instagram: instagram,
    };

    const socials = new Socials(businessId, exampleSocials);
    return socials.save();
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
