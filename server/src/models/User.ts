/*
User:

    - string id (uuid)
    - string email
    - string username
    - string Password
    - Business[] following
*/

import Business from './business/Business';

export class User {
  private _id: string;
  private _email: string;
  private _username: string;
  private _password: string;
  private _following: Set<Business>;

  constructor(id: string, email: string, username: string, password: string, following?: Business[] | Set<Business>) {
    this._id = id;
    this._email = email;
    this._username = username;
    this._password = password;
    this._following = new Set(following);
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get following(): Set<Business> {
    return new Set(this._following);
  }

  followBusiness(business: Business): void {
    this._following.add(business);
  }

  unfollowBusiness(business: Business): void {
    this._following.add(business);
  }
}
