export default class BusinessSocialMedia {
  private _facebook?: string;
  private _twitter?: string;
  private _instagram?: string;

  constructor(facebook?: string, twitter?: string, instagram?: string) {
    this._facebook = facebook;
    this._twitter = twitter;
    this._instagram = instagram;
  }

  public getSocialUrls(): { facebook: string | undefined; twitter: string | undefined; instagram: string | undefined } {
    return {
      facebook: this._facebook,
      twitter: this._twitter,
      instagram: this._instagram,
    };
  }

  set twitter(twitter: string) {
    this._twitter = twitter;
  }

  set facebook(facebook: string) {
    this._facebook = facebook;
  }

  set instagram(instagram: string) {
    this._instagram = instagram;
  }
}
