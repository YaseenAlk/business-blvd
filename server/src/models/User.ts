import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import Business from './business/Business';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id!: string;

  @Column({ name: 'email' })
  _email: string;

  @Column({ name: 'username' })
  _username: string;

  @Column({ name: 'password' })
  _password: string;

  // TODO: make this a column (one-to-many? many-to-many?) once business class has entity definition
  private _following: Set<Business>;

  constructor(email: string, username: string, password: string, following?: Business[] | Set<Business>) {
    super();
    this.id = uuidv4();
    this._email = email;
    this._username = username;
    this._password = password;
    this._following = new Set(following);
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
