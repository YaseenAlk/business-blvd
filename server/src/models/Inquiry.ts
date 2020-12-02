/*
Inquiry:

    - int id
    - int authorId
    - int businessId
    - string question
    - string? answer  
*/

export enum Publicity {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

// @Entity()
export class Inquiry {
  // @PrimaryColumn("uuid")
  private _id: string;

  // @Column("uuid")
  private _authorId: string;

  // @Column("uuid")
  private _businessId: string;

  // @Column()
  private _question: string;

  // @Column()
  private _publicity: Publicity;

  // @Column({ type: "enum", enum: Publicity, default: Publicity.PRIVATE })
  private _answer?: string;

  constructor(
    id: string,
    authorId: string,
    businessId: string,
    question: string,
    publicity?: Publicity,
    answer?: string,
  ) {
    this._id = id;
    this._authorId = authorId;
    this._businessId = businessId;
    this._question = question;
    this._publicity = publicity || Publicity.PRIVATE;
    if (answer) this._answer = answer;
  }

  get id(): string {
    return this._id;
  }

  get authorId(): string {
    return this._authorId;
  }

  get businessId(): string {
    return this._businessId;
  }

  get question(): string {
    return this._question;
  }
  set question(newQuestion: string) {
    this._question = newQuestion;
  }

  get publicity(): Publicity {
    return this._publicity;
  }
  set publicity(newPublicity: Publicity) {
    this._publicity = newPublicity;
  }

  get answer(): string | undefined {
    return this._answer;
  }
  set answer(newAnswer: string | undefined) {
    this._answer = newAnswer;
  }
}
