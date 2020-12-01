/*
Inquiry:

    - int id
    - int authorId
    - int businessId
    - string question
    - string? answer  
*/

export enum Publicity {
  PUBLIC,
  PRIVATE,
}

// @Entity()
export class Inquiry {
  // @PrimaryColumn("uuid")
  private _id: string;

  // @Column()
  private _authorId: string;

  // @Column()
  private _businessId: string;

  // @Column()
  private _question: string;

  // @Column()
  private _privacy: Publicity;

  // @Column({ type: "enum", enum: Publicity, default: Publicity.PRIVATE })
  private _answer?: string;

  constructor(
    id: string,
    authorId: string,
    businessId: string,
    question: string,
    privacy?: Publicity,
    answer?: string,
  ) {
    this._id = id;
    this._authorId = authorId;
    this._businessId = businessId;
    this._question = question;
    this._privacy = privacy || Publicity.PRIVATE;
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

  get privacy(): Publicity {
    return this._privacy;
  }
  set privacy(newPrivacy: Publicity) {
    this._privacy = newPrivacy;
  }

  get answer(): string | undefined {
    return this._answer;
  }
  set answer(newAnswer: string | undefined) {
    this._answer = newAnswer;
  }
}
