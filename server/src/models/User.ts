import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

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

  @Column('text', { name: 'owned', array: true })
  _owned: string[];

  // TODO: make this a column (one-to-many? many-to-many?) once business class has entity definition
  private _following: Set<string>;

  constructor(
    email: string,
    username: string,
    password: string,
    following?: string[] | Set<string>,
    owned?: Set<string>,
  ) {
    super();
    this.id = uuidv4();
    this._email = email;
    this._username = username;
    this._password = password;
    this._following = new Set(following);
    this._owned = Array.from(owned || []);
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

  get following(): Set<string> {
    return new Set(this._following);
  }

  get owned(): string[] {
    return this._owned;
  }

  claimBusiness(businessId: string): void {
    this._owned.push(businessId);
  }

  unclaimBusiness(businessId: string): void {
    this._owned = this._owned.filter((id) => id !== businessId);
    //this._owned.delete(businessId);
  }

  followBusiness(business: string): void {
    this._following.add(business);
  }

  unfollowBusiness(business: string): boolean {
    return this._following.delete(business);
  }
}
