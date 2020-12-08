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

  @Column('text', { name: 'following', array: true })
  private _following: string[];

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
    this._following = Array.from(following || []);
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

  get following(): string[] {
    return Array.from(this._following);
  }

  get owned(): string[] {
    return Array.from(this._owned);
  }

  claimBusiness(businessId: string): void {
    this._owned.push(businessId);
  }

  unclaimBusiness(businessId: string): void {
    this._owned = this._owned.filter((id) => id !== businessId);
    //this._owned.delete(businessId);
  }

  followBusiness(business: string): void {
    if (!this._following.includes(business)) this._following.push(business);
  }

  unfollowBusiness(business: string): void {
    this._following = this._following.filter((businessFollowed) => businessFollowed !== business);
  }
}
